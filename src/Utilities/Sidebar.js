import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        return(
            <div key={key}>
                <Link to={`/homepage/${server.id}`}><img src={server.server_image}/></Link>
            </div>
        )
    })

    return (
        <div>
            {serverMapping}
        </div>
    )
}

export default Sidebar