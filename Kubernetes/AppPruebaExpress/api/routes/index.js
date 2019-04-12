var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  function makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  res.status(200).json({message:makeid(5)});
});

module.exports = router;
