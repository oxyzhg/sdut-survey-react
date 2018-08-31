export const updatePrefsAnswers = data => ({
  type: 'UPDATE_PREFS_ANSWERS',
  data
});

export const updateSurveyAnswers = data => ({
  type: 'UPDATE_SURVEY_ANSWERS',
  data
});

export const clearAllAnswers = () => ({
  type: 'CLEAR_ALL_ANSWERS',
  data: []
})
