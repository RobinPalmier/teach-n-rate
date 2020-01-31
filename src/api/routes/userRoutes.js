 // src/api/routes/postRoute.js
const usersController = require('../controllers/usersController');

// Exporte la fonction anonyme
module.exports = (app) => {
  app.route('/users')
  .get(usersController.get_all_users)
  .post(usersController.create_a_user);

  app.route('/users/login')
  .post(usersController.login);

  app.route('/users/signup')
  .post(usersController.signup);

  app.route('/users/:user_id')
  .get(usersController.get_one_user)
  .put(usersController.update_a_user)
  .delete(usersController.delete_a_user);
}