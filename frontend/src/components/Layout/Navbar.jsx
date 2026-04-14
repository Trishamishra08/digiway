import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/Digiway Sample 1.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const productsMenu = [
    { title: 'Payment Gateway (Pay-In)', link: '#' },
    { title: 'Payout API', link: '#' }
  ];

  const solutionsMenu = [
    { title: 'For Startups', link: '#' },
    { title: 'For Enterprises', link: '#' },
    { title: 'For E-commerce', link: '#' }
  ];

  const developersMenu = [
    { title: 'API Documentation', link: '#' },
    { title: 'Integration Guide', link: '#' },
    { title: 'SDKs', link: '#' }
  ];

  const resourcesMenu = [
    { title: 'Blog', link: '#' },
    { title: 'Case Studies', link: '#' },
    { title: 'FAQs', link: '#' }
  ];

  const companyMenu = [
    { title: 'About Us', link: '#' },
    { title: 'Contact Us', link: '#' },
    { title: 'Careers', link: '#' }
  ];

  const legalMenu = [
    { title: 'Privacy Policy', link: '#' },
    { title: 'Terms & Conditions', link: '#' },
    { title: 'Refund Policy', link: '#' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ 
        background: 'white', 
        borderBottom: '1px solid #f1f5f9',
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 1000,
        padding: '0.5rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', maxWidth: '1400px' }}>
        {/* Left: Logo */}
        <div className="logo" style={{ flex: '0 0 260px', paddingLeft: '30px' }}>
          <img src={logoImg} alt="Digiway Logo" style={{ height: '38px', objectFit: 'contain', transform: 'scale(1.2)', transformOrigin: 'left center' }} />
        </div>

        {/* Center: Navigation Links */}
        <div style={{ flex: '1 1 auto', display: 'flex', justifyContent: 'center' }}>
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {[
              { label: 'Products', items: productsMenu },
              { label: 'Solutions', items: solutionsMenu },
              { label: 'Developers', items: developersMenu },
              { label: 'Pricing', items: null },
              { label: 'Resources', items: resourcesMenu },
              { label: 'Company', items: companyMenu },
              { label: 'Legal', items: legalMenu }
            ].map((item) => (
              <li 
                key={item.label} 
                className="nav-item" 
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a href="#" style={{ 
                  textDecoration: 'none', 
                  color: 'var(--nav-text)', 
                  fontSize: '0.85rem', 
                  fontWeight: '600', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '4px',
                  fontFamily: 'var(--font-body)',
                  padding: '0.8rem 0'
                }}>
                  {item.label} {item.items && <ChevronDown size={14} />}
                </a>

                {/* Dropdown Menu */}
                {activeMenu === item.label && item.items && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '0',
                      background: 'white',
                      boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
                      border: '1px solid #f1f5f9',
                      borderRadius: '8px',
                      padding: '0.8rem',
                      width: '220px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.2rem',
                      zIndex: 2000,
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    {item.items.map((subItem, idx) => (
                      <a 
                        key={idx}
                        href={subItem.link}
                        style={{
                          textDecoration: 'none',
                          display: 'block',
                          padding: '0.6rem 0.8rem',
                          borderRadius: '6px',
                          transition: 'background 0.2s',
                          fontFamily: 'var(--font-body)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <div style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: '500', fontFamily: 'var(--font-body)' }}>
                          {subItem.title}
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Actions */}
        <div style={{ flex: '0 0 320px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.8rem' }}>
          <button className="btn-payu-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Login <ArrowRight size={16} />
          </button>
          <button className="btn-payu-pill-dark">
            Sign Up <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
