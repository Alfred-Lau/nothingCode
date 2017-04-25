var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/websocket', function (req, res, next) {
	console.log('s');
	res.end('welcome')
})

module.exports = router;
