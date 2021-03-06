import React from "react";

function CurrentImage({ currentImage, addTextToCanvas }) {
  const { src, alt } = currentImage;

  return (
    <div className="current-image" id="current-image">
      {!src ? (
        <h2>
          <span>
            "Click &#10148; {" "}
            <a href="#meme-container">Memes </a> to select an image from below."
          </span>
        </h2>
      ) : (
        <div>
          <h2>
            Current Image: <em>{alt}</em>
          </h2>
          <p>
            Right click on Image and select <strong>
              "Save image as..."
            </strong>{" "}
            to Save Meme.
          </p>
        </div>
      )}

      <div className="img-canvas">
        <canvas
          id="imageCanvas"
          width={16 * 50}
          height={16 * 50}
          onClick={addTextToCanvas}
        >
          The Canvas element is not supported in your browser.
        </canvas>
      </div>
    </div>
  );
}

export default CurrentImage;
