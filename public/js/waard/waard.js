
  $(document).ready(function(){
	  $(".fil").addClass("fadeInLeft");
	  $(".fir").addClass("fadeInRight");
	  $(".bi").addClass("bounceIn");
	    });
  $(window).scroll(function() {
	  $(".firb").each(function(){
		    var pos = $(this).offset().top;
		    var elHeight = $(this).height();
		    var winTop = $(window).scrollTop();
		    var winHeight = $(window).height();
		        
		    if ( pos-winTop > (elHeight/5-elHeight) && pos-winTop < (winHeight-elHeight/5)) {
			      $(this).addClass("fadeInRightBig");
			    } else $(this).removeClass("fadeInRightBig");
	  });
	  $(".zi").each(function(){
		    var pos = $(this).offset().top;
		    var elHeight = $(this).height();
		    var winTop = $(window).scrollTop();
		    var winHeight = $(window).height();
		        
		    if ( pos-winTop > (elHeight/5-elHeight) && pos-winTop < (winHeight-elHeight/5)) {
			      $(this).addClass("zoomIn");
			    } else $(this).removeClass("zoomIn");
	  });
	  $(".bi").each(function(){
		    var pos = $(this).offset().top;
		    var elHeight = $(this).height();
		    var winTop = $(window).scrollTop();
		    var winHeight = $(window).height();
		        
		    if ( pos-winTop > (elHeight/5-elHeight) && pos-winTop < (winHeight-elHeight/5)) {
			      $(this).addClass("bounceIn");
			    } else $(this).removeClass("bounceIn");
	  });
	  $(".fil").each(function(){
		    var pos = $(this).offset().top;
		    var elHeight = $(this).height();
		    var winTop = $(window).scrollTop();
		    var winHeight = $(window).height();
		        
		    if ( pos-winTop > (elHeight/5-elHeight) && pos-winTop < (winHeight-elHeight/5)) {
			      $(this).addClass("fadeInLeft");
			    } else $(this).removeClass("fadeInLeft");
	  });
	  $(".fir").each(function(){
		    var pos = $(this).offset().top;
		    var elHeight = $(this).height();
		    var winTop = $(window).scrollTop();
		    var winHeight = $(window).height();
		        
		    if ( pos-winTop > (elHeight/5-elHeight) && pos-winTop < (winHeight-elHeight/5)) {
			      $(this).addClass("fadeInRight");
			    } else $(this).removeClass("fadeInRight");
	  });
	});  

