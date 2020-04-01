const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BigDog123!"

});

connection.connect((err) => {
  if (err) {
    console.error("error connecting" + err.stack);
    return;
  }
  console.log("connected to MySQL");
});

module.exports = connection;