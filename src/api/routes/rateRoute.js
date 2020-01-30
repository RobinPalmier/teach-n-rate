 // src/api/routes/postRoute.js
 const rateController = require('../controllers/rateController');

 // Exporte la fonction anonyme
 module.exports = (app) => {
   app.route('/rates')
   .get(rateController.get_all_rates)
   .post(rateController.create_a_rate);
 
   app.route('/rates/:rate_id')
   .get(rateController.get_one_rate)
   .put(rateController.update_a_rate)
   .delete(rateController.delete_a_rate);
 }