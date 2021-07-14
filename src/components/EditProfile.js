import React from "react"

const EditProfile = (props) => {
    return (
        <div class="profilecontainer">
           <form onSubmit={props.handleSubmit}>
                <div className='userinfo'>
                    <label for="name">Name: </label>
                    <input onChange={props.handleChange} type="text" name="name" value={props.user.name} placeholder="Name" />
                </div>
                <div className='userinfo'>
                    <label for="email">Email: </label>
                    <input onChange={props.handleChange} type="text" name="email" value={props.user.email} placeholder="Email" />
                </div>
                <div className='userinfo'>
                    <label for="username">Username: </label>
                    <input onChange={props.handleChange} type="text" name="username" value={props.user.username} placeholder="Username" />
                </div>
                <div className='userinfo'>
                    <label for="img">Image: </label>
                    <input onChange={props.handleChange} type="text" name="img" value={props.user.img} placeholder="Image" />
                </div>
                <input className='frmbtn' type="submit" value="Edit Profile" />
                <button className='frmbtn' onClick={props.handleDelete}>Delete Profile</button>
           </form>

           
        </div>
    )
}
export default EditProfile