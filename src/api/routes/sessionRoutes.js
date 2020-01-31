 // src/api/routes/postRoute.js
 const sessionsController = require('../controllers/sessionsController');

 // Exporte la fonction anonyme
 module.exports = (app) => {
   app.route('/sessions')
   .get(sessionsController.get_all_sessions)
   .post(sessionsController.create_a_session);
 
   app.route('/sessions/:session_id')
   .get(sessionsController.get_one_session)
   .put(sessionsController.update_a_session)
   .delete(sessionsController.delete_a_session);
 }