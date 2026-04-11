import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Zap, PieChart } from 'lucide-react';

const FinancialOS = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="fin-os" style={{ padding: '0 0 40px 0', background: 'white' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '900', marginBottom: '0.5rem', letterSpacing: '-0.04em' }}
          >
            FINANCIAL OS FOR <span style={{ color: 'var(--primary)' }}>YOUR BUSINESS</span>
          </motion.h2>
          <motion.p 
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
             style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}
          >
            One ecosystem. Complete control. Perfect visibility.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: '1rem',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
          
          {/* Card 1: Connected Transaction Banking (Vertical Span) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
                gridColumn: isMobile ? 'auto' : '1 / -1', 
                background: '#f8fbf9', 
                borderRadius: '4px', 
                padding: '1rem 1.5rem', 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row', 
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid rgba(0, 171, 132, 0.1)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.02)',
                minHeight: isMobile ? 'auto' : '200px'
            }}
          >
            <div style={{ flex: 1, maxWidth: isMobile ? '100%' : '450px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.5rem', lineHeight: '1.2' }}>Connected Transaction Banking</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                    Move money smarter. Automate payments, collections, and reconciliation across every bank account in one connected dashboard.
                </p>
                <div style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    Explore API Banking <ArrowRight size={16} />
                </div>
            </div>

            {/* Visual: Accounts Merger */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', marginTop: isMobile ? '1.5rem' : '0' }}>
                <div style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center', marginBottom: '4rem' }}>
                    <div style={{ padding: '0.6rem 1rem', background: 'white', border: '1px solid #eee', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.02)' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>🏦</div>
                        <span style={{ fontSize: '0.7rem', fontWeight: '700' }}>Savings • <span style={{ opacity: 0.6 }}>₹93,000</span></span>
                    </div>
                    <div style={{ padding: '0.6rem 1rem', background: 'white', border: '1px solid #eee', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.02)' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>👨‍💻</div>
                        <span style={{ fontSize: '0.7rem', fontWeight: '700' }}>Personal • <span style={{ opacity: 0.6 }}>₹24,000</span></span>
                    </div>
                </div>

                {/* Connecting Lines (CSS Visual) */}
                <div style={{ position: 'absolute', top: '30px', bottom: '80px', width: '2px', background: 'linear-gradient(to bottom, #ddd, var(--secondary))' }}></div>
                
                <div style={{ 
                    width: '110px', 
                    height: '90px', 
                    border: '2px solid var(--secondary)', 
                    borderRadius: '4px', 
                    background: 'white', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    zIndex: 2,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    marginBottom: '3rem'
                }}>
                    <div style={{ fontSize: '0.65rem', opacity: 0.6, fontWeight: '700' }}>Total</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--secondary)' }}>₹2,13,000</div>
                </div>

                <div style={{ 
                    width: '100%', 
                    padding: '1rem', 
                    background: 'var(--secondary)', 
                    color: 'white', 
                    borderRadius: '4px', 
                    textAlign: 'center', 
                    fontWeight: '700', 
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                }}>
                   <Wallet size={16} /> All Funds, One Wallet
                </div>
            </div>
          </motion.div>

          {/* Card 2: Developer-First Banking Infrastructure */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
             style={{ 
                background: '#f8fbf9', 
                borderRadius: '4px', 
                padding: '1.8rem', 
                border: '1px solid rgba(0, 171, 132, 0.1)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.02)'
             }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.8rem' }}>Developer-First Banking Infrastructure</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                Build and scale financial experiences with plug-and-play REST APIs, real-time webhooks, and unified virtual accounts.
            </p>
            <div style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '1.5rem' }}>
                Explore API Banking <ArrowRight size={16} />
            </div>

            {/* Visual: Hexagon grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {['Open API', 'Webhook Intelligence', 'SDKs', 'curl Snippets'].map((text, i) => (
                    <div key={i} style={{ 
                        background: 'white', 
                        padding: '0.8rem', 
                        borderRadius: '4px', 
                        textAlign: 'center',
                        fontSize: '0.75rem',
                        fontWeight: '800',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                        border: '1px solid #f1f5f9',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <div style={{ width: '30px', height: '30px', background: 'var(--primary-light)', borderRadius: '8px', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {i === 0 ? <Zap size={16} /> : i === 1 ? <Database size={16} /> : i === 2 ? <Code size={16} /> : <ArrowRight size={16} />}
                        </div>
                        {text}
                    </div>
                ))}
            </div>
          </motion.div>

          {/* Card 3: Intelligent Business Operations */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
             style={{ 
                background: '#f8fbf9', 
                borderRadius: '4px', 
                padding: '1.8rem', 
                border: '1px solid rgba(0, 171, 132, 0.1)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.02)'
             }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.8rem' }}>Intelligent Business Operations</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                Automate spend, payments, tax, and sustainability, so your finance team can focus on growth, not grunt work.
            </p>
            <div style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '1.5rem' }}>
                Explore API Banking <ArrowRight size={16} />
            </div>

            {/* Visual: Donut Chart and Stats */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'orange' }}></div>
                        <span style={{ fontSize: '0.7rem', fontWeight: '700' }}>Connected Banking</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--secondary)' }}></div>
                        <span style={{ fontSize: '0.7rem', fontWeight: '700' }}>Collection</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                        <span style={{ fontSize: '0.7rem', fontWeight: '700' }}>Payout</span>
                    </div>
                </div>
                
                <div style={{ position: 'relative', width: '120px', height: '120px' }}>
                    <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                         <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="4" />
                         <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="orange" strokeWidth="4" strokeDasharray="30, 100" />
                         <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--secondary)" strokeWidth="4" strokeDasharray="40, 100" strokeDashoffset="-30" />
                         <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--primary)" strokeWidth="4" strokeDasharray="30, 100" strokeDashoffset="-70" />
                    </svg>
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                         <div style={{ fontSize: '0.6rem', opacity: 0.6, fontWeight: '700' }}>Gross Income</div>
                         <div style={{ fontSize: '0.75rem', fontWeight: '900' }}>₹ 9.9L</div>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Wallet = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 010-4h14v4"/><path d="M3 5v14a2 2 0 002 2h16v-5"/><path d="M18 12a2 2 0 000 4h4v-4z"/></svg>
);

export default FinancialOS;
