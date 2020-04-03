'use strict';

const express = require('express');

const app = express();
const bigQuery = require('./utils/bigquery')
bigQuery.createClient();

app.get('/', (req, res) => {
  res.status(200).send('ok').end();
});

const event = require('./routes/event');
app.use('/event', event);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
