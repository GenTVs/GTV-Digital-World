# 📦 Asset Checklist

# GTV Digital World

> *Prototype first. Final art second.*

Legend:

- ✅ Ready
- 🟡 In Progress / Needs Preparation
- 🔴 Missing
- ⏳ Intentionally Deferred

---

# 🟠 Existing Branding

| Asset | Status | Destination |
|---|---|---|
| GTV Gear Icon | ✅ | `public/assets/images/branding/` |
| GTV Beta Icon | ✅ | `public/assets/images/branding/` |
| GTV Banner | ✅ | `public/assets/images/branding/` |
| Main Mascot | ✅ | `public/assets/images/characters/` |
| Profile Background | ✅ | `public/assets/images/backgrounds/` |

---

# 🔤 Fonts

| Font | Required Weights | Status |
|---|---|---|
| Nunito | 400, 600, 700, 800 | ✅ |
| Dosis | 500, 600, 700 | ✅ |

Fonts are stored locally inside:

```text
public/assets/fonts/
├── nunito/
└── dosis/
```

---

# 🎨 Concept Art

The six high-detail environment illustrations are now **visual references**, not final playable backgrounds.

Location:

```text
docs/references/concept-art/
```

| Concept | Status |
|---|---|
| Central Hub | ✅ |
| Mission Terminal | ✅ |
| Developer Lab | ✅ |
| Community Hall | ✅ |
| Arcade | ✅ |
| Ending Restored World | ✅ |

They define mood, color, architecture, lighting, and location identity.

The Ending artwork may later be reused directly as a cinematic illustration.

---

# 🧪 Prototype Assets

Final pixel art is **not required** before the first playable prototype.

Temporary development assets may be:

- Colored rectangles
- Simple tiles
- Basic icons
- Placeholder player sprite
- Temporary interaction markers

Required prototype assets:

- [x] Temporary player sprite
- [x] Temporary floor tile
- [x] Temporary wall tile
- [ ] Temporary door
- [ ] Temporary terminal
- [x] Temporary collision object

---

# 🧍 Final Player Assets

- [ ] Idle sprite - down
- [ ] Idle sprite - up
- [ ] Idle sprite - left
- [ ] Idle sprite - right
- [ ] Walk animation - down
- [ ] Walk animation - up
- [ ] Walk animation - left
- [ ] Walk animation - right

Recommended: use one sprite sheet if practical.

No full character customization is required.

---

# 🧱 Shared World Tiles

- [ ] Floor tile set
- [ ] Wall tile set
- [ ] Corners
- [ ] Door frames
- [ ] Locked door state
- [ ] Unlocked door state
- [ ] Orange pathway / energy line
- [ ] Cyan holographic tile
- [ ] Generic terminal
- [ ] Generic display
- [ ] Generic furniture
- [ ] Generic decoration
- [ ] Shadow / depth tiles

---

# 🌐 Central Hub Assets

- [ ] Hub floor tiles
- [ ] Central Network Core
- [ ] Mission Terminal entrance
- [ ] Developer Lab entrance
- [ ] Community Hall entrance
- [ ] Arcade entrance
- [ ] Locked entrance effects
- [ ] Restored entrance effects
- [ ] Hub decorations
- [ ] Restoration progress visual states

---

# 🎯 Mission Terminal Assets

- [ ] Mission console
- [ ] Network status display
- [ ] Sector map display
- [ ] Control-room decorations
- [ ] Exit door

---

# 💻 Developer Lab Assets

- [ ] Development terminal
- [ ] Server rack
- [ ] Workbench
- [ ] Hologram Core
- [ ] Diagnostic panel
- [ ] Lab decorations
- [ ] Exit door

---

# 🤝 Community Hall Assets

- [ ] Community board
- [ ] Communication terminal
- [ ] Main hologram display
- [ ] Lounge furniture
- [ ] Resource terminal
- [ ] Community decorations
- [ ] Exit door

---

# 🕹️ Arcade Assets

- [ ] Main Arcade machine
- [ ] Score display
- [ ] Arcade decorations
- [ ] Neon signage
- [ ] Prize decoration
- [ ] Exit door
- [ ] Mini-game graphics

Only **one** Arcade mini-game is required.

---

# 💠 Network Fragment

- [ ] Network Fragment sprite
- [ ] Collected state / effect

Visual direction:

> A small digital crystal or holographic data shard combining GTV orange and cyan energy.

---

# 🏆 Achievements

- [ ] First Login
- [ ] First Mission
- [ ] Developer Explorer
- [ ] Community Explorer
- [ ] Arcade Champion
- [ ] Knowledge Restored
- [ ] Network Restored
- [ ] Digital Explorer

Recommended visual system: one reusable badge frame with different center symbols.

---

# 🎨 UI Assets

Most UI should be built with HTML, CSS, and SVG instead of large PNG graphics.

Needed:

- [ ] Profile icon
- [ ] Codex icon
- [ ] Settings icon
- [ ] Mission icon
- [ ] Interaction icon
- [ ] Lock icon
- [ ] Completion icon
- [ ] Achievement badge frame

Prefer CSS / SVG for:

- Hologram panels
- Borders
- Buttons
- XP bars
- Level indicators
- Loading bars
- Notifications
- Dialogue boxes
- Scanlines
- Glow
- Simple particles

---

# 🎬 Ending Assets

- [x] Restored World concept illustration
- [ ] Final ending overlay
- [ ] Final synchronization effects
- [ ] Credits presentation assets

---

# 🔊 Audio

Audio selection is intentionally deferred until the visual prototype and gameplay feel are established.

## Music

- [ ] Welcome
- [ ] Central Hub
- [ ] Developer Lab
- [ ] Community Hall
- [ ] Arcade
- [ ] Ending

Status: ⏳ Deferred to polish.

## Sound Effects

- [ ] Click
- [ ] Interaction
- [ ] Door / Portal
- [ ] Notification
- [ ] Mission Complete
- [ ] Achievement Unlock
- [ ] Level Up
- [ ] Hologram Activate
- [ ] Scene Transition

Status: ⏳ Deferred to polish.

---

# 🧾 Asset Source Tracking

Every third-party asset must record:

- Asset name
- File name
- Creator
- Original source
- License
- Attribution requirement
- Whether it was modified
- Where it is used

Record these in:

```text
docs/references/asset-sources.md
```

Final acknowledgements are later copied into:

```text
docs/references/credits.md
```

---

# 📌 Asset Production Rule

Do not spend large amounts of time creating final pixel art before the first playable prototype works.

```text
Temporary Assets
      ↓
Movement Prototype
      ↓
Collision
      ↓
Interaction
      ↓
Room Transition
      ↓
Loading
      ↓
FIRST PLAYABLE
      ↓
Final Pixel Art
      ↓
Polish
```

---

**End of Asset Checklist**
