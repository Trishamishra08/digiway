import React from 'react';
import { motion } from 'framer-motion';
import showcaseVideo from '../../assets/InShot_20260409_195805386.mp4';

const FeatureVideo = () => {
  return (
    <section id="action-showcase" style={{ padding: '80px 0', background: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}
          >
            Experience the <span style={{ color: 'var(--primary)' }}>Digital Revolution</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}
          >
            See how Digiway transforms complex banking operations into a seamless automated experience.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            maxWidth: '1000px', 
            margin: '0 auto', 
            borderRadius: '40px', 
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0,0,0,0.15)',
            background: 'var(--dark)',
            border: '8px solid white'
          }}
        >
          <video 
            src={showcaseVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ width: '100%', display: 'block' }} 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureVideo;
