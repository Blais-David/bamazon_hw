const db = require('../models');

const items = [
    {
        product_name: "Red Dead Redemption II",
        department_name: "Video Games",
        price: 59.99,
        stock_quantity: 500
    },
    {
        product_name: "Pistachios",
        department_name: "Food",
        price: 4.99,
        stock_quantity: 29
    },
    {
        product_name: "Really Awesome Tent",
        department_name: "Sporting Goods",
        price: 129.99,
        stock_quantity: 59
    },
    {
        product_name: "Just Cause 4",
        department_name: "Video Games",
        price: 59.99,
        stock_quantity: 338
    },
    {
        product_name: "Fake Lightsaber",
        department_name: "Toys",
        price: 32.00,
        stock_quantity: 92
    },
    {
        product_name: "Apple Homepod",
        department_name: "Electronics",
        price: 129.99,
        stock_quantity: 78
    },
    {
        product_name: "Raspberry Pi (Gen 3)",
        department_name: "Electronics",
        price: 62.00,
        stock_quantity: 29
    },
    {
        product_name: "1 Case of Berry Lacroix",
        department_name: "Food",
        price: 10.00,
        stock_quantity: 500
    },
    {
        product_name: "Awesome Millenium Falcon Shirt",
        department_name: "Clothing",
        price: 20.00,
        stock_quantity: 19
    },
    {
        product_name: "There Will Be Blood (DVD)",
        department_name: "Movies",
        price: 15.00,
        stock_quantity: 31
    },
    {
        product_name: "Shaun of the Dead (BluRay)",
        department_name: "Movies",
        price: 8.99,
        stock_quantity: 3
    },
];

db.sequelize.sync({ force:true }).then(function() {
    db.Product.bulkCreate(items).then(function(rows) {
        console.log('\n\nInserted\n\n');
    }).catch(function(err) {
        console.log('\n\nError:', err);
    });
});