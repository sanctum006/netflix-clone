import firebase from "firebase";

const firebaseConfig = {};

// console.log(firebase);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
