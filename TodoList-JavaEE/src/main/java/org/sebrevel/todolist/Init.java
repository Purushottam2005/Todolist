package org.sebrevel.todolist;

import org.sebrevel.todolist.beans.Todo;
import org.sebrevel.todolist.service.TodoService;

import javax.annotation.PostConstruct;
import javax.annotation.sql.DataSourceDefinition;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.inject.Inject;

/**
 * Created with IntelliJ IDEA.
 * User: Sébastien Revel
 * Date: 07/06/12
 * Time: 16:31
 * To change this template use File | Settings | File Templates.
 */
@Startup
@Singleton(name = "Init")
@DataSourceDefinition(
        className = "org.apache.derby.jdbc.EmbeddedDataSource",
        name = "java:global/jdbc/todoDS",
        user = "app",
        password = "app",
        databaseName = "todoDB",
        properties = {"connectionAttributes=;create=true"}
)
public class Init {

    @Inject
    TodoService todoService;

    @PostConstruct
    private void dataInit() {

        Todo todo1 = new Todo("Courses", "Penser à faire les courses en rentrant !!");
        todoService.create(todo1);

        Todo todo2 = new Todo("Veille techno", "Faire un sample de Sencha Touch !!");
        todoService.create(todo2);

    }
 }
