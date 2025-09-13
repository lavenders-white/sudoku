import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Game Hub</h1>
      <p>Choose a game:</p>
      <ul>
        <li><Link to="/sudoku">Sudoku</Link></li>
        <li><Link to="/maze">Maze</Link></li>
      </ul>
    </div>
  );
}

export default Home;
