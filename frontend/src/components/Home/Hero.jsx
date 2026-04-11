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
    <section id="hero" style={{ paddingTop: '30px', paddingBottom: '120px', background: '#dff1f0', overflow: 'hidden', position: 'relative' }}>
      {/* PayU inspired Thread Animation */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <motion.path 
          d="M 500,400 Q 700,450 900,300 T 1300,400" 
          fill="none" 
          stroke="var(--primary)" 
          strokeWidth="1.5"
          strokeDasharray="1000"
          initial={{ strokeDashoffset: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          opacity="0.2"
        />
        <motion.path 
          d="M 400,300 Q 200,500 0,400" 
          fill="none" 
          stroke="var(--primary)" 
          strokeWidth="1.5"
          strokeDasharray="1000"
          initial={{ strokeDashoffset: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          opacity="0.1"
        />
      </svg>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.8fr', gap: '2rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        
        {/* Left: Paywize Content + PayU Serif Font Style */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', zIndex: 10, marginTop: '50px' }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem', opacity: 0.9, fontWeight: '800', fontSize: '0.65rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.12em' }}
          >
             <span>Manage my finances</span>
             <span style={{ color: 'rgba(0,0,0,0.1)' }}>|</span>
             <span>Accept Payments</span>
          </motion.div>
          
          <h1 className="paywize-heading" style={{ marginBottom: '1.2rem', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: '1.1' }}>
            {["Banking reimagined.", "For a connected", "financial world."].map((line, i) => (
              <div key={i} style={{ overflow: 'hidden' }}>
                <motion.span 
                  style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
                  initial={{ y: "100%", filter: 'blur(10px)', opacity: 0 }}
                  animate={{ y: 0, filter: 'blur(0px)', opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.4 + (i * 0.15), ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            style={{ marginTop: '2rem' }}
          >
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '400px', lineHeight: '1.5', fontWeight: '500' }}>
              Payment solutions built to work <br />
              for <span style={{ fontStyle: 'italic', color: 'var(--text-main)', fontWeight: '700' }}>your business</span>
            </p>
            
            <div style={{ display: 'flex', gap: '0.7rem' }}>
              <button className="btn-payu-primary" style={{ padding: '0.7rem 2rem', fontSize: '0.85rem' }}>
                Get Started
              </button>
              <button className="btn-payu-secondary" style={{ padding: '0.7rem 2rem', fontSize: '0.85rem' }}>
                Contact Us
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Center: Video Circle - Now Properly Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 5, marginTop: '80px' }}
        >
          {/* Main Backdrop Circle with Pulse Animation */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ 
              width: '420px', 
              height: '420px', 
              background: 'white', 
              borderRadius: '50%', 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              opacity: 0.4,
              zIndex: 1
            }}
          ></motion.div>
          
          {/* Video Container (Circular Frame) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            style={{ 
              width: '300px', 
              height: '300px', 
              borderRadius: '50%', 
              overflow: 'hidden', 
              position: 'relative', 
              zIndex: 2,
              boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
              border: '6px solid white'
            }}
          >
            <video 
              src={heroVideo}
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>

          {/* PayU Thread visual element */}
          <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', pointerEvents: 'none' }}>
              <motion.circle 
                cx="300" cy="300" r="220" 
                fill="none" 
                stroke="var(--primary)" 
                strokeWidth="0.5" 
                strokeDasharray="5,10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
          </svg>
        </motion.div>

        {/* Right: What's New Sidebar from PayU */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ paddingLeft: '2rem', marginTop: '100px' }}
        >
          <h4 style={{ fontWeight: '800', fontSize: '0.9rem', marginBottom: '1.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>What's New</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {whatsNew.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + (i * 0.1) }}
                whileHover={{ x: 5 }}
                style={{ display: 'flex', gap: '1rem', alignItems: 'center', cursor: 'pointer' }}
              >
                <img src={item.img} alt={item.title} style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                   <h5 style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '2px', textTransform: 'uppercase', fontFamily: 'var(--font-heading)', letterSpacing: '0.04em' }}>{item.title}</h5>
                   <p style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--text-main)', lineHeight: '1.2', fontFamily: 'var(--font-body)', letterSpacing: '-0.01em' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Small feature card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '12px', background: 'white', padding: '10px', borderRadius: '12px', border: '1px solid #f1f5f9', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}
          >
             <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
               📱
             </div>
             <div style={{ fontSize: '0.8rem' }}>
                <strong style={{ fontWeight: '700', color: 'var(--text-main)', fontFamily: 'var(--font-heading)', display: 'block' }}>Grow on WhatsApp</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: '500', fontFamily: 'var(--font-body)' }}>Learn more with Digiway</p>
             </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
