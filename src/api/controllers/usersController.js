const mongoose = require('mongoose');
const User = require('../models/userModel');

exports.get_all_users = (req, res) => {
  User.find({}, (errors, user)=>{
    if (error) {
      res.status(500);
      console.log(error);
        res.send({message : "server error"})
    }
    else {
      res.status(200);
      res.json(user);
    }
  })
}

exports.get_one_user = (req, res) => {
  User.findById(req.params.user_id, (error, user)=>{
    if (error) {
      res.status(500);
      console.log(error);
      res.send({message : "this id doesn't exist"});
    }
    else {
      res.status(201);
      res.json(user);
    }
  })
}

exports.add_user = (req, res) => {
  let new_user = new User(req.body);
  try{
    new_user.save((error, user) => {
      if(error){
        res.status(400);
        console.log(error);
        res.send({message : "missing data"})
      }
      else {
        res.status(201);
        res.json(user);
      }
    })
  }
  catch(error){
    res.status(500);
    console.log(error);
    res.json({message : "server error"});
  }
}

exports.update_user = (req, res) => {
  try {
    User.findByIdAndUpdate(req.params.user_id, req.body, {new:true}, (error, post) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json(post)
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
    User.findByIdAndRemove(req.params.user_id, (error) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json({message: "Article supprimé"})
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

// user.findOne({email: 'ergherigk'}, (err,resultat) => resultat._id; Module.findOneAndUpdate({nom_module:""},{id_user:resultat._id}))
