import axios from 'axios';
import moment from 'moment';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { TodoTxt, TodoTxtItem } from 'jstodotxt';

// const API = "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard";
const API = "http://localhost:5000/scoreboard";

export const types = {
	READ_TODOTXT: 'READ_TODOTXT'
}
//const ENDPOINT = "scoreboard";

export const readTodotxt = (todotxt_path) => {
	let todotxt = fs.readFileSync(path.join(os.homedir(), todotxt_path)).toString();
	let todos = TodoTxt.parse(todotxt);
	return {
		type: types.READ_TODOTXT,
		payload: { todos }
	}
}

export const fetchScoreboard = (date) => {
	console.log(date);
	return (dispatch) => {
		dispatch(fetchScoreboardBegin());
		let api = API;
		if (!(date.isSame(moment(), 'day'))) {
			api = api + '/' + date.format('YYYYMMDD');
		}
		return axios.get(api).then(
			(response) => {
				dispatch(fetchScoreboardSuccess(response));
			},
			(err) => {
				dispatch(fetchScoreboardFailure(error));
			}
		);
	};
};

export const fetchScoreboardBegin = () => ({
	type: types.FETCH_SCOREBOARD_BEGIN
});

export const fetchScoreboardSuccess = (scoreboard) => ({
	type: types.FETCH_SCOREBOARD_SUCCESS,
	payload: { scoreboard }
});

export const fetchScoreboardFailure = (error) => ({
	type: types.FETCH_SCOREBOARD_FAILURE,
	payload: { error }
});