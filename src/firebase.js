import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC6hmNS2Fk905fyUpYQ3fPwLK2o9mcW42I",
	authDomain: "fb-clone-30246.firebaseapp.com",
	projectId: "fb-clone-30246",
	storageBucket: "fb-clone-30246.appspot.com",
	messagingSenderId: "394989821709",
	appId: "1:394989821709:web:ce8bc1f05e8a6bd978da44",
	measurementId: "G-FKN4X9J87H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
