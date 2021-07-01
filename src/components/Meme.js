// Import React (Mandatory Step).
import React from "react";
 
// MemeGenerator component to generate a meme
class Meme extends React.Component {
  state = {
    topText: "",
    bottomText: "",
    allMemeImgs: [],
    randomImg: ""
  };
 
  // componentDidMount() method to fetch
  // images from the API
  componentDidMount() {
     
    // Fetching data from the API
    fetch("https://api.imgflip.com/get_memes")
         .then(response => response.json())
         .then(content =>
           this.setState({
             allMemeImgs: content.data.memes
             
           })
         );
     }
handleChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
handleSubmit = event => {
        event.preventDefault();
        const { allMemeImgs } = this.state;
        const rand =
          allMemeImgs[Math.floor(Math.random()
          * allMemeImgs.length)].url;
        this.setState({
          randomImg: rand
        });
      };      
      render() {
        return (
          <div>
            <form className="meme-form" onSubmit={this.handleSubmit}>
              <input
                placeholder="Enter Text"
                type="text"
                value={this.state.topText}
                name="topText"
                onChange={this.handleChange}
              />
              <input
                placeholder="Enter Text"
                type="text"
                value={this.state.bottomText}
                name="bottomText"
                onChange={this.handleChange}
              />
              <button>Generate</button>
            </form>
     
            <br />
            <div className="meme">
              {this.state.randomImg === "" ? "" :
                <img src={this.state.randomImg} alt="meme" />}
              {this.state.randomImg === "" ? "" :
                <h2 className="top">{this.state.topText}</h2>}
              {this.state.randomImg === "" ? "" :
                <h2 className="bottom">{this.state.bottomText}</h2>}
            </div>
          </div>
        );
      }
    }
export default Meme