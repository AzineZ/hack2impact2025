import { Link } from 'react-router-dom';
import { useState } from 'react';

import AACT from '../assets/AACT.png';
import ACA from '../assets/ACA.png';
import Woodfield from '../assets/Woodfield.png';
import Hopeworks from '../assets/hopeworks.png';
import Multikids from '../assets/multikids-logo.png';
import Sparklers from '../assets/sparklers.png'

const resources = [
  {
    name: "Autism Awareness, Care & Training (AACT)",
    image: AACT,
    location: "Haatso, Greater Accra",
    contact: "+233 20 659 7856",
    email: "info@aactgh.org",
    website: "https://aactgh.org",
    description: "Provides support, education, and training for children with autism and their families."
  },
  {
    name: "Sparklers Foundation Ghana",
    image: Sparklers,
    location: "Adjasco Junction, Bortianor, Accra",
    contact: "+233 24 785 4571",
    email: "contact@sparklersfoundation.org",
    website: "https://www.sparklersfoundation.org",
    description: "Inclusive education and therapeutic interventions for children with special needs."
  },
  {
    name: "Autism Compassion Africa (ACA)",
    image: ACA,
    location: "Cape Coast, Central Region",
    contact: "+233 55 347 7494",
    email: "autismcompassionafrica@gmail.com",
    website: "https://www.autismcompassionafrica.org",
    description: "Support services and inclusive education programs in the Central Region."
  },
  {
    name: "Hopeworks Ghana & Children's Oasis Foundation",
    image: Hopeworks,
    location: "Accra",
    contact: "+233 24 487 5723",
    email: "info@hopeworksghana.org",
    website: "https://hopeworksghana.org",
    description: "Autism resource centers improving access to education in communities."
  },
  {
    name: "Woodfield Manor Special Needs School",
    image: Woodfield,
    location: "Adenta, Accra",
    contact: "+233 30 393 0832",
    email: "woodfieldmanor.gh@gmail.com",
    website: "https://woodfieldmanorgh.org",
    description: "Specialized education and therapy services for children with autism."
  },
  {
    name: "Multikids Inclusive Academy",
    image: Multikids,
    location: "Accra",
    contact: "+233 20 296 6871",
    email: "admin.mka@multikidsgh.org",
    website: "https://multikidsghana.com",
    description: "Accredited international school for children with special needs."
  }
];

export default function Resources() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const cardStyle = (index) => ({
        ...styles.card,
        borderColor: hoveredCard === index ? '#FCD116' : '#FCD116',
        transform: hoveredCard === index ? 'translateY(-5px)' : 'none',
        boxShadow: hoveredCard === index ? '0 5px 15px rgba(252,209,22,0.2)' : styles.card.boxShadow,
        transition: 'all 0.3s ease'
    });

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Resources and Support in Ghana</h1>
            <Link to="/dashboard" style={styles.backLink}>← Back to Dashboard</Link>

            <div style={styles.resourcesContainer}>
                {resources.map((resource, index) => (
                    <div
                        key={index}
                        style={cardStyle(index)}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <img src={resource.image} alt={resource.name} style={styles.logo} />
                        <h3 style={styles.orgName}>{resource.name}</h3>

                        <div style={styles.contactInfo}>
                            <div style={styles.detail}>
                                <span style={styles.icon}>📍</span>
                                <span>{resource.location}</span>
                            </div>
                            <div style={styles.detail}>
                                <span style={styles.icon}>📞</span>
                                <span>{resource.contact}</span>
                            </div>
                            <div style={styles.detail}>
                                <span style={styles.icon}>📧</span>
                                <a href={`mailto:${resource.email}`} style={styles.link}>
                                    <span>{resource.email}</span>
                                </a>
                            </div>
                            <div style={styles.detail}>
                                <span style={styles.icon}>🌐</span>
                                <a href={resource.website} target="_blank" rel="noopener noreferrer" style={styles.link}>
                                    <span>Visit Website</span>
                                </a>
                            </div>
                        </div>

                        <p style={styles.description}>{resource.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    heading: {
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '2rem 0',
        color: '#2c3e50'
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: '15px',
        border: '2px solid',
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        minHeight: '400px'
    },
    logo: {
        width: '80px',
        height: '80px',
        objectFit: 'contain',
        margin: '0 auto'
    },
    orgName: {
        fontSize: '1.4rem',
        fontWeight: '600',
        color: '#2c3e50',
        textAlign: 'center'
    },
    contactInfo: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '0.25rem',
        margin: '0',
        width: '100%',
        flexGrow: 1
    },
    detail: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.9rem',
        color: '#34495e',
        width: '100%',
        margin: '0',
        padding: '0.25rem 0',
    },
    icon: {
        fontSize: '1.rem',
        justifySelf: 'center'
    },
    description: {
        fontSize: '0.9rem',
        color: '#7f8c8d',
        lineHeight: '1.4',
        marginTop: 'auto',
        paddingTop: '0.5rem'
    },
    link: {
        color: '#3498db',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    resourcesContainer: {
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        padding: '1rem 0'
    },
    backLink: {
        display: 'block',
        textAlign: 'center',
        color: '#3498db',
        textDecoration: 'none',
        marginBottom: '2rem'
    }
};