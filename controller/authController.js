const User = require("../models/userModel")
const catchAsync = require("../utils/catchAsync")
exports.signup = catchAsync(async (req , res , next) => {
    await User.create(req.body)
    res.json({
        status : "success",
        msg : "the user has been created"
    })
}
)