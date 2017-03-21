package co.edu.javeriana.entities;

import co.edu.javeriana.entities.Comment;
import co.edu.javeriana.entities.Forum;
import co.edu.javeriana.entities.Users;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2017-03-20T20:25:27")
@StaticMetamodel(Topic.class)
public class Topic_ { 

    public static volatile SingularAttribute<Topic, Date> date;
    public static volatile SingularAttribute<Topic, Users> idUser;
    public static volatile ListAttribute<Topic, Comment> commentList;
    public static volatile SingularAttribute<Topic, Boolean> approved;
    public static volatile ListAttribute<Topic, Users> usersList;
    public static volatile SingularAttribute<Topic, Forum> idForum;
    public static volatile SingularAttribute<Topic, Integer> id;
    public static volatile SingularAttribute<Topic, String> title;
    public static volatile SingularAttribute<Topic, String> content;
    public static volatile SingularAttribute<Topic, Integer> points;

}