import { Router } from "express";
import { inMemoryNotesRepository } from "../../../repositories/index.js";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../../controllers/index.js";
import notes from "../../data/index.js";

const notesRouter = Router();

const repository = inMemoryNotesRepository(notes);

notesRouter.get("/", getAllNotes(repository));
notesRouter.post("/", createNote(repository));
notesRouter.put("/:id", updateNote(repository));
notesRouter.delete("/:id", deleteNote(repository));

export default notesRouter;
