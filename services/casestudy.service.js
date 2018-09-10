var ToDo = require('../models/casestudy.model')

_this = this


exports.getCaseStudies = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var casestudies = await CaseStudy.paginate(query, options)
        return casestudies;
    } catch (e) {
        throw Error('Error while Paginating Todos')
    }
}

