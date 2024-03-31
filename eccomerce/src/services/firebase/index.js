import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA5GuxZLjjDkz8S75b7GH7a5vGrbcdNfqU",
  authDomain: "proyecto-final-react-ce7bd.firebaseapp.com",
  projectId: "proyecto-final-react-ce7bd",
  storageBucket: "proyecto-final-react-ce7bd.appspot.com",
  messagingSenderId: "249055016913",
  appId: "1:249055016913:web:95a088d92d8fda9779d2f0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
