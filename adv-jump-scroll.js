
// Simple Scroll Effect.
//  Scrolls to element, accpets offset and scroll duartion
function scrollToElement(el, options) {
	if (typeof options == 'undefined') options = {};
	duration = options.duration || 500; // milliseconds
	offset = options.offset || 0; // pixes
	y = $(el).offset().top - offset;
	$('body').animate({scrollTop:y}, duration)
}

function initJumpScroll() {
	// Just to stick this in one place
	$('a[href^="#"]').on('click', function(e) {
		// Fail out if this is just an empty link
		if ($(this).attr('href').length == 1) return true;
		e.preventDefault();

		// grab the selector
		sel = $(this).attr('href').substr(1);

		// Identify what we're srolling to, name first
		target = $('a[name="'+sel+'"]').exists() || $('a[id="'+sel+'"]').exists();
		if (!target) {
			console.log('WARNING! ' + $(this) + ' has no related link');
			return false;
		}
		scrollToElement(target[0],{offset:130});
	});
}