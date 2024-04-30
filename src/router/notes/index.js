import { Router } from "express";

import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../../controllers/index.js";
import notes from "../../data/index.js";
import { inMemoryNotesRepository } from "../../repositories/inMemoryNotesRepository.js";

const createNotesRouter = () => {
  const notesRouter = Router();

  const repository = inMemoryNotesRepository(notes);

  notesRouter.get("/", getAllNotes(repository));
  notesRouter.post("/", createNote(repository));
  notesRouter.put("/:id", updateNote(repository));
  notesRouter.delete("/:id", deleteNote(repository));

  return notesRouter;
};

const notesRouterIoC = (app) => {
  const notesRouter = createNotesRouter();

  app.use("/notes", notesRouter);
};

export default notesRouterIoC;
