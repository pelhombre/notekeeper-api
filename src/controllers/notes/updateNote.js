const notes = require("../../data");
const { noteMapper } = require("../../mappers");
const { checkElementExistsBasedOn } = require("../../utils");

const updateNote = (req, res) => {
  const noteContent = req.body;
  const { id: noteId } = req.params;

  const elementIndex = notes.findIndex((note) => note._id === noteId);

  const elementExists = checkElementExistsBasedOn({ elementIndex });

  if (!elementExists) {
    return res
      .status(404)
      .json({ error: `Note with id ${noteId} does not exist` });
  }

  const updatedNote = {
    ...notes[elementIndex],
    ...noteContent,
  };

  notes[elementIndex] = updatedNote;

  const updatedNoteDTO = noteMapper.toDTO(updatedNote);

  return res.status(200).json(updatedNoteDTO);
};

module.exports = updateNote;
