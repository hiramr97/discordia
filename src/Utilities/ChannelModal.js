
import { useState } from "react"
import { useParams } from "react-router-dom"

const ChannelModal = ({ setModal, setChoice }) => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const { id } = useParams()

    const addChannel = async () => {
        try {
            await axios.post('http://local:8000/channels')
        }
    }

    const handleOKClick = () => {
        setChoice(true)
        setModal(false)
    }
    const Cancel = () => {
        setChoice(false)
        setModal(false)
    }

    return (

        <div className="bg-zinc-700 opacity-80 fixed inset-0 z-50">
            <div onClick={Cancel} className="flex h-screen justify-center items-center">
                <div className="flex flex-col justify-center bg-zinc-800 h-1/3 w-1/3 rounded-xl shadow-lg shadow-black">
                    <div className="flex text-xl mb-8 mt-2 mx-auto text-white">Create your Channel</div>
                    <p className="flex text-l mb-3 mx-auto text-white">Channel Name</p>
                    <input type='password' className="h-12 w-2/3 rounded-md bg-zinc-400 mx-auto text-white pl-2 mb-5"></input>
                    <p className="flex text-l mb-3 mx-auto text-white">Channel Description</p>
                    <input type='password' className="h-12 w-2/3 rounded-md bg-zinc-400 mx-auto text-white pl-2 mb-5"></input>
                    <div className="flex">
                        <button className="mx-auto mt-3 bg-violet-700 hover:bg-violet-800 transition-all  rounded-md text-white w-1/3 text-center h-10 duration-200 ease-linear shadow-md shadow-black mb-5">Create Channel</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ChannelModal