import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const ServerModal = ({ setServerModal }) => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const { id } = useParams()

    const cancelServer = () => {
        setServerModal(false)
    }

    return (
        <div className="bg-zinc-700 opacity-80 fixed inset-0 z-50">
            <div className="flex h-screen justify-center items-center">
                <div className="flex flex-col justify-center bg-zinc-800 w-1/3 rounded-xl shadow-lg shadow-black">
                    <button onClick={cancelServer} className="flex justify-end text-xl mr-5 mt-5 text-white hover:text-zinc-500">X</button>
                    <div className="flex text-xl mb-8 mx-auto text-white">Create your Server</div>
                    <p className="flex text-l mb-3 mx-auto text-white">Server Name</p>
                    <input className="h-12 w-2/3 rounded-md bg-zinc-400 mx-auto pl-2 mb-5 outline-none" onChange={(e) => { setName(e.target.value) }}></input>
                    <p className="flex text-l mb-3 mx-auto text-white">Server Description</p>
                    <input className="h-12 w-2/3 rounded-md bg-zinc-400 mx-auto pl-2 mb-5 outline-none" onChange={(e) => { setDescription(e.target.value) }}></input>
                    <input className="text-white text-center file:bg-zinc-800 file:py-2 file:px-4 file:rounded-full file:border-0 file:hover:bg-violet-700 file:text-white file:cursor-pointer" type='file'></input>
                    <div className="flex">
                        <button className="mx-auto mt-3 bg-violet-700 hover:bg-violet-800 transition-all  rounded-md text-white w-1/3 text-center h-10 duration-200 ease-linear shadow-md shadow-black mb-8">Create Server</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ServerModal