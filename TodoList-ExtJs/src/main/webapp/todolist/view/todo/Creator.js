Ext.define('TodoList.view.todo.Creator' ,{

	extend: 'Ext.Window',
    alias : 'widget.todocreator',

    width: 300,
    height: 230,
    modal : true,

    layout: 'fit',
    title: 'Create Todo',
    items: [
        {
            xtype:'fieldset',
            layout: 'anchor',
            width : '100%',
            items : [
                {
                    fieldLabel: 'Title',
                    itemId : 'title',
                    id : 'title',
                    name: 'title',
                    xtype : 'textfield'
                },
                {
                    fieldLabel: 'Detail',
                    itemId : 'detail',
                    id : 'detail',
                    name: 'detail',
                    xtype : 'textareafield'
                },
                {
                    text:'Create',
                    itemId : 'createB',
                    id : 'createB',
                    disabled : true,
                    xtype : 'button'
                },
                {
                    text:'Annuler',
                    xtype : 'button',
                    itemId : 'cancelB',
                    id : 'cancelB'
                }
            ]
        }

    ]
});