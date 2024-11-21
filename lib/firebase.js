// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEGfEiOqqFJSBCg89NG1kXHC07g6gqGoE",
  authDomain: "next-e-commerce-32dcb.firebaseapp.com",
  projectId: "next-e-commerce-32dcb",
  storageBucket: "next-e-commerce-32dcb.firebasestorage.app",
  messagingSenderId: "353628531427",
  appId: "1:353628531427:web:f6994945ea74296312f3d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
