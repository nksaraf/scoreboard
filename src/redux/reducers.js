import { combineReducers } from "redux";
import { types } from './actions';

// const initialState = {
// 	scoreboard: {},
// 	loading: false,
// 	error: null
// }

function splitByProject(todos) {
  let projects = {};
  for (var i = 0; i < todos.length; i++) {
    let todo = todos[i];
    for (let project of todo.projects) {
      if (!(project in projects)) {
        projects[project] = [];
      }
      projects[project].push(todo);
    }
  }
  return projects;
}

function todos(state={}, action) {
	console.log(action);

	switch(action.type) {
    case types.READ_TODOTXT:
    	return splitByProject(action.payload.todos);

    default:
      return state;
  }
}

function error(state=null, action) {
	switch(action.type) {

    default:
      return state;
  }
}


export default combineReducers({ todos, error });