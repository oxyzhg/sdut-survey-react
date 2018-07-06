const initialState = {};

const rowData = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ROW_DATA':
      return {
        ...action.data
      };
    default:
      return state;
  }
};

export default rowData;
