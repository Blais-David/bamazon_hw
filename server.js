const express = require('express');
const path = require('path');

const app = express();

var PORT = process.env.PORT || 3000;

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './public')));

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});