const orm = require("./../config/orm");

// let Burger = function(id, name, isDevoured, devour) {
//   this.id = id;
//   this.name = name;
//   this.isDevoured = isDevoured;
//   this.devour = devour;
// };

// let burgerAsyncFactory = function(name) {
//   // it returns a promise that will be resolved on a new Burger object AFTER it is created in the database
//   // this avoids giving the illusion that the creation worked if the connection to the database is lost for example
//   // we would not want our poor user to believe he did devour burgers that were RAM ghosts!
//   return new Promise((resolve, reject) => {
//     orm.insertOne(name).then(
//       id => {
//         resolve(
//           new Burger(id, name, 0, function() {
//             orm.updateOne(this.id).catch(err => {
//               throw err;
//             });
//           })
//         );
//       },
//       err => {
//         reject(err);
//       }
//     );
//   });
// };

// fetchAllBurgers = () => {
//   return orm.selectAll();
// };

let burger = {
  all: () => {
    return orm.selectAll();
  },
  create: burgerName => {
    return orm.insertOne(burgerName);
  },
  update: burgerId => {
    return orm.updateOne(burgerId);
  },
  delete: burgerId => {
    return orm.deleteOne(burgerId);
  }
};

module.exports = burger;
// {
//   burgerPromise: burgerAsyncFactory,
//   fetchAllPromise: fetchAllBurgers
// };

//tests

// let rDeluxe = burgerAsyncFactory("Croque McDo");
// rDeluxe.then(result => {
//   console.log(result);
//   result.devour();
// });

// fetchAllBurgers().then(res => {
//   console.log(res);
// });
