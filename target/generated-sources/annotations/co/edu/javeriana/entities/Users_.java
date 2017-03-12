package co.edu.javeriana.entities;

import co.edu.javeriana.entities.Comment;
import co.edu.javeriana.entities.Role;
import co.edu.javeriana.entities.Topic;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2017-03-11T22:58:27")
@StaticMetamodel(Users.class)
public class Users_ { 

    public static volatile ListAttribute<Users, Comment> commentList;
    public static volatile ListAttribute<Users, Topic> topicList2;
    public static volatile ListAttribute<Users, Topic> topicList1;
    public static volatile SingularAttribute<Users, String> password;
    public static volatile SingularAttribute<Users, Role> role;
    public static volatile SingularAttribute<Users, Integer> id;
    public static volatile SingularAttribute<Users, String> username;
    public static volatile ListAttribute<Users, Topic> topicList;
    public static volatile ListAttribute<Users, Comment> commentList1;

}