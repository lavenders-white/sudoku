import React from 'react';
import { Routes, Route, Link, useResolvedPath, useMatch } from 'react-router-dom';
import MazePlay from './MazePlay';
import MazeCreate from './MazeCreate';

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

function Maze() {
  return (
    <div>
      <h1>Maze Module</h1>
      <nav>
        <CustomLink to="/maze/play">Play Maze</CustomLink> | <CustomLink to="/maze/create">Create Maze</CustomLink>
      </nav>
      <Routes>
        <Route path="play" element={<MazePlay />} />
        <Route path="create" element={<MazeCreate />} />
      </Routes>
    </div>
  );
}

export default Maze;
