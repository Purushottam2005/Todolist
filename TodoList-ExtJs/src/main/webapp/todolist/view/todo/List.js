Ext.define('TodoList.view.todo.List' ,{

	extend: 'Ext.grid.Panel',
    alias : 'widget.todolist',

    title : 'Todo List',

	height : 300,
    width : 500,
	store: 'cvs.Todos',

    initComponent: function(){

        Ext.apply(this, {
            iconCls: 'icon-grid',
            frame: true,
            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    iconCls: 'icon-add',
                    text: 'Add',
                    id: 'addTodo',
                    scope: this
                }, {
                    iconCls: 'icon-delete',
                    text: 'Delete',
                    disabled: true,
                    id: 'deleteTodo',
                    scope: this
                }]
            }],
            columns: [
                {
                    header: 'Title',
                    width: 120,
                    sortable: true,
                    dataIndex: 'title'
                },
                {
                    header: 'detail',
                    width: 300,
                    sortable: true,
                    dataIndex: 'detail'
                }
            ]
        });
        this.callParent();
    }
});