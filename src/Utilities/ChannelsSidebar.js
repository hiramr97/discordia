import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Message from "./Message";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";
import ChannelModal from "./ChannelModal";

const ChannelSidebar = () => {
    const [servers, setServers] = useState()
    const [newChannel, setNewChannel] = useState()
    const [user, loading] = useAuthState(auth)
    const [modal, setModal] = useState(false)


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

    const modalClick = () => {
        setModal(true)
    }

    if (servers === undefined)
        return (
            <div className="h-screen w-52 flex flex-col text-center bg-zinc-800 top-0 ml-16">
            </div>);

    const channelMapping = servers.channels.map((channel, key) => {
        return (
            <div className="hover:bg-violet-900 flex" key={key}>
                <button className="text-zinc-400 hover:text-white text-center text-lg mb-3 ml-5" id={channel.id} onClick={getMessages}>{channel.name}</button>
                <button><img className="h-4 invisible hover:visible" src="https://imgur.com/qS2Y0JO.png" /></button>
            </div>
        )
    })
    

    return (
        <div className="h-screen w-1/6 flex flex-col bg-zinc-800 top-0 ml-16 shadow-lg shadow-zinc-800">
            <p className="mb-5 text-2xl text-center text-white">{servers.name}</p>
            <button onClick={modalClick} className="text-zinc-400 hover:text-white text-lg mb-5">Add Channel</button>
            {channelMapping}
            <Message newChannel={newChannel} />
            {modal && <ChannelModal setModal={setModal} />}
        </div>
    )

}

export default ChannelSidebar