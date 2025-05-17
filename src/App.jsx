import { useState, useEffect } from 'react';
import { setDoc, getDoc, doc } from 'firebase/firestore';
import AuthForm from './AuthForm';
import useAuth from './hooks/useAuth'
import { db } from './firebase';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile'
import Results from './pages/Result';

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/results/:profileId" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
