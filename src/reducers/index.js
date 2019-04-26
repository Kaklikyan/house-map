import { combineReducers } from 'redux';
import templates from './templates';
import housesData from './data';

export default combineReducers({
    templating: templates,
    data: housesData,
});