Ext.define('TodoList.view.ListPanel', {
    extend:'Ext.Panel',

    xtype:'listpanel',

    config:{
        fullscreen:true,

        layout:'fit',

        items:[
            {
                xtype:"toolbar",
                docked:"top",
                title:'Todo List',
                items:[
                    {xtype: 'spacer'},
                    {
                        xtype:"button",
                        text:'Add',
                        itemId:'add'
                    }
                ]
            },
            {
                xtype:'list',
                itemId : 'todolist',
                store:'Todos',
                itemTpl:'{title}'
            }
        ]
    }
});