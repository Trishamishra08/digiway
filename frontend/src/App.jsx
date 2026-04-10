import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Home/Hero';
import Brands from './components/Home/Brands';
import FinancialOS from './components/Home/FinancialOS';
import IndustrySpread from './components/Home/IndustrySpread';
import AIAssistant from './components/Home/AIAssistant';
import StickyFeatures from './components/Home/StickyFeatures';
import Security from './components/Home/Security';
import CTA from './components/Home/CTA';

function App() {
  return (
    <div className="app-wrapper" style={{ background: 'var(--bg-page)' }}>
      <Navbar />
      <Hero />
      <Brands />
      
      {/* Rest of sections following the hybrid aesthetic */}
      <FinancialOS />
      <IndustrySpread />
      <AIAssistant />
      <StickyFeatures />
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
          background: 'var(--primary)', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          boxShadow: '0 10px 25px rgba(0, 171, 132, 0.4)',
          cursor: 'pointer',
          zIndex: 1000,
          color: 'white',
          fontSize: '1.5rem'
        }}
      >
        💬
      </div>
      <Footer />
    </div>
  );
}

export default App;
