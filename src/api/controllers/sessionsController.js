const mongoose = require('mongoose');
const Session = require('../models/sessionsModel');

exports.get_all_sessions = (req, res) => {
  Session.find({}, (errors, sessions)=>{
    if (error) {
      res.status(500);
      console.log(error);
        res.send({message : "server error"})
    }
    else {
      res.status(200);
      res.json(sessions);
    }
  })
}

exports.get_one_session = (req, res) => {
  Session.findById(req.params.session_id, (error, session)=>{
    if (error) {
      res.status(500);
      console.log(error);
      res.send({message : "this id doesn't exist"});
    }
    else {
      res.status(201);
      res.json(session);
    }
  })
}


exports.add_session = (req, res) => {
  let new_session = new Session(req.body);
  try{
    new_session.save((error, session) => {
      if(error){
        res.status(400);
        console.log(error);
        res.send({message : "missing data"})
      }
      else {
        res.status(201);
        res.json(session);
      }
    })
  }
  catch(error){
    res.status(500);
    console.log(error);
    res.json({message : "server error"});
  }
}

exports.update_session = (req, res) => {
  try {
    User.findByIdAndUpdate(req.params.session_id, req.body, {new:true}, (error, session) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json(session)
      }
    })
  } catch (error) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

exports.delete_user = (req, res) => {
  try {
    User.findByIdAndRemove(req.params.session_id, (error) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json({message: "session supprimé"})
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}
