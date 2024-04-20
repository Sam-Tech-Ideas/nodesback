const Note = require("../models/noteModel");



const createNote = async (req, res) => {


    const newNote = new Note({
        title: req.body.title,
        content: req.body.content,
    });


    const createdNote = await newNote.save();
    res.json(createdNote);

}

module.exports = createNote;

