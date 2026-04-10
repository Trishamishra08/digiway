import React from 'react';

const Stats = () => {
  return (
    <section id="stats" style={{ background: 'var(--text-main)', padding: '3rem 0', color: 'var(--white)', position: 'relative', zIndex: '10' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
          <div className="stat-item">
            <div className="stat-number" style={{ fontSize: '2rem', fontWeight: '800' }}>₹150Cr+</div>
            <div className="stat-label" style={{ opacity: 0.6, fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>Monthly Volume</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" style={{ fontSize: '2rem', fontWeight: '800' }}>5k+</div>
            <div className="stat-label" style={{ opacity: 0.6, fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>Businesses</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" style={{ fontSize: '2rem', fontWeight: '800' }}>99.9%</div>
            <div className="stat-label" style={{ opacity: 0.6, fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>Uptime</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', opacity: '0.3', filter: 'grayscale(1)' }}>
            <span style={{ fontWeight: '800', fontSize: '1rem' }}>PARTNER A</span>
            <span style={{ fontWeight: '800', fontSize: '1rem' }}>PARTNER B</span>
            <span style={{ fontWeight: '800', fontSize: '1rem' }}>PARTNER C</span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
