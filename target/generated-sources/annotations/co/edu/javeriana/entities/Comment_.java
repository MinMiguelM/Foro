package co.edu.javeriana.entities;

import co.edu.javeriana.entities.Comment;
import co.edu.javeriana.entities.Topic;
import co.edu.javeriana.entities.Users;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2017-03-20T17:58:27")
@StaticMetamodel(Comment.class)
public class Comment_ { 

    public static volatile SingularAttribute<Comment, Date> date;
    public static volatile ListAttribute<Comment, Comment> commentList;
    public static volatile SingularAttribute<Comment, Users> idUser;
    public static volatile SingularAttribute<Comment, Comment> parent;
    public static volatile SingularAttribute<Comment, Boolean> approved;
    public static volatile ListAttribute<Comment, Users> usersList;
    public static volatile SingularAttribute<Comment, Topic> idTopic;
    public static volatile SingularAttribute<Comment, Integer> id;
    public static volatile SingularAttribute<Comment, String> content;
    public static volatile SingularAttribute<Comment, Integer> points;

}