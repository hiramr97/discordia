import { auth } from "../../Utilities/Firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [user, loading] = useAuthState(auth)
    const [loginEmail, setLoginEmail] = useState()
    const [loginPassword, setLoginPassword] = useState()

    const googleProvider = new GoogleAuthProvider()

    const googleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch(err) {
            console.log(err.message)
        } 
    }

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div>
            <p>Email:</p>
            <input onChange={(e) => {setLoginEmail(e.target.value)}}></input>
            <p>Password:</p>
            <input type='password' onChange={(e) => {setLoginPassword(e.target.value)}}></input>
            <Link to={'/homepage'}><button onClick={login}>Log in</button></Link>
            <Link to={'/signup'}><button>Register?</button></Link>
            <button onClick={googleLogin}>Google</button>
        </div>
    )
}

export default Login