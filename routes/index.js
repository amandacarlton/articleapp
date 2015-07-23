var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/articles');
var articles = db.get('articles');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('articles', { title: 'Express' });
});


router.get('/articles/new', function(req, res, next) {
  res.render('new', { title: 'Express' });
});



module.exports = router;
