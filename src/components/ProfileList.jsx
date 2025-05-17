import { Link } from 'react-router-dom';

export default function ProfileList({ profiles, onEdit, onDelete, onScreen }) {
  return (
    <div>
      <h3>Saved Profiles</h3>
      {profiles.length === 0 ? (
        <p>No profiles yet.</p>
      ) : (
        <ul>
          {profiles.map((profile) => (
            <li key={profile.id}>
              <strong>{profile.name}</strong> (age {profile.age})<br />
              <em>{profile.notes}</em>
              <br />
              <button onClick={() => onEdit(profile)}>Edit</button>
              <button onClick={() => onDelete(profile.id)} style={{ marginLeft: '0.5em' }}>
                Delete
              </button>
              <button onClick={() => onScreen(profile)} style={{ marginLeft: '0.5em' }}>
                New Screening
              </button>
              <Link to={`/results/${profile.id}`}>View Results</Link>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
