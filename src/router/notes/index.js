const express = require("express");
const notesController = require("../../controllers");

const notesRouter = express.Router();

notesRouter.get("/", notesController.getAllNotes);
notesRouter.post("/", notesController.createNote);
notesRouter.put("/:id", notesController.updateNote);
notesRouter.delete("/:id", notesController.deleteNote);

module.exports = notesRouter;
