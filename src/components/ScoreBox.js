import React from 'react';
import { withStyles } from '@material-ui/core';
import classnames from 'classnames';
import Flexbox from 'flexbox-react';
import { red, blueGrey } from '@material-ui/core/colors';

const styles = {
	timeLive: {
		width: "100%",
		textAlign: "center",
		color: red[600]
	},
	timeStale: {
		width: "100%",
		textAlign: "center",
		color: blueGrey[600]
	},
	timePregame: {
		width: "100%",
		textAlign: "center",
		color: blueGrey[800],
		fontSize: "24px",
		marginTop: 20
	},
	score: {
		flexGrow: 1,
		textAlign: "center"
	},
	gray: {
		color: blueGrey[700]
	}
}

export const ScoreBox = withStyles(styles)((props) => {
	const { classes, game } = props;
	if (game.status.state === 0) {
		return (
			<Flexbox flexGrow={1} flexDirection="column">
				<h3 className={classes.timePregame}>
					{game.status.situation}
				</h3>
			</Flexbox>);
	}
	else {
		return (
			<Flexbox flexGrow={1} flexDirection="column">
				<h4 className={(game.status.state == 1) ? classes.timeLive : classes.timeStale}>
					{game.status.situation}
				</h4>
				<Flexbox>
					<h1 className={game.status.winner === 'away' ? classnames(classes.score, classes.gray) : classes.score}>
						{game.score.totals.home}
					</h1>
					<h1 className={game.status.winner !== '' ? classnames(classes.score, classes.gray) : classes.score}>
						-
					</h1>
					<h1 className={game.status.winner === 'home' ? classnames(classes.score, classes.gray) : classes.score}>
						{game.score.totals.away}
					</h1>
				</Flexbox>
			</Flexbox>);
	}
})