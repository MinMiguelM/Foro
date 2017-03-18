package co.edu.javeriana.entities;

import co.edu.javeriana.entities.Topic;
import co.edu.javeriana.entities.Users;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2017-03-17T23:15:09")
@StaticMetamodel(Forum.class)
public class Forum_ { 

    public static volatile ListAttribute<Forum, Users> usersList;
    public static volatile SingularAttribute<Forum, Integer> id;
    public static volatile SingularAttribute<Forum, String> title;
    public static volatile SingularAttribute<Forum, Boolean> moderate;
    public static volatile ListAttribute<Forum, Topic> topicList;

}