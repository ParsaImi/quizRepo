const Tour = require("../models/TourModel")
const ErrorMaker = require('../utils/createError')
const catchAsync = require("../utils/catchAsync")


exports.createTour = catchAsync(async (req , res , next) => {
    await Tour.create(req.body)
    res.json({
        status : "success",
        msg : "the Tour has been created"
    })
}
)


exports.readTour = catchAsync(async (req , res , next) => {
    const id = req.params.id
    const tour = await Tour.findById(id)
    if(!tour){
        return next(new ErrorMaker('not valid id' , 404))
    }
    res.json({
        tour
    })
}
)