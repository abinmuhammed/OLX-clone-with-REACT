import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApZMALtYugrIzEBE8PmZKldgzxNlq0Ak0",
    authDomain: "fir-fc7ce.firebaseapp.com",
    projectId: "fir-fc7ce",
    storageBucket: "fir-fc7ce.appspot.com",
    messagingSenderId: "870881130090",
    appId: "1:870881130090:web:25a87489606ab8f79bfc13",
    measurementId: "G-0T4N1GP245"
  };

 export default firebase.initializeApp(firebaseConfig)