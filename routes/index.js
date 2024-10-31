var express = require('express');
var router = express.Router();

var context = {
  title: 'CTRL ALT IT : Home',
  company_name: 'CTRL ALT IT',
  company_slogan: 'Reboot your network',
  copyright_year: new Date().getFullYear()
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', context);
});

router.get('/privacy/', function(req, res, next) {
  res.render('privacy', context);
});

router.get('/terms-of-service/', function(req, res, next) {
  res.render('tos', context);
});

router.get('/story/cryptolocker/', function(req, res, next) {
  res.render('story_cryptolocker', context);
});

module.exports = router;
