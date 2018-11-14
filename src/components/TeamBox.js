import React from 'react';
import { withStyles } from '@material-ui/core';
import Flexbox from 'flexbox-react';
import { blueGrey } from '@material-ui/core/colors';

const styles = {
	teamBox: {
		width: 100,
		height: 100
	},
	teamLogo: {
		width: 60,
		height: 60
	},
	teamName: {
		width: "100%",
		textAlign: "center",
		fontSize: "18px",
		lineHeight: "20px",
		paddingTop: 2
	},
	teamRecord: {
		color: blueGrey[400],
		fontSize: "12px",
		paddingTop: 2
	}

}

export const TeamBox = withStyles(styles)((props) => {
	const { classes, team } = props;
	return (				
		<Flexbox className={classes.teamBox} flexDirection="column" alignItems="center">
			<img src={"./assets/" + team.abbreviation + ".png"} className={classes.teamLogo}/>
			<h3 className={classes.teamName}>{team.shortName}</h3>
			<h6 className={classes.teamRecord}>({team.record})</h6>
		</Flexbox>
	);
})