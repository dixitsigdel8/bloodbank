const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require("./config/db")

//dot config
dotenv.config()

//rest object 

const app = express();

//middlewares
app.use(express.json())
app.use(cors());
app.use(morgan('dev'))


//port 
const PORT = process.env.PORT || 8080;

//listen
app.listen(`${PORT}`,()=>{
    console.log(`Server running in ${process.env.DEV_MODE} on ${PORT} Port`)
})