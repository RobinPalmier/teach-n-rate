 // src/api/routes/postRoute.js
 const sessionController = require('../controllers/sessionsController');
 const jwtMiddleware = require('../middleware/jwt-middleware');

 // Exporte la fonction anonyme
 module.exports = (app) => {
   app.route('/sessions')
   .get(sessionController.get_all_sessions)
   .post(jwtMiddleware.verify_token, sessionController.add_session);
 
   app.route('/sessions/:session_id')
   .get(sessionController.get_one_session)
   .put(sessionController.update_session)
   .delete(sessionController.delete_session);
 }