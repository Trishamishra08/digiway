import React from 'react';
import { motion } from 'framer-motion';
import merchantVideo from '../../assets/InShot_20260409_195805386.mp4';

const Brands = () => {
  return (
    <section id="brands" style={{ padding: '60px 0 20px 0', background: 'white' }}>
      <div className="container">
        {/* Dashboard Mockup - Re-purposed as Pay-IN Options */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            background: '#f8fbf9', 
            borderRadius: '24px', 
            padding: '2rem 2rem', 
            boxShadow: '0 30px 100px rgba(0,0,0,0.03)',
            border: '1px solid #e2e8f0',
            marginBottom: '30px',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '480px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Mockup Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '32px', height: '32px', background: '#00AB84', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>₹</div>
                <div style={{ fontSize: '1rem', fontWeight: '700', color: '#1e293b' }}>Pay-in Dashboard • <span style={{ opacity: 0.5 }}>Active Gateway Status</span></div>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ height: '32px', width: '220px', background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0' }}></div>
                <div style={{ width: '32px', height: '32px', background: 'white', borderRadius: '50%', border: '1px solid #e2e8f0' }}></div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem', alignItems: 'start' }}>
            
            {/* Left: Mockup Content - Pay In Providers */}
            <div>
               <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Connected Aggregators & Gateways <span style={{ width: '12px', height: '12px', border: '1px solid #cbd5e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px' }}>i</span>
               </div>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  {[
                    { label: 'NSDL Payments', code: 'PRIMARY API', icon: '🏦', color: '#4F46E5', status: 'Active' },
                    { label: 'Razorpay', code: 'SMART ROUTED', icon: '⚡', color: '#2563EB', status: 'Active' },
                    { label: 'CCAvenue', code: 'FALLBACK API', icon: '💳', color: '#DC2626', status: 'Standby' }
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '1.2rem', background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', position: 'relative', boxShadow: '0 8px 24px rgba(0,0,0,0.02)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#94a3b8', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '20px', height: '20px', background: '#f8fafc', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: item.color }}>{item.icon}</div>
                          {item.label}
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: '800', color: '#1e293b', letterSpacing: '0.02em' }}>{item.code}</div>
                      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: '700', color: item.status === 'Active' ? '#22c55e' : '#f59e0b' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.status === 'Active' ? '#22c55e' : '#f59e0b' }}></span>
                          {item.status}
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Right: Live Collections Video Card */}
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
                    <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#fff' }}>Live Collections</div>
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
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', padding: '4px 8px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '0.6rem', color: 'white', fontWeight: '700', textTransform: 'uppercase' }}>Gateway Routing</span>
                </div>
              </div>

              <div style={{ marginTop: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.7rem' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                    </div>
                    <div style={{ fontSize: '0.7rem', fontWeight: '600', color: 'rgba(255,255,255,0.6)' }}>
                        Success rate: <span style={{ color: '#22c55e', fontWeight: '800' }}>99.9%</span>
                    </div>
                 </div>
                 <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: '600' }}>Vol: 18.2k</div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
