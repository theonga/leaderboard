var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res, next) {
  let sql = `SELECT * FROM players
           ORDER BY score DESC LIMIT 10`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    res.json({
      "message":"success",
      "data":rows
    })
  })
});

module.exports = router;
