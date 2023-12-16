// import logo from './logo.svg';
import './Appa.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import React, { useState } from 'react'
// import Alert from './Components/Alert';

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
const removebg=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-white')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-danger')
}

  const togglemode = (cls) => {
    removebg();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#343a40';
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
      <Navbar title="TextOps" mode={mode} togglemode={togglemode} aboutText='About' />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="TextUtils - Wod Counter, Chracter Counter, Remove extra spaces" mode={mode} />
      </div>
      <About mode={mode} />
      {/* <Routes> */}
      {/* <Route path="/about"> */}
      {/* </Route> */}
      {/* <Route path="/"> */}
      {/* </Route> */}
      {/* </Routes> */}
      {/* </Router> */}
    </>
  )
}
export default App;
