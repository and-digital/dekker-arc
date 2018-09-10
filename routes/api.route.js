var express = require('express')

var router = express.Router()
var casestudy = require('./api/casestudy.route')


router.use('/casestudy', casestudy);


module.exports = router;