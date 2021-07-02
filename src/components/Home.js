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
                <h3>Welcome! Log In or Sign Up to have some fun...</h3>
                <div className="home-container">
                    <div className='home-btn'>
                 
                    </div>
                </div>
            </div>
        )
    }
}

export default Home 