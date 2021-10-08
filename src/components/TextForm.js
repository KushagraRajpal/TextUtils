import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  }
  const handleClear = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  }
  const handleSentence = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    props.showAlert("Switched to sentence Case", "success");
    setText(newText);
  }
  const handleCapitalize = () => {
    let words = text.split(' ')
    let capitalizedWords = [];
    words.forEach(element => {
      capitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
      let newText = capitalizedWords.join(' ');
      props.showAlert('switched to capitalise state', 'success')
      setText(newText)
    })
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied to clipboard", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Space addjusted", "success");
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            style={{ backgroundColor: props.mode === 'dark' ? "black" : "white", color: props.mode === 'dark' ? "white" : "black" }}
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleLowClick}>Convert to lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleSentence}>Sentence Case</button>
        <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleCapitalize}>Capitatise Case</button>
        <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleCopy}>Copy to Clipboard</button>
        <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Space</button>

      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? "white" : "black" }}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>You will read this in {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
      </div>
    </>
  );
}
