const jwt = require("jsonwebtoken")
const {jwtKey} = require("../config/secrets")
const database = require("../models")

function authLogin(req, res, next){
    const {token} = req.cookies

    if(!token){
        res.redirect("/login")
    }
    if(token){
        const {id} = req.params
    }

    try {
        const decode = jwt.verify(token, jwtKey)
    } catch (error) {
        res.redirect("/login")
    }
    
    
    
    
    next()
}

module.exports = {
    authLogin,
}