import { combineReducers } from 'redux';
import baseUrl from './baseUrl';
import surveyData from './surveyData';
import surveyAnsws from './surveyAnsws';

export default combineReducers({
  baseUrl,
  surveyData,
  surveyAnsws
});
