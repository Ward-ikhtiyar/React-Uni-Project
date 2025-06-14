// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyq7gUVP8UEU8ubiNCdo7JLF789yJm5-Y",
  authDomain: "easy-rent-uni.firebaseapp.com",
  projectId: "easy-rent-uni",
  storageBucket: "easy-rent-uni.firebasestorage.app",
  messagingSenderId: "807233226916",
  appId: "1:807233226916:web:07864826cc8bd4df27be31",
  measurementId: "G-ET1WZ1W61H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);
 const VAPID_KEY='BNUaPBddbKnAI8H-lPW4FPatX3qOnXcfiNyshxbmz1apYvjma00VRLKp3jxptvfGiGwa_lTwujXJ2qhbQRJusRQ'
export async function requestNotificationPermissionAndToken() {
  const permission = await Notification.requestPermission();
  
  if (permission === "granted") {
    
    await navigator.serviceWorker.register('/firebase-messaging-sw.js');

    const swReg = await navigator.serviceWorker.ready;

    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: swReg,
    });

    if (token) {
      console.log("FCM Token:", token);
      return token;
    } else {
      console.warn("FCM Token not generated. Check FCM setup.");
    }
  } else {
    console.log("Notification permission not granted.");
  }
}

