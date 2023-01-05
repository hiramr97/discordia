import { auth } from "./Firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"


const Userbar = () => {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()
    const logout = async () => {
        await signOut(auth)
    }


    if (loading) return;
    if (!user) navigate('/login')
    if (user)
        return (
            <div className="top-0 w-screen flex justify-end h-12 mb-2 bg-zinc-800 ">
                <p className="mt-3 text-white">{user.displayName}</p>
                <img className="rounded-md mt-1 mb-1 mx-1" src={user.photoURL}></img>
            </div>
        )
}

export default Userbar