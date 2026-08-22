/**
 * First-Principles Parenting v1.0 - Core Computational Logic Module
 * Features: Spatial Mental Model Infiltration & Adaptive Friction Loops
 */

let developmentEpoch = 1;

// The Child Node object configuration tracing internal cognitive OS telemetry metrics
let childNode = {
    name: "Sovereign Son Node (Developing Prime)",
    resilienceIndex: 1.0,         // Baseline uncompromised systemic health
    authoritarianCommands: 0,     // Tracks un-backed "Because I said so" rule blocks
    activeSpatialModels: 0,       // Counts installed biological math frameworks (primes, swarms, grids)
    cognitiveFrictionScore: 1.0,  // Base execution speed of the internal thinking engine
    systemicTraumaUnits: 0
};

function executeParentingLoop() {
    const term = document.getElementById('terminal');
    term.innerHTML = "=== INITIALIZING COGNITIVE ARCHITECTURE METABOLIC TEST ===\n";
    term.innerHTML += ">>> COGNITIVE OS: First-Principles Educational Software Running [ONLINE].\n\n";

    // =========================================================================
    // EPOCH 1: THE AUTHORITARIAN EXTRUSION TRAUMA (Legacy Sickness Run)
    // =========================================================================
    term.innerHTML += `[EPOCH 1] ENVIRONMENT CYCLE: Child encounters a boundary (e.g., eating pure sugar before bed).\n`;
    term.innerHTML += ` -> Legacy Action: System applies top-down blind authoritarian constraint ("No, because I said so!").\n`;
    
    // Inject unbacked command data into the brain pool
    childNode.authoritarianCommands += 3;
    childNode.systemicTraumaUnits += 15;
    childNode.cognitiveFrictionScore = Math.exp(childNode.authoritarianCommands * 0.4);
    childNode.resilienceIndex = 1.0 - (childNode.systemicTraumaUnits / 100);

    term.innerHTML += ` -> Cognitive OS Reaction: Hardcoded rule block injected without systemic logic data.\n`;
    term.innerHTML += ` -> Internal Processing Friction: Multiplier climbs rapidly to [${childNode.cognitiveFrictionScore.toFixed(2)}x Kinetic Drag].\n`;
    term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-blocked">FRAGILE COMPLIANCE RUN / COGNITIVE SLOWDOWN</span>\n`;
    term.innerHTML += ` -> Matrix Balance: Mind experiences rule-bloat; system resilience falls to [${childNode.resilienceIndex.toFixed(2)}].\n`;

    // =========================================================================
    // EPOCH 2: THE BIOMIMETIC CALIBRATION (The Osmosis Jones Infiltration)
    // =========================================================================
    setTimeout(() => {
        term.innerHTML += `\n[EPOCH 2] ENVIRONMENT CYCLE: Explaining systemic causality using high-fidelity biological cellular models.\n`;
        term.innerHTML += ` -> First-Principles Action: Explaining that sugar spikes flood blood highways, forcing pancreatic sub-stations to overload.\n`;
        
        // Purge raw commands, install real-world biological mental model arrays
        childNode.authoritarianCommands = 0;
        childNode.activeSpatialModels += 2; // Installs the "City of Frank" + "Grid Space" software
        childNode.cognitiveFrictionScore = Math.exp(childNode.authoritarianCommands); // Normalizes back to 1.0
        
        let frictionDataPayload = 45; // Real-world action scenario data points
        let adaptiveLearningVelocity = frictionDataPayload * childNode.activeSpatialModels * childNode.resilienceIndex;

        term.innerHTML += ` -> Cognitive OS Reaction: Child node downloads un-fakeable biological reality variables.\n`;
        term.innerHTML += ` -> Adaptive Learning Velocity: Processing data payload at [${adaptiveLearningVelocity.toFixed(1)} &Delta;&Lambda; Units].\n`;
        term.innerHTML += ` -> TRANSACTION STATUS: <span class="badge badge-approved">HOMEOSTATIC BALANCE RECOVERY PASS</span>\n`;
        term.innerHTML += ` -> Matrix Balance: Internal friction drops to clean base level [${childNode.cognitiveFrictionScore.toFixed(1)}x]. Installed Spatial Models: [${childNode.activeSpatialModels}].\n`;

        // =====================================================================
        // EPOCH 3: SELF-HEALING ADAPTIVE RESILIENCE (The Sovereign Prime Milestone)
        // =====================================================================
        setTimeout(() => {
            term.innerHTML += `\n[EPOCH 3] ENVIRONMENT CYCLE: Child encounters real-world physical friction (making a mistake/physical scrape).\n`;
            term.innerHTML += ` -> First-Principles Action: Parent allows safe environmental feedback. Treats failure as raw data, not existential shame.\n`;
            
            // System heals previous structural trauma because failure is processed as a learning coordinate
            childNode.systemicTraumaUnits = Math.max(0, childNode.systemicTraumaUnits - 15);
            childNode.resilienceIndex = 1.0 - (childNode.systemicTraumaUnits / 100);
            childNode.activeSpatialModels += 1; // Installs the "Ant Swarm/Path of Least Resistance" model

            term.innerHTML += ` -> Cognitive OS Reaction: Child analyzes bad output data independently to calibrate system loop.\n`;
            
            // Check Sovereign Prime Threshold metrics
            if (childNode.resilienceIndex >= 0.95 && childNode.activeSpatialModels >= 3) {
                term.innerHTML += ` -> <span class="badge badge-approved">CRITICAL EVOLUTIONARY MILESTONE: SOVEREIGN PRIME STATUS ACHIEVED</span>\n`;
                term.innerHTML += ` -> Biological Outcome: Mind functions as an irreducible, completely autonomous integer vertex.\n`;
                term.innerHTML += " -> System Result: Child node rejects legacy compliance scripts, standing firm in its own geometric integrity.\n";
            }
            
            term.innerHTML += `\n=== COGNITIVE AUDIT SUCCESSFUL: Sovereign Prime Cognitive OS Secured and Operational ===`;
            developmentEpoch++;
        }, 4000);
    }, 4000);
}
