self.addEventListener('push', function (e) {
	// icon, text
	var options = {
		title: 'Icon Push !!',
		body: 'This notification was generated from a push!',
		icon: 'images/example.png',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: '2'
		},
	};

	// action
	var options2 = {
		title: 'Action Push !!',
		body: 'This notification was generated from a push!',
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
	var options3 = {
		title: 'Image Push !!',
		body: 'This notification was generated from a push!',
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
