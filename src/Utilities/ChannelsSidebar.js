import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Message from "./Message";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";

const ChannelSidebar = () => {
    const [servers, setServers] = useState()
    const [newChannel, setNewChannel] = useState()
    const [user, loading] = useAuthState(auth)
    const { id } = useParams()

    const getServers = async () => {
        try {
            await axios.get(`http://localhost:8000/servers/${id}/`).then((response) => {
                setServers(response.data)
            })
        } catch (err) {
            console.log(err)
        }
    }

    const getMessages = async (e) => {
        const channelId = e.target.id
        await axios.get(`http://localhost:8000/channels/${channelId}/`).then((response) => {
            setNewChannel(response.data)
        })
    }

    useEffect(() => {
        getServers()
    }, [])

    if (servers === undefined)
        return (
            <div className="h-screen w-52 flex flex-col text-center bg-zinc-800 top-0 ml-16">
            </div>);
    console.log(newChannel)
    const channelMapping = servers.channels.map((channel, key) => {
        return (
            <div key={key}>
                <button className="hover:bg-violet-400 text-white text-lg" id={channel.id} onClick={getMessages}>{channel.name}</button>
            </div>
        )
    })

    return (
        <div className="h-screen w-52 flex flex-col text-center bg-zinc-800 top-0 ml-16">
            <p className="mb-5 text-2xl text-white">{servers.name}</p>
            {channelMapping}
            <Message newChannel={newChannel} />
        </div>
    )

}

export default ChannelSidebar