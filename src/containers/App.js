import React, { Component } from 'react';
import SelectBoard from './SelectBoard';

class App extends Component {
	render() {
		return (
			<section>
				<header>
					<h1>Pinterest Screensaver</h1>
				</header>
				<SelectBoard />
			</section>
		);
	}
}

export default App;