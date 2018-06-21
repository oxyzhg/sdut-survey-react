import { combineReducers } from 'redux';
import questions from './questions';
import answers from './answers';
import userinfo from './userinfo';

export default combineReducers({
  questions,
  answers,
  userinfo
});
