import React from 'react';
import { motion } from 'framer-motion';
import { getAgentNotes } from '../data/agentNotes';

const Recommendation = ({ agent, onNext, onBack }) => {
    const notes = getAgentNotes(agent.displayName);

    return (
        <motion.div
            className="recommendation-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            {/* Background Image (Blurred/Darkened) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${agent.fullPortrait})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(100px) brightness(0.2) grayscale(100%)',
                zIndex: -1
            }} />

            <div className="content-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                height: '100%',
                maxWidth: '1600px',
                margin: '0 auto',
                width: '100%'
            }}>
                {/* Left: Text Content */}
                <div style={{
                    padding: '4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    zIndex: 2
                }}>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            color: 'var(--text-secondary)',
                            marginBottom: '1rem',
                            display: 'block'
                        }}
                    >
                        Recommendation
                    </motion.span>

                    <motion.h1
                        key={agent.uuid} // Re-animate on change
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={{
                            fontSize: 'clamp(4rem, 8vw, 8rem)',
                            lineHeight: 0.9,
                            marginBottom: '1rem',
                            color: 'var(--text-primary)'
                        }}
                    >
                        {agent.displayName}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            border: '1px solid var(--border)',
                            borderRadius: '100px',
                            marginBottom: '3rem',
                            alignSelf: 'flex-start',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                        }}
                    >
                        {agent.role?.displayName}
                    </motion.div>

                    <div style={{ marginBottom: '4rem' }}>
                        {notes.map((note, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (index * 0.1) }}
                                style={{
                                    fontSize: '1.2rem',
                                    color: 'var(--text-primary)',
                                    marginBottom: '1rem',
                                    maxWidth: '500px',
                                    fontWeight: 300,
                                    borderLeft: '2px solid var(--accent)',
                                    paddingLeft: '1.5rem'
                                }}
                            >
                                {note}
                            </motion.p>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <motion.button
                            onClick={onNext}
                            whileHover={{ x: 10 }}
                            style={{
                                fontSize: '1rem',
                                color: 'var(--text-secondary)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}
                        >
                            RECOMMEND ANOTHER <span style={{ fontSize: '1.2rem' }}>→</span>
                        </motion.button>

                        <motion.button
                            onClick={onBack}
                            whileHover={{ x: -5 }}
                            style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-muted)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                borderBottom: '1px solid transparent',
                                transition: 'border-color 0.3s'
                            }}
                        >
                            <span style={{ fontSize: '1rem' }}>←</span> CHANGE SELECTION
                        </motion.button>
                    </div>
                </div>

                {/* Right: Agent Image */}
                <div style={{
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <motion.img
                        key={agent.uuid}
                        src={agent.fullPortrait}
                        alt={agent.displayName}
                        initial={{ opacity: 0, scale: 1.1, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            maxHeight: '90%',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))'
                        }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Recommendation;
