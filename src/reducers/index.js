import {GET_IMMUNITIES} from "../actions/get-immunities";
import {combineReducers} from "redux";

const userReducer = () => ({
  uuid: '9f71b7d3-5f8f-4824-a09c-adf63c96449c',
})

const immunitiesReduces = (store = [] , action) => {
  if (action.type === GET_IMMUNITIES) {
    return action.payload;
  }

  return store;
}

export const reducers = combineReducers({
  immunities: immunitiesReduces,
  user: userReducer,
})
