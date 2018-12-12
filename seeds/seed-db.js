   const db = require('../models');

  const items = [{
   
       product_name: "Red Dead Redemption II (PS4)",
       department_name: "Video Games",
       price: 60.00,
       stock_quantity: 102
   },
   {
       product_name: "LaCie 1TB Hard Drive",
       department_name: "Computer Equipment",
       price: 51.50,
       stock_quantity: 32
   },
   {
       product_name: "Men's Basic White T-Shirt",
       department_name: "Clothing",
       price: 14.00,
       stock_quantity: 72
   },
   {
       product_name: "Shaun of The Dead Steelbook BluRay",
       department_name: "Movies",
       price: 24.99,
       stock_quantity: 21
   },
   {
       product_name: "Beats Headphones (Over Ear)",
       department_name: "Music",
       price: 149.99,
       stock_quantity: 57
   },
   {
       product_name: "Really Awesome Tent (Yeah, that's the real name)",
       department_name: "Outdoor",
       price: 267.99,
       stock_quantity: 4
   },
   {
       product_name: "LaCroix Berry (24-pack)",
       department_name: "Food",
       price: 12.00,
       stock_quantity: 20
   },
   {
       product_name: "Legend of Zelda: Breath of The Wild (Switch)",
       department_name: "Video Games",
       price: 59.99,
       stock_quantity: 44
   },
   {
       product_name: "Duracell Rechargable Battery Pack",
       department_name: "Electronics",
       price: 29.99,
       stock_quantity: 120
   },
   {
       product_name: "Apple iPad Pro (12-Inch)",
       department_name: "Electronics",
       price: 1100.00,
       stock_quantity: 13
   },
   {
       product_name: "Letterkenny Season 1 DVD",
       department_name: "Movies",
       price: 22.00,
       stock_quantity: 9
   },
   {
       product_name: "4 All Season Tires (265/75R16)",
       department_name: "Automotive",
       price: 419.99,
       stock_quantity: 30
   }
   ];
   
   db.sequelize.sync({force: true}).then(function () {
    db.Product.bulkCreate(items).then(function (data) {
       db.sequelize.close();
   }).catch(function (error) {
       db.sequelize.close();
   });
   });