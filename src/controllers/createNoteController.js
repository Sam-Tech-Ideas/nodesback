const Note = require("../models/noteModel");



const createNote = async (req, res) => {
  console.log(req.body);

    const note = new Note(
        {
            title: req.body.title,
            content: req.body.content,
            date: req.body.date
        }
    );
    await note.save();
    res.json(note);





}

module.exports = createNote;