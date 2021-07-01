import React, {Component} from "react"
import axios from "axios"

class Login extends Component {
    constructor() {
        super()

        this.state = {
            data: {
                username:"",
                password:""
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
        console.log('User Logging In')
        axios.post("http://localhost:3001/auth/login", this.state.data)
        .then(resp => {
            this.props.history.push(`/profile/${resp.data.user.id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="user login">
                <div className="container">
                    <h2>Log In</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className='userinfo'>
                        
                            <label for="username">Username: </label>
                            <input onChange={this.handleOnChange} type='text' name='username' placeholder='username' />
                        </div>
                        <div className='userinfo'>
                            <label for="password">Password: </label>
                            <input onChange={this.handleOnChange} type='password' name='password' placeholder='password' />
                        </div>
                        <input className='formbtn' type='submit' value='Log In'/>
                    </form>
                </div>
            </div>
        )
    }
   
}

export default Login
