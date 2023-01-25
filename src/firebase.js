// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOVZO_E-b6jV1p7tfCHtJ3ams1NjFfKok",
  authDomain: "morchat-c46c1.firebaseapp.com",
  projectId: "morchat-c46c1",
  storageBucket: "morchat-c46c1.appspot.com",
  messagingSenderId: "66144000760",
  appId: "1:66144000760:web:2df27cb9833704b053b90d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app)