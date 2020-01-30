const mongoose = require('mongoose');
const User = require('../models/userModel');

exports.get_all_users = (req, res) => {
  User.find({}, ()=>{
    if (error) {
      res.status(500);
      console.log(error);
        res.send({message : "server error"})
    }
    else {
      res.status(200);
      res.json(User);
    }
  })
}

exports.get_one_user = (req, res) => {
  User.findById(req.params.user_id, (error, users)=>{
    if (error) {
      res.status(500);
      console.log(error);
      res.send({message : "this id doesn't exist"});
    }
    else {
      res.status(201);
      res.json(User);
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
        res.status
      }
    })
  }
  catch(error){
    res.status(500);
    console.log(error);
    res.json({message : "server error"});
  }
}

// user.findOne({email: 'ergherigk'}, (err,resultat) => resultat._id; Module.findOneAndUpdate({nom_module:""},{id_user:resultat._id}))
