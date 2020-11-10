import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD5zqIV6cvGihEU5S3n7-eiKLnNX2hMVFE",
  authDomain: "react-native-4de71.firebaseapp.com",
  databaseURL: "https://react-native-4de71.firebaseio.com",
  projectId: "react-native-4de71",
  storageBucket: "react-native-4de71.appspot.com",
  messagingSenderId: "321749620051",
  appId: "1:321749620051:web:a063bc6dc377180a373da6",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
