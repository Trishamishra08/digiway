import React from 'react';
import { motion } from 'framer-motion';

const BusinessSolutions = () => {
  const solutions = [
    { 
      title: 'Payment Gateway', 
      desc: 'Offer your customers a secure payment gateway with 150+ modes.', 
      img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c02?w=300' 
    },
    { 
      title: 'No Code Payments', 
      desc: 'Share and accept payments via WhatsApp, SMS, and Email.', 
      img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=300' 
    },
    { 
      title: 'Bharat QR', 
      desc: 'Make payments contactless with 140+ UPI apps.', 
      img: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=300' 
    }
  ];

  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-page)' }}>
      <div className="container">
        <div style={{ marginBottom: '60px' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Customized solutions for every business</h2>
             <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px' }}>
               Harness our payment ecosystem to improve your cash flow and ease business operations. Get time to expand your business.
             </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ 
                height: '350px', 
                background: i === 0 ? '#d4d9f7' : i === 1 ? '#d4f7ed' : '#f7f1d4', 
                borderRadius: '40px', 
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                position: 'relative'
              }}>
                 <img 
                   src={item.img} 
                   alt={item.title} 
                   style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                 />
              </div>
              <div>
                 <h4 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.8rem' }}>{item.title}</h4>
                 <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
