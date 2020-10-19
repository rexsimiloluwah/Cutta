const mongoose = require('mongoose')

// @desc : URL Model
const UrlSchema = new mongoose.Schema({
    _id : {
        type : mongoose.Schema.Types.ObjectId
    },
    urlCode : {
        type : String
    },
    shortUrl : {
        type: String
    },
    longUrl : {
        type: String
    }, 
    createdAt : {
        type : Date, 
        default : Date.now
    }

})

module.exports = mongoose.model('Url', UrlSchema)