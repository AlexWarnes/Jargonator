'use strict';

function useSomeJargon() {
	$('.jargonButton').on('click', function(e) {
		e.preventDefault();
		console.log('Quick, think of something smart to say...');
		getJargon(displayJargon);
	});
}

function displayJargon(data) {
	$('.jargonDiv').html(
		`<section role="region" class="jargonCard">
			<p class="motto">"${data.motto}"</p>
		</section>
		`);
	$('.jargonCard').fadeIn(500);
}

function getJargon(callback) {
	const settings = {
		url: '/jargon',
		dataType: 'JSON',
		method: 'GET',
		success: callback
	};
	$.ajax(settings);
}

$(useSomeJargon);