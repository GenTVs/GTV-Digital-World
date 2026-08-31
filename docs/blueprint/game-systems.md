# ⚙️ Game Systems

# GTV Digital World

> *Every visible action is powered by a small, focused system.*

---

# 📋 Overview

Game Systems define how GTV Digital World functions internally.

The revised project is a **top-down 2D pixel-art browser game**. The playable world is rendered with HTML5 Canvas, while HTML/CSS handles interface-heavy features such as the HUD, Profile, Codex, Settings, dialogue, loading screens, and notifications.

Each system should have one clear responsibility and communicate with the others through simple, predictable data.

---

# 🏗️ High-Level Architecture

```text
                         Player
                           │
                           ▼
                      Input System
                           │
                           ▼
                  Player Movement System
                           │
                           ▼
                    Collision System
                           │
                           ▼
                    Interaction System
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
          Doors         Terminals      Objects
             │             │             │
             ▼             ▼             ▼
      Transition      Mission System   Codex /
        System                         Rewards
             │
             ▼
        Room System
             │
             ▼
      Asset Loading System
             │
             ▼
      Rendering System
             │
             ▼
          Canvas

Game State
    │
    ├── Progression System
    ├── Achievement System
    ├── Player Profile System
    ├── Save System
    ├── Audio System
    ├── Settings System
    └── UI Feedback System
```

---

# 📚 Core Systems

| System | Required | Primary Purpose |
|---|---|---|
| Input System | ✅ | Read keyboard and touch input |
| Rendering System | ✅ | Draw the playable world |
| Player Movement System | ✅ | Move the Digital Explorer |
| Collision System | ✅ | Prevent movement through blocked areas |
| Room / Map System | ✅ | Define and create playable locations |
| Interaction System | ✅ | Detect and activate nearby objects |
| Asset Loading System | ✅ | Load and cache required assets |
| Transition System | ✅ | Move safely between rooms |
| State Management | ✅ | Store the current game state |
| Mission System | ✅ | Manage objectives |
| Progression System | ✅ | Manage XP and Levels |
| Achievement System | ✅ | Unlock achievements |
| Codex System | ✅ | Store discovered knowledge |
| Player Profile System | ✅ | Display player progress |
| Save System | ✅ | Persist progress with LocalStorage |
| Audio System | ✅ | Manage music and sound effects |
| Settings System | ✅ | Configure the experience |
| UI Feedback System | ✅ | Display notifications and rewards |

---

# ⌨️ Input System

## Purpose

Convert player input into game actions.

## Desktop Controls

| Action | Input |
|---|---|
| Move Up | `W` / `ArrowUp` |
| Move Left | `A` / `ArrowLeft` |
| Move Down | `S` / `ArrowDown` |
| Move Right | `D` / `ArrowRight` |
| Interact | `E` / `Enter` |
| Close / Cancel | `Escape` |

## Responsibilities

- Detect key press and release
- Track held movement keys
- Ignore gameplay input while menus are open
- Support future touch controls
- Prevent browser behavior from interfering with required game controls when appropriate

---

# 🎨 Rendering System

## Purpose

Draw the pixel-art game world onto HTML5 Canvas.

## Responsibilities

- Clear and redraw the Canvas
- Draw room tiles
- Draw decorative objects
- Draw interactive objects
- Draw the player
- Draw simple world effects
- Respect layer order
- Preserve pixel-art sharpness when scaled

## Rendering Order

```text
Floor
  ↓
Walls / Background Objects
  ↓
Interactive Objects
  ↓
Player
  ↓
Foreground Objects
  ↓
World Effects
```

HTML/CSS overlays are rendered outside Canvas.

---

# 🧍 Player Movement System

## Purpose

Control the Digital Explorer inside playable rooms.

## Responsibilities

- Read movement direction from the Input System
- Update player coordinates
- Track facing direction
- Trigger walking / idle animation
- Respect collision boundaries
- Pause movement during dialogue, transitions, menus, and loading

## Movement Directions

- Up
- Down
- Left
- Right

Diagonal movement may be supported if it remains simple and visually consistent.

---

# 🧱 Collision System

## Purpose

Prevent the player from walking through blocked objects or outside the room.

## Collision Examples

- Walls
- Desks
- Server racks
- Furniture
- Locked doors
- Map boundaries

## Rules

- Collision should be simple and predictable.
- Decorative visuals do not automatically need collision.
- Collision boxes may be simpler than the visible sprite.
- The system should prioritize responsive movement over complex physics.

