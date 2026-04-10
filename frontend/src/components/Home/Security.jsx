import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Lock, Smartphone, Clock, Satellite } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    { icon: <ShieldCheck />, title: "ISO 27001 Certified", desc: "Global standard for security management." },
    { icon: <CreditCard />, title: "PCI-DSS Compliant", desc: "Payment card industry security standard." },
    { icon: <Lock />, title: "256-Bit Encryption", desc: "Bank-grade SSL encryption for all data." },
    { icon: <Smartphone />, title: "2FA & Biometrics", desc: "Multi-factor authentication on all tools." },
    { icon: <Clock />, title: "99.9% Uptime", desc: "Redundant infra with real-time failover." },
    { icon: <Satellite />, title: "24/7 Monitoring", desc: "Automated threat detection and response." }
  ];

  return (
    <section id="security" style={{ padding: '100px 0', background: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ maxWidth: '700px', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', lineHeight: '1', marginBottom: '1.5rem', fontWeight: '800' }}>
            SECURITY, <br />
            <span style={{ color: 'var(--primary)' }}>ENGINEERED FOR TRUST</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
            Every transaction is encrypted. Every system is fortified with bank-grade rigor.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {securityFeatures.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', padding: '1.5rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid #f1f5f9' }}
            >
              <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                {React.cloneElement(item.icon, { size: 24 })}
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem', color: 'var(--text-main)', fontWeight: '700' }}>{item.title}</h4>
                <p style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
