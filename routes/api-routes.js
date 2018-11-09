const db = require('../models');

module.exports = function(app) {
    app.get('/api/products', function(req, res) {
        db.Product.findAll({}).then(function(rows) {
            res.json(rows);
        }).catch(function(error) {
            res.json({ error: error });
        });
    });

    app.get('/api/products/:id', function(req, res) {
        db.Product.find({ where: {id: releaseEvents.params.id }})
        .then(function(data) {
            res.json(data);
        }).catch(function(error) {
            res.json({ error: error });
        })
    });
};