 // src/api/routes/postRoute.js
 const moduleController = require('../controllers/moduleController');

 // Exporte la fonction anonyme
 module.exports = (app) => {
   app.route('/modules')
   .get(moduleController.get_all_modules)
   .post(moduleController.create_a_module);
 
   app.route('/modules/:module_id')
   .get(moduleController.get_one_module)
   .put(moduleController.update_a_module)
   .delete(moduleController.delete_a_module);
 }