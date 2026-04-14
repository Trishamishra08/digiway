import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, RefreshCw, CreditCard, ShoppingBag, Truck, Code, Factory, Store, Home } from 'lucide-react';

const IndustrySpread = () => {
  const [activeTab, setActiveTab] = useState(2); // Default to SaaS & Technology

  const industries = [
    {
      id: 0,
      label: 'E-commerce & Marketplaces',
      short: 'E-commerce',
      title: 'E-COMMERCE &',
      titleSecondary: 'MARKETPLACES',
      desc: 'High-speed collections and instant refunds for global platforms.',
      icon: <ShoppingBag size={24} />,
      features: [
        { title: 'Marketplace Payouts', desc: 'Distribute funds to thousands of vendors instantly.', icon: <UserCheck size={18} /> },
        { title: 'Fraud Detection', desc: 'Advanced AI to mitigate transaction risks.', icon: <RefreshCw size={18} /> },
        { title: 'Global Settlements', desc: 'Multi-currency settlement logic.', icon: <CreditCard size={18} /> }
      ]
    },
    {
      id: 1,
      label: 'Logistics & Supply Chain',
      short: 'Logistics',
      title: 'LOGISTICS &',
      titleSecondary: 'SUPPLY CHAIN',
      desc: 'Manage fleet payouts and vendor billing seamlessly.',
      icon: <Truck size={24} />,
      features: [
        { title: 'Fleet Payouts', desc: 'Disburse driver salaries and fuel allowances.', icon: <UserCheck size={18} /> },
        { title: 'Route Optimization', desc: 'Intelligent payment routing for efficiency.', icon: <RefreshCw size={18} /> },
        { title: 'Auto-Invoicing', desc: 'Generate and reconcile bills on the fly.', icon: <CreditCard size={18} /> }
      ]
    },
    {
      id: 2,
      label: 'SaaS & Technology',
      short: 'SaaS',
      title: 'SAAS &',
      titleSecondary: 'TECHNOLOGY',
      desc: 'Purpose-built banking for software and subscription models.',
      icon: <Code size={24} />,
      features: [
        { title: 'Subscription Tracking', desc: 'Identify and track renewals automatically.', icon: <UserCheck size={18} /> },
        { title: 'Refund Automation', desc: 'Instant refunds with detailed audit logs.', icon: <RefreshCw size={18} /> },
        { title: 'Smart Billing', desc: 'Consolidated invoicing for usage-based models.', icon: <CreditCard size={18} /> }
      ]
    },
    {
      id: 3,
      label: 'Manufacturing & Trading',
      short: 'Manufacturing',
      title: 'MANUFACTURING &',
      titleSecondary: 'TRADING',
      desc: 'Streamline procurement and large-scale bulk distributions.',
      icon: <Factory size={24} />,
      features: [
        { title: 'Vendor Management', desc: 'Seamless onboarding and payouts for suppliers.', icon: <UserCheck size={18} /> },
        { title: 'Credit Lines', desc: 'Integrated working capital for trading.', icon: <RefreshCw size={18} /> },
        { title: 'Bulk Distributions', desc: 'Handle high-volume trade transactions.', icon: <CreditCard size={18} /> }
      ]
    },
    {
      id: 4,
      label: 'Retail & Restaurant Chains',
      short: 'Retail',
      title: 'RETAIL &',
      titleSecondary: 'RESTAURANT CHAINS',
      desc: 'Centralised settlement and store-wise tracking.',
      icon: <Store size={24} />,
      features: [
        { title: 'Store-Level VAs', desc: 'Identify transactions per individual outlet.', icon: <UserCheck size={18} /> },
        { title: 'POS Reconciliation', desc: 'Match POS and bank deposits automatically.', icon: <RefreshCw size={18} /> },
        { title: 'Smart Franchise Payouts', desc: 'Automate franchise settlements.', icon: <CreditCard size={18} /> }
      ]
    },
    {
      id: 5,
      label: 'Real Estate & Construction',
      short: 'Real Estate',
      title: 'REAL ESTATE &',
      titleSecondary: 'CONSTRUCTION',
      desc: 'Manage project-wise funds and contractor payments.',
      icon: <Home size={24} />,
      features: [
        { title: 'Escrow Logic', desc: 'Secure project-based fund management.', icon: <UserCheck size={18} /> },
        { title: 'Contractor Payouts', desc: 'Scheduled payments for site work.', icon: <RefreshCw size={18} /> },
        { title: 'Tax Compliance', desc: 'Automated GST/TDS for construction.', icon: <CreditCard size={18} /> }
      ]
    }
  ];

  return (
    <section id="industry" style={{ padding: '60px 0', background: 'var(--dark)', color: 'white' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '900', letterSpacing: '-0.04em', color: 'white' }}
             >
            BUILT FOR EVERY <span style={{ color: 'var(--primary)' }}>LAYER OF BUSINESS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', maxWidth: '800px', margin: '0.5rem auto 0 auto' }}
          >
            Purpose-built connected banking for the way each industry operates. Fast, compliant, and deeply integrated.
          </motion.p>
        </div>

        {/* Tab List */}
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '0.4rem', 
            flexWrap: 'wrap', 
            marginBottom: '1rem' 
        }}>
          {industries.map((ind, i) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(i)}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: activeTab === i ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: '800',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === i ? '0 5px 15px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* Main Display Card */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -20 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        background: '#151b2b', // Slightly lighter dark panel
                        borderRadius: '6px',
                        border: '1px solid rgba(255,255,255,0.06)',
                        padding: '1rem 1.5rem',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1.5rem',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.03)',
                        alignItems: 'center',
                        minHeight: '260px'
                    }}
                >
                    {/* Left side Content */}
                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '2rem', position: 'relative' }}>
                        <div style={{ marginBottom: '1.2rem' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'white', lineHeight: '1.2' }}>{industries[activeTab].title}</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary)', lineHeight: '1.2' }}>{industries[activeTab].titleSecondary}</div>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                            {industries[activeTab].desc}
                        </p>
                        
                        {/* Connecting Visual: Floating Pulse Badge */}
                        <div style={{ position: 'absolute', right: '-12px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                            <motion.div 
                                animate={{ 
                                    boxShadow: ['0 0 0 0 rgba(79, 70, 229, 0.4)', '0 0 0 20px rgba(79, 70, 229, 0)', '0 0 0 0 rgba(79, 70, 229, 0)'] 
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                style={{ 
                                    width: '48px', 
                                    height: '48px', 
                                    background: 'var(--primary)', 
                                    borderRadius: '50%', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    color: 'white', 
                                    boxShadow: '0 8px 20px rgba(79, 70, 229, 0.3)' 
                                }}
                            >
                                <RefreshCw size={22} color="white" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right side Features */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {industries[activeTab].features.map((feat, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                style={{ 
                                    background: '#1f2937', 
                                    padding: '0.8rem 1rem', 
                                    borderRadius: '6px', 
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)', 
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderLeft: '3px solid var(--primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}
                            >
                                <div style={{ width: '32px', height: '32px', borderRadius: '4px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {React.cloneElement(feat.icon, { size: 16 })}
                                </div>
                                <div>
                                    <div style={{ fontWeight: '800', fontSize: '0.85rem', color: 'white' }}>{feat.title}</div>
                                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>{feat.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default IndustrySpread;
