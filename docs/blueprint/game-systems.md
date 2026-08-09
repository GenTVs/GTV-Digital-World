# ⚙️ Game Systems

# GTV Digital World

> *Every feature is powered by one or more game systems.*

---

# 📋 Overview

Game Systems define how GTV Digital World functions internally.

Unlike the Story Outline or Gameplay Flow, this document focuses on the logic behind the game rather than the player's experience.

Each system has a single responsibility and communicates with other systems to create one complete experience.

---

# 🏗️ System Architecture

```text
                    Player
                       │
                       ▼
              Navigation System
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
 Mission System   Profile System   Settings System
        │              │              │
        ▼              ▼              ▼
 Progression      Save System      Audio System
        │
        ▼
 Achievement System
        │
        ▼
 Codex System
        │
        ▼
 UI Feedback System
 ```

 ---

 # 📚 Core Systems

 | System | Required | Purpose |
|---------|----------|---------|
| Navigation System | ✅ | Move between locations |
| Mission System | ✅ | Manage objectives |
| Progression System | ✅ | XP and Level progression |
| Achievement System | ✅ | Unlock achievements |
| Codex System | ✅ | Store discovered knowledge |
| Save System | ✅ | Save player progress |
| Player Profile System | ✅ | Store player information |
| Audio System | ✅ | Control music and sound effects |
| Settings System | ✅ | Configure the experience |
| UI Feedback System | ✅ | Display notifications and rewards |

---

# 🧭 Navigation System

## Purpose

Control movement between scenes.

## Responsibilities

- Load locations
- Handle transitions
- Prevent entering locked areas
- Return to Central Hub

## Input

- Button clicks
- Menu selections

## Output

- Scene transition
- Updated active location

---

# 🎯 Mission System

## Purpose

Guide player progression.

## Responsibilities

- Assign missions
- Track completion
- Unlock new missions
- Award rewards

## Mission Structure

```
Mission
↓
Objective
↓
Complete
↓
Reward
↓
Next Mission
```

## Rewards

- XP
- Achievement
- Network Fragment
- Codex Entry
- New Location

---

# 📈 Progression System

## Purpose

Measure player progress.

## Maximum Level

**Level 10**

## XP Rewards

XP is earned by:

- Completing missions
- Exploring locations
- Unlocking achievements
- Finishing Arcade activities

## Progress Rules

- Maximum Level cannot exceed 10.
- XP should never be infinite.
- Every level should feel meaningful.

---

# 🏆 Achievement System

## Purpose

Reward important milestones.

## Responsibilities

- Detect achievement conditions
- Unlock achievements
- Notify the player

## Examples

- First Login
- First Mission
- Developer Explorer
- Community Explorer
- Arcade Champion
- Network Restored
- Digital Explorer

---

# 📖 Codex System

## Purpose

Store discovered knowledge.

## Categories

- GTV Network
- Locations
- Technologies
- Community
- Development
- Story

## Unlock Method

Codex entries unlock naturally through gameplay.

---

# 👤 Player Profile System

## Purpose

Display player progress.

## Stores

- Player Name
- Level
- XP
- Achievements
- Missions Completed
- Network Restoration
- Play Time

---

# 💾 Save System

## Purpose

Save player progress locally.

## Technology

LocalStorage

## Saved Data

- Player Name
- Level
- XP
- Achievements
- Missions
- Settings
- Codex
- Unlocked Locations

## Reset

Players may reset all saved data from Settings.

---

# 🔊 Audio System

## Purpose

Manage all music and sound effects.

## Controls

- Master Volume
- Music Volume
- Sound Effect Volume

## Audio Types

### Music

- Welcome
- Central Hub
- Developer Lab
- Community Hall
- Arcade
- Ending

### Sound Effects

- Button Click
- Hover
- Notification
- Achievement
- Mission Complete
- Door Open
- Hologram Activate

---

# ⚙️ Settings System

## Purpose

Allow players to customize the experience.

## Options

- Music Volume
- Sound Volume
- Reset Save
- Return to Title

Future-ready options may be added internally but remain hidden until needed.

---

# ✨ UI Feedback System

## Purpose

Provide immediate visual feedback.

## Displays

- Mission Complete
- XP Gained
- Achievement Unlocked
- Level Up
- Codex Unlocked
- Network Restored

Feedback should appear quickly and never interrupt gameplay.

---

# 🧠 State Management

The game keeps track of:

- Current Scene
- Active Mission
- Player Level
- Player XP
- Network Restoration
- Unlocked Locations
- Codex Entries
- Achievements
- Audio Settings

Only one source of truth should exist for each type of data.

---

# 🔗 System Relationships

```text
Mission System
        │
        ▼
Progression System
        │
        ▼
Achievement System
        │
        ▼
Codex System
        │
        ▼
Player Profile
        │
        ▼
Save System
        │
        ▼
LocalStorage
```

---

# 📌 Scene IDs

To keep the project consistent, every location uses a unique scene ID.

| Display Name | Scene ID |
|--------------|----------|
| Welcome Screen | `welcome` |
| Intro Story | `intro` |
| Central Hub | `hub` |
| Mission Terminal | `mission-terminal` |
| Developer Lab | `developer-lab` |
| Community Hall | `community-hall` |
| Arcade | `arcade` |
| Player Profile | `profile` |
| Codex | `codex` |
| Settings | `settings` |
| Ending | `ending` |
| Credits | `credits` |

These IDs should be reused throughout:

- Folder names
- JavaScript
- CSS
- Documentation
- Navigation

---

# 📐 System Design Rules

1. Every system should have one primary responsibility.
2. Systems should communicate through clear interfaces.
3. Data should be stored in only one place.
4. Player progress should always be recoverable.
5. Every reward should provide immediate feedback.
6. Every system should support the overall gameplay loop.
7. Systems should remain simple and maintainable.

---

# 🏁 Final Summary

The Game Systems document defines the technical foundation of GTV Digital World.

Each system has a clear purpose, a well-defined responsibility, and works together with the others to support a polished, story-driven interactive web experience.

---

**End of Game Systems**