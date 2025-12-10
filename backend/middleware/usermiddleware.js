const userMiddleware = (req, res, next) => {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({
            message: "User not authenticated"
        });
    }
    req.userId = req.session.userId;
    next();
};

module.exports = { userMiddleware };
