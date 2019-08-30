// var chai = require('chai');
// var chaiHttp = require('chai-http');
// var app = require('../server/server.js');
//
// var assert = require('assert');
// const db = require('../db/index.js')
//
// chai.use(chaiHttp)
// var should = require('chai').should()
//
// describe('Item tables should render with the correct item types', function() {
//   describe('Item Details Database', function() {
//     it('should return the correct item detail types', function(done) {
//        chai.request('http://localhost:3001')
//         .get('/api/items/50')
//         .end((err, res) => {
//           var resBody = res.body[0]
//           res.should.have.status(200);
//           resBody.should.be.an('object');
//           resBody.itemId.should.be.a('number');
//           resBody.sizing.should.be.a('string')
//           resBody.material.should.be.a('string')
//           resBody.fit.should.be.a('string')
//           resBody.length.should.be.a('string')
//           resBody.features.should.be.a('string')
//           resBody.neckline.should.be.a('string')
//           resBody.itemStyle.should.be.a('string')
//           resBody.careAndCleaning.should.be.a('string')
//           resBody.TCIN.should.be.a('number')
//           resBody.UPC.should.be.a('number')
//           resBody.DPCI.should.be.a('number')
//           resBody.origin.should.be.a('string')
//           resBody.recycledPolyester.should.be.a('boolean')
//           resBody.fastShipping.should.be.a('boolean')
//           resBody.estimatedShipDimensions.should.be.a('string')
//           resBody.estimatedShipWeight.should.be.a('string')
//           resBody.type.should.equal('Men - Shirts')
//           done()
//         })
//     });
//   });
// })
//
//   describe('Sizing Database', function() {
//       it('should return the correct sizing types', function(done) {
//          chai.request('http://localhost:3001')
//           .get('/api/sizing/50')
//           .end((err, res) => {
//             var firstElementInBody = res.body[0]
//             res.should.have.status(200);
//             res.body.should.be.an('array');
//             firstElementInBody.should.be.an('object')
//             firstElementInBody.size.should.be.a('string');
//             firstElementInBody.neck.should.be.a('string')
//             firstElementInBody.chest.should.be.a('string')
//             done()
//           })
//       });
//   });
//
//
//   describe('Questions Database', function() {
//       it('should return the correct question types', function(done) {
//          chai.request('http://localhost:3001')
//           .get('/api/questions/50')
//           .end((err, res) => {
//             console.log('res', res)
//             res.should.have.status(200);
//             res.body.should.be.an('array');
//             var firstQuestion = res.body[0]
//             firstQuestion.should.be.an('object')
//             firstQuestion.itemId.should.be.a('number');
//             firstQuestion.question.should.be.a('string')
//             firstQuestion.asker.should.be.a('string')
//             done()
//           })
//       });
//   });

//
// await questions db, grab the first row — check typeof
// 	  itemId: Number,
//   	question: String,
//  	 answer: String,
//  	 asker: String,
//  	 dateAsked: Date,
//  	 dateAnswered: Date,
//   	nameOfResponder: String,
//  	 helpfulCount: Number,
//  	 unhelpfulCount: Number,
//  	 targetTeamMember: Boolean,
//
// If answer does not exist, answerer, date answered, and name of responder and helpful count and not helpful count, target team member should be null
//
// If answer does exist, ^ should NOT be null
//
//
// If id is greater than 100, all fields should b null
//
// If fit and style point 3 is null, fit and style point 4 and 5 should also be null
// If fit and style point 3 is NOT null, fit and style point 1 and should should also be NOT NULL
//
