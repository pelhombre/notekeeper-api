const notes = require("../../data");
const { noteMapper } = require("../../mappers");
const { generatePrefixedID } = require("../../utils");

const createNote = (req, res) => {
  const note = req.body;

  const newNote = {
    ...note,
    _id: generatePrefixedID(),
    created_at: Date.now(),
  };

  notes.push(newNote);

  const noteDTO = noteMapper.toDTO(newNote);

  return res.status(201).json(noteDTO);
};

module.exports = createNote;
