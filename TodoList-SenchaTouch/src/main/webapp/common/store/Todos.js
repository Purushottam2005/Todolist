Ext.define('cvs.Todos', {
    extend:'Ext.data.Store',

    xtype:'Todos',

    config:{
        model:'cvm.Todo',
        autoLoad:true,
        proxy:{
            type:'rest',
            url:'http://localhost:8080/todolist-rest/todo'
        }
    }
})
