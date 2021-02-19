import firebase from 'firebase';


let firebaseConfig = {
    apiKey: "AIzaSyAuk10owd8HSTuUHi4Xnwg6oEp7KyfFVnI",
    authDomain: "dva-react-app.firebaseapp.com",
    projectId: "dva-react-app",
    storageBucket: "dva-react-app.appspot.com",
    messagingSenderId: "450946863814",
    appId: "1:450946863814:web:df289356c0822259c97dc7",
    measurementId: "G-HW787PQNGC"

};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;