import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const setAlertMessage = (message, type) => {
    setAlert({
      alertMessage: message,
      alertType: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {  
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';

      setAlertMessage('Dark mode has been enabled!', 'success')

    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Router>

        <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={
              <About mode={mode} />
            } />

            <Route exact path="/" element={
              <TextForm heading="Enter text to analyze below" mode={mode} />
            } />
            
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
