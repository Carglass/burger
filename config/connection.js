var mysql = require("mysql");

// initializing mySQL connection
// TODO see how to deploy a mySQL database in Heroku
var connection = mysql.createConnection({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  user: "root",
  password: "root",
  database: "burgers_db"
});

// connecting to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
