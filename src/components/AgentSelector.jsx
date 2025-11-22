import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import './AgentSelector.css';

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

    // Group agents by role
    const groupedAgents = useMemo(() => {
        const groups = {};
        agents.forEach(agent => {
            const roleName = agent.role?.displayName || 'Unknown';
            if (!groups[roleName]) {
                groups[roleName] = [];
            }
            groups[roleName].push(agent);
        });

        // Sort roles if needed, or just return the object
        // Let's ensure a consistent order: Duelist, Initiator, Controller, Sentinel
        const orderedRoles = ['Duelist', 'Initiator', 'Controller', 'Sentinel'];
        const result = {};

        orderedRoles.forEach(role => {
            if (groups[role]) {
                result[role] = groups[role];
            }
        });

        // Add any other roles that might exist (e.g. if API changes)
        Object.keys(groups).forEach(role => {
            if (!orderedRoles.includes(role)) {
                result[role] = groups[role];
            }
        });

        return result;
    }, [agents]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4
            }
        }
    };

    return (
        <motion.div
            className="selector-container"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                }}>
                    Select Top 3 Agents
                </h2>
                <p style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '3rem',
                    fontSize: '0.9rem'
                }}>
                    Select the 3 agents you play daily. We'll exclude them to find your next challenge. ({selected.length}/3)
                </p>
            </motion.div>

            <div className="role-grid">
                {Object.entries(groupedAgents).map(([role, roleAgents]) => (
                    <motion.div
                        key={role}
                        className="role-column"
                        variants={itemVariants}
                    >
                        <div className="role-header">
                            <h3>{role}</h3>
                        </div>
                        <div className="agent-list">
                            {roleAgents.map((agent) => {
                                const isSelected = selected.includes(agent.uuid);
                                const isDisabled = selected.length >= 3 && !isSelected;

                                return (
                                    <motion.button
                                        key={agent.uuid}
                                        onClick={() => toggleAgent(agent.uuid)}
                                        className={`agent-button ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                                        whileHover={!isDisabled ? { scale: 1.05 } : {}}
                                        whileTap={!isDisabled ? { scale: 0.95 } : {}}
                                    >
                                        <div className="agent-icon">
                                            <img
                                                src={agent.displayIcon}
                                                alt={agent.displayName}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <span className="agent-name">
                                            {agent.displayName}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className={`confirm-button-container ${selected.length === 3 ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: selected.length === 3 ? 1 : 0, y: selected.length === 3 ? 0 : 20 }}
            >
                <button
                    className="confirm-button"
                    onClick={() => onConfirm(selected)}
                >
                    GET RECOMMENDATION
                </button>
            </motion.div>
        </motion.div>
    );
};

export default AgentSelector;
