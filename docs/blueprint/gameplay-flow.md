# 🎮 Gameplay Flow

# GTV Digital World

> *Move. Explore. Interact. Restore.*

---

# 📋 Overview

Gameplay Flow describes the complete player journey from launching the game to restoring the GTV Network.

The new gameplay presentation uses a top-down controllable Digital Explorer inside small room-based maps.

The core experience combines:

- Movement
- Exploration
- Interaction
- Missions
- Rewards
- Story progression

---

# 🚀 Complete Gameplay Flow

```text
Launch Game
    ↓
Initial Loading
    ↓
Welcome Screen
    ↓
Settings / Credits (Optional)
    ↓
Start Game
    ↓
Intro Story
    ↓
Enter Player Name
    ↓
Load Central Hub
    ↓
Learn Movement
    ↓
Walk to Mission Terminal
    ↓
Enter Mission Terminal
    ↓
Receive Mission
    ↓
Return to Hub
    ↓
Walk to Unlocked Sector
    ↓
Enter Sector
    ↓
Explore + Interact
    ↓
Complete Objective
    ↓
Receive Rewards
    ↓
Return to Hub
    ↓
Repeat Mission Cycle
    ↓
Final Synchronization
    ↓
Ending
    ↓
Credits
```

---

# 🔄 Core Gameplay Loop

```text
Receive Mission
      ↓
Walk to Destination
      ↓
Load Location
      ↓
Explore Room
      ↓
Find Interactive Object
      ↓
Interact
      ↓
Complete Objective
      ↓
Receive Reward
      ↓
Unlock Progress
      ↓
Return to Hub
      ↓
Next Mission
```

---

# 🕹️ Core Player Actions

## Movement

Players can:

- Walk up
- Walk down
- Walk left
- Walk right

Desktop controls:

```text
W / ↑ - Up
A / ← - Left
S / ↓ - Down
D / → - Right
```

## Interaction

When the player is near an interactive object:

```text
[E] Interact
```

Possible interactive objects include:

- Doors
- Terminals
- Holograms
- Consoles
- Arcade machines
- Network Fragments
- Story objects

---

# 🧭 Player Journey

## Step 1 - Initial Loading

Purpose:

Prepare the minimum assets required to begin.

Loads:

- Fonts
- Shared UI
- Player sprite
- Shared tiles
- Central Hub assets

When ready:

```text
Loading Complete
    ↓
Fade In
    ↓
Welcome Screen
```

---

## Step 2 - Welcome

Player Actions:

- Start Game
- Settings
- Credits

Reward:

None.

---

## Step 3 - Story Introduction

Purpose:

Explain the inactive GTV Network.

Player Actions:

- Read dialogue
- Continue

Reward:

Access to Player Registration.

---

## Step 4 - Player Registration

Purpose:

Personalize the experience.

Player Actions:

- Enter display name
- Confirm

Reward:

Digital Explorer profile created.

---

## Step 5 - Central Hub Introduction

Purpose:

Teach basic movement and introduce the physical world.

Player Actions:

- Move around
- Approach the Mission Terminal entrance
- Learn interaction prompt

Reward:

Mission Terminal access.

---

# 🎯 Main Mission Progression

The story contains 8 main missions.

| # | Mission | Primary Goal |
|---|---|---|
| 1 | Establish Connection | Enter the GTV Network |
| 2 | Activate Mission Terminal | Restore mission access |
| 3 | Restore Developer Lab | Restore development systems |
| 4 | Reconnect Community Hall | Restore communication |
| 5 | Reactivate Arcade | Restore entertainment systems |
| 6 | Recover Knowledge Archive | Restore Codex knowledge |
| 7 | Prepare Core Synchronization | Prepare all sectors |
| 8 | Restore GTV Network | Complete final synchronization |

---

# 🧩 Mission Cycle

Each main mission should follow a recognizable rhythm.

```text
Mission Accepted
    ↓
Destination Marked
    ↓
Travel Through Hub
    ↓
Enter Sector
    ↓
Explore
    ↓
Interact
    ↓
Complete Challenge
    ↓
Mission Complete
    ↓
XP + Reward
    ↓
Save Progress
    ↓
Return to Hub
```

The exact challenge may change between missions, but the overall rhythm should remain understandable.

---

# 📦 Location Loading Flow

When moving between rooms:

```text
Player Interacts With Door
        ↓
Lock Player Controls
        ↓
Fade Out
        ↓
Check Asset Bundle
        ↓
Already Loaded?
   ┌────┴────┐
  Yes        No
   │          │
   │      Loading Overlay
   │          │
   │      Load Assets
   │          │
   └────┬─────┘
        ↓
Create Room
        ↓
Place Player
        ↓
Fade In
        ↓
Restore Controls
```

Rooms should not visibly appear piece by piece.

---

# ⚡ Background Preloading

Whenever practical, the game may preload likely next locations while the player explores the current room.

Example:

```text
Player accepts Developer Lab mission
        ↓
Developer Lab bundle begins loading quietly
        ↓
Player walks back through Hub
        ↓
Developer Lab is already ready when entered
```

This reduces visible loading time.

---

# 🎁 Rewards

Players may receive:

- XP
- Levels
- Achievements
- Network Fragments
- Codex Entries
- New Locations
- Story Progress
- Network Restoration

Every important reward should provide immediate feedback.

---

# 📈 Unlock Progression

```text
Mission Complete
        ↓
XP
        ↓
Level Progress
        ↓
Network Restoration
        ↓
New Sector / New Objective
        ↓
Save
        ↓
Continue
```

---

# 💾 Save Flow

Important progress should save automatically after:

- Mission completion
- Level increase
- Location unlock
- Achievement unlock
- Codex unlock
- Settings change
- Final synchronization

Players should not lose meaningful progress after refreshing the browser.

---

# ❌ Failure States

There is no traditional Game Over.

Instead:

- Incomplete missions remain active
- Locked sectors remain locked
- Mini-games may be retried
- Challenges may be attempted again
- Story progress waits until the objective is complete

The experience should remain relaxed and approachable.

---

# 🏁 Completion Conditions

The game is completed when the player has:

- Finished all 8 main missions
- Restored all required sectors
- Reached Level 10
- Completed Core Synchronization
- Restored the network to 100%
- Reached the ending
- Viewed the credits

Optional achievements are not required for story completion.

---

# 🔁 Post-Game

After finishing the story, players may:

- Revisit unlocked rooms
- Walk around the restored Hub
- Replay the Arcade mini-game
- Review Codex entries
- Review achievements
- View the completed profile
- Change settings
- Replay the ending

No additional story chapter unlocks.

---

# 🔔 Player Feedback

Feedback examples:

- `+200 XP`
- `Mission Complete`
- `Achievement Unlocked`
- `Codex Entry Added`
- `Sector Restored`
- `Level Up`
- `Network 75% Restored`

Feedback should be visual, readable, and short.

---

# 📌 Gameplay Design Rules

1. Movement should feel responsive.
2. Every room should contain meaningful interactions.
3. The player should always understand the next objective.
4. Locked areas should clearly communicate why they are locked.
5. Loading should never reveal a partially assembled room.
6. Every mission should produce meaningful progression.
7. Exploration should remain compact and focused.
8. The ending should feel earned.

---

# 🏁 Final Gameplay Summary

The player enters the inactive GTV Network as a Digital Explorer, learns to move through the Central Hub, visits connected sectors, completes restoration missions, unlocks new systems, gains XP, collects Network Fragments, and gradually returns the world to full operation.

The game combines lightweight top-down exploration with modern browser UI systems to create a short but complete web adventure.

---

**End of Gameplay Flow**
