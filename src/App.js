import {Route} from 'react-router-dom'
import React, { Component } from 'react'
import './App.css';
import Login from  './components/Login';
import Signup from  './components/Signup';
import Profile from  './components/Profile';
import Header from  './components/Header';
import Footer from  './components/Footer';
import Home from  './components/Home';
import Meme from './components/Meme';


class App extends Component {
  constructor() {
    super()
    this.state = {
    }
}

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route path='/' exact render={() => <Home />}/>
          <Route path='/login' render={(props) => <Login {...props} />} />
          <Route path='/signup' render={(props) => <Signup {...props}/>} />
          <Route path='/meme' render={(props) => <Meme {...props}/>} />
          <Route path='/profile/:id' render={(props) => <Profile {...props} />} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
