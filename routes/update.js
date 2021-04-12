const e = require('express');
var express = require('express');
var router = express.Router();
var db = require('../db');

router.post('/', function(req, res, next) {
  var id = req.body.id;
  var score = req.body.score;
  if(typeof id !== "number" || typeof score !== "number" || !id || !score){
    res.send("Please enter correct data formats")
  }else{
    db.run('UPDATE players SET score=? WHERE id=?', [score, id], function(err){
        if (err) {
          return console.log(err.message);
        }else{
          res.send("updated");
        }
    })
  }
});

module.exports = router;
