import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAdminStatus from '../hooks/useAdminStatus';
import AccessDenied from './AccessDenied';

export default function AdminRoute({ children }) {
  const { isAdmin, loading } = useAdminStatus();
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: redirect unauthenticated users
    if (!loading && isAdmin === null) {
      navigate('/');
    }
  }, [loading, isAdmin, navigate]);

  return isAdmin ? children : <AccessDenied />;
}
