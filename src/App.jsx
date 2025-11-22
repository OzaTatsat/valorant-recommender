import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import AgentSelector from './components/AgentSelector';
import Recommendation from './components/Recommendation';
import './App.css';

import vetoPortrait from './assets/veto-portrait.png';
import vetoIcon from './assets/veto-icon.png';

function App() {
  const [step, setStep] = useState('intro'); // intro, select, recommend
  const [agents, setAgents] = useState([]);
  const [excludedAgents, setExcludedAgents] = useState([]);
  const [currentAgent, setCurrentAgent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);



  // ... inside component
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
        const data = await response.json();
        if (data.status === 200) {
          let fetchedAgents = data.data;

          // Manual Injection for Veto (if missing)
          const hasVeto = fetchedAgents.some(a => a.displayName === 'Veto');
          if (!hasVeto) {
            fetchedAgents.push({
              uuid: 'veto-manual-id',
              displayName: 'Veto',
              description: 'The newest addition to the protocol.',
              displayIcon: vetoIcon,
              fullPortrait: vetoPortrait,
              role: { displayName: 'Sentinel' }, // Assuming Sentinel based on "Veto"
              isPlayableCharacter: true
            });
          }

          setAgents(fetchedAgents);
        }
      } catch (error) {

        console.error("Failed to fetch agents:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAgents();
  }, []);

  const handleStart = () => {
    setStep('select');
  };

  const handleConfirmSelection = (selectedIds) => {
    setExcludedAgents(selectedIds);
    generateRecommendation(selectedIds);
    setStep('recommend');
  };

  const generateRecommendation = (exclusions = excludedAgents) => {
    const pool = agents.filter(agent => !exclusions.includes(agent.uuid));

    if (pool.length === 0) return;

    // Avoid repeating the same agent immediately if possible
    let nextAgent;
    do {
      const randomIndex = Math.floor(Math.random() * pool.length);
      nextAgent = pool[randomIndex];
    } while (pool.length > 1 && nextAgent === currentAgent);

    setCurrentAgent(nextAgent);
  };

  const handleBack = () => {
    setStep('select');
    setCurrentAgent(null);
  };

  if (isLoading) {
    return (
      <div className="app-container" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>INITIALIZING DATABASE...</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {step === 'intro' && (
          <Intro key="intro" onStart={handleStart} />
        )}
        {step === 'select' && (
          <AgentSelector key="select" agents={agents} onConfirm={handleConfirmSelection} />
        )}
        {step === 'recommend' && currentAgent && (
          <Recommendation
            key="recommend"
            agent={currentAgent}
            onNext={() => generateRecommendation()}
            onBack={handleBack}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
