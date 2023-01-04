import { auth } from "../../Utilities/Firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [user, loading] = useAuthState(auth)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const googleProvider = new GoogleAuthProvider()

    const googleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.log(err.message)
        }
    }

    const signup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.log(err.message)
        }
    }
    console.log(user)
    return (
        <div>
            <p>Email:</p>
            <input onChange={(e) => {setEmail(e.target.value)}}></input>
            <p>Password:</p>
            <input type='password' onChange={(e) => {setPassword(e.target.value)}}></input>
            <Link to={'updateprofile'}><button onClick={signup}>Sign up</button></Link>
            <Link to={'login'}><button>Log in</button></Link>
            <button onClick={googleLogin}>Google</button>
        </div>
    )
}

export default Signup