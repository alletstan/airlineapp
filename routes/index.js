var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main.html', function(req, res, next) {
  res.render('main', {});
});

router.get('/about.html', function(req, res, next) {
  res.render('about', {});
});

router.get('/settings.html', function(req, res, next) {
  res.render('settings', {});
});

module.exports = router;
