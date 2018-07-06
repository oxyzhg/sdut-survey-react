import { combineReducers } from 'redux';
import survey_catid from './survey_catid';
import survey_row_data from './survey_row_data';
import survey_formback from './survey_formback';

export default combineReducers({
  survey_catid,
  survey_row_data,
  survey_formback
});
