import React from 'react';
import TableOfContents from '../components/TableOfContents'; // adjust the path if needed

export default function Information() {
  return (
    <div className="flex relative">
      
      {/* Left Sidebar */}
      <TableOfContents />

      {/* Main Content */} 
      <main className="ml-[18rem] px-6 py-10 max-w-4xl text-gray-800 scroll-smooth">
        
        <section id="what-is-autism" className="mb-10">
          <h1 className="text-2xl font-bold text-blue-700 mb-3">What is Autism?</h1>
          <p className="mb-3">
            Autism Spectrum Disorder (ASD) is a developmental condition that affects communication, behavior, and social interaction. It is called a "spectrum" because symptoms and abilities can vary widely from person to person.
          </p>
          <p>
            People with autism may experience the world differently and may need different levels of support in their daily lives.
          </p>
        </section>

        <section id="causes" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Causes</h2>
          <p>
            The exact cause of autism is not known, but it is believed to involve a combination of genetic and environmental factors. Research continues to explore how these factors influence brain development.
          </p>
        </section>

        <section id="symptoms" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Symptoms</h2>
          <p className="mb-2">
            Common symptoms include difficulties with communication, social interactions, and repetitive behaviors. Some children show signs within the first year of life, while others may develop normally and then regress.
          </p>
        </section>

        <section id="screenings" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Screenings</h2>
          <p>
            Early screening tools help identify signs of autism in young children. Pediatricians often use developmental checklists or questionnaires during routine visits.
          </p>
        </section>

        <section id="treatments" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Treatments</h2>
          <p>
            While there is no cure for autism, early intervention can improve skills and outcomes. Common treatments include behavioral therapy, speech therapy, occupational therapy, and educational support.
          </p>
        </section>

        <section id="support" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Support & Resources</h2>
          <p>
            Many resources are available for families and individuals, including local support groups, educational materials, and therapy services tailored to autism spectrum needs.
          </p>
        </section>

      </main>
    </div>
  );
}
