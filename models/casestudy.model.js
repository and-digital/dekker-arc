var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var caseStudySchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    status: String
})

caseStudySchema.plugin(mongoosePaginate)
const casestudy = mongoose.model('casestudy', caseStudySchema)

module.exports = casestudy;