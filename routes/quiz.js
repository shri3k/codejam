var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

function Post(req, res) {
	var Quiz = mongoose.model('Quiz');

	var q = new Quiz({
		title: req.body.title,
		descr: req.body.descr,
		author: req.body.author,
		type: req.body.type,
		comments: req.body.comments
	});
	q.save(function(err, added, count) {
		if (err) return res.json({
			error: "500",
			details: err
		});
	});
	res.json(q);
}

function Get(req, res) {
	var Quiz = mongoose.model('Quiz');

	function callback(err, data) {
		if (err) return res.send(err);
		res.json(data);
	}
	(req.params.id) ? Quiz.findById(req.params.id, callback) : Quiz.find({}, callback);
}

function Delete(req, res) {
	var Quiz = mongoose.model('Quiz');
	Quiz.remove({
		_id: req.params.id
	}, function(err, quiz, obj) {
		if (err)
			res.send(err);
		res.json({
			message: 'deleted',
			object: obj
		});
	});
}

router.post('/', Post).get('/:id?', Get).delete('/:id', Delete);

module.exports = router;