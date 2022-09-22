const express = require("express")
const TourController = require("../controller/TourController")
const Tour = require("../models/TourModel")
const router = express.Router()

router
.route('/create')
.post(TourController.createTour)

router.get('/read/:id' , TourController.readTour)



module.exports = router;