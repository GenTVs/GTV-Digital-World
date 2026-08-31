# 🖥️ UI Flow

# GTV Digital World

> *The interface supports the world instead of replacing it.*

---

# 📋 Overview

UI Flow describes how the player interacts with menus, overlays, dialogue, HUD elements, loading screens, and gameplay scenes.

The playable world is rendered separately from the HTML/CSS interface.

The interface should remain readable while allowing the pixel-art world to stay visible.

---

# 🎨 UI Layers

The game uses three main layers.

```text
+--------------------------------------+
| HTML/CSS Overlay UI                  |
| HUD / Dialogue / Menus / Alerts      |
+--------------------------------------+
| Game Canvas                          |
| Player / Rooms / Objects / Movement  |
+--------------------------------------+
| Browser Page / Background            |
+--------------------------------------+
```

---

# 🎯 Design Goals

- Clean and modern
- Pixel-art friendly
- Desktop-first
- Minimal obstruction of the game world
- Fast to understand
- Consistent controls
- Clear interaction prompts
- Short transitions
- Strong GTV holographic identity

---

# 🌐 Overall Flow

```text
Boot Loader
    ↓
Welcome Screen
    ↓
Intro Story
    ↓
Player Registration
    ↓
Gameplay HUD + Central Hub
    ↓
Walk / Interact / Enter Sector
    ↓
Gameplay HUD + Location
    ↓
Mission / Dialogue / Challenge Overlays
    ↓
Return to Hub
    ↓
Final Synchronization
    ↓
Ending
    ↓
Credits
```

---

# ⏳ Loading UI

## Initial Loading Screen

Shown when the project first opens.

Displays:

- GTV Logo
- Loading progress
- Short status text

Example:

```text
GTV DIGITAL WORLD

Initializing Network...

██████████████░░░░ 72%
```

## Sector Loading

Shown only when the requested room is not already ready.

Example:

```text
CONNECTING TO SECTOR

Developer Lab

Loading Assets...
████████████████░░ 84%
```

## Loading Rule

Do not reveal partially loaded rooms.

When the required bundle is ready:

```text
100%
    ↓
Fade Out Loader
    ↓
Fade In Room
```

---

# 🎬 Welcome Screen

Visible:

- GTV Logo
- Project Title
- Start Game
- Settings
- Credits

No gameplay HUD is visible.

---

# 📖 Intro Story

Visible:

- Story background / animation
- Dialogue panel
- Continue button

No movement controls.

---

# 👤 Player Registration

Visible:

- Explorer name input
- Confirm button
- Optional player preview

After confirmation:

```text
Create Player
    ↓
Load Hub
    ↓
Begin Gameplay
```

---

# 🎮 Gameplay HUD

The HUD appears while the player is inside playable rooms.

Recommended layout:

```text
+------------------------------------------------------+
| GTV | Mission Objective          Network 35% | Lv 4 |
|------------------------------------------------------|
|                                                      |
|                  GAME CANVAS                         |
|                                                      |
|                                                      |
|                                                      |
|------------------------------------------------------|
| [Profile] [Codex]         [E] Interact      [⚙]     |
+------------------------------------------------------+
```

The HUD should not permanently cover large parts of the room.

---

# 🧭 Interaction Prompt

When the player approaches an interactive object:

```text
[E] Interact
```

Examples:

```text
[E] Open Mission Terminal
[E] Enter Developer Lab
[E] Inspect Hologram
[E] Play Arcade
[E] Collect Fragment
```

The prompt disappears when the player moves away.

---

# 🎯 Mission Interface

The Mission Terminal uses an HTML/CSS overlay while the player remains inside the room.

Displays:

- Mission title
- Description
- Objective
- Reward
- Current progress
- Accept / Continue button
- Close button

The world may remain visible behind a darkened overlay.

---

# 💬 Dialogue Interface

Dialogue should appear near the bottom of the viewport.

Example:

```text
+------------------------------------------------------+
| CORE TERMINAL                                        |
| Developer Sector detected. Connection status: OFFLINE|
|                                            [Continue] |
+------------------------------------------------------+
```

Dialogue should be short and readable.

---

# 👤 Profile Overlay

Available through the HUD.

Displays:

- Player Name
- Level
- XP
- Achievements
- Missions Completed
- Network Restoration
- Play Time

Closing the overlay returns directly to gameplay.

---

# 📖 Codex Overlay

Available through the HUD.

Categories:

- Technologies
- Locations
- Story
- Community
- Development

The Codex pauses gameplay while open.

---

# ⚙️ Settings Overlay

Available from:

- Welcome Screen
- Gameplay HUD

Options:

- Master Volume
- Music Volume
- Sound Volume
- Controls
- Reset Save
- Return to Title

Gameplay pauses while Settings is open.

---

# 🔔 Notifications

Notifications appear without fully interrupting gameplay.

Examples:

- Mission Complete
- +200 XP
- Achievement Unlocked
- Codex Updated
- Sector Restored
- Level Up

Recommended location:

Top-right or upper-center.

Notifications automatically disappear after a short delay.

---

# 🗺️ Location Transition Flow

```text
Walk to Door
    ↓
Interaction Prompt
    ↓
Press E
    ↓
Disable Movement
    ↓
Fade Out
    ↓
Load if Required
    ↓
Create Destination Room
    ↓
Fade In
    ↓
Enable Movement
```

---

# ⌨️ Desktop Controls

| Action | Control |
|---|---|
| Move Up | W / ↑ |
| Move Left | A / ← |
| Move Down | S / ↓ |
| Move Right | D / → |
| Interact | E / Enter |
| Close / Cancel | Escape |

HUD systems are accessible through visible buttons.

---

# 📱 Basic Touch Controls

Mobile and tablet support may use:

```text
        [▲]

   [◄]  [ ]  [►]

        [▼]          [Interact]
```

Touch controls are secondary to desktop controls.

---

# 🌟 Ending UI

During final synchronization:

```text
Developer Sector ........ CONNECTED
Community Sector ........ CONNECTED
Entertainment Sector .... CONNECTED
Knowledge Archive ....... CONNECTED
Core Network ............ SYNCHRONIZING

████████████████████ 100%
```

Then:

```text
Fade Out
    ↓
Ending Illustration / Scene
    ↓
Final Message
    ↓
Credits
```

---

# 🎬 Credits

The Credits screen contains:

- Project Lead
- Development Credits
- Asset Sources
- Fonts
- Music
- Libraries
- Special Thanks

Visible Button:

- Return to Title

---

# 🎨 UI Design Principles

1. The game world remains the focus.
2. UI should explain, not overwhelm.
3. Important information must remain readable.
4. Interaction prompts appear only when relevant.
5. Profile, Codex, and Settings are overlays rather than physical locations.
6. Loading screens should be short and informative.
7. Fade transitions should hide room construction.
8. HTML/CSS handles interface-heavy content.
9. Canvas handles movement and the playable world.

---

# 🏁 Final Summary

GTV Digital World's interface combines a pixel-art Canvas world with a modern holographic HTML/CSS interface.

The player explores physically inside the world while menus and information systems appear only when needed.

---

**End of UI Flow**
