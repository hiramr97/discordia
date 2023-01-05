import { auth } from "./Firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, useNavigate } from "react-router-dom"


const Userbar = () => {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()


    if (loading) return;
    if (!user) navigate('/login')
    if (user)
        return (
            <div className="top-0 w-screen flex justify-end h-14 bg-zinc-800 ">
                <p className="mt-4 text-white text-lg mr-1">{user.displayName}</p>
                <Link to={'/updateprofile'}><img className="rounded-lg mt-1 mb-1 mx-1 h-12" src={user.photoURL}></img></Link>
            </div>
        )
}

export default Userbar