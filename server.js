const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const authRouter = require("./routes/authRoute")

//dot config
dotenv.config()

//rest object 

const app = express();

//middlewares
app.use(express.json())
app.use(cors());
app.use(morgan('dev'))

//all routes will be here


app.use('/api/v1/auth/',authRouter);

app.use('*',(req,res)=>{
    res.status(404).json({
        status:'failed',
        message: 'Route not found'
    })
})
//port 
const PORT = process.env.PORT || 8080;

//listen
app.listen(`${PORT}`,()=>{
    console.log(`Server running in ${process.env.DEV_MODE} on ${PORT} Port`)
})