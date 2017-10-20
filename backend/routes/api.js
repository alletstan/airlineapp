var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var router = express.Router();

router.post('/login', function(req, res) {

  let username = req.body.username;
  let password = req.body.password;

  if((username == 'a') && (password == 'a')){
    req.session.user = "validuser";
    console.log(req.session);
    res.status(200).send({success: true});
  }else{
    res.status(401).send({success: false});
  }

});

router.get('/checkiflogin', function(req, res) {
    console.log(req.session);
    if(req.session.user){
      res.json({islogin: true});
    }else{
      res.json({islogin: true});
      // res.json({islogin: false});
    }
});

router.get('/logout', function(req, res) {
  req.session.user = null;
  res.status(200).send();
});

module.exports = router;
