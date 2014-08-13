var request   = require("supertest");
var app       = require("../../../app");

describe("Quiz API", function() {

  var doc;

  it("Post should return an JSON object", function (done) {
      request(app)
          .post("/quiz")
          .send({title: "Supertest", descr:"this is a test", author:"mocha"})
          .expect(200)
          .end(function(err, res){
              if (err) return done(err);
              res.should.not.be.empty;
              res.should.be.json;
              res.body.should.be.an.instanceOf(Object);    
              res.body.should.have.keys(['_id','hidden','date','title','descr','author']);
              doc = res.body;
              done();
      });
  });

  it("Get with no key should return an array of JSON", function (done) {
      request(app)
          .get("/quiz")
          .expect(200)
          .end(function(err, res){
              if (err) return done(err);
              res.should.not.be.empty;
              res.should.be.json;
              res.body.should.be.an.instanceOf(Array).and.not.have.lengthOf(0);    
              done();
      });
  });

  it("Delete should return an JSON object", function (done) {
      request(app)
          .delete("/quiz/"+ doc._id)
          .expect(200)
          .end(function(err, res){
              if (err) return done(err);
              res.should.not.be.empty;
              res.should.be.json;
              res.body.should.be.an.instanceOf(Object);  
              res.body.should.containEql({message: 'deleted'});
              // res.body.should.containEql({object: { ok: true, n: 1 } });  
              done();
      });
  });
});



