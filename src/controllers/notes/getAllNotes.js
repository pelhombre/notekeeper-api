import notes from "../../data/index.js";
import { noteMapper } from "../../mappers/index.js";

const getAllNotes = (_req, res) => {
  const notesDTO = notes.map(noteMapper.toDTO);

  return res.json({ notes: notesDTO });
};

export default getAllNotes;
