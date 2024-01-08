 const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwerty",
  database: "mydb",
});

con.connect((err => {
  if (err) throw err;
  console.log("MySQL Server connected!");
const sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, (err,result) =>{
    if (err) throw err;
    console.log("Database mydb created");
  });
});