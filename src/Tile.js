import React, {Component} from "react";
import './App.css';

class Tile extends Component {

	constructor(props) {
		super(props);
		this.state = {side: this.props.initialSide, enabled: true};
	}

	render() {
		return (
			<a href="#" onClick={() => {this.provideClick()}}>
				<img src={this.state.side === "front" ? this.props.frontimage : this.props.backimage} alt=""></img>
			</a>
		);
	}

	provideClick() {
		if (this.state.side === "back" && this.state.enabled === true)
			this.turnFront()
	}

	turnFront() {
		const newState = "front";
		this.setState({side: newState}, () => {this.props.onTurnFront(newState)});
	}

	turnBack() {
		const newState = "back";
		this.setState({side: newState});
	}

	enable(en) {
		this.setState({enabled: en});
	}
}

export default Tile;
