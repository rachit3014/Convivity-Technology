const Task= require('../models/task')
const { validationResult } = require("express-validator");

// module for creating the task
module.exports.Create= async function(req,res)
{
    try {

        const error=validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
          }
         const task=await Task.create(req.body)
        return res.status(201).json({
            message:"sucessfully created task",
            task

        });
        
    } catch (error) {
        console.log(error)
        
    }
}

//  module for updating the task status by its id
module.exports.updatetask= async function(req,res)
{
    try {
        const error=validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
          }
        const task= await Task.findByIdAndUpdate(req.params.id,{status:req.body.status},{ new: true } )
        return res.status(200).json({
            message:"sucessfully updated",
            task
    });
            

    } catch (error) {

        console.log(error);
    }
}

// module for deleting the task  by its id
module.exports.deletetask=async function(req,res)
{
    try {
        
        await Task.findByIdAndDelete(req.params.id);
        return res.status(204).json({
            message:"Sucessfully deleted"

        })

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message:'error 404 Not Found',
            error
        });
        
    }
}

// module for reterving all the task
module.exports.reterivetask=async function (req,res)
{
    try {
        const task= await Task.find();
        return res.status(200).json({
            message:'sucessfully reterieved task',
            task

        });


        
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message:'error',
            error
        });
       
        
    }
}

// module for reterving the task by its id
module.exports.retervietaskbyid= async function(req,res)
{
    try {

      
        const task= await Task.findById(req.params.id);
      
        return res.status(200).json({
            message:"sucessfully retrieved",
            task
    });

        
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message:'error 404 Not Found',
            error
        });
        
    }
}