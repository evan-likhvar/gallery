$(document).ready(function() {

    // init wow.js
    new WOW().init();

    var touch = $('#touch-menu');
    var menu = $('.nav');
    $(".bi").addClass("bounceIn");
    $(touch).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
    
    $(window).resize(function(){
      var wid = $(window).width();
      if(wid > 991 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
      
    });
    $(window).scroll(function() {
  	  $(".bi").each(function(){
		    var pos = $(this).offset().top;
		    var elHeight = $(this).height();
		    var winTop = $(window).scrollTop();
		    var winHeight = $(window).height();
		        
		    if ( pos-winTop > (elHeight/5-elHeight) && pos-winTop < (winHeight-elHeight/5)) {
			      $(this).addClass("bounceIn");
			    } else $(this).removeClass("bounceIn");
	  });

    });
    
    
$(function() {
    var fixedMenu = $(".fixedMenu-container");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            fixedMenu.addClass("fixedMenu");
        } else {
            fixedMenu.removeClass("fixedMenu");
        }
    });
});
  
  // init magnific-popup.js
  $('.js-getPopup').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
  });
  $('.js-getImage').magnificPopup({
    type:'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    closeOnContentClick: true,
    image: {
		verticalFit: false
    }
  });
    // init owl carousel
      testimonialsSlider = $('.js-sliderTestimonials').owlCarousel({
        autoPlay: false,
        pagination: false,
        nav: false,
        loop: true,
        items: 1
      });
      $(".testimonials-prev").click(function () {
          testimonialsSlider.trigger('prev.owl.carousel');
      });
      $(".testimonials-next").click(function () {
          testimonialsSlider.trigger('next.owl.carousel');
      });
  
    // SMOOTH SCROLLING TO ANCHORS
    $('a[href*=#anchor-]').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 400, 'swing');
        e.preventDefault();
    });

    // FORM CONTROLLERS

    function mailCallback() {
        jQuery.ajax({
            type: "POST",
            url: "/mailCallback.php",
            data: jQuery("#callbackForm").serialize(),
            success: function(html) {
                $('#nameCallback').val('').removeClass('valid').removeClass('invalid');
                $('#telCallback').val('').removeClass('valid').removeClass('invalid');
                location.href = "http://www.liontarget.com/thanks.html";
            }
        });
    } // end of mailCallback
 
    function mailFeedback() {
        jQuery.ajax({
            type: "POST",
            url: "/mailFeedback.php",
            data: jQuery(".formFeedback").serialize(),
            success: function(html) {
                $('#nameFeedback').val('').removeClass('valid').removeClass('invalid');
                $('#emailFeedback').val('').removeClass('valid').removeClass('invalid');
                $('#messageFeedback').val('').removeClass('valid').removeClass('invalid');
                location.href = "http://www.liontarget.com/thanks.html";
            }
        });
    } // end of mailFeedback
  
    $('#buttonCallback').click(function() {

        var input = $('#nameCallback');
        var is_name = input.val();
        if (is_name) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        };
        input = $('#telCallback');
        var re = /^[0-9()\-+ ]+$/;
        var is_email = re.test(input.val());
        if (is_email) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        };

        if ($('#nameCallback').hasClass('valid') & $('#telCallback').hasClass('valid')) {
            mailCallback();
//            alert('Спасибо. Ваше сообщение успешно доставлено!');
        };

    }); // end of callbackButton.click

    $('#buttonFeedback').click(function() {

        var input = $('#nameFeedback');
        var is_name = input.val();
        if (is_name) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        };
        input = $('#emailFeedback');
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var is_email = re.test(input.val());
        if (is_email) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        };
        input = $('#messageFeedback');
        var is_message = input.val();
        if (is_message) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        };
        if ( $('#nameFeedback').hasClass('valid') & $('#emailFeedback').hasClass('valid') & $('#messageFeedback').hasClass('valid') ) {
            mailFeedback();
//            alert('Спасибо. Ваше сообщение успешно доставлено!');
        };

    }); // end of buttonFeedback.click

}); // end of document.ready