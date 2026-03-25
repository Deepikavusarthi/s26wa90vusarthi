var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function(req, res, next) {
  let x;

  if (req.query.x) {
    x = Number(req.query.x);
  } else {
    x = Math.random() * 100;
  }

  let y = Math.floor(x);

  res.send(`floor applied to ${x} is ${y}`);
});

module.exports = router;