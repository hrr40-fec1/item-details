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

var itemDetailsSchema = new mongoose.Schema({
  itemId: {type: Number, default: 0},
  fitAndStylePointOne: String,
  fitAndStylePointTwo: String,
  fitAndStylePointThree: String,
  fitAndStylePointFour: String,
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
  type: {type: String, default: 'Men - Shirts'}
});

var ItemDetails = mongoose.model('ItemDetails', itemDetailsSchema);

var arrayToSeed = [];

for (var i = 1; i <= 100; i++) {
  arrayToSeed.push(new ItemDetails({
    itemId: i,
    fitAndStylePointOne: faker.lorem.sentence(),
    fitAndStylePointTwo: faker.lorem.sentence(),
    fitAndStylePointThree: faker.lorem.sentence(),
    fitAndStylePointFour: faker.lorem.sentence(),
    fitAndStyleBlurb: faker.lorem.paragraph(),
    sizing: faker.random.word(),
    material: faker.random.words(),
    fit: faker.random.words(),
    length: faker.random.words(),
    features: faker.random.words(),
    neckline: faker.random.word(),
    itemStyle: faker.random.words(),
    garmentCuffCutType: faker.random.words(),
    garmentSleeveStyle: faker.random.words(),
    careAndCleaning: faker.random.words(),
    TCIN: faker.random.number(),
    UPC: faker.random.number(),
    DPCI: faker.random.number(),
    origin: faker.random.word(),
    recycledPolyester: faker.random.boolean(),
    type: 'Men - Shirts'
  }))
}

ItemDetails.insertMany(arrayToSeed)
  .then(function(record) {
    console.log('saving record!', record)
    record.save()
  })
  .catch(function(err) {
    console.log('there has been an error', err)
  })

