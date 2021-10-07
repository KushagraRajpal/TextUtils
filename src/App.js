// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Alert from "./components/Alert";
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  // Link 
  } from 'react-router-dom'


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
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add(`bg-${cls}`)
    if(mode === 'light'){
      setMode ('dark') 
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'TextUtils - Dark Mode';
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
      // document.title = 'TextUtils - Light Mode';
    }
    
  }

  return (
    <>
        <Router>
      <Navbar title= "TextUtils" aboutText = "About Us" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      <Switch>
      <Route exact path="/">
      <TextForm showAlert = {showAlert} heading = "TextUtils - Word Counter, Character Counter, Remove Extra Spaces " mode = {mode}/>
        </Route> 
        <Route  exact path="/about">
          <About  mode ={mode}/>        
        </Route>
      </Switch>
      </div>
       </Router> 
    </>
  );
}

export default App;
