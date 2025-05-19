import React from 'react';
import TableOfContents from '../components/TableOfContents'; 
import autismFactorsImg from '../assets/Factors-that-influence-autism.png';

export default function Information() {
  return (
    
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        

    <TableOfContents />

      <main style={{
        width: '900px',
        marginLeft: '4%',
        marginRight: 'auto',
        textAlign: 'left',
      }}>
        <section id="about-autism" className="mb-10">
          <h1 className="text-2xl font-bold text-blue-700 mb-3">About Autism</h1>
          <p className="mb-3">
            Autism Spectrum Disorder (ASD) is a developmental condition that affects communication, behavior, and 
            social interaction. It is referred to as a "spectrum" because symptoms and abilities can vary widely from person to person.
          </p>
          <p>
            People with autism may experience the world differently and may need different levels of support in their daily lives.

          </p>
        </section>

        <section id="causes" className="mb-10">
        <img 
          src={autismFactorsImg}
          alt="Autism awareness illustration" 
          className="mx-auto rounded-lg shadow-md mb-6"
          style={{
            width: '500px',
            height: 'auto',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
            <h2 className="text-xl font-semibold mb-2">Causes</h2>
            
            <p>
                The exact cause of autism is still unknown, but it is believed to involve a combination of genetic and environmental 
                factors. Research continues to explore how these factors influence brain development.
            </p>
            <p>
            <strong>The National Institute of Environmental Health Sciences</strong> notes that several environmental factors 
            could play a role in raising the likelihood of autism. These include: 
            </p>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc', marginBottom: '1em' }}>
                <li>Older age in one or both parents at the time of conception</li>
                <li>Exposure during pregnancy to pollutants in the air or specific agricultural chemicals</li>
                <li>Health issues in the mother, such as obesity, diabetes, or immune-related conditions</li>
                <li>Being born significantly early or with an unusually low birth weight</li>
                <li>Complications during delivery that result in reduced oxygen flow to the infant's brain</li>
            </ul>

        </section>

        <section id="symptoms" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Symptoms</h2>
          <p className="mb-2">
            Some children show signs within the first year of life, while others may develop normally and then regress. In 
            some cases, signs of autism spectrum disorder can be noticed within the first few months of life. 
          </p>
          <p>
          Learning abilities also vary widely among those with ASD. Some may face cognitive challenges, while others 
          possess strong intellectual skills but struggle to communicate effectively, apply what they've learned in 
          practical situations, or adapt socially.
          </p>
          <p>
          Here are some examples:
          </p>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc', marginBottom: '1em' }}>
            <li>Delayed speech, limited verbal skills, or loss of previously acquired language</li>
            <li>Repetitive or unusual speech patterns (e.g., singsong or robotic tone)</li>
            <li>Limited eye contact, facial expressions, or response to social cues</li>
            <li>Limited make-believe or pretend play</li>
            <li>Unusual movement patterns, such as toe-walking or clumsiness</li>
          </ul>
        
        </section>

        <section id="screenings" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Screenings</h2>
          <p>
            Early screening tools help identify signs of autism in young children. Pediatricians often use developmental 
            checklists or questionnaires during routine visits.
          </p>
          <p>
          <strong>The Diagnostic and Statistical Manual of Mental Disorders (DSM-5)</strong>, issued by the American Psychiatric Association, 
          defines the criteria for diagnosing autism spectrum disorder (ASD). It requires ongoing difficulties in social 
          communication, nonverbal interaction, and forming or understanding relationships. In 2022, a revised 
          edition—DSM-5-TR—was released to clarify the diagnostic language. The update emphasized that all listed 
          criteria must be present for an autism diagnosis, helping ensure clearer and more accurate assessments.
          </p>
          <p>
            They introduced three levels of severity: 
          </p>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc', marginBottom: '1em' }}>
            <li>Level 1: (“requiring support”)</li>
            <li>Level 2: (“requiring substantial support”)</li>
            <li>Level 3: (“requiring very substantial support”)</li>
        </ul>
        </section>

        <section id="treatments" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Treatments</h2>
          <p>
            While there is no cure for autism and treatments must be tailored to the individual, early intervention 
            can improve skills and outcomes. The most important goal is to improve a child's development by treating symptoms
            and learning independence. 
          </p>

          <p>
            A wide variety of treatments and approaches can be made, which can feel overwhelming and complicated. A healthcare
            professional can provide guidance and develop treatment plans, which can include:
          </p>
          
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc', marginBottom: '1em' }}>
            <li>Behavioral and communication therapies: target social, verbal, and behavioral challenges</li>
            <li>Educational interventions: create structured and organized learning plans</li>
            <li>Medications: while no medication can treat symptoms of ASD, they may help manage associated 
                challenges like hyperactivity, anxiety, or more</li>
            </ul>
        </section>

        <section id="support" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Support & Resources</h2>
          <p>
            Many resources are available for families and individuals, including local support groups, educational 
            materials, and therapy services tailored to autism spectrum needs.
          </p>
          <p>
            Here are some ideas and tips:
          </p>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc', marginBottom: '1em' }}>
            <li>Find a group of trusted medical professionals</li>
            <li>Plan for the future</li>
            <li>Maintain medical records and details</li>
          </ul>
          
        </section>

      </main>

    </div>
  );
}
