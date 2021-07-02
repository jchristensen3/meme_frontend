import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Home extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            display: false
        }
    }

handleClick = (event) => {
    event.preventDefault();
    this.setState({
        display: !this.state.display})
}
   
    render(){
        
        return (
            <div id="home">
                <h3>Welcome!</h3>
                <div className="home-container">
                    <div className='home-btn'>
                        <Link to='/login'>
                            <button>
                                Click Here to Create a Meme!
                            </button>
                        </Link>
                 
                    </div>
                </div>
            </div>
        )
    }
}

export default Home 