const conn = require('../Services/db')


exports.getAllTasks = async (req,res,next) => {
   await conn.query("SELECT * FROM tasks",function(err,data,fields){
    res.status(200).json({
        status:"success",
        data:data
    })
   })
}











exports.insertTask = async (req,res,next) => {
    const values = Object.values(req.body)
    
    await conn.query("INSERT INTO tasks(title,heading,content,tagColor,created_at,category) VALUES ?",[[values]],function(err,result){
        if (err) throw err;
        res.status(201).json({
            status: "success",
            message: "task inserted",
          });


    })
}














exports.UpdateTask = async (req,res,next) => {
    const taskid = req.params.id
    
    await conn.query(`UPDATE tasks SET title = '${req.body.title}' ,heading = '${req.body.heading}',content = '${req.body.content}',tagColor = '${req.body.tagColor}',created_at = '${req.body.created_at}',category = '${req.body.category}' WHERE id = ${taskid}`,function(err,result){
        if (err) throw err;
        res.status(201).json({
            status: "success",
            message: "task updated",
          });


    })
}














exports.DeleteTask = async (req,res,next) => {
    let taskid = req.params.id
    
    await conn.query(`DELETE FROM tasks  WHERE id = ${taskid}`,function(err,result){
        if (err) throw err;
        res.status(201).json({
            status: "success",
            message: "task deleted",
          });


    })
}






exports.updateCategory = async (req,res,next) => {
  let taskid = req.params.id

  await conn.query(`UPDATE tasks SET category = ${req.body.category} WHERE id = ${taskid}`,function(err,result) {
    if (err) throw err;
    res.status(201).json({
        status: "success",
        message: "task category updated",
      });
  })
 


}