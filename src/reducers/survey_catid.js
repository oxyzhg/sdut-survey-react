const initialState = '';

const surveyCatid = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CATID':
      return action.catid;
    default:
      return state;
  }
};

export default surveyCatid;
