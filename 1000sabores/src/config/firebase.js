// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyB8yWHr65xAKNy7CU-6n8fW4Vs0aEpsDm8",
  authDomain: "pasteleria1000sabores-a7d6b.firebaseapp.com",
  projectId: "pasteleria1000sabores-a7d6b",
  storageBucket: "pasteleria1000sabores-a7d6b.firebasestorage.app",
  messagingSenderId: "922232977389",
  appId: "1:922232977389:web:d9b457821b2643a20199e4",
  measurementId: "G-056PCM8YTQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);