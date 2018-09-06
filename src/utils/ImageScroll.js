import * as Scroll from 'react-scroll';


class ImageScroll {

	constructor() {

		this.scroll = Scroll.animateScroll;
		// this.paused = true;
		// this.start = start;
		// this.stop = stop;
		// this.userInteractionChange = userInteractionChange;
		// this.windowScroll = windowScroll;

	}

	scrollTop() {
		this.scroll.scrollToTop({
			duration: 1000,
			delay: 50,
			smooth: 'easeIn'
		});
	}

	scrollToBottom() {
		this.scroll.scrollToBottom();
	}

	scrollToElement(height) {
		this.scroll.scrollTo(height, {
			duration: 15000,
			delay: 100,
			smooth: "easeIn",
			containerId: '#image'
		});
	}

	// start() {
	// 	this.paused = false;
	// 	this.windowScroll();
	// 	timer = $interval(this.incrementCounter, (dataService.seconds * 1000), this.pins.length);
	// }

	// stop() {
	// 	this.paused = true;
	// 	$interval.cancel(timer);
	// 	timer = undefined;
	// }

	// userInteractionChange() {
	// 	$('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function (event) {
	// 		if (event.which > 0 || event.type === "mousedown" || event.type === "mousewheel") {
	// 			$('html, body').stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
	// 		}
	// 	});
	// }

	// windowScroll() {

	// 	this.scrollTop();

	// 	if (!this.paused) {

	// 		$('html, body').animate({ scrollTop: (this.pins[this.counter].image.original.height) + $(window).height() },
	// 			((dataService.seconds * 1000) / 2));

	// 		this.userInteractionChange();

	// 		$('html, body').animate({ scrollTop: 0 }, ((dataService.seconds * 1000) / 2));

	// 		this.userInteractionChange();

	// 	}
	// }
}


export { ImageScroll as default };