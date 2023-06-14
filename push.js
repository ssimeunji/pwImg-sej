var push = require('web-push');

let vapidKeys = {
	publicKey: 'BAp6Zuy2zmv6Kik9aJRxoQykWQK3jD7XkQPyU55_cVSSYvBVuQZGFRuA4qoqvLzb3ZKz8bTruRbdrDpGSjMZPjQ',
	privateKey: 'D0WXq6JgFxk1aunLA7KYbfbCzikvAWP2fPxtWW7A6MY'
};

push.setVapidDetails('mailto:ssimeunji24@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eE51Dk3t6zo:APA91bE6b-jTYtD9ISStiZh_FHBN8XEAgqSQTgwG43f9PwKR7vuBZmzFslvYXY0S1hNKvKe3ZA_t054_2YRb2Ys5nGKhc73Mt4cmWxhnwj7uTOJFZ1J5D_51Uv8jBjK6GUEzjjEH-Jab","expirationTime":null,"keys":{"p256dh":"BPXTiWyegfWWyD2j4CUm5QbwmOg5P2qIWBehJ0DwUZaA92OERVq-h9X9wVeOcfaDiZTEF0YrWp8sIKth5p31owI","auth":"qJLq4zBILm_BAKyhtj0ILQ"}};

push.sendNotification(sub, 'test message');