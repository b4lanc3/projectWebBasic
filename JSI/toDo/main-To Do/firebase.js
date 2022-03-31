const firebaseConfig = {
    apiKey: "AIzaSyD4MI6o55OpLdJz7HI1C9M4a4UlSmbgGew",
    authDomain: "to-do-list-900cc.firebaseapp.com",
    projectId: "to-do-list-900cc",
    storageBucket: "to-do-list-900cc.appspot.com",
    messagingSenderId: "702762193141",
    appId: "1:702762193141:web:dc2fa53919ae16c94cf5bc",
    measurementId: "G-FSMJEBV9HN"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();