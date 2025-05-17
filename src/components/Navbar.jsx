import { Link } from 'react-router-dom';
import useAdminStatus from '../hooks/useAdminStatus';

export default function Navbar() {
  const { isAdmin, loading } = useAdminStatus();
  return (
    <nav>
      <Link to="/">Login</Link> | 
      <Link to="/profile">Profile</Link> | 
      <Link to ="/WhatIsAutism">What Is Autism</Link> | 
      <Link to="/dashboard">Dashboard</Link> | 
      {!loading && isAdmin && <Link to="/admin">Admin</Link>}
    </nav>
    
  );
}
