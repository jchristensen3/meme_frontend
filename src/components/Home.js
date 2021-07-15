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
                <h1>
                <img src="https://i.gifer.com/origin/f9/f90fc85cf18e351c565692dcb1c0feeb_w200.webp" alt="grumpy"></img>
                WELCOME!
                <img src="https://i.gifer.com/origin/27/27adc3f9fb1a7204dc1ba1b46e7fd490_w200.webp" alt="grumpy1"></img>
                </h1>
                <h2>CREATE a MEME! or find your favorite GIF!</h2>
                <h3><Link to='/login'>Log In</Link> or <Link to='/signup'>Sign Up</Link> to have some FUN....</h3>
                <div id="home1">
                <img src="https://i.gifer.com/origin/23/23ca294b4b575ccd53ce8cca4da057ab_w200.webp" alt="firework"></img>
                <img src="https://i.gifer.com/origin/31/31a27926c57df380d818c625323ca69e_w200.webp" alt="diamond"></img>
                <img src="https://i.gifer.com/origin/c7/c794afdf73920930403b75d437771c46_w200.webp" alt="fan"></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVia5m7ylcaxCIJesjxQiNkSXIr9rSzP6Ukw&usqp=CAU" alt="meme"></img>
                <img src="https://i.gifer.com/origin/e4/e4ea520e58f46033bf97d92c3e7e7609_w200.webp" alt="robo"></img>
                <img src="https://i.gifer.com/origin/55/554b26362e141b9a75bd06e71e4ef81a_w200.webp" alt="jim"></img>
                <img src="https://i.gifer.com/origin/4f/4f9eb611731ab90d0e90bbe1dc8366c6_w200.webp" alt="dino"></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkLivYpsIEbQjc13T9NyY_xfc2zE2B2QAs-Q&usqp=CAU" alt="meme"></img>
                <img src="https://i.gifer.com/origin/92/9201ca103be3621c2b032f2151ff210e_w200.webp" alt="sparkle"></img>
                <img src="https://i.gifer.com/origin/41/41d9317a7033e5e2deedb76ab6f33c67_w200.webp" alt="ball"></img>
                <img src="https://i.gifer.com/origin/50/50347fde886fe642db75a57dfa547187_w200.webp" alt="eyes"></img>
                <img src="https://i.gifer.com/origin/64/646743060616e23f4275f043aaca79cc_w200.webp" alt="bones"></img>
                <img src="https://i.gifer.com/origin/c1/c1e24d218a79bfdd33ea098128af6ebd_w200.webp" alt="devil"></img>
                <img src="https://i.gifer.com/origin/0f/0fd379b81bc8023064986c9c45f22253_w200.webp" alt="3d"></img>
                <img src="https://i.gifer.com/origin/55/5563c2831bb61afc9b14e634a425c975_w200.webp" alt="cat"></img>
                <img src="https://i.gifer.com/origin/be/bec8e2ed103b43eeb6ffd9b9ae6ac75d_w200.webp" alt="jumpgirl"></img>
                <img src="https://i.gifer.com/origin/db/db0196c3e460fa5e41a5487294b807a6_w200.webp" alt="panic"></img>
                <img src="https://i.gifer.com/origin/9c/9cbfeae85182f1c0b9b4c8b1ce93dbe0_w200.webp" alt="panic"></img>
                <img src="https://i.gifer.com/origin/47/47cd600584989a9ec1faa7190f08fde6_w200.webp" alt="pony"></img>
                <img src="https://i.gifer.com/origin/2d/2d7fae306c64de670d9c8cbe3f4801b3_w200.webp" alt="panic"></img>
                <img src="https://i.gifer.com/origin/24/2432cf5ff737ad7d1794a29d042eb02e_w200.webp" alt="panic"></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HyGoBdwM_CYB2F20uM4sEPI0AH-st6eAEA&usqp=CAU" alt="panic"></img>
                <img src="https://i.gifer.com/origin/4f/4f766dccc16a6f660cb76e109a72c532_w200.webp" alt="panic"></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFh4tGIDHFs7-VUl4xgQ7jXBDuPc-lbcGgfA&usqp=CAU" alt="panic"></img>
                <img src="https://i.gifer.com/origin/df/dfb66263e5e6ec35d1239b66650b4de8_w200.webp" alt="panic"></img>
                <img src="https://i.gifer.com/origin/2e/2ea1c604e517b8f7721b42eb7686405b_w200.webp" alt="phone"></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOBOlNl1DMI6AYQ6TQwrCJgvGYN3h3oiQMQ&usqp=CAU" alt="meme"></img>
                <img src="https://i.gifer.com/origin/42/42b028df971ef81eeb0b97409bb7b7c4_w200.webp" alt="love"></img>
                </div>

        
        </div> 



         
        )
    }
}

export default Home 