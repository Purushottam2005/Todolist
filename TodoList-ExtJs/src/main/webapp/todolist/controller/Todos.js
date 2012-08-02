Ext.define('TodoList.controller.Todos', {

	extend: 'Ext.app.Controller',
	
    stores: ['cvs.Todos'],
    
	models: ['cvm.Todo'],

	views: [
        'todo.List',
		'todo.Edit',
        'todo.Creator'
    ],

	init: function() {

        this.control({

        'todolist': {
            selectionchange: this.selectionChange
        },

        'todoedit textfield': {
            change : this.onFormChange
        },

        'todolist button[text=Add]': {
            click : function () {
                Ext.getCmp('todocreator').show ();
            }
        },

        'todolist button[text=Delete]': {
            click : function () {
                var list = Ext.getCmp ('todolist');
                var selection = list.getSelectionModel().getSelection()[0];
                if (selection) {
                    var store = Ext.getStore("cvs.Todos");
                    store.remove(selection);

                    store.sync();
                }
            }
        },

        'todoedit button[text=Save]': {
            click : this.onSave
        },

        'todocreator #title': {
            change : this.onTextChange
        },

        'todocreator #cancelB': {
            click : function () {
                Ext.getCmp('todocreator').hide ();
            }
        },

        'todocreator button[text=Create]': {
            click : function () {

                var win =  Ext.getCmp("todocreator");

                var rec = new cvm.Todo({
                    title: win.query("#title")[0].value,
                    detail: win.query("#detail")[0].value
                });
                win.hide();

                var store = Ext.getStore("cvs.Todos");
                store.insert(0, rec);

                var list = Ext.getCmp ('todolist');
                list.getSelectionModel().select(0);

                this.saveSelection();
            }
        }
    });
},


onTextChange : function (){
    var win =  Ext.getCmp("todocreator");

    var titleText = win.query("#title")[0];
    var createButton = win.query ('#createB')[0];

    if (! Ext.isEmpty (titleText.value) ) {
        createButton.enable();
    } else {
        createButton.disable();
    }
},


onFormChange : function(f,n,o){

    var selection = this.getSelection();
    selection.set (f.name, f.inputValue?f.inputValue:f.value);

    this.isModify(true);
},

saveSelection: function(){
    var selection = this.getSelection();

    selection.setDirty (true);

    var store = Ext.getStore("cvs.Todos");
    store.sync ();

    this.isModify(false);
},

// modifie le todo actif affich� ds le formulaire
isModify: function(modify){
    var view = Ext.getCmp('todoedit')

    if (modify) {
        view.down('#save').enable();
    } else {
        view.down('#save').disable();
    }
},

// modifie le todo actif affich� ds le formulaire
setActiveRecord: function(record){
    var view =  Ext.getCmp('todoedit');

    if (record) {
        view.getForm().loadRecord(record); // charge les donn�es du todo dans le formulaire
        view.down('#save').enable();
        this.isModify (false);
    } else {
        view.down('#save').disable();
        view.getForm().reset();     // reset le formulaire
    }
},

getSelection: function(){
    var list = Ext.getCmp ('todolist');
    var selection = list.getSelectionModel().getSelection()[0];
    return selection;
},

// Sauve le todo actif en base
onSave: function(){
    var view =  Ext.getCmp('todoedit');
    var form = view.getForm();

    if (form.isValid()) { // on teste les validations des champs du formulaire

        this.saveSelection();
    }
},

selectionChange: function(selModel, selected) {
    Ext.getCmp('deleteTodo').setDisabled(selected.length === 0);

    if (! selected || ! selected[0]) {return}

    // on met a jour le formulaire avec les donnees du nouveau todo actif
    this.setActiveRecord(selected[0] || null);
}
});