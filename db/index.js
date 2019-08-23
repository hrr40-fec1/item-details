var mongoose = require('mongoose');
var faker = require('faker');

mongoose.connect('mongodb://localhost/on-target', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Database and server are connected!')
});

var sizingSchema = new mongoose.Schema({
  size: {type: String},
  neck: String,
  chest: String,
  sleeve: String,
  type: {type: String, default: 'Men - Shirts'}
});

var Sizing = mongoose.model('Sizing', sizingSchema);

var questionSchema = new mongoose.Schema({
  itemId: Number,
  question: String,
  answer: String,
  asker: String,
  dateAsked: Date,
  helpfulCount: Number,
  unhelpfulCount: Number,
  targetTeamMember: Boolean
})

var Questions = mongoose.model('Questions', questionSchema);

var itemDetailsSchema = new mongoose.Schema({
  itemId: {type: Number, unique: true},
  fitAndStylePointOne: String,
  fitAndStylePointTwo: String,
  fitAndStylePointThree: String,
  fitAndStylePointFour: String,
  fitAndStylePointFive: String,
  fitAndStyleBlurb: String,
  sizing: String,
  material: String,
  fit: String,
  length: String,
  features: String,
  neckline: String,
  itemStyle: String,
  garmentCuffCutType: String,
  garmentSleeveStyle: String,
  careAndCleaning: String,
  TCIN: Number,
  UPC: Number,
  DPCI: Number,
  origin: String,
  recycledPolyester: Boolean,
  fastShipping: Boolean,
  estimatedShipDimensions: String,
  estimatedShipWeight: String,
  type: {type: String, default: 'Men - Shirts'}
});

var ItemDetails = mongoose.model('ItemDetails', itemDetailsSchema);

module.exports.ItemDetails = ItemDetails;
module.exports.Questions = Questions;
