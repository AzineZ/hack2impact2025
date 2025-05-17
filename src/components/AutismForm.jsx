import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { getRecommendations } from '../utilityFunctions/recRules';

const likertOptions = ["Never", "Rarely", "Sometimes", "Often", "Always"];
const likertMap = {
  "Never": 0,
  "Rarely": 1,
  "Sometimes": 2,
  "Often": 3,
  "Always": 4
};

const questionGroups = {
  "Social Interaction": [
    "Does your child respond to their name when called?",
    "Does your child make eye contact when interacting with others?",
    "Does your child smile back when you smile at them?",
    "Does your child show interest in other children?",
    "Does your child point to show you interesting objects?"
  ],
  "Communication": [
    "Does your child use gestures like waving or nodding?",
    "Has your child developed language skills at the expected rate?",
    "Does your child engage in pretend or imaginative play?",
    "Does your child repeat words or phrases excessively (echolalia)?",
    "Does your child understand simple instructions?"
  ],
  "Behavior Patterns": [
    "Does your child have intense interests in specific topics/objects?",
    "Does your child get upset by minor changes in routine?",
    "Does your child flap hands, rock, or spin in circles?",
    "Does your child have unusual reactions to sounds, tastes, or textures?",
    "Does your child line up toys or objects repeatedly?"
  ],
  "Additional Questions": [
    "Has your child lost any social or language skills they previously had?",
    "Does your child seem to be in their own world at times?",
    "Does your child respond appropriately to others' emotions?",
    "Does your child show objects to others to share interest?",
    "Does your child understand simple jokes or sarcasm?"
  ]
};

export default function AutismForm({ user, profile, onClose }) {
  const [contactInfo, setContactInfo] = useState('');
  const [answers, setAnswers] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleAnswer = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !profile) {
      window.alert("Missing user or profile.");
      return;
    }

    setSubmitting(true);
    try {
      const screeningsRef = collection(
        db,
        'users',
        user.uid,
        'profiles',
        profile.id,
        'screenings'
      );
      
      const mappedAnswers = Object.fromEntries(
        Object.entries(answers).map(([q, a]) => [q, likertMap[a]])
      );
      const totalScore = Object.values(mappedAnswers).reduce((sum, val) => sum + val, 0);
      const recommendations = getRecommendations({ answers: mappedAnswers, totalScore });
      console.log(recommendations);
      
      await addDoc(screeningsRef, {
        profileId: profile.id,
        profileName: profile.name,
        contact: contactInfo,
        answers: mappedAnswers,
        totalScore,
        recommendations,
        submittedAt: new Date()
      });

      window.alert(`Screening submitted for ${profile.name}`);
      setAnswers({});
      setContactInfo('');
      onClose();
    } catch (err) {
      console.error(err);
      window.alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1em', border: '1px solid #ccc', marginTop: '1em' }}>
      <h2>Screening for {profile.name}</h2>

      <label>
        Parent/Guardian Contact Info:
        <input
          type="text"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
          required
        />
      </label>
      <br /><br />

      {Object.entries(questionGroups).map(([section, questions]) => (
        <fieldset key={section} style={{ marginBottom: '1em' }}>
          <legend><strong>{section}</strong></legend>
          {questions.map((q) => (
            <div key={q}>
              <label>{q}</label><br />
              {likertOptions.map((opt) => (
                <label key={opt} style={{ marginRight: '1em' }}>
                  <input
                    type="radio"
                    name={q}
                    value={opt}
                    checked={answers[q] === opt}
                    onChange={() => handleAnswer(q, opt)}
                    required
                  />
                  {opt}
                </label>
              ))}
              <br /><br />
            </div>
          ))}
        </fieldset>
      ))}

      <button type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Screening"}
      </button>
      <button type="button" onClick={onClose} style={{ marginLeft: '0.5em' }}>
        Cancel
      </button>
    </form>
  );
}
