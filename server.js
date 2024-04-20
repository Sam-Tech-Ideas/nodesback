const express = require("express");


//setup server

const app = express();
const PORT =  5000;

app.get("/", (req, res) => {
    res.send("Hello World");
    }
);


app.listen( PORT, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});