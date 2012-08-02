Ext.Loader.setConfig({
    enabled:true
})

Ext.Loader.setPath({
    'cvm':'common/model',
    'cvs':'common/store'
});

Ext.application({

    name:'TodoList',

    appFolder:'todolist',

    controllers:['Todos'],

    models:['cvm.Todo'],

    stores:['cvs.Todos'],

    views:['Main', 'ListPanel', 'DetailPanel', 'EditPanel'],

    launch:function () {
        Ext.Viewport.add([
            {
                xtype:'mainpanel',
                id : 'main'
            }
        ]);
    }
});