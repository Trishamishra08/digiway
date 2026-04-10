import React from 'react';

const TransparencySection = () => {
  return (
    <section style={{ padding: '80px 0', background: 'white' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) 1fr', gap: '2.5rem' }}>
        
        {/* Main Transparency Card */}
        <div style={{ 
          background: 'white', 
          borderRadius: '40px', 
          overflow: 'hidden', 
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid #f1f5f9'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1000&h=450&fit=crop" 
            alt="Handshake" 
            style={{ width: '100%', height: '350px', objectFit: 'cover' }}
          />
          <div style={{ padding: '3rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-main)' }}>Total transparency & fairness</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px' }}>
              We make money only when you do. The charges you see are what you pay with no hidden charges!
            </p>
          </div>
        </div>

        {/* Info Sidebar Card */}
        <div style={{ 
          background: '#efefef', 
          borderRadius: '40px', 
          padding: '4rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>How to set up</h3>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Getting started using Digiway is super simple, with easy-to-understand documents & resources.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TransparencySection;
