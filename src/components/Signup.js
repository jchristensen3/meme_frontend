import React, { Component } from "react"
import axios from "axios"

class Signup extends Component {
    constructor() {
        super()

        this.state = {
            data: {
                name:"",
                email:"",
                username:"",
                password:"",
            }
        }
    }

    handleOnChange = (event) => {
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/auth/signup", this.state.data)
        .then(resp => {
            // console.log(resp)
            this.props.history.push(`/profile/${resp.data.user.id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        // console.log(this.state.data)
        return (
            <div className="user signup">
                <div className="container">
                    <div id="signup">
                        <h2>Sign Up</h2>
                        <form onSubmit={this.handleSubmit}>
                        <div className='userinfo'>
                                <label for="name">Name: </label>
                                <input onChange={this.handleOnChange} type='text' name='name' placeholder='enter your name' />
                            </div>
                            <div className='userinfo'> 
                                <label for="email">Email: </label>
                                <input onChange={this.handleOnChange} type='email' name='email' placeholder='enter your email address' />
                            </div>
                            <div className='userinfo'>
                                <label for="username">Username: </label>
                                <input onChange={this.handleOnChange} type='text' name='username' placeholder='create username' />
                            </div>
                            <div className='userinfo'>
                                <label for="password">Password: </label>
                                <input onChange={this.handleOnChange} type='password' name='password' placeholder='create password' />
                            </div>
                            <input className='formbtn' type='submit' value='Sign Up'/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup