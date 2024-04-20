const express = require("express");
const connectDB = require("./src/config/db");
const dotenv = require("dotenv").config();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const createNote = require("./src/controllers/createNoteController");
const getNotesController = require("./src/controllers/getNotesController");

//setup server
connectDB();
const app = express();
const PORT =  5000;



app.get("/", (req, res) => {
    res.send("Hello World");
    }
);

app.get("/api/notes", getNotesController);


app.post("/api/notes",createNote);







app.listen( PORT, function () {
  console.log(`Express app running on port  +  ${PORT}`);
});