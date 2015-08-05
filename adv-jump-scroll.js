
// Simple Scroll Effect.
//  Scrolls to element, accpets offset and scroll duartion
function scrollToElement(el, options) {
	if (typeof options == 'undefined') options = {};
	duration = options.duration || 500; // milliseconds
	offset = options.offset || 0; // pixes
	y = $(el).offset().top - offset;
	$('body').animate({scrollTop:y}, duration)
}

