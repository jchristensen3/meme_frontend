import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <nav class="stroke">
                <ul>
                     <li><Link to='/'>Home</Link></li>
                     <li><Link to='/signup'>Sign Up</Link></li>
                    <li><Link to='/login'>Log In</Link></li>
                    <li><Link to='/'>Logout</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header