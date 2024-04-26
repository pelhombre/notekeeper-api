const notes = require("../../data");
const { noteMapper } = require("../../mappers");

const getAllNotes = (_req, res) => {
  const notesDTO = notes.map(noteMapper.toDTO);

  return res.json({ notes: notesDTO });
};

module.exports = getAllNotes;
