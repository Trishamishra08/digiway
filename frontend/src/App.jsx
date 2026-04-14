import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Home/Hero';
import MainFeatures from './components/Home/MainFeatures';
import FinancialOS from './components/Home/FinancialOS';
import IndustrySpread from './components/Home/IndustrySpread';
import DeveloperAPI from './components/Home/DeveloperAPI';
import Security from './components/Home/Security';
import CTA from './components/Home/CTA';

function App() {
  return (
    <div className="app-wrapper" style={{ background: 'var(--bg-page)' }}>
      <Navbar />
      <Hero />
      <MainFeatures />
      
      {/* Rest of sections following the hybrid aesthetic */}
      <FinancialOS />

      <IndustrySpread />
      <DeveloperAPI />
      <Security />
      <CTA />
      
      {/* Floating Action Button */}
      <div 
        style={{ 
          position: 'fixed', 
          bottom: '30px', 
          right: '30px', 
          width: '60px', 
          height: '60px', 
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          boxShadow: '0 10px 25px rgba(37, 99, 235, 0.35)',
          cursor: 'pointer',
          zIndex: 1000,
          color: 'white',
          fontSize: '1.5rem',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        💬
      </div>
      <Footer />
    </div>
  );
}

export default App;
