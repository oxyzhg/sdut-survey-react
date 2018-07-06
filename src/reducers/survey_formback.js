const initialStore = {
  field_answers: {},
  survey_answers: {}
};

const surveyFormBack = (state = initialStore, action) => {
  switch (action.type) {
    case 'UPDATE_PRE_FIELD_ANSWERS':
      return {
        ...state,
        field_answers: {
          ...action.data
        }
      };
    case 'UPDATE_SURVEY_ANSWERS':
      return {
        ...state,
        survey_answers: {
          ...action.data
        }
      };
    default:
      return state;
  }
};

export default surveyFormBack;
