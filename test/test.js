var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../server/server.js');

var assert = require('assert');
const db = require('../db/index.js')

chai.use(chaiHttp)
var should = require('chai').should()

describe('Item tables should render with the correct item types', function() {
  describe('Item Details Database', function() {
    it('should return the correct item detail types', function(done) {
       chai.request('http://localhost:3001')
        .get('/api/items/50')
        .end((err, res) => {
          var resBody = res.body[0]
          res.should.have.status(200);
          resBody.should.be.an('object');
          resBody.itemId.should.be.a('number');
          resBody.sizing.should.be.a('string')
          resBody.material.should.be.a('string')
          resBody.fit.should.be.a('string')
          resBody.length.should.be.a('string')
          resBody.features.should.be.a('string')
          resBody.neckline.should.be.a('string')
          resBody.itemStyle.should.be.a('string')
          resBody.careAndCleaning.should.be.a('string')
          resBody.TCIN.should.be.a('number')
          resBody.UPC.should.be.a('number')
          resBody.DPCI.should.be.a('number')
          resBody.origin.should.be.a('string')
          resBody.recycledPolyester.should.be.a('boolean')
          resBody.fastShipping.should.be.a('boolean')
          resBody.estimatedShipDimensions.should.be.a('string')
          resBody.estimatedShipWeight.should.be.a('string')
          resBody.type.should.equal('Men - Shirts')
          done()
        })
    });
  });
  describe('Item Details Database', function() {
    it('should return for item id not in the database', function(done) {
       chai.request('http://localhost:3001')
        .get('/api/items/105')
        .end((err, res) => {
          res.should.have.status(404)
          done()
        })
    });
  });

  describe('Fit and style points', function() {
    it('should return null for points after first null, and not null for points before', function(done) {
       chai.request('http://localhost:3001')
        .get('/api/items/99')
        .end((err, res) => {
          var item = res.body[0]
          if(item.fitAndStylePointThree === null) {
            item.fitAndStylePointFour.should.equal(null)
            item.fitAndStylePointFive.should.equal(null)
          } else {
            item.fitAndStylePointOne.should.not.equal(null)
            item.fitAndStylePointTwo.should.not.equal(null)
          }
          done()
        })
    });
  });
})

  describe('Sizing Database', function() {
      it('should return the correct sizing types', function(done) {
         chai.request('http://localhost:3001')
          .get('/api/sizing/50')
          .end((err, res) => {
            var firstElementInBody = res.body[0]
            res.should.have.status(200);
            res.body.should.be.an('array');
            firstElementInBody.should.be.an('object')
            firstElementInBody.size.should.be.a('string');
            firstElementInBody.neck.should.be.a('string')
            firstElementInBody.chest.should.be.a('string')
            done()
          })
      });
  });


  describe('Questions Database', function() {
      it('should return the correct question types', function(done) {
         chai.request('http://localhost:3001')
          .get('/api/questions/50')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.an('array');
            var firstQuestion = res.body[0]
            firstQuestion.should.be.an('object')
            firstQuestion.itemId.should.be.a('number');
            firstQuestion.question.should.be.a('string')
            firstQuestion.asker.should.be.a('string')
            done()
          })
      });

      it('should have consistent fields depending on whether a question has an answer', function(done) {
         chai.request('http://localhost:3001')
          .get('/api/questions/50')
          .end((err, res) => {
            res.should.have.status(200);
            var firstQuestion = res.body[0]

            if(firstQuestion.answer === null) {
               firstQuestion.dateAnswered.should.equal(null)
               firstQuestion.nameOfResponder.should.equal(null)
               firstQuestion.helpfulCount.should.equal(null)
               firstQuestion.unhelpfulCount.should.equal(null)
               firstQuestion.targetTeamMember.should.equal(null)
             }
             else if(firstQuestion.answer !== null) {
               firstQuestion.dateAnswered.should.not.equal(null)
               firstQuestion.nameOfResponder.should.not.equal(null)
               firstQuestion.helpfulCount.should.not.equal(null)
               firstQuestion.unhelpfulCount.should.not.equal(null)
               firstQuestion.targetTeamMember.should.not.equal(null)
             }
            done()
          })
      });

  });
