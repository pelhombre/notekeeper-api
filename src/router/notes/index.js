import { Router } from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../../controllers/index.js";

const notesRouter = Router();

notesRouter.get("/", getAllNotes);
notesRouter.post("/", createNote);
notesRouter.put("/:id", updateNote);
notesRouter.delete("/:id", deleteNote);

export default notesRouter;
