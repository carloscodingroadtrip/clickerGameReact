import React from 'react';
import faker from 'faker';
import _ from 'lodash';
import './App.css';

import Header from './components/Header';
import PhotoGrid from './components/PhotoGrid';

const list = _.times(16, key => ({
	id: key + 1,
	image: faker.internet.avatar(),
}));

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			score: 0,
			topScore: 0,
			status: 'Click an image to begin!',
			selected: [],
			color: 'white',
			source: list,
		};
	}

	shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	reset = () => {
		this.setState({
			score: 0,
			selected: [],
		});
	};

	textFlash(isRight) {
		setTimeout(() => {
			this.setState({
				color: 'white',
			});
		}, 300);
		this.setState({
			color: isRight ? 'green' : 'red',
		});
	}

	handleClick = e => {
		if (this.state.selected.indexOf(e.target.id) === -1) {
			this.textFlash(true);
			return this.setState({
				selected: [...this.state.selected, e.target.id],
				score: this.state.score + 1,
				topScore: Math.max(this.state.topScore, this.state.score + 1),
				status: 'You guessed correctly!',
				source: this.shuffle(this.state.source),
			});
		}
		this.setState({
			status: 'You guessed incorrectly!',
			source: this.shuffle(this.state.source),
		});
		this.textFlash(false);
		return this.reset();
	};

	render() {
		const { score, topScore, status, color, source } = this.state;

		return (
			<div className="App">
				<Header score={score} topScore={topScore} color={color}>
					{status}
				</Header>
				<PhotoGrid list={source} onClick={this.handleClick} />
			</div>
		);
	}
}

export default App;
