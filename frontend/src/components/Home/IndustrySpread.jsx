import React from 'react';
import { motion } from 'framer-motion';

const IndustrySpread = () => {
  const industries = [
    { title: 'Retail', desc: 'Unified collection for physical stores and outlets.', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500' },
    { title: 'Service', desc: 'Manage vendor payouts and client billing seamlessly.', img: 'https://images.unsplash.com/photo-1454165833772-d99628a5ffef?w=500' },
    { title: 'E-Commerce', desc: 'High-speed collections and instant refunds.', img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c02?w=500' },
    { title: 'Export', desc: 'Handle international payments and trade compliance.', img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500' }
  ];

  return (
    <section id="industry" style={{ padding: '100px 0', background: 'var(--bg-page)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.04em' }}
          >
            ONE SOLUTION FOR EVERY BUSINESS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}
          >
            Tailored fintech infrastructure for your Industry Spread.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: '32px', height: '400px', cursor: 'pointer' }}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'flex-end', 
                padding: '2rem',
                color: 'white'
              }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySpread;
