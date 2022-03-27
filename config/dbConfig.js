const mongoose = require( 'mongoose' )
const url = 'mongodb+srv://callmefarad:B577f2Ai8bh6txuT@blog.eenxj.mongodb.net/preciousDB?retryWrites=true&w=majority'

mongoose.connect(url)
    .then( () => {
    console.log("Database Connected Successfully")
    } ).catch( ( error ) => {
        console.log(error.message)
    } )