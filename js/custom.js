$(document).ready(function() {

	// particlesJS.load('particles-js', 'node_modules/particles.js/particlesjs.json', function() {
	// 	  console.log('callback - particles.js config loaded');
	// });

	// if ($(window).width() < 992) {
	// 	$(window).scroll(function() {    
	//     var scroll = $(window).scrollTop();

	//     if (scroll >=0) {
	//         $(".hamburger").addClass("hamburger-scroll");
	//     } else {
	//         $(".hamburger").removeClass("hamburger-scroll");
	//     	}
	// 	});

	// }


	// FULLPAGE INIT
	$('#fullpage').fullpage({
		menu: "#menu",
		anchors: ['home', 'about-me', 'my-skills', 'projects', 'in-touch'],
		navigationTooltips: ['1', '2', '3', '4', '5'],
		navigationPosition: 'right',
		lockAnchors: false,
		navigation: true,
		css3: true, 
		showActiveTooltip: true,        
        responsive: 992,

	});


	//  line maker 


	(function() {
	var lineMaker = new LineMaker({
			position: 'fixed',
			lines: [
						{top: 0, left: '0%', width: 1, height: '100vh', color: '#c7c6c6', hidden: true, animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
						{top: 0, left: '33.333%', width: 1, height: '100vh', color: '#c7c6c6', hidden: true, animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
						{top: 0, left: '66.333%', width: 1, height: '100vh', color: '#c7c6c6', hidden: true, animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
						{top: 0, left: '100%', width: 1, height: '100vh', color: '#c7c6c6', hidden: true, animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
		

					]
	});
	
	setTimeout(function() {
		lineMaker.animateLinesIn();
		}, 250);
	})();



	// menu list item animation


	// reveral blocks on hero screen
	// var rev1 = new RevealFx(document.querySelector('#hero-rev-1'), {
	// 	revealSettings : {
	// 		bgcolor: '#cc9966',
	// 		onCover: function(contentEl, revealerEl) {
	// 			contentEl.style.opacity = 1;
	// 		}
	// 	}
	// });
	// rev1.reveal();

	// var rev2 = new RevealFx(document.querySelector('#hero-rev-2'), {
	// 	revealSettings : {
	// 		bgcolor: '#cc9966',
	// 		delay: 250,
	// 		onCover: function(contentEl, revealerEl) {
	// 			contentEl.style.opacity = 1;
	// 		}
	// 	}
	// });
	// rev2.reveal();


	// [portfolio carousel]

	$('.portfolio-carousel').owlCarousel({
    center: true,
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
	});


	// $('.hamburger').on('hover', function(){
		
	
	// },
	// function(){
	// 	$('.').removeClass('hamburger-hover');	
	// });

	// hamburger hover
	if ($(window).width() > 992) {
		  let $hero = $('.hero-img-wrapper');
		$(".hamburger").hover(function () {
			if($('body').hasClass('fp-viewing-home')){
			 	$('body').css('border-color', '#111623');
			   	$('span.accent-c').addClass('alt-under');
			   	// $('.accent-c').addClass('alt-c');
			   	$hero.addClass('hamburger-hover');
			   	$('.hero__heading, .hero__caption').addClass('alt-c');
			   	$('.hero__caption--prof').css('color', '#111623');
			}
			// $('.menu__list-wrapper').addClass('menu-bg-anim');
		}, function () {
		 	$('body').css('border-color', '#cc9966');
		   	$('span.accent-c').removeClass('alt-under');
		   	// $('.accent-c').removeClass('alt-c');
		   	$hero.removeClass('hamburger-hover');

			// $('.menu__list-wrapper').removeClass('menu-bg-anim');
		   	$('.hero__heading').removeClass('alt-c');

		   	$('.hero__heading, .hero__caption').removeClass('alt-c');
		   	$('.hero__caption--prof').css('color', '#fff');

		    // mouseout event codes...
		});
       
    }

	// linst animation


	$(".hamburger").on('touchstart click', function (e) {
		 e.preventDefault();
		if($(this).hasClass('hamburger-open')){
			$(this).removeClass('hamburger-open');
			$('.menu__list-wrapper').removeClass('menu-bg-anim');

			$('.menu__list-item').each(function(i){
		    setTimeout(function(){
		       $('.menu__list-item').eq(i).removeClass('animation-menu');
			    },0*i);

			});


		}else{
			$(this).addClass('hamburger-open');
			$('.menu__list-wrapper').addClass('menu-bg-anim');

			$('.menu__list-item').each(function(i){
	    setTimeout(function(){
	       $('.menu__list-item').eq(i).addClass('animation-menu');
		    },200*i);
		});

		}

	});

	$('.menu__list-item').on('click', function(){
		$('.hamburger').removeClass('hamburger-open');
			$('.menu__list-wrapper').removeClass('menu-bg-anim');

			$('.menu__list-item').each(function(i){
		    setTimeout(function(){
		       $('.menu__list-item').eq(i).removeClass('animation-menu');
			    },0*i);
			});
	});
	$('.decolines--fixed').clone().appendTo('.menu__list-wrapper');




});