require ( './config/dbConfig' )
const express = require ( 'express')
const cors = require( 'cors' )
const preciousRouter = require ( './router/preciousRouter.js')

const port = process.env.PORT || 5000;

const app = express();
app.use( express.json() );
app.use( cors() );
app.use('/precious', preciousRouter)

app.listen( port, () => {
    console.log(`Server is listening to port ${port}`);
} )

