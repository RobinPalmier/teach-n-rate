 // src/api/routes/postRoute.js
 const modulesController = require('../controllers/modulesController');

 // Exporte la fonction anonyme
 module.exports = (app) => {
   app.route('/modules')
   .get(modulesController.get_all_modules)
   .post(modulesController.create_a_module);
 
   app.route('/modules/:module_id')
   .get(modulesController.get_one_module)
   .put(modulesController.update_a_module)
   .delete(modulesController.delete_a_module);
 }