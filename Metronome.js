// metronome.js - Tone.js metronome for Piano Simulator
// Requires Tone.js loaded before this script

(() => {
  // guard: don't run until DOM ready
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(() => {
  const startBtn = document.getElementById('metroStart');
  const stopBtn = document.getElementById('metroStop');
  const bpmKnob = document.getElementById('bpmKnob');
  const bpmDisplay = document.getElementById('bpmDisplay');
  // select the SVG fill circle by its current id in the HTML
  const knobFill = document.getElementById('knobFill') || document.querySelector('.knob-fill');
  const subEl = document.getElementById('subdivision');
  const beatEl = document.getElementById('metroBeat');
  const knobBeats = Array.from(document.querySelectorAll('.knobBeat'));

    // create two players (downbeat and tick) using synths or players
    // Use small synthesized clicks to avoid shipping audio files
    const downSynth = new Tone.MembraneSynth({
      pitchDecay: 0.01,
      octaves: 4,
      envelope: { attack: 0.001, decay: 0.08, sustain: 0 }
    }).toDestination();

    const tickSynth = new Tone.NoiseSynth({
      noise: { type: 'white' },
      envelope: { attack: 0.001, decay: 0.05, sustain: 0 }
    }).toDestination();

    let isRunning = false;
    let subdivision = '2n';

    function schedule() {
      // clear any previous schedule
      Tone.Transport.cancel();

      // map subdivision select value to Tone.js time string
      const subValue = subEl.value; // values: 1=2n,2=3n,3=4n,4=8n,5=8t,6=16n
      let grid = '2n';
      switch (subValue) {
        case '1': grid = '2n'; break;
        case '2': grid = '3n'; break;
        case '3': grid = '4n'; break;
        case '4': grid = '8n'; break;
        case '5': grid = '8t'; break;
        case '6': grid = '16n'; break;
      }
      subdivision = grid;

      let counter = 0;
      // scheduleRepeat runs on the given grid
      Tone.Transport.scheduleRepeat((time) => {
        // accent downbeat: whenever counter % (4 * subdivisionsPerQuarter) == 0
        const subdivisionsPerQuarter = (grid == '2n') ? 1/2 : (grid === '3n') ? 3/4 : (grid === '4n') ? 1 : (grid === '8n' ? 2 : (grid === '8t' ? 3 : 4));
        const stepsPerBar = 4 * subdivisionsPerQuarter; // assuming 4/4
        const accent = (counter % stepsPerBar) === 0;

        if (accent) {
          downSynth.triggerAttackRelease('C3', '8n', time);
        } else {
          tickSynth.triggerAttackRelease('8n', time);
        }

        // visual indicator (safe to set here)
        if (beatEl) {
          beatEl.style.background = accent ? '#f55' : '#5f5';
          setTimeout(() => { if (beatEl) beatEl.style.background = '#ccc'; }, 90);
        }

        // update inner knob beat markers (map to 4 positions)
        if (knobBeats && knobBeats.length === 4) {
          const activeIndex = counter % 4; // 0..3
          knobBeats.forEach((el, i) => el.classList.toggle('active', i === activeIndex));
        }

        counter = (counter + 1) % stepsPerBar;
      }, grid);
    }

    startBtn.addEventListener('click', async () => {
      // required to start audio context in many browsers
      await Tone.start();
      const bpm = parseInt(bpmKnob.dataset.value, 10) || 100;
      Tone.Transport.bpm.value = bpm;
      schedule();
      Tone.Transport.start();
      isRunning = true;
      startBtn.disabled = true;
      stopBtn.disabled = false;
    });

    stopBtn.addEventListener('click', () => {
      Tone.Transport.stop();
      Tone.Transport.cancel();
      isRunning = false;
      startBtn.disabled = false;
      stopBtn.disabled = true;
    });

    // knob interaction helpers
    const minBpm = parseInt(bpmKnob.dataset.min, 10) || 30;
    const maxBpm = parseInt(bpmKnob.dataset.max, 10) || 240;

    function bpmToDash(value) {
      const pct = (value - minBpm) / (maxBpm - minBpm);
      const circumference = 2 * Math.PI * 40; // r=40
      const dash = Math.max(0, Math.min(circumference, pct * circumference));
      return { dash, circumference };
    }

    function setBpm(value, ramp = true) {
      const v = Math.max(minBpm, Math.min(maxBpm, Math.round(value)));
      bpmKnob.dataset.value = v;
      if (bpmDisplay) bpmDisplay.textContent = v;
      if (knobFill) {
        const { dash, circumference } = bpmToDash(v);
        // set stroke-dasharray to full circumference and offset so the arc length equals dash
        knobFill.setAttribute('stroke-dasharray', `${circumference}`);
        knobFill.setAttribute('stroke-dashoffset', `${circumference - dash}`);
      }
      // rotate handle accordingly (optional)
      if (isRunning) {
        if (ramp) Tone.Transport.bpm.rampTo(v, 0.1);
        else Tone.Transport.bpm.value = v;
      }
    }

  // initialize visuals
  setBpm(parseInt(bpmKnob.dataset.value, 10) || 100, false);

    // pointer interaction for knob
    let dragging = false;
    function pointerToValue(evt) {
      const rect = bpmKnob.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const x = (evt.clientX || evt.touches[0].clientX) - cx;
      const y = (evt.clientY || evt.touches[0].clientY) - cy;
      const angle = Math.atan2(y, x) * (180 / Math.PI) + 90; // rotate so top=0
      const norm = (angle < 0) ? (angle + 360) : angle;
      const pct = norm / 360;
      const value = minBpm + pct * (maxBpm - minBpm);
      return value;
    }

    bpmKnob.addEventListener('pointerdown', (e) => {
      dragging = true;
      bpmKnob.setPointerCapture(e.pointerId);
      const v = pointerToValue(e);
      setBpm(v);
    });
    window.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const v = pointerToValue(e);
      setBpm(v);
    });
    window.addEventListener('pointerup', (e) => {
      if (!dragging) return;
      dragging = false;
      try { bpmKnob.releasePointerCapture(e.pointerId); } catch (err) {}
    });


    subEl.addEventListener('change', () => {
      if (isRunning) schedule();
    });
  });
})();
