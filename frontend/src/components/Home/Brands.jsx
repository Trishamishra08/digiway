import React from 'react';
import { motion } from 'framer-motion';

const Brands = () => {
  const brands = [
    { name: 'NxtWave', logo: 'NxtWave' },
    { name: 'Classlink', logo: 'Classlink' },
    { name: 'PayLink', logo: 'PayLink' },
    { name: 'ByteDance', logo: 'ByteDance' }
  ];

  return (
    <section id="brands" style={{ padding: '60px 0', background: 'white' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3rem' }}
        >
          Trusted by Leading Brands
        </motion.p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5rem', flexWrap: 'wrap', opacity: 0.5 }}>
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ fontSize: '1.8rem', fontWeight: '900', color: '#000', letterSpacing: '-1.5px', fontFamily: 'var(--font-heading)' }}
            >
              {brand.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
