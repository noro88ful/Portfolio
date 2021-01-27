$('._slick1').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	infinite: false,
	fade: true,
	// swipe: false,
	// responsive:[
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 		}
	// 	},
	// ],
	// adaptiveHeight: true,
	// centerMode: true,
	// vertical: true,
	// verticalSwiping: true,
	// waitForAnimate: false,
})

$('.content-slider__arrow_prev').click(function(){
	$('._slick1').slick('slickPrev')
})

$('.content-slider__arrow_next').click(function(e){
	$('._slick1').slick('slickNext')
})

/*==============================================================================================================================================================================*/

$('._slick2').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	infinite: false,
	// fade: true,
	// swipe: false,
	// responsive:[
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 		}
	// 	},
	// ],
	// adaptiveHeight: true,
	// centerMode: true,
	// waitForAnimate: false,
})

$('.more-portfolio__arrow_prev').click(function(){
	$('._slick2').slick('slickPrev')
})

$('.more-portfolio__arrow_next').click(function(e){
	$('._slick2').slick('slickNext')
})