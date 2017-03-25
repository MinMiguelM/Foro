package co.edu.javeriana.entities;

import co.edu.javeriana.entities.Users;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2017-03-25T10:05:06")
@StaticMetamodel(Role.class)
public class Role_ { 

    public static volatile ListAttribute<Role, Users> usersList;
    public static volatile SingularAttribute<Role, String> name;
    public static volatile SingularAttribute<Role, Integer> id;

}