var express = require('express');
var router = express.Router();
var db = require('../db');

router.post('/', function(req, res, next) {
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var score = req.body.score;
  var position= req.body.position;

  if(typeof score !== "number" || !first_name || !position || !last_name || !score){
    res.send("Error: Please enter all data in the correct format");
  }else{
    db.run('INSERT INTO players(first_name, last_name, position, score) VALUES(?, ?, ?, ?)', [first_name, last_name, position, score], function(err){
        if (err) {
          console.log(err.message);
          res.send("Error: "+ err.message);
        }else{
          res.send("added");
        }
    }) 
  }
});

module.exports = router;
