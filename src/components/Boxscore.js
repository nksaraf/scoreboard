import React from 'react';
import { Paper, withStyles, Collapse, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import Flexbox from 'flexbox-react';

const styles = {
	boxscoreWrapper: {
		padding: 10
	},
	boxscoreBox: {
		width: "100%",
		overflow: 'scroll'
	},
	headCell: {
		padding: "0px 5px",
		minWidth: 28,
		textAlign: 'center'
	},
	headRow: {
		height: 24
	},
	playerRow: {
		height: 24
	},
	playerCell: {
		padding: "0px 5px",
		minWidth: 28,
		textAlign: 'center'
	},
	playerNameCell: {
		padding: "0px 5px",
		minWidth: 90,
		textAlign: 'center',
		fontWeight: 'bold'
	}

}


class Boxscore extends React.Component {
	render() {
		const { classes, boxscore, headers } = this.props;
		return (
			<Flexbox className={classes.boxscoreBox}>
				<Table>
					<TableHead>
						<TableRow className={classes.headRow}>
							<TableCell className={classes.headCell} component='th' scope='row'>PLAYER</TableCell>
							{headers.map((header) => <TableCell className={classes.headCell}>{header}</TableCell>)}
						</TableRow>
					</TableHead>
					<TableBody>
						{boxscore.starters.map((starter) => 
							<TableRow className={classes.playerRow}>
								<TableCell className={classes.playerNameCell} scope="row">{starter.name}</TableCell>
								{starter.stats.map((stat) => <TableCell className={classes.playerCell}>{stat}</TableCell>)}
							</TableRow>
						)}
					</TableBody>
				</Table>
			</Flexbox>
		);
	}
    
}

export default withStyles(styles)(Boxscore);