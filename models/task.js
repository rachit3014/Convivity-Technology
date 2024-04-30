const mongoose=require('mongoose');
//  task schema
const taskSchema=new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending", "in progress", "completed"],
        required:true
    }
},{
    timestamps:true,
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
          ret.createdAt = ret.createdAt.toISOString().split('T')[0];
          ret.updatedAt = ret.updatedAt.toISOString().split('T')[0];
          delete ret.__v;
          return ret;
        },
      },

})
//  creating a  model
const Task=mongoose.model("Task",taskSchema)
module.exports=Task
