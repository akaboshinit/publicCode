

import * as firebase from "firebase/app";

// import "firebase/analytics";
// import "firebase/auth";
// import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCtUwJqhjf6Y3dQlj0Bn_WSre4Iw3V5qKQ",
    authDomain: "test-57dc7.firebaseapp.com",
    databaseURL: "https://test-57dc7.firebaseio.com",
    projectId: "test-57dc7",
    storageBucket: "test-57dc7.appspot.com",
    messagingSenderId: "270894135509",
    appId: "1:270894135509:web:421f47d0fa207e44530a5c",
    measurementId: "G-Y62WNDW8H7"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
var storageRef = storage.ref();