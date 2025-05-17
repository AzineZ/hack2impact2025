import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm';
import useAuth from '../hooks/useAuth';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function Login() {
  const navigate = useNavigate();
  const { user, isVerified } = useAuth();

  useEffect(() => {
    if (user && isVerified) {
      navigate('/dashboard');
    }
  }, [user, isVerified, navigate]);

  const handleAuthSuccess = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const userRef = doc(db, 'users', user.uid);

    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      await setDoc(userRef, {
        email: user.email,
        createdAt: new Date(),
        isAdmin: false,
      });
    }

    navigate('/dashboard');
  };

  return <AuthForm onAuthSuccess={handleAuthSuccess} />;
}
