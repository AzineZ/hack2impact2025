import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WhatIsAutism() {
  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-10 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-semibold text-blue-700 mb-6">What is Autism?</h1>
        
        <p className="mb-4">
          Autism Spectrum Disorder (ASD) is a developmental condition that affects how a person communicates, interacts with others, and experiences the world around them. It is called a "spectrum" because individuals with autism can have a wide range of symptoms and skills.
        </p>

        <p className="mb-4">
          Children with autism may show differences in how they play, learn, speak, and behave. Some may require significant support in their daily lives, while others may need less support and live independently.
        </p>

        <p className="mb-4">
          Early identification and intervention are crucial in supporting children with autism. With the right resources and understanding, children with autism can thrive and reach their full potential.
        </p>

        <p>
          Our platform is designed to support families by offering information, assessments, and resources tailored to the needs of children on the autism spectrum.
        </p>
      </main>

      <Footer />
    </>
  );
}
