require( 'dotenv' ).config();

const mongoose = require( 'mongoose' )
const url = process.env.DATABASE_URI

mongoose.connect(url)
    .then( () => {
    console.log("Database Connected Successfully")
    } ).catch( ( error ) => {
        console.log(error.message)
    } )