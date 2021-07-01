import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            meme: '',
            display: false
        }
    }

   
    render(){
        return (
            <div id="home">
                <h3>Welcome!</h3>
                <div className="home-container">
                    <div className='home-meme'>
                        <p>{this.state.meme}</p>
                    </div>
                    <div className='home-btn'>
                        <Link to='/memes'>
                            <button>
                                Click for more Memes
                            </button>
                        </Link>
                 
                    </div>
                </div>
            </div>
        )
    }
}

export default Home 