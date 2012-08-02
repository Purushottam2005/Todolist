Ext.define('TodoList.view.EditPanel', {
    extend:'Ext.Panel',

    xtype:'editpanel',

    config:{
        fullscreen:true,

        layout:'fit',

        items:[
            {
                xtype:"toolbar",
                docked:"top",
                title:'Edit Todo',
                items:[
                    {
                        xtype:"button",
                        text:'Back',
                        itemId:'backEdit'
                    },
                    {xtype: 'spacer'},
                    {
                        xtype:"button",
                        text:'Save',
                        itemId:'saveEdit',
                        disabled : true
                    },
                    {
                        xtype:"button",
                        text:'Record',
                        itemId:'recordEdit',
                        disabled : true
                    }

                ]
            },
            {
                xtype:'fieldset',
                title : 'Edit Todo',
                items:[
                    {
                        xtype:'textfield',
                        label:'Title',
                        name:'title',
                        itemId :'editTitle'
                    },
                    {
                        xtype:'textareafield',
                        label:'Detail',
                        name:'detail',
                        itemId :'editDetail'
                    }
                ]
            }
        ]
    }
});