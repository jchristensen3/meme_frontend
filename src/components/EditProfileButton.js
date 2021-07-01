import React from "react"

const EditProfileButton = (props) => {
    return (
        <div class="profilecontainer">
           <button id='editbtn' onClick={props.handleButtonView}>Edit Profile</button>
        </div>
    )
}
export default EditProfileButton