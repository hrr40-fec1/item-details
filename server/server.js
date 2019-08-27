const express = require('express');

const app = express();
const port = 3001;
const db = require('../db/index.js');

app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Get request to get all item details at particular item id.
app.get('/api/items/:itemId', (req, res) => {
  const id = req.params.itemId;

  db.ItemDetails.find({ itemId: id }, (err, results) => {
    if (err) {
      console.log('Error finding specific item.', err);
      res.status(404);
    } else {
      console.log('Results finding item', results);
      res.send(results);
    }
  });
});

// Get request to get all item-related questions at particular item id.
app.get('/api/questions/:itemId', (req, res) => {
  const id = req.params.itemId;

  db.Questions.find({ itemId: id }, (err, results) => {
    if (err) {
      console.log('No questions at this item id.', err);
      res.status(404);
    } else {
      console.log('Here are the questions at this item id.', results);
      res.send(results);
    }
  });
});

// Get request to get all type-related sizing information at particular item id.
app.get('/api/sizing/:itemId', (req, res) => {
  const id = req.params.itemId;

  db.ItemDetails.find({ itemId: id }, (err, results) => {
    if (err) {
      console.log('Cannot find item to get sizing.', err);
      res.status(404);
    } else {
      const itemType = results[0].type;
      db.Sizing.find({ type: itemType }, (err2, results2) => {
        if (err2) {
          console.log('Cannot find sizing for item type.', err);
          res.status(404);
        } else {
          console.log(`Here are the sizing details for item type ${itemType}`, results2);
          res.send(results2);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Item details service listening on port ${port}!`);
});
