self.addEventListener('push', function (e) {
	// icon, text
	var options1 = {
		body: 'This notification was generated from a push!',
		icon: 'images/example.png',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: '2'
		},
	};

	// action
	var options = {
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
	e.waitUntil(
		self.registration.showNotification('Push Test', options)
	);
});
