export const inMemoryNotesRepository = (notesCollection) => {
  const notes = notesCollection;

  return {
    getAllNotes() {
      return notes;
    },

    getNote(index) {
      return notes[index];
    },

    addNote(note) {
      notes.push(note);
    },

    updateNote(index, note) {
      notes[index] = note;
    },

    removeNote(index) {
      return notes.splice(index, 1);
    },

    findIndexNoteById(noteId) {
      return notes.findIndex((note) => note._id === noteId);
    },
  };
};
