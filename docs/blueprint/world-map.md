# 🌍 World Map

# GTV Digital World

> *A small world should still feel worth exploring.*

---

# 🌐 World Overview

GTV Digital World is a futuristic digital universe built around the GTV Network.

The world is divided into a small number of handcrafted playable maps rather than one giant open world.

Players physically move through each map using a top-down Digital Explorer character.

New sectors unlock through story progression and completed missions.

---

# 🗺️ World Structure

```text
                         Developer Lab
                              ▲
                              │
                              │
Mission Terminal ◄────── Central Hub ──────► Community Hall
                              │
                              │
                              ▼
                            Arcade
```

The **Central Hub** connects every major playable location.

Profile, Codex, and Settings are interface systems and do not exist as physical rooms.

---

# 🎮 Playable World Rules

Each playable location should:

- Be small enough to understand quickly
- Contain meaningful interactive objects
- Have clear collision boundaries
- Have at least one entrance / exit
- Support one or more missions
- Contain visual storytelling
- Use reusable pixel-art assets
- Avoid unnecessary empty space

The goal is exploration, not map size.

---

# 🧍 Player Movement

The player controls a visible **Digital Explorer**.

Primary movement:

- WASD
- Arrow Keys

Interaction:

- E
- Enter

The player may:

- Walk
- Stop
- Face interactive objects
- Use doors
- Activate terminals
- Inspect objects
- Trigger dialogue

No jumping or combat is required.

---

# 🚪 Location Transitions

Locations are connected using doors, portals, terminals, or sector gateways.

Example:

```text
Player approaches Developer Lab entrance
        ↓
Interaction prompt appears
        ↓
Press E
        ↓
Fade Out
        ↓
Load Developer Lab assets
        ↓
Spawn player at entrance
        ↓
Fade In
```

---

# 1. 🌐 Central Hub

## Purpose

The Central Hub is the heart of GTV Digital World and the main navigation map.

## World Role

It connects:

- Mission Terminal
- Developer Lab
- Community Hall
- Arcade

## Player Actions

- Walk around the plaza
- Inspect locked sector entrances
- Enter unlocked locations
- View network restoration changes
- Access Profile, Codex, and Settings through the HUD

## Visual Direction

- Futuristic digital plaza
- Dark flooring
- GTV orange pathways
- Cyan holographic energy
- Central network core
- Sector entrances around the hub

## Progression

The Hub visually changes as the network is restored.

Possible changes:

- Lights activate
- Doors become powered
- Holograms appear
- Network energy increases
- Restored sectors gain color

## Unlock Requirement

Complete the Intro Story and Player Registration.

---

# 2. 🎯 Mission Terminal

## Purpose

The Mission Terminal is a small control room where the player receives and reviews main objectives.

## Player Actions

- Walk to the mission console
- Interact with the console
- Read current mission
- Accept mission
- Review rewards
- Check network restoration progress
- Return to the Central Hub

## Important Objects

- Mission Console
- Network Status Display
- Sector Map
- Exit Door

## Unlock Requirement

Available immediately after entering the Central Hub.

---

# 3. 💻 Developer Lab

## Purpose

The Developer Lab introduces development-themed challenges and technical discovery.

## Player Actions

- Explore the laboratory
- Inspect development equipment
- Activate terminals
- Complete coding-inspired challenges
- Recover Network Fragments
- Unlock Codex entries

## Important Objects

- Development Terminal
- Hologram Core
- Server Rack
- Workbench
- Diagnostic Panel
- Exit Door

## Unlock Requirement

Unlocked through mission progression.

---

# 4. 🤝 Community Hall

## Purpose

The Community Hall represents collaboration, creativity, and the GTV Community.

## Player Actions

- Explore the hall
- Inspect community displays
- Activate the communication system
- Discover community information
- Complete the restoration objective
- Unlock achievements and Codex entries

## Important Objects

- Community Board
- Communication Terminal
- Hologram Display
- Lounge Decorations
- Resource Terminal
- Exit Door

## Unlock Requirement

Unlocked after the required Developer Lab mission.

---

# 5. 🕹️ Arcade

## Purpose

The Arcade provides a short playable mini-game and restores the Entertainment Sector.

## Player Actions

- Explore the Arcade
- Walk to the main machine
- Start the mini-game
- Complete the required score / objective
- Earn XP
- Unlock the Arcade achievement
- Return to the Central Hub

## Important Objects

- Main Arcade Machine
- Score Display
- Prize Decoration
- Holographic Game Sign
- Exit Door

## Unlock Requirement

Unlocked after the required Community Hall mission.

---

# 📖 Non-Physical Systems

The following are accessed through HTML/CSS interface overlays.

## Player Profile

Displays:

- Player Name
- Level
- XP
- Achievements
- Statistics
- Network Restoration

## Codex

Displays:

- Technologies
- Locations
- Story
- Community
- Development Concepts

## Settings

Controls:

- Music Volume
- Sound Volume
- Controls
- Reset Save
- Return to Title

These systems should not require the player to walk to a dedicated room.

---

# 🌟 Ending

The Ending is not a normal explorable map.

When every required sector is restored:

```text
Final Mission
    ↓
Core Synchronization
    ↓
Network Restoration 100%
    ↓
Ending Sequence
    ↓
Restored World Concept Illustration
    ↓
Credits
```

The restored world artwork may be used as a cinematic final image rather than a playable environment.

---

# 📦 Room Asset Structure

Playable rooms should be assembled from reusable pieces.

Example:

```text
developer-lab/
├── map-data.js
├── floor/
├── walls/
├── furniture/
├── terminals/
├── decorations/
├── animated/
└── collision-data.js
```

The exact file structure may change during implementation.

---

# 🔄 World Progression

```text
Intro
    ↓
Central Hub
    ↓
Mission Terminal
    ↓
Developer Lab
    ↓
Community Hall
    ↓
Arcade
    ↓
Knowledge Recovery
    ↓
Core Synchronization
    ↓
Restored Network
    ↓
Ending
```

The Central Hub remains the main return point throughout the adventure.

---

# 🎨 Concept Art

High-detail concept artwork is stored in:

```text
docs/references/concept-art/
```

These images are references for:

- Color palettes
- Mood
- Architecture
- Lighting
- Location identity

They are not required to be used as final gameplay backgrounds.

---

# 📌 World Design Principles

1. Small maps are preferred over large empty maps.
2. Every room must have gameplay purpose.
3. Important objects must be visually readable.
4. The player should always understand where exits are.
5. New sectors should feel rewarding to unlock.
6. The Hub should visibly evolve as the network is restored.
7. Exploration should remain simple enough for a browser game.

---

**End of World Map**
