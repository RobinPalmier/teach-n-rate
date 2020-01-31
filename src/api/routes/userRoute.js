 // src/api/routes/postRoute.js
const userController = require('../controllers/userController');
const jwtMiddleware = require('../middleware/jwt-middleware');

// Exporte la fonction anonyme
module.exports = (app) => {
  app.route('/users')
  .get(userController.get_all_users)
  .post(jwtMiddleware.verify_token, userController.create_a_user);

  app.route('/users/login')
  .post(userController.login);

  app.route('/users/signup')
  .post(userController.signup);

  app.route('/users/:user_id')
  .get(userController.get_one_user)
  .put(userController.update_a_user)
  .delete(userController.delete_a_user);
}