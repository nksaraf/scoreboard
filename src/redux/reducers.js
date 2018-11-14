import { combineReducers } from "redux";
import { types } from './actions';

// const initialState = {
// 	scoreboard: {},
// 	loading: false,
// 	error: null
// }

function scoreboard(state={}, action) {
	console.log(action);
	switch(action.type) {
    case types.FETCH_SCOREBOARD_BEGIN:
    	return state;

    case types.FETCH_SCOREBOARD_SUCCESS:
      return action.payload.scoreboard.data;

    case types.FETCH_SCOREBOARD_FAILURE:
      return state;

    default:
      return state;
  }
}

function loading(state=false, action) {
	switch(action.type) {
    case types.FETCH_SCOREBOARD_BEGIN:
    	return true;

    case types.FETCH_SCOREBOARD_SUCCESS:
      return false;

    case types.FETCH_SCOREBOARD_FAILURE:
      return false;

    default:
      return state;
  }
}

function error(state=null, action) {
	switch(action.type) {
    case types.FETCH_SCOREBOARD_BEGIN:
    	return null;

    case types.FETCH_SCOREBOARD_SUCCESS:
      return null;

    case types.FETCH_SCOREBOARD_FAILURE:
      return action.payload.error;

    default:
      return state;
  }
}


export default combineReducers({ scoreboard, loading, error });