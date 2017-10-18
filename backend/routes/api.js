var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var router = express.Router();

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

module.exports = router;
