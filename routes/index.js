var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var router = express.Router();

/* LOGIN PAGE */
router.get('/', function(req, res, next) {
  res.render('login', {});
});

router.post('/login', function(req, res) {

  let username = req.body.username;
  let password = req.body.password;

  if((username == 'a') && (password == 'a')){
    req.session.user = "validuser";
    res.status(200).send();
  }else{
    res.status(401).send();
  }

});

router.get('/checkiflogin', function(req, res, next) {
    if(req.session.user){
      res.json({islogin: true});
    }else{
      res.json({islogin: false});
    }
});

router.get('/logout', function(req, res, next) {
  req.session.user = null;
  res.status(200).send();
});

router.get('/main.html', function(req, res, next) {
  if(!req.session.user){ res.redirect('/'); }

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

router.get('/bookConditions.html', function(req, res, next) {
  res.render('bookConditions', {});
});

router.get('/vouchers.html', function(req, res, next) {
  res.render('vouchers', {});
});

module.exports = router;
