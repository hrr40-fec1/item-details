var db = require('./index.js')
var faker = require('faker');

//Below is for the Item Details model specifically.
var ItemDetails = db.ItemDetails;

//This clears the existing seeded database from the Item Details model.
ItemDetails.remove({}, function(err, res) {
  if(err) {
    console.log('Error removing items', err)
  } else {
    console.log('Items removed')
  }
});

//Not all of the items will include 5 bullet points, but I want to be able to accommodate up to 5. So, the below function adds that randomness into my model.
var randomBulletPoints = function() {
  var options = Math.floor(Math.random() * Math.floor(5))
  var pointsToList = []

  if(options === 0) {
    pointsToList.push(null, null, null, null, null)
  } else if(options === 1) {
    pointsToList.push(faker.lorem.sentence(), null, null, null, null)
  } else if(options === 2) {
    pointsToList.push(faker.lorem.sentence(), faker.lorem.sentence(), null, null, null)
  } else if(options === 3) {
    pointsToList.push(faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), null, null)
  } else if(options === 4) {
    pointsToList.push(faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), null)
  } else if(options === 5) {
    pointsToList.push(faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence())
  }
  return pointsToList;
}

//Below, I generate an array with data from Faker so that I have 100 random records to insert into my model.
var arrayToSeed = [];

for (var i = 1; i <= 100; i++) {

  var pointsToList = randomBulletPoints();

  arrayToSeed.push(new ItemDetails({
    itemId: i,
    fitAndStylePointOne: pointsToList[0],
    fitAndStylePointTwo: pointsToList[1],
    fitAndStylePointThree: pointsToList[2],
    fitAndStylePointFour: pointsToList[3],
    fitAndStylePointFive: pointsToList[4],
    fitAndStyleBlurb: faker.lorem.paragraph(),
    sizing: faker.random.word(),
    material: faker.commerce.productMaterial(),
    fit: faker.commerce.productAdjective(),
    length: faker.random.words(),
    features: faker.commerce.productAdjective(),
    neckline: faker.commerce.productAdjective(),
    itemStyle: faker.commerce.productAdjective(),
    garmentCuffCutType: faker.random.words(),
    garmentSleeveStyle: faker.random.words(),
    careAndCleaning: faker.random.words(),
    TCIN: faker.random.number(),
    UPC: faker.random.number(),
    DPCI: faker.random.number(),
    origin: faker.random.word(),
    recycledPolyester: faker.random.boolean(),
    fastShipping: faker.random.boolean(),
    estimatedShipDimensions: faker.lorem.sentence(),
    estimatedShipWeight: faker.random.words(),
    type: 'Men - Shirts'
  }))
}

//Here is where I insert the randomly generated array.
ItemDetails.insertMany(arrayToSeed, function(err, res) {
  if(err) {
    console.log('There has been an error!', err)
  } else {
    console.log('Items are inserted.')
  }
})


//Next, I want to seed my Questions model.
var Questions = db.Questions;

//First, I'll remove whatever is there.
Questions.remove({}, function(err, res) {
  if(err) {
    console.log('Error removing items', err)
  } else {
    console.log('Items removed')
  }
});

//I need to generate a random ID between 1-100 so that they match one of the item numbers, so I'll do that below.
var getRandomItemId = function() {
  return Math.floor(Math.random() * Math.floor(100))
}
// Some questions wont yet have answers, and I will need to account for that.

var checkIfQuestionHasAnswer = function() {
  var hasAnswer = Math.floor(Math.random() * Math.floor(2))

  if(hasAnswer) {
    return faker.lorem.sentence()
  } else {
    return null;
  }
}

// Now, I'll generate 200 random questions/answers to store in my Questions
var questionsToSeed = [];

for (var i = 1; i <= 200; i++) {
  questionsToSeed.push(new Questions({
    itemId: getRandomItemId() + 1,
    question: faker.lorem.sentence(),
    answer: checkIfQuestionHasAnswer(),
    asker: faker.name.firstName(),
    dateAsked: faker.date.past(),
    helpfulCount: faker.random.number(),
    unhelpfulCount: faker.random.number(),
    targetTeamMember: faker.random.boolean()
  }))
}

//Here, I'll insert them into the model.
Questions.insertMany(questionsToSeed, function(err, res) {
  if(err) {
    console.log('There has been an error uploading questions!', err)
  } else {
    console.log('Questions are inserted.')
  }
})