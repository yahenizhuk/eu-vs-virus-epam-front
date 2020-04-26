import { api } from '../api/api';

const defaultUser = "9f71b7d3-5f8f-4824-a09c-adf63c96449c";
export const GET_IMMUNITIES = 'GET_IMMUNITIES'

export const getImmunities = (userId=defaultUser) => {
  return async (dispatch) => {
    const response = await api.get(`/Immunisation/${userId}`);
    console.log(response);
    const immunities = response.data.map(immunity => ({
      name: immunity.immuneType,
      isValid: immunity.tested,
      validFor: immunity.certExpiry.slice(0, 10),
    }));

    dispatch({
      type: GET_IMMUNITIES,
      payload: immunities,
    });
  }
}

