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
	var Quiz = mongoose.model('Quiz'),
		arq1 = req.params.id || {};
	var q = (typeof arg1 === "number") ? Quiz.findById : Quiz.find;

	return q(arg1, function(err, quizzes) {
		if (err)
			return res.send(err);

		res.json(quizzes);
	});
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