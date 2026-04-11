import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../../assets/Digiway Sample 1.png';

const Footer = () => {
  return (
    <footer id="main-footer" style={{ padding: '80px 0 40px', background: '#fff', borderTop: '1px solid #f1f5f9' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: '2rem', marginBottom: '5rem' }}
        >
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '1.5rem' }}>
              <img src={logoImg} alt="Digiway Logo" style={{ height: '40px', objectFit: 'contain' }} />
            </div>
            <p style={{ maxWidth: '240px', marginBottom: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              India's leading payment solution provider. Unified, reliable, and secure infrastructure for all your business needs.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: '800', opacity: 0.6 }}>𝕏</a>
              <a href="#" style={{ textDecoration: 'none', color: 'var(--dark)', fontWeight: '800', opacity: 0.6 }}>in</a>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.2rem', fontSize: '0.9rem', color: 'var(--dark)' }}>Products</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Payment Gateway</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Digiway Payouts</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Corporate Cards</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Affordability</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.2rem', fontSize: '0.9rem', color: 'var(--dark)' }}>Industries</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>E-commerce</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Education</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>BFSI</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Retail</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.2rem', fontSize: '0.9rem', color: 'var(--dark)' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Terms of Use</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Developer Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.2rem', fontSize: '0.9rem', color: 'var(--dark)' }}>Support</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Help Center</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Contact Sales</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Bug Bounty</a></li>
            </ul>
          </div>
        </motion.div>
        
        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <p>© 2026 Digiway. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
