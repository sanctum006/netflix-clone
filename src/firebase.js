import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAggr2w8fSoqAochnrq7NwmndN8nr1uq4I",
  authDomain: "netflix-clone-40d26.firebaseapp.com",
  projectId: "netflix-clone-40d26",
  storageBucket: "netflix-clone-40d26.appspot.com",
  messagingSenderId: "423073408608",
  appId: "1:423073408608:web:56a3705f7e01e9ce354505",
};

// console.log(firebase);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
