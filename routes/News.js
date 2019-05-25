var express = require('express');
var newsController = require('../controllers/News')

var router = express.Router();

router.route('/news')
  .get( (req,res) =>{
    newsController.getNews(req, res);
  } )

module.exports = router;
