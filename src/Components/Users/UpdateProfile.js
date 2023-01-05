import { auth } from "../../Utilities/Firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut, updateProfile } from "firebase/auth"
import { useState } from "react"
import { storage } from "../../Utilities/Firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { Link, useNavigate } from "react-router-dom"


const UpdateProfile = () => {
    const [user, loading] = useAuthState(auth)
    const [username, setUsername] = useState()
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState()
    const navigate = useNavigate()

    const updateUserName = async () => {
        try {
            await updateProfile(auth.currentUser, { displayName: username })
        } catch (err) {
            console.log(err.message)
        }
    }

    const profileImage = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const uploadImage = () => {
        const imageRef = ref(storage, 'image')
        uploadBytes(imageRef, image).then(() => {
            getDownloadURL(imageRef).then((url) => {
                setUrl(url)
            }).catch((err) => {
                console.log(err.message)
            })
            updateProfile(auth.currentUser, { photoURL: url })
            navigate('/channels/homepage')
            window.location.reload()
        }).catch((err) => {
            console.log(err.message)
        });
    }

    if (loading) return;
    if (!user) navigate('/')
    if (user)
        return (
            <div className="bg-zinc-700 h-screen w-screen flex justify-center">
                <div className="w-1/3 h-2/3 bg-zinc-800 rounded-lg flex flex-col justify-center my-auto shadow-lg shadow-black">
                    <p className="text-white text-center text-xl mb-12">Hello {user.displayName}!</p>
                    <img className="rounded-md h-1/3 w-1/3 mx-auto shadow-md shadow-black mb-10" src={user.photoURL}></img>
                    <p className="text-white mb-3 text-center">Username</p>
                    <input className="h-12 w-2/3 rounded-md bg-zinc-400 mx-auto pl-2 outline-none mb-5" onChange={(e) => { setUsername(e.target.value) }} placeholder={user.displayName}></input>
                    <input className="text-white text-center mb-10 file:bg-zinc-800 file:py-2 file:px-4 file:rounded-full file:border-0 file:hover:bg-violet-700 file:text-white file:cursor-pointer" type='file' onChange={profileImage}></input>
                    <button className="mx-auto mt-3 bg-violet-700 hover:bg-violet-800 transition-all  rounded-md text-white w-1/3 text-center h-10 duration-200 ease-linear shadow-md shadow-black mb-5" onClick={() => { updateUserName(); uploadImage() }}>Submit</button>
                </div>
            </div>
        )
}

export default UpdateProfile