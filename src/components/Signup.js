import React, { Component } from "react"
import axios from "axios"
import Particles from 'react-particles-js';

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
                <Particles
            className="particles-space"
      params={{
        particles: {
        number: {
            value: 400
        },
        color: {
    value: "#7f8685",
            animation: {
                enable: true,
                speed: 50,
                sync: false
            }
        },
        shape: {
            type: "circle",
        },
        size: {
            value: 10,
            random: true,
            animation: {
                enable: true,
                speed: 16,
                minimumValue: 0.1,
                sync: false
            }
        },
        "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.001,
        "opacity": 1,
        "color": {
          "value": "#f10814"
        }
      },
      "particles": {
        "enable": true,
        "frequency": 0.01,
        "opacity": 1,
        "color": {
          "value": "random"
        }
      }
    },
        links: {
            enable: true,
            distance: 100,
            color: "#050505",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
        },
    },
    
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "repulse"
            },
            onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    
        }
    },
        modes: {
            grab: {
                distance: 400,
                links: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8
            },
            repulse: {
                distance: 100
            },
            push: {
                quantity: 4
            },
            remove: {
                quantity: 2
            }
        },
    
    detectRetina: true,
}
      }     
      />
                    <div id="signup">
                        
                        <form onSubmit={this.handleSubmit}>
                        <h1>Sign Up</h1>
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
                            <input className='frmbtn' type='submit' value='Sign Up'/>
                        </form>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Signup