// const jwt = require("jwt")
// const {jwtKey} = require("../config/secrets")

function authLogin(req, res, next){
    const {token} = req.cookies

    if(!token){
        res.redirect("/login")
    }

    // try {
    //     const decode = jwt.verify(token, jwtKey)
    // } catch (error) {
    //     res.redirect("/login")
    // }
    
    
    
    
    next()
}

module.exports = {
    authLogin,
}