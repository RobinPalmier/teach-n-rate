 // src/api/routes/postRoute.js
 const rateController = require('../controllers/ratesController');
 const jwtMiddleware = require('../middleware/jwt-middleware');

 // Exporte la fonction anonyme
 module.exports = (app) => {
   app.route('/rates')
   .get(rateController.get_module_rates)
   .post(jwtMiddleware.verify_token, rateController.add_rate);
 }