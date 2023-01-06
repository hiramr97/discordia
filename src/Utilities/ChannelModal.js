import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const ChannelModal = ({ setModal }) => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const { id } = useParams()

    const addChannel = async () => {
        try {
            await axios.post('https://discordia.herokuapp.com/channels/', {
                name: name,
                description,
                server: id
            })
            setModal(false)
            window.location.reload()
        } catch (err) {
            console.log(err.message)
        }
    }

    const cancel = () => {
        setModal(false)
    }

    return (
        <div className="bg-zinc-700 opacity-80 fixed inset-0 z-50">
            <div className="flex h-screen justify-center items-center">
                <div className="flex flex-col justify-center bg-zinc-800 h-1/3 w-1/3 rounded-xl shadow-lg shadow-black">
                    <button onClick={cancel} className="flex justify-end text-xl mr-5 mt-5 text-white hover:text-zinc-500">X</button>
                    <div className="flex text-xl mb-8 mx-auto text-white">Create your Channel</div>
                    <p className="flex text-l mb-3 mx-auto text-white">Channel Name</p>
                    <input className="h-12 w-2/3 rounded-md bg-zinc-400 mx-auto pl-2 mb-5 outline-none" onChange={(e) => { setName(e.target.value) }}></input>
                    <p className="flex text-l mb-3 mx-auto text-white">Channel Description</p>
                    <input className="h-12 w-2/3 rounded-md bg-zinc-400 mx-auto pl-2 mb-5 outline-none" onChange={(e) => { setDescription(e.target.value) }}></input>
                    <div className="flex">
                        <button className="mx-auto mt-3 bg-violet-700 hover:bg-violet-800 transition-all  rounded-md text-white w-1/3 text-center h-10 duration-200 ease-linear shadow-md shadow-black mb-8" onClick={addChannel}>Create Channel</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ChannelModal