// public/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// Initialize Firebase inside service worker
firebase.initializeApp({
  apiKey: "AIzaSyAyq7gUVP8UEU8ubiNCdo7JLF789yJm5-Y",
  authDomain: "easy-rent-uni.firebaseapp.com",
  projectId: "easy-rent-uni",
  messagingSenderId: "807233226916",
  appId: "1:807233226916:web:07864826cc8bd4df27be31",
});

const messaging = firebase.messaging();

// (Optional) Handle background notifications
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Background message:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo192.png', // You can customize this
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
