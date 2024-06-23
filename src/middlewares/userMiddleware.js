const getUserMiddleware = (req, res, next) => {
    //validate request data here

    next();
};

module.exports = {
    getUserMiddleware,
};