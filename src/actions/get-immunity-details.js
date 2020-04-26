import { api } from '../api/api';

export const GET_IMMUNITY_DETAILS = 'GET_IMMUNITY_DETAILS';

export const getImmunityDetails = (userId, type) => {
  return async (dispatch) => {
    const response = await api.get(`/Immunisation/${userId}?immuneType=${type}`);
    dispatch({
      type: GET_IMMUNITY_DETAILS,
      payload: response.data[0],
    });
  }
}

