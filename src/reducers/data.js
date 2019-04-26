import { FETCH_DATA } from '../actions/types';

const initialState = {
    houses: [],
}

const housesData = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA: 
            return {
                ...state,
                houses: action.payload,
            }
        default:
            return state;
    }
}

export default housesData; 
