import { api } from '../api/api';

export const GET_DISEASE_INFO = 'GET_DISEASE_INFO';

export const getDiseaseInfo = (type) => {
  return async (dispatch) => {
    const response = await api.get(`/api/DiseaseDescription/${type}`);
    dispatch({
      type: GET_DISEASE_INFO,
      payload: response.data,
    });
  }
}

