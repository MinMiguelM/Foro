/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.javeriana.service;

import co.edu.javeriana.entities.Users;
import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import org.mindrot.jbcrypt.BCrypt;

/**
 *
 * @author miguel
 */
@Path("auth")
public class AuthService {

    @Context
    private UriInfo context;

    @Context
    HttpServletRequest req;

    @Inject
    UsersFacadeREST userStore;

    @POST
    @Path("login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Users login(Users loginCredentials) {
        Users user = userStore.findByName(loginCredentials.getUsername());
        
        // TODO: cambiar el if por la siguiente linea. Se debe guardar la contraseña hashed en el userStore y en la DB
        //if ( user != null && BCrypt.checkpw(loginCredentials.getPassword(), user.getPassword()) )
        if (user != null && loginCredentials.getPassword().equals(user.getPassword())) {
            HttpSession session = req.getSession();
            session.setAttribute("USER", user);
            return user;
        } else {
            logout();
            throw new WebApplicationException(Response.Status.UNAUTHORIZED);
        }
    }

    @GET
    @Path("logout")
    @Produces(MediaType.TEXT_PLAIN)
    public String logout() {
        HttpSession session = req.getSession();
        session.removeAttribute("USER");
        return "Logged out";
    }
    
    @GET
    @Path("logged-username")
    @Produces(MediaType.TEXT_PLAIN)
    public String loggedUsername() {
        HttpSession session = req.getSession();
        final Users user = (Users) session.getAttribute("USER");
        return user.getUsername();
    }
}