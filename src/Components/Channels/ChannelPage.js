import { Fragment } from "react"
import ChannelSidebar from "../../Utilities/ChannelsSidebar"
import Message from "../../Utilities/Message"
import Sidebar from "../../Utilities/Sidebar"
import Userbar from "../../Utilities/Userbar"

const ChannelPage = () => {
    return (
        <div className="bg-zinc-700">
            <Sidebar />
            <Userbar/>
            <ChannelSidebar/>
        </div>
    )
}

export default ChannelPage