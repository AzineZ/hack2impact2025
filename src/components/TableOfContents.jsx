import React from 'react';

export default function TableOfContents() {
  return (
    <aside style={{
        position: 'fixed',
        top: '6rem',
        left: '1.5rem',
        width: '16rem',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '1.25rem',
        fontSize: '0.875rem',
        color: '#1d4ed8'
      }}>
        <h2 style={{
          fontSize: '1.125rem',
          fontWeight: 'bold',
          color: '#111827',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>Table of Contents</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a href="#what-is-autism" style={{ textDecoration: 'none', color: '#1d4ed8' }}>What is Autism?</a>
          <a href="#causes" style={{ textDecoration: 'none', color: '#1d4ed8' }}>Causes</a>
          <a href="#symptoms" style={{ textDecoration: 'none', color: '#1d4ed8' }}>Symptoms</a>
          <a href="#screenings" style={{ textDecoration: 'none', color: '#1d4ed8' }}>Screenings</a>
          <a href="#treatments" style={{ textDecoration: 'none', color: '#1d4ed8' }}>Treatments</a>
          <a href="#support" style={{ textDecoration: 'none', color: '#1d4ed8' }}>Support & Resources</a>
        </div>
      </aside>
    
  );
}
