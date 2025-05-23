// AdminDashboard.jsx
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { collectionGroup, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';

const COLORS = ['#2ecc71', '#f39c12', '#e74c3c'];

export default function AdminDashboard() {
  const auth = getAuth();
  const user = auth.currentUser;

  const [screenings, setScreenings] = useState([]);
  const [countsByMonth, setCountsByMonth] = useState([]);
  const [severityData, setSeverityData] = useState([]);
  const [topRecs, setTopRecs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllScreenings = async () => {
      const snapshot = await getDocs(collectionGroup(db, 'screenings'));
      const data = snapshot.docs.map(doc => doc.data());
  
      // 🔍 Debug output
      console.log('Screenings with recommendations:', data.filter(d => Array.isArray(d.recommendations)).length);
      console.log('Total screenings:', data.length);
      console.log('Sample recommendations:', data.slice(0, 3).map(d => d.recommendations));
  
      setScreenings(data);
      aggregateData(data);
      setLoading(false);
    };
  
    fetchAllScreenings();
  }, []);

  const aggregateData = (data) => {
    const counts = {};
    const severity = { Low: 0, Moderate: 0, High: 0 };
    const recFreq = {};

    data.forEach((s) => {
      const date = s.submittedAt?.toDate?.();
      if (!date) return;

      const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
      counts[key] = (counts[key] || 0) + 1;

      const score = s.totalScore || 0;
      if (score <= 30) severity.Low++;
      else if (score <= 55) severity.Moderate++;
      else severity.High++;

      if (s.recommendations) {
        s.recommendations.forEach((r) => {
          const clean = r
            .replace(/[^ -~]/g, '')        // remove non-printable characters
            .replace(/\s+/g, ' ')          // collapse multiple whitespace (newlines, tabs, spaces)
            .trim();                       // trim ends
          recFreq[clean] = (recFreq[clean] || 0) + 1;
        });
      }
    });

    const formattedCounts = Object.entries(counts).map(([k, v]) => ({ month: k, count: v }));
    const formattedSeverity = Object.entries(severity).map(([k, v]) => ({ name: k, value: v }));
    const sortedRecs = Object.entries(recFreq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([label, count]) => ({ label, count }));

    setCountsByMonth(formattedCounts);
    setSeverityData(formattedSeverity);
    setTopRecs(sortedRecs);
  };

  if (loading) return <p>Loading trends...</p>;

  const renderBarLabel = ({ x, y, index, height }) => {
    const label = topRecs[index]?.label || '';
    const words = label.split(' ');
    const lines = [];
    let currentLine = '';
  
    for (const word of words) {
      if ((currentLine + word).length < 40) {
        currentLine += `${word} `;
      } else {
        lines.push(currentLine.trim());
        currentLine = `${word} `;
      }
    }
    lines.push(currentLine.trim());
  
    const lineHeight = 14;
    const startY = y + height / 2 - ((lines.length - 1) * lineHeight) / 2;
  
    return (
      <text
        x={x - 20} // shift left of the bar
        y={startY}
        textAnchor="end"
        fontSize={12}
        fill="#333"
      >
        {lines.map((line, i) => (
          <tspan key={i} x={x - 20} dy={i === 0 ? 0 : lineHeight}>
            {line}
          </tspan>
        ))}
      </text>
    );
  };
  

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Admin Dashboard - Community Trends</h2>

      <h3>Total Screenings Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={countsByMonth}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3498db" />
        </BarChart>
      </ResponsiveContainer>

      <h3>Severity Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={severityData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
            {severityData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <h3>Most Common Recommendations</h3>
      {console.log("topRecs data:", topRecs)}
      <ResponsiveContainer width="100%" height={topRecs.length * 50}>
        <BarChart
          data={topRecs}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 320, bottom: 20 }} // ⬅️ wider left margin
          barCategoryGap={30}   // ⬅️ controls spacing between bar categories
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="label" width={0} />  {/* hides axis labels */}

          <Tooltip />
          <Bar dataKey="count" fill="#8e44ad" label={renderBarLabel} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}
