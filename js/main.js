/* ScrollSpy service */
scrollSpy()
$(window).bind('scroll', function() {
    scrollSpy()
}); 
function scrollSpy() {
    var currentTop = $(window).scrollTop();
    var halfWindow = $(window).height() / 2;
    var changePoint = currentTop + halfWindow;
    var elems = $('.scrollspy');
    elems.each(function(index){
      var elemTop 	    = $(this).offset().top;
      var elemBottom 	= elemTop + $(this).height();
      if(changePoint >= elemTop && changePoint <= elemBottom){
        var id 		= $(this).attr('id');
        console.log('Its: '+id)
        var navElem = $('a[href="#' + id+ '"]');
        navElem.parent().addClass('active').siblings().removeClass( 'active' );
      }
    })
}

/* Smooth-scroll service */
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	try {
        var position = $($(this).attr("href")).offset().top;
        $("body, html").animate({
            scrollTop: position
        }, 1000);
    } catch (error) {
        return null;
    }
});

/* Navbar close onclick onn item */
$('.navbar-collapse .nav-link-close').click(function(){
    $(".navbar-collapse").collapse('hide');
});

/* jQuery Waterwheel Image Carousel */
$(document).ready(function() {
    $('#widgets-carousel').waterwheelCarousel({

    })
})