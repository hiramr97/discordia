import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyA2fCh1Bt9h6s0v0HZyzmZWjxRI3ykFYUU",

    authDomain: "discordia-697b6.firebaseapp.com",

    projectId: "discordia-697b6",

    storageBucket: "discordia-697b6.appspot.com",

    messagingSenderId: "177663121845",

    appId: "1:177663121845:web:da4338d8dd6d3e62bb21fc"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)