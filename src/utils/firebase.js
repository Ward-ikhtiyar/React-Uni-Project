import { initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

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
getAnalytics(app);

const VAPID_KEY = 'BNUaPBddbKnAI8H-lPW4FPatX3qOnXcfiNyshxbmz1apYvjma00VRLKp3jxptvfGiGwa_lTwujXJ2qhbQRJusRQ';

export async function requestNotificationPermissionAndToken() {
  const supported = await isSupported();

  if (!supported) {
    console.warn("Firebase messaging is not supported in this browser.");
    return;
  }

  const messaging = getMessaging(app);

  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    console.log("Notification permission not granted.");
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register("/firebase-messaging-sw.js");

    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration,
    });

    if (token) {
      console.log("✅ FCM Token:", token);
      return token;
    } else {
      console.warn("⚠️ FCM Token not generated.");
    }
  } catch (error) {
    console.error("🔥 Error registering service worker or getting token:", error);
  }
}
