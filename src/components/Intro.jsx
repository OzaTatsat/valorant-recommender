import React from 'react';
import { motion } from 'framer-motion';
import '../App.css'; // Ensure we have access to variables

const Intro = ({ onStart }) => {
    return (
        <motion.div
            className="intro-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                textAlign: 'center',
                padding: '0 2rem'
            }}
        >
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    marginBottom: '1rem',
                    fontWeight: 400,
                    letterSpacing: '-0.03em'
                }}
            >
                The Protocol
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '400px',
                    marginBottom: '4rem',
                    fontWeight: 300
                }}
            >
                Precision selection for the discerning operative.
                Identify your exclusions to begin.
            </motion.p>

            <motion.button
                onClick={onStart}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.02, color: 'var(--accent)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                    padding: '1rem 3rem',
                    border: '1px solid var(--border-light)',
                    borderRadius: '2px',
                    fontSize: '0.9rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    transition: 'border-color 0.3s ease, color 0.3s ease'
                }}
            >
                Initialize
            </motion.button>
        </motion.div>
    );
};

export default Intro;
