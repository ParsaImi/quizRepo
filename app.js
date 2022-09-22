const express = require('express')
const app = express()
const userRouter = require("./routes/userRouter")
const tourRouter = require("./routes/tourRouter")
const ErrorMaker = require("./utils/createError")
const errorHandler = require("./controller/errorController")

app.use(express.json({ limit : "10kb" }))

app.use(express.urlencoded({extended : true , limit : '10kb'}))


app.use("/users" , userRouter)
app.use("/tours" , tourRouter)

app.all("*" , (req , res , next) => {
    next(new ErrorMaker(`cant find ${req.originalUrl} in server !` , 404))
})

app.use(errorHandler)





module.exports = app