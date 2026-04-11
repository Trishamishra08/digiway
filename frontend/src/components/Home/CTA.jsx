import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="final-cta" style={{ 
      padding: '100px 0', 
      background: 'linear-gradient(rgba(0, 171, 132, 0.96), rgba(0, 171, 132, 0.96)), url("https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80") center/cover',
      color: 'white',
      textAlign: 'center',
      overflow: 'hidden'
    }}>
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 style={{ color: 'white', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem', fontWeight: '800' }}>
              START SIMPLIFYING YOUR <br />
              PAYMENT INFRASTRUCTURE
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            A unified, reliable platform that gives your team control, speed, and confidence.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-payu-primary" style={{ background: 'white', color: 'var(--primary)', padding: '0.9rem 2.5rem', borderRadius: '12px', fontSize: '1rem' }}>
              Get Started Now
            </button>
            <button className="btn-payu-secondary" style={{ background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '0.9rem 2.5rem', borderRadius: '12px', fontSize: '1rem' }}>
              Book a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
