import React from 'react';
import GifSearch from './GifSearch'
import GifList from './GifList';
import request from 'superagent';
import GifModal from './GifModal';
import {Link} from 'react-router-dom'

class Gif extends React.Component {
    constructor() {
        super();

        this.state = {
            gifs: [],
            selectedGif: null,
            modalIsOpen: false
        };
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    openModal(gif) {
        this.setState({
            modalIsOpen: true,
            selectedGif: gif
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            selectedGif: null
        });
    }
    handleTermChange = (term) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=yM1hK1zvG5X7t13h8BmSWtPSSruj21Nh&q=&limit=25&offset=0&rating=g&lang=en`;

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        });
      };
    render() {
      return (
        <div>
                <Link to='/meme'>
                    <button>
                        Click Here to Create a Meme!
                    </button>
                </Link><Link to='/profile/:id'>Profile Page</Link>
          <GifSearch onTermChange={term => this.handleTermChange(term)}/>
          <GifList  gifs={this.state.gifs}
                  onGifSelect={selectedGif => this.openModal(selectedGif) } />
          <GifModal modalIsOpen={this.state.modalIsOpen}
                          selectedGif={this.state.selectedGif}
                          onRequestClose={ () => this.closeModal() } />
        </div>
      );
    }
  }

  export default Gif