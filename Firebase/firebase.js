// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"
// const firebaseConfig = {
//   apiKey: "AIzaSyC0-XXmwY_ScpXq_VJxPvwTjXQ_r0jcF18",
//   authDomain: "elmenusclone.firebaseapp.com",
//   databaseURL: "https://elmenusclone-default-rtdb.firebaseio.com",
//   projectId: "elmenusclone",
//   storageBucket: "elmenusclone.appspot.com",
//   messagingSenderId: "57271621220",
//   appId: "1:57271621220:web:ff707ce3b18b1b76db7171",
//   measurementId: "G-GT1JVN96RD"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDSn1DQ_a8zQeqlCHxm3SYV4JggluiDf3o",
  authDomain: "elmenus-app.firebaseapp.com",
  projectId: "elmenus-app",
  storageBucket: "elmenus-app.appspot.com",
  messagingSenderId: "996206221048",
  appId: "1:996206221048:web:5ed68678cf7b8eb8bb0d0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const db = getFirestore(app)
