// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light'); // weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode ('dark') 
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils - Dark jijkjjd Mode';
      // }, 1000);
      // setInterval(() => {
      //   document.title = 'TextUtils - light jijkjjd Mode';
      // }, 1000);
    }else{
      setMode ('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode';
    }
    
  }

  return (
    <>
      <Navbar title= "TextUtils" aboutText = "about TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      <TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode = {mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
