const mongoose = require( 'mongoose' );

const bdSchema = mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    wish: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
} )

const bdModel = mongoose.model( 'wishes', bdSchema );

module.exports = bdModel;