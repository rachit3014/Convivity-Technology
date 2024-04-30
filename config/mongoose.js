const mongoose=require('mongoose')
// configure mongoose
mongoose.connect(process.env.MONGODB_URL)
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error to connecting'));
db.once('open',function(){
    console.log('sucessfully  connected to db')
})
module.exports=db