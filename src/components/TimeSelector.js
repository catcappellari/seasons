import React from 'react';

class TimeSelector extends React.Component {
	state = {value: ''};

	handleSelect = (event) => {
		this.setState({
			value: event.target.value
		}, this.updateSelection);
	}

	updateSelection() {
		this.props.onTimeSelection(this.state.value);
	}

	render() {
		return (
			<select value={this.props.currentTime || ''} onChange={this.handleSelect} className="headline__select">
				<option value="day">day</option>
				<option value="night">night</option>
			</select>
		);
	}
}

export default TimeSelector;