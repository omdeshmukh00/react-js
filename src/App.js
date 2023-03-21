// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
 
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      // document.body.textarea.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.body.style.transition = '0.8s';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Textutils is amazing mode';
        
      // }, 2000);
      
      // setInterval(() => {
      //   document.title = 'Install Textutils now';
        
      // }, 1500);
      
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.body.textarea.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.body.style.transition = '0.8s';
      document.title = 'Textutils - Light Mode';
}
}
  return (
    <>
    {/* <Navbar  title="TextUtils" mode={mode} toggleMode={toggleMode} /> 
    <Alert alert={alert} />
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below." mode={mode} />
    <About /> */}

<Router>
<Navbar  title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below." mode={mode} />} />
          <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below." />} />
        </Routes>
      </div>
   </Router>



    </>
  );
}

export default App;
