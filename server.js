require("dotenv").config();
const db=require('./config/mongoose')
const app=require('./index')
//  port number
const port=8000

// listenin port number
app.listen(port,function(err){
    if (err)
    {
        console.log(err)
    }
    console.log("yup server is running on",port)
})
