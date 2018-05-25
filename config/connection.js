var mysql = require("mysql");

// initializing mySQL connection
// TODO see how to deploy a mySQL database in Heroku
var connection = mysql.createConnection(process.env.JAWSDB_URL);

// connecting to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
