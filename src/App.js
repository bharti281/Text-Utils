import { useState } from "react";
import "./App.css";
import Navbar from "./compontes/Navbar";
import TextForm from "./compontes/TextForm";
import Alert from "./compontes/Alert";
// import About from "./compontes/About";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [text, setTextColor] = useState('dark')
  const [theme, setTheme] = useState('blue')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  const BlueMode = () => {
    setTheme('blue')
    // setMode('primary')
    setTextColor('white');
    document.body.style.backgroundColor = '#111164';
    showAlert("Blue mode has been enabled", "success")
    console.log("Blue mode on")
    console.log(text);
    console.log("theme = " + theme);
  }
  const setText = () => {
    if (theme === 'blue') {
      setTextColor('light')
    }
    else {
      setTextColor('light');
    }
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setTextColor('light');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils-DarkMode"
    }
    else {
      setMode('light')
      setTextColor('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success")
      document.title = "TextUtils-LightMode"
    }

  }
  return (

    <>
      {/* <Router> */}

        <Navbar title="TextUtils" aboutxt="About" mode={mode} toggleMode={toggleMode} BlueMode={BlueMode} text={text} theme={theme} setText={setText} />
        <Alert alert={alert} />
        {/* <Navbar/> */}
        {/* <Navbar title = "TextUtils" /> */}
        <div className="container my-3">
        <TextForm heading="Enter the Text to analyze below" mode={mode} toggleMode={toggleMode} showAlert={showAlert} text={text} BlueMode={BlueMode} theme={theme} setText={setText} />

        {/* <Routes> */}

          {/* <Route exact  path="/" element={<TextForm heading="Enter the Text to analyze below" mode={mode} toggleMode={toggleMode} showAlert={showAlert} text={text} BlueMode={BlueMode} theme={theme} setText={setText} />} /> */}
          {/* <Route exact path="/about" element={<About/>} /> */}
        {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