There is no advanced physics engine.

---

# 🗺️ Room / Map System

## Purpose

Define playable locations.

## Playable Rooms

- Central Hub
- Mission Terminal
- Developer Lab
- Community Hall
- Arcade

## A Room Defines

- Tile layout
- Map dimensions
- Spawn positions
- Collision areas
- Interactive objects
- Doors / exits
- Required assets
- Optional decorations
- Mission-related objects

## Example

```js
{
	id: "developer-lab",
	width: 20,
	height: 12,
	playerSpawn: { x: 10, y: 10 },
	interactables: [],
	exits: []
}
```

The exact data structure may change during implementation.

---

# 🎯 Interaction System

## Purpose

Allow the player to interact with nearby game objects.

## Interactive Object Types

- Doors
- Mission terminals
- Development terminals
- Communication consoles
- Holograms
- Arcade machines
- Network Fragments
- Story objects

## Interaction Flow

```text
Player Approaches Object
        ↓
Object Is In Interaction Range
        ↓
[E] Interact Appears
        ↓
Player Presses E
        ↓
Object Action Executes
```

The system should allow different objects to define different actions without rewriting the entire interaction system.

---

# 🚪 Transition System

## Purpose

Move the player safely between playable rooms.

## Responsibilities

- Temporarily disable player input
- Fade out the current room
- Request destination assets
- Show loading UI when necessary
- Create the destination room
- Place the player at the correct spawn point
- Fade in
- Restore player input

## Standard Flow

```text
Interact With Exit
    ↓
Disable Controls
    ↓
Fade Out
    ↓
Check Destination Bundle
    ↓
Load If Required
    ↓
Create Destination Room
    ↓
Place Player
    ↓
Fade In
    ↓
Enable Controls
```

---

# 📦 Asset Loading System

## Purpose

Load required game assets without forcing the player to wait for the entire game before starting.

## Loading Strategy

GTV Digital World uses a **hybrid loading system**.

### Initial Boot Bundle

Loads only what is required to begin:

- Fonts
- Core UI
- Player sprites
- Shared tiles
- Central Hub assets
- Essential sound effects

### Location Bundles

Each playable sector has its own bundle.

Example:

```text
Developer Lab
├── Room Map
├── Floor / Wall Tiles
├── Terminal Sprites
├── Server Sprites
├── Hologram Animation
├── Mission Assets
└── Location Audio
```

### Background Preloading

Likely next locations may load quietly while the player is still exploring the current room.

### Loading Screen

If required assets are not ready:

```text
CONNECTING TO SECTOR...

Developer Lab

██████████████░░ 82%
```

The destination room should never appear partially assembled.

## Cache Rule

Assets already loaded during the current session should be reused whenever possible.

---

# 🧠 State Management

## Purpose

Maintain one source of truth for current game data.

## Example State

```text
Player
- Name
- Position
- Facing Direction
- Level
- XP

World
- Current Room
- Unlocked Locations
- Network Restoration

Progress
- Active Mission
- Completed Missions
- Achievements
- Codex Entries
- Network Fragments

Settings
- Master Volume
- Music Volume
- Sound Volume
```

Different systems should read and update shared state rather than storing conflicting copies of the same information.

---

# 🎯 Mission System

## Purpose

Guide story progression.

## Responsibilities

- Assign missions
- Track active mission
- Track objective completion
- Unlock the next mission
- Award rewards
- Update network restoration
- Trigger save operations

## Mission Structure

```text
Mission
    ↓
Objective
    ↓
Location
    ↓
Interaction / Challenge
    ↓
Completion
    ↓
Reward
    ↓
Next Mission
```

## Main Missions

1. Establish Connection
2. Activate Mission Terminal
3. Restore Developer Lab
4. Reconnect Community Hall
5. Reactivate Arcade
6. Recover Knowledge Archive
7. Prepare Core Synchronization
8. Restore GTV Network

---

# 📈 Progression System

## Purpose

Manage finite XP and Level progression.

## Maximum Level

**Level 10**

## XP Sources

- Main missions
- Important discoveries
- Achievements
- Arcade objective
- Required exploration milestones

## Rules

- Level cannot exceed 10.
- Progress is finite.
- Grinding is not required.
- Story completion should naturally bring the player to Level 10.

---

# 🏆 Achievement System

## Purpose

Reward meaningful milestones.

## Required Achievements

