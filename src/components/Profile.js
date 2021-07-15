import React, { Component } from 'react'
import EditProfile from "./EditProfile"
import axios from 'axios'
import EditProfileButton from './EditProfileButton'
import ProfilePicChanger from './ProfilePicChanger'
import {Link} from 'react-router-dom'
import ParticleEffectButton from 'react-particle-effect-button'
import 'antd/dist/antd.css';
import Pic1 from "./pics/1.jpg";
import Pic2 from "./pics/2.jpg";
import Pic3 from "./pics/3.png";
import Pic4 from "./pics/4.gif";
import Pic5 from "./pics/5.gif";
import Pic6 from "./pics/6.jpg";
import Pic7 from "./pics/7.gif";




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
            },
            hidden: false
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
             <h1 className="profile">Profile</h1>
                <div className='profile-buttons'>
                    <div className="button1">
                         <Link to='/mymeme'>
                            <button> 
                            Click Here to Create a Meme!
                            </button>
                        </Link>
                    </div>
                    <div className="button2">
                        <Link to='/gif'>
                            <button>
                                Click Here to search for a Gif!
                            </button>
                        </Link>
                    </div>  
                </div>    
                <div id='profilecontainer'>
                   
                    
                            <div id='profilelayout'>
                                <img style={{width: this.state.styles.width,  height: this.state.styles.height ? 'block' : 'none' }} src={user.img} />
                                <img style={{width: this.state.styles.width,  height: this.state.styles.height ? 'block' : 'none' }} src={this.state.profileImage}/>
                                
                                <ProfilePicChanger handleImageChange={this.handleImageChange} pic1={Pic1} pic2={Pic2} pic3={Pic3} pic4={Pic4} pic5={Pic5} pic6={Pic6} pic7={Pic7}/>
                            </div> 
                            <div className='profileinfo'>
                                <p>NAME:  {user.name}</p>
                                <p>USERNAME:  {user.username}</p>
                                <p>EMAIL:  {user.email}</p>
                               
                            
                    
                       
                            
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