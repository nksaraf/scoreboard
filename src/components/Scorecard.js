import React from 'react';
import { Paper, withStyles, Collapse } from '@material-ui/core';
import classnames from 'classnames';
import Flexbox from 'flexbox-react';
import { TeamBox } from './TeamBox';
import { ScoreBox } from './ScoreBox';
import Boxscore from './Boxscore';
import { blue } from '@material-ui/core/colors';
const boxscore = require('./boxscore.json');

const styles = {
	root: {
		padding: "10px 20px"
	},
	scorecard: {
		width: 360
	},
	detail: {
		padding: "0 20px 20px 20px",
		margin: 0,
		fontSize: "11px",
		textAlign: 'center',
		color: blue[900]
	},
	boxscoreWrapper: {
		padding: 10
	}
}


class Scorecard extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      boxscore_view: false,
	    };
	    this.handleExpandClick = this.handleExpandClick.bind(this);
	}

    handleExpandClick()  {
	    this.setState({ boxscore_view: !this.state.boxscore_view });
	};

	render() {
		const { classes, game } = this.props;
		console.log(boxscore);
		//console.log(game);
		return (
			<Flexbox className={classes.root}>
				<Paper className={classnames(classes.paper, classes.scorecard)}
					//onClick={() => require('electron').shell.openExternal(game.url)}
					onMouseEnter={() => document.body.style.cursor = "pointer"}
				    onMouseLeave={() => document.body.style.cursor = "default"}>
					<Flexbox direction="row" padding="20px 20px 10px 20px">
						<TeamBox team={game.teams.home} />
						<ScoreBox game={game} />
						<TeamBox team={game.teams.away} />
					</Flexbox>
					<p onClick={this.handleExpandClick} className={classes.detail}>{game.status.info.description}</p>
					<Collapse in={this.state.boxscore_view} timeout="auto" unmountOnExit>
						<Flexbox className={classes.boxscoreWrapper}>
							<Boxscore boxscore={boxscore.home} headers={boxscore.header} />
						</Flexbox>
					</Collapse>
				</Paper>
			</Flexbox>
		);
	}
    
}

export default withStyles(styles)(Scorecard);