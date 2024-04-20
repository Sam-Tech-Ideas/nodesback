const Note = require("../models/noteModel");


const getNotesController = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}

module.exports = getNotesController;
