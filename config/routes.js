/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET /entity/all-entities': 'EntityController.getAll',

  'post /login': 'UserController.login',
  
  'POST /city/create': 'CityController.create',
  'GET /city/index': 'CityController.index',

  'POST /sede/create': 'CityController.createSede',
  'GET /sede/get-sedes/:city': 'CityController.getSedes',

  'POST /user/create': 'UserController.create',
  'POST /user/sign-up': 'UserController.create',
  'POST /user/set-sede': 'UserController.setSede',
  'GET /user/get-clientes': 'UserController.getClients',

  'get /user/search': 'UserController.getUserByParam',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
