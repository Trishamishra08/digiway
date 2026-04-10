import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, ArrowUpRight, CreditCard, Users } from 'lucide-react';

const FinancialOS = () => {
  const cards = [
    { 
      title: 'Business Banking', 
      desc: 'Seamless banking with unlimited free NEFT/RTGS. Your banks, unified.', 
      icon: <Landmark />, 
      stats: 'Free Unlimited Transfers' 
    },
    { 
      title: 'Fast Collections', 
      desc: 'Smart Virtual accounts for instant reconciliation and faster collections.', 
      icon: <ArrowUpRight />, 
      stats: 'T+0 Settlements' 
    },
    { 
      title: 'Spend Management', 
      desc: 'Issue physical & virtual corporate cards with customizable spend limits.', 
      icon: <CreditCard />, 
      stats: 'Unified Dashboard' 
    },
    { 
      title: 'Bulk Payouts', 
      desc: 'Process salaries, vendor payments and reimbursements in one click.', 
      icon: <Users />, 
      stats: 'One-Click Execution' 
    }
  ];

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { 
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section id="fin-os" style={{ padding: '100px 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.04em' }}
          >
            FINANCIAL OS FOR <span style={{ color: 'var(--primary)' }}>YOUR BUSINESS</span>
          </motion.h2>
          <motion.p 
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}
          >
            One ecosystem. Complete control. Perfect visibility.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{ 
                background: 'var(--bg-page)', 
                padding: '2.5rem', 
                borderRadius: '32px', 
                border: '1px solid var(--card-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '320px'
              }}
            >
              <div>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  background: 'white', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'var(--primary)',
                  marginBottom: '1.5rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                }}>
                  {React.cloneElement(card.icon, { size: 28 })}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.8rem' }}>{card.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{card.desc}</p>
              </div>
              <div style={{ 
                background: 'var(--primary-light)', 
                padding: '8px 16px', 
                borderRadius: '50px', 
                fontSize: '0.8rem', 
                fontWeight: '700', 
                color: 'var(--primary)',
                width: 'fit-content'
              }}>
                {card.stats}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialOS;
