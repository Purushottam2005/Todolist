package org.sebrevel.todolist.service;

import org.sebrevel.todolist.beans.Todo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.Serializable;
import java.util.List;


/**
 * Sébastien Revel
 */
@Stateless(mappedName = "test")
public class TodoService implements Serializable {

    Logger logger = LoggerFactory.getLogger(TodoService.class);

    @PersistenceContext(unitName = "todoPU")
    private EntityManager em;

    public Todo find(Long id) {
        logger.info("Recheche du todo {}", id);

        Todo todo = em.find(Todo.class, id);

        logger.info("Résultat de la recherche : {}", todo);

        return todo;
    }

    public Todo create(Todo todo) {
        logger.info("Création du todo {}", todo.getTitle());

        em.persist(todo);
        em.flush();

        logger.info("Création du todo {} effectuée !", todo);

        return todo;
    }

    public void delete(Todo todo) {
        logger.info("Suppression du todo {}", todo.getTitle());

        em.remove(em.merge(todo));

        logger.info("Suppression du todo : {} effectuée !", todo);
    }

    public Todo update(Todo todo) {
        logger.info("Mise à jour du todo {}", todo.getTitle());

        todo = em.merge(todo);

        logger.info("Mise à jour du todo {} effectuée !", todo);

        return todo;
    }

    public List<Todo> findAll() {
        logger.info("Recherche toutes les todos !");
        List<Todo> all = em.createNamedQuery(Todo.FIND_ALL).getResultList();
        logger.info("Résultat de la recherche : {}", all.size());

        return all;
    }

}
