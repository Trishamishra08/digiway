import React from 'react';
import { motion } from 'framer-motion';

const StartupProgram = () => {
  return (
    <section style={{ padding: '80px 0', background: 'white' }}>
      <div className="container">
        <div style={{ 
          background: 'var(--bg-page)', 
          borderRadius: '40px', 
          display: 'grid', 
          gridTemplateColumns: 'minmax(350px, 1fr) 1.5fr', 
          overflow: 'hidden',
          border: '1px solid var(--card-border)'
        }}>
          {/* Left Side: Illustration + Header */}
          <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid #e1e4e1' }}>
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '2rem' }}>
                Digiway <br />
                Startup <br />
                Program
              </h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                Your go-to partner from startup to stardom!
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400" 
              alt="Team" 
              style={{ width: '100%', borderRadius: '20px', objectFit: 'cover', height: '180px' }}
            />
          </div>

          {/* Right Side: Features List */}
          <div style={{ padding: '4rem', background: 'white' }}>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: '800', marginBottom: '1.2rem' }}>For All Startup Founders</h4>
            <p style={{ marginBottom: '3rem', fontSize: '1.1rem' }}>1000+ startups are already scaling — What's stopping you?</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
              {[
                '$100k worth startup credit & discounts',
                'Personalized 1:1 Mentorship',
                'Collect online payments',
                'Lifetime access to exclusive community'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '20px', height: '20px', border: '2px solid var(--primary-light)', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{item}</span>
                </div>
              ))}
            </div>

            <button className="btn-payu-primary" style={{ padding: '1rem 3.5rem', borderRadius: '14px', fontSize: '1.1rem' }}>Apply Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupProgram;
