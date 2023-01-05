import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = () => {
    const [servers, setServers] = useState()
    const [user, loading] = useAuthState(auth)

    const logout = async () => {
        await signOut(auth)
    }

    const getServers = async () => {
        try {
            await axios.get('http://localhost:8000/servers/').then((response) => {
                setServers(response.data)
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getServers()
    }, [])

    if (servers === undefined) return;
    const serverMapping = servers.map((server, key) => {
        return (
            <div className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-zinc-700 text-purple-700 hover:bg-purple-900 hover:text-white hover:rounded-xl transition-all duration-300 ease-linear rounded-3xl object-fill group" key={key}>
                <Link to={`/channels/${server.id}`}><img src={server.server_image} /></Link>
                <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-violet-700 text-xs font-bold transition-all duration-200 origin-left scale-0 group-hover:scale-100">{server.name}</span>

            </div>
        )
    })

    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-zinc-800 shadow-xl shadow-zinc-900">
            {serverMapping}
            <button className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-zinc-700 text-purple-700 hover:bg-purple-900 hover:text-white rounded-3x1 hover:rounded-xl transition-all duration-200 ease-linear text-xl rounded-3xl">+</button>
            <button onClick={logout}><img className="relative flex items-center justify-center bottom-0 h-12 w-12 mt-2 mb-2 mx-auto bg-zinc-700 text-purple-700 hover:bg-purple-900 hover:text-white rounded-3x1 hover:rounded-xl transition-all duration-200 ease-linear text-xl rounded-3xl" src="https://imgur.com/iAy3vFa.png"/></button>
        </div>
    )
}

export default Sidebar