import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../../assets/Digiway Sample 1.png';
import worldNetworkImg from '../../assets/world-network-new.png';

const Footer = () => {
  return (
    <footer id="main-footer" style={{ 
      padding: '40px 0 20px', 
      background: '#050505', 
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.05)' 
    }}>
      {/* World Map Background */}
      <div style={{
        position: 'absolute',
        top: '0', 
        left: '0',
        width: '100%', 
        height: '100%',
        backgroundImage: `url(${worldNetworkImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.15,
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
              <img src={logoImg} alt="Digiway Logo" style={{ height: '40px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p style={{ maxWidth: '240px', marginBottom: '2rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
              India's leading payment solution provider. Unified, reliable, and secure infrastructure for all your business needs.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ textDecoration: 'none', color: 'white', fontWeight: '800', opacity: 0.6 }}>𝕏</a>
              <a href="#" style={{ textDecoration: 'none', color: 'white', fontWeight: '800', opacity: 0.6 }}>in</a>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.2rem', fontSize: '0.9rem', color: 'white' }}>Products</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>Payment Gateway</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>Digiway Payouts</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>Corporate Cards</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>Affordability</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.2rem', fontSize: '0.9rem', color: 'white' }}>Industries</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>E-commerce</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>Education</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>BFSI</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>Retail</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.2rem', fontSize: '0.9rem', color: 'white' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>Terms of Use</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>Developer Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.2rem', fontSize: '0.9rem', color: 'white' }}>Support</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>Help Center</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>Contact Sales</a></li>
              <li><a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)' }}>Bug Bounty</a></li>
            </ul>
          </div>
        </motion.div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
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
