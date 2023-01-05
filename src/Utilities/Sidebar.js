import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NewServer from "../Components/Channels/NewServer";

const Sidebar = () => {
    const [servers, setServers] = useState()

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
            <div className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-zinc-800 text-purple-700 hover:bg-purple-900 hover:text-white hover:rounded-xl transition-all duration-300 ease-linear rounded-3xl object-fill" key={key}>
                <Link to={`/channels/${server.id}`}><img src={server.server_image} /></Link>

            </div>
        )
    })

    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-zinc-900">
            {serverMapping}
            <button className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-zinc-800 text-purple-700 hover:bg-purple-900 hover:text-white rounded-3x1 hover:rounded-xl transition-all duration-200 ease-linear text-xl rounded-3xl">+</button>
        </div>
    )
}

export default Sidebar