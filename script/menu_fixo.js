//<![CDATA[ 
			$(window).load(function(){
			var offset = $('#meuMenu').offset().top;
			var $meuMenu = $('#meuMenu');
			$(document).on('scroll', function () {
				if (269 <= $(window).scrollTop()) {
					$meuMenu.addClass('fixar');
				} else {
					$meuMenu.removeClass('fixar');
				}
			});

			});//]]> 