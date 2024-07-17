const addUserMiddleware = (req, res, next) => {
    //validate request data here
    // let data = req.body;
    // console.log(data)
    next();
};

const findUserMiddleware = (req, res, next) => {
    // //validate request data here
    // console.log(req.body,'<<<<<<<<<<<<');
    // // let {id} = req.body.params;
    // res.send({message:"id cannot be null"})

    next();
};

module.exports = {
    addUserMiddleware,
    findUserMiddleware
};