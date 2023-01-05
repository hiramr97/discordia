import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { async } from "@firebase/util";
import Message from "./Message";

const ChannelSidebar = () => {
    const [servers, setServers] = useState()
    const [newChannel, setNewChannel] = useState()
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

    if (servers === undefined) return;
    console.log(newChannel)
    const channelMapping = servers.channels.map((channel, key) => {
        return(
            <div  key={key}>
                <button id={channel.id} onClick={getMessages}>{channel.name}</button>
            </div>
        )
    })

    return (
        <div>
            <p>{servers.name}</p>
            {channelMapping}
            <Message newChannel={newChannel}/>
        </div>
    )
    
}

export default ChannelSidebar