export const agentNotes = {
    "Astra": [
        "Control the flow of battle from a higher plane.",
        "Strategic foresight is required to maximize her cosmic divide."
    ],
    "Breach": [
        "Clear the path with overwhelming kinetic force.",
        "Disrupt enemy lines before they can establish a defense."
    ],
    "Brimstone": [
        "Command the field with precise orbital strikes.",
        "Essential for executing calculated site executions."
    ],
    "Chamber": [
        "Precision and elegance in every engagement.",
        "Hold the line with bespoke weaponry and tactical teleports."
    ],
    "Clove": [
        "Defy mortality to extend your tactical influence.",
        "Even in death, your utility shapes the battlefield."
    ],
    "Cypher": [
        "Information is the ultimate weapon.",
        "Monitor enemy movements to dismantle their strategies."
    ],
    "Deadlock": [
        "Secure the perimeter with advanced nanowire technology.",
        "Halt enemy advances and dictate the pace of engagement."
    ],
    "Fade": [
        "Expose their deepest fears to seize the advantage.",
        "Track and isolate targets for swift elimination."
    ],
    "Gekko": [
        "Deploy a chaotic crew to disrupt and plant.",
        "Reclaim your utility to maintain pressure across rounds."
    ],
    "Harbor": [
        "Divide and conquer with the power of the tides.",
        "Shield your team while obscuring vision on a massive scale."
    ],
    "Iso": [
        "Isolate targets for a true test of skill.",
        "Focus and precision are rewarded with impenetrable defense."
    ],
    "Jett": [
        "Outmaneuver the opposition with unmatched agility.",
        "Strike fast and vanish before they can react."
    ],
    "KAY/O": [
        "Neutralize enemy abilities to level the playing field.",
        "Lead the charge and suppress opposition defenses."
    ],
    "Killjoy": [
        "Lock down key areas with autonomous defense systems.",
        "Punish overaggression with calculated trap placements."
    ],
    "Neon": [
        "Overwhelm defenses with blistering speed.",
        "Disrupt the enemy's aim through sheer velocity."
    ],
    "Omen": [
        "Strike from the shadows where they least expect.",
        "Keep the enemy guessing with unpredictable movement."
    ],
    "Phoenix": [
        "Ignite the battlefield and dictate the flow of combat.",
        "Self-sustain capability allows for aggressive entry."
    ],
    "Raze": [
        "Flush out entrenched enemies with explosive force.",
        "Create space through sheer destructive capability."
    ],
    "Reyna": [
        "Thrive in the chaos of individual duels.",
        "Momentum is key; feed on eliminations to sustain the fight."
    ],
    "Sage": [
        "Stabilize the team and control the flow of engagement.",
        "Resurrect allies to turn the tide of a losing round."
    ],
    "Skye": [
        "Scout ahead and clear the path for your team.",
        "Heal allies to maintain combat effectiveness."
    ],
    "Sova": [
        "Reveal the unseen to guide your team's strike.",
        "Precision recon ensures no enemy goes unnoticed."
    ],
    "Viper": [
        "Control the battlefield with toxic chemical warfare.",
        "Isolate enemies and decay their defenses over time."
    ],
    "Vyse": [
        "Manipulate liquid metal to trap and disarm.",
        "Isolate tactical chokepoints with metallic precision."
    ],
    "Yoru": [
        "Deceive and misdirect to create openings.",
        "Infiltrate enemy lines unseen and strike from behind."
    ],
    "Veto": [
        "Nullify the opposition's utility with absolute authority.",
        "Deny entry and dictate the terms of every engagement."
    ],
    "Waylay": [
        "Ambush from the unexpected angles.",
        "Trap the unwary and punish their lack of caution."
    ],
    // Fallback for new/unknown agents
    "default": [
        "A versatile operative for high-stakes engagements.",
        "Master their unique utility to shift the balance of power."
    ]
};

export const getAgentNotes = (agentName) => {
    return agentNotes[agentName] || agentNotes["default"];
};
