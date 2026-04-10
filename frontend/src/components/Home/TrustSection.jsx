import React from 'react';
import { motion } from 'framer-motion';

const TrustSection = () => {
  const logos = ['NETFLIX', 'airbnb', 'M', 'bookmyshow', 'goibibo'];

  return (
    <section style={{ padding: '80px 0', background: 'white' }}>
      <div className="container">
        
        {/* Logos Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '100px', gap: '4rem' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>Trusted by 4.5 lakh+ merchants</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Millions of businesses—big and small—trust us to power their growth.</p>
          </div>
          <div style={{ flex: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.6 }}>
            {logos.map((logo, i) => (
              <span key={i} style={{ fontWeight: '900', fontSize: '1.2rem', color: '#1a1a1a', letterSpacing: '-1px' }}>{logo}</span>
            ))}
          </div>
        </div>

        {/* Testimonial Card */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           style={{ 
             display: 'grid', 
             gridTemplateColumns: '350px 1fr', 
             gap: '4rem', 
             alignItems: 'center',
             background: 'var(--bg-page)',
             borderRadius: '32px',
             padding: '4rem',
             position: 'relative'
           }}
        >
          <div style={{ position: 'relative' }}>
             {/* Large background shape */}
             <div style={{ width: '100%', height: '100%', background: 'var(--primary-light)', borderRadius: '24px', position: 'absolute', top: '10px', left: '10px', zIndex: 0 }}></div>
             <img 
               src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=450&fit=crop" 
               alt="Customer" 
               style={{ width: '100%', borderRadius: '24px', position: 'relative', zIndex: 1, objectFit: 'cover' }}
             />
             <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '800' }}>Puneet Aggarwal</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Vice President Finance at Ixigo</p>
             </div>
          </div>
          <div>
             <h3 style={{ fontSize: '2.2rem', lineHeight: '1.2', marginBottom: '1.5rem', fontStyle: 'italic' }}>
               "Industry best solutions for higher success rates"
             </h3>
             <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
               Digiway was an obvious choice given its market leadership & innovative background in online payments. They have offered us best-in-class customer experience and round-the-clock support.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
