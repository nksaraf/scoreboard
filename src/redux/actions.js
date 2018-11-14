import axios from 'axios';
import moment from 'moment';

// const API = "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard";
const API = "http://localhost:5000/scoreboard";

export const types = {
	FETCH_SCOREBOARD_BEGIN: 'FETCH_SCOREBOARD_BEGIN',
	FETCH_SCOREBOARD_SUCCESS: 'FETCH_SCOREBOARD_SUCCESS',
	FETCH_SCOREBOARD_FAILURE: 'FETCH_SCOREBOARD_FAILURE'
}
//const ENDPOINT = "scoreboard";

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