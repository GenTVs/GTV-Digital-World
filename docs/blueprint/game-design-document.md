# 🎮 Game Design Document

# GTV Digital World

> *Restore the Network. Explore the Future.*

---

## Project Information

| Item | Value |
|---|---|
| Project Name | GTV Digital World |
| Version | v0.1.0 |
| Status | Pre-Production Revision |
| Genre | Story-Driven 2D Pixel-Art Web Adventure |
| Perspective | Top-Down |
| Platform | Desktop (Primary), Tablet (Supported), Mobile (Basic Support) |
| Estimated Play Time | 30-60 Minutes |
| Repository | https://github.com/GenTVs/GTV-Digital-World |
| Project Lead | Yuergen Christian |
| Technical Designer | OpenAI ChatGPT |

---

# 1. Project Overview

GTV Digital World is a story-driven 2D pixel-art browser adventure that combines game development with modern front-end web development.

Players control a visible **Digital Explorer** inside small handcrafted locations connected through the GTV Network. The player walks through rooms, approaches terminals and doors, interacts with objects, completes missions, unlocks knowledge, gains XP, and gradually restores the network.

The project is intentionally smaller than a traditional RPG. It focuses on a short, polished, finite experience that can run directly in a web browser.

---

# 2. Vision Statement

Create a browser game that feels like a real explorable digital world without requiring a full 3D engine.

The game should combine:

- 2D pixel-art exploration
- Small handcrafted rooms
- Simple movement and interaction
- Holographic HTML/CSS interfaces
- Story progression
- Missions and rewards
- Practical JavaScript game programming

The result should feel more like an indie game than a traditional website while remaining lightweight and web-friendly.

---

# 3. Core Pillars

## 1. Exploration

Players should enjoy physically moving through the GTV Digital World rather than navigating only through menus.

Every room should contain purposeful objects, entrances, terminals, or discoveries.

---

## 2. Progression

Every completed mission should unlock meaningful progress.

Progress may include:

- XP
- Levels
- New locations
- Network restoration
- Achievements
- Codex entries
- Story progression

---

## 3. Immersion

Pixel-art environments, animated objects, holographic effects, music, transitions, dialogue, and UI should make the world feel alive.

The pixel-art world and modern holographic interface should feel like one visual identity.

---

## 4. Learning by Discovery

Learning should happen naturally through interaction.

Players discover development concepts through missions, terminals, Codex entries, environmental details, and challenges rather than lengthy tutorials.

---

# 4. Target Experience

Players should feel curiosity, discovery, progression, and accomplishment while exploring the GTV Network.

The game should be easy to understand for beginners while still demonstrating thoughtful game architecture, front-end development, animation, state management, and interaction design.

---

# 5. Gameplay Presentation

GTV Digital World uses a **top-down 2D pixel-art presentation**.

The player controls a visible Digital Explorer inside small room-based maps.

## Player Actions

- Walk using keyboard controls
- Explore small environments
- Approach doors and terminals
- Interact with objects
- Read dialogue
- Accept and complete missions
- Collect Network Fragments
- Open Profile, Codex, and Settings
- Play the Arcade mini-game

## Primary Controls

| Action | Desktop |
|---|---|
| Move | WASD / Arrow Keys |
| Interact | E / Enter |
| Cancel / Close | Escape |
| Open Codex | UI Button |
| Open Profile | UI Button |
| Open Settings | UI Button |

Tablet and mobile may use simple on-screen directional and interaction controls.

---

# 6. World Structure

The world is not one giant open map.

Instead, it consists of several small handcrafted maps:

- Central Hub
- Mission Terminal
- Developer Lab
- Community Hall
- Arcade

Player Profile, Codex, and Settings are interface systems rather than physical locations.

The Ending is presented as a final story sequence after the network reaches 100% restoration.

---

# 7. Gameplay Summary

```text
Welcome
    ↓
Intro Story
    ↓
Player Registration
    ↓
Load Central Hub
    ↓
Walk Through Hub
    ↓
Enter Mission Terminal
    ↓
Receive Mission
    ↓
Return to Hub
    ↓
Walk to Unlocked Location
    ↓
Load Location
    ↓
Explore + Interact
    ↓
Complete Objective
    ↓
Gain Reward
    ↓
Restore Network
    ↓
Return to Hub
    ↓
Repeat
    ↓
Final Synchronization
    ↓
Ending
    ↓
Credits
```

---

# 8. Core Features

## Exploration

- Top-down player movement
- Room-based maps
- Doors and portals
- Interactive terminals
- Collision boundaries
- Interaction prompts

## Progression

- Story progression
- 8 main missions
- XP
- Level progression
- Maximum Level 10
- Network restoration
- Network Fragments
- Achievements

## Information Systems

- Player Profile
- Codex
- Mission interface
- Dialogue system
- Notifications

## Technical Systems

- Scene / room loading
- Asset loading
- Local save system
- State management
- Audio system
- Settings system

## Special Content

- Developer Lab challenge
- Community Hall interaction
- Arcade mini-game
- Ending sequence
- Credits

---

# 9. Technology Stack

## Game Rendering

- HTML5 Canvas
- JavaScript
- 2D pixel-art sprites
- Tile-based or grid-based room layouts

## Web Interface

- HTML5
- CSS3
- JavaScript ES Modules

HTML/CSS is used for:

- HUD
- Dialogue
- Profile
- Codex
- Settings
- Notifications
- Mission panels
- Loading screens

## Development

- Vite
- Git
- GitHub
- GitHub Pages

## Storage

- LocalStorage

## Visual Direction

- 2D Pixel Art
- Dark futuristic environments
- GTV orange identity
- Cyan / blue holographic technology
- Modern UI layered over retro-style game graphics

---

# 10. Asset Philosophy

Playable environments should be built from reusable pieces rather than one finished 1920x1080 background.

Example:

```text
Room
├── floor tiles
├── wall tiles
├── doors
├── terminals
├── furniture
├── decorative objects
├── animated objects
└── collision data
```

The existing high-detail environment artwork is treated as **concept art** and visual reference.

Concept art helps define:

- Color
- Mood
- Architecture
- Lighting
- Location identity

It is not required to appear directly inside gameplay.

---

# 11. Loading Strategy

GTV Digital World uses a **hybrid loading system**.

## Initial Boot

The opening loading screen prepares only the assets required to begin:

- Fonts
- Core UI
- Player sprites
- Shared tiles
- Central Hub
- Essential sound effects

The game should not wait for every asset in the entire project before starting.

## Sector Loading

Each playable location has its own asset bundle.

Example:

```text
Developer Lab Bundle
├── room map
├── tiles
├── terminal sprites
├── server sprites
├── animated holograms
├── mission assets
└── location audio
```

When the player approaches or unlocks a new sector, the game may begin preloading that sector in the background.

## Transition Loading

If the next room is not ready:

```text
Fade Out
    ↓
Connecting to Sector...
    ↓
Load Required Assets
    ↓
100%
    ↓
Load Room
    ↓
Fade In
```

Rooms should appear only after their required assets are ready.

Partial rooms should not visibly load object-by-object.

## Reuse

Previously loaded shared assets should be reused rather than downloaded again.

---

# 12. Project Scope

GTV Digital World is designed as a complete single-release project.

Version **1.0** represents the finished experience.

The game intentionally does **not** include:

- Giant open-world maps
- Combat systems
- Multiplayer
- Backend accounts
- Online database
- Procedural generation
- Large NPC simulation
- Crafting
- Shops
- Endless progression

After Version 1.0, development is limited to maintenance such as bug fixes, accessibility improvements, performance improvements, documentation corrections, and minor visual polish.

---

# 13. Success Criteria

The project will be considered successfully completed when players can:

- Start a new game
- Control the Digital Explorer
- Move through every playable room
- Interact with required objects
- Complete all 8 main missions
- Visit every playable location
- Reach Level 10
- Restore the network to 100%
- Unlock required achievements
- Read every Codex entry
- Save and reload progress
- Reach the ending
- View the credits
- Complete the experience without major bugs

---

# 14. Design Principles

These principles are immutable and guide every design decision.

## Rule 1 - Desktop First

The primary experience is designed for desktop users.

Tablet support is encouraged.

Mobile support is secondary and may use simplified touch controls.

---

## Rule 2 - Every Location Has Purpose

Every room must contribute to gameplay, progression, storytelling, or meaningful exploration.

Decorative empty rooms are not allowed.

---

## Rule 3 - Progress Is Finite

Player progression has a clear beginning and ending.

Maximum Level: **10**

Version 1.0 represents the complete experience.

---

## Rule 4 - Learning Through Interaction

Players discover knowledge naturally through gameplay.

The game teaches through exploration, challenges, and interaction rather than lengthy tutorials.

---

## Rule 5 - Finish Before Expanding

Complete the planned Version 1.0 before considering new ideas.

Feature creep is intentionally avoided.

---

# 15. Development Philosophy

```text
Idea
    ↓
Blueprint
    ↓
Prototype
    ↓
Asset Production
    ↓
Core Systems
    ↓
Playable Rooms
    ↓
Missions
    ↓
Testing
    ↓
Polish
    ↓
Release
```

The project should be developed piece by piece.

A small working system is preferred over a large unfinished one.

---

# 16. Future Maintenance Policy

After Version 1.0, only the following changes are planned:

- Bug fixes
- Performance improvements
- Accessibility improvements
- Documentation updates
- Minor visual polish

New gameplay content remains outside the original project scope.

---

# 17. Closing Statement

GTV Digital World combines pixel-art game development with modern browser technology.

The project demonstrates game design, JavaScript programming, Canvas rendering, CSS interface design, state management, asset loading, responsive web development, and structured software production inside one complete browser-based adventure.

---

**End of Game Design Document**
