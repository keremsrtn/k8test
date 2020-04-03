const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const event = require('../views/event');

// to support JSON-encoded bodies
router.use( bodyParser.json() );

router.post('/', (req, res) => {
    event.insertLog(function(response) {
        res.send(response);
    }, req.body); 
});

module.exports = router;