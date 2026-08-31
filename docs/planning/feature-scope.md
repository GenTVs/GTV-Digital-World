# 🔒 Feature Scope

# GTV Digital World

> **If it is not listed here, it is not required for Version 1.0.**

---

# 🎮 Game Identity

GTV Digital World Version 1.0 is a:

> **Story-Driven 2D Pixel-Art Web Adventure**

The player controls a Digital Explorer inside small top-down room-based maps rendered in the browser.

---

# ✅ Required Version 1.0 Features

## 🎬 Experience

- Welcome Screen
- Intro Story
- Player Registration
- Ending Sequence
- Credits

## 🌐 Playable World

- Central Hub
- Mission Terminal
- Developer Lab
- Community Hall
- Arcade
- Small handcrafted room-based maps
- Physical entrances and exits
- Locked and unlocked sector states

## 🧍 Player

- Visible Digital Explorer
- Player Name
- Top-down movement
- Facing direction
- Basic idle / walking animation
- Collision
- Interaction range
- Level
- XP
- Maximum Level 10

## ⌨️ Controls

Desktop:

- WASD
- Arrow Keys
- `E` / `Enter` to interact
- `Escape` to close / cancel

Tablet and mobile:

- Basic touch movement
- Basic touch interaction

Desktop remains the primary platform.

## 🧱 World Interaction

- Walkable room maps
- Collision boundaries
- Interactive terminals
- Interactive doors / portals
- Interaction prompts
- Inspectable story objects
- Network Fragment collection
- Room transitions

## 📦 Loading

- Initial boot loading screen
- Location-based asset bundles
- Asset caching during the session
- Background preloading when practical
- Loading overlay when destination assets are not ready
- Fade-out / fade-in room transitions

## 🎯 Gameplay

- 8 Main Missions
- Location unlocking
- Network Restoration
- Network Fragments
- Story progression
- One Arcade mini-game
- Relaxed failure states
- Post-game room revisiting

## 🏆 Progression

- Achievements
- Finite XP progression
- Level cap
- Completion state
- Hub visual restoration progress

## 📖 Codex

- Unlockable entries
- Categories
- Reading interface
- Locked entry states

The Codex is an interface overlay, not a physical room.

## 👤 Player Profile

- Player Name
- Level
- XP
- Achievements
- Missions completed
- Network restoration
- Basic statistics

The Profile is an interface overlay.

## 💾 Persistence

- LocalStorage save
- Automatic progress saving
- Settings saving
- Reset Save
- Reload-safe meaningful progress

## 🔊 Audio

- Background music
- Sound effects
- Master Volume
- Music Volume
- SFX Volume

Audio content may be selected later during polish.

## 🖥️ Interface

- Gameplay HUD
- Mission overlay
- Dialogue overlay
- Profile overlay
- Codex overlay
- Settings overlay
- Notifications
- Interaction prompt
- Loading screens
- Holographic CSS effects

## 🎨 Visual Presentation

- 2D pixel-art world
- GTV orange identity
- Cyan / blue holographic effects
- Reusable tile / object assets
- HTML/CSS/SVG interface
- High-detail concept art used as development reference
- Ending concept art may be reused cinematically if appropriate

---

# ❌ Explicitly Out of Scope

The following features will **not** be required for Version 1.0:

- 3D gameplay
- Third-person 3D character controller
- Free-camera 3D exploration
- Giant open world
- Huge scrolling maps
- Combat
- Weapons
- Enemy AI
- Boss fights
- Advanced physics
- Jumping mechanics
- Platforming
- Multiplayer
- Online accounts
- Backend database
- Chat system
- Real-time networking
- Online leaderboards
- Microtransactions
- Currency
- Shops
- Crafting
- Procedural world generation
- NPC schedules
- Complex NPC simulation
- Multiple story campaigns
- DLC
- Seasonal events
- Daily missions
- Live-service content
- Endless leveling
- Additional locations after release
- Multiple Arcade games
- Full character customization
- Voice acting
- Large cinematic video files

---

# 🧊 Version 1.0 Freeze

## ✅ Allowed After Release

- Bug fixes
- Performance fixes
- Accessibility fixes
- Broken asset corrections
- Documentation corrections
- Minor visual polish

## ❌ Not Allowed After Release

- New locations
- New missions
- New gameplay modes
- New story chapters
- New progression systems
- Major feature expansion
- Converting the game into a larger RPG

---

# 🧭 Five Immutable Rules

1. **Desktop first.**
2. **Every location must have a purpose.**
3. **Progress is finite.**
4. **Learning happens through interaction.**
5. **Finish before expanding.**

---

# 🧪 Prototype Rule

The first playable version is allowed to look unfinished.

Temporary shapes and placeholder sprites are encouraged until these work correctly:

- Movement
- Collision
- Interaction
- Doors
- Room transitions
- Loading

Final pixel art should not block core programming progress.

---

# 🏁 Version 1.0 Definition

```text
Start Game
    ↓
Create Explorer
    ↓
Explore All Rooms
    ↓
Complete 8 Missions
    ↓
Reach Level 10
    ↓
Restore Network 100%
    ↓
Reach Ending
    ↓
View Credits
```

The project should complete this flow without major bugs.

---

**End of Feature Scope**
