package org.sebrevel.todolist.rest;

import org.sebrevel.todolist.beans.Todo;
import org.sebrevel.todolist.service.TodoService;

import javax.annotation.ManagedBean;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/todo")
@ManagedBean
public class TodoRestService {

    @Inject
    private TodoService todoService;

    @GET
    @Produces({MediaType.APPLICATION_JSON})
    @Path("{id}")
    public Todo find(@PathParam("id") Long id) {
        Todo todo = todoService.find(id);
        return todo;
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON})
    public Todo create(Todo newTodo) {
        newTodo = todoService.create(newTodo);

        return newTodo;
    }

    @PUT
    @Path("{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public Todo update(Todo newTodo) {
        return todoService.update(newTodo);
    }

    @DELETE
    @Path("{id}")
    public void delete(@PathParam("id") Long id) {
        Todo todo = todoService.find(id);
        todoService.delete(todo);
    }


    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public Response findAll() {

        List<Todo> all = todoService.findAll();

        GenericEntity<List<Todo>> entity =
                new GenericEntity<List<Todo>>(all) {
                };

        return Response.ok(entity).build();
    }

}
