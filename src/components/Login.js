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
                <Particles
        params={{
            fpsLimit: 60,
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "images/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 20,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10
        }
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 100,
        duration: 2,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  backgroundMask: {
    enable: true,
    cover: {
      value: {
        r: 255,
        g: 255,
        b: 255
      }
    }
  },
  retina_detect: true,
    position: "cover"
  }
}
           
      />
            </div>
        )
    }
   
}

export default Login
