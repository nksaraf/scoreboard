import React from 'react';
import Scorecard from './Scorecard';
import { connect } from 'react-redux';
import { fetchScoreboard, readTodotxt } from '../redux/actions';
import { Button, withStyles } from '@material-ui/core';
import Flexbox from 'flexbox-react';
import { RefreshRounded } from '@material-ui/icons';
import { blue } from '@material-ui/core/colors';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import moment from 'moment';
import { ClipLoader } from 'react-spinners';

const styles = {
  container: {
    padding: "10px 0",
    width: "100%"
  },
  fab: {
    position: "fixed",
    bottom: 24,
    right: 24,
    backgroundColor: blue[700],
    fontSize: "40px",
    color: "white"
  },
  dateBox: {
    position: "fixed",
    top: 10,
    right: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    zIndex: 10
  },
  calendar: {
    position: 'relative',
    right: 0,
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    backgroundColor: "white",
    borderRadius: "5px"
  },
  scoreboardBox: {
    marginTop: 40
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      scoreboardDay: moment()
    };
    this.handleDayChange = this.handleDayChange.bind(this);
  }

  handleDayChange(day) {
    this.setState({ scoreboardDay: moment(day) });
    this.props.fetchScoreboard(moment(day));
  }

  componentDidMount() {  
    console.log('Hello');
    this.props.fetchScoreboard(this.state.scoreboardDay);
    this.props.readTodotxt('~/todo.txt');
    // let timer = setInterval(() => this.props.fetchScoreboard(this.state.scoreboardDay), 30000);
    // this.setState({timer});
	}

  componentWillUnmount() {
     //clearInterval(this.state.timer);
  }

  render() {
  	const { classes, scoreboard } = this.props;

    let content = '';
  	if ('games' in scoreboard) {
  		content = (
        <div className={classes.scoreboardBox}>
	    		{scoreboard.games.map((game) => <Scorecard game={game} key={game.id} />)}
        </div>
			);
  	}

    return (
      <Flexbox className={classes.container} flexDirection="column">
        <DayPickerInput
          classNames={{container: classes.dateBox, overlay: classes.calendar}} 
          value={`${formatDate(this.state.scoreboardDay)}`} 
          onDayChange={this.handleDayChange}
          formatDate={formatDate}
          parseDate={parseDate} />
        {content}
        <Button variant="fab" className={classes.fab} onClick={() => this.props.fetchScoreboard(this.state.scoreboardDay)}>
          <RefreshRounded />
        </Button>
      </Flexbox>
    );
  }
}

export default connect(
	(state) => { return state }, 
	{ fetchScoreboard, readTodotxt })
(withStyles(styles)(Main))
