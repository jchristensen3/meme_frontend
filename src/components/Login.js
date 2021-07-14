import React, {Component} from "react"
import axios from "axios"
import Particles from 'react-particles-js';




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
            
            <div className="userlogin">
            
                <div className="container">
                    
                    <Particles
                className="particles-login"
                params={{
        particles: {
        number: {
            value: 300
        },
        color: {
            value: ["#00FFFF","#7FFF00"],
            animation: {
                enable: true,
                speed: 50,
                sync: false
            }
        },
        shape: {
            type: ["circle", "star", "edge", "polygon","triangle"],
},
polygon: {
    sides: 5
},
size: {
    value: 30,
    random: true,
    animation: {
        enable: true,
        speed: 20,
        minimumValue: 0.1,
        sync: false
    }
},
        line_linked: {
            enable: false,
            distance: 150, 
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
        "twinkle": {
      "particles": {
        "enable": true,
        "frequency": 0.0,
        "opacity": 1,
        "color": {
          "value": "#ffffff"
        }
      }
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
            square: {
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
      
                    <form onSubmit={this.handleSubmit}>
                        <div className='userinfo'>
                        <h2>Log In</h2>
                            <label for="username">Username: </label>
                            <input onChange={this.handleOnChange} type='text' name='username' placeholder='username' />
                        </div>
                        <div className='userinfo'>
                            <label for="password">Password: </label>
                            <input onChange={this.handleOnChange} type='password' name='password' placeholder='password' />
                        </div>
                        <input className='frmbtn' type='submit' value='Log In'/>
       
                    </form>
                </div>
              
            </div>
        )
    }
   
}

export default Login
