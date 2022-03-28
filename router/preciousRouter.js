const express = require( 'express' )
const router = express.Router()
const {createWish, allWish, wishById, deleteWish, updateWish} = require( '../controller/preciousController')


router.route( '/wish' )
    .get( allWish )
    .post( createWish )

router
    .route( '/wish/:id' )
    .get( wishById )
    .patch(updateWish)
    .delete(deleteWish)


module.exports = router;