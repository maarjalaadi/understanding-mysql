const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwerty"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("MySQL Server connected!");
});