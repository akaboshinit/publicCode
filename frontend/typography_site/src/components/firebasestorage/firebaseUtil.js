
import { svgToPng } from './svgToPng'

import * as firebase from "firebase/app";
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

export const uploadOgpFile = (path, text, svgData) => {
    const sRef = firebase.storage().ref();
    const fileRef = sRef.child(`ogp/${path}.png`);

    fileRef.getDownloadURL()
    .catch(() => {
      // catchのときは、storageに画像データが無いって判定なので、画像を作る処理をする
        const callback = (pngData) => {
            fileRef.putString(pngData, 'data_url');
        }
        svgToPng(text, svgData, callback);
    });
}