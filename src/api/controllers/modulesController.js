const mongoose = require('mongoose');
const Module = require('../models/modulesModel');

exports.get_all_module = (req, res) => {
  Module.find({}, (errors, module)=>{
    if (error) {
      res.status(500);
      console.log(error);
        res.send({message : "server error"})
    }
    else {
      res.status(200);
      res.json(module);
    }
  })
}

exports.get_one_module = (req, res) => {
  Module.findById(req.params.module_id, (error, module)=>{
    if (error) {
      res.status(500);
      console.log(error);
      res.send({message : "this id doesn't exist"});
    }
    else {
      res.status(201);
      res.json(module);
    }
  })
}

exports.add_module = (req, res) => {
  let new_module = new Module(req.body);
  try{
    new_module.save((error, module) => {
      if(error){
        res.status(400);
        console.log(error);
        res.send({message : "missing data"})
      }
      else {
        res.status(201);
        res.json(module);
      }
    })
  }
  catch(error){
    res.status(500);
    console.log(error);
    res.json({message : "server error"});
  }
}

exports.update_module = (req, res) => {
  try {
    Module.findByIdAndUpdate(req.params.module_id, req.body, {new:true}, (error, module) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json(module)
      }
    })
  } catch (error) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

exports.delete_module = (req, res) => {
  try {
    Module.findByIdAndRemove(req.params.module_id, (error) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json({message: "Module supprimé"})
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}
