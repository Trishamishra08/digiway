import React, { useState } from 'react';
import { ChevronDown, Menu, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/Digiway Sample 1.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const productsMenu = [
    { title: 'Accept Payments', desc: 'For all online platforms', icon: '💰' },
    { title: 'Manage Payments', desc: 'From a single dashboard', icon: '📊' },
    { title: 'UPI Payments', desc: "India's most complete stack", icon: '📱' },
    { title: 'Affordable Payments', desc: 'Enable EMIs, BNPL & offers', icon: '🛡️' },
    { title: 'AI Solutions', desc: 'Next phase of commerce', icon: '🤖' }
  ];

  const companyMenu = [
    { title: 'About Digiway', link: '#' },
    { title: 'Board of Directors', link: '#' },
    { title: 'Leadership Team', link: '#' },
    { title: 'Careers', link: '#' },
    { title: 'Security', link: '#' }
  ];

  return (
    <nav style={{ 
      background: 'white', 
      borderBottom: '1px solid #f1f5f9',
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      zIndex: 1000,
      padding: '0.8rem 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', maxWidth: '1400px' }}>
        {/* Left: Logo */}
        <div className="logo" style={{ flex: '0 0 250px' }}>
          <img src={logoImg} alt="Digiway Logo" style={{ height: '36px', objectFit: 'contain' }} />
        </div>

        {/* Center: Navigation Links */}
        <div style={{ flex: '1 1 auto', display: 'flex', justifyContent: 'center' }}>
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {['Products', 'Solutions', 'Company', 'Resources', 'Contact Us'].map((item) => (
              <li key={item} className="nav-item" style={{ position: 'relative' }}>
                <a href="#" style={{ 
                  textDecoration: 'none', 
                  color: 'var(--nav-text)', 
                  fontSize: '0.85rem', 
                  fontWeight: '600', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '4px',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {item} {(item !== 'Contact Us' && item !== 'Resources') && <ChevronDown size={14} />}
                </a>
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
    </nav>
  );
};

export default Navbar;
