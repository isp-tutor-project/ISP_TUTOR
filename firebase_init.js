const firebaseConfig = {
    apiKey: "AIzaSyDKagr-Shz36fLBmMz8preCcKkme0hF068",
    authDomain: "registerassigncond.firebaseapp.com",
    databaseURL: "https://registerassigncond.firebaseio.com",
    projectId: "registerassigncond",
    storageBucket: "registerassigncond.appspot.com",
    messagingSenderId: "611734779379",
    appId: "1:611734779379:web:f7de941bb9243711bbce86"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();