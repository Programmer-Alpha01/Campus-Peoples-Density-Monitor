# Campus Building Density Monitor

Simple static web dashboard showing people density per floor in three campus buildings:

- **MC** (Main Campus) — 3 blocks (A:12F, B:7F, C:13F)
- **JCC** — 2 blocks (A:13F, B:13F)
- **IOH** — 1 block (11F)

Density is visualized using horizontal 10-segment bars:  
**green** = low density → **red** = high density  
Some floors can be marked as **Disabled** (no bar shown).  
Special floors like **-1F** (basement) and **Rooftop** are supported.

## Features

- Left sidebar navigation between buildings
- Arrow buttons to switch between blocks (when a building has multiple blocks)
- Fixed density values (can be manually edited in the code)
- Responsive grid layout for floors
- "Last updated" timer (relative minutes since page load)
- Info modal explaining the visualization
- Disabled floors clearly marked without density bar
- Clean modern dark sidebar + light content design

## Technologies

- HTML5
- CSS (flexbox + grid)
- Vanilla JavaScript (no frameworks)
- No external dependencies

## Folder structure
