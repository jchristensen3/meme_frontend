import React from "react";

function Form(props) {
  const { userText, handleTextChange, removeLastText } = props;
  return (
    <form className="text-form">
      <input
        name="userText"
        value={userText}
        onChange={handleTextChange}
        placeholder="Enter text and click on image"
      />
      <br />
      <button className="remove-txt-btn" onClick={removeLastText}>
        Remove last text
      </button>
    </form>
  );
}

export default Form;