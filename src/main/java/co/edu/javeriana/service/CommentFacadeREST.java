/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.javeriana.service;

import co.edu.javeriana.entities.Comment;
import co.edu.javeriana.entities.Forum;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import javax.enterprise.context.RequestScoped;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author miguel
 */
@RequestScoped
@Path("comment")
public class CommentFacadeREST extends AbstractFacade<Comment> {

    @PersistenceContext(unitName = "co.edu.javeriana_ForumApp_war_1.0-SNAPSHOTPU")
    private EntityManager em;

    public CommentFacadeREST() {
        super(Comment.class);
    }

    @POST
    @Override
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Transactional
    public void create(Comment entity) {
        if(entity.getIdParent() >= 0){
            Comment parent = (Comment) em.createNamedQuery("Comment.findById")
                    .setParameter("id", entity.getIdParent())
                    .getSingleResult();
            entity.setParent(parent);
            parent.getCommentList().add(entity);
        }
        super.create(entity);
    }

    @PUT
    @Path("{id}")
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Transactional
    public void edit(@PathParam("id") Integer id, Comment entity) {
        if(entity.getIdParent() != null && entity.getIdParent() >= 0){
            Comment parent = (Comment) em.createNamedQuery("Comment.findById")
                    .setParameter("id", entity.getIdParent())
                    .getSingleResult();
            entity.setParent(parent);
        }
        super.edit(entity);
    }
    
    @PUT
    @Path("add-points/{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Transactional
    public void editPointsPlus(@PathParam("id") Integer id){
        Comment comment = super.find(id);
        comment.setPoints(comment.getPoints()+1);
        super.edit(comment);
    }
    
    @PUT
    @Path("remove-points/{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Transactional
    public void editPointsMinus(@PathParam("id") Integer id){
        Comment comment = super.find(id);
        comment.setPoints(comment.getPoints()-1);
        super.edit(comment);
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public void remove(@PathParam("id") Integer id) {
        Comment comment = super.find(id);
        Comment parent = comment.getParent();
        if(parent != null){
            parent.getCommentList().remove(comment);
        }
        super.remove(super.find(id));
    }

    /*@GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Comment find(@PathParam("id") Integer id) {
        return super.find(id);
    }*/
    
    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Comment> findByTopic(@PathParam("id") Integer id) {
        List<Comment> results = em.createNamedQuery("Comment.findByTopic")
                                    .setParameter("topic", id)
                                    .getResultList();
        ForumFacadeREST facade = new ForumFacadeREST(this.getEntityManager());
        if(results != null && results.size() > 0){
            Forum forum = facade.findForum(results.get(0).getIdTopic().getForumId());
            if(!forum.getModerate()){
                results.sort(new Comparator<Comment>(){
                    @Override
                    public int compare(Comment o1, Comment o2) {
                        return o2.getPoints() - o1.getPoints();
                    }

                });
                return results;
            }
        }
        List<Comment> commentsApproved = new ArrayList<>();
        for (Comment result : results) {
            if(result.getApproved())
                commentsApproved.add(result);
        }
        commentsApproved.sort(new Comparator<Comment>(){
            @Override
            public int compare(Comment o1, Comment o2) {
                return o2.getPoints() - o1.getPoints();
            }
            
        });
        return commentsApproved;
    }
    
    @GET
    @Path("{id}/unapproved")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Comment> findUnapproved(@PathParam("id") Integer id){
        Query query = em.createNamedQuery("Comment.findUnapprovedByTopic");
        return (List<Comment>)query.setParameter("topic", id).getResultList();
        
    }

    @GET
    @Override
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Comment> findAll() {
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Comment> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
        return super.findRange(new int[]{from, to});
    }

    @GET
    @Path("count")
    @Produces(MediaType.TEXT_PLAIN)
    public String countREST() {
        return String.valueOf(super.count());
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
    
}
