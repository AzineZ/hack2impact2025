import { useState, useEffect } from 'react';
import { setDoc, getDoc, doc } from 'firebase/firestore';
import AuthForm from './AuthForm';
import useAuth from './hooks/useAuth'
import { db } from './firebase';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

import './App.css'

function App() {
  useEffect(() => {
    const testFirebase = async () => {
      // Write test
      await setDoc(doc(db, "testCollection", "testDoc"), {
        hello: "world"
      });

      // Read test
      const docRef = doc(db, "testCollection", "testDoc");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    testFirebase();
  }, []);

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
