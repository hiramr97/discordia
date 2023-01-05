import { useState } from "react"
import axios from "axios"


const Message = (props) => {
    console.log(props.newchannel)
    let newData = Object.values(props)
    console.log(newData)
    // const channel = props
    // if (channel === undefined) return;
    // const message = channel.messages.map((messages, key) => {
    //     return (
    //         <p></p>
    //     )
    // })
}

export default Message