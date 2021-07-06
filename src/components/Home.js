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
                <h1>WELCOME! </h1>
                <h2>CREATE a MEME! or find your favorite GIF!</h2>
                <h3><Link to='/login'>Log In</Link> or <Link to='/signup'>Sign Up</Link> to have some FUN....</h3>
        </div>
        )
    }
}

export default Home 