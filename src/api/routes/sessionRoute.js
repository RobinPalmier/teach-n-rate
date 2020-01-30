 // src/api/routes/postRoute.js
 const sessionController = require('../controllers/sessionController');

 // Exporte la fonction anonyme
 module.exports = (app) => {
   app.route('/sessions')
   .get(sessionController.get_all_sessions)
   .post(sessionController.create_a_session);
 
   app.route('/sessions/:session_id')
   .get(sessionController.get_one_session)
   .put(sessionController.update_a_session)
   .delete(sessionController.delete_a_session);
 }