import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm';
import useAuth from '../hooks/useAuth';

export default function Login() {
    const navigate = useNavigate();
    const { user, isVerified } = useAuth();

    useEffect(() => {
        if (user && isVerified) {
            navigate('/dashboard');
        }
    }, [user, isVerified, navigate]);
    return <AuthForm onAuthSuccess={() => navigate('/dashboard')} />;
}