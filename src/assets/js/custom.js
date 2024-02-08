$(document).ready(function(){
	$(function() {
		var header = $(".header");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
			if (scroll >= 200) {
				header.removeClass('header').addClass("header-alt");
			} else {
				header.removeClass("header-alt").addClass('header');
			}
		});
	});
	$('ul.navbar-nav li.dropdown').hover(function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});
	$('.innr-dropdown ul li.drop').click(function(){
		$(this).toggleClass('innr-of-innr-show');
	});
	var title;
	title=$('h1.title').text();
	$('li.breadcrumb-item.active').append(title);

	// popup lightbox gallery	
	var $lightbox = $('#lightbox');
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
        src = $img.attr('src'),
        alt = $img.attr('alt'),
        css = {
            'maxWidth': $(window).width() - 100,
            'maxHeight': $(window).height() - 100
        };
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });  //end lightbox
	
});

// disable right click mouse
function disableRightClick() { 
	return false; 
}

// TopScroll Function Button
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

/*/ popup lightbox gallery
$(document).ready(function() {
    var $lightbox = $('#lightbox');
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
        src = $img.attr('src'),
        alt = $img.attr('alt'),
        css = {
            'maxWidth': $(window).width() - 100,
            'maxHeight': $(window).height() - 100
        };
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
}); */
