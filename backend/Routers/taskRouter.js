const express = require('express')
const router = express.Router()
const taskController  = require('../Controllers/taskController')


router.get('/',taskController.getAllTasks)
router.get('/:searchParams',taskController.getTaskBySearchParams)
router.post('/addTask',taskController.insertTask)
router.put('/updateTask/:id',taskController.UpdateTask)
router.delete('/deleteTask/:id',taskController.DeleteTask)
router.put('/updateCategory/:id',taskController.updateCategory)



module.exports = router