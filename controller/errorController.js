const ErrorMaker = require("../utils/createError")
function handleCastError(err){
    console.log(err.path);
    let message = `invalid ${err.path} for ${err.value}`
    return new ErrorMaker(message , 400)
}

const sendErrorProd = (err , res) => {
    console.log(err.isOperational);
    if(err.isOperational){
        res.status(err.statusCode).json({
            status : err.status,
            message: err.message,
        })
    }else{
        res.status(500).json({
            status : "fail",
            message : "server error"
        })
    }
}


const sendErrorDev = (err , res) => {
    res.status(err.statusCode).json({
        status : err.status,
        err,
        message: err.message,
        stack : err.stack
    })
}

module.exports = (err , req , res , next) => {

    err.statusCode = err.statusCode || 500
    err.status = err.status || "error"

    if(process.env.NODE_ENV === "development"){
        sendErrorDev(err , res)

    }
    else if(process.env.NODE_ENV === "production"){
        let error = {...err}
        error.name = err.name
        error.message = err.message
        if(error.name === "CastError"){
            console.log("its cast error");
            error = handleCastError(err)
       }
        sendErrorProd(error , res)
    }
}