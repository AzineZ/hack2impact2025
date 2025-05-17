import { useState } from "react";
import useAuth from "./hooks/useAuth";

export default function AuthForm({ onAuthSuccess }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true); // Toggle between login/signup
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const { signUp, logIn, resetPassword } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            if (showForgotPassword) {
                await resetPassword(email);
                setMessage("Password reset email sent if account exists");
                setShowForgotPassword(false);
            } else if (isLogin) {
                await logIn(email, password);
                setMessage("Logged in successfully");
                onAuthSuccess();
            } else {
                await signUp(email, password);
                setMessage("Account created! Check your email for verification, then Log In");
            }
        } catch (err) {
            setError(err.message.replace("Firebase: ", ""));
        }
    };

    const handleResetPassword = async () => {
        if (!email) {
            setError("Please enter your email first");
            return;
        }
        try {
            await resetPassword(email);
            setMessage("Password reset email sent if account exists");
            setShowForgotPassword(false);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-container">
            <h2>
                {showForgotPassword 
                    ? "Reset Password" 
                    : isLogin 
                    ? "Login" 
                    : "Sign Up"}
            </h2>
            {error && <p className="error">{error}</p>}
            {message && <p className="success">{message}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {!showForgotPassword && (
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                )}
                <button type="submit">
                    {showForgotPassword 
                        ? "Send Reset Email"
                        : isLogin 
                        ? "Login" 
                        : "Sign Up"}
                </button>
            </form>
            <div className="auth-actions">
                {!showForgotPassword ? (
                    <>
                        <button
                            type="button"
                            onClick={() => setIsLogin(!isLogin)}
                            className="toggle-btn"
                        >
                            {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
                        </button>
                        {isLogin && (
                            <button
                                type="button"
                                onClick={() => setShowForgotPassword(true)}
                                className="reset-btn"
                            >
                                Forgot Password?
                            </button>
                        )}
                    </>
                ) : (
                    <button
                        type="button"
                        onClick={() => setShowForgotPassword(false)}
                        className="back-btn"
                    >
                        Back to Login
                    </button>
                )}
            </div>
        </div>
    );
};


