import {initializeApp, getApp, getApps} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCjoI4TAduLCvTf08HRryWMia9-yZYI3B4",
    authDomain: "netflix-clone-6c6e0.firebaseapp.com",
    projectId: "netflix-clone-6c6e0",
    storageBucket: "netflix-clone-6c6e0.appspot.com",
    messagingSenderId: "586245773251",
    appId: "1:586245773251:web:1e2a8233146ef05b6f8f76"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export {auth, db}