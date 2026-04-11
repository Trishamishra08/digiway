import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/Digiway Sample 1.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const productsMenu = [
    { title: 'Connected Banking', desc: 'Connect 30+ banks via API', icon: '🏦' },
    { title: 'Bulk Payouts', desc: 'Disburse funds via NEFT, RTGS', icon: '💸' },
    { title: 'Auto Reconciliation', desc: 'AI-powered matching with 99%+', icon: '🔄' },
    { title: 'Corporate Cards', desc: 'Issue physical or virtual cards', icon: '💳' },
    { title: 'UPI Collection', desc: 'Accept payments via UPI Collect', icon: '📱' },
    { title: 'Tax Automation', desc: 'Automate GST/TDS categorization', icon: '📜' }
  ];

  const solutionsMenu = [
    { title: 'E-commerce & Marketplaces', desc: 'Split payments, seller payouts', icon: '🛒' },
    { title: 'Logistics & Supply Chain', desc: 'Bulk driver payouts, fuel cards', icon: '🚚' },
    { title: 'SaaS & Technology', desc: 'Subscription tracking, smart billing', icon: '💻' },
    { title: 'Manufacturing & Trading', desc: 'Vendor payments, invoice matching', icon: '🏭' },
    { title: 'Retail & Restaurant Chains', desc: 'Store-level tracking, POS', icon: '🏠' },
    { title: 'Real Estate & Construction', desc: 'Unit-wise collections', icon: '🏗️' }
  ];

  const companyMenu = [
    { title: 'About', link: '#' },
    { title: 'Team', link: '#' },
    { title: 'Careers', link: '#' },
    { title: 'Partners', link: '#' },
    { title: 'Press', link: '#' }
  ];

  const resourcesMenu = [
    { title: 'Case Studies', link: '#' },
    { title: 'Blog', link: '#' },
    { title: 'FAQ', link: '#' },
    { title: 'API Docs', link: '#' }
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
        padding: '0.8rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', maxWidth: '1400px' }}>
        {/* Left: Logo */}
        <div className="logo" style={{ flex: '0 0 250px' }}>
          <img src={logoImg} alt="Digiway Logo" style={{ height: '36px', objectFit: 'contain' }} />
        </div>

        {/* Center: Navigation Links */}
        <div style={{ flex: '1 1 auto', display: 'flex', justifyContent: 'center' }}>
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {[
              { label: 'Products', items: productsMenu },
              { label: 'Solutions', items: solutionsMenu },
              { label: 'Company', items: companyMenu },
              { label: 'Resources', items: resourcesMenu },
              { label: 'Contact Us', items: null }
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
                  padding: '1rem 0'
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
                      left: item.label === 'Products' || item.label === 'Solutions' ? '-100px' : '0',
                      background: 'white',
                      boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
                      border: '1px solid #f1f5f9',
                      borderRadius: '8px',
                      padding: '1.5rem',
                      width: item.label === 'Products' || item.label === 'Solutions' ? '600px' : '200px',
                      display: 'grid',
                      gridTemplateColumns: item.label === 'Products' || item.label === 'Solutions' ? '1fr 1fr' : '1fr',
                      gap: '0.8rem',
                      zIndex: 2000,
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    {item.items.map((subItem, idx) => (
                      <a 
                        key={idx}
                        href="#"
                        style={{
                          textDecoration: 'none',
                          display: 'block',
                          padding: '10px 12px',
                          borderRadius: '6px',
                          transition: 'background 0.2s',
                          fontFamily: 'var(--font-body)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <div style={{ color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: '800', marginBottom: '4px', fontFamily: 'var(--font-body)' }}>
                          {subItem.title}
                        </div>
                        {subItem.desc && (
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: '1.4', fontFamily: 'var(--font-body)' }}>
                            {subItem.desc}
                          </div>
                        )}
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
            Sign In <ArrowRight size={16} />
          </button>
          <button className="btn-payu-pill-dark">
            Get Started <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
