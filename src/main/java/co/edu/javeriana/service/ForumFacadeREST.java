/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.javeriana.service;

import co.edu.javeriana.entities.Forum;
import co.edu.javeriana.entities.Topic;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import javax.ejb.Stateless;
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
@Path("forum")
public class ForumFacadeREST extends AbstractFacade<Forum> {

    @PersistenceContext(unitName = "co.edu.javeriana_ForumApp_war_1.0-SNAPSHOTPU")
    private EntityManager em;

    public ForumFacadeREST() {
        super(Forum.class);
    }

    @POST
    @Override
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Transactional
    public void create(Forum entity) {
        super.create(entity);
    }

    @PUT
    @Path("{id}")
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public void edit(@PathParam("id") Integer id, Forum entity) {
        super.edit(entity);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Integer id) {
        super.remove(super.find(id));
    }

    /*@GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Forum find(@PathParam("id") Integer id) {
        return super.find(id);
    }*/
    
    // TODO: mejorar esto
    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Topic> find(@PathParam("id") Integer id) {
        TopicFacadeREST topicService = new TopicFacadeREST(this.getEntityManager());
        List<Topic> topics = topicService.findAll();
        List<Topic> topicsOfForum = new ArrayList<>();
        for (Topic t : topics) {
            if (t.getIdForum().getId().equals(id)) {
                if(t.getIdForum().getModerate() && t.getApproved())
                    topicsOfForum.add(t);
                else if(!t.getIdForum().getModerate())
                    topicsOfForum.add(t);
            }
        }
        topicsOfForum.sort(new Comparator<Topic>(){
            @Override
            public int compare(Topic o1, Topic o2) {
                return o2.getPoints()-o1.getPoints();
            }
            
        });
        return topicsOfForum;
    }
    
    @GET
    @Path("{id}/unapproved")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Topic> findUnapproved(@PathParam("id") Integer id){
        TopicFacadeREST topicService = new TopicFacadeREST(this.getEntityManager());
        List<Topic> topics = topicService.findAll();
        List<Topic> topicsOfForum = new ArrayList<>();
        for (Topic t : topics) {
            if (t.getIdForum().getId().equals(id) && !t.getApproved()) {
                topicsOfForum.add(t);
            }
        }
        return topicsOfForum;
    }

    @GET
    @Override
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Forum> findAll() {
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Forum> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
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
