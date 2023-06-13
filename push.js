var push = require('web-push');

let vapidKeys = {
	publicKey: 'BAp6Zuy2zmv6Kik9aJRxoQykWQK3jD7XkQPyU55_cVSSYvBVuQZGFRuA4qoqvLzb3ZKz8bTruRbdrDpGSjMZPjQ',
	privateKey: 'D0WXq6JgFxk1aunLA7KYbfbCzikvAWP2fPxtWW7A6MY'
};

push.setVapidDetails('mailto:ssimeunji24@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');