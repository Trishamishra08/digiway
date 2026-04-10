import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, Zap, Layers } from 'lucide-react';

const GrowthSection = () => {
  const features = [
    { title: 'Manage your money, your way', icon: <Zap size={20} /> },
    { title: 'Insights to power your business', icon: <BarChart3 size={20} /> },
    { title: 'Easy integrations to go live', icon: <Layers size={20} /> },
    { title: 'Total flexibility in modes', icon: <PieChart size={20} /> }
  ];

  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-page)', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', fontWeight: '800' }}>
            Unlock access to limitless <br />
            business growth
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '500px' }}>
            We're more than a payments partner. Get smoother payment processes and offer an outstanding experience.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {features.map((f, i) => (
              <div key={i} style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '16px', 
                display: 'flex', 
                gap: '1rem', 
                alignItems: 'center', 
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--card-border)'
              }}>
                <div style={{ color: 'var(--primary)', flexShrink: 0 }}>{f.icon}</div>
                <span style={{ fontSize: '0.9rem', fontWeight: '700', lineHeight: '1.3' }}>{f.title}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Visual Charts */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ position: 'relative' }}
        >
          <div style={{ 
            background: 'white', 
            borderRadius: '24px', 
            padding: '3rem', 
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid #f1f5f9',
            display: 'relative'
          }}>
            {/* Mock Chart Visuals */}
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end', marginBottom: '2rem' }}>
               {[40, 70, 50, 90, 60].map((h, i) => (
                 <div key={i} style={{ flex: 1, height: `${h * 1.5}px`, background: 'var(--primary-light)', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ position: 'absolute', bottom: 0, width: '100%', height: `${h}%`, background: 'var(--primary)', borderRadius: '8px' }}></div>
                 </div>
               ))}
            </div>
            {/* Pie Chart Mockup */}
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '15px solid var(--primary)', borderRightColor: 'transparent', position: 'absolute', top: '20%', right: '10%', transform: 'rotate(15deg)', opacity: 0.8 }}></div>
            
            {/* Floating Info Card */}
            <div style={{ 
              position: 'absolute', 
              bottom: '-20px', 
              right: '40px', 
              background: 'white', 
              padding: '1.2rem', 
              borderRadius: '16px', 
              boxShadow: 'var(--shadow-xl)', 
              border: '1px solid #f1f5f9',
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              width: '240px'
            }}>
               <div style={{ width: '36px', height: '36px', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>%</div>
               <div style={{ fontSize: '0.75rem' }}>
                  <strong>Create offer for HDFC cards</strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>We have seen rise in usage on your platform</p>
               </div>
            </div>
          </div>
          {/* Background Decorative Blob */}
          <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '300px', height: '300px', background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.05, zIndex: -1 }}></div>
        </motion.div>

      </div>
    </section>
  );
};

export default GrowthSection;
