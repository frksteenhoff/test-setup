import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAvSBTE6H18jWAL_2-D7353zugt_Pelpwc",
    authDomain: "vuesome-94da9.firebaseapp.com",
    databaseURL: "https://vuesome-94da9.firebaseio.com",
    projectId: "vuesome-94da9",
    storageBucket: "vuesome-94da9.appspot.com",
    messagingSenderId: "1067823501063",
    appId: "1:1067823501063:web:ef7c920a2dcf826ef2ffa2",
    measurementId: "G-GXC716D1LW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;