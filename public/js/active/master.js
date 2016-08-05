$(function(){

	// $(document).ready(function(){
	// 	var images_cnt = $('img').length;
	// 	var images_loaded = 0;
	// 	$('img').load(function(){
	//
	// 		images_loaded++;
	// 		if(images_loaded >= images_cnt)
	// 		{
	// 			$('.loader').addClass('closed');
	// 		}
	// 	});
	//
	// 	//alert(images_cnt + ' ' + images_loaded);
	// });

	$(window).load(function(){
		$('.loader').addClass('closed');
	});


	var call_on_ajax_load = function()
	{
		owl_init();
		initialize();
		works_panel_init();
		default_page_header();

	}

	var default_page_header = function(){
		$(document).find('.default-page-header').height($(window).height()/2);
		$(document).find('.home-slider, .home-slider .home-slider-item').height($(window).height());
	}
	default_page_header();

	var owl_init = function()
	{
		$('.home-slider[data-role="owl-carousel"]').owlCarousel({
			items: 1,
			nav: true,
			navRewind: false
		});

		$('.service-carousel[data-role="owl-carousel"]').owlCarousel({
			items: 3,
			nav: true,
			navRewind: false,
			responsive: {
				0: {items: 1},
				768: {items: 2},
				992: {items: 3}
			}
		});
	}


	owl_init();

	$(window).scroll(function(){
		$('.transition-block').each(function(){
			var obj = $(this);
			var offsetTop = obj.offset().top;
			var w_height = $(window).height();
			var scrollTop = $(window).scrollTop();

			if(offsetTop < (scrollTop + w_height / 1.3))
				obj.addClass('shown');
		});
	});

	$(document).on('click', 'a[href="#"]', function(){
		return false;
	});

	function load_page(href){
		if(href != '#')
		{
			$('.main-menu-wrapper, .btn-menu-toggle').removeClass('open');
			$('#app-wrapper').addClass('loading');

			if(href.indexOf('?') + 1) href += '&is_ajax=true';
			else href += '?is_ajax=true';

			setTimeout(function(){
				$.get(href, function(data){
					$('#app-content').html(data);
					$('title').html($(document).find('#page-title').html());
					$(window).scrollTop(0);
					call_on_ajax_load();
					$('#app-wrapper').removeClass('loading');
				});
			}, 500);
		}

	}

	$(document).on('click', 'a[data-ajax="true"]', function(e){


		var href = $(this).attr('href');
		e.preventDefault();
		history.pushState(null, null, href);


		load_page(href);

		return false;
	});


	$(window).on("popstate", function(e) {
		var href = location.href;
		load_page(href);
	});

	$(document).on('click', '.pricelist-item', function(){
		var curr = $(this);

		if(! curr.hasClass('open')) {
			curr.parent().find('.pricelist-item').removeClass('open');
			curr.addClass('open');
			setTimeout(function(){
				$('html, body').animate({scrollTop: curr.offset().top - 50}, 200);
			}, 300);
		}
		else
		{
			curr.parent().find('.pricelist-item').removeClass('open');
		}

	});

	$(document).on('click', '.work-detail-thumb', function(){
		var curr = $(this);
		var target = $('[data-item="'+curr.data('target')+'"]');
		var target_offset = target.offset().top;
		var target_padding = parseInt(target.css('padding-top')) + parseInt(target.css('padding-bottom'));
		var target_height = target.height() + target_padding;
		var window_heigth = $(window).height();
		var scroll_to = target_offset - (window_heigth-target_height) / 2;
		curr.parent().find('.work-detail-thumb').removeClass('active');
		curr.addClass('active');

		$('html, body').animate({scrollTop: scroll_to}, 200);
	});

	var works_panel_init = function(){
		var panel = $('.works-detail-scroll-panel');
		if(panel.length)
		{
			var control = panel.find('.works-detail-controls > *');
			var control_item_h = control.height() + parseInt(control.css('border-width')) * 2;
			var h = control_item_h * control.length;
			//alert(control_item_h);
			panel.css('min-height', h);
		}
	}
	works_panel_init();

	var slide_panel = function(res){
		var panel = $('.works-detail-scroll-panel');
		var h = panel.height();

		if(! panel.hasClass('h'))
		{
			panel.height(h);
			panel.addClass('h');
			$(res).find('i.fa').css('transform', 'rotate(180deg)');
			panel.data('min', 'true');
		}
		else
		{
			panel.css('height', 'auto');
			works_panel_init();
			panel.removeClass('h');
			$(res).find('i.fa').css('transform', 'none');
			panel.data('min', 'false');
		}

		return false;
	}

	$(document).on('click', '#zwin', function(){
		slide_panel(this);
		return false;
	});


	$(window).on('scroll', function(){

		if($(window).scrollTop() > 500 && $(window).width() > 992) {
			var panel = $('.works-detail-scroll-panel');
			if(!panel.hasClass('h'))
			{
				//slide_panel();
				$(document).find('#zwin').click();
			}
		}

	});

	//works-container
	//
	$(document).on('mouseenter', '.works-detail-scroll-panel', function(){
		$('.works-container').addClass('s');
	});

	$(document).on('mouseleave', '.works-detail-scroll-panel', function(){
		$('.works-container').removeClass('s');
	});

	$(document).on('click', '#scroll-top', function(){
		$('html, body').animate({scrollTop: 0}, 300);
	});




	$(document).on('mouseenter', '.works-nav .works-nav-btn', function(){
		if($(window).width()>992)
		{
			var title = $(this).data('title');
			var title_block = $(this).parent().find('.works-current-name');
			title_block.html(title);
			title_block.show();
		}
	});

	$(document).on('mouseleave', '.works-nav .works-nav-btn', function(){
		var title_block = $(this).parent().find('.works-current-name');
		title_block.html('');
		title_block.hide();
	});


	$(document).on('click', '.lang-variants', function(){
		$(this).toggleClass('open');
	});


});
