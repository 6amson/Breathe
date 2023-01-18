import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import Loginpage from "./components/Loginpage";
import Signuppage from "./components/Signuppage";
import Slider from "./components/Slider";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Slider />}></Route>
        </Routes>
        <Routes>
          <Route path='/landing' element={< Homepage />}></Route>
        </Routes>
        <Routes>
          <Route path='/signup' element={< Signuppage />}></Route>
        </Routes>
        <Routes>
          <Route path='/login' element={< Loginpage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
