var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	res.setHeader("Content-Type", "text/json");
	res.send(JSON.stringify({"api":"univ-quizzer", "ver": "0.0.1"}));
});

module.exports = router;
