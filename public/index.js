'use strict';

function useSomeJargon() {
	$('.jargonButton').on('click', function(e) {
		e.preventDefault();
		console.log('Quick, think of something...');
		getJargon(displayJargon);
	});
}

function displayJargon(data) {
	$('.jargonCards').html(
		`<section class="companyCard">
			<h3>${data.company}</h3>
			<p class="motto">${data.motto}</p>
		</section>
		<section class="infoCard">
			<p>They're based out of:</p>
			<p class="location">${data.location}</p>
			<p>Your friend who works there:</p>
			<p class="friend"> ${data.friend.firstName} ${data.friend.lastName}</p>
		</section>
		`);
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