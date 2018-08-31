const initialStore = {
  prefsAnswers: {},
  surveyAnswers: {}
};

const surveyData = (state = initialStore, action) => {
  switch (action.type) {
    case 'UPDATE_PREFS_ANSWERS':
      return {
        ...state,
        prefsAnswers: {
          ...action.data
        }
      };
    case 'UPDATE_SURVEY_ANSWERS':
      return {
        ...state,
        surveyAnswers: {
          ...action.data
        }
      };
    case 'CLEAR_ALL_ANSWERS':
      return {
        prefsAnswers: {},
        surveyAnswers: {}
      };
    default:
      return state;
  }
};

export default surveyData;
