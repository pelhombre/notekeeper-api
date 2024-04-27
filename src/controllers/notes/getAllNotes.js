import { noteMapper } from "../../mappers/index.js";

const getAllNotes = (repository) => {
  return (_req, res) => {
    const notes = repository.getAllNotes();

    const notesDTO = notes.map(noteMapper.toDTO);

    return res.json({ notes: notesDTO });
  };
};

export default getAllNotes;
