var CaseStudyService = require('../services/casestudy.service')

_this = this


exports.getCaseStudies = async function(req, res, next){

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    console.log(page, limit)

    try{
        var casestudies = await CaseStudyService.getCaseStudies({}, page, limit)
        return res.status(200).json({status: 200, data: casestudies, message: "Succesfully Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