- First Login
- First Mission
- Developer Explorer
- Community Explorer
- Arcade Champion
- Knowledge Restored
- Network Restored
- Digital Explorer

## Responsibilities

- Detect unlock conditions
- Prevent duplicate unlocks
- Update Player Profile
- Trigger notifications
- Trigger save operations

---

# 📖 Codex System

## Purpose

Store knowledge unlocked through exploration and missions.

## Categories

- GTV Network
- Locations
- Technologies
- Community
- Development
- Story

## Rules

- Entries unlock naturally.
- Codex content is read through an HTML/CSS overlay.
- The Codex pauses gameplay while open.
- Locked entries remain visibly unavailable.

---

# 👤 Player Profile System

## Purpose

Summarize player progress.

## Displays

- Player Name
- Level
- XP
- Achievements
- Missions Completed
- Network Restoration
- Play Time

The Profile is an interface overlay, not a physical location.

---

# 💾 Save System

## Purpose

Persist meaningful progress in the browser.

## Technology

LocalStorage

## Saved Data

- Player Name
- Level
- XP
- Current / completed missions
- Achievements
- Codex entries
- Unlocked locations
- Network restoration
- Network Fragments
- Settings
- Post-game completion state

Player coordinates may be saved later if useful, but are not required for the first prototype.

## Automatic Save Triggers

- Mission completed
- Level changed
- Achievement unlocked
- Codex entry unlocked
- Location unlocked
- Settings changed
- Final synchronization completed

## Reset

Players may erase saved progress from Settings.

---

# 🔊 Audio System

## Purpose

Manage music and sound effects.

## Controls

- Master Volume
- Music Volume
- Sound Effect Volume

## Possible Music

- Welcome
- Central Hub
- Developer Lab
- Community Hall
- Arcade
- Ending

## Sound Effects

- Button Click
- Notification
- Mission Complete
- Achievement Unlock
- Level Up
- Door / Portal
- Hologram Activation
- Interaction
- Scene Transition

Audio selection may happen later during the polish phase.

---

# ⚙️ Settings System

## Purpose

Allow the player to configure the experience.

## Options

- Master Volume
- Music Volume
- Sound Volume
- View Controls
- Reset Save
- Return to Title

Future settings should be added only if they are genuinely needed.

---

# ✨ UI Feedback System

## Purpose

Provide immediate feedback without interrupting gameplay unnecessarily.

## Examples

- `Mission Complete`
- `+200 XP`
- `Level Up`
- `Achievement Unlocked`
- `Codex Updated`
- `Sector Restored`
- `Network 75% Restored`

Notifications are HTML/CSS overlays.

---

# 🔗 System Relationships

```text
Input
  ↓
Movement
  ↓
Collision
  ↓
Interaction
  ↓
Mission / Door / Object
  ↓
Progression
  ↓
Achievement / Codex / Unlocks
  ↓
State
  ↓
Save
```

Rendering reads current room and player state continuously.

Asset Loading and Transition Systems work together whenever a new room is entered.

---

# 📌 IDs

## Playable Room IDs

| Display Name | ID |
|---|---|
| Central Hub | `hub` |
| Mission Terminal | `mission-terminal` |
| Developer Lab | `developer-lab` |
| Community Hall | `community-hall` |
| Arcade | `arcade` |

## Interface / Story Screen IDs

| Display Name | ID |
|---|---|
| Welcome Screen | `welcome` |
| Intro Story | `intro` |
| Player Registration | `player-registration` |
| Player Profile | `profile` |
| Codex | `codex` |
| Settings | `settings` |
| Ending | `ending` |
| Credits | `credits` |

These IDs should remain consistent across JavaScript, CSS, documentation, room definitions, and navigation.

---

# 📐 System Design Rules

1. Every system should have one primary responsibility.
2. Keep game logic understandable before optimizing it.
3. Use one source of truth for shared state.
4. Canvas handles the playable world.
5. HTML/CSS handles interface-heavy content.
6. Rooms should be small and data-driven.
7. Loading should hide incomplete room construction.
8. Player movement must remain responsive.
9. Avoid complex physics when simple collision is enough.
10. Build and test systems with temporary assets before final pixel-art production.

---

# 🏁 Final Summary

GTV Digital World's technical foundation combines lightweight Canvas game rendering with conventional web interface development.

The system architecture supports player movement, collision, interaction, room transitions, hybrid asset loading, missions, progression, saving, and holographic UI without requiring a full game engine.

---

**End of Game Systems**
