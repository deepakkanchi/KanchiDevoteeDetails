
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyC_wA_rgwxXLGP8W306Nr9NMXrlNibFwOI",
  authDomain: "kanchi-devotee-details.firebaseapp.com",
  projectId: "kanchi-devotee-details",
  storageBucket: "kanchi-devotee-details.appspot.com",
  messagingSenderId: "755005210433",
  appId: "1:755005210433:web:9f837abff7960199d46bc0",
  measurementId: "G-2TMPJYSMCZ"
};

// Initialize Firebase
firebase.initializeApp(config);
export default firebase;