$('.wrapper').addClass('loaded')

// Burger menu animation

$('.icon-menu').click(function(e){
	$(this).toggleClass('_active')
	$('.menu__body').toggleClass('_active')
	// $('.header__logo').toggleClass('_active')
	if ($(this).hasClass('_active')) {
		$('body').data('scroll',$(window).scrollTop())
	} 
	$('body').toggleClass('lock')
	if (!$(this).hasClass('_active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')))
	} 
})

//2 PARTS IMAGE + TEXT

function ibg(){
	$.each($('._ibg'), function (){
		if ($(this).find('img').length>0) {
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")')
		}
	})
}
ibg()

$('.menu__link').click(function(){
	$(this).addClass('_active')
	$('.menu__link').not($(this)).removeClass('_active')
})

$(window).resize(function(){
	mainblock()
})

function mainblock(){
	var h = $(window).outerHeight()
	$('.slider').css('minHeight',h);
}
mainblock()

$('.goto').click(function(){
	let target = $(this).attr('href')
	target = '.'+target.slice(1)
	$('html,body').animate({ scrollTop: $(`${target}`).offset()['top'] - 100 }, 1000);
	return false; 
});

$.each($('.slick-slider .slick-dots li button'),function(){
	if($(this).html()<10){
		$(this).html("0" + $(this).html())
	}
})

$.each($('.rating-value'),function(e){
	function animateValue(cl, start, end, duration) {
		var obj = document.getElementsByClassName(cl);
		var range = end - start;
		var minTimer = 50;
		var stepTime = Math.abs(Math.floor(duration / range));
		stepTime = Math.max(stepTime, minTimer);
		var startTime = new Date().getTime();
		var endTime = startTime + duration;
		var timer;

		function run() {
			 var now = new Date().getTime();
			 var remaining = Math.max((endTime - now) / duration, 0);
			 var value = Math.round(end - (remaining * range));
			 obj[e].innerHTML = value;
			 if (value == end) {
				  clearInterval(timer);
			 }
		}
		
		timer = setInterval(run, stepTime);
		run();
  }
  animateValue("rating-value", 0, +$(this).html(), 3000);
})

// $(window).scroll(function() {
//    var hT = $('.prices__ratings').offset().top,
//        hH = $('.prices__ratings').outerHeight(),
//        wH = $(window).height(),
// 		 wS = $(this).scrollTop();
// 	if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
// 		console.log('H1 on the view!');
// 	}
// });


var gallery = document.getElementsByClassName('gallery');
if (gallery.length>0) {
	baguetteBox.run('.gallery',{
		animation: 'fadeIn',
		noScrollbars: true,
    	// buttons: false,
    	// captions: function(element) {
	   //    $('body').addClass('lock')
	   // }
	})
}

$('.portfolio__button').click(function(){
	$(".hidden-portfolio").css("visibility","visible").css("opacity","1");
	$('body').addClass('lock')
})

$('.more-portfolio__close').click(function(){
	$(".hidden-portfolio").css("visibility","hidden").css("opacity","0");
	$('body').removeClass('lock')
})

function HiddenPortfolio(){
	$(".hidden-portfolio").css("visibility","hidden").css("opacity","0");
	$('body').removeClass('lock')
}

var HPortfolio = document.getElementsByClassName('HPortfolio');
if (HPortfolio.length>0) {
	baguetteBox.run('.HPortfolio',{
		animation: 'fadeIn',
		noScrollbars: true,
    	// buttons: false,
    	// captions: function(element) {
	   //    $('body').addClass('lock')
	   // }
	})
}