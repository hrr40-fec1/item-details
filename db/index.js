const mongoose = require('mongoose');

const db = mongoose.connection;

// Keeping in comments for future use.
// var sizingSchema = new mongoose.Schema({
//   size: { type: String },
//   neck: String,
//   chest: String,
//   sleeve: String,
//   type: { type: String, default: 'Men - Shirts' }
// });

const questionSchema = new mongoose.Schema({
  itemId: Number,
  question: String,
  answer: String,
  asker: String,
  dateAsked: Date,
  dateAnswered: Date,
  nameOfResponder: String,
  helpfulCount: Number,
  unhelpfulCount: Number,
  targetTeamMember: Boolean,
});

const Questions = mongoose.model('Questions', questionSchema);

const itemDetailsSchema = new mongoose.Schema({
  itemId: { type: Number, unique: true },
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
  type: { type: String, default: 'Men - Shirts' },
});

const ItemDetails = mongoose.model('ItemDetails', itemDetailsSchema);


mongoose.connect('mongodb://localhost/on-target', { useNewUrlParser: true });

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Database and server are connected!');
});

module.exports.ItemDetails = ItemDetails;
module.exports.Questions = Questions;
