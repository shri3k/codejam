var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizSchema = new Schema({
  title:  String,
  descr:  String,
  author: String,
  type:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: {type: Boolean, default: false},
  meta: {
    votes: Number,
    favs:  Number
  }
});

mongoose.model('Quiz', quizSchema);