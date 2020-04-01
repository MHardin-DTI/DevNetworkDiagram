const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BigDog123!",
  database: "people"
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting" + err.stack);
    return;
  }
  console.log("connected to MySQL");
  connection.query("CREATE DATABASE people_db", (err, res) => {
    if (err) throw err;

  })
});

module.exports = connection;