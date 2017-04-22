

import {$} from 'jquery'

document.addEventListener('DOMContentLoaded', (event) => {
	$('.page .ui.sidebar')
		.sidebar({
			context: $('.page .bottom.segment'),
			scrollLock: true,
			returnScroll: true
		})
		.sidebar('attach events', '.page .menu .item');
});