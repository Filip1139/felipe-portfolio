$(document).ready(function($) {

	// smooth scrolling
	$(".marvel-menu ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
	e.preventDefault();
   // store hash
   var hash = this.hash;
   // animate
   	$('html, body').animate({
       scrollTop: $(hash).offset().top
    }, 800, function(){

       // when done, add hash to url
       // (default click behaviour)
    	window.location.hash = hash;
    	});

	});

		//  SCROLLSPY NAVBAR BOOTSTRAP
	$('body').scrollspy({ target: '.marvel-menu' })

	var distance = $('.navbar').offset().top,
		$window = $(window);



	//  ADD CLASS IF NAVBAR TOUCH TOP WINDOW
	$window.scroll(function() {
    if ($window.scrollTop() >= distance ) {
        $('.navbar').addClass('sticky');
	}
	else{
	    $('.navbar').removeClass('sticky');

		}
  	});

	// countUp
	$('.number').each(function() {
 	 var $this = $(this),
      countTo = $this.attr('data-count');
      aliax = $this.attr('data-aliax');
  
	  $({ countNum: $this.text()}).animate({
	    countNum: countTo

	  },
	  	{
		    duration: 4000,
		    easing:'linear',
		    step: function() {
		      $this.text(Math.floor(this.countNum) + "+");
		    },
		    complete: function() {
		      $this.text(this.countNum + "+");
		      //alert('finished');
		    }
 		});  	
	});


	// portfolio filter

	$(function() {
		var selectedClass = "";
		$(".btn--filter").click(function(){ 
			selectedClass = $(this).attr("data-rel"); 
	    	$("#portfolio").fadeTo(100, 0.1);
			$("#portfolio>div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
	    
	    setTimeout(function() {
	      $("."+selectedClass).fadeIn().addClass('scale-anm');
	      $("#portfolio").fadeTo(300, 1);
	    }, 400); 
			
		});
	});

	$('.portfolio-head__filters').find('button').click(function(){
		$(this).addClass('portfolio-active').siblings().removeClass('portfolio-active');
	});


	$('.team-col').hover(function(){
		$(this).children('.team-col-inner').toggleClass('flipped');
	});

	$('.map-body').slideUp();
	$('.map-head').on('click', function(){
		$('.map-body').slideToggle('slow');
	});





});