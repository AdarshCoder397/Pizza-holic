import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9VhY8uKtW9-gqF1eBXHS8AqYd7M9wffs",
  authDomain: "pizza-holic.firebaseapp.com",
  projectId: "pizza-holic",
  storageBucket: "pizza-holic.appspot.com",
  messagingSenderId: "106755898395",
  appId: "1:106755898395:web:26ee8dbc3b34418407ccbe",
  measurementId: "G-M38VLMVH8B",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const colRef = collection(db,'items')
export default colRef
