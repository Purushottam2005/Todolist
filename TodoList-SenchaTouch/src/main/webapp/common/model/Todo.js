Ext.define('cvm.Todo', {
    extend:'Ext.data.Model',

    config:{
        fields:[
            {
                name:'id',
                type:'int'
            },
            {
                name:'title',
                type:'string'
            },
            {
                name:'detail',
                type:'string'
            }
        ]
    }
})

