import { FETCH_TEMPLATES, CHANGE_ACTIVE_TEMPLATE } from './types';

export const fetchTemplates = () => async dispatch => {
   const res = await fetch('http://demo4452328.mockable.io/templates');
   const templates = await res.json();

   return await dispatch({
       type: FETCH_TEMPLATES,
       payload: templates,
   });
};

export const changeActiveTemplate = template => dispatch => {
    return dispatch({
        type: CHANGE_ACTIVE_TEMPLATE,
        payload: template,
    });
};