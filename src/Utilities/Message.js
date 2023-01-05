import { useEffect, useState } from "react"
import axios from "axios"
import { async } from "@firebase/util"
import { unstable_renderSubtreeIntoContainer } from "react-dom"


const Message = ({ newChannel }) => {
    const [newMessages, setNewMessages] = useState()

    console.log(newChannel)

    const getNewMessages = async () => {
        await axios.get(`http://localhost:8000/channels/${newChannel}/`).then((response) => {
            setNewMessages(response.data.messages)
        })
    }


    useEffect(() => {
        getNewMessages()
    }, [])

    if (newMessages === undefined) return;
    console.log(newMessages)
    const messageMapping = newMessages.map((message, key) => {
        console.log(message)
        return (
            <div className="w-2/3 ml-72 -mt-96" key={key}>
                <p className="text-lg text-white">{message.user}</p>
                <p className="mb-96">{message.text}</p>
            </div>
        )
    })

    return (
        <div>
            {messageMapping}
            <input className="absolute w-10/12 bottom-0 ml-64 outline-none rounded-md pl-4 bg-zinc-500 h-10" placeholder={newChannel.name}></input>
        </div>
    )
}

export default Message