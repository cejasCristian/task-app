import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDWsBmhHxVkW_8tvqEZb39UfDiHo9sBNaA",
    authDomain: "task-app-639ad.firebaseapp.com",
    databaseURL: "https://task-app-639ad.firebaseio.com",
    projectId: "task-app-639ad",
    storageBucket: "task-app-639ad.appspot.com",
    messagingSenderId: "458082469639",
    appId: "1:458082469639:web:cb7d1b1e241611663ee7a2",
    measurementId: "G-CN1M1HYFBG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//data base export
export const db = firebase.firestore();


db.settings({
    timestampsInSnapshots = true,
});