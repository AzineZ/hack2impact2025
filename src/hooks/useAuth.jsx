import { useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    onAuthStateChanged,
    sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../firebase';

export default function useAuth() {
    const [user, setUser] = useState(null);
    const [isVerified, setIsVerified] = useState(false);
    const [loading, setLoading] = useState(true);

    // Handle auth state changes
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                await currentUser.reload(); // Refresh user data
                setUser(currentUser);
                setIsVerified(currentUser.emailVerified);
            } else {
                setUser(null);
                setIsVerified(false);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // Email/password signup
    const signUp = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(userCredential.user);
            return userCredential;
        } catch (error) {
            throw error;
        }
    };

    // Email/password login
    const logIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            if (!userCredential.user.emailVerified) {
                await signOut(auth);
                throw new Error('Please verify your email first');
            }
            return userCredential;
        } catch (error) {
            let errorMessage;
            switch (error.code) {
                case 'auth/invalid-credential':
                    errorMessage = 'Invalid email or password';
                    break;
                case 'auth/user-not-found':
                    errorMessage = 'No account found with this email';
                    break;
                default:
                    errorMessage = error.message.replace('Firebase: ', '');
            }
            throw new Error(errorMessage)
        }
    };

    // Reset password
    const resetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            throw error;
        }
    };

    // Logout
    const logOut = async () => {
        await signOut(auth);
    };

    return {
        user,
        isVerified,
        loading,
        signUp,
        logIn,
        logOut,
        resetPassword,
    };
}