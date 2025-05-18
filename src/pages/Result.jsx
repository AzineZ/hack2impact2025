import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from 'recharts';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
import { getRecommendations } from '../utilityFunctions/recRules';
import ScreeningResultActions from '../components/ScreeningResultActions';

function interpretScore(score) {
  if (score <= 30) return 'Low concern';
  if (score <= 55) return 'Moderate concern';
  return 'High concern';
}


export default function Results() {
  const { profileId } = useParams();
  const auth = getAuth();
  const user = auth.currentUser;

  const [screenings, setScreenings] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchScreenings = async () => {
      if (!user || !profileId) return;
      const screeningsRef = collection(
        db,
        'users',
        user.uid,
        'profiles',
        profileId,
        'screenings'
      );

      const snapshot = await getDocs(screeningsRef);
      const results = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setScreenings(results.sort((a, b) => b.submittedAt?.toDate() - a.submittedAt?.toDate()));
      const chart = [...results] // make a shallow copy
        .sort((a, b) => a.submittedAt?.toDate() - b.submittedAt?.toDate()) // sort ascending
        .map((s) => ({
            date: s.submittedAt?.toDate().toLocaleDateString(),
            totalScore: s.totalScore
        }));
        setChartData(chart);
      setLoading(false);
    };

    fetchScreenings();
  }, [user, profileId]);

  const toggleExpanded = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  if (loading) return <p>Loading screening history...</p>;

  return (
    <div>
      <h2>Screening History</h2>
      <Link to="/profile">← Back to Profiles</Link>
      <br /><br />
      {screenings.length === 0 ? (
        <p>No screenings found for this child.</p>
      ) : (
        <ul>
          <h3>Severity Score Over Time (Lower is better)</h3>
            <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <LineChart data={chartData}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 80]} />
                <Tooltip />
                <Line type="monotone" dataKey="totalScore" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
            </div>
          {screenings.map((screening) => (
            <li key={screening.id} style={{ marginBottom: '1em', borderBottom: '1px solid #ccc', paddingBottom: '1em' }}>
              <p><strong>Date:</strong> {screening.submittedAt?.toDate().toLocaleDateString()}</p>
              <p><strong>Severity Score:</strong> {screening.totalScore}/80</p>
              <p><strong>Assessment:</strong> {interpretScore(screening.totalScore)}</p>
              
              <button onClick={() => toggleExpanded(screening.id)}>
                {expandedId === screening.id ? 'Hide Screening Details' : 'Show Screening Details'}
              </button>

              {expandedId === screening.id && (
                <div style={{ marginTop: '1em' }}>
                  <h4>Detailed Answers</h4>
                  <ul>
                    {Object.entries(screening.answers).map(([question, value]) => (
                      <li key={question}>
                        <strong>{question}</strong>: {value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Always visible recommendations */}
              <h4>Personalized Recommendations</h4>
              <ul>
                {getRecommendations(screening).map((rec, i) => (
                  <li key={i}>{rec}</li>
                ))}
              </ul>
              <ScreeningResultActions
                screening={screening}
                recommendations={getRecommendations(screening)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
