import React from 'react';
import { Routes, Route, Link, useResolvedPath, useMatch } from 'react-router-dom';
import SudokuGame from './SudokuGame';
import SudokuSolver from './SudokuSolver';

function CustomLink({ to, children, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: false });

  return (
    <Link
      style={{ color: match ? 'red' : 'blue' }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

function Sudoku() {
  return (
    <div>
      <h1>Sudoku Module</h1>
      <nav>
        <CustomLink to="/sudoku/game">Play Game</CustomLink> | <CustomLink to="/sudoku/solver">Solver</CustomLink>
      </nav>
      <Routes>
        <Route path="game" element={<SudokuGame />} />
        <Route path="solver" element={<SudokuSolver />} />
      </Routes>
    </div>
  );
}

export default Sudoku;
