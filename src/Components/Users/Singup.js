import { auth } from "../../Utilities/Firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [user, loading] = useAuthState(auth)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider()

    const googleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            navigate('/updateprofile')
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

    return (
        <div className="bg-zinc-700 h-screen w-screen flex justify-center">
            <div className="w-1/3 h-2/3 bg-zinc-800 rounded-lg flex flex-col justify-center my-auto shadow-lg shadow-black">
                <p className="text-white text-center text-xl mb-24">Create an account</p>
                <p className="text-white ml-20 mb-3">Email:</p>
                <input className="h-12 w-2/3 rounded-md bg-zinc-400 mx-auto pl-2 outline-none mb-5" onChange={(e) => { setEmail(e.target.value) }}></input>
                <p className="text-white ml-20 mb-3">Password:</p>
                <input type='password' className="h-12 w-2/3 rounded-md bg-zinc-400 mx-auto text-white pl-2 mb-5" onChange={(e) => { setPassword(e.target.value) }}></input>
                <Link to={'/updateprofile'} className="mx-auto mt-3 bg-violet-700 hover:bg-violet-800 transition-all  rounded-md text-white w-1/3 text-center h-10 duration-200 ease-linear pt-1.5 shadow-md shadow-black mb-5"><button onClick={signup}>Sign up</button></Link>
                <button onClick={googleLogin} className="mx-auto mt-3 bg-blue-700 hover:bg-blue-800 transition-all  rounded-md text-white w-52 text-center h-10 duration-200 ease-linear shadow-md shadow-black flex pt-2 justify-evenly "> <img className="h-5" src="https://imgur.com/PD4DF7S.png" /> Sign up with Google</button>
                <p className="text-center text-white mt-5">Already have an account? <Link className="text-blue-600 hover:underline" to={'/login'}>  Log in</Link></p>
            </div>
        </div>
    )
}

export default Signup