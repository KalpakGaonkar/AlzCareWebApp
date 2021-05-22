import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import 'reactjs-popup/dist/index.css'
import '../components/Popup.css'
import {firestore, storage} from '../firebase'

export default function PopUp () {
    const [ image,setImage ] = useState(null);

    const handleChange = e => {
        if (e.target.files[0]){
            setImage(e.target.files[0]);
            }
        }
                
    const handleUpload = () => {
        const uploadTask = firestore.ref(`images/${image.name}`).put(image);
        
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                storage.ref("images").child(image.name)
            }
        )
        }
    console.log("image:",image)

    return(
        <Popup trigger={<FontAwesomeIcon icon='upload'  />} position="right center">
        <div className='popup'>
        <div className='popup-inner'>
        <h5>Upload patients latest MRI Scan</h5>
        <br></br>
            <button className='close-btn' >Close</button>
            {/* <CloseButton/> */}
            <input type='file' onChange={handleChange} ></input>
            <button onClick={handleUpload} >Upload</button>
        </div>
    </div>
        </Popup>
    )
}
        

    