Todolist
========

Tutos Java EE6, Spring, ExtJs, Sencha Touch

Objectif
========

L'objectif de ce tutoriel est de faire fonctionner de comparer deux IHM :

+ Sencha ExtJs 
+ Sencha Touch 

et deux parties serveur :

+ Java EE 
+ Spring


Modules
========

Ce projet a �t� d�coup� en plusieurs modules :

+ un ear JavaEE : TodoList-JavaEE-EAR
 - TodoList-JavaEE : La partie serveur en JavaEE (JPA, EJB, Jax-RS)
 - TodoList-ExtJs : La partie IHM en Sencha ExtJS
 - TodoList-SenchaTouch : La partie IHM en Sencha Touch


+ un ear Spring : TodoList-Spring-EAR
 - TodoList-Spring : La partie serveur en Spring
 - TodoList-ExtJs : La partie IHM en Sencha ExtJS
 - TodoList-SenchaTouch : La partie IHM en Sencha Touch



Le mod�le
========

Le mod�le de donn�es utilis� dans ce sample est tr�s simple. Il s'agit d'une liste d'Objet Todo. Chaque Todo est constitu� d'un titre et d'un d�tail.
	

Explication
========

Sencha ExtJS est un framework IHM javaxcript qui permet de faire du MVC cot� client. 

Les composants view ([view/List.js]( https://github.com/sebrevel/Todolist/blob/master/TodoList-ExtJs/src/main/webapp/todolist/view/todo/List.js)) sont associ�s � des stores ([store/Todo.js](https://github.com/sebrevel/Todolist/blob/master/TodoList-ExtJs/src/main/webapp/common/store/Todos.js)) eux m�me associ�s � des mod�les ([model/Todo.js](https://github.com/sebrevel/Todolist/blob/master/TodoList-ExtJs/src/main/webapp/common/model/Todo.js)).

Ces store contiennent des proxy qui sont des proxy Rest qui sont directement branch�s sur les web services REST ([TodoService JavaEE](https://github.com/sebrevel/Todolist/blob/master/TodoList-JavaEE/src/main/java/org/sebrevel/todolist/rest/TodoRestService.java), [TodoService 
Spring](https://github.com/sebrevel/Todolist/blob/master/TodoList-Spring/src/main/java/org/sebrevel/todolist/rest/TodoRestService.java)).

Ces web service utilisent des service acc�dent aux EJB ([JavaEE](https://github.com/sebrevel/Todolist/blob/master/TodoList-JavaEE/src/main/java/org/sebrevel/todolist/service/TodoService.java), [Spring](https://github.com/sebrevel/Todolist/blob/master/TodoList-Spring/src/main/java/org/sebrevel/todolist/service/TodoServiceImpl.java)).

Les EJB utilisent les bean annot�s en JPA ([Contact.java](https://github.com/sebrevel/Todolist/blob/master/TodoList-Spring/src/main/java/org/sebrevel/todolist/beans/Todo.java)) pour interroger la base de donn�es m�moire Derby.


Installation
========

Une vid�o de 7 min montrant comment r�cup�rer le code sur GitHub, cr�er son workspace sur IntelliJ et d�ployer l'application sur Glassfish est disponible [ici](http://www.youtube.com/watch?v=u7Zr5Q55eQE&feature=youtu.be)


TODO
========
+ Faire tourner l'application sur du JBOSS et du Tomcat EE





 

