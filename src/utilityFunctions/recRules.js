const recommendationRules = [
    {
      condition: (s) => s.totalScore > 55,
      message: "🔴 High concern: Please consult a developmental pediatrician or specialist."
    },
    {
      condition: (s) => s.totalScore > 30 && s.totalScore <= 55,
      message: "🟠 Moderate concern: Monitor and consider early intervention or follow-up screening."
    },
    {
      condition: (s) => s.totalScore <= 30,
      message: "🟢 Low concern: No immediate action needed. Re-screen in 3–6 months."
    },
    {
      condition: (s) => s.answers["Does your child repeat words or phrases excessively (echolalia)?"] >= 3,
      message: "🗣️ Echolalia noted: A speech-language pathologist may be helpful."
    },
    {
      condition: (s) => s.answers["Does your child flap hands, rock, or spin in circles?"] >= 3,
      message: "🌀 Repetitive motor behavior observed. Consider occupational therapy consultation."
    },
    {
      condition: (s) => s.answers["Does your child have unusual reactions to sounds, tastes, or textures?"] >= 3,
      message: "🎧 Sensory sensitivity detected. Look into sensory integration support."
    },
    {
      condition: (s) => s.answers["Has your child lost any social or language skills they previously had?"] >= 3,
      message: "⚠️ Regression reported. Seek a developmental evaluation promptly."
    },
    {
      condition: (s) => s.answers["Does your child understand simple jokes or sarcasm?"] <= 1,
      message: "🧠 Difficulty with abstract language. You may want to explore social skills training."
    }
  ];
  
  export function getRecommendations(screening) {
    return recommendationRules
      .filter(rule => rule.condition(screening))
      .map(rule => rule.message);
  }
  