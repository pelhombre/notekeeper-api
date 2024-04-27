const toDTO = ({ _id, ...restOfNote }) => ({
  id: _id,
  ...restOfNote,
});

const noteMapper = {
  toDTO,
};

export default noteMapper;
