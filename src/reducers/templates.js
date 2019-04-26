import { FETCH_TEMPLATES, CHANGE_ACTIVE_TEMPLATE } from '../actions/types';

const initialState = {
    templates: [],
    activeTemplate: [],
}

const templates = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TEMPLATES: 
            return {
                ...state,
                templates: action.payload,
                activeTemplate: action.payload[0],
            }
        case CHANGE_ACTIVE_TEMPLATE: 
            return {
                ...state,
                activeTemplate: action.payload,
            }
        default:
            return state;
    }
}

export default templates; 
