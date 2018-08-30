export const updateCatid = catid => ({
  type: 'UPDATE_CATID',
  catid
});

export const updatePrefs = data => ({
  type: 'UPDATE_PRE_FIELDS',
  data
});

export const updateSurfs = data => ({
  type: 'UPDATE_SURVEY_FIELDS',
  data
});

export const updateRawData = data => ({
  type: 'UPDATE_SURVEY_RAW_DATA',
  data
});
