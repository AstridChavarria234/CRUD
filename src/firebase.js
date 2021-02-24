import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig ={
    apiKey: "AIzaSyAa_eXicsRXWaFY1oOGiQjVnwzyXtwn_lo",
    authDomain: "crud-fe35a.firebaseapp.com",
    projectId: "crud-fe35a",
    storageBucket: "crud-fe35a.appspot.com",
    messagingSenderId: "432436028123",
    appId: "1:432436028123:web:bcf74d032ce33af25de2fe"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)