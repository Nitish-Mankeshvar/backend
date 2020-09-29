/*
    **************************@copyright 2020*******************************

    Gamers API Version 1.0
    Author: Nitish Mankeshvar (nvision studios)
    This API is the sole property of the author and the use of this api 
    other than the author must be first with the concent of him respectfully.

    ************************************************************************
*/

const express = require("express");
const app = express();
const dotenv = require("dotenv");

// connecting to database
const db = require("./utils/db");

//Loading env files
dotenv.config({ path: "./config/config.env" });

// Loading all the routes
const gamerRoutes = require("./routes/gamerRoutes");
app.use("/api/v1/gamer", gamerRoutes);

app.use(express.json());

db()
  .then((db) => {
    console.log("connected to database");
    app.listen(5000, () => console.log("server started!"));
  })
  .catch((err) => console.log(err));
