// import logo from './logo.svg';
import './Appa.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router, Route, Link, Routes
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  // FUNCTION OF ALERT 
  const showAlert = (messege, type) => {
    setalert({
      msg: messege,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 4000);
  }

  // FUNCTION OF DARK MODE 
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been Enabled", "Success");
      document.title = 'TextUtils Dark Mode'
      setTimeout(() => {
        document.title = 'TextUtils'
      }, 5000);
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "Success");
      document.title = 'TextUtils Light Mode'
      setTimeout(() => {
        document.title = 'TextUtils'
      }, 5000);
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} aboutText='About' />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route path="/about" element={<About />}>
            </Route> */}
            {/* <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}> */}
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>
            {/* </Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  )
}
export default App;
