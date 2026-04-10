import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const StickyFeatures = () => {
  const [activeFeature, setActiveFeature] = useState('recon');
  
  const features = [
    { id: 'recon', label: 'Auto-Reconciliation', title: 'Seamless Auto-Reconciliation', desc: 'Digiway reconciles every transaction in real-time across multiple bank accounts.' },
    { id: 'cards', label: 'Corporate Cards', title: 'Smart Corporate Cards', desc: 'Issue physics and virtual cards to your team with built-in spend limits.' },
    { id: 'bbps', label: 'Bill Payments', title: 'Consolidated Bill Payments', desc: 'Pay 100+ billers in one place. Schedule and track recurring payments.' },
    { id: 'tax', label: 'Tax Automation', title: 'Frictionless Tax Compliance', desc: 'Automate GST/TDS categorization and reconcile filing in minutes.' }
  ];

  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveFeature(entry.target.id);
        }
      });
    }, { threshold: 0.6 });

    features.forEach(f => {
      const el = document.getElementById(f.id);
      if (el) observer.current.observe(el);
    });

    return () => observer.current.disconnect();
  }, []);

  return (
    <section id="features" style={{ padding: '80px 0', background: '#fcfcfc' }}>
      <div className="container">
        <div style={{ marginBottom: '60px' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>TRUST BUILT INTO THE <span style={{ color: 'var(--primary)' }}>ARCHITECTURE</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '4rem' }}>
          {/* Sticky Sidebar */}
          <div style={{ position: 'sticky', top: '120px', alignSelf: 'start', height: 'fit-content' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {features.map(f => (
                <li 
                  key={f.id} 
                  style={{ opacity: activeFeature === f.id ? 1 : 0.4, transition: 'all 0.3s ease' }}
                >
                  <a 
                    href={`#${f.id}`} 
                    style={{ 
                        textDecoration: 'none', 
                        color: activeFeature === f.id ? 'var(--text-main)' : 'var(--text-muted)',
                        fontSize: '1rem',
                        fontWeight: '700',
                        display: 'block',
                        paddingBottom: '0.4rem',
                        borderBottom: `2px solid ${activeFeature === f.id ? 'var(--primary)' : 'transparent'}`,
                        transition: 'all 0.3s ease'
                    }}
                  >
                    {f.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Scrolling Content */}
          <div style={{ paddingBottom: '10vh' }}>
            {features.map(f => (
              <div key={f.id} id={f.id} style={{ marginBottom: '80px', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{f.title}</h3>
                  <p style={{ fontSize: '1rem', lineHeight: '1.5', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '550px' }}>
                    {f.desc}
                  </p>
                  <div style={{ padding: '3rem', background: 'var(--primary-light)', borderRadius: '24px', border: '1px solid rgba(0, 171, 132, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ fontSize: '4rem' }}>
                        {f.id === 'recon' ? '⚡' : f.id === 'cards' ? '💳' : f.id === 'bbps' ? '🧾' : '⚖️'}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyFeatures;
