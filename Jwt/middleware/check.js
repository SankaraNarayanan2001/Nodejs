const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    const token = req.header('token')

    // CHECK IF WE EVEN HAVE A TOKEN
    if(!token){
        res.status(400).json({
            errors: [
                {
                    msg: "No token found"
                }
            ]
        })
    }

    try {
        const user = await jwt.verify(token, "niadsbibaibfbisadbif")
        req.user = user.email;
        next();
    } catch (error) {
        res.status(400).json({
            errors: [
                {
                    msg: 'Invalid Token'
                }
            ]
        })
    }
}