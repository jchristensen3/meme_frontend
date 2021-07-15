import React from "react";

function getMemeImageElements(allImages, handleImgClick) {
  let imgStyles = {
    cursor: "pointer",
    width: "150px",
    height: "150px"
  };

  let memeImages;
  if (allImages) {
    memeImages = allImages.map(image => (
      <a key={image.id} href="#top-container">
        <img
          id={image.id}
          src={image.url}
          alt={image.name}
          style={imgStyles}
          onClick={handleImgClick}
        />
      </a>
    ));

    return memeImages;
  }
  return null;
}

function Memes(props) {
  const { allImages, handleImgClick } = props;

  const memeImages = getMemeImageElements(allImages, handleImgClick);

  return (
    <div id="meme-container">
      <h2>Memes</h2>
      <div className="meme">{memeImages}</div>
    </div>
  );
}

export default Memes;