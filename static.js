

window.onload = function() {
    
    var pageWidth = ($("#firstPost").width());

    var thresholdWidth = 800; 

    if (pageWidth <= thresholdWidth){
    	// change the width of all inner divs to 100%
    	$(".inner-div").css("width", "100%");
    }
    
    $( window ).bind("resize", function(){
    	pageWidth = ($("#firstPost").width());

	    if (pageWidth > thresholdWidth){
	    	// Change the width of the div when the pageWidth is greater than threshold
	    	$(".inner-div").css("width", "35%" );
	    }

	    else if (pageWidth <= thresholdWidth) {
	    	// Change width when pageWidth is less than or equal to threshold pixels
	    	$(".inner-div").css("width", "100%" );	
	    }

	});

    
}