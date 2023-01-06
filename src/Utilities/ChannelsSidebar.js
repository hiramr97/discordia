import { useState } from "react";
import axios from "axios";
import Message from "./Message";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase";
import ChannelModal from "./ChannelModal";

const ChannelSidebar = ({ servers }) => {
    const [newChannel, setNewChannel] = useState(1)
    const [newMessages, setNewMessages] = useState()
    const [user, loading] = useAuthState(auth)
    const [modal, setModal] = useState(false)


    const getMessages = async (e) => {
        setNewChannel(e.target.id)
        await axios.get(`https://discordia.herokuapp.com/channels/${e.target.id}/`).then((response) => {
            setNewMessages(response.data.messages)
        })
    }

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
                <button><img className="h-4 invisible hover:visible" src="https://imgur.com/qS2Y0JO.png"/></button>
            </div>
        )
    })

    return (
        <div className="max-h-screen">
            <div className="h-screen w-64 flex flex-col bg-zinc-800 top-0 ml-16 shadow-lg shadow-zinc-800">
                <p className="mb-5 text-2xl text-center text-white mt-4">{servers.name}</p>
                <button onClick={modalClick} className="text-zinc-400 hover:text-white text-lg mb-5">Add Channel</button>
                {channelMapping}
                {modal && <ChannelModal setModal={setModal} />}
                <Message newMessages={newMessages} />
                
            </div>
        </div>
    )

}

export default ChannelSidebar