 // src/api/routes/postRoute.js
const userController = require('../controllers/usersController');
const jwtMiddleware = require('../middleware/jwt-middleware');

// Exporte la fonction anonyme
module.exports = (app) => {
  app.route('/users')
  .get(userController.get_all_users)
  .post(userController.add_user);

  app.route('/users/login')
  .post(userController.user_login);

  // app.route('/users/signup')
  // .post(userController.signup);

  app.route('/users/:user_id')
  .get(userController.get_one_user)
  .put(userController.update_user)
  .delete(userController.delete_user);
}