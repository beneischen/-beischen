

window.onload = function() {
    
    var pageWidth = ($("#firstPost").width());

    var thresholdWidth = 1000;

    var bigFont = false;

    if (pageWidth <= thresholdWidth){
    	// change the width of all inner divs to 100%
    	$(".inner-div").css("width", "90%");
    	bigFont = true;
    }
    
    $( window ).bind("resize", function(){
    	pageWidth = ($("#firstPost").width());

	    if (pageWidth > thresholdWidth){
	    	// Change the width of the div when the pageWidth is greater than threshold
	    	$(".inner-div").css("width", "45%" );

	    	if (bigFont == true) {
		    	var currentFontSize = $(".inner-div").css('font-size');
			    var currentFontSizeNum = parseFloat(currentFontSize, 10);
			    var newFontSize = currentFontSizeNum*0.8;
			    $(".inner-div").css('font-size', newFontSize);
			    bigFont = false;
		    }
	    }

	    else if (pageWidth <= thresholdWidth) {
	    	// Change width when pageWidth is less than or equal to threshold pixels
	    	$(".inner-div").css("width", "90%" );

	    	if (bigFont == false) {
		    	var currentFontSize = $(".inner-div").css('font-size');
			    var currentFontSizeNum = parseFloat(currentFontSize, 10);
			    var newFontSize = currentFontSizeNum*1.2;
			    $(".inner-div").css('font-size', newFontSize);
			    bigFont = true;
		    }
	    }

	});

    
}