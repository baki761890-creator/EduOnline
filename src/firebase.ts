import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBo_ndEf3oFbrS54nUOc201YQl_zqi1huw",
  authDomain: "kursr-c01a3.firebaseapp.com",
  projectId: "kursr-c01a3",
  storageBucket: "kursr-c01a3.firebasestorage.app",
  messagingSenderId: "143889695357",
  appId: "1:143889695357:web:6804c4396e20247b06a714",
  measurementId: "G-0RXNPS7HE5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
