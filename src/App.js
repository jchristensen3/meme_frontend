import './App.css';
import { Route } from "react-router-dom";
import React, { Component } from 'react';
import Header from  './components/Header';
import Footer from  './components/Footer';
import Home from  './components/Home';
import Login from  './components/Login';
import Signup from  './components/Signup';
import Profile from  './components/Profile';
import Meme from  './components/Meme';
import Gif from  './components/Gif';









class App extends Component {
  constructor() {
    super()
    this.state = {
    }
}

  render() {
    return (
    
      <div className="my-reset">
        <Header />
        <main>
        
          <Route path='/' exact render={() => <Home />}/>
          <Route path='/login' render={(props) => <Login {...props} />} />
          <Route path='/signup' render={(props) => <Signup {...props}/>} />
          <Route path='/meme' render={(props) => <Meme {...props}/>} />
          <Route path='/profile/:id' render={(props) => <Profile {...props} />} />
          <Route path='/gif' render={(props) => <Gif {...props}/>} />
          
        </main>
       
        <Footer />
        
      </div>
      
        
        
   
    );
  }
}

export default App;
