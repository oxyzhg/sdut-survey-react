const initialStore = {};

const answers = (state = initialStore, action) => {
  switch (action.type) {
    case 'UPDATE_ANSWER':
      return {
        ...state,
        ...action.answers
      };
    default:
      return state;
  }
};

export default answers;
