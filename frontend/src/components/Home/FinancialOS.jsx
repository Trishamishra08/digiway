import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Zap, PieChart, CreditCard } from 'lucide-react';

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
            gap: '0',
            maxWidth: '1200px',
            margin: '0 auto',
            border: '1px solid #e2e8f0',
            boxShadow: '0 10px 40px rgba(0,0,0,0.03)'
        }}>
          
          {/* Card 1: Connected Transaction Banking (Vertical Span) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
                gridColumn: isMobile ? 'auto' : '1 / -1', 
                background: '#f6f9fc', 
                borderRadius: '0', 
                padding: '2rem', 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row', 
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #e2e8f0',
                minHeight: isMobile ? 'auto' : '200px'
            }}
          >
            <div style={{ flex: 1, maxWidth: isMobile ? '100%' : '450px' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.5rem', lineHeight: '1.2', color: '#0f172a' }}>Smart Pay-in Operations</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                    Collect money smarter. Optimize collections with dynamic routing through multiple payment gateways mapped to a unified dashboard.
                </p>
            </div>

            {/* Visual: Accounts Merger */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', marginTop: isMobile ? '1.5rem' : '0' }}>
                <div style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center', marginBottom: '4rem' }}>
                    <div style={{ padding: '0.6rem 1rem', background: 'white', border: '1px solid #e2e8f0', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4f46e5' }}>
                            <Wallet size={12} />
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700' }}>NSDL • <span style={{ opacity: 0.6 }}>₹93,000</span></span>
                    </div>
                    <div style={{ padding: '0.6rem 1rem', background: 'white', border: '1px solid #e2e8f0', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
                            <CreditCard size={12} />
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700' }}>Razorpay • <span style={{ opacity: 0.6 }}>₹24,000</span></span>
                    </div>
                </div>

                {/* Connecting Lines (CSS Visual) */}
                <div style={{ position: 'absolute', top: '35px', bottom: '80px', width: '2px', background: 'linear-gradient(to bottom, #cbd5e1, var(--secondary))' }}></div>
                
                <div style={{ 
                    width: '120px', 
                    height: '100px', 
                    border: '2px solid var(--secondary)', 
                    borderRadius: '4px', 
                    background: 'white', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    zIndex: 2,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    marginBottom: '3rem'
                }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700' }}>Total Vol</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--secondary)' }}>₹1,17,000</div>
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
                   <PieChart size={16} /> Unified Dashboard
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
                background: '#f6f9fc', 
                borderRadius: '0', 
                padding: '2.5rem 2rem', 
                borderRight: isMobile ? 'none' : '1px solid #e2e8f0',
                borderBottom: isMobile ? '1px solid #e2e8f0' : 'none',
             }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.8rem', color: '#0f172a' }}>Developer-First Banking Infrastructure</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Build and scale financial experiences with plug-and-play REST APIs, real-time webhooks, and unified virtual accounts.
            </p>

            {/* Visual: Hexagon grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {['Open API', 'Webhook Intelligence', 'SDKs', 'curl Snippets'].map((text, i) => (
                    <div key={i} style={{ 
                        background: 'white', 
                        padding: '1rem 0.5rem', 
                        borderRadius: '4px', 
                        textAlign: 'center',
                        fontSize: '0.75rem',
                        fontWeight: '800',
                        color: '#0f172a',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <div style={{ width: '36px', height: '36px', background: 'var(--primary-light)', borderRadius: '8px', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {i === 0 ? <Zap size={18} /> : i === 1 ? <Database size={18} /> : i === 2 ? <Code size={18} /> : <ArrowRight size={18} />}
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
                background: '#f6f9fc', 
                borderRadius: '0', 
                padding: '2.5rem 2rem', 
             }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.8rem', color: '#0f172a' }}>Intelligent Business Operations</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Automate spend, payments, tax, and sustainability, so your finance team can focus on growth, not grunt work.
            </p>

            {/* Visual: Donut Chart and Stats */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', justifyContent: 'center', background: 'white', padding: '1.5rem', borderRadius: '4px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'orange' }}></div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#0f172a' }}>External Gateways</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--secondary)' }}></div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#0f172a' }}>Collection</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#0f172a' }}>Payout</span>
                    </div>
                </div>
                
                <div style={{ position: 'relative', width: '130px', height: '130px' }}>
                    <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                         <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                         <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="orange" strokeWidth="4" strokeDasharray="30, 100" />
                         <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--secondary)" strokeWidth="4" strokeDasharray="40, 100" strokeDashoffset="-30" />
                         <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--primary)" strokeWidth="4" strokeDasharray="30, 100" strokeDashoffset="-70" />
                    </svg>
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                         <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '700' }}>Gross Income</div>
                         <div style={{ fontSize: '0.9rem', fontWeight: '900', color: '#0f172a' }}>₹ 9.9L</div>
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
