const mongoose = require('mongoose');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.get_all_users = (req, res) => {
  User.find({}, (error, users)=>{
    if (error) {
      res.status(500);
      console.log(error);
        res.send({message : "server error"})
    }
    else {
      res.status(200);
      res.json(users);
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
  User.findOne({email: req.body.email}, (error, user) => {
    if(error) {
      console.log(error);
    }
    if(user) {
      res.status(400);
      res.send({message: "User already exist"})
    }
    if(user == null) {
      console.log(req.body)
      bcrypt.hash(req.body.password, 9).then((hash) => {
        let new_user = new User({name: req.body.name, email: req.body.email, password: hash, sessions_id: req.body.sessions_id, status: req.body.status});
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
      })
    }
  })
}

exports.update_user = (req, res) => {
  try {
    User.findByIdAndUpdate(req.params.user_id, req.body, {new:true}, (error, user) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json(user)
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
        res.json({message: "utilisateur supprimé"})
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

exports.user_login = (req, res) => {
  let {body} = req;
  User.findOne({email: body.email}, (mongooseError, user) => {
    if(user == null) {
      res.status(400);
      res.send({message: "Account does not exist"})
    } else {
      let isValidPassword = bcrypt.compareSync(body.password, user.password);
      if(!isValidPassword) {
        return res.status(401).send({message: "Invalid password"});
      }
      jwt.sign({mail: body.email}, process.env.JWT_KEY, {expiresIn: "10m"}, (jwtError, token) => {
        if(jwtError){
          console.log(jwtError);
          res.status(500);
          res.json({message: "Erreur serveur"});
        }
        else {
          res.status(200);
          res.json({userDatas: {token, name: user.name, email: user.email, sessions_id: user.sessions_id, status: user.status}});
        }
      })
    }
  })
}

// user.findOne({email: 'ergherigk'}, (err,resultat) => resultat._id; Module.findOneAndUpdate({nom_module:""},{id_user:resultat._id}))