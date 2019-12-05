$(document).ready(function() {

	function showBlockOne() {
		let blockTwo = document.getElementById('block-2');
		let blockThree = document.getElementById('block-3');
		let currentBlock = document.getElementById('block-1');

		blockTwo.style.display = 'none';
		blockThree.style.display = 'none';
		
		$(currentBlock)
			.css('display', 'flex')
			.hide()
			.fadeIn({
			duration: 800, 
			easing: 'linear'
		});		
	}

	function showBlockTwo() {
		let blockTwo = document.getElementById('block-1');
		let blockThree = document.getElementById('block-3');
		let currentBlock = document.getElementById('block-2');

		blockTwo.style.display = 'none';
		blockThree.style.display = 'none';
		
		$(currentBlock)
			.css('display', 'flex')
			.hide()
			.fadeIn({
			duration: 800, 
			easing: 'linear'
		});

	}

	function showBlockThree() {
		let blockTwo = document.getElementById('block-2');
		let blockThree = document.getElementById('block-1');
		let currentBlock = document.getElementById('block-3');

		blockTwo.style.display = 'none';
		blockThree.style.display = 'none';

		$(currentBlock)
			.css('display', 'flex')
			.hide()
			.fadeIn({
			duration: 800, 
			easing: 'linear'
		});
	}
	
	      $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });
	
	window.showBlockOne = showBlockOne;
	window.showBlockTwo = showBlockTwo;
	window.showBlockThree = showBlockThree;

});