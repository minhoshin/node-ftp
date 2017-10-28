'use strict'

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  console.log('data route');
});

module.exports = router;
