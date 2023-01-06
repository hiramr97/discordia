import axios from "axios"
import { useAuthState } from "react-firebase-hooks/auth"
import { useState } from "react"
import { auth } from "./Firebase"


const Message = ({ newMessages }) => {
    const [user, loading] = useAuthState(auth)
    const [newMessage, setNewMessage] = useState()
    const addMessage = async () => {
        try {
            await axios.post('https://discordia.herokuapp.com/messages/', {
                user: user.displayName,
                text: newMessage,
                channel: newMessages[0].id
            })
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }
    if (newMessages === undefined) return;
    const messageMapping = newMessages.map((message, key) => {
        return (
            <div className="ml-72 -mt-80" key={key}>
                <p className="text-lg text-white w-scereen ">{message.user}</p>
                <p className=" text-zinc-300 mb-80">{message.text}</p>
            </div>
        )
    })
    return (
        <div className="">
            {messageMapping}
            <button className="bg-violet-700 hover:bg-violet-800 transition-all rounded-md text-white text-center h-12 duration-200 ease-linear shadow-md shadow-black absolute bottom-0 mb-1 w-14 ml-48" onClick={addMessage}>Send</button>
            <input className="absolute w-10/12 ml-64 bottom-0 h-12 rounded-lg bg-zinc-500 mg-12 outline-none pl-4 mb-1" onChange={(e) => { setNewMessage(e.target.value) }}></input>
        </div>
    )
}

export default Message