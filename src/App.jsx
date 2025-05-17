import { useEffect } from 'react';
import { setDoc, getDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

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
    <div>
      <h1>Firebase Test</h1>
      <p>Check the console to see if it worked.</p>
    </div>
  );
}

export default App
