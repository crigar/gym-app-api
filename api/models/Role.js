/**
 * Role.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'roles',
  attributes: {
    id: {
      type: 'number',
      columnName: 'role_id',
      autoIncrement: true,
    },
    code: {
      type: 'string',
      columnName: 'username',
    },
    name: {
      type: 'string',
      columnName: 'name',
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

