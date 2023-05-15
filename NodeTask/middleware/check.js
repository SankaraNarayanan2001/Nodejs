 const jwt = require('jsonwebtoken')
 
 exports.checkcheck=async (req, res, next) => {
    const token = req.header('token')
    

    // CHECK IF WE EVEN HAVE A TOKEN
    if(!token){
       return  res.status(400).json({
            errors: [
                {
                    msg: "No token found"
                }
            ]
        })
    }

    try {
        const user = await jwt.verify(token, "niadsbibaibfbisadbif")
        req.user = user.id;
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