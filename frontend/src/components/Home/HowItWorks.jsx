import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Create Your Account',
      desc: 'Sign up with your business details. Quick KYC verification with Aadhaar & PAN — completed within 24 hours.'
    },
    {
      id: 2,
      title: 'Integrate Our API',
      desc: 'Copy-paste our ready-made API or SDK into your website or app. Supports all major languages and platforms.'
    },
    {
      id: 3,
      title: 'Go Live & Collect',
      desc: 'Start accepting payments instantly. UPI, Cards, Wallets, Net Banking — all activated from day one.'
    },
    {
      id: 4,
      title: 'Get Settled Daily',
      desc: 'Funds are settled directly to your bank account on T+1 or T+2 basis. Track every rupee in real-time.'
    }
  ];

  return (
    <section id="how-it-works" style={{ 
      padding: '50px 0', 
      background: '#f8fafc', // Very soft light blue/grey exactly like the image
      textAlign: 'center'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div style={{ 
            background: '#e6f4ea', 
            color: '#16a34a', 
            padding: '6px 16px', 
            borderRadius: '20px', 
            fontWeight: '800', 
            fontSize: '0.7rem', 
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            display: 'inline-block'
          }}>
            How It Works
          </div>
          
          <h2 style={{ 
            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', // Reduced font size here
            fontWeight: '900', 
            color: '#111827', 
            lineHeight: '1.2',
            marginBottom: '1rem',
            maxWidth: '700px'
          }}>
            Start Accepting Payments in 4 Simple Steps
          </h2>
          
          <p style={{ 
            color: '#6b7280', 
            fontSize: '0.9rem', 
            maxWidth: '550px', 
            lineHeight: '1.5' 
          }}>
            From signup to your first transaction — we make the entire process fast and hassle-free.
          </p>
        </motion.div>

        {/* Stepper Section */}
        <div style={{ position: 'relative', marginTop: '20px' }}>
          
          {/* Continuous Connecting Line with Flow Animation (Desktop) */}
          <div style={{
            position: 'absolute',
            top: '25px', // Center of the 50px circles
            left: '12%',
            right: '12%',
            height: '2px',
            background: '#bbf7d0', // Very light green base line
            zIndex: 1,
            overflow: 'hidden',
            display: 'block'
          }} className="stepper-line">
            <motion.div 
              animate={{ x: ['-100%', '200%'] }} 
              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
              style={{ 
                width: '30%', 
                height: '100%', 
                background: 'linear-gradient(90deg, transparent, #16a34a, transparent)',
                boxShadow: '0 0 8px #16a34a'
              }} 
            />
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            gap: '20px',
            position: 'relative',
            zIndex: 2 
          }} className="stepper-container">
            
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                style={{ 
                  flex: 1, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                {/* Circle */}
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'white',
                  border: '2px solid #16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  fontWeight: '900',
                  color: '#16a34a',
                  marginBottom: '15px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                  position: 'relative',
                  zIndex: 3
                }}>
                  {step.id}
                </div>

                {/* Content */}
                <h3 style={{ 
                  fontSize: '0.95rem', 
                  fontWeight: '800', 
                  color: '#1f2937', 
                  marginBottom: '0.5rem' 
                }}>
                  {step.title}
                </h3>
                <p style={{ 
                  fontSize: '0.75rem', 
                  color: '#6b7280', 
                  lineHeight: '1.4',
                  maxWidth: '220px'
                }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
      
      {/* Basic Mobile Responsive Styles via Style Block */}
      <style>{`
        @media (max-width: 768px) {
          .stepper-line {
            display: none !important;
          }
          .stepper-container {
            flex-direction: column;
            align-items: center;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
