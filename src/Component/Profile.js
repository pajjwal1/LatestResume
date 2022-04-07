import React from 'react'
import pImage from "../Images/pics1.jpg"
import "./Profile.css"

const ProfilePic = {
    height: "200px",
    width: "50%",
    "border-radius": "50%",
    "margin-top" :"20px",
    "margin-left": "auto",
    "margin-right":"auto",
    display:"block",
    border: "thick solid grey"
}
const Profile = () => {
    return (
        <div className='profile_section'>
            <img src={pImage} alt="Profile Image" style={ProfilePic} />
            <h3 className='name_title'>Prajjwal Kumar</h3>
            <p className='work_profile'>FrontEnd Developer</p>
            <p className='work_profile'>-----------------------------------</p>
        </div>
    )
}

export default Profile