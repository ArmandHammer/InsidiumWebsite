var player = null;
$( document ).ready(function() {
	resizeHeroVideo();
} );

$(window).resize(function() {
	resizeHeroVideo();
});

function resizeHeroVideo() {
	var content = $('#hero');
	var contentH = viewportSize.getHeight();
	contentH -= 158;
	content.css('height',contentH);
	
	if(player != null) {
		var iframe = $('.videoWrapper iframe');
		var iframeH = contentH - 150;
		if (isMobile) {
			iframeH = 163; 
		}
		iframe.css('height',iframeH);
		var iframeW = iframeH/9 * 16;
		iframe.css('width',iframeW);
	}
}