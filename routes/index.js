var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var router = express.Router();

/* LOGIN PAGE */
router.get('/', function(req, res, next) {
  res.render('login', {});
});

router.get('/main.html', function(req, res, next) {
  res.render('main', {});
});

router.get('/about.html', function(req, res, next) {
  res.render('about', {});
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

router.get('/basicRates.html', function(req, res, next) {
  res.render('basicRates', {});
});

router.get('/advancedSSH.html', function(req, res, next) {
  res.render('advancedSSH', {});
});

router.get('/advancedRates.html', function(req, res, next) {
  res.render('advancedRates', {});
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

router.get('/bookConditions.html', function(req, res, next) {
  res.render('bookConditions', {});
});

router.get('/vouchers.html', function(req, res, next) {
  res.render('vouchers', {});
});

module.exports = router;
