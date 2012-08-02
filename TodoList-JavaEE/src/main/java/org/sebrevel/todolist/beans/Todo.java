package org.sebrevel.todolist.beans;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @author Sébastien Revel
 */
@Entity
@NamedQueries({
        @NamedQuery(name = Todo.FIND_ALL, query = "select t From Todo t")
})
public class Todo implements Serializable {

    // ======================================
    // =             Constants             =
    // ======================================
    public static final String FIND_ALL = "Todo.findAll";

    // ======================================
    // =             Attributes             =
    // ======================================
    @Id
    @GeneratedValue
    protected long id;

    protected String title;

    protected String detail;


    // ======================================
    // =            Constructors            =
    // ======================================

    public Todo() {
    }

    public Todo(String title, String detail) {
        this.title = title;
        this.detail = detail;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }
}