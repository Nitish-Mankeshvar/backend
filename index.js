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

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    res: "hi",
  });
});

app.listen(5000, () => console.log("server started!"));
