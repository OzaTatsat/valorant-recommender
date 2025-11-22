import React from 'react';
import { motion } from 'framer-motion';

const AgentSelector = ({ agents, onConfirm }) => {
    const [selected, setSelected] = React.useState([]);

    const toggleAgent = (agentId) => {
        if (selected.includes(agentId)) {
            setSelected(selected.filter(id => id !== agentId));
        } else {
            if (selected.length < 3) {
                setSelected([...selected, agentId]);
            }
        }
    };

    return (
        <motion.div
            className="selector-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '4rem 2rem',
                textAlign: 'center'
            }}
        >
            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{
                    fontSize: '2rem',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                }}
            >
                Select Top 3 Agents
            </motion.h2>
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '3rem',
                    fontSize: '0.9rem'
                }}
            >
                These will be excluded from recommendations. ({selected.length}/3)
            </motion.p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                gap: '1rem',
                marginBottom: '4rem'
            }}>
                {agents.map((agent) => {
                    const isSelected = selected.includes(agent.uuid);
                    return (
                        <motion.button
                            key={agent.uuid}
                            onClick={() => toggleAgent(agent.uuid)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '1rem',
                                border: isSelected ? '1px solid var(--accent)' : '1px solid var(--border)',
                                backgroundColor: isSelected ? 'rgba(255,255,255,0.05)' : 'transparent',
                                transition: 'all 0.3s ease',
                                opacity: (selected.length >= 3 && !isSelected) ? 0.3 : 1,
                                cursor: (selected.length >= 3 && !isSelected) ? 'default' : 'pointer'
                            }}
                        >
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                marginBottom: '0.5rem',
                                filter: isSelected ? 'grayscale(0%)' : 'grayscale(100%)',
                                transition: 'filter 0.3s ease'
                            }}>
                                <img
                                    src={agent.displayIcon}
                                    alt={agent.displayName}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <span style={{
                                fontSize: '0.8rem',
                                color: isSelected ? 'var(--text-primary)' : 'var(--text-muted)',
                                fontWeight: isSelected ? 500 : 400
                            }}>
                                {agent.displayName}
                            </span>
                        </motion.button>
                    );
                })}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: selected.length === 3 ? 1 : 0, y: selected.length === 3 ? 0 : 20 }}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    pointerEvents: selected.length === 3 ? 'auto' : 'none'
                }}
            >
                <button
                    onClick={() => onConfirm(selected)}
                    style={{
                        padding: '1rem 4rem',
                        backgroundColor: 'var(--text-primary)',
                        color: 'var(--bg-primary)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        borderRadius: '2px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }}
                >
                    GET RECOMMENDATION
                </button>
            </motion.div>
        </motion.div>
    );
};

export default AgentSelector;
