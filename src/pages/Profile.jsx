import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase';
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc
} from 'firebase/firestore';
import ProfileForm from '../components/ProfileForm';
import ProfileList from '../components/ProfileList';
import AutismForm from '../components/AutismForm';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;

  const [profiles, setProfiles] = useState([]);
  const [editingProfile, setEditingProfile] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [screeningProfile, setScreeningProfile] = useState(null);
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  useEffect(() => {
    if (!user) return;
    const ref = collection(db, 'users', user.uid, 'profiles');

    const unsub = onSnapshot(ref, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setProfiles(items);
    });

    return () => unsub();
  }, [user]);

  const handleDelete = async (id) => {
    if (!user) return;
    await deleteDoc(doc(db, 'users', user.uid, 'profiles', id));
    window.alert('Profile deleted successfully.');
  };

  return (
    <div>
      <h2>Manage Child Profiles</h2>
      <button onClick={() => {
        setEditingProfile(null);
        setFormVisible(true);
      }}>
        + Add New Child
      </button>

      <button onClick={handleBackToDashboard}>
        ← Back to Dashboard
      </button>

      {formVisible && (
        <ProfileForm
          user={user}
          onClose={() => setFormVisible(false)}
          editingProfile={editingProfile}
        />
      )}

      <ProfileList
        profiles={profiles}
        onEdit={(profile) => {
          setEditingProfile(profile);
          setFormVisible(true);
        }}
        onDelete={handleDelete}
        onScreen={(profile) => {
          setScreeningProfile(profile);
          setFormVisible(false);
        }}
      />

      {screeningProfile && (
        <AutismForm
          profile={screeningProfile}
          user={user}
          onClose={() => setScreeningProfile(null)}
        />)}
    </div>
  );
}
