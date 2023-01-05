import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const NewServer = () => {
    const [newServer, setNewServer] = useState()
    const [serverName, setServerName] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()

    const navigate = useNavigate()

    const createImage = (e) => {
        let formData = new FormData()

        formData.append('server_image', image)
        formData.append('name', serverName)
        formData.append('description', description)

        fetch('http://localhost:8000/servers/', {
            method: 'POST',
            body: formData
        })
    }

    const makeNewServer = async () => {
        try {
            await axios.post('http://localhost:8000/servers/', newServer)
            navigate('/channels/homepage')
        } catch (err) {
            console.log(err)
        }
    }


    console.log(newServer)
    console.log(serverName)
    console.log(description)
    console.log(image)
    return (
        <form onSubmit={createImage}>
            <input type='file' name="server_image" accept="image/*" onChange={(e) => { setImage(e.target.files[0].name) }}></input>
            <p>Server Name:</p>
            <input value={serverName} onChange={(e) => { setServerName(e.target.value) }}></input>
            <p>Description:</p>
            <input value={description} onChange={(e) => { setDescription(e.target.value) }}></input>
            <button>Submit</button>
        </form>
    )



}

export default NewServer