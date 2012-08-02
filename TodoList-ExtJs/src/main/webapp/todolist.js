Ext.Loader.setConfig ({
	enabled : true
})

Ext.Loader.setPath({
    'cvm' : 'common/model',
    'cvs' : 'common/store'
});

Ext.application({
    requires: ['Ext.container.Viewport'],

    name: 'TodoList',

    appFolder: 'todolist',

	controllers : ['Todos'],

    launch: function() {

        Ext.create('Ext.container.Viewport', {
            layout: 'vbox',
            items: [
				{// La grid contenant les todos
                    xtype: 'todolist',
                    id: 'todolist'
                },
                {
                    xtype:'panel',
                    items :[
                        {
                            xtype: 'todoedit',
                            id : 'todoedit'
                        }
                    ]
                },

				{// Window de creation
                    xtype: 'todocreator',
                    id: 'todocreator'
                }

			]
		})
    }
});