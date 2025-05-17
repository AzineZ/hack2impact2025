import { useEffect } from 'react';
import { setDoc, getDoc, doc } from 'firebase/firestore';
import { db } from './firebase';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Login</Link> |{" "}
        <Link to="/about">Dashboard</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
