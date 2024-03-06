//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCZ-j6b9C-qVlOkorP429uthReIzSVZ9sE",
  authDomain: "comp1800-202410-demo-e9461.firebaseapp.com",
  projectId: "comp1800-202410-demo-e9461",
  storageBucket: "comp1800-202410-demo-e9461.appspot.com",
  messagingSenderId: "563152940988",
  appId: "1:563152940988:web:d720f4bb0b27bf0f6d45b9"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
