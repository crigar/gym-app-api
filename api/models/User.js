/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'users',
  attributes: {
    id: {
      type: 'number',
      columnName: 'user_id',
      autoIncrement: true,
    },
    username: {
      type: 'string',
      columnName: 'username',
    },
    pass: {
      type: 'string',
      columnName: 'password',
    },
    document: {
      type: 'number',
      columnName: 'document',
    },
    name: {
      type: 'string',
      columnName: 'name',
    },
    email: {
      type: 'string',
      columnName: 'email',
    },
    phone: {
      type: 'string',
      columnName: 'phone',
    },
    
    createdAt: { type: 'string', columnType: 'datetime', autoCreatedAt: true,columnName: 'created_at', },
    updatedAt: { type: 'string', columnType: 'datetime', autoUpdatedAt: true,columnName: 'updated_at', },
  },
  beforeCreate: async function (valuesToSet, proceed) {
    valuesToSet.createdAt = new Date();
    valuesToSet.updatedAt = new Date();
    valuesToSet.pass = await AuthService.encryptPass( valuesToSet.pass );
    return proceed();
  }

};

