/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.javeriana.service;

import co.edu.javeriana.entities.Comment;
import co.edu.javeriana.entities.Topic;
import java.util.List;
import javax.enterprise.context.RequestScoped;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
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
@Path("topic")
public class TopicFacadeREST extends AbstractFacade<Topic> {

    @PersistenceContext(unitName = "co.edu.javeriana_ForumApp_war_1.0-SNAPSHOTPU")
    private EntityManager em;

    public TopicFacadeREST() {
        super(Topic.class);
    }
    
    public TopicFacadeREST(EntityManager em) {
        super(Topic.class);
        this.em = em;
    }

    @POST
    @Override
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Transactional
    public void create(Topic entity) {
        System.out.println("co.edu.javeriana.service.TopicFacadeREST.create()------------------------------------------");
        super.create(entity);
    }

    @PUT
    @Path("{id}")
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Transactional
    public void edit(@PathParam("id") Integer id, Topic entity) {
        System.out.println("punto que tiene es "+entity.getPoints());
        super.edit(entity);
    }

    @DELETE
    @Path("{id}")
    @Transactional
    public void remove(@PathParam("id") Integer id) {
        super.remove(super.find(id));
    }

    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Topic find(@PathParam("id") Integer id) {
        return super.find(id);
    }
    
    @GET
    @Path("{id}/unapproved")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Comment> findUnapproved(@PathParam("id") Integer id) {
        List<Comment> results = em.createNamedQuery("Comment.findUnapprovedByTopic")
                                    .setParameter("topic", id)
                                    .getResultList();
        
        return results;
    }
    
    @PUT
    @Path("add-points/{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Transactional
    public void editPointsPlus(@PathParam("id") Integer id){
        Topic topic = super.find(id);
        topic.setPoints(topic.getPoints()+1);
        super.edit(topic);
    }
    
    @PUT
    @Path("remove-points/{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Transactional
    public void editPointsMinus(@PathParam("id") Integer id){
        Topic topic = super.find(id);
        topic.setPoints(topic.getPoints()-1);
        super.edit(topic);
    }

    @GET
    @Override
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Topic> findAll() {
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Topic> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
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
