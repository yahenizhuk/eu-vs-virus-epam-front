import {GET_IMMUNITIES} from "../actions/get-immunities";
import {combineReducers} from "redux";
import {GET_IMMUNITY_DETAILS} from "../actions/get-immunity-details";
import {GET_DISEASE_INFO} from "../actions/get-desease-info";

const userReducer = () => ({
  uuid: '9f71b7d3-5f8f-4824-a09c-adf63c96449c',
})

const immunityDetailsReducer = (store = {} , action) => {
  if (action.type === GET_IMMUNITY_DETAILS) {
    return action.payload;
  }

  return store;
}

const diseaseDetailsReducer = (store = {} , action) => {
  if (action.type === GET_DISEASE_INFO) {
    return action.payload;
  }

  return store;
}

const immunitiesReduces = (store = [] , action) => {
  if (action.type === GET_IMMUNITIES) {
    return action.payload;
  }

  return store;
}

export const reducers = combineReducers({
  diseaseInfo: diseaseDetailsReducer,
  immunityDetails: immunityDetailsReducer,
  immunities: immunitiesReduces,
  user: userReducer,
})
