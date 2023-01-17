import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import Loginpage from "./components/loginpage";
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
          <Route path='/landing/login' element={< Loginpage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
