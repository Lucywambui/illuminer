import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUnYHC-mVpotkyWKe4ArIp0dHAKFPWqRE",
  authDomain: "illuminer-93b3f.firebaseapp.com",
  projectId: "illuminer-93b3f",
  storageBucket: "illuminer-93b3f.appspot.com",
  messagingSenderId: "1035959679717",
  appId: "1:1035959679717:web:467d7fade9069fa796f20c"
};

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);