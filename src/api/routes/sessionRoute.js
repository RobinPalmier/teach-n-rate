 // src/api/routes/postRoute.js
 const sessionController = require('../controllers/sessionsController');
 const jwtMiddleware = require('../middleware/jwt-middleware');

 // Exporte la fonction anonyme
 module.exports = (app) => {
   app.route('/sessions')
   .get(sessionController.get_all_sessions)
   .post(jwtMiddleware.verify_token, sessionController.create_a_session);
 
   app.route('/sessions/:session_id')
   .get(sessionController.get_one_session)
   .put(sessionController.update_a_session)
   .delete(sessionController.delete_a_session);
 }