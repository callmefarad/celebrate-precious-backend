const preciousModel = require( '../model/preciousModel' )


// get all wishes
const allWish = async (req, res) => {
    try {
        const wish = await preciousModel.find();
        res.status( 200 ).json( {
            status: 200,
            response: wish
        })
    } catch (error) {
        res.status( 500 ).json( {
            status: 500,
            message: error.message
        })
    }
}

// get one wish
const wishById = async ( req, res ) => {
    const id = req.params.id
    try {
        const wish = await preciousModel.findById( id )
        if ( !wish ) {
            return res.status( 500 ).json( { 
                status: 500,
                message: `wish with id ${id} is not found`,
            })
        }
        res.status( 200 ).json( {
            status: 200,
            message: "Found",
            response: wish,
        })
    } catch ( error ) {
        res.status( 500 ).json( {
            status: 500,
            message: error.message,
        })
    }
}

// post wish
const createWish = async ( req, res ) => {
    if (!req.body.name || !req.body.wish) {
    return res.status(422).json({
      status: 422,
      user: {
        name: "name is required",
        wish: "wish is required",
      },
    });
  }
    const wish = req.body
    const newWish = new preciousModel(wish)
    try {
        await newWish.save();
        res.status( 201 ).json( {
            status: 201,
            message: 'Created Successfully',
            data: newWish,
        })
    } catch ( error ) {
        res.status( 500 ).json( {
            status: 500,
            message: error.message,
        })
     }
}

// update wish
const updateWish = async ( req, res ) => {
    const id = req.params.id
    try {
        const wish = await preciousModel.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                useFindAndModify: false,
            } )
        if ( !wish ) {
            return res.status( 500 ).json( { 
                status: 500,
                message: `wish with id ${id} is not found`,
            })
        }
        res.status( 200 ).json( {
            status: 200,
            message: "Wish Updated Successfully",
            response: wish,
        })
    } catch ( error ) {
        res.status( 500 ).json( {
            status: 200,
            message: error.message,
        })
    }
}

// remove a wish
const deleteWish = async ( req, res ) => {
    const id = req.params.id
    try {
        const wish = await preciousModel.findByIdAndRemove(
            id,
            {useFindAndModify: false,}
        )
        if ( !wish ) {
            return res.status( 500 ).json( {
                status: 500,
                message: `Wish with id ${id} is nof found.`
            })
        }
        res.status( 200 ).json( {
            status: 200,
            message: "Deleted Successfully.",
        })
    } catch ( error ) {
        res.status( 500 ).json( {
            status: 500,
            message: error.message,
        })
    }
}


module.exports = {
    allWish,
    createWish,
    wishById,
    deleteWish,
    updateWish
}