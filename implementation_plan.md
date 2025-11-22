# Refactor Agent Selector for Desktop

The goal is to improve the agent selection experience on desktop by moving away from a single long list of agents. We will group agents by their Role (Duelist, Controller, Initiator, Sentinel) and display these groups in a structured layout.

## User Review Required

> [!NOTE]
> This change will significantly alter the visual layout of the selection screen. Agents will now be categorized by role.

## Proposed Changes

### Components

#### [MODIFY] [AgentSelector.jsx](file:///c:/Users/tatsa/.gemini/antigravity/scratch/valorant-recommender/src/components/AgentSelector.jsx)
-   Import `AgentSelector.css`.
-   Group `agents` prop by `agent.role.displayName`.
-   Render a container for the roles.
-   On desktop, this container will be a grid with 4 columns (one for each role).
-   On mobile, it will stack vertically.
-   Remove the old single grid layout.

### Styles

#### [NEW] [AgentSelector.css](file:///c:/Users/tatsa/.gemini/antigravity/scratch/valorant-recommender/src/components/AgentSelector.css)
-   Define `.role-grid` for the main container.
    -   Desktop: `grid-template-columns: repeat(4, 1fr)`
    -   Mobile: `grid-template-columns: 1fr` (or stack)
-   Define `.role-column` for each role group.
-   Define `.agent-list` for the list of agents within a role.
-   Style the agent buttons to be compact but clear.

## Verification Plan

### Automated Tests
-   None (Visual change).

### Manual Verification
-   Open the app in browser.
-   Resize window to desktop width (>1024px) and verify 4 columns.
-   Resize window to mobile width (<768px) and verify stacked layout.
-   Check if all agents are present and grouped correctly.
-   Verify selection logic still works.
