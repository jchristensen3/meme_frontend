
import React from 'react';

class GifSearch extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="search">
               <input  type='text' id='placeholder' placeholder="Search GIFs!" onChange={event => this.onInputChange(event.target.value)} />
               <a href="javascript:history.back()">Profile Page</a>
        </div>
    );
  }
}

          

export default GifSearch;