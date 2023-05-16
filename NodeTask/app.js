const express = require("express");
const routes1 = require('./routes/routesroutes');
const routes2 = require('./routes/update')
const app = express();
app.use(express.json());

app.use(routes1)
app.use(routes2)

app.listen(3000);