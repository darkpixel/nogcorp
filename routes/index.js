var express = require('express');
var router = express.Router();

var context = {
  title: 'NogCorp',
  company_name: 'NogCorp',
  company_slogan: 'Nog for Everyone!',
  copyright_year: new Date().getFullYear()
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', context);
});

module.exports = router;
