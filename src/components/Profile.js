import React, { Component } from 'react'
import EditProfile from "./EditProfile"
import axios from 'axios'
import EditProfileButton from './EditProfileButton'
import ProfilePicChanger from './ProfilePicChanger'
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import Pic1 from "./pics/1.jpg";
import Pic2 from "./pics/2.jpg";
import Pic3 from "./pics/3.png";



class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            styles: {
                width: "300px",
                height: "300px",
                    },
            profileImage: '',
            user: {
                img: '',
                name: '',
                email: '',
                username: '',
                display: false,
            }
        }
    }

    componentDidMount = (id) => {
        axios.get(`http://localhost:3001/user/profile/${this.props.match.params.id}`)
        .then(resp => {
            this.setState({
                user: resp.data
            })
        })
    }

    handleChange = (event) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [event.target.name]: event.target.value
            }
        }))
    }


    handleSubmit =(event) => {
        event.preventDefault()

        axios.put(`http://localhost:3001/user/profile/${this.props.match.params.id}`, this.state.user)
        .then(resp => {
            this.setState(prevState => ({
                user: {
                    ...prevState.user,
                display: false
                }
            }))
        })
    }

    handleDelete = async (event) => {
        event.preventDefault()

        await axios.delete(`http://localhost:3001/user/profile/${this.props.match.params.id}`)
        .then (() => {
            this.props.history.push('/')
        })
    }

    handleButtonView = (event) => {
        event.preventDefault()
        this.setState(prevState => ({
            user: {
                ...prevState.user, 
            display: true
            }
        }))
    }

    handleImageChange = (profileImage) => {
        this.setState({
            profileImage
        })
    }



    render() {
        const user = this.state.user
        console.log(user.img)
        return (
            
            <div className="user">
             <h3>Profile</h3>
                         <Link to='/meme'>
                            <button>
                                Click Here to Create a Meme!
                            </button>
                        </Link>
                        <Link to='/gif'>
                            <button>
                                Click Here to search for a Gif!
                            </button>
                        </Link>
                <div id='profilecontainer'>
                   
                    
                            <div id='profilelayout'>
                                <img src={user.img}/>
                                <img style={{width: this.state.styles.width, height: this.state.styles.height ? 'block' : 'none' }} src={this.state.profileImage}/>
                            
                                <ProfilePicChanger handleImageChange={this.handleImageChange} pic1={Pic1} pic2={Pic2} pic3={Pic3}/>
                            </div> 
                            <div className='profileinfo'>
                                <p>{user.name}</p>
                                <p>{user.email}</p>
                                <p>{user.username}</p>
                            
                    
                       
                            
                                {user.display &&
                                <EditProfile 
                                    user={user} 
                                    handleChange={this.handleChange} 
                                    handleSubmit={this.handleSubmit} 
                                    handleDelete={this.handleDelete}
                                    />
                                }
                                {!user.display &&
                                <EditProfileButton handleButtonView={this.handleButtonView}/>
                                }
                                
                               
                            </div>
                            </div>
               
                            </div>  
            
        )
    }
}

export default Profile