

window.onload = function() {
    
    var pageWidth = ($("#firstPost").width());

    var thresholdWidth = 1000;

    var bigFont = false;

    if (pageWidth <= thresholdWidth){
    	// change the width of all inner divs to 100%
    	$(".inner-div").css("width", "90%");
    	$(".inner-div").css('font-size', 22);

    	bigFont = true;
    }
    
    $( window ).bind("resize", function(){
    	pageWidth = ($("#firstPost").width());

	    if (pageWidth > thresholdWidth){
	    	// Change the width of the div when the pageWidth is greater than threshold
	    	$(".inner-div").css("width", "45%" );

	    	if (bigFont == true) {
			    $(".inner-div").css('font-size', 16);
			    bigFont = false;
		    }
	    }

	    else if (pageWidth <= thresholdWidth) {
	    	// Change width when pageWidth is less than or equal to threshold pixels
	    	$(".inner-div").css("width", "90%" );

	    	if (bigFont == false) {
			    $(".inner-div").css('font-size', 22);
			    bigFont = true;
		    }
	    }

	});

    
}