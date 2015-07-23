var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.articles);
var articles = db.get('articles');
var validator = require('../lib/validations.js');
/* GET home page. */
router.get('/', function(req, res, next){
  articles.find({}, function(err, info){
  res.render('articles', { info: info });
});
});

router.get('/articles/new', function(req, res, next) {
  res.render('new');
});

router.post('/articles', function(req, res, next){
  var errorlist=(validator.validations(req.body.title, req.body.url, req.body.excerpt, req.body.long));
if(errorlist.length>0){
  res.render("new", {errorlist:errorlist, title:req.body.title, url:req.body.url, excerpt:req.body.excerpt, main:req.body.long});
}else{
 articles.insert({title: req.body.title, url:req.body.url, excerpt:req.body.excerpt, main:req.body.long, colors:req.body.color}, function(err, info){
  res.redirect("/");
});
}
});

router.get('/articles/:id', function(req, res, next){
  articles.findOne({_id: req.params.id},function(err, info){
  res.render("show", {info: info});
});
});

router.get('/articles/:id/edit', function(req, res, next){
  articles.findOne({_id:req.params.id},function(err, info){
    res.render("edit", {info:info});
});
});

router.post('/articles/:id/edit', function(req, res, next){
  var errorlist=(validator.validations(req.body.title, req.body.url, req.body.excerpt, req.body.long));
if(errorlist.length>0){
  articles.findOne({_id:req.params.id},function(err, info){
  res.render("edit", {errorlist:errorlist, info:info, title:req.body.title, url:req.body.url, excerpt:req.body.excerpt, main:req.body.long});
});
}else{
  articles.update({_id:req.params.id},{title: req.body.title, url:req.body.url, excerpt:req.body.excerpt, main:req.body.long, colors:req.body.color}, function(err, info){
    res.redirect("/articles/"+req.params.id);
});
}
});

router.post("/articles/:id/delete", function(req, res, next){
  articles.remove({_id:req.params.id}, function(err,info){
    res.redirect("/");
});
});
module.exports = router;
