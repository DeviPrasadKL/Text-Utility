import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import AboutUs from './Components/AboutUs';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";


function App() {
  // Dark Mode 
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#02214c';
      showAlert("success", "Dark Mode has been enabled");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("success", "Light Mode has been enabled");
    }
  }

  // Alert 
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      {/* <Navbar/> This is for Default Props */}
      <Alert alert={alert} />

      <div className="container my-3">
        <Router>
          <Navbar title="Text-Utility" about="About us" mode={mode} toggleMode={toggleMode} />
          <Routes>
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/"
              element={<TextForm heading="Enter the text in the below box" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </Router>
      </div>

    </>
  );
}

export default App;
