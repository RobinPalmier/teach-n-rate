 // src/api/routes/postRoute.js
 const ratesController = require('../controllers/ratesController');

 // Exporte la fonction anonyme
 module.exports = (app) => {
   app.route('/rates')
   .get(ratesController.get_all_rates)
   .post(ratesController.create_a_rate);
 
   app.route('/rates/:rate_id')
   .get(ratesController.get_one_rate)
   .put(ratesController.update_a_rate)
   .delete(ratesController.delete_a_rate);
 }