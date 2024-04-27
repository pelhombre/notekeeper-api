import { noteMapper } from "../../mappers/index.js";
import { checkElementExistsBasedOn } from "../../utils/index.js";

const deleteNote = (repository) => {
  return (req, res) => {
    const { id: noteId } = req.params;

    const elementIndex = repository.findIndexNoteById(noteId);

    const elementExists = checkElementExistsBasedOn({ elementIndex });

    if (!elementExists) {
      return res
        .status(404)
        .json({ error: `Note with id ${noteId} does not exist` });
    }

    const deletedNote = repository.getNote(elementIndex);

    repository.removeNote(elementIndex);

    const deletedNoteDTO = noteMapper.toDTO(deletedNote);

    return res.status(200).json(deletedNoteDTO);
  };
};

export default deleteNote;
