import notes from "../../data/index.js";
import { noteMapper } from "../../mappers/index.js";
import { generatePrefixedID } from "../../utils/index.js";

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

export default createNote;
