var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

router.post('/', function(req, res) {
	
	var Quiz = mongoose.model('Quiz');

	var q = new Quiz({
	    title:  req.body.title,
	    descr:  req.body.descr,
	    author: req.body.author,
	    type:   req.body.type,
	    comments: req.body.comments
  	});
	q.save(function (err, added, count) {
		if (err) return res.json({error: "500", details: err});
    });
	res.json(q);
});

router.get('/', function (req, res) {

	  var Quiz = mongoose.model('Quiz');
	  return Quiz.find(({}), function (err, quizzes) {
	    if (err) 
	      return res.send(err);
	    
	    return res.json(quizzes);
	  });
});

router.get('/:id', function (req, res) {

	  	var Quiz = mongoose.model('Quiz');
	  	Quiz.findById(req.params.id, function (err, quiz) {
			if (err)
				res.send(err);
			res.json(quiz);	  
		});
});

router.delete('/:id', function (req, res){

	 	var Quiz = mongoose.model('Quiz');
		Quiz.remove({ _id: req.params.id}, function(err, quiz, obj) {
			if (err)
				res.send(err);
		res.json({ message: 'deleted', object: obj });
		});
});

module.exports = router;
