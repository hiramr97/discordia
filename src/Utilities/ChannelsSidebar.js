import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ChannelSidebar = () => {
    const [servers, setServers] = useState()
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

    useEffect(() => {
        getServers()
    }, [])

    if (servers === undefined) return;
    console.log(servers)
    const channelMapping = servers.channels.map((channel, key) => {
        return(
            <div key={key}>
                <p>{channel.name}</p>
            </div>
        )
    })

    return (
        <div>
            <p>{servers.name}</p>
            {channelMapping}
        </div>
    )
}

export default ChannelSidebar