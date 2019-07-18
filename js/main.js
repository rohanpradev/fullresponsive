// Google Maps
function initMap() {
	const loc = { lat: 6.927079, lng: 79.861244 };

	const map = new google.maps.Map(document.querySelector('.map'), {
		center: loc,
		zoom: 14
	});

	const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener('scroll', function() {
	if (window.scrollY > 150) {
		document.querySelector('#navbar').style.opacity = 0.9;
	} else {
		document.querySelector('#navbar').style.opacity = 1;
	}
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
	if (this.hash !== '') {
		event.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top - 65
			},
			800
		);
	}
});
