$(document).ready(function() {

	$('.slider').slick({

		infinite: false,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '0px',
		speed: 500

	});

	var tab = $('.tab'),
			slide = $('.slide'),
			tabInfo = $('.tab-info'),
			slideInfo = $('.slide-info');

	$('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {

		var currentSlide = $('.slick-current');

		tab.removeClass('active');
		slide.removeClass('active');
		tabInfo.removeClass('active');
		slideInfo.removeClass('active');

		tab.eq(currentSlide.index()).addClass('active');
		currentSlide.find(slide).addClass('active');
		tabInfo.eq(currentSlide.index()).addClass('active');
		slideInfo.eq(currentSlide.index()).addClass('active');

	});

	$('.tab').on('click', function() {

		tab.removeClass('active');
		tabInfo.removeClass('active');

		$(this).addClass('active');
		tabInfo.eq($(this).index()).addClass('active');

	});

});