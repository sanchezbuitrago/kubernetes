var express = require('express');
var router = express.Router();
var Request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  
  return Request.get({
      "headers": { "content-type": "application/json" },
      "url": "http://appexpress-v1-svc/",
  }, (error, response) => {
      if(error) {
        return res.render('index', { title: error });
      }else{
        return res.render('index', { title: JSON.parse(response.body).message });
      }
  });
  
});

module.exports = router;