var push = require('web-push');

let vapidKeys = {
	publicKey: 'BAp6Zuy2zmv6Kik9aJRxoQykWQK3jD7XkQPyU55_cVSSYvBVuQZGFRuA4qoqvLzb3ZKz8bTruRbdrDpGSjMZPjQ',
	privateKey: 'D0WXq6JgFxk1aunLA7KYbfbCzikvAWP2fPxtWW7A6MY'
};

push.setVapidDetails('mailto:ssimeunji24@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cnxkJXjv5bA:APA91bHZy3VlXgAHzosr_Ms51IY1-ssHtksPXROSDOiJzIJxIS3WjCBrrh2rn8IoZh-KJyu56AWjHXNmvmgPN1NCFAKBpELyF7r_CkTQmjF3kJ-xh7WX3xFmkvFQbzsC3HH0J9UhgpIp","expirationTime":null,"keys":{"p256dh":"BHvzPK_-r3ur5sqgipbcbIMjQ24uzbkTwXNvEEF0PcHpihy3ADl0Bb-F_vCAp7dgF5zDAvI3H6rwL6U3QUPHt5Y","auth":"qBqZdO-exztWvJWEpaL2Fg"}};

push.sendNotification(sub, 'test message');