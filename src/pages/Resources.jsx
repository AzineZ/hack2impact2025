import { Link } from 'react-router-dom';
import { useState } from 'react';

const resources = [
  {
    name: "Autism Awareness, Care & Training (AACT)",
    description: "Founded in 1998 by Mrs. Serwah Quaynor, AACT provides support, education, and training for children with autism and their families. Programs include independent living skills, functional academics, vocational training, and recreation.",
    location: "Haatso, Greater Accra",
    contact: "+233 20 659 7856",
    email: "info@aactgh.org",
    website: "https://aactgh.org"
  },
  {
    name: "Sparklers Foundation Ghana",
    description: "Offers inclusive education, therapeutic interventions, family support, and research for children with autism and special needs. They run an inclusive school and holiday programs.",
    location: "Sparklers House, Adjasco Junction, Bortianor, Accra",
    contact: "+233 24 785 4571",
    email: "contact@sparklersfoundation.org",
    website: "https://www.sparklersfoundation.org"
  },
  {
    name: "Autism Compassion Africa (ACA)",
    description: "Provides inclusive education, therapeutic interventions, family support, and research for children with autism. Runs an inclusive school and holiday programs in Cape Coast.",
    location: "Cape Coast, Central Region",
    contact: "+233 55 347 7494",
    email: "autismcompassionafrica@gmail.com",
    website: "https://www.autismcompassionafrica.org"
  },
  {
    name: "Hopeworks Ghana & Children's Oasis Foundation",
    description: "Runs autism resource centers in deprived communities to improve access to education and awareness. Partnered with Twin City Special School in Sekondi.",
    location: "Accra",
    contact: "+233 24 487 5723",
    email: "info@hopeworksghana.org",
    website: "https://hopeworksghana.org"
  },
  {
    name: "Woodfield Manor Special Needs School",
    description: "Offers specialized education, therapy (speech, occupational, behavioral), and autism outreach workshops.",
    location: "Adenta, Accra",
    contact: "+233 30 393 0832",
    email: "woodfieldmanor.gh@gmail.com",
    website: "https://woodfieldmanorgh.org"
  },
  {
    name: "Multikids Inclusive Academy",
    description: "Accredited international school for children with autism, cerebral palsy, Down syndrome, and other special needs.",
    location: "Accra",
    contact: "+233 20 296 6871",
    email: "admin.mka@multikidsgh.org",
    website: "https://multikidsghana.com"
  }
];

export default function Resources() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const cardStyle = (index) => ({
        ...styles.card,
        transform: hoveredCard === index ? 'translateY(-5px)' : 'none',
        boxShadow: hoveredCard === index ? '0 5px 15px rgba(0,0,0.2)'  : styles.card.boxShadow,
        // backgroundColor: hoveredCard === index ? '#f0f0f0' : styles.card.backgroundColor,
        transition: 'all 0.3 ease'
    });
 return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Autism Resources in Ghana</h1>
      <Link to="/dashboard" style={styles.backLink}>← Back to Dashboard</Link>

      <div style={styles.resourcesContainer}>
        {resources.map((resource, index) => (
          <div
            key={index}
            style={cardStyle(index)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 style={styles.orgName}>{resource.name}</h3>
            <p style={styles.description}>{resource.description}</p>

            <div style={styles.details}>
              <p style={styles.detailText}>📍 {resource.location}</p>
              <p style={styles.detailText}>📞 {resource.contact}</p>
              <p style={styles.detailText}>📧 <a href={`mailto:${resource.email}`} style={styles.link}>{resource.email}</a></p>
              <p style={styles.detailText}>🌐 <a href={resource.website} target="_blank" rel="noopener noreferrer" style={styles.link}>
                {resource.website}    
              </a></p>
            </div>
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
        margin: '0 auto'
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '1rem',
        color: '#e67e22',
        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
    },
    backLink: {
        display: 'inline-block',
        marginBottom: '2rem',
        color: '#3498db',
        textDecoration: 'none'
    },
    resourcesContainer: {
        display: 'grid',
        gap: '2.5rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    card: {
        backgroundColor: 'rgb(231, 197, 197)',
        borderRadius: '10px',
        padding: '1.5rem',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'trasnform 0.2 ease, box-shadow 0.2 ease',
        ':hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }
    },
    cardContent: {
        flex: 1,
        marginBottom: '1.5rem'
    },
    orgName: {
        color: '#e67e22',
        marginBottom: '1.2rem',
        fontSize: '1.4rem'
    },
    description: {
        color: '#666',
        marginBottom: '1rem',
        lineHeight: '1.6',
        fontSize: '1rem',
        fontWeight: '500'
    },
    details: {
        backgroundColor: '#fff',
        padding: '1.2rem',
        borderRadius: '8px',
        marginTop: 'auto',
        border: '1px solid #eee'
    },
    detailText: {
        color: '#333',
        margin: '0.6rem 0',
        fontSize: '0.95rem'
    },
    link: {
        color: '#3498db',
        textDecoration: 'none',
        wordBreak: 'break-all',
        ':hover': {
            textDecoration: 'underline'
        }
    }
};