/**
 * sede.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'sedes',
    attributes: {
      id: {
        type: 'number',
        columnName: 'sede_id',
        autoIncrement: true,
      },
      name: {
        type: 'string',
        columnName: 'name_sede',
      },
      address: {
        type: 'string',
        columnName: 'address',
      },
      city: {
        type: 'number',
        columnName: 'city_id',
      },

      createdAt: { type: 'string', columnType: 'datetime', autoCreatedAt: true,columnName: 'created_at', },
    updatedAt: { type: 'string', columnType: 'datetime', autoUpdatedAt: true,columnName: 'updated_at', },
    },
    
  };
  
  