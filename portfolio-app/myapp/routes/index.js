var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  var filePath = path.join(__dirname, "../views/index.html");
  res.sendFile(filePath);
});

router.get('/', function(req, res, next) {
  var filePath = path.join(__dirname, "../views/index.html");
  res.sendFile(filePath);
});

module.exports = router;
