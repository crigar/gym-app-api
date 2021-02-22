/**
 * Role.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'cities',
    attributes: {
      id: {
        type: 'number',
        columnName: 'city_id',
        autoIncrement: true,
      },
      name: {
        type: 'string',
        columnName: 'name_city',
      },
     
      createdAt: { type: 'string', columnType: 'datetime', autoCreatedAt: true,columnName: 'created_at', },
    updatedAt: { type: 'string', columnType: 'datetime', autoUpdatedAt: true,columnName: 'updated_at', },
    },
    
  };
  
  