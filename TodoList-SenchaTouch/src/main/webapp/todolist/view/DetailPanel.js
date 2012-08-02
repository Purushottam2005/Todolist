Ext.define('TodoList.view.DetailPanel', {
    extend:'Ext.Panel',

    xtype:'detailpanel',

    config:{
        fullscreen:true,

        layout:'fit',

        items:[
            {
                xtype:"toolbar",
                docked:"top",
                title:'Todo Detail',
                items:[
                    {
                        xtype:'button',
                        text:'Back',
                        itemId:'backDetail'
                    },
                    {xtype: 'spacer'},
                    {
                        xtype:'button',
                        text:'Edit',
                        itemId:'editTodo'
                    },
                    {
                        xtype:'button',
                        text:'Delete',
                        itemId:'deleteTodo'
                    }
                ]
            }
        ],

        tpl : '<h1>{title}</h1><br/><br/><h2>{detail}</h2>'
    }
});