import React, { Component } from 'react';
import boards from '../mock/boards';

class SelectBoard extends Component {

	displayImages(options) {
		console.log(JSON.stringify(options));
		return options.map((key, num) => {
			return(
				<div key={num}>
					<img src={key.url} />
				</div>
			)
		});
	}

	render() {
		let images = this.displayImages(boards.data)
		return (
			<section>
				{images}
			</section>
		);
	}
}

export default SelectBoard;