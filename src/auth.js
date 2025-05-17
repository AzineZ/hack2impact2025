import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    onAuthStateChanged,
    sendEmailVerification,
} from "firebase/auth"
import { auth } from "./firebase";

// Sign up with email/password
export const signUp = async (email, password) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(
            auth, email, password
        );

        await sendEmailVerification(userCredential.user);

        return userCredential;
    } catch (error) {
        throw error;
    }
};

// Log in with email/password
export const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// Log out
export const logOut = () => {
    return signOut(auth);
};

// Password reset
export const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
};

// Subscribe to auth state changes
export const subscribeToAuthChanges = (callback) => {
    return onAuthStateChanged(auth, callback);
};