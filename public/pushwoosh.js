var Pushwoosh = Pushwoosh || [];
Pushwoosh.push(['init', {
    logLevel: 'info', // possible values: error, info, debug
    applicationCode: '7E7C1-4903A', // you application code from Pushwoosh Control Panel
    // safariWebsitePushID: 'web.com.example.domain', //  unique reverse-domain string, obtained in you Apple Developer Portal. Only needed if you send push notifications to Safari browser
    defaultNotificationTitle: 'Pushwoosh', // sets a default title for push notifications
    // defaultNotificationImage: 'https://yoursite.com/img/logo-medium.png', // URL to custom custom notification image
    autoSubscribe: false, // or true. If true, prompts a user to subscribe for pushes upon SDK initialization
    subscribeWidget: {
      enable: true
    },
    // userId: 'user_id', // optional, set custom user ID
    // tags: {
    //     'Name': 'John Smith'   	// optional, set custom Tags
    // }										
}]);
Pushwoosh.push(['onLoad', function (api) {
  // Executed when a push notification is displayed.
  Pushwoosh.addEventHandler('receive-push', function (payload) {
    console.log('Triggered event: receive-push', payload.notification);
    const i = "https://optikpi:zv212zin@demo1.optikpi.com/ingest/pushwoosh/webhook",
    o = {
        msgId: payload.notification.metaData._mc
    };
    try {
     fetch(i, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(o)
      });
    } catch (e) {
      return console.log(e);
    }
  })
}])