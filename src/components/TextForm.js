import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Upper case clicked' + text);
        let newText  = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        // console.log('Upper case clicked' + text);
        let newText  = text.toLowerCase();
        setText(newText);
    }
    const handleClear = () => {
        let newText  = '';
        setText(newText);
    }
    const handleSpace = () => {

        let newText  = text.charAt(0).toUpperCase()+text.slice(1).toLowerCase()
      // let newText = text.replace(/\w\S*/g + cap)
          // console.log(cap,newText)

        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log('Upper case clicked');
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
    //   text = "new text" // Wrong way to change the state
        // setText("new text") // correct way to change the state
  return (
  <>
    <div className = "container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value = {text}
          onChange = {handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary m-3" onClick = {handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary m-3" onClick = {handleLowClick}>Convert to lowercase</button>
      <button className="btn btn-primary m-3" onClick = {handleClear}>Clear Text</button>
      <button className="btn btn-primary m-3" onClick = {handleSpace}>Sentence Case</button>
      
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
