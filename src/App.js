import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage'
import Slider from "./components/Slider";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Homepage />}></Route>
        </Routes>
        <Routes>
          <Route exact path='/home' element={< Slider />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
