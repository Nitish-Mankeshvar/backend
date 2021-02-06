const express = require("express");
const app = express();
const dotenv = require("dotenv");

const cors = require("cors");
// connecting to database
const db = require("./utils/db");

//Loading env files
dotenv.config({ path: "./config/config.env" });

// to convert REQ to JSON
app.use(express.json());

// using cors
app.use(cors());

// Loading all the routes
const gamerRoutes = require("./routes/gamerRoutes");
app.use("/api/v1/gamer", gamerRoutes);

db()
  .then((db) => {
    console.log("connected to database");
    app.listen(process.env.PORT, () => console.log("server started!"));
  })
  .catch((err) => console.log(err));
