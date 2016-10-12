 
jQuery(function($) {


    var md = new MobileDetect(window.navigator.userAgent);

	//Initiat WOW JS
    if (!md.mobile() && !md.tablet()){
        new WOW().init();    
    }
	
    
    // one page navigation 
    $('.main-navigation').onePageNav({
            currentClass: 'active'
    });
    
    $('.show-btn').on('click', function(){
        var $self = $(this);
        var $colwrap = $('.colwrap');
        console.log($colwrap);
    if ($colwrap.hasClass('hide')){
        $colwrap.removeClass('hide');
        $self.html('Сховати планування');
       } else {
           $colwrap.addClass('hide');
           $self.html('Планування поверхів будинок №1');
       }
    });
       $('.show-btn1').on('click', function(){
        var $self = $(this);
        var $colwrap = $('.colwrap1');
        console.log($colwrap);
    if ($colwrap.hasClass('hide')){
        $colwrap.removeClass('hide');
        $self.html('Сховати планування');
       } else {
           $colwrap.addClass('hide');
           $self.html('Планування поверхів будинок №2');
       }
    });
       $('.show-btn2').on('click', function(){
        var $self = $(this);
        var $colwrap = $('.colwrap2');
        console.log($colwrap);
    if ($colwrap.hasClass('hide')){
        $colwrap.removeClass('hide');
        $self.html('Сховати планування квартир');
       } else {
           $colwrap.addClass('hide');
           $self.html('Показати планування квартир');
       }
    });
    $(".fancybox-effects-c").fancybox({
				padding: 0,
				openEffect : 'elastic',
				openSpeed  : 150,
				closeEffect : 'elastic',
				closeSpeed  : 150,
				closeClick : true  
			});

    // Countdown
	$('#counter').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});


/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.contents' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();

});
