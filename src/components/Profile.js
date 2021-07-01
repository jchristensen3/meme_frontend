import React, { Component } from 'react'
import EditProfile from "./EditProfile"
import axios from 'axios'
import EditProfileButton from './EditProfileButton'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: '',
                username: '',
                email: '',
                img: '',
                display: false
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

    render() {
        const user = this.state.user
        return (
            <div className="user">
                <div id='profilecontainer'>
                    <h3>Profile</h3>
                    <div id='profilebox'>
                        <div className='profile'>
                            <img src={user.img}/>
                            <div className='profileinfo'>
                                <p>{user.name}</p>
                                <p>{user.email}</p>
                                <p>{user.username}</p>
                            </div>
                            <div className='profileedit'>
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
                </div>
            </div>
        )
    }
}

export default Profile