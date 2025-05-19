import React from 'react';
import autismInfographic from '../assets/What is autism infographic.jpg';

export default function WhatIsAutism() {
  return (
    <>
      <main>
        <h1>What is Autism?</h1>

        <div 
        style={{
          width: '1200px',
          height: 'auto',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>

          <p className="mb-2">
          Autism is a condition that affects how the brain develops, typically showing signs 
          within the first few years of life. Because it exists on a spectrum, individuals may 
          experience a wide variety of behaviors, challenges, and strengths. Outcomes can vary, 
          and early support often plays a key role in shaping a child's development.
          </p>

          <p >
          Although autism was once believed to be untreatable, current research has led to therapies 
          that can make a meaningful difference. While it remains a lifelong condition, many 
          individuals benefit from tailored strategies. Families often work closely with healthcare 
          professionals to determine the most effective ways to address each person's unique needs.
          </p>


        </div>
        
        <img 
          src={autismInfographic}
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


      </main>
    </>
  );
}
