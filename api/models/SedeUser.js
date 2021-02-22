/**
 * sedeUser.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'sedes_usuarios',
    attributes: {
      id: {
        type: 'number',
        columnName: 'sede_user_id',
        autoIncrement: true,
      },
      user: {
        model: 'user',
        columnName: 'user_id',
      },
      sede: {
        model: 'role',
        columnName: 'sede_id',
      },
      createdAt: { type: 'string', columnType: 'datetime', autoCreatedAt: true,columnName: 'created_at', },
    updatedAt: { type: 'string', columnType: 'datetime', autoUpdatedAt: true,columnName: 'updated_at', },
    },
    beforeCreate: function (valuesToSet, proceed) {
      valuesToSet.createdAt = new Date();
      valuesToSet.updatedAt = new Date();
      return proceed();
    }
  };
  
  