
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