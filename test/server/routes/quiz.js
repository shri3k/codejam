var request   = require("supertest");
var app       = require("app");

describe("Quiz API", function() {

  describe("Post, Get, & Delete", function() {
  
    var doc;

    it("Post should return the created document", function (done) {
        request(app)
            .post("/quiz")
            .send({title: "Supertest", descr:"this is a test", author:"mocha"})
            .end(function(err, res){
                if (err) return done(err);
                res.statusCode.should.equal(200) 
                res.should.not.be.empty;
                res.should.be.json;
                res.body.should.be.an.Object;
                res.body.should.have.keys(['_id','hidden','date','title','descr','author']);
                res.body.should.have.property('author', 'mocha');
                doc = res.body;
                done();
        });
    });
    
    it("Get with a key should return a single document", function (done) {
        request(app)
            .get("/quiz/"+ doc._id)
            .end(function(err, res){
                if (err) return done(err);
                res.statusCode.should.equal(200) 
                res.should.not.be.empty;
                res.should.be.json;
                res.body.should.be.an.Object;
                res.body.should.have.properties(['_id','hidden','date']);
                res.body.should.containEql({author: 'mocha'});
                res.body.should.containEql({_id: doc._id});
                done();
        });
    });

    it("Get with no key should return an array of documents", function (done) {
        request(app)
            .get("/quiz")
            .end(function(err, res){
                if (err) return done(err);
                res.statusCode.should.equal(200) 
                res.should.not.be.empty;
                res.should.be.json;
                res.body.should.be.an.Array.and.not.have.lengthOf(0);    
                done();
        });
    });

    it("Delete with a key should return a JSON object with a deleted count of 1", function (done) {
        request(app)
            .delete("/quiz/"+ doc._id)
            .end(function(err, res){
                if (err) return done(err);
                res.statusCode.should.equal(200) 
                res.should.not.be.empty;
                res.should.be.json;
                res.body.should.be.an.Object;  
                res.body.should.containEql({message: 'deleted'});
                // res.body.should.containDeep({object: { ok: true, n: 1 } });  
                done();
        });
    });

  });
});


