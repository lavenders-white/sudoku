import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sudoku from './sudoku/Sudoku';
import Maze from './maze/Maze';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sudoku/*" element={<Sudoku />} />
          <Route path="/maze/*" element={<Maze />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
