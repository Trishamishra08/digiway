import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../../assets/Digiway Sample 1.png';
import worldNetworkImg from '../../assets/world-network-new.png';

const Footer = () => {
  return (
    <footer id="main-footer" style={{ 
      padding: '40px 0 20px', 
      background: '#ffffff', // Changed to white background
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(0,0,0,0.05)' // Dark subtle border
    }}>
      {/* World Map Background */}
      <div style={{
        position: 'absolute',
        top: '0', 
        left: '0',
        width: '100%', 
        height: '100%',
        // Dotted map image overlay (using the existing network map but inverted for light mode)
        backgroundImage: `url(${worldNetworkImg})`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        filter: 'invert(1) grayscale(1) contrast(1.2)', 
        opacity: 0.15, // Increased slightly from 0.08 to 0.15 so the map is clearly visible
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}
        >
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '1.5rem' }}>
              <img src={logoImg} alt="Digiway Logo" style={{ height: '40px', objectFit: 'contain' }} /> {/* Removed white filter for light bg */}
            </div>
            <p style={{ maxWidth: '240px', marginBottom: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}> {/* Darker text */}
              India's leading payment solution provider. Unified, reliable, and secure infrastructure for all your business needs.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '800', opacity: 0.7 }}>𝕏</a>
              <a href="#" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '800', opacity: 0.7 }}>in</a>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.2rem', fontSize: '0.9rem', color: '#1a1a1a', fontWeight: '800' }}>Products</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Payment Gateway</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Digiway Payouts</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Corporate Cards</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Affordability</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.2rem', fontSize: '0.9rem', color: '#1a1a1a', fontWeight: '800' }}>Industries</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>E-commerce</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Education</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>BFSI</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Retail</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.2rem', fontSize: '0.9rem', color: '#1a1a1a', fontWeight: '800' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Terms of Use</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Developer Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.2rem', fontSize: '0.9rem', color: '#1a1a1a', fontWeight: '800' }}>Support</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Help Center</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Contact Sales</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Bug Bounty</a></li>
            </ul>
          </div>
        </motion.div>
        
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <p>© 2026 Digiway. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
