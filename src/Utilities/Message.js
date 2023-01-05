import { useEffect, useState } from "react"
import axios from "axios"
import { async } from "@firebase/util"


const Message = ({ newMessages }) => {
    if (newMessages === undefined) return;
    console.log(newMessages)
    const messageMapping = newMessages.map((message, key) => {
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
            <input></input>
        </div>
    )
}

export default Message