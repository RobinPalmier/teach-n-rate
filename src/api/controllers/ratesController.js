const mongoose = require('mongoose');
const Rate = require('../models/rateModel');

exports.get_module_rates = (req, res) => {
  Rate.find({modules_id : req.params.modules_id}, (errors, rates)=>{
    if (error) {
      res.status(500);
      console.log(error);
        res.send({message : "server error"})
    }
    else {
      res.status(200);
      res.json(rates);
    }
  })
}

exports.add_rate = (req, res) => {
  let new_rate = new Rate(req.body);
  try{
    new_rate.save((error, rate) => {
      if(error){
        res.status(400);
        console.log(error);
        res.send({message : "missing data"})
      }
      else {
        res.status(201);
        res.json(rate);
      }
    })
  }
  catch(error){
    res.status(500);
    console.log(error);
    res.json({message : "server error"});
  }
}
