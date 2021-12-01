import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC3l-abKnb5p32t_CUnNVJg9UsKIDFV7fo",
    authDomain: "netflix-ddcc0.firebaseapp.com",
    projectId: "netflix-ddcc0",
    storageBucket: "netflix-ddcc0.appspot.com",
    messagingSenderId: "706300187189",
    appId: "1:706300187189:web:1c0f1264b8b6fe3666577c"
  };
  

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;