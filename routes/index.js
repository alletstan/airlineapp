var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/logout.html', function(req, res, next) {
  res.render('logout', {});
});

router.get('/main.html', function(req, res, next) {
  res.render('main', {});
});

router.get('/about.html', function(req, res, next) {
  res.render('about', {});
});

router.get('/qrCode.html', function(req, res, next) {
  res.render('qrCode', {});
});

router.get('/packageDetails.html', function(req, res, next) {
  res.render('packageDetails', {});
});

router.get('/attractions.html', function(req, res, next) {
  res.render('attractions', {});
});

router.get('/specialEvents.html', function(req, res, next) {
  res.render('specialEvents', {});
});

router.get('/recommended.html', function(req, res, next) {
  res.render('recommended', {});
});

router.get('/lepak.html', function(req, res, next) {
  res.render('lepak', {});
});

router.get('/usefulContacts.html', function(req, res, next) {
  res.render('usefulContacts', {});
});

router.get('/basicSSH.html', function(req, res, next) {
  res.render('basicSSH', {});
});

router.get('/hotels.html', function(req, res, next) {
  res.render('hotels', {});
});

router.get('/shopping.html', function(req, res, next) {
  res.render('shopping', {});
});

router.get('/activities.html', function(req, res, next) {
  res.render('activities', {});
});

router.get('/dining.html', function(req, res, next) {
  res.render('dining', {});
});

module.exports = router;
