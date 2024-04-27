import notes from "../../data/index.js";
import { noteMapper } from "../../mappers/index.js";
import { checkElementExistsBasedOn } from "../../utils/index.js";

const deleteNote = (req, res) => {
  const { id: noteId } = req.params;

  const elementIndex = notes.findIndex((note) => note._id === noteId);

  const elementExists = checkElementExistsBasedOn({ elementIndex });

  if (!elementExists) {
    return res
      .status(404)
      .json({ error: `Note with id ${noteId} does not exist` });
  }

  const [deletedNote] = notes.splice(elementIndex, 1);
  const deletedNoteDTO = noteMapper.toDTO(deletedNote);

  return res.status(200).json(deletedNoteDTO);
};

export default deleteNote;
