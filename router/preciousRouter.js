const express = require( 'express' )
const router = express.Router()
const {createWish, allWish} = require( '../controller/preciousController')


router.route( '/wish' )
    .get( allWish )
    .post( createWish );


module.exports = router;