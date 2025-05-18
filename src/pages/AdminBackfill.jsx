import { useEffect } from 'react';
import { getFirestore, collectionGroup, updateDoc, getDocs } from 'firebase/firestore';
import { getRecommendations } from '../utilityFunctions/recRules';

const db = getFirestore();

export default function AdminBackfill() {
  useEffect(() => {
    const backfillRecommendations = async () => {
      const snapshot = await getDocs(collectionGroup(db, 'screenings'));
      const updates = [];

      for (const document of snapshot.docs) {
        const data = document.data();
        const ref = document.ref;

        if (!data.recommendations && typeof data.totalScore === 'number') {
            const recommendations = getRecommendations(data);

          console.log(`Backfilling ${ref.id}:`, recommendations);

          updates.push(updateDoc(ref, { recommendations }));
        }
      }

      await Promise.all(updates);
      console.log(`✅ Backfilled ${updates.length} screening(s).`);
    };

    backfillRecommendations();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Admin Backfill</h2>
      <p>This page runs the one-time backfill for old screening data.</p>
    </div>
  );
}
