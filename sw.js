self.addEventListener('push', function (e) {
	// icon, text
	var options1 = {
		body: 'This is Icon Push!',
		icon: 'images/example.png',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: '2'
		},
	};

	// action
	var options2 = {
		body: 'This is Action Push!',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: '2'
		},
		actions: [
			{
				action: 'explore', title: 'Check',
				icon: 'images/checkmark.png'
			},
			{
				action: 'close', title: 'Close',
				icon: 'images/xmark.png'
			},
		]
	};

	// img
	var options = {
		body: 'This is Img Push!',
		image: 'images/imgExam.jpg',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: '2'
		},
	};

	e.waitUntil(
		self.registration.showNotification("2023", options)
	);
});
