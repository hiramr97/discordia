import { auth } from "./Firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, useNavigate } from "react-router-dom"


const Userbar = () => {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()


    if (loading) return;
    if (!user) navigate('/')
    if (user)
        return (
            <div className="-mb-14">
                <div className="top-0 w-screen flex h-14 justify-end bg-zinc-800 shadow-md shadow-zinc-900">
                    <Link to={'/updateprofile'}><p className="mt-4 text-white text-lg mr-1">{user.displayName}</p></Link>
                    <Link to={'/updateprofile'}><img className="rounded-lg mt-1 mb-1 mx-1 h-12" src={user.photoURL}></img></Link>
                </div>
            </div>
        )
}

export default Userbar