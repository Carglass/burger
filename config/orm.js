let db = require("./connection");

// added promises to be able to return results following functional programing recomendations (I find it cleaner in that case)
// could have user a library, but it felt easier to do it quickly here than learning a new library.
let orm = {
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM burgers", (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  },
  insertOne: burgerName => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO burgers SET ?;",
        { burger: burgerName, isDevoured: 0 },
        (err, res) => {
          if (err) reject(err);
          console.log("insert done");
          // resolving on insertId, so that an object can be instantiated with the ID (required for update)
          resolve(res.insertId);
        }
      );
    });
  },
  updateOne: burgerId => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE burgers SET ? WHERE ?",
        [{ isDevoured: 1 }, { id: burgerId }],
        (err, res) => {
          if (err) reject(err);
          console.log("update done");
          // resolving on message, in case it needs to be logged
          resolve(res.message);
        }
      );
    });
  },
  deleteOne: burgerId => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM burgers WHERE ?", { id: burgerId }, (err, res) => {
        if (err) reject(err);
        console.log("delete done");
        resolve(res.message);
      });
    });
  }
};

// tests run directly from node orm.js to test the module and the connection to db

// testBurger = orm.insertOne("403");
// testBurger.then(
//   result => {
//     console.log(result);
//   },
//   error => {
//     console.log(error);
//   }
// );
// orm.updateOne(8).then(
//   result => {
//     console.log(result);
//   },
//   error => {
//     console.log(error);
//   }
// );
// var p = orm.selectAll();
// p.then(
//   result => {
//     console.log(result);
//   },
//   error => {
//     console.log(error);
//   }
// );

module.exports = orm;
