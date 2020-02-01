 // src/api/routes/postRoute.js
 const moduleController = require('../controllers/modulesController');
 const jwtMiddleware = require('../middleware/jwt-middleware');

 // Exporte la fonction anonyme
 module.exports = (app) => {
   app.route('/modules')
   .get(moduleController.get_all_module)
   .post(jwtMiddleware.verify_token, moduleController.add_module);
 
   app.route('/modules/:module_id')
   .get(moduleController.get_one_module)
   .put(moduleController.update_module)
   .delete(moduleController.delete_module);
 }