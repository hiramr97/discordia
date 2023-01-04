import { auth } from "../../Utilities/Firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"
import Sidebar from "../../Utilities/Sidebar"
import { useNavigate } from "react-router-dom"
import ChannelSidebar from "../../Utilities/ChannelsSidebar"

export default function Homepage() {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()
    const logout = async () => {
        await signOut(auth)
    }


    if (loading) return;
    if (!user) navigate('/login')
    if (user)
        return (
            <div>
                <img src={user.photoURL} />
                <Sidebar/>
                <ChannelSidebar/>
                <button onClick={logout}>Signout</button>
            </div>
        )
}