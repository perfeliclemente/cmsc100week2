var should = require('should-http'); 
var request  = require('supertest');
	
	describe("student", function(){
		var url = "localhost:5000";
		describe("find", function(){
			it("should retrieve all student records", function(done){
				request(url)
				.get('/students')
				.end(function(err, res){
					if (err){ throw err;}
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Array);
					done();
				});
			});
		});
		
		describe("insert", function(){
			it("should return newly created record", function(done){
				request(url)
				.post('/students')
				.send({'stdno': '2013-22584', 'name': 'Betel'})
				.end(function(err, res){
					if (err){ throw err;}
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Object);
					res.body.should.have.properties(["id", "stdno", "name"]);
					res.body.should.have.keys(["id", "stdno", "name"]);
					res.body.id.should.not.be.empty;
					res.body.stdno.should.not.be.empty;
					res.body.name.should.not.be.empty;
					//stricter test cases
					done();
				});
			});
		});
	});
