import React from 'react';
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes } from 'react-router';
import { gameRoutes } from './Routes/game.routes';
import { generalRoutes } from './Routes/general.routes';

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {generalRoutes}
          {gameRoutes}
        </Routes>
      </BrowserRouter>
    </>   
  )
}

export default App
