import firebase from 'firebase/app'
import 'firebase/firestore'

export const db= firebase
.initializeApp ({
    apiKey: "AIzaSyAluCwlpOIFuC96fvemG0Xxv_tusrLHShg",
    authDomain: "burguer-queen-rubi.firebaseapp.com",
    databaseURL: "https://burguer-queen-rubi.firebaseio.com",
    projectId: "burguer-queen-rubi",
    storageBucket: "burguer-queen-rubi.appspot.com",
    messagingSenderId: "590215397027",
    appId: "1:590215397027:web:b07991404c54c064364916",
    measurementId: "G-EK44RXMVRG"
})
.firestore()
