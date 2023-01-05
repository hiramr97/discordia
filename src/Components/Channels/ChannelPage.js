import { Fragment } from "react"
import ChannelSidebar from "../../Utilities/ChannelsSidebar"
import Message from "../../Utilities/Message"
import Sidebar from "../../Utilities/Sidebar"

const ChannelPage = () => {
    return (
        <>
            {/* <Sidebar /> */}
            <ChannelSidebar />
            <Message />
        </>
    )
}

export default ChannelPage