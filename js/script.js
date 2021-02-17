
function testWebP(callback) {

	var webP = new Image();

	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};

	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
	
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
			document.querySelector('body').classList.add('no-webp');
		}
});

$(function(){
	$('.top__slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		fade: true,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				 dots: false
			  }
			},
		 ]
	});
});

$(function(){
	$('.reviews__slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		slidesToShow: 4,
  		slidesToScroll: 1,
		  responsive: [
			{
			  breakpoint: 1141,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
				breakpoint: 871,
				settings: {
				 slidesToShow: 2,
				}
			 },
			 {
				breakpoint: 586,
				settings: {
				 slidesToShow: 1,
				}
			 },
		 ]
	});
});

$(document).ready(function () {
	$('.header__burger,.menu__list-link').click (function(event) {
		$('.header__burger,.menu,.header__span').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$(".menu__list-link").click(function () {
		elementClick = jQuery(this).attr("href")
		destination = jQuery(elementClick).offset().top - 40;
		$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
		return false;
		});
});

// jQuery(document).ready(function() {
// 	jQuery(".menu__list-link").click(function () {
// 	elementClick = jQuery(this).attr("href")
// 	destination = jQuery(elementClick).offset().top - 40;
// 	jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
// 	return false;
// 	});
// });

