const preciousModel = require( '../model/preciousModel' )


// get all wishes
const allWish = async (req, res) => {
    try {
        const wish = await preciousModel.find();
        res.status( 200 ).json( {
            status: 'success',
            data: {
                wish
            }
        })
    } catch (error) {
        res.status( 404 ).json( {
            message: error.message
        })
    }
}

// post wish
const createWish = async ( req, res ) => {
    const wish = req.body
    const newWish = new preciousModel(wish)
    try {
        await newWish.save();
        res.status( 201 ).json( {
            status: 'success',
            data: {
                newWish
            }
        })
    } catch ( error ) {
        res.status( 409 ).json( {
            message: error.message
        })
     }
}

module.exports = {
    allWish,
    createWish
}