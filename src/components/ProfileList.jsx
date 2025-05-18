import { Link } from 'react-router-dom';
import '../styles/ProfileList.css';

export default function ProfileList({ profiles, onEdit, onDelete, onScreen }) {
  return (
    <div>
      <h3>Saved Profiles</h3>
      {profiles.length === 0 ? (
        <p>No profiles yet.</p>
      ) : (
        <ul className="profile-grid">
          {profiles.map((profile) => (
            <li key={profile.id} className="profile-card">
              <strong>{profile.name}</strong>
              <p>Age: {profile.age}</p>
              {profile.notes && <p><em>{profile.notes}</em></p>}

              <div className="profile-actions">
                <button onClick={() => onEdit(profile)}>Edit</button>
                <button onClick={() => onDelete(profile.id)}>Delete</button>
                <button onClick={() => onScreen(profile)}>New Screening</button>
                <Link to={`/results/${profile.id}`}>View Results</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
