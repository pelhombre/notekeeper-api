const toDTO = ({ _id, ...restOfNote }) => ({
  id: _id,
  ...restOfNote,
});

const noteMapper = {
  toDTO,
};

module.exports = noteMapper;
