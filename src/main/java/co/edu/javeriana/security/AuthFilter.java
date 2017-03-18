/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.javeriana.security;

import co.edu.javeriana.entities.Users;
import com.sun.security.auth.UserPrincipal;
import java.io.IOException;
import java.security.Principal;
import java.util.Arrays;
import javax.annotation.Priority;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.ext.Provider;

/**
 *
 * See http://stackoverflow.com/a/19789140
 */
@Provider
@Priority(Priorities.AUTHENTICATION)
public class AuthFilter implements ContainerRequestFilter {

    @Context
    HttpServletRequest req;

    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        final HttpSession session = req.getSession();

        requestContext.setSecurityContext(new SecurityContext() {
            @Override
            public Principal getUserPrincipal() {
                Users user = (Users) session.getAttribute("USER");
                
                if (user != null) {
                    return new UserPrincipal(user.getUsername());
                } else {
                    return null;
                }
            }

            @Override
            public boolean isUserInRole(String role) {
                Users user = (Users) session.getAttribute("USER");
                if (user != null) {
                    System.err.println("*** User: " + user.getUsername() + " " + user.getRole());
                    System.err.println(Arrays.toString(Thread.currentThread().getStackTrace()));
                }
                if (user != null) {
                    return user.getRole().equals(role);
                }
                return false;
            }

            @Override
            public boolean isSecure() {
                return false;
            }

            @Override
            public String getAuthenticationScheme() {
                return null;
            }
        });
    }
}
