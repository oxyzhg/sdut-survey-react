const initialStore = {
  catid: null,
  preFields: [],
  surveyFields: [],
  rawData: {}
};

const surveyData = (state = initialStore, action) => {
  switch (action.type) {
    case 'UPDATE_CATID':
      return {
        ...state,
        catid: action.catid
      };
    case 'UPDATE_PRE_FIELDS':
      return {
        ...state,
        preFields: action.data
      };
    case 'UPDATE_SURVEY_FIELDS':
      return {
        ...state,
        surveyFields: action.data
      };
    case 'UPDATE_SURVEY_RAW_DATA':
      return {
        ...state,
        rawData: action.data
      };
    default:
      return state;
  }
};

export default surveyData;
