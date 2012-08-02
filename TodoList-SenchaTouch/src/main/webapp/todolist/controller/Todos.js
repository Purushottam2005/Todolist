Ext.define('TodoList.controller.Todos', {

	extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main',
            detail: 'detailpanel',
            edit: 'editpanel',
            add: 'listpanel #add',
            todolist: 'listpanel #todolist',
            backDetail : 'detailpanel #backDetail',
            backEdit : 'editpanel #backEdit',
            editTodo : 'detailpanel #editTodo',
            deleteTodo : 'detailpanel #deleteTodo',
            editTitle: 'editpanel #editTitle',
            editDetail: 'editpanel #editDetail',
            saveEdit: 'editpanel #saveEdit',
            recordEdit: 'editpanel #recordEdit'
        },
        control : {
            'todolist': {
                itemtap : function(view, index, target, record,  e, eOpts ) {
                    this.getDetail().setData (record.data);
                    this.getMain().setActiveItem(1);
                }
            },

            'backDetail': {
                tap : function(view, evt) {
                    this.getMain().setActiveItem(0);
                }
            },

            'editTodo': {
                tap : function(view, evt) {
                    var data = this.getDetail().getData();

                    this.getMain().setActiveItem(2);

                    var saveEdit = this.getSaveEdit();
                    saveEdit.setDisabled(true);
                    saveEdit.show ();

                    var recordEdit = this.getRecordEdit();
                    recordEdit.setDisabled(true);
                    recordEdit.hide ();

                    this.getEditTitle().setValue (data.title);
                    this.getEditDetail().setValue (data.detail);
                }
            },

            'editTitle': {
                keyup : function() {
                    var saveEdit = this.getSaveEdit();
                    saveEdit.setDisabled(false);

                    var recordEdit = this.getRecordEdit();
                    recordEdit.setDisabled(false);
                }
            },
            'editDetail': {
                keyup : function() {
                    var saveEdit = this.getSaveEdit();
                    saveEdit.setDisabled(false);
                }
            },

            'backEdit': {
                tap : function(view, evt) {
                    var saveEdit = this.getSaveEdit();
                    if (saveEdit.isHidden()) {
                        this.getMain().setActiveItem(0);
                    }
                    else {
                        this.getMain().setActiveItem(1);
                    }
                }
            },

            'add': {
                tap : function(view, evt) {
                    this.getMain().setActiveItem(2);

                    var saveEdit = this.getSaveEdit();
                    saveEdit.setDisabled(true);
                    saveEdit.hide ();

                    var recordEdit = this.getRecordEdit();
                    recordEdit.setDisabled(true);
                    recordEdit.show ();

                    this.getEditTitle().setValue ("");
                    this.getEditDetail().setValue ("");
                }
            },
            'recordEdit': {
                tap : function(view, evt) {

                    var rec = new cvm.Todo({
                        title: this.getEditTitle().getValue(),
                        detail:this.getEditDetail().getValue()
                    });
                    rec.setDirty (true);

                    var store = Ext.getStore("Todos");
                    store.insert(0, rec);
                    store.sync ();

                    this.getMain().setActiveItem(0);
                }
            },

            'deleteTodo': {
                tap : function(view, evt) {
                    var rec = this.getTodolist().getSelection()[0];

                    var store = Ext.getStore("Todos");
                    store.remove(rec);

                    store.sync();

                    this.getMain().setActiveItem(0);
                }
            },

            'saveEdit': {
                tap : function(view, evt) {
                    var rec = this.getTodolist().getSelection()[0];

                    var store = Ext.getStore("Todos");

                    rec.set ('title', this.getEditTitle().getValue());
                    rec.set ('detail', this.getEditDetail().getValue());

                    store.sync ();

                    this.getMain().setActiveItem(0);
                }
            }
        }
    }
});