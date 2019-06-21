//https://medium.com/@eth3rnit3/sequelize-relationships-ultimate-guide-f26801a75554

const express = require('express');
const path = require('path');
const app = express();

require("dotenv").config();
const config = require("./keys.js");

const logger = require('./app/middleware/logger');

/*var mysql = require('mysql');
console.log(config.keys.JAW_SQL_STRING);
var connection = mysql.createConnection(
  config.keys.JAW_SQL_STRING
);

connection.connect();*/

// Sequelize Sync 
const models = require('./models');
models.sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

const UserContext = models.friend;

app.use(logger);

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'app', 'public')));

// ROUTER
require("./app/routing/apiRoutes")(app, models);
require("./app/routing/htmlRoutes")(app);

// SET SERVER LISTENING PORT
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));