// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcrOxnLBMIFnHQ4wYnR9eYjUn84ngQpek",
  authDomain: "e-commerce2-6dc53.firebaseapp.com",
  projectId: "e-commerce2-6dc53",
  storageBucket: "e-commerce2-6dc53.firebasestorage.app",
  messagingSenderId: "4774195667",
  appId: "1:4774195667:web:5a7b1953c38de95d73ff26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
// const storage = getStorage(app);
// export { db, storage };
