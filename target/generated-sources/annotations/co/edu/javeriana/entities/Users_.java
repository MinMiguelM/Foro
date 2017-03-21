package co.edu.javeriana.entities;

import co.edu.javeriana.entities.Comment;
import co.edu.javeriana.entities.Forum;
import co.edu.javeriana.entities.Role;
import co.edu.javeriana.entities.Topic;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2017-03-20T23:55:21")
@StaticMetamodel(Users.class)
public class Users_ { 

    public static volatile ListAttribute<Users, Comment> commentList;
    public static volatile SingularAttribute<Users, String> password;
    public static volatile SingularAttribute<Users, Role> role;
    public static volatile ListAttribute<Users, Forum> forumList;
    public static volatile ListAttribute<Users, Topic> myTopics;
    public static volatile SingularAttribute<Users, Integer> id;
    public static volatile SingularAttribute<Users, String> username;
    public static volatile ListAttribute<Users, Topic> topicList;
    public static volatile ListAttribute<Users, Comment> commentList1;

}