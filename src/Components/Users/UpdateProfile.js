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
        }).catch((err) => {
            console.log(err.message)
        });
    }

    if (loading) return;
    if (!user) navigate('/login')
    if (user)
        return (
            <div>
                Hello {user.displayName}!
                <img src={user.photoURL}></img>
                <input type='file' onChange={profileImage}></input>
                <p>Username:</p>
                <input onChange={(e) => { setUsername(e.target.value) }} placeholder={user.displayName}></input>
                <button onClick={() => { updateUserName(); uploadImage() }}>Submit</button>
            </div>
        )
}

export default UpdateProfile