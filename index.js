const express = require('express')
const app = express()
const port = 3000

require("./src/middlewares")(app);
require("./src/routes")(app);
const sequelize = require('./config/db');

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})