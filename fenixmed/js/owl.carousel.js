$(document).ready(function() {
	let bSlider = $('.bottom-slider');

	$('.slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText: [
			"<img src='images/left-arrow.png' class='image-cover' alt='left arrow' />",
			"<img src='images/right-arrow.png' class='image-cover' alt='right arrow' />"
		],
		autoplay: true,
		autoplayHoverPause: true,
		autoplaySpeed: 4000,
		navSpeed: 3000,
		items: 1,
	});

	if (!!bSlider) {
		$('.bottom-slider').owlCarousel({
			loop: true,
			margin: 10,
			nav: false,
			autoplay: true,
			autoplayHoverPause: true,
			autoplaySpeed: 4000,
			navSpeed: 3000,
			items: 1,
		});
	}
});
