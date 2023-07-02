const mysql = require('mysql')
require('dotenv').config()

// Database Config
var con = mysql.createConnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USERNAME,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_NAME
  })

  con.connect()





  
  module.exports = con
