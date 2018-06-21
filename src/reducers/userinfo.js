const initialState = {
  college: [],
  className: '',
  gender: [],
  political: []
};

const userinfo = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USERINFO':
      return {
        ...action.info
      };
    default:
      return state;
  }
};

export default userinfo;
