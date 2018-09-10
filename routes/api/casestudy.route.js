var express = require('express')

var router = express.Router()

var CaseStudyController = require('../../controllers/casestudy.controller');

router.get('/', CaseStudyController.getCaseStudies)

module.exports = router;