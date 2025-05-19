import { useState, useEffect } from 'react';
import {
  getAuth,
  updateProfile,
  updatePassword,
  deleteUser,
  reauthenticateWithCredential,
  EmailAuthProvider
} from 'firebase/auth';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles/settings.css';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
  const auth = getAuth();
  const user = auth.currentUser;

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState(user?.email || '');
  const [newPassword, setNewPassword] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setDisplayName(data.name || '');
      }
    };
    fetchData();
  }, [user]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    if (!user) return;
    try {
      await updateProfile(user, { displayName });
      await updateDoc(doc(db, 'users', user.uid), { name: displayName });
      setStatus('Profile updated successfully!');
    } catch (err) {
      console.error(err);
      setStatus('Error updating profile.');
    }
  };

  const handleChangePassword = async () => {
    if (!newPassword || newPassword.length < 6) {
      return setStatus('Password must be at least 6 characters.');
    }

    try {
      await updatePassword(user, newPassword);
      setNewPassword('');
      setStatus('Password changed successfully!');
    } catch (err) {
      console.error(err);
      setStatus('Failed to change password. You may need to re-login.');
    }
  };

  const handleDeleteAccount = async () => {
    if (!confirmDelete) {
      return setStatus('Please check the box to confirm account deletion.');
    }

    try {
      await deleteUser(user);
      setStatus('Account deleted.');
    } catch (err) {
      console.error(err);
      setStatus('Failed to delete account. You may need to re-login.');
    }
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <div className="back-button-container">
        <button onClick={() => navigate('/dashboard')}>← Back to Dashboard</button>
      </div>


      <form onSubmit={handleProfileUpdate} className="settings-form">
      <label>
        Full Name:
        <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Enter your full name"
            required
        />
      </label>

        <label>
          Email (read-only):
          <input type="email" value={email} disabled />
        </label>

        <button type="submit">Save Changes</button>
      </form>

      <div className="settings-form">
        <label>
          New Password:
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleChangePassword}>
          Change Password
        </button>
      </div>

      <div className="settings-form danger-zone">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={confirmDelete}
            onChange={(e) => setConfirmDelete(e.target.checked)}
          />
          I understand this action is irreversible.
        </label>
        <button type="button" className="delete-btn" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>

      {status && <p className="status-msg">{status}</p>}
    </div>
  );
}
