import { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

export default function ProfileForm({ user, editingProfile, onClose }) {
  const [formData, setFormData] = useState({ name: '', age: '', notes: '' });

  useEffect(() => {
    if (editingProfile) {
      setFormData({
        name: editingProfile.name,
        age: editingProfile.age,
        notes: editingProfile.notes || ''
      });
    }
  }, [editingProfile]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      window.alert("Please log in first");
      return;
    }
    const profilesRef = collection(db, 'users', user.uid, 'profiles');

    try {
      if (editingProfile) {
        const docRef = doc(profilesRef, editingProfile.id);
        await updateDoc(docRef, {
          ...formData,
          age: Number(formData.age)
        });
        //window.alert('Profile updated successfully!');
      } else {
        await addDoc(profilesRef, {
          ...formData,
          age: Number(formData.age),
          createdAt: new Date()
        });
        //window.alert('Profile created successfully!');
      }

      onClose();
    } catch (err) {
      console.error(err);
      window.alert('Failed to save profile. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '1em', marginTop: '1em' }}>
      <label>
        Name:
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Notes:
        <textarea name="notes" value={formData.notes} onChange={handleChange} />
      </label>
      <br />

      <button type="submit">{editingProfile ? 'Update' : 'Create'}</button>
      <button type="button" onClick={onClose} style={{ marginLeft: '0.5em' }}>Cancel</button>
    </form>
  );
}
