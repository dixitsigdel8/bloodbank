const express = require('express')

//rest object 

const app = express();

//port 
const PORT = 8000

//listen
app.listen(`${PORT}`,()=>{
    console.log(`Server is running on ${PORT} Port`)
})