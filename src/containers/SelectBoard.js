import React, { Component, Fragment } from 'react';
import DisplayPin from '../components/DisplayPin';
import boards from '../mock/boards';


class SelectBoard extends Component {

	displayImages(options) {
		return options.map((key, num) => {
			return(
				<DisplayPin image={key.url} key={num} />
			)
		});
	}

	constructor(props) {
		super(props);

	}

	render() {
		// let image = boards.data[0].url;
		let images = this.displayImages(boards.data);

		return (
			<Fragment>
				{/* <DisplayPin image={image} /> */}
				{images}
			</Fragment>
		);
	}
}

export default SelectBoard;