import React, { Component } from "react";
import Form from "./Form";
import CurrentImage from "./CurrentImage";
import Memes from "./Memes";

class MyMeme extends Component {
  state = {
    userText: "",
    allImages: [],
    currentImage: "",
    allEdits: []
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(output => {
        this.setState({
          allImages: output.data.memes
        });
      })
      .catch(err => console.log(err));
  }

  onSaveMeme = e => {
    e.preventDefault();

    const canv = document.getElementById("imageCanvas");

    const image = canv
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    window.location.href = image;
  };

  handleTextChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  calculateAspectRatio = function(image) {
    let canvas = document.getElementById("imageCanvas");

    let imageAspectRatio = image.width / image.height;
    let canvasAspectRatio = canvas.width / canvas.height;
    let renderableHeight, renderableWidth, xStart, yStart;
    let AspectRatio = {};

    if (imageAspectRatio < canvasAspectRatio) {
      renderableHeight = canvas.height;
      renderableWidth = image.width * (renderableHeight / image.height);
      xStart = (canvas.width - renderableWidth) / 2;
      yStart = 0;
    }

    else if (imageAspectRatio > canvasAspectRatio) {
      renderableWidth = canvas.width;
      renderableHeight = image.height * (renderableWidth / image.width);
      xStart = 0;
      yStart = (canvas.width - renderableHeight) / 2;
    }

    else {
      renderableHeight = canvas.height;
      renderableWidth = canvas.width;
      xStart = 0;
      yStart = 0;
    }
    AspectRatio.renderableHeight = renderableHeight;
    AspectRatio.renderableWidth = renderableWidth;
    AspectRatio.startX = xStart;
    AspectRatio.startY = yStart;
    return AspectRatio;
  };

  loadImageInCanvas = event => {
    const canvas = document.getElementById("imageCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = event ? event.target.src : this.state.currentImage.src;
    img.crossOrigin = "Anonymous";
    img.addEventListener("load", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let AR = this.calculateAspectRatio(img);
      ctx.drawImage(
        img,
        AR.startX,
        AR.startY,
        AR.renderableWidth,
        AR.renderableHeight
      );
    });
  };

  handleImgClick = e => {
    this.setState({ currentImage: e.target });

    this.loadImageInCanvas(e);
  };

  getMousePos(canvas, e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  handleText(e) {
    const canv = e.target;

    const ctx = canv.getContext("2d");
    const pos = this.getMousePos(canv, e);

    ctx.font = "800 40px Impact, Arial";
    ctx.fillStyle = "#433487";
    ctx.fillText(this.state.userText, pos.x, pos.y);

    this.setState(ps => {
      ps.allEdits.push({
        posX: pos.x,
        posY: pos.y,
        text: this.state.userText
      });
      return ps;
    });
  }

  addTextToCanvas = e => {
    e.preventDefault();
    this.handleText(e);
    this.setState({ userText: "" });
  };

  removeLastText = e => {
    e.preventDefault();
    const canv = document.getElementById("imageCanvas");
    const ctx = canv.getContext("2d");

    this.setState(ps => {
      ps.allEdits.pop();
      return ps;
    });
    this.loadImageInCanvas(false);

    setTimeout(() => {
      ctx.font = "800 40px Impact, Arial";
      ctx.fillStyle = "#433487";
      this.state.allEdits.forEach(edit => {
        ctx.fillText(edit.text, edit.posX, edit.posY);
      });
    }, 200);
  };

  render() {
    return (
      <div className="meme-generator">
        <div className="top-container" id="top-container">
          <Form
            removeLastText={this.removeLastText}
            userText={this.state.userText}
            handleTextChange={this.handleTextChange}
            onSaveMeme={this.onSaveMeme}
          />

          <CurrentImage
            currentImage={this.state.currentImage}
            addTextToCanvas={this.addTextToCanvas}
          />
        </div>
        <hr />

        <Memes
          allImages={this.state.allImages}
          handleImgClick={this.handleImgClick}
        />
      </div>
    );
  }
}

export default MyMeme;