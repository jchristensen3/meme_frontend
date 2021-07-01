import {Route} from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import Login from  './components/Login';
import Signup from  './components/Signup';
import Profile from  './components/Profile';
import Header from  './components/Header';
import Footer from  './components/Footer';
import Home from  './components/Home';


class App extends Component {
  constructor() {
    super()
    this.state = {
        meme: ''
    }
}

  componentDidMount = () => {
      axios.get('https://api.imgflip.com/get_memes')
      .then(resp => {
          this.setState({
              meme: resp.data.memes,
          })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route path='/' exact render={() => <Home meme={this.state.meme} />}/>
          <Route path='/login' render={(props) => <Login {...props} />} />
          <Route path='/signup' render={(props) => <Signup {...props}/>} />
          <Route path='/profile/:id' render={(props) => <Profile {...props} />} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
