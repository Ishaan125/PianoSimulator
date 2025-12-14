# Piano Simulator

An interactive, browser-based piano practice tool with guides, technique panels, a metronome with a BPM knob, and quality-of-life UI features.

## Overview
- Frontend: HTML + CSS + JavaScript (vanilla)
- Audio: Tone.js for metronome, .wav files for everything else
- UI: Side panels for techniques (Scales, Chords, Arpeggios, etc.), top control buttons, metronome widget, keybinds for piano keys

## Key Features
- Metronome with circular BPM knob:
  - Start/Stop controls and subdivision selector (quarter, eighth, triplet, sixteenth)
  - BPM displayed inside the knob, with a green arc that grows with value
  - Inner disk and beat markers that highlight in sequence
- Technique panels (Scales, Chords, Arpeggios, 7th Chords, 7th Arpeggios, Key Finder, Cadences, Other)
  - Auto-play exercises: select a technique to hear notes played automatically
  - Sheet music display: shows the exercise in standard notation for visual guidance
  - Configurable options: key, type, inversion, tempo
- Piano keyboard with individual note audio samples
- Top control buttons for keybinds, pedal, and guides

## Project Structure
- Index.html — main HTML page, UI markup, metronome widget
- Hi.css — site styles, piano/side panels, metronome and knob visuals
- Main.js — primary interaction logic for piano, panels, helpers
- metronome.js — Tone.js transport scheduling and BPM knob interaction
- notes/ — per-note audio sample files
- audio/ — UI and miscellaneous audio assets
- img/ — images and icons

## Getting Started
1. Open Index.html in a modern browser (Chrome/Edge/Firefox).
2. Interact with the piano keys or top-panel features.
3. Use the metronome control in the top-right:
   - Drag the circular knob to adjust BPM
   - Start/Stop with buttons; change subdivisions from the select menu
4. Use the Techniques side panel:
  - Choose a category (e.g., Scales or Arpeggios)
  - Select the key (e.g., C, G, D♭) and options like key, type, inversion, and speed
  - Follow along with the sheet music rendered in the panel

## Metronome Details
- Built on Tone.Transport for accurate scheduling
- Subdivisions supported: 2, 3, 4, 8, 12, 16
- Visuals:
  - Green arc: Reflects BPM setting
  - Inner white disk for readability
  - Beat markers toggle active state to show beat progression

## Techniques Panel
- What it does: automatically plays selected exercises (scales, arpeggios, chords, cadences) while displaying sheet music.
- How to use:
  - Open the side panel and select a technique category.
  - Pick the exercise, choose the key, and configure options (type, inversion, speed).
  - The metronome controls the global tempo; subdivision affects the feel of playback.
- Sheet music:
  - The panel renders standard notation for the current exercise, updating when key/options change.
  - Use this to practice reading while listening.
