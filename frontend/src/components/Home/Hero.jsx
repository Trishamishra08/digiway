import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/InShot_20260409_195805386.mp4';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={{ paddingTop: '90px', paddingBottom: '60px', background: '#dff1f0', overflow: 'hidden', position: 'relative' }}>
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

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1.5rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        
        {/* Left: Paywize Content + PayU Serif Font Style */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', zIndex: 10, marginTop: '20px' }}
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
          
          <h1 className="paywize-heading" style={{ marginBottom: '1.2rem', fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', lineHeight: '1.15', color: '#1a1a1a', fontWeight: '900', fontFamily: 'var(--font-heading)' }}>
            {[
              "Banking reimagined.",
              "For a connected",
              "financial world."
            ].map((line, i) => (
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
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 5, marginTop: '30px' }}
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
          
          <div style={{ position: 'relative', width: '310px', height: '310px', zIndex: 2 }}>
            {/* Video Container (Circular Frame) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              style={{ 
                width: '100%', 
                height: '100%', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                position: 'relative', 
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

            {/* Creative Floating Elements */}
            <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               style={{ position: 'absolute', top: '40px', right: '-60px', zIndex: 10, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', padding: '10px 18px', borderRadius: '14px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(255,255,255,1)', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
               <div style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></div>
               <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-main)' }}>99.99% Uptime</span>
            </motion.div>

            <motion.div
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
               style={{ position: 'absolute', bottom: '40px', left: '-80px', zIndex: 10, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', padding: '10px 16px', borderRadius: '14px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(255,255,255,1)', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
               <div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '1px' }}>Processing Speed</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>&lt; 200ms</div>
               </div>
            </motion.div>
          </div>

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

        {/* Right: What's New Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            position: 'relative', 
            zIndex: 10, 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.2rem', 
            paddingLeft: '4rem', // Shifted further right
            fontFamily: '"Open Sans", sans-serif' // Applied Open Sans
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#000' }}>What's New</h3>
          </div>
          
          <motion.div whileHover={{ x: 5 }} style={{ display: 'flex', gap: '1rem', alignItems: 'center', cursor: 'pointer' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '12px', flexShrink: 0, overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Startup" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.85rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '0.2rem', lineHeight: '1.2' }}>Digiway Startup Program</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.3' }}>Powering Founders, Fuelling Growth</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ x: 5 }} style={{ display: 'flex', gap: '1rem', alignItems: 'center', cursor: 'pointer' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '12px', flexShrink: 0, overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="E-commerce" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.85rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '0.2rem', lineHeight: '1.2' }}>Products for D2C &amp; E-commerce</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.3' }}>All-In-One Solution for Checkout &amp; Payments</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ x: 5 }} style={{ display: 'flex', gap: '1rem', alignItems: 'center', cursor: 'pointer' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '12px', flexShrink: 0, overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="WhatsApp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.85rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '0.2rem', lineHeight: '1.2' }}>Grow your business on WhatsApp</h4>
            </div>
          </motion.div>

          <a href="#" style={{ fontSize: '0.75rem', fontWeight: '800', color: '#1a1a1a', textTransform: 'uppercase', textDecoration: 'none', marginTop: '0.5rem', display: 'inline-block', letterSpacing: '0.5px' }}>
            EXPLORE MORE AT BLOGS &gt;
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
