import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ChannelSidebar from "../../Utilities/ChannelsSidebar"
import Sidebar from "../../Utilities/Sidebar"
import Userbar from "../../Utilities/Userbar"
import axios from "axios"

const ChannelPage = () => {
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
    }, [id])




    return (
        <div className="bg-zinc-700">
            <Sidebar />
            <Userbar />
            <ChannelSidebar servers={servers} />
        </div>
    )
}

export default ChannelPage