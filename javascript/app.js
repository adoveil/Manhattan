$(document).ready(function() {
	$('pre code').each(function(i, e) {hljs.highlightBlock(e,'   ')});
	
	if(!Modernizr.svg) {
		$('img[src*="svg"]').attr('src', function() {
			return $(this).attr('src').replace('.svg', '.png');
		});
	}
});