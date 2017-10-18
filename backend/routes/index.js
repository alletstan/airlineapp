var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var router = express.Router();

/* LOGIN PAGE */
router.get('/', function(req, res, next) {
  res.send("test response");
});

module.exports = router;
