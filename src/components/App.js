import React from 'react';
import SeasonTree from './SeasonTree';
import CosmicIlluminator from './CosmicIlluminator';
import SeasonSelector from './SeasonSelector';
import TimeSelector from './TimeSelector';
import '../style.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			day: null,
			season: null
		};
	}

	componentDidMount() {
		this.timeCalc();
		this.timer = setInterval(
			() => this.timeCalc(), 1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	timeCalc() {
		let seasons = ['winter', 'spring', 'summer', 'fall'],
		date = new Date(),
		seasonNum = date.getMonth(),
		time = date.getHours();

		if (seasonNum <= 2) {
			seasonNum = seasons[0];
		} else if (seasonNum <= 5) {
			seasonNum = seasons[1];
		} else if (seasonNum <= 8) {
			seasonNum = seasons[2];
		} else {
			seasonNum = seasons[3];
		}

		if (time >= 7 && time < 20) {
			time = 'day';
		} else {
			time = 'night';
		}

		this.setState({
			season: seasonNum,
			time: time
		});
	}

	onDateSelection = (date) => {
		clearInterval(this.timer);
		this.setState({
			season: date
		});
	}

	onTimeSelection = (clock) => {
		clearInterval(this.timer);
		this.setState({
			time: clock
		});
	}

	render() {
		return (
			<div className={`season season_${this.state.season} season_${this.state.time}`}>
				<div className="season__wrapper">
					<CosmicIlluminator time={this.state.time} />
					<div className="headline">
						<SeasonSelector 
							currentSeason={this.state.season}
							onSeasonSelection={this.onDateSelection}
						/>
						<TimeSelector 
							currentTime={this.state.time}
							onTimeSelection={this.onTimeSelection}
						/>
					</div>
					<SeasonTree season={this.state.season} />
				</div>
			</div>
		);
	}
}

export default App;