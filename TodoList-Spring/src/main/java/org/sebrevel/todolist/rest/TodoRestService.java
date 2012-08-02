package org.sebrevel.todolist.rest;

import org.sebrevel.todolist.beans.Todo;
import org.sebrevel.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value="/todo", consumes="application/json", produces="application/json")
public class TodoRestService {

    @Autowired
    private TodoService todoService;

    @RequestMapping(value="/{id}",
            method= RequestMethod.GET)
    @ResponseBody
    public Todo find(@PathVariable("id") Long id) {
        Todo todo = todoService.find(id);
        return todo;
    }

    @RequestMapping(method= RequestMethod.POST)
    @ResponseBody
    public Todo create(@RequestBody Todo newTodo) {
       todoService.create(newTodo);
        return newTodo;
    }

    @RequestMapping(value="/{id}", method= RequestMethod.PUT)
    @ResponseBody
    public Todo update(@RequestBody Todo newTodo) {
        return todoService.update(newTodo);
    }

    @RequestMapping(value="/{id}", method= RequestMethod.DELETE)
    public void delete(@RequestBody Todo todo) {
        todoService.delete(todo);
    }


    @RequestMapping( method= RequestMethod.GET)
    @ResponseBody
    public List<Todo> findAll() {
        List<Todo> all = todoService.findAll();
        return all;
    }

}
