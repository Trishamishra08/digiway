import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/InShot_20260407_185040017.mp4';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const whatsNew = [
    { title: 'Digiway Startup Program', desc: 'Powering Founders, Fuelling Growth', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100' },
    { title: 'D2C Solutions', desc: 'All-In-One Solution for Checkout, Payments and RTO', img: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=100' },
    { title: 'WhatsApp for Business', desc: 'Grow your business on WhatsApp with Digiway', img: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=100' }
  ];

  return (
    <section id="hero" style={{ paddingTop: '80px', paddingBottom: '40px', background: 'var(--bg-page)', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.1fr 0.7fr', gap: '3rem', alignItems: 'center' }}>
        
        {/* Left: Paywize Content + PayU Serif Font Style */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', zIndex: 10, marginTop: '-20px' }}
        >
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', opacity: 0.7, fontWeight: '700', fontSize: '0.75rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
             <span>Manage my finances</span>
             <span style={{ color: '#e2e8f0' }}>|</span>
             <span>Accept Payments</span>
          </div>
          
          <h1 className="paywize-heading" style={{ marginBottom: '2.5rem' }}>
            Banking reimagined.<br />
            For a connected<br />
            financial world.
          </h1>
          
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '3.5rem', maxWidth: '500px', lineHeight: '1.6', fontWeight: '400', fontStyle: 'normal' }}>
            Payment solutions built to work <br />
            for <span style={{ fontStyle: 'italic', color: 'var(--text-main)' }}>your business</span>
          </p>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn-payu-primary" style={{ padding: '1rem 2.8rem', fontSize: '1rem' }}>
              Get Started
            </button>
            <button className="btn-payu-secondary" style={{ padding: '1rem 2.8rem', fontSize: '1rem' }}>
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* Center: Video Circle visual from PayU */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 10, x: 15 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 5 }}
        >
          {/* Main Backdrop Circle */}
          <div style={{ 
            width: '440px', 
            height: '440px', 
            background: 'var(--primary-light)', 
            borderRadius: '50%', 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            opacity: 0.6,
            zIndex: 1
          }}></div>
          
          {/* Video Container (Circular Frame) */}
          <div style={{ 
            width: '320px', 
            height: '320px', 
            borderRadius: '50%', 
            overflow: 'hidden', 
            position: 'relative', 
            zIndex: 2,
            boxShadow: '0 40px 80px rgba(0,0,0,0.15)',
            border: '8px solid white'
          }}>
            <video 
              src={heroVideo}
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          
          {/* Decorative lines */}
          <svg style={{ position: 'absolute', top: '20%', right: '-30%', width: '400px', height: '200px', zIndex: 0, opacity: 0.3 }}>
            <path d="M0,100 Q100,20 200,100 T400,100" fill="none" stroke="var(--primary)" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </motion.div>

        {/* Right: What's New Sidebar from PayU */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ paddingLeft: '2rem', marginTop: '-40px' }}
        >
          <h4 style={{ fontWeight: '800', fontSize: '1rem', marginBottom: '1.2rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>What's New</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {whatsNew.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', cursor: 'pointer' }}>
                <img src={item.img} alt={item.title} style={{ width: '64px', height: '64px', borderRadius: '16px', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                   <h5 style={{ fontSize: '0.68rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-heading)', letterSpacing: '0.04em' }}>{item.title}</h5>
                   <p style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-main)', lineHeight: '1.3', fontFamily: 'var(--font-body)', letterSpacing: '-0.01em' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Small feature card */}
          <div style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '14px', background: 'white', padding: '12px', borderRadius: '16px', border: '1px solid #f1f5f9', boxShadow: '0 10px 20px rgba(0,0,0,0.03)' }}>
             <div style={{ width: '44px', height: '44px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
               📱
             </div>
             <div style={{ fontSize: '0.85rem' }}>
                <strong style={{ fontWeight: '700', color: 'var(--text-main)', fontFamily: 'var(--font-heading)', display: 'block' }}>Grow on WhatsApp</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: '500', fontFamily: 'var(--font-body)' }}>Learn more with Digiway</p>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
