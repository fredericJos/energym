var energym = energym || {};

energym.popup = (($, window, undefined) => {

    let init;

    init = () => {
        $('.zoom-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: true,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				titleSrc: function(item) {
					return item.el.attr('title');
				}
			},
			gallery: {
				enabled: true,
				preload: [1,1]
			},
			zoom: {
				enabled: true,
				duration: 300, // don't forget to change the duration also in CSS
				opener: function(element) {
					return element.find('img');
				}
			},
			callbacks: {
				lazyLoad: function(item) {
					console.log(item);
				}
			}
			
		});
    };

    return {
        init: init
    };

}(jQuery, window));