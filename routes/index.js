var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main.html', function(req, res, next) {
  res.render('main.hjs', {});
});

module.exports = router;
