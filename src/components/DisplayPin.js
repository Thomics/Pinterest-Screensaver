import React, { Component, Fragment } from 'react';
import * as Scroll from 'react-scroll';


class DisplayPin extends Component {

	scrollPage() {
		let scroll = Scroll.animateScroll;
		
		let scrollToBottom = new Promise((resolve, reject) => {
			let Events = Scroll.Events;

			Events.scrollEvent.register('end', () => {
				resolve();
				Events.scrollEvent.remove('end');
			});

			scroll.scrollToTop({
				duration: 400,
				delay: 0,
				smooth: 'easeIn'
			});

		});

		scrollToBottom.then(() => {
			scroll.scrollTo(document.documentElement.offsetHeight, {
				duration: 15000,
				delay: 100,
				smooth: "easeIn"
			});
		});
	}

	componentDidMount() {
		this.scrollPage();
	}

	render() {

		let image = this.props.image;
		return (
			<Fragment>
				<img src={image} alt={'This is from Pinterest'}/>
			</Fragment>
		);
	}
}

export default DisplayPin;