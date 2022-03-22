import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyA-HlE8qJ2kNcForFmVe79hmpmPZLzGa6o",
        authDomain: "team-voting-2753f.firebaseapp.com",
        projectId: "team-voting-2753f",
        storageBucket: "team-voting-2753f.appspot.com",
        messagingSenderId: "1034522850290",
        appId: "1:1034522850290:web:41c9e69a53047f44a6f16b"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();