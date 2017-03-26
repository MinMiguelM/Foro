/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.javeriana.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import org.eclipse.persistence.annotations.CascadeOnDelete;

/**
 *
 * @author miguel
 */
@Entity
@Table(name = "TOPIC")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Topic.findAll", query = "SELECT t FROM Topic t")
    , @NamedQuery(name = "Topic.findById", query = "SELECT t FROM Topic t WHERE t.id = :id")
    , @NamedQuery(name = "Topic.findByTitle", query = "SELECT t FROM Topic t WHERE t.title = :title")
    , @NamedQuery(name = "Topic.findByPoints", query = "SELECT t FROM Topic t WHERE t.points = :points")
    , @NamedQuery(name = "Topic.findByContent", query = "SELECT t FROM Topic t WHERE t.content = :content")
    , @NamedQuery(name = "Topic.findByDate", query = "SELECT t FROM Topic t WHERE t.date = :date")})
public class Topic implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "ID")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "TITLE")
    private String title;
    @Column(name = "POINTS")
    private Integer points;
    @Column(name = "APPROVED")
    private Boolean approved;
    @Size(max = 300)
    @Column(name = "CONTENT")
    private String content;
    @Column(name = "DATE")
    @Temporal(TemporalType.DATE)
    private Date date;
    @JoinTable(name = "POINTS_TOPIC", joinColumns = {
        @JoinColumn(name = "ID_TOPIC", referencedColumnName = "ID")}, inverseJoinColumns = {
        @JoinColumn(name = "ID_USER", referencedColumnName = "ID")})
    @ManyToMany(cascade = CascadeType.REMOVE)
    private List<Users> usersList;
    @JoinColumn(name = "ID_FORUM", referencedColumnName = "ID")
    @ManyToOne
    private Forum idForum;
    @JoinColumn(name = "ID_USER", referencedColumnName = "ID")
    @ManyToOne
    private Users idUser;
    @OneToMany(mappedBy = "idTopic",cascade = CascadeType.REMOVE)
    //@CascadeOnDelete
    private List<Comment> commentList;
    
    private Integer userId;
    private String username;
    private Integer forumId;

    public Topic() {
    }

    public Integer getForumId() {
        return forumId;
    }

    public void setForumId(Integer forumID) {
        this.forumId = forumID;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Topic(Integer id) {
        this.id = id;
    }

    public Topic(Integer id, String title) {
        this.id = id;
        this.title = title;
    }

    public Boolean getApproved() {
        return approved;
    }

    public void setApproved(Boolean approved) {
        this.approved = approved;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @XmlTransient
    public List<Users> getUsersList() {
        return usersList;
    }

    public void setUsersList(List<Users> usersList) {
        this.usersList = usersList;
    }

    @XmlTransient
    public Forum getIdForum() {
        return idForum;
    }

    public void setIdForum(Forum idForum) {
        this.idForum = idForum;
    }

    @XmlTransient
    public Users getIdUser() {
        return idUser;
    }

    public void setIdUser(Users idUser) {
        this.idUser = idUser;
    }

    @XmlTransient
    public List<Comment> getCommentList() {
        return commentList;
    }

    public void setCommentList(List<Comment> commentList) {
        this.commentList = commentList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Topic)) {
            return false;
        }
        Topic other = (Topic) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "co.edu.javeriana.entities.Topic[ id=" + id + " ]";
    }
    
}
