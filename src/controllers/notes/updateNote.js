import notes from "../../data/index.js";
import { noteMapper } from "../../mappers/index.js";
import { checkElementExistsBasedOn } from "../../utils/index.js";

const updateNote = (repository) => {
  return (req, res) => {
    const noteContent = req.body;
    const { id: noteId } = req.params;

    const elementIndex = repository.findIndexNoteById(noteId);

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

    repository.updateNote(elementIndex, updatedNote);

    const updatedNoteDTO = noteMapper.toDTO(updatedNote);

    return res.status(200).json(updatedNoteDTO);
  };
};

export default updateNote;
