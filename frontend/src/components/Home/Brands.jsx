import React from 'react';
import { motion } from 'framer-motion';
import merchantVideo from '../../assets/InShot_20260409_195805386.mp4';

const Brands = () => {
  const bankLogos = [
    { name: 'SHIVALIK', sub: 'SHIVALIK MERCANTILE BANK' },
    { name: 'PaySprint', sub: 'FINTECH AS A SERVICE' },
    { name: 'SOUTH INDIAN Bank', sub: 'Experience Next Generation Banking' },
    { name: 'CSB Bank', sub: '' }
  ];

  return (
    <section id="brands" style={{ padding: '60px 0 20px 0', background: 'white' }}>
      <div className="container">
        {/* Dashboard Mockup (Matching Image 1) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            background: '#f0fdfa', 
            borderRadius: '24px', 
            padding: '2rem 2rem', 
            boxShadow: '0 30px 100px rgba(0,0,0,0.03)',
            border: '1px solid #ccfbf1',
            marginBottom: '30px',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '480px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Mockup Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #ccfbf1', paddingBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '32px', height: '32px', background: '#4F46E5', borderRadius: '8px' }}></div>
                <div style={{ fontSize: '1rem', fontWeight: '700', color: '#1e293b' }}>Connected Banking • <span style={{ opacity: 0.5 }}>Sunday, Mar 04</span></div>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ height: '32px', width: '220px', background: 'white', borderRadius: '20px', border: '1px solid #ccfbf1' }}></div>
                <div style={{ width: '32px', height: '32px', background: 'white', borderRadius: '50%', border: '1px solid #ccfbf1' }}></div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem', alignItems: 'start' }}>
            
            {/* Left: Mockup Content - Balance Cards */}
            <div>
               <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Balance & Status <span style={{ width: '12px', height: '12px', border: '1px solid #cbd5e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px' }}>i</span>
               </div>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  {[
                    { label: 'All Banks • 6 Banks', amount: '₹ *****' },
                    { label: 'Wallet Balance **** 9489', amount: '₹ *****' },
                    { label: 'Shivalik Bank **** 9489', amount: '₹ *****', primary: true }
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '1.2rem', background: 'white', borderRadius: '16px', border: '1px solid #ccfbf1', position: 'relative', boxShadow: '0 8px 24px rgba(0,0,0,0.02)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#94a3b8', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '16px', height: '16px', background: '#f0fdfa', borderRadius: '4px' }}></div>
                          {item.label}
                      </div>
                      <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1e293b', letterSpacing: '0.05em' }}>{item.amount}</div>
                      {item.primary && <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#4F46E5', color: 'white', fontSize: '9px', fontWeight: '700', padding: '2px 8px', borderRadius: '10px' }}>Primary</div>}
                    </div>
                  ))}
               </div>
            </div>

            {/* Right: New Compact Video Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ 
                background: '#1e293b', 
                borderRadius: '20px', 
                padding: '1rem', 
                border: '1px solid rgba(255,255,255,0.1)',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ padding: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                    <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#fff' }}>Merchant Growth</div>
                 </div>
                 <div style={{ display: 'flex', gap: '6px', alignItems: 'center', background: 'rgba(239, 68, 68, 0.15)', padding: '3px 10px', borderRadius: '12px' }}>
                    <motion.div 
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{ width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%' }}
                    ></motion.div>
                    <div style={{ fontSize: '0.65rem', fontWeight: '900', color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Live</div>
                 </div>
              </div>

              <div style={{ 
                width: '100%', 
                height: '200px', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                position: 'relative',
                background: '#000',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <video 
                  src={merchantVideo}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                />
                {/* Visual Overlay */}
                <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '5px' }}>
                    <div style={{ width: '6px', height: '6px', background: 'rgba(255,255,255,0.3)', borderRadius: '1px' }}></div>
                    <div style={{ width: '6px', height: '6px', background: 'rgba(255,255,255,0.3)', borderRadius: '1px' }}></div>
                </div>
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', padding: '4px 8px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '0.6rem', color: 'white', fontWeight: '700', textTransform: 'uppercase' }}>Merchant #9482</span>
                </div>
              </div>

              <div style={{ marginTop: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.7rem' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                    </div>
                    <div style={{ fontSize: '0.7rem', fontWeight: '600', color: 'rgba(255,255,255,0.6)' }}>
                        Success rate: <span style={{ color: '#22c55e', fontWeight: '800' }}>99.8%</span>
                    </div>
                 </div>
                 <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: '600' }}>Vol: 4.2k</div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
