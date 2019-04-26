import { FETCH_DATA } from './types';

export const fetchData = () => async dispatch => {
    const res = await fetch('http://demo4452328.mockable.io/properties');
    const { data } = await res.json();

    return await dispatch({
        type: FETCH_DATA,
        payload: data,
    });
};