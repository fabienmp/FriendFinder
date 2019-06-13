const express = require('express');
const path = require('path');
const app = express();
const logger = require('./app/middleware/logger');

app.use(logger);

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'app', 'public')));

// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// SET SERVER LISTENING PORT
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));