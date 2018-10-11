import React, {Component} from 'react';
import Grid from './Grid.js';
// import Score from './Score.js';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {moves: 0, win: false, gameId: 0};
	}

	doNewGame() {
		var gameId = this.state.gameId+1;
		this.setState({moves: 0, win: false, gameId});
		this.refs.grid.refresh();
	}

    render() {
        return (
            <div>
                <h1>Pacman MEMORY</h1>
				<div class="header">
					<NewGame onNew={() => {this.doNewGame()}} />
					<Score value={this.state.moves} win={this.state.win} />
				</div>
				<Grid ref="grid" uniqueId={this.state.gameId} onMove={(moves) => {this.setState({moves})}} onWin={() => this.setState({win: true})} />
            </div>
        );
    }
}

function Score({value, win}) {
	if (win === true)
		return (<div className="headerBlock">***   HAI VINTO!   ***</div>);

	return (<div className="headerBlock">Mosse eseguite: {value}</div>);
}

function NewGame({onNew}) {
	return (<div className="headerBlock"><button onClick={onNew}>Nuova partita</button></div>);
}

export default Home;
