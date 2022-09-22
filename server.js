const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({path : './config.env'})

const {DATABASE} = process.env
const {DATABASE_PASSWORD} = process.env
const dbAdress = DATABASE.replace('<PASSWORD>' , DATABASE_PASSWORD)

mongoose.connect(dbAdress).then(() => {
    console.log('app connected to the DataBase');
})


const port = process.env.PORT || 2000
app.listen(port , () => {
    console.log('server waiting for request');
})