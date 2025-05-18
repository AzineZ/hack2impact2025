import React from 'react';
import TableOfContents from '../components/TableOfContents'; 

export default function Information() {
  return (
    
    <div >

    <TableOfContents />

      <main style={{
        width: '900px',
        height: 'auto',
        display: 'block',
        marginLeft: '28%',
        marginRight: 'auto',
        textAlign: 'left',
      }}>
        
        <section id="what-is-autism" className="mb-10">
          <h1 className="text-2xl font-bold text-blue-700 mb-3">About Autism</h1>
          <p className="mb-3">
            Autism Spectrum Disorder (ASD) is a developmental condition that affects communication, behavior, and 
            social interaction. It is called a "spectrum" because symptoms and abilities can vary widely from person to person.
          </p>
          <p>
            People with autism may experience the world differently and may need different levels of support in their daily lives.

          </p>
        </section>

        <section id="causes" className="mb-10">
        <img 
          src="src/assets/Factors-that-influence-autism.png" 
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
            The exact cause of autism is not known, but it is believed to involve a combination of genetic and environmental 
            factors. Research continues to explore how these factors influence brain development.
          </p>
          <p>
          The National Institute of Environmental Health Sciences notes that several environmental factors could play a role 
          in raising the likelihood of autism. These include: 
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-800">
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
            Common symptoms include difficulties with communication, social interactions, and repetitive behaviors. Some 
            children show signs within the first year of life, while others may develop normally and then regress. In 
            some cases, signs of autism spectrum disorder (ASD) can be noticed within the first few months of life. 
            Infants might make limited eye contact, not respond when their name is called, or appear detached from their 
            caregivers. 
          </p>
          <p>
          Learning abilities also vary widely among those with ASD. Some may face cognitive challenges, while others 
          possess strong intellectual skills but struggle to communicate effectively, apply what they've learned in 
          practical situations, or adapt socially.
          </p>
          <p>
          Here are several common behaviors and traits often associated with autism spectrum disorder:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Delayed speech, limited verbal skills, or loss of previously acquired language</li>
            <li>Difficulty starting or maintaining conversations</li>
            <li>Repetitive or unusual speech patterns (e.g., singsong or robotic tone)</li>
            <li>Limited eye contact, facial expressions, or response to social cues</li>
            <li>Strong need for routine; becomes upset with minor changes</li>
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
        </section>

        <section id="treatments" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Treatments</h2>
          <p>
            While there is no cure for autism, early intervention can improve skills and outcomes. Common treatments 
            include behavioral therapy, speech therapy, occupational therapy, and educational support.

          </p>
        </section>

        <section id="support" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Support & Resources</h2>
          <p>
            Many resources are available for families and individuals, including local support groups, educational 
            materials, and therapy services tailored to autism spectrum needs.

          </p>
        </section>

      </main>

    </div>
  );
}
