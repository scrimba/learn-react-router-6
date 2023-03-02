import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes } from "react-router-dom"

function App() {
  return (
    <h1>Hello, React Router!</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      
    </Routes>
  </BrowserRouter>
);