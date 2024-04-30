const express=require('express')
const {body,param}=require('express-validator')
const router=express.Router()
const taskControlleer=require('../controllers/task')

// routes for creating tasks
router.post('/create',[body('title').notEmpty().withMessage('Invalid input value for field title '),
body('description').notEmpty().withMessage('Invalid input value for field description '),
body('status').notEmpty().withMessage('Please enter valid status e.g. completed, pending, in progress')
],taskControlleer.Create)

// routes for deleting tasks
router.delete('/delete/:id',taskControlleer.deletetask)
// routes for getting all tasks
router.get('/',taskControlleer.reterivetask)
// routes for updating  tasks by its id
router.patch('/update/:id',[body('status').notEmpty().withMessage('Please enter valid status e.g. completed, pending, in progress')],taskControlleer.updatetask)
// routes for getting task by its id
router.get('/task/:id',taskControlleer.retervietaskbyid)

module.exports=router