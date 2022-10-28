const modelPlanos = require("../model/modelPlanos")

const homeController = {
    index: (req, res)=>{
        const todosPlanos = modelPlanos.todosPlanos()
        console.log(todosPlanos);
        res.render("home", {todosPlanos})
    }




}

module.exports = homeController