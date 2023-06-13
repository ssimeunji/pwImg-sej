var push = require('web-push');

let vapidKeys = {
	publicKey: 'BAp6Zuy2zmv6Kik9aJRxoQykWQK3jD7XkQPyU55_cVSSYvBVuQZGFRuA4qoqvLzb3ZKz8bTruRbdrDpGSjMZPjQ',
	privateKey: 'D0WXq6JgFxk1aunLA7KYbfbCzikvAWP2fPxtWW7A6MY'
};

push.setVapidDetails('mailto:ssimeunji24@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dpLX21ClZZs:APA91bHOeWn8l_58nzq1eymD71-dCbzXSuWPmUkOy_mgBEDxQyrjqkLkxA9FNV7afVoEtv5SIsfgSeetYl-EqIHlokM-NEjSb0mBj5Z7bNQcGZ-4DT-3MjYUceYnheBjVzlfruofFgC0","expirationTime":null,"keys":{"p256dh":"BP2n3msuwyUl1efMl5DB1kkza4No8AWPK-1LvKPmzrbY9bqKfx2_yz-AAqj-h64peQKOZ2yeOehWv3oGzCUR5OY","auth":"aFHKccLseLZYFWwI6ck0XQ"}};

push.sendNotification(sub, 'test message');