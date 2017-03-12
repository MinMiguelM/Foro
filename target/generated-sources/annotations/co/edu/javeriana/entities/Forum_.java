package co.edu.javeriana.entities;

import co.edu.javeriana.entities.Topic;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2017-03-11T22:58:27")
@StaticMetamodel(Forum.class)
public class Forum_ { 

    public static volatile SingularAttribute<Forum, Integer> id;
    public static volatile SingularAttribute<Forum, String> title;
    public static volatile SingularAttribute<Forum, Boolean> moderate;
    public static volatile ListAttribute<Forum, Topic> topicList;

}