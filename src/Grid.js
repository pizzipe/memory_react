import React, {Component} from "react";
import Tile from "./Tile.js";
import image1 from "./img/img1.png";
import image2 from "./img/img2.png";
import image3 from "./img/img3.png";
import image4 from "./img/img4.png";
import image5 from "./img/img5.png";
import image6 from "./img/img6.png";
import back from "./img/back_little.png";

class Grid extends Component {

	constructor(props) {
		super(props);
		this.state = this.initialState();
	}

	refresh() {
		this.setState(this.initialState(), () => this.shuffle());
	}

	initialState() {
		const data = [];
		data.push({image: image1});
		data.push({image: image2});
		data.push({image: image3});
		data.push({image: image4});
		data.push({image: image5});
		data.push({image: image6});
		data.push({image: image1});
		data.push({image: image2});
		data.push({image: image3});
		data.push({image: image4});
		data.push({image: image5});
		data.push({image: image6});

		const hand = {fst: undefined, snd: undefined};
		return {tiles: data, hand: hand, turned: [], moves: 0, tilesEnabled: true};
	}

	componentDidMount() {
		this.shuffle();
	}

	shuffle() {
		var data = this.state.tiles.slice(0);

		var i = data.length;
		while (i > 1) {
		  var j = Math.floor(Math.random() * i)
		  i--;

		  var x = data[i];
		  data[i] = data[j];
		  data[j] = x;
		}

		this.setState({tiles: data});
	}

	traceTileTurned(index) {
		var fst = this.state.hand.fst;
		var snd = this.state.hand.snd;

		if (fst === undefined)
			fst = index
		else if (snd === undefined)
			snd = index;

		var moves = this.state.moves;
		moves++;

      	this.setState(
			{hand: {fst, snd}, moves},
			() => {
				this.props.onMove(moves);

				if (fst !== undefined && snd !== undefined) {
					let s1 = this.refs[fst];
					let s2 = this.refs[snd];

					if (s1.props.frontimage === s2.props.frontimage) {
						var turned = this.state.turned.slice(0);
						turned.push(fst);
						turned.push(snd);
						this.setState({turned}, () => {
							this.clearHand(false);

							if (turned.length === this.state.tiles.length) {
								this.props.onWin();
							}
						});
					}
					else {
						this.enableTiles(false);
						this.setState({tilesEnabled: false}, () => {
							setTimeout(
								() => {this.clearHand(true)}, 5000
							);
						});
					}
				}

			}
		);
    }

	enableTiles(en) {
		for (var i=0; i<this.refs.length; i++) {
			this.refs[i].enable(en);
		}
	}

	turnBack(index) {
		this.refs[index].turnBack();
	}

	clearHand(turn) {
		var fst = this.state.hand.fst;
		var snd = this.state.hand.snd;

		if (turn) {
			this.turnBack(fst);
			this.turnBack(snd);
		}

		var hand = {fst: undefined, snd: undefined};
		this.setState({hand, tilesEnabled: true}, () => {
			this.enableTiles(true);
		});
	}

	render() {
		var side = "back";

		return (
			<div key={this.props.uniqueId}>

				<div className="rowGrid">
					<Tile ref="0" initialSide={side} frontimage={this.state.tiles[0].image} backimage={back} onTurnFront={() => this.traceTileTurned(0)} />
					<Tile ref="1" initialSide={side} frontimage={this.state.tiles[1].image} backimage={back} onTurnFront={() => this.traceTileTurned(1)} />
					<Tile ref="2" initialSide={side} frontimage={this.state.tiles[2].image} backimage={back} onTurnFront={() => this.traceTileTurned(2)} />
					<Tile ref="3" initialSide={side} frontimage={this.state.tiles[3].image} backimage={back} onTurnFront={() => this.traceTileTurned(3)} />
				</div>
				<div className="rowGrid">
					<Tile ref="4" initialSide={side} frontimage={this.state.tiles[4].image} backimage={back} onTurnFront={() => this.traceTileTurned(4)} />
					<Tile ref="5" initialSide={side} frontimage={this.state.tiles[5].image} backimage={back} onTurnFront={() => this.traceTileTurned(5)} />
					<Tile ref="6" initialSide={side} frontimage={this.state.tiles[6].image} backimage={back} onTurnFront={() => this.traceTileTurned(6)} />
					<Tile ref="7" initialSide={side} frontimage={this.state.tiles[7].image} backimage={back} onTurnFront={() => this.traceTileTurned(7)} />
				</div>
				<div className="rowGrid">
					<Tile ref="8" initialSide={side} frontimage={this.state.tiles[8].image} backimage={back} onTurnFront={() => this.traceTileTurned(8)} />
					<Tile ref="9" initialSide={side} frontimage={this.state.tiles[9].image} backimage={back} onTurnFront={() => this.traceTileTurned(9)} />
					<Tile ref="10" initialSide={side} frontimage={this.state.tiles[10].image} backimage={back} onTurnFront={() => this.traceTileTurned(10)} />
					<Tile ref="11" initialSide={side} frontimage={this.state.tiles[11].image} backimage={back} onTurnFront={() => this.traceTileTurned(11)} />
				</div>

			</div>
		);
	}


}

export default Grid;
