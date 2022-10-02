import React from 'react';

class SeasonSelector extends React.Component {
	state = {value: ''};

	handleSelect = (event) => {
		this.setState({
			value: event.target.value
		}, this.updateSelection);
	}

	updateSelection() {
		this.props.onSeasonSelection(this.state.value);
	}

	render() {
		return (
			<select value={this.props.currentSeason || ''} onChange={this.handleSelect}className="headline__select">
				<option value="winter">winter</option>
				<option value="spring">spring</option>
				<option value="summer">summer</option>
				<option value="fall">fall</option>
			</select>
		);
	}
}

export default SeasonSelector;