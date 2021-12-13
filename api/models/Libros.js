/**
 * Libros.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'string', columnName: '_id' },
    title:{type:'string', columnName:'title',required:true},
    description:{type:'string', columnName:'description',required:true},
    price:{type:'number', columnName:'price',required:true},
    createdAt: { type: 'number', autoCreatedAt: true, },
    updatedAt: { type: 'number', autoUpdatedAt: true, },


  },

};

