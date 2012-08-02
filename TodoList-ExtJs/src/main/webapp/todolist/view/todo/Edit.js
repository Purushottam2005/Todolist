Ext.define('TodoList.view.todo.Edit', {

    extend:'Ext.FormPanel',
    alias:'widget.todoedit',

    frame:true,
    title:'Todo Details',

    height:300,
    width: 500,

    items:[
        {
            fieldLabel:'Title',
            xtype:'textfield',
            name:'title'
        },
        {
            fieldLabel:'Detail',
            xtype:'textareafield',
            width  : 400,
            height : 250,
            bodyPadding: 10,
            name:'detail'
        }
    ],
    dockedItems:[
        {
            xtype:'toolbar',
            dock:'bottom',
            ui:'footer',
            items:['->', {
                itemId:'save',
                text:'Save',
                disabled:true
            }]
        }
    ]
});

