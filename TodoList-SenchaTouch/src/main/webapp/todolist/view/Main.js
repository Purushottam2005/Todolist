Ext.define('TodoList.view.Main', {
    extend: 'Ext.Panel',

    alias: 'widget.main',

    xtype: 'mainpanel',

    config: {
        fullscreen: true,

        layout: 'card',

        items: [
            {
                xtype: 'listpanel'
            },
            {
                xtype: 'detailpanel'
            },
            {
                xtype: 'editpanel'
            }
        ]
    }
});