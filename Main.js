// The keybinds for all of the keys
const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a',
's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E',
'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X',
'C', 'V', 'B', 'N', 'M']
const BLACK_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@',
'#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '[', ']', '\\', ';', '\'', ',', '.', '/', '_',
'+', '{', '}', '|', ':']

// Groups the keys
const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

// Each key clicked calls playNote(key) method
keys.forEach(key => {
  key.addEventListener('click', () => playNote(key));
})

/*document.body.onmousedown = function() { 
  keys.forEach(key => {
    key.addEventListener('mouseover', () => playNote(key));
  })
}
document.body.onmouseup = function() {
  keys.forEach(key => {
    key.removeEventListener('mouseover', () => playNote(key));
  })
}*/

// If a key is clicked, this allows it to be clicked again
document.addEventListener('keydown', e => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
})

var i = 1;
var j = 1;

// Plays each note that is clicked
function playNote(key) {
  var length = 600;
  if (j % 2 == 0) {
    length *= 2;
  }
  const noteAudio = document.getElementById(key.dataset.note);
  // Resets the note to the start of the sound
  noteAudio.currentTime = 0;
  noteAudio.play();

  /*if (whiteKeys.includes(key)) {
    key.style.backgroundColor = '#333';
    key.style.height = "103px";
  }
  else {
    key.style.backgroundColor = 'Gainsboro';
    key.style.height = "180px";
  }*/

  // Stops the animation
  key.classList.add('active');
  setTimeout(() => {noteAudio.pause(); }, length);
  setTimeout(() => {key.classList.remove('active'); }, length);
  
  /*if (whiteKeys.includes(key)) {
    setTimeout(() => {key.style.backgroundColor = 'Black'; }, length);
    setTimeout(() => {key.style.height = "35%"; }, length);
  }
  else {
    setTimeout(() => {key.style.backgroundColor = 'white'; }, length);
    setTimeout(() => {key.style.height = "60%";}, length); 
  }*/
}

// The button at the top that shows or clears all of the keybinds that are showed on the piano
function showLetters() {
  i++;
  if (i % 2 == 1) {
    showLettersClear();
  }
  else {
    document.getElementById("#A").innerHTML = "q";
    document.getElementById("#Bb").innerHTML = "1";
    document.getElementById("#B").innerHTML = "w";
    document.getElementById("#C").innerHTML = "e";
    document.getElementById("#Db").innerHTML = "2";
    document.getElementById("#D").innerHTML = "r";
    document.getElementById("#Eb").innerHTML = "3";
    document.getElementById("#E").innerHTML = "t";
    document.getElementById("#F").innerHTML = "y";
    document.getElementById("#Gb").innerHTML = "4";
    document.getElementById("#G").innerHTML = "u";
    document.getElementById("#Ab").innerHTML = "5";
    document.getElementById("#A2").innerHTML = "i";
    document.getElementById("#Bb2").innerHTML = "6";
    document.getElementById("#B2").innerHTML = "o";
    document.getElementById("#C2").innerHTML = "p";
    document.getElementById("#Db2").innerHTML = "7";
    document.getElementById("#D2").innerHTML = "a";
    document.getElementById("#Eb2").innerHTML = "8";
    document.getElementById("#E2").innerHTML = "s";
    document.getElementById("#F2").innerHTML = "d";
    document.getElementById("#Gb2").innerHTML = "9";
    document.getElementById("#G2").innerHTML = "f";
    document.getElementById("#Ab2").innerHTML = "0";
    document.getElementById("#A3").innerHTML = "g";
    document.getElementById("#Bb3").innerHTML = "!";
    document.getElementById("#B3").innerHTML = "h";
    document.getElementById("#C3").innerHTML = "j";
    document.getElementById("#Db3").innerHTML = "@";
    document.getElementById("#D3").innerHTML = "k";
    document.getElementById("#Eb3").innerHTML = "#";
    document.getElementById("#E3").innerHTML = "l";
    document.getElementById("#F3").innerHTML = "z";
    document.getElementById("#Gb3").innerHTML = "$";
    document.getElementById("#G3").innerHTML = "x";
    document.getElementById("#Ab3").innerHTML = "%";
    document.getElementById("#A4").innerHTML = "c";
    document.getElementById("#Bb4").innerHTML = "^";
    document.getElementById("#B4").innerHTML = "v";
    document.getElementById("#C4").innerHTML = "b";
    document.getElementById("#Db4").innerHTML = "&";
    document.getElementById("#D4").innerHTML = "n";
    document.getElementById("#Eb4").innerHTML = "*";
    document.getElementById("#E4").innerHTML = "m";
    document.getElementById("#F4").innerHTML = "Q";
    document.getElementById("#Gb4").innerHTML = "(";
    document.getElementById("#G4").innerHTML = "W";
    document.getElementById("#Ab4").innerHTML = ")";
    document.getElementById("#A5").innerHTML = "E";
    document.getElementById("#Bb5").innerHTML = "-";
    document.getElementById("#B5").innerHTML = "R";
    document.getElementById("#C5").innerHTML = "T";
    document.getElementById("#Db5").innerHTML = "=";
    document.getElementById("#D5").innerHTML = "Y";
    document.getElementById("#Eb5").innerHTML = "[";
    document.getElementById("#E5").innerHTML = "U";
    document.getElementById("#F5").innerHTML = "I";
    document.getElementById("#Gb5").innerHTML = "]";
    document.getElementById("#G5").innerHTML = "O";
    document.getElementById("#Ab5").innerHTML = "\\";
    document.getElementById("#A6").innerHTML = "P";
    document.getElementById("#Bb6").innerHTML = ";";
    document.getElementById("#B6").innerHTML = "A";
    document.getElementById("#C6").innerHTML = "S";
    document.getElementById("#Db6").innerHTML = "\'";
    document.getElementById("#D6").innerHTML = "D";
    document.getElementById("#Eb6").innerHTML = ",";
    document.getElementById("#E6").innerHTML = "F";
    document.getElementById("#F6").innerHTML = "G";
    document.getElementById("#Gb6").innerHTML = ".";
    document.getElementById("#G6").innerHTML = "H";
    document.getElementById("#Ab6").innerHTML = "/";
    document.getElementById("#A7").innerHTML = "J";
    document.getElementById("#Bb7").innerHTML = "_";
    document.getElementById("#B7").innerHTML = "K";
    document.getElementById("#C7").innerHTML = "L";
    document.getElementById("#Db7").innerHTML = "+";
    document.getElementById("#D7").innerHTML = "Z";
    document.getElementById("#Eb7").innerHTML = "{";
    document.getElementById("#E7").innerHTML = "X";
    document.getElementById("#F7").innerHTML = "C";
    document.getElementById("#Gb7").innerHTML = "}";
    document.getElementById("#G7").innerHTML = "V";
    document.getElementById("#Ab7").innerHTML = "|";
    document.getElementById("#A8").innerHTML = "B";
    document.getElementById("#Bb8").innerHTML = ":";
    document.getElementById("#B8").innerHTML = "N";
    document.getElementById("#C8").innerHTML = "M";
  }
}

function showLettersClear() {
  document.getElementById("#A").innerHTML = "";
  document.getElementById("#Bb").innerHTML = "";
  document.getElementById("#B").innerHTML = "";
  document.getElementById("#C").innerHTML = "";
  document.getElementById("#Db").innerHTML = "";
  document.getElementById("#D").innerHTML = "";
  document.getElementById("#Eb").innerHTML = "";
  document.getElementById("#E").innerHTML = "";
  document.getElementById("#F").innerHTML = "";
  document.getElementById("#Gb").innerHTML = "";
  document.getElementById("#G").innerHTML = "";
  document.getElementById("#Ab").innerHTML = "";
  document.getElementById("#A2").innerHTML = "";
  document.getElementById("#Bb2").innerHTML = "";
  document.getElementById("#B2").innerHTML = "";
  document.getElementById("#C2").innerHTML = "";
  document.getElementById("#Db2").innerHTML = "";
  document.getElementById("#D2").innerHTML = "";
  document.getElementById("#Eb2").innerHTML = "";
  document.getElementById("#E2").innerHTML = "";
  document.getElementById("#F2").innerHTML = "";
  document.getElementById("#Gb2").innerHTML = "";
  document.getElementById("#G2").innerHTML = "";
  document.getElementById("#Ab2").innerHTML = "";
  document.getElementById("#A3").innerHTML = "";
  document.getElementById("#Bb3").innerHTML = "";
  document.getElementById("#B3").innerHTML = "";
  document.getElementById("#C3").innerHTML = "";
  document.getElementById("#Db3").innerHTML = "";
  document.getElementById("#D3").innerHTML = "";
  document.getElementById("#Eb3").innerHTML = "";
  document.getElementById("#E3").innerHTML = "";
  document.getElementById("#F3").innerHTML = "";
  document.getElementById("#Gb3").innerHTML = "";
  document.getElementById("#G3").innerHTML = "";
  document.getElementById("#Ab3").innerHTML = "";
  document.getElementById("#A4").innerHTML = "";
  document.getElementById("#Bb4").innerHTML = "";
  document.getElementById("#B4").innerHTML = "";
  document.getElementById("#C4").innerHTML = "";
  document.getElementById("#Db4").innerHTML = "";
  document.getElementById("#D4").innerHTML = "";
  document.getElementById("#Eb4").innerHTML = "";
  document.getElementById("#E4").innerHTML = "";
  document.getElementById("#F4").innerHTML = "";
  document.getElementById("#Gb4").innerHTML = "";
  document.getElementById("#G4").innerHTML = "";
  document.getElementById("#Ab4").innerHTML = "";
  document.getElementById("#A5").innerHTML = "";
  document.getElementById("#Bb5").innerHTML = "";
  document.getElementById("#B5").innerHTML = "";
  document.getElementById("#C5").innerHTML = "";
  document.getElementById("#Db5").innerHTML = "";
  document.getElementById("#D5").innerHTML = "";
  document.getElementById("#Eb5").innerHTML = "";
  document.getElementById("#E5").innerHTML = "";
  document.getElementById("#F5").innerHTML = "";
  document.getElementById("#Gb5").innerHTML = "";
  document.getElementById("#G5").innerHTML = "";
  document.getElementById("#Ab5").innerHTML = "";
  document.getElementById("#A6").innerHTML = "";
  document.getElementById("#Bb6").innerHTML = "";
  document.getElementById("#B6").innerHTML = "";
  document.getElementById("#C6").innerHTML = "";
  document.getElementById("#Db6").innerHTML = "";
  document.getElementById("#D6").innerHTML = "";
  document.getElementById("#Eb6").innerHTML = "";
  document.getElementById("#E6").innerHTML = "";
  document.getElementById("#F6").innerHTML = "";
  document.getElementById("#Gb6").innerHTML = "";
  document.getElementById("#G6").innerHTML = "";
  document.getElementById("#Ab6").innerHTML = "";
  document.getElementById("#A7").innerHTML = "";
  document.getElementById("#Bb7").innerHTML = "";
  document.getElementById("#B7").innerHTML = "";
  document.getElementById("#C7").innerHTML = "";
  document.getElementById("#Db7").innerHTML = "";
  document.getElementById("#D7").innerHTML = "";
  document.getElementById("#Eb7").innerHTML = "";
  document.getElementById("#E7").innerHTML = "";
  document.getElementById("#F7").innerHTML = "";
  document.getElementById("#Gb7").innerHTML = "";
  document.getElementById("#G7").innerHTML = "";
  document.getElementById("#Ab7").innerHTML = "";
  document.getElementById("#A8").innerHTML = "";
  document.getElementById("#Bb8").innerHTML = "";
  document.getElementById("#B8").innerHTML = "";
  document.getElementById("#C8").innerHTML = "";
}

// Key finder with every every and octave
function findKey(keyFind, octaveFind) { 
  if(keyFind == '/A' && octaveFind == 1) { play('#A1', 1000); }
  else if(keyFind == '/A' && octaveFind == 2) { play('#A2', 1000); }
  else if(keyFind == '/A' && octaveFind == 3) { play('#A3', 1000); }
  else if(keyFind == '/A' && octaveFind == 4) { play('#A4', 1000); }
  else if(keyFind == '/A' && octaveFind == 5) { play('#A5', 1000); }
  else if(keyFind == '/A' && octaveFind == 6) { play('#A6', 1000); }
  else if(keyFind == '/A' && octaveFind == 7) { play('#A7', 1000); }
  else if(keyFind == '/A' && octaveFind == 8) { play('#A8', 1000); }
  else if(keyFind == '/Bb' && octaveFind == 1) { play('#Bb1', 1000); }
  else if(keyFind == '/Bb' && octaveFind == 2) { play('#Bb2', 1000); }
  else if(keyFind == '/Bb' && octaveFind == 3) { play('#Bb3', 1000); }
  else if(keyFind == '/Bb' && octaveFind == 4) { play('#Bb4', 1000); }
  else if(keyFind == '/Bb' && octaveFind == 5) { play('#Bb5', 1000); }
  else if(keyFind == '/Bb' && octaveFind == 6) { play('#Bb6', 1000); }
  else if(keyFind == '/Bb' && octaveFind == 7) { play('#Bb7', 1000); }
  else if(keyFind == '/Bb' && octaveFind == 8) { play('#Bb8', 1000); }
  else if(keyFind == '/B' && octaveFind == 1) { play('#B1', 1000); }
  else if(keyFind == '/B' && octaveFind == 2) { play('#B2', 1000); }
  else if(keyFind == '/B' && octaveFind == 3) { play('#B3', 1000); }
  else if(keyFind == '/B' && octaveFind == 4) { play('#B4', 1000); }
  else if(keyFind == '/B' && octaveFind == 5) { play('#B5', 1000); }
  else if(keyFind == '/B' && octaveFind == 6) { play('#B6', 1000); }
  else if(keyFind == '/B' && octaveFind == 7) { play('#B7', 1000); }
  else if(keyFind == '/B' && octaveFind == 8) { play('#B8', 1000); }
  else if(keyFind == '/C' && octaveFind == 1) { play('#C1', 1000); }
  else if(keyFind == '/C' && octaveFind == 2) { play('#C2', 1000); }
  else if(keyFind == '/C' && octaveFind == 3) { play('#C3', 1000); }
  else if(keyFind == '/C' && octaveFind == 4) { play('#C4', 1000); }
  else if(keyFind == '/C' && octaveFind == 5) { play('#C5', 1000); }
  else if(keyFind == '/C' && octaveFind == 6) { play('#C6', 1000); }
  else if(keyFind == '/C' && octaveFind == 7) { play('#C7', 1000); }
  else if(keyFind == '/C' && octaveFind == 8) { play('#C8', 1000); }
  else if(keyFind == '/Db' && octaveFind == 1) { play('#Db1', 1000); }
  else if(keyFind == '/Db' && octaveFind == 2) { play('#Db2', 1000); }
  else if(keyFind == '/Db' && octaveFind == 3) { play('#Db3', 1000); }
  else if(keyFind == '/Db' && octaveFind == 4) { play('#Db4', 1000); }
  else if(keyFind == '/Db' && octaveFind == 5) { play('#Db5', 1000); }
  else if(keyFind == '/Db' && octaveFind == 6) { play('#Db6', 1000); }
  else if(keyFind == '/Db' && octaveFind == 7) { play('#Db7', 1000); }
  else if(keyFind == '/D' && octaveFind == 1) { play('#D1', 1000); }
  else if(keyFind == '/D' && octaveFind == 2) { play('#D2', 1000); }
  else if(keyFind == '/D' && octaveFind == 3) { play('#D3', 1000); }
  else if(keyFind == '/D' && octaveFind == 4) { play('#D4', 1000); }
  else if(keyFind == '/D' && octaveFind == 5) { play('#D5', 1000); }
  else if(keyFind == '/D' && octaveFind == 6) { play('#D6', 1000); }
  else if(keyFind == '/D' && octaveFind == 7) { play('#D7', 1000); }
  else if(keyFind == '/Eb' && octaveFind == 1) { play('#Eb1', 1000); }
  else if(keyFind == '/Eb' && octaveFind == 2) { play('#Eb2', 1000); }
  else if(keyFind == '/Eb' && octaveFind == 3) { play('#Eb3', 1000); }
  else if(keyFind == '/Eb' && octaveFind == 4) { play('#Eb4', 1000); }
  else if(keyFind == '/Eb' && octaveFind == 5) { play('#Eb5', 1000); }
  else if(keyFind == '/Eb' && octaveFind == 6) { play('#Eb6', 1000); }
  else if(keyFind == '/Eb' && octaveFind == 7) { play('#Eb7', 1000); }
  else if(keyFind == '/E' && octaveFind == 1) { play('#E1', 1000); }
  else if(keyFind == '/E' && octaveFind == 2) { play('#E2', 1000); }
  else if(keyFind == '/E' && octaveFind == 3) { play('#E3', 1000); }
  else if(keyFind == '/E' && octaveFind == 4) { play('#E4', 1000); }
  else if(keyFind == '/E' && octaveFind == 5) { play('#E5', 1000); }
  else if(keyFind == '/E' && octaveFind == 6) { play('#E6', 1000); }
  else if(keyFind == '/E' && octaveFind == 7) { play('#E7', 1000); }
  else if(keyFind == '/F' && octaveFind == 1) { play('#F1', 1000); }
  else if(keyFind == '/F' && octaveFind == 2) { play('#F2', 1000); }
  else if(keyFind == '/F' && octaveFind == 3) { play('#F3', 1000); }
  else if(keyFind == '/F' && octaveFind == 4) { play('#F4', 1000); }
  else if(keyFind == '/F' && octaveFind == 5) { play('#F5', 1000); }
  else if(keyFind == '/F' && octaveFind == 6) { play('#F6', 1000); }
  else if(keyFind == '/F' && octaveFind == 7) { play('#F7', 1000); }
  else if(keyFind == '/Gb' && octaveFind == 1) { play('#Gb1', 1000); }
  else if(keyFind == '/Gb' && octaveFind == 2) { play('#Gb2', 1000); }
  else if(keyFind == '/Gb' && octaveFind == 3) { play('#Gb3', 1000); }
  else if(keyFind == '/Gb' && octaveFind == 4) { play('#Gb4', 1000); }
  else if(keyFind == '/Gb' && octaveFind == 5) { play('#Gb5', 1000); }
  else if(keyFind == '/Gb' && octaveFind == 6) { play('#Gb6', 1000); }
  else if(keyFind == '/Gb' && octaveFind == 7) { play('#Gb7', 1000); }
  else if(keyFind == '/G' && octaveFind == 1) { play('#G1', 1000); }
  else if(keyFind == '/G' && octaveFind == 2) { play('#G2', 1000); }
  else if(keyFind == '/G' && octaveFind == 3) { play('#G3', 1000); }
  else if(keyFind == '/G' && octaveFind == 4) { play('#G4', 1000); }
  else if(keyFind == '/G' && octaveFind == 5) { play('#G5', 1000); }
  else if(keyFind == '/G' && octaveFind == 6) { play('#G6', 1000); }
  else if(keyFind == '/G' && octaveFind == 7) { play('#G7', 1000); }
  else if(keyFind == '/Ab' && octaveFind == 1) { play('#Ab1', 1000); }
  else if(keyFind == '/Ab' && octaveFind == 2) { play('#Ab2', 1000); }
  else if(keyFind == '/Ab' && octaveFind == 3) { play('#Ab3', 1000); }
  else if(keyFind == '/Ab' && octaveFind == 4) { play('#Ab4', 1000); }
  else if(keyFind == '/Ab' && octaveFind == 5) { play('#Ab5', 1000); }
  else if(keyFind == '/Ab' && octaveFind == 6) { play('#Ab6', 1000); }
  else if(keyFind == '/Ab' && octaveFind == 7) { play('#Ab7', 1000); }
  // Send a message if the input is invalid
  else {
    window.alert("This key doesn't exist!")
  }
}

// Metronome
const metr = new Audio('audio/Click.wav');
function m() {
  // Uses a loop to play the sound over and over again quickly. Doesn’t stop until button is clicked again
  for (let i = 0; i < 10; i++) {
    metronome();
    setTimeout(donothing(), 1000);
  }
}
function metronome() {
 // metr.currentTime = 0;
  metr.play();
  setTimeout(() => { metr.pause(); }, 1000);
  return;
}

function donothing() {
  //
}

// Pedal increases the length of the sound of each note by incrementing j
function pedal() {
  j++;
}

function btn() {
  const audio = new Audio('Audio/Btn.wav');
  audio.play();
}

// Dark mode button
// Changes the background, numerals, and speed symbol to the appropriate colors
var a = 0;
function dark() {
  a++;
  if (a % 3 == 1) {
    document.body.style.backgroundColor = 'black';
    document.getElementById('one').style.color = 'white';
    document.getElementById('four').style.color = 'white';
    document.getElementById('five').style.color = 'white';
    document.getElementById('six').style.color = 'white';
    document.getElementById('Speed').style.color = 'white';
    document.getElementById('Quart').style.color = 'white';
    document.getElementById('dark').innerHTML = "Kinda Dark Mode";
  }
  else if (a % 3 == 2) {
    document.body.style.backgroundColor = '#313131';
    document.getElementById('one').style.color = 'white';
    document.getElementById('four').style.color = 'white';
    document.getElementById('five').style.color = 'white';
    document.getElementById('six').style.color = 'white';
    document.getElementById('Speed').style.color = 'white';
    document.getElementById('Quart').style.color = 'white';
    document.getElementById("dark").innerHTML = "Light Mode";
  }
  else {
    document.body.style.backgroundColor = 'white';
    document.getElementById('one').style.color = 'black';
    document.getElementById('four').style.color = 'black';
    document.getElementById('five').style.color = 'black';
    document.getElementById('six').style.color = 'black';
    document.getElementById('Speed').style.color = 'black';
    document.getElementById('Quart').style.color = 'black';
    document.getElementById("dark").innerHTML = "Dark Mode";
  }
}

// Activates when a button in the side panel is clicked
document.getElementById("scales").addEventListener("click", function(){
  document.querySelector(".sidebar").classList.toggle("sidebaractive");
})
document.getElementById("keyFind").addEventListener("click", function(){
  document.querySelector(".sideKey").classList.toggle("sidekeyactive");
})
document.getElementById("chords").addEventListener("click", function(){
  document.querySelector(".sideChord").classList.toggle("sidechordactive");
})
document.getElementById("arpeggios").addEventListener("click", function(){
  document.querySelector(".sideArr").classList.toggle("sidearractive");
})
document.getElementById("cadences").addEventListener("click", function(){
  document.querySelector(".sideCadence").classList.toggle("sidecadenceactive");
})
document.getElementById("7chords").addEventListener("click", function(){
  document.querySelector(".sideChord7").classList.toggle("sidechord7active");
})
document.getElementById("arpeggios7").addEventListener("click", function(){
  document.querySelector(".sideArr7").classList.toggle("sidearr7active");
})
document.getElementById("other").addEventListener("click", function(){
  document.querySelector(".sideOther").classList.toggle("sideotheractive");
})

/*----------Side Panel----------*/

var keyNote;
var typeNote;
var lengthNote;

// Selects the key from the dropdown menu
let selection = document.getElementById('scaleDrop');
selection.addEventListener('change', () => {
    keyNote = selection.options[selection.selectedIndex].value;
});

// Selects the type of scale to play and highlights the button
function major() {
  typeNote = 0;
  document.getElementById('MajorS').style.backgroundColor = 'limegreen';
  document.getElementById('MinorS').style.backgroundColor = '#f3f0f3';
  document.getElementById('MelodicS').style.backgroundColor = '#f3f0f3';
}
function minor() {
  typeNote = 1;
  document.getElementById('MinorS').style.backgroundColor = 'limegreen';
  document.getElementById('MajorS').style.backgroundColor = '#f3f0f3';
  document.getElementById('MelodicS').style.backgroundColor = '#f3f0f3';
}
function melodic() {
  typeNote = 2;
  document.getElementById('MelodicS').style.backgroundColor = 'limegreen';
  document.getElementById('MajorS').style.backgroundColor = '#f3f0f3';
  document.getElementById('MinorS').style.backgroundColor = '#f3f0f3';
}

function next() {
  reset();
  // Gets the speed from the slider
  lengthNote = document.getElementById('rangeValue').innerText;
  playSequence(keyNote, typeNote, lengthNote);
}

var keyFind;
var octaveFind;

// Gets the key and octave from the dropdown menus for the key finder
let selectionFind = document.getElementById('keyDropKey');
selectionFind.addEventListener('change', () => {
    keyFind = selectionFind.options[selectionFind.selectedIndex].value;
});

let selectionOctave = document.getElementById('keyDropOctave');
selectionOctave.addEventListener('change', () => {
    octaveFind = selectionOctave.options[selectionOctave.selectedIndex].value;
});

function next2() {
  findKey(keyFind, octaveFind);
}

// Plays the audio of notes without clicking the piano
function play(key, length) {
  if (j % 2 == 0) {
    length *= 2;
  }
  const noteAudio = document.querySelector(key);
  // Animation for the keys
  if (key.toString().includes('b')) {
    document.getElementById(key.toString()).style.backgroundColor = '#464646';
    document.getElementById(key.toString()).style.height = "34%";
  }
  else {
    document.getElementById(key.toString()).style.backgroundColor = 'Gainsboro';
    document.getElementById(key.toString()).style.height = "59.1%";
  }

  // Plays the note
  noteAudio.currentTime = 0;
  noteAudio.play();
  setTimeout(() => {noteAudio.pause(); }, length);

  // Resets the animation for the keys
  if (key.toString().includes('b')) {
    setTimeout(() => {document.getElementById(key.toString()).style.backgroundColor = 'Black'; }, length);
    setTimeout(() => {document.getElementById(key.toString()).style.height = "35%"; }, length);
  }
  else {
    setTimeout(() => {document.getElementById(key.toString()).style.backgroundColor = 'white'; }, length);
    setTimeout(() => {document.getElementById(key.toString()).style.height = "60%";}, length);
  }
}
// The most complicated method that is used thousands of times in the side panel
function playOrder(key, length, times) {
  // Plays the note
  play(key, length);

  // Sets the x-axis position of all of the notes
  if (times == 3.2 || times == 2.2) {
    number = 2;
  }
  else if (times == 4.4 || times == 3.4) {
    number = 3;
  }
  else if (times == 5.6 || times == 4.6) {
    number = 4;
  }
  else if (times == 0.1) {
    number = 1;
  }
  else if (times == 0.11) {
    number = 16;
  }
  else if (times == 0.111) {
    number = 17;
  }
  else if (times == 0.1111) {
    number = 18;
  }
  else if (times == 1.5 || times == 1.54) {
    number = 2;
  }
  else if (times == 1.55) {
    number = 19;
  }
  else if (times == 1.555) {
    number = 20;
  }
  else if (times == 1.5555) {
    number = 21;
  }
  else if (times == 6.8) {
    number = 5;
  }
  else if (times == 16) {
    number = 22;
  }
  else if (times == 17) {
    number = 23;
  }
  else {
    number = times;
  }

  // y-axis position based on different circumstances and types
  if (typeHeight == 0 || typeHeight == null) {
    if (key == '#A3' || (key == '#Ab2' && !sharps && numAccident > 2) || (key == '#Bb3' && sharps && numAccident > 4)) {
      findHeight = 49.04;
    }
    else if ((key == '#B3' && numAccident < 6) || (key == '#Bb3' && !sharps && numAccident > 0) || (key == '#C3' && sharps && numAccident > 6)) {
      findHeight = 48.42;
    }
    else if (key == '#C3' || (key == '#B3' && !sharps && numAccident > 5) || (key == '#Db3' && sharps && numAccident > 1)) {
      findHeight = 47.8;
    }
    else if (key == '#D3' || (key == '#Db3' && !sharps && numAccident > 3) || (key == '#Eb3' && sharps && numAccident > 3)) {
      findHeight = 47.18;
    }
    else if ((key == '#E3' && numAccident < 6) || (key == '#Eb3' && !sharps && numAccident > 1) || (key == '#F3' && sharps && numAccident > 5)) {
      findHeight = 46.56;
    }
    else if (key == '#F3' || (key == '#E3' && !sharps && numAccident > 6) || (key == '#Gb3' && sharps && numAccident > 0)) {
      findHeight = 45.94;
    }
    else if (key == '#G3' || (key == '#Gb3' && !sharps && numAccident > 4) || (key == '#Ab3' && sharps && numAccident > 2)) {
      findHeight = 45.32;
    }
    else if (key == '#A4' || (key == '#Ab3' && !sharps && numAccident > 2) || (key == '#Bb4' && sharps && numAccident > 4)) {
      findHeight = 44.7;
    }
    else if ((key == '#B4' && numAccident < 6) || (key == '#Bb4' && !sharps && numAccident > 0) || (key == '#C4' && sharps && numAccident > 6)) {
      findHeight = 44.08;
    }
    else if (key == '#C4' || (key == '#B4' && !sharps && numAccident > 5) || (key == '#Db4' && sharps && numAccident > 1)) {
      findHeight = 38.46;
    }
    else if (key == '#D4' || (key == '#Db4' && !sharps && numAccident > 3) || (key == '#Eb4' && sharps && numAccident > 3)) {
      findHeight = 37.84;
    }
    else if ((key == '#E4' && numAccident < 6) || (key == '#Eb4' && !sharps && numAccident > 1) || (key == '#F4' && sharps && numAccident > 5)) {
      findHeight = 37.22;
    }
    else if (key == '#F4' || (key == '#E4' && !sharps && numAccident > 6) || (key == '#Gb4' && sharps && numAccident > 0)) {
      findHeight = 36.6;
    }
    else if (key == '#G4' || (key == '#Gb4' && !sharps && numAccident > 4) || (key == '#Ab4' && sharps && numAccident > 2)) {
      findHeight = 35.98;
    }
    else if (key == '#A5' || (key == '#Ab4' && !sharps && numAccident > 2) || (key == '#Bb5' && sharps && numAccident > 4)) {
      findHeight = 35.36;
    }
    else if ((key == '#B5' && numAccident < 6) || (key == '#Bb5' && !sharps && numAccident > 0) || (key == '#C5' && sharps && numAccident > 6)) {
      findHeight = 34.74;
    }
    else if (key == '#C5' || (key == '#B5' && !sharps && numAccident > 5) || (key == '#Db5' && sharps && numAccident > 1)) {
      findHeight = 34.12;
    }
    else if (key == '#D5' || (key == '#Db5' && !sharps && numAccident > 3) || (key == '#Eb5' && sharps && numAccident > 3)) {
      findHeight = 33.5;
    }
    else if ((key == '#E5' && numAccident < 7) || (key == '#Eb5' && !sharps && numAccident > 1)|| (key == '#Fb5' && sharps && numAccident > 5)) {
      findHeight = 32.88;
    }
    else if (key == '#F5' || (key == '#E5' && !sharps && numAccident > 6)|| (key == '#Gb5' && sharps && numAccident > 0)) {
      findHeight = 32.26;
    }
    else if (key == '#G5' || (key == '#Gb5' && !sharps && numAccident > 4) || (key == '#Ab5' && sharps && numAccident > 2)) {
      findHeight = 31.64;
    }
    else if (key == '#A6' || (key == '#Ab5' && !sharps && numAccident > 2) || (key == '#Bb6' && sharps && numAccident > 4)) {
      findHeight = 31.02;
    }
    else if ((key == '#B6' && numAccident < 6) || (key == '#Bb6' && !sharps && numAccident > 0) || (key == '#C6' && sharps && numAccident > 6)) {
      findHeight = 30.4;
    }
    else if (key == '#C6' || (key == '#B6' && !sharps && numAccident > 5) || (key == '#Db6' && sharps && numAccident > 1)) {
      findHeight = 29.78;
    }
    else if (key == '#D6' || (key == '#Db6' && !sharps && numAccident > 3) || (key == '#Eb6' && sharps && numAccident > 3)) {
      findHeight = 29.16;
    }
    else if ((key == '#E6' && numAccident < 7) || (key == '#Eb6' && !sharps && numAccident > 1)|| (key == '#Fb6' && sharps && numAccident > 5)) {
      findHeight = 28.54;
    }
    else if (key == '#F6' || (key == '#E6' && !sharps && numAccident > 6)|| (key == '#Gb6' && sharps && numAccident > 0)) {
      findHeight = 27.92;
    }
    else {
      findHeight = 30;
    }
  }

  //var cb = false;
  //var fb = false;
  //if (numAccident > 5 && !sharp) {
    //cb = true;
  //}
  //if (numAccident > 6 && !sharp) {
    //cb = true;
 // }
 // Gb, G, Db, D
  else if (typeHeight == 1 || typeHeight == 2) {
    if (Bsh && key == '#C4') {
      findHeight = 44.08;
    }
    else if (Bsh && key == '#C5') {
      findHeight = 34.74;
    }
    else if (Csh && key == '#Db4') {
      findHeight = 38.46;
    }
    else if (Csh && key == '#Db5') {
      findHeight = 34.12;
    }
    else if (Esh && key == '#F4') {
      findHeight = 37.22;
    }
    else if (Esh && key == '#F5') {
      findHeight = 32.88;
    }
    else if (Fsh && key == '#Gb4') {
      findHeight = 36.6;
    }
    else if (Fsh && key == '#Gb5') {
      findHeight = 32.26;
    }
    else if (Gsh && key == '#Ab4') {
      findHeight = 35.98;
    }
    else if (Gsh && key == '#Ab5') {
      findHeight = 31.64;
    }
    else if (key == '#A3' || (key == '#Ab2' && !sharps) || (key == '#Bb3' && sharps)) {
      findHeight = 49.04;
    }
    else if ((key == '#B3' && numAccident < 6) || (key == '#Bb3' && !sharps) || (key == '#C3' && !sharps && numAccident > 5)) {
      findHeight = 48.42;
    }
    else if (key == '#C3' || (key == '#B3' && !sharps) || (key == '#Db3' && sharps)) {
      findHeight = 47.8;
    }
    else if (key == '#D3' || (key == '#Db3' && !sharps) || (key == '#Eb3' && sharps)) {
      findHeight = 47.18;
    }
    else if ((key == '#E3' && numAccident < 7) || (key == '#Eb3' && !sharps) || (key == '#F3' && !sharps && numAccident > 6)) {
      findHeight = 46.56;
    }
    else if (key == '#F3' || (key == '#E3' && !sharps) || (key == '#Gb3' && sharps)) {
      findHeight = 45.94;
    }
    else if (key == '#G3' || (key == '#Gb3' && !sharps) || (key == '#Ab3' && sharps)) {
      findHeight = 45.32;
    }
    else if (key == '#A4' || (key == '#Ab3' && !sharps) || (key == '#Bb4' && sharps)) {
      findHeight = 44.7;
    }
    else if ((key == '#B4' && numAccident < 6) || (key == '#Bb4' && !sharps) || (key == '#C4' && !sharps && numAccident > 5)) {
      findHeight = 44.08;
    }
    else if (key == '#C4' || (key == '#B4' && !sharps) || (key == '#Db4' && sharps)) {
      findHeight = 38.46;
    }
    else if (key == '#D4' || (key == '#Db4' && !sharps) || (key == '#Eb4' && sharps)) {
      findHeight = 37.84;
    }
    else if ((key == '#E4' && numAccident < 7) || (key == '#Eb4' && !sharps) || (key == '#F4' && !sharps && numAccident > 6)) {
      findHeight = 37.22;
    }
    else if (key == '#F4' || (key == '#E4' && !sharps) || (key == '#Gb4' && sharps)) {
      findHeight = 36.6;
    }
    else if (key == '#G4' || (key == '#Gb4' && !sharps) || (key == '#Ab4' && sharps)) {
      findHeight = 35.98;
    }
    else if (key == '#A5' || (key == '#Ab4' && !sharps) || (key == '#Bb5' && sharps)) {
      findHeight = 35.36;
    }
    else if ((key == '#B5' && numAccident < 6) || (key == '#Bb5' && !sharps) || (key == '#C5' && !sharps && numAccident > 5)) {
      findHeight = 34.74;
    }
    else if (key == '#C5' || (key == '#B5' && !sharps) || (key == '#Db5' && sharps)) {
      findHeight = 34.12;
    }
    else if (key == '#D5' || (key == '#Db5' && !sharps) || (key == '#Eb5' && sharps)) {
      findHeight = 33.5;
    }
    else if ((key == '#E5' && numAccident < 7) || (key == '#Eb5' && !sharps)|| (key == '#Fb5' && !sharps && numAccident > 6)) {
      findHeight = 32.88;
    }
    else if (key == '#F5' || (key == '#E5' && !sharps)|| (key == '#Gb5' && sharps)) {
      findHeight = 32.26;
    }
    else if (key == '#G5' || (key == '#Gb5' && !sharps) || (key == '#Ab5' && sharps)) {
      findHeight = 31.64;
    }
    else {
      findHeight = 30;
    }
  }
  else {
    findHeight = 30;
  }
  // Prints the note on the sheet music with the dimensions
  note(findHeight, number);

  // Positions of all of the ledger lines
  if (findHeight <= 31.02 && !oneA) {
    oneA = true;
    document.getElementById("ledge1A").style.visibility = "visible";
    if (number == 6) {
      document.getElementById("ledge1A").style.right = 59.5 + "%";
    }
    else if (number == 7) {
      document.getElementById("ledge1A").style.right = 57.5 + "%";
    }
    else if (number == 8) {
      document.getElementById("ledge1A").style.right = 55.5 + "%";
    }
    else if (number == 9) {
      document.getElementById("ledge1A").style.right = 53.5 + "%";
    }
    else if (number == 10) {
      document.getElementById("ledge1A").style.right = 51.5 + "%";
    }
    else if (number == 11) {
      document.getElementById("ledge1A").style.right = 49.5 + "%";
    }
  }
  else if (findHeight <= 31.02 && !twoA) {
    twoA = true;
    document.getElementById("ledge2A").style.visibility = "visible";
    if (number == 6) {
      document.getElementById("ledge2A").style.right = 59.5 + "%";
    }
    else if (number == 7) {
      document.getElementById("ledge2A").style.right = 57.5 + "%";
    }
    else if (number == 8) {
      document.getElementById("ledge2A").style.right = 55.5 + "%";
    }
    else if (number == 9) {
      document.getElementById("ledge2A").style.right = 53.5 + "%";
    }
    else if (number == 10) {
      document.getElementById("ledge2A").style.right = 51.5 + "%";
    }
    else if (number == 11) {
      document.getElementById("ledge2A").style.right = 49.5 + "%";
    }
  }
  else if (findHeight <= 31.02 && !threeA) {
    threeA = true;
    document.getElementById("ledge3A").style.visibility = "visible";
    if (number == 6) {
      document.getElementById("ledge3A").style.right = 59.5 + "%";
    }
    else if (number == 7) {
      document.getElementById("ledge3A").style.right = 57.5 + "%";
    }
    else if (number == 8) {
      document.getElementById("ledge3A").style.right = 55.5 + "%";
    }
    else if (number == 9) {
      document.getElementById("ledge3A").style.right = 53.5 + "%";
    }
    else if (number == 10) {
      document.getElementById("ledge3A").style.right = 51.5 + "%";
    }
    else if (number == 11) {
      document.getElementById("ledge3A").style.right = 49.5 + "%";
    }
  }
  else if (findHeight <= 31.02 && !fourA) {
    fourA = true;
    document.getElementById("ledge4A").style.visibility = "visible";
    if (number == 6) {
      document.getElementById("ledge4A").style.right = 59.5 + "%";
    }
    else if (number == 7) {
      document.getElementById("ledge4A").style.right = 57.5 + "%";
    }
    else if (number == 8) {
      document.getElementById("ledge4A").style.right = 55.5 + "%";
    }
    else if (number == 9) {
      document.getElementById("ledge4A").style.right = 53.5 + "%";
    }
    else if (number == 10) {
      document.getElementById("ledge4A").style.right = 51.5 + "%";
    }
    else if (number == 11) {
      document.getElementById("ledge4A").style.right = 49.5 + "%";
    }
  }
  else if (findHeight <= 31.02) {
    document.getElementById("ledge5A").style.visibility = "visible";
    if (number == 6) {
      document.getElementById("ledge5A").style.right = 59.5 + "%";
    }
    else if (number == 7) {
      document.getElementById("ledge5A").style.right = 57.5 + "%";
    }
    else if (number == 8) {
      document.getElementById("ledge5A").style.right = 55.5 + "%";
    }
    else if (number == 9) {
      document.getElementById("ledge5A").style.right = 53.5 + "%";
    }
    else if (number == 10) {
      document.getElementById("ledge5A").style.right = 51.5 + "%";
    }
    else if (number == 11) {
      document.getElementById("ledge5A").style.right = 49.5 + "%";
    }
  }

  if (findHeight <= 29.78 && !oneC) {
    oneC = true;
    document.getElementById("ledge1C").style.visibility = "visible";
    if (number == 6) {
      document.getElementById("ledge1C").style.right = 59.5 + "%";
    }
    else if (number == 7) {
      document.getElementById("ledge1C").style.right = 57.5 + "%";
    }
    else if (number == 8) {
      document.getElementById("ledge1C").style.right = 55.5 + "%";
    }
    else if (number == 9) {
      document.getElementById("ledge1C").style.right = 53.5 + "%";
    }
    else if (number == 10) {
      document.getElementById("ledge1C").style.right = 51.5 + "%";
    }
    else if (number == 11) {
      document.getElementById("ledge1C").style.right = 49.5 + "%";
    }
  }
  else if (findHeight <= 29.78 && !twoC) {
    twoC = true;
    document.getElementById("ledge2C").style.visibility = "visible";
    if (number == 6) {
      document.getElementById("ledge2C").style.right = 59.5 + "%";
    }
    else if (number == 7) {
      document.getElementById("ledge2C").style.right = 57.5 + "%";
    }
    else if (number == 8) {
      document.getElementById("ledge2C").style.right = 55.5 + "%";
    }
    else if (number == 9) {
      document.getElementById("ledge2C").style.right = 53.5 + "%";
    }
    else if (number == 10) {
      document.getElementById("ledge2C").style.right = 51.5 + "%";
    }
    else if (number == 11) {
      document.getElementById("ledge2C").style.right = 49.5 + "%";
    }
  }
  else if (findHeight <= 29.78) {
    document.getElementById("ledge3C").style.visibility = "visible";
    if (number == 6) {
      document.getElementById("ledge3C").style.right = 59.5 + "%";
    }
    else if (number == 7) {
      document.getElementById("ledge3C").style.right = 57.5 + "%";
    }
    else if (number == 8) {
      document.getElementById("ledge3C").style.right = 55.5 + "%";
    }
    else if (number == 9) {
      document.getElementById("ledge3C").style.right = 53.5 + "%";
    }
    else if (number == 10) {
      document.getElementById("ledge3C").style.right = 51.5 + "%";
    }
    else if (number == 11) {
      document.getElementById("ledge3C").style.right = 49.5 + "%";
    }
  }

  if (findHeight <= 28.54) {
    document.getElementById("ledgeE").style.visibility = "visible";
    if (number == 6) {
      document.getElementById("ledgeE").style.right = 59.5 + "%";
    }
    else if (number == 7) {
      document.getElementById("ledgeE").style.right = 57.5 + "%";
    }
    else if (number == 8) {
      document.getElementById("ledgeE").style.right = 55.5 + "%";
    }
    else if (number == 9) {
      document.getElementById("ledgeE").style.right = 53.5 + "%";
    }
    else if (number == 10) {
      document.getElementById("ledgeE").style.right = 51.5 + "%";
    }
    else if (number == 11) {
      document.getElementById("ledgeE").style.right = 49.5 + "%";
    }
  }

  if (findHeight == 38.46 && !oneMid) {
    oneMid = true;
    document.getElementById("ledgemid1").style.visibility = "visible";
    if (number == 1) {
      document.getElementById("ledgemid1").style.right = 69.5 + "%";
    }
    else if (number == 2) {
      document.getElementById("ledgemid1").style.right = 67.5 + "%";
    }
    else if (number == 3) {
      document.getElementById("ledgemid1").style.right = 65.5 + "%";
    }
    else if (number == 4) {
      document.getElementById("ledgemid1").style.right = 63.5 + "%";
    }
    else if (number == 5) {
      document.getElementById("ledgemid1").style.right = 61.5 + "%";
    }
    else if (number == 6) {
      document.getElementById("ledgemid1").style.right = 59.5 + "%";
    }
    else if (number == 7) {
      document.getElementById("ledgemid1").style.right = 57.5 + "%";
    }
    else if (number == 8) {
      document.getElementById("ledgemid1").style.right = 55.5 + "%";
    }
    else if (number == 9) {
      document.getElementById("ledgemid1").style.right = 53.5 + "%";
    }
    else if (number == 10) {
      document.getElementById("ledgemid1").style.right = 51.5 + "%";
    }
    else if (number == 11) {
      document.getElementById("ledgemid1").style.right = 49.5 + "%";
    }
    else if (number == 12) {
      document.getElementById("ledgemid1").style.right = 47.5 + "%";
    }
    else if (number == 13) {
      document.getElementById("ledgemid1").style.right = 45.5 + "%";
    }
    else if (number == 14) {
      document.getElementById("ledgemid1").style.right = 43.5 + "%";
    }
    else if (number == 15) {
      document.getElementById("ledgemid1").style.right = 41.5 + "%";
    }
    else if (number == 16) {
      document.getElementById("ledgemid1").style.right = 39.5 + "%";
    }
    else if (number == 17) {
      document.getElementById("ledgemid1").style.right = 37.5 + "%";
    }
  }
  else if (findHeight == 38.46 && oneMid) {
    document.getElementById("ledgemid2").style.visibility = "visible";
    if (number == 1) {
      document.getElementById("ledgemid2").style.right = 69.5 + "%";
    }
    else if (number == 2) {
      document.getElementById("ledgemid2").style.right = 67.5 + "%";
    }
    else if (number == 3) {
      document.getElementById("ledgemid2").style.right = 65.5 + "%";
    }
    else if (number == 4) {
      document.getElementById("ledgemid2").style.right = 63.5 + "%";
    }
    else if (number == 5) {
      document.getElementById("ledgemid2").style.right = 61.5 + "%";
    }
    else if (number == 6) {
      document.getElementById("ledgemid2").style.right = 59.5 + "%";
    }
    else if (number == 7) {
      document.getElementById("ledgemid2").style.right = 57.5 + "%";
    }
    else if (number == 8) {
      document.getElementById("ledgemid2").style.right = 55.5 + "%";
    }
    else if (number == 9) {
      document.getElementById("ledgemid2").style.right = 53.5 + "%";
    }
    else if (number == 10) {
      document.getElementById("ledgemid2").style.right = 51.5 + "%";
    }
    else if (number == 11) {
      document.getElementById("ledgemid2").style.right = 49.5 + "%";
    }
    else if (number == 12) {
      document.getElementById("ledgemid2").style.right = 47.5 + "%";
    }
    else if (number == 13) {
      document.getElementById("ledgemid2").style.right = 45.5 + "%";
    }
    else if (number == 14) {
      document.getElementById("ledgemid2").style.right = 43.5 + "%";
    }
    else if (number == 15) {
      document.getElementById("ledgemid2").style.right = 41.5 + "%";
    }
    else if (number == 16) {
      document.getElementById("ledgemid2").style.right = 39.5 + "%";
    }
    else if (number == 17) {
      document.getElementById("ledgemid2").style.right = 37.5 + "%";
    }
  }
}
//https://www.sitepoint.com/delay-sleep-pause-wait/

var oneA = false;
var twoA = false;
var threeA = false;
var fourA = false;
var oneC = false;
var twoC = false;
var oneMid = false;

// Resets all of the ledger lines
function resetLedges() {
  document.getElementById("ledge1A").style.visibility = "hidden";
  document.getElementById("ledge2A").style.visibility = "hidden";
  document.getElementById("ledge3A").style.visibility = "hidden";
  document.getElementById("ledge4A").style.visibility = "hidden";
  document.getElementById("ledge5A").style.visibility = "hidden";
  document.getElementById("ledge1C").style.visibility = "hidden";
  document.getElementById("ledge2C").style.visibility = "hidden";
  document.getElementById("ledge3C").style.visibility = "hidden";
  document.getElementById("ledgeE").style.visibility = "hidden";
  document.getElementById("ledgemid1").style.visibility = "hidden";
  document.getElementById("ledgemid2").style.visibility = "hidden";
  oneA = false;
  twoA = false;
  threeA = false;
  fourA = false;
  oneC = false;
  twoC = false;
  oneMid = false;
}

// Prints a word at the top left of the sheet music base on the speed
function word(lengthNote) {
  var findWord;
  if (lengthNote >= 20 && lengthNote <= 40) {
    findWord = "Grave"
  }
  else if (lengthNote >= 40 && lengthNote <= 45) {
    findWord = "Lento"
  }
  else if (lengthNote > 45 && lengthNote <= 50) {
    findWord = "Largo"
  }
  else if (lengthNote > 50 && lengthNote <= 65) {
    findWord = "Adagio"
  }
  else if (lengthNote > 65 && lengthNote <= 69) {
    findWord = "Adagietto"
  }
  else if (lengthNote > 69 && lengthNote <= 82) {
    findWord = "Andante"
  }
  else if (lengthNote >= 83 && lengthNote <= 97) {
    findWord = "Moderato"
  }
  else if (lengthNote >= 98 && lengthNote <= 109) {
    findWord = "Allegretto"
  }
  else if (lengthNote > 109 && lengthNote <= 132) {
    findWord = "Allegro"
  }
  else if (lengthNote > 132 && lengthNote <= 154) {
    findWord = "Vivace"
  }
  else if (lengthNote >= 155 && lengthNote <= 177) {
    findWord = "Presto"
  }
  else if (lengthNote >= 178) {
    findWord = "Prestissimo"
  }

  var quarters = document.getElementById('Quart').textContent;
  document.getElementById('Speed').textContent = findWord + ' (' + quarters + '=' + lengthNote + ')';
  //Create a quarter note image and put on HERE
}

// Accidentals for minor, melodic minor, augmented, diminished, and dominant
function accidental(natural, note) {
  // Sharp accidental minor
  if (natural == 1) {
    document.getElementById('acc2').textContent = '#';
    document.getElementById('acc3').textContent = '#';
  }
  // Natural accidental minor
  else if (natural == 2) {
    document.getElementById('acc2').textContent = '♮';
    document.getElementById('acc3').textContent = '♮';
  }
  // Melodic minor
  else if (natural == 3) {
    document.getElementById('acc1').textContent = '#';
    document.getElementById('acc2').textContent = '#';
    document.getElementById('acc3').textContent = '♮';
    document.getElementById('acc4').textContent = '♮';
  }

  // Sets the height of the accidentals
  if (natural == 1 || natural == 2) {
    if (note == 'Ab') {
      acc2.style.top = 39.24 + "%";
      acc3.style.top = 39.24 + "%";
    }
    else if (note == 'A') {
      acc2.style.top = 39.54 + "%";
      acc3.style.top = 39.54 + "%";
    }
    else if (note == 'Bb') {
      acc2.style.top = 38.62 + "%";
      acc3.style.top = 38.62 + "%";
    }
    else if (note == 'B') {
      acc2.style.top = 38.92 + "%";
      acc3.style.top = 38.92 + "%";
    }
    else if (note == 'C') {
      acc2.style.top = 38 + "%";
      acc3.style.top = 38 + "%";
      //38.3%
    }
    else if (note == 'Db') {
      acc2.style.top = 38.3 + "%";
      acc3.style.top = 38.3 + "%";
    }
    else if (note == 'D') {
      acc2.style.top = 37.68 + "%";
      acc3.style.top = 37.68 + "%";
    }
    else if (note == 'Eb') {
      acc2.style.top = 36.76 + "%";
      acc3.style.top = 36.76 + "%";
    }
    else if (note == 'E') {
      acc2.style.top = 37.06 + "%";
      acc3.style.top = 37.06 + "%";
    }
    else if (note == 'F') {
      acc2.style.top = 36.14 + "%";
      acc3.style.top = 36.14 + "%";
    }
    else if (note == 'Gb') {
      acc2.style.top = 36.44 + "%";
      acc3.style.top = 36.44 + "%";
    }
    else if (note == 'G') {
      acc2.style.top = 35.92 + "%";
      acc3.style.top = 35.92 + "%";
    }
  }
  else if (natural == 3) {
    if (note == 'Ab') {
      acc1.style.top = 40.34 + "%";
      acc2.style.top = 39.54 + "%";
      acc3.style.top = 39.24 + "%";
      acc4.style.top = 40.04 + "%";
    }
    else if (note == 'A') {
      acc1.style.top = 40.34 + "%";
      acc2.style.top = 39.54 + "%";
      acc3.style.top = 39.24 + "%";
      acc4.style.top = 40.04 + "%";
    }
    else if (note == 'Bb') {
      acc1.style.top = 39.72 + "%";
      acc2.style.top = 38.92 + "%";
      acc3.style.top = 38.62 + "%";
      acc4.style.top = 39.42 + "%";
    }
    else if (note == 'B') {
      acc1.style.top = 39.72 + "%";
      acc2.style.top = 38.92 + "%";
      acc3.style.top = 38.62 + "%";
      acc4.style.top = 39.42 + "%";
    }
    else if (note == 'C') {
      acc1.style.top = 39.1 + "%";
      acc2.style.top = 38.3 + "%";
      acc3.style.top = 38 + "%";
      acc4.style.top = 38.8 + "%";
    }
  }
}

var Esh = false;
var Bsh = false;
var Csh = false;
var Fsh = false;
var Gsh = false;
var typeHeight = 0;
// Plays the scale
// Resets accidental values
function playSequence(keyNote, typeNote, lengthNote) {
  Bsh = false;
  Esh = false;
  Csh = false;
  Fsh = false;
  Gsh = false;
  document.getElementById('acc1').textContent = '';
  document.getElementById('acc2').textContent = '';
  document.getElementById('acc3').textContent = '';
  document.getElementById('acc4').textContent = '';
  numAccident = 0;
  word(lengthNote);
  // Gets the length to play each note for
  var length = 60/lengthNote * 1000;
  /* https://music.stackexchange.com/questions/24140/how-can-i-find-the-length-in-seconds-of-a-quarter-note-crotchet-if-i-have-a-te */

  // For the heights in the sheet music
  if (typeNote == 0) {
    typeHeight = 0;
  }
  else if (typeNote == 1) {
    typeHeight = 1;
  }
  else if (typeNote == 2) {
    typeHeight = 2;
  }
  // Major
  if (keyNote == '/C' && typeNote == 0) {
    plays('#C4', length, 1);plays('#D4', length, 2);plays('#E4', length, 3);plays('#F4', length, 4);plays('#G4', length, 5);
    plays('#A5', length, 6);plays('#B5', length, 7);plays('#C5', length, 8);plays('#B5', length, 9);plays('#A5', length, 10);
    plays('#G4', length, 11);plays('#F4', length, 12);plays('#E4', length, 13);plays('#D4', length, 14);plays('#C4', length, 15); }
  else if (keyNote == '/D' && typeNote == 0) {
    plays('#D4', length, 1);plays('#E4', length, 2);plays('#Gb4', length, 3);plays('#G4', length, 4);plays('#A5', length, 5);
    plays('#B5', length, 6);plays('#Db5', length, 7);plays('#D5', length, 8);plays('#Db5', length, 9);plays('#B5', length, 10);
    plays('#A5', length, 11);plays('#G4', length, 12);plays('#Gb4', length, 13);plays('#E4', length, 14);plays('#D4', length, 15); keySig(2, false)}
  else if (keyNote == '/E' && typeNote == 0) {
    plays('#E4', length, 1);plays('#Gb4', length, 2);plays('#Ab4', length, 3);plays('#A5', length, 4);plays('#B5', length, 5);
    plays('#Db5', length, 6);plays('#Eb5', length, 7);plays('#E5', length, 8);plays('#Eb5', length, 9);plays('#Db5', length, 10);
    plays('#B5', length, 11);plays('#A5', length, 12);plays('#Ab4', length, 13);plays('#Gb4', length, 14);plays('#E4', length, 15); keySig(4, false)}
  else if (keyNote == '/F' && typeNote == 0) {
    plays('#F4', length, 1);plays('#G4', length, 2);plays('#A5', length, 3);plays('#Bb5', length, 4);plays('#C5', length, 5);
    plays('#D5', length, 6);plays('#E5', length, 7);plays('#F5', length, 8);plays('#E5', length, 9);plays('#D5', length, 10);
    plays('#C5', length, 11);plays('#Bb5', length, 12);plays('#A5', length, 13);plays('#G4', length, 14);plays('#F4', length, 15); keySig(1, true)}
  else if (keyNote == '/G' && typeNote == 0) {
    plays('#G4', length, 1);plays('#A5', length, 2);plays('#B5', length, 3);plays('#C5', length, 4);plays('#D5', length, 5);
    plays('#E5', length, 6);plays('#Gb5', length, 7);plays('#G5', length, 8);plays('#Gb5', length, 9);plays('#E5', length, 10);
    plays('#D5', length, 11);plays('#C5', length, 12);plays('#B5', length, 13);plays('#A5', length, 14);plays('#G4', length, 15); keySig(1, false)}
  else if (keyNote == '/A' && typeNote == 0) {
    plays('#A4', length, 1);plays('#B4', length, 2);plays('#Db4', length, 3);plays('#D4', length, 4);plays('#E4', length, 5);
    plays('#Gb4', length, 6);plays('#Ab4', length, 7);plays('#A5', length, 8);plays('#Ab4', length, 9);plays('#Gb4', length, 10);
    plays('#E4', length, 11);plays('#D4', length, 12);plays('#Db4', length, 13);plays('#B4', length, 14);plays('#A4', length, 15); keySig(3, false)}
  else if (keyNote == '/B' && typeNote == 0) {
    plays('#B4', length, 1);plays('#Db4', length, 2);plays('#Eb4', length, 3);plays('#E4', length, 4);plays('#Gb4', length, 5);
    plays('#Ab4', length, 6);plays('#Bb5', length, 7);plays('#B5', length, 8);plays('#Bb5', length, 9);plays('#Ab4', length, 10);
    plays('#Gb4', length, 11);plays('#E4', length, 12);plays('#Eb4', length, 13);plays('#Db4', length, 14);plays('#B4', length, 15); keySig(5, false)}
  else if (keyNote == '/Db' && typeNote == 0) {
    plays('#Db4', length, 1);plays('#Eb4', length, 2);plays('#F4', length, 3);plays('#Gb4', length, 4);plays('#Ab4', length, 5);
    plays('#Bb5', length, 6);plays('#C5', length, 7);plays('#Db5', length, 8);plays('#C5', length, 9);plays('#Bb5', length, 10);
    plays('#Ab4', length, 11);plays('#Gb4', length, 12);plays('#F4', length, 13);plays('#Eb4', length, 14);plays('#Db4', length, 15); keySig(5, true)}
  else if (keyNote == '/Eb' && typeNote == 0) {
    plays('#Eb4', length, 1);plays('#F4', length, 2);plays('#G4', length, 3);plays('#Ab4', length, 4);plays('#Bb5', length, 5);
    plays('#C5', length, 6);plays('#D5', length, 7);plays('#Eb5', length, 8);plays('#D5', length, 9);plays('#C5', length, 10);
    plays('#Bb5', length, 11);plays('#Ab4', length, 12);plays('#G4', length, 13);plays('#F4', length, 14);plays('#Eb4', length, 15); keySig(3, true)}
  else if (keyNote == '/Gb' && typeNote == 0) {
    plays('#Gb4', length, 1);plays('#Ab4', length, 2);plays('#Bb5', length, 3);plays('#B5', length, 4);plays('#Db5', length, 5);
    plays('#Eb5', length, 6);plays('#F5', length, 7);plays('#Gb5', length, 8);plays('#F5', length, 9);plays('#Eb5', length, 10);
    plays('#Db5', length, 11);plays('#B5', length, 12);plays('#Bb5', length, 13);plays('#Ab4', length, 14);plays('#Gb4', length, 15); keySig(6, true);}
  else if (keyNote == '/Ab' && typeNote == 0) {
    plays('#Ab3', length, 1);plays('#Bb4', length, 2);plays('#C4', length, 3);plays('#Db4', length, 4);plays('#Eb4', length, 5);
    plays('#F4', length, 6);plays('#G4', length, 7);plays('#Ab4', length, 8);plays('#G4', length, 9);plays('#F4', length, 10);
    plays('#Eb4', length, 11);plays('#Db4', length, 12);plays('#C4', length, 13);plays('#Bb4', length, 14);plays('#Ab3', length, 15); keySig(4, true)}
  else if (keyNote == '/Bb' && typeNote == 0) {
    plays('#Bb4', length, 1);plays('#C4', length, 2);plays('#D4', length, 3);plays('#Eb4', length, 4);plays('#F4', length, 5);
    plays('#G4', length, 6);plays('#A5', length, 7);plays('#Bb5', length, 8);plays('#A5', length, 9);plays('#G4', length, 10);
    plays('#F4', length, 11);plays('#Eb4', length, 12);plays('#D4', length, 13);plays('#C4', length, 14);plays('#Bb4', length, 15); keySig(2, true)}
  else if (keyNote == '/Ab' && typeNote == 1) {
    accidental(2, 'Ab'); plays('#Ab3', length, 1);plays('#Bb4', length, 2);plays('#B4', length, 3);plays('#Db4', length, 4);plays('#Eb4', length, 5);
    plays('#E4', length, 6);plays('#G4', length, 7);plays('#Ab4', length, 8);plays('#G4', length, 9);plays('#E4', length, 10);
    plays('#Eb4', length, 11);plays('#Db4', length, 12);plays('#B4', length, 13);plays('#Bb4', length, 14);plays('#Ab3', length, 15); keySig(7, true)}
  else if (keyNote == '/A' && typeNote == 1) {
    Gsh = true; accidental(1, 'A'); plays('#A4', length, 1);plays('#B4', length, 2);plays('#C4', length, 3);plays('#D4', length, 4);plays('#E4', length, 5);
    plays('#F4', length, 6);plays('#Ab4', length, 7);plays('#A5', length, 8);plays('#Ab4', length, 9);plays('#F4', length, 10);
    plays('#E4', length, 11);plays('#D4', length, 12);plays('#C4', length, 13);plays('#B4', length, 14);plays('#A4', length, 15);}
  else if (keyNote == '/Bb' && typeNote == 1) {
    accidental(2, 'Bb'); plays('#Bb4', length, 1);plays('#C4', length, 2);plays('#Db4', length, 3);plays('#Eb4', length, 4);plays('#F4', length, 5);
    plays('#Gb4', length, 6);plays('#A5', length, 7);plays('#Bb5', length, 8);plays('#A5', length, 9);plays('#Gb4', length, 10);
    plays('#F4', length, 11);plays('#Eb4', length, 12);plays('#Db4', length, 13);plays('#C4', length, 14);plays('#Bb4', length, 15); keySig(5, true)}
  else if (keyNote == '/B' && typeNote == 1) {
    accidental(1, 'B'); plays('#B4', length, 1);plays('#Db4', length, 2);plays('#D4', length, 3);plays('#E4', length, 4);plays('#Gb4', length, 5);
    plays('#G4', length, 6);plays('#Bb5', length, 7);plays('#B5', length, 8);plays('#Bb5', length, 9);plays('#G4', length, 10);
    plays('#Gb4', length, 11);plays('#E4', length, 12);plays('#D4', length, 13);plays('#Db4', length, 14);plays('#B4', length, 15); keySig(2, false)}
  else if (keyNote == '/C' && typeNote == 1) {
    accidental(2, 'C'); plays('#C4', length, 1);plays('#D4', length, 2);plays('#Eb4', length, 3);plays('#F4', length, 4);plays('#G4', length, 5);
    plays('#Ab4', length, 6);plays('#B5', length, 7);plays('#C5', length, 8);plays('#B5', length, 9);plays('#Ab4', length, 10);
    plays('#G4', length, 11);plays('#F4', length, 12);plays('#Eb4', length, 13);plays('#D4', length, 14);plays('#C4', length, 15); keySig(3, true)}
  else if (keyNote == '/Db' && typeNote == 1) {
    Bsh = true; accidental(1, 'Db'); plays('#Db4', length, 1);plays('#Eb4', length, 2);plays('#E4', length, 3);plays('#Gb4', length, 4);plays('#Ab4', length, 5);
    plays('#A5', length, 6);plays('#C5', length, 7);plays('#Db5', length, 8);plays('#C5', length, 9);plays('#A5', length, 10);
    plays('#Ab4', length, 11);plays('#Gb4', length, 12);plays('#E4', length, 13);plays('#Eb4', length, 14);plays('#Db4', length, 15); keySig(4, false)}
  else if (keyNote == '/D' && typeNote == 1) {
    Csh = true; accidental(1, 'D'); plays('#D4', length, 1);plays('#E4', length, 2);plays('#F4', length, 3);plays('#G4', length, 4);plays('#A5', length, 5);
    plays('#Bb5', length, 6);plays('#Db5', length, 7);plays('#D5', length, 8);plays('#Db5', length, 9);plays('#Bb5', length, 10);
    plays('#A5', length, 11);plays('#G4', length, 12);plays('#F4', length, 13);plays('#E4', length, 14);plays('#D4', length, 15); keySig(1, true)}
  else if (keyNote == '/Eb' && typeNote == 1) {
    accidental(2, 'Eb'); plays('#Eb4', length, 1);plays('#F4', length, 2);plays('#Gb4', length, 3);plays('#Ab4', length, 4);plays('#Bb5', length, 5);
    plays('#B5', length, 6);plays('#D5', length, 7);plays('#Eb5', length, 8);plays('#D5', length, 9);plays('#B5', length, 10);
    plays('#Bb5', length, 11);plays('#Ab4', length, 12);plays('#Gb4', length, 13);plays('#F4', length, 14);plays('#Eb4', length, 15); keySig(6, true)}
  else if (keyNote == '/E' && typeNote == 1) {
    accidental(1, 'E'); plays('#E4', length, 1);plays('#Gb4', length, 2);plays('#G4', length, 3);plays('#A5', length, 4);plays('#B5', length, 5);
    plays('#C5', length, 6);plays('#Eb5', length, 7);plays('#E5', length, 8);plays('#Eb5', length, 9);plays('#C5', length, 10);
    plays('#B5', length, 11);plays('#A5', length, 12);plays('#G4', length, 13);plays('#Gb4', length, 14);plays('#E4', length, 15); keySig(1, false)}
  else if (keyNote == '/F' && typeNote == 1) {
    accidental(2, 'F'); plays('#F4', length, 1);plays('#G4', length, 2);plays('#Ab4', length, 3);plays('#Bb5', length, 4);plays('#C5', length, 5);
    plays('#Db5', length, 6);plays('#E5', length, 7);plays('#F5', length, 8);plays('#E5', length, 9);plays('#Db5', length, 10);
    plays('#C5', length, 11);plays('#Bb5', length, 12);plays('#Ab4', length, 13);plays('#G4', length, 14);plays('#F4', length, 15); keySig(4, true)}
  else if (keyNote == '/Gb' && typeNote == 1) {
    Esh = true; accidental(1, 'Gb'); plays('#Gb4', length, 1);plays('#Ab4', length, 2);plays('#A5', length, 3);plays('#B5', length, 4);plays('#Db5', length, 5);
    plays('#D5', length, 6);plays('#F5', length, 7);plays('#Gb5', length, 8);plays('#F5', length, 9);plays('#D5', length, 10);
    plays('#Db5', length, 11);plays('#B5', length, 12);plays('#A5', length, 13);plays('#Ab4', length, 14);plays('#Gb4', length, 15); keySig(3, false)}
  else if (keyNote == '/G' && typeNote == 1) {
    Fsh = true; accidental(1, 'G'); plays('#G4', length, 1);plays('#A5', length, 2);plays('#Bb5', length, 3);plays('#C5', length, 4);plays('#D5', length, 5);
    plays('#Eb5', length, 6);plays('#Gb5', length, 7);plays('#G5', length, 8);plays('#Gb5', length, 9);plays('#Eb5', length, 10);
    plays('#D5', length, 11);plays('#C5', length, 12);plays('#Bb5', length, 13);plays('#A5', length, 14);plays('#G4', length, 15); keySig(2, true)}
  else if (keyNote == '/A' && typeNote == 2) {
    accidental(3, 'A'); plays('#A4', length, 1);plays('#B4', length, 2);plays('#C4', length, 3);plays('#D4', length, 4);plays('#E4', length, 5);
    plays('#Gb4', length, 6);plays('#Ab4', length, 7);plays('#A5', length, 8);plays('#G4', length, 9);plays('#F4', length, 10);
    plays('#E4', length, 11);plays('#D4', length, 12);plays('#C4', length, 13);plays('#B4', length, 14);plays('#A4', length, 15); }
  else if (keyNote == '/Bb' && typeNote == 2) {
    accidental(3, 'Bb'); plays('#Bb4', length, 1);plays('#C4', length, 2);plays('#Db4', length, 3);plays('#Eb4', length, 4);plays('#F4', length, 5);
    plays('#G4', length, 6);plays('#A5', length, 7);plays('#Bb5', length, 8);plays('#Ab4', length, 9);plays('#Gb4', length, 10);
    plays('#F4', length, 11);plays('#Eb4', length, 12);plays('#Db4', length, 13);plays('#C4', length, 14);plays('#Bb4', length, 15); keySig(7, true)}
  else if (keyNote == '/B' && typeNote == 2) {
    accidental(3, 'B'); plays('#B4', length, 1);plays('#Db4', length, 2);plays('#D4', length, 3);plays('#E4', length, 4);plays('#Gb4', length, 5);
    plays('#Ab4', length, 6);plays('#Bb5', length, 7);plays('#B5', length, 8);plays('#A5', length, 9);plays('#G4', length, 10);
    plays('#Gb4', length, 11);plays('#E4', length, 12);plays('#D4', length, 13);plays('#Db4', length, 14);plays('#B4', length, 15); keySig(5, true)}
  else if (keyNote == '/C' && typeNote == 2) {
    accidental(3, 'C'); plays('#C4', length, 1);plays('#D4', length, 2);plays('#Eb4', length, 3);plays('#F4', length, 4);plays('#G4', length, 5);
    plays('#A5', length, 6);plays('#B5', length, 7);plays('#C5', length, 8);plays('#Bb5', length, 9);plays('#Ab4', length, 10);
    plays('#G4', length, 11);plays('#F4', length, 12);plays('#Eb4', length, 13);plays('#D4', length, 14);plays('#C4', length, 15); keySig(2, false)}
  else if (keyNote == '/Db' && typeNote == 2) {
    accidental(3, 'Db'); plays('#Db4', length, 1);plays('#Eb4', length, 2);plays('#E4', length, 3);plays('#Gb4', length, 4);plays('#Ab4', length, 5);
    plays('#Bb5', length, 6);plays('#C5', length, 7);plays('#Db5', length, 8);plays('#B5', length, 9);plays('#A5', length, 10);
    plays('#Ab4', length, 11);plays('#Gb4', length, 12);plays('#E4', length, 13);plays('#Eb4', length, 14);plays('#Db4', length, 15); keySig(3, true)}
  else if (keyNote == '/D' && typeNote == 2) {
    accidental(3, 'D'); plays('#D4', length, 1);plays('#E4', length, 2);plays('#F4', length, 3);plays('#G4', length, 4);plays('#A5', length, 5);
    plays('#B5', length, 6);plays('#Db5', length, 7);plays('#D5', length, 8);plays('#C5', length, 9);plays('#Bb5', length, 10);
    plays('#A5', length, 11);plays('#G4', length, 12);plays('#F4', length, 13);plays('#E4', length, 14);plays('#D4', length, 15); keySig(4, false)}
  else if (keyNote == '/Eb' && typeNote == 2) {
    accidental(3, 'Eb'); plays('#Eb4', length, 1);plays('#F4', length, 2);plays('#Gb4', length, 3);plays('#Ab4', length, 4);plays('#Bb5', length, 5);
    plays('#C5', length, 6);plays('#D5', length, 7);plays('#Eb5', length, 8);plays('#Db5', length, 9);plays('#B5', length, 10);
    plays('#Bb5', length, 11);plays('#Ab4', length, 12);plays('#Gb4', length, 13);plays('#F4', length, 14);plays('#Eb4', length, 15); keySig(1, true)}
  else if (keyNote == '/E' && typeNote == 2) {
    accidental(3, 'E'); plays('#E4', length, 1);plays('#Gb4', length, 2);plays('#G4', length, 3);plays('#A5', length, 4);plays('#B5', length, 5);
    plays('#Db5', length, 6);plays('#Eb5', length, 7);plays('#E5', length, 8);plays('#D5', length, 9);plays('#C5', length, 10);
    plays('#B5', length, 11);plays('#A5', length, 12);plays('#G4', length, 13);plays('#Gb4', length, 14);plays('#E4', length, 15); keySig(6, true)}
  else if (keyNote == '/F' && typeNote == 2) {
    accidental(3, 'F'); plays('#F4', length, 1);plays('#G4', length, 2);plays('#Ab4', length, 3);plays('#Bb5', length, 4);plays('#C5', length, 5);
    plays('#D5', length, 6);plays('#E5', length, 7);plays('#F5', length, 8);plays('#Eb5', length, 9);plays('#Db5', length, 10);
    plays('#C5', length, 11);plays('#Bb5', length, 12);plays('#Ab4', length, 13);plays('#G4', length, 14);plays('#F4', length, 15); keySig(1, false)}
  else if (keyNote == '/Gb' && typeNote == 2) {
    accidental(3, 'Gb'); plays('#Gb4', length, 1);plays('#Ab4', length, 2);plays('#A5', length, 3);plays('#B5', length, 4);plays('#Db5', length, 5);
    plays('#Eb5', length, 6);plays('#F5', length, 7);plays('#Gb5', length, 8);plays('#E5', length, 9);plays('#D5', length, 10);
    plays('#Db5', length, 11);plays('#B5', length, 12);plays('#A5', length, 13);plays('#Ab4', length, 14);plays('#Gb4', length, 15); keySig(4, true)}
  else if (keyNote == '/G' && typeNote == 2) {
    accidental(3, 'G'); plays('#G4', length, 1);plays('#A5', length, 2);plays('#Bb5', length, 3);plays('#C5', length, 4);plays('#D5', length, 5);
    plays('#E5', length, 6);plays('#Gb5', length, 7);plays('#G5', length, 8);plays('#F5', length, 9);plays('#Eb5', length, 10);
    plays('#D5', length, 11);plays('#C5', length, 12);plays('#Bb5', length, 13);plays('#A5', length, 14);plays('#G4', length, 15); keySig(3, false)}
  else if (keyNote == '/Ab' && typeNote == 2) {
    accidental(3, 'Ab'); plays('#Ab3', length, 1);plays('#Bb4', length, 2);plays('#B4', length, 3);plays('#Db4', length, 4);plays('#Eb4', length, 5);
    plays('#F4', length, 6);plays('#G4', length, 7);plays('#Ab4', length, 8);plays('#Gb4', length, 9);plays('#E4', length, 10);
    plays('#Eb4', length, 11);plays('#Db4', length, 12);plays('#B4', length, 13);plays('#Bb4', length, 14);plays('#Ab3', length, 15); keySig(2, true)}
  // If not all of the conditions are met
  else {
    document.getElementById("grand").style.visibility = "hidden";
    document.getElementById('Speed').textContent = '';
    window.alert("Please enter all fields");
  }
}

var findHeight = 0;
var number = 0;
// Plays method that calls play order method with a delay
function plays(audio, length, times) {
  audio.currentTime = 0;
  setTimeout(() => {playOrder(audio, length, times);}, length/1.3*times);
}

// Plays2 is the same as Plays but doesn’t shows sheet music
function plays2(audio, length, times) {
  audio.currentTime = 0;
  setTimeout(() => {play(audio, length);}, length/1.3*times);
}

// Reload button (Close)
function reload() {
  window.location.reload();
}

// Animations and text for all of the info buttons
var x = 0;
function infoKey() {
  document.querySelector(".infoKey").classList.toggle("infoKeyactive");
  if (x % 2 == 0) {
    document.querySelector(".infoKey").innerHTML = ("Select the key for your scale.");
  }
  else {
    document.querySelector(".infoKey").innerHTML = ("");
  }
  x++;
}
var y = 0;
function infoType() {
  document.querySelector(".infoType").classList.toggle("infoTypeactive");
  if (y % 2 == 0) {
    document.querySelector(".infoType").innerHTML = ("Select if you want the scale to be in major, minor, or melodic.");
  }
  else {
    document.querySelector(".infoType").innerHTML = ("");
  }
  y++;
}
var z = 0;
function infoSpeed() {
  document.querySelector(".infoSpeed").classList.toggle("infoSpeedactive");
  if (z % 2 == 0) {
    document.querySelector(".infoSpeed").innerHTML = ("Select the speed in bpm from 30-500.");
  }
  else {
    document.querySelector(".infoSpeed").innerHTML = ("");
  }
  z++;
}

var xC = 0;
function infoKeyC() {
  document.querySelector(".infoKeyC").classList.toggle("infoKeyCactive");
  if (xC % 2 == 0) {
    document.querySelector(".infoKeyC").innerHTML = ("Select the key for your chord.");
  }
  else {
    document.querySelector(".infoKeyC").innerHTML = ("");
  }
  xC++;
}
var yC = 0;
function infoTypeC() {
  document.querySelector(".infoTypeC").classList.toggle("infoTypeCactive");
  if (yC % 2 == 0) {
    document.querySelector(".infoTypeC").innerHTML = ("Select if you want the chord to be in major, minor, augmented, or diminished.");
  }
  else {
    document.querySelector(".infoTypeC").innerHTML = ("");
  }
  yC++;
}
var zC = 0;
function infoInversionC() {
  document.querySelector(".infoInversionC").classList.toggle("infoInversionCactive");
  if (zC % 2 == 0) {
    document.querySelector(".infoInversionC").innerHTML = ("Select if you want the chord to be in root position, 1st inversion, or 2nd inversion.");
  }
  else {
    document.querySelector(".infoInversionC").innerHTML = ("");
  }
  zC++;
}

var xC7 = 0;
function infoKeyC7() {
  document.querySelector(".infoKeyC7").classList.toggle("infoKeyCactive7");
  if (xC7 % 2 == 0) {
    document.querySelector(".infoKeyC7").innerHTML = ("Select the key for your chord.");
  }
  else {
    document.querySelector(".infoKeyC7").innerHTML = ("");
  }
  xC7++;
}
var yC7 = 0;
function infoTypeC7() {
  document.querySelector(".infoTypeC7").classList.toggle("infoTypeCactive7");
  if (yC7 % 2 == 0) {
    document.querySelector(".infoTypeC7").innerHTML = ("Select if you want the chord to be in major, minor, augmented, or diminished.");
  }
  else {
    document.querySelector(".infoTypeC7").innerHTML = ("");
  }
  yC7++;
}
var zC7 = 0;
function infoInversionC7() {
  document.querySelector(".infoInversionC7").classList.toggle("infoInversionCactive7");
  if (zC7 % 2 == 0) {
    document.querySelector(".infoInversionC7").innerHTML = ("Select if you want the chord to be in root position, 1st inversion, 2nd inversion, or 3rd inversion");
  }
  else {
    document.querySelector(".infoInversionC7").innerHTML = ("");
  }
  zC7++;
}

var xA = 0;
function infoKeyA() {
  document.querySelector(".infoKeyA").classList.toggle("infoKeyAactive");
  if (xA % 2 == 0) {
    document.querySelector(".infoKeyA").innerHTML = ("Select the key for your arpeggio.");
  }
  else {
    document.querySelector(".infoKeyA").innerHTML = ("");
  }
  xA++;
}
var yA = 0;
function infoTypeA() {
  document.querySelector(".infoTypeA").classList.toggle("infoTypeAactive");
  if (yA % 2 == 0) {
    document.querySelector(".infoTypeA").innerHTML = ("Select if you want the arpeggio to be in major or minor.");
  }
  else {
    document.querySelector(".infoTypeA").innerHTML = ("");
  }
  yA++;
}
var zA = 0;
function infoInversionA() {
  document.querySelector(".infoInversionA").classList.toggle("infoInversionAactive");
  if (zA % 2 == 0) {
    document.querySelector(".infoInversionA").innerHTML = ("Select if you want the arpeggio to be in root position, 1st inversion, or second inversion.");
  }
  else {
    document.querySelector(".infoInversionA").innerHTML = ("");
  }
  zA++;
}
var wA = 0;
function infoSpeedA() {
  document.querySelector(".infoSpeedA").classList.toggle("infoSpeedAactive");
  if (wA % 2 == 0) {
    document.querySelector(".infoSpeedA").innerHTML = ("Select the speed in bpm from 30-500.");
  }
  else {
    document.querySelector(".infoSpeedA").innerHTML = ("");
  }
  wA++;
}

var xA7 = 0;
function infoKeyA7() {
  document.querySelector(".infoKeyA7").classList.toggle("infoKeyA7active");
  if (xA7 % 2 == 0) {
    document.querySelector(".infoKeyA7").innerHTML = ("Select the key for your 7th arpeggio.");
  }
  else {
    document.querySelector(".infoKeyA7").innerHTML = ("");
  }
  xA7++;
}
var yA7 = 0;
function infoTypeA7() {
  document.querySelector(".infoTypeA7").classList.toggle("infoTypeA7active");
  if (yA7 % 2 == 0) {
    document.querySelector(".infoTypeA7").innerHTML = ("Select if you want the 7th arpeggio to be in major, minor, or dominant.");
  }
  else {
    document.querySelector(".infoTypeA7").innerHTML = ("");
  }
  yA7++;
}
var zA7 = 0;
function infoInversionA7() {
  document.querySelector(".infoInversionA7").classList.toggle("infoInversionA7active");
  if (zA7 % 2 == 0) {
    document.querySelector(".infoInversionA7").innerHTML = ("Select if you want the 7th arpeggio to be in root position, 1st inversion, 2nd inversion, or 3rd inversion.");
  }
  else {
    document.querySelector(".infoInversionA7").innerHTML = ("");
  }
  zA7++;
}
var wA7 = 0;
function infoSpeedA7() {
  document.querySelector(".infoSpeedA7").classList.toggle("infoSpeedA7active");
  if (wA7 % 2 == 0) {
    document.querySelector(".infoSpeedA7").innerHTML = ("Select the speed in bpm from 30-500.");
  }
  else {
    document.querySelector(".infoSpeedA7").innerHTML = ("");
  }
  wA7++;
}

var xCad = 0;
function infoKeyCad() {
  document.querySelector(".infoKeyCad").classList.toggle("infoKeyCadactive");
  if (xCad % 2 == 0) {
    document.querySelector(".infoKeyCad").innerHTML = ("Select the key for your cadence.");
  }
  else {
    document.querySelector(".infoKeyCad").innerHTML = ("");
  }
  xCad++;
}
var yCad = 0;
function infoTypeCad() {
  document.querySelector(".infoTypeCad").classList.toggle("infoTypeCadactive");
  if (yCad % 2 == 0) {
    document.querySelector(".infoTypeCad").innerHTML = ("Select if you want the cadence to be in major or minor.");
  }
  else {
    document.querySelector(".infoTypeCad").innerHTML = ("");
  }
  yCad++;
}
var zCad = 0;
function infoCadCad() {
  document.querySelector(".infoCadCad").classList.toggle("infoCadCadactive");
  if (zCad % 2 == 0) {
    document.querySelector(".infoCadCad").innerHTML = ("Select if you want to play a perfect, imperfect, plagal, half, or deceptive cadence.");
  }
  else {
    document.querySelector(".infoCadCad").innerHTML = ("");
  }
  zCad++;
}

// Sliders
function slide() {
  document.querySelector(".rangae").classList.toggle("rangaeactive");
  document.getElementById("rangaeValue").classList.toggle("rangaeValueactive");
  document.getElementById("mtClose").classList.toggle("mtCloseactive");
}

// Chords
var keyNoteC;
var typeNoteC;
var inversionC;

let selectionChord = document.getElementById('chordDrop');
selectionChord.addEventListener('change', () => {
    keyNoteC = selectionChord.options[selectionChord.selectedIndex].value;
});

function majorC() {
  typeNoteC = 0;
  document.getElementById('MajorC').style.backgroundColor = 'limegreen';
  document.getElementById('MinorC').style.backgroundColor = '#f3f0f3';
  document.getElementById('AugmentedC').style.backgroundColor = '#f3f0f3';
  document.getElementById('DiminishedC').style.backgroundColor = '#f3f0f3';
}
function minorC() {
  typeNoteC = 1;
  document.getElementById('MinorC').style.backgroundColor = 'limegreen';
  document.getElementById('MajorC').style.backgroundColor = '#f3f0f3';
  document.getElementById('AugmentedC').style.backgroundColor = '#f3f0f3';
  document.getElementById('DiminishedC').style.backgroundColor = '#f3f0f3';
}
function augmented() {
  typeNoteC = 2;
  document.getElementById('AugmentedC').style.backgroundColor = 'limegreen';
  document.getElementById('MajorC').style.backgroundColor = '#f3f0f3';
  document.getElementById('MinorC').style.backgroundColor = '#f3f0f3';
  document.getElementById('DiminishedC').style.backgroundColor = '#f3f0f3';
}
function diminished() {
  typeNoteC = 3;
  document.getElementById('DiminishedC').style.backgroundColor = 'limegreen';
  document.getElementById('MajorC').style.backgroundColor = '#f3f0f3';
  document.getElementById('MinorC').style.backgroundColor = '#f3f0f3';
  document.getElementById('AugmentedC').style.backgroundColor = '#f3f0f3';
}

function root() {
  inversionC = 0;
  document.getElementById('RootC').style.backgroundColor = 'limegreen';
  document.getElementById('1stC').style.backgroundColor = '#f3f0f3';
  document.getElementById('2ndC').style.backgroundColor = '#f3f0f3';
}
function first() {
  inversionC = 1;
  document.getElementById('1stC').style.backgroundColor = 'limegreen';
  document.getElementById('RootC').style.backgroundColor = '#f3f0f3';
  document.getElementById('2ndC').style.backgroundColor = '#f3f0f3';
}
function second() {
  inversionC = 2;
  document.getElementById('2ndC').style.backgroundColor = 'limegreen';
  document.getElementById('RootC').style.backgroundColor = '#f3f0f3';
  document.getElementById('1stC').style.backgroundColor = '#f3f0f3';
}

function nextChord() {
  reset();
  playChord(keyNoteC, typeNoteC, inversionC);
}

function playChord(keyNoteC, typeNoteC, inversionC) {
  if (typeNoteC == 1) {
    typeHeight = 1;
  }
  Bsh = false;
  Esh = false;
  Csh = false;
  Fsh = false;
  Gsh = false;
  numAccident = 0;
  if (keyNoteC == '/Ab' && typeNoteC == 0 && inversionC == 0) {
    plays('#Ab2', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#Ab2', 1000, 3.2); plays('#C3', 1000, 4.4); plays('#Eb3', 1000, 5.6); keySig(4, true)}
  else if (keyNoteC == '/A' && typeNoteC == 0 && inversionC == 0) {
    plays('#A3', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#A3', 1000, 3.2); plays('#Db3', 1000, 4.4); plays('#E3', 1000, 5.6); keySig(3, false)}
  else if (keyNoteC == '/Bb' && typeNoteC == 0 && inversionC == 0) {
    plays('#Bb3', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#Bb3', 1000, 3.2); plays('#D3', 1000, 4.4); plays('#F3', 1000, 5.6); keySig(2, true)}
  else if (keyNoteC == '/B' && typeNoteC == 0 && inversionC == 0) {
    plays('#B3', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#B3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#Gb3', 1000, 5.6); keySig(5, false)}
  else if (keyNoteC == '/C' && typeNoteC == 0 && inversionC == 0) {
    plays('#C3', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#C3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#G3', 1000, 5.6);}
  else if (keyNoteC == '/Db' && typeNoteC == 0 && inversionC == 0) {
    plays('#Db3', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#Db3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#Ab3', 1000, 5.6); keySig(5, true)}
  else if (keyNoteC == '/D' && typeNoteC == 0 && inversionC == 0) {
    plays('#D3', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#D3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#A4', 1000, 5.6); keySig(2, false)}
  else if (keyNoteC == '/Eb' && typeNoteC == 0 && inversionC == 0) {
    plays('#Eb3', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#Eb3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#Bb4', 1000, 5.6); keySig(3, true)}
  else if (keyNoteC == '/E' && typeNoteC == 0 && inversionC == 0) {
    plays('#E3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#E3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#B4', 1000, 5.6); keySig(4, false)}
  else if (keyNoteC == '/F' && typeNoteC == 0 && inversionC == 0) {
    plays('#F3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#F3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#C4', 1000, 5.6); keySig(1, true)}
  else if (keyNoteC == '/Gb' && typeNoteC == 0 && inversionC == 0) {
    plays('#Gb3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#Gb3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#Db4', 1000, 5.6); keySig(6, true)}
  else if (keyNoteC == '/G' && typeNoteC == 0 && inversionC == 0) {
    plays('#G3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#G3', 1000, 3.2); plays('#B4', 1000, 4.4); plays('#D4', 1000, 5.6); keySig(1, false)}
  else if (keyNoteC == '/Ab' && typeNoteC == 1 && inversionC == 0) {
    plays('#Ab2', 1000, 0.1); plays('#B3', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#Ab2', 1000, 3.2); plays('#B3', 1000, 4.4); plays('#Eb3', 1000, 5.6); keySig(7, true)}
  else if (keyNoteC == '/A' && typeNoteC == 1 && inversionC == 0) {
    Gsh = true; plays('#A3', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#A3', 1000, 3.2); plays('#C3', 1000, 4.4); plays('#E3', 1000, 5.6);}
  else if (keyNoteC == '/Bb' && typeNoteC == 1 && inversionC == 0) {
    plays('#Bb3', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#Bb3', 1000, 3.2); plays('#Db3', 1000, 4.4); plays('#F3', 1000, 5.6); keySig(5, true)}
  else if (keyNoteC == '/B' && typeNoteC == 1 && inversionC == 0) {
    plays('#B3', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#B3', 1000, 3.2); plays('#D3', 1000, 4.4); plays('#Gb3', 1000, 5.6); keySig(2, false)}
  else if (keyNoteC == '/C' && typeNoteC == 1 && inversionC == 0) {
    plays('#C3', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#C3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#G3', 1000, 5.6); keySig(3, true)}
  else if (keyNoteC == '/Db' && typeNoteC == 1 && inversionC == 0) {
    Bsh = true; plays('#Db3', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#Db3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#Ab3', 1000, 5.6); keySig(4, false)}
  else if (keyNoteC == '/D' && typeNoteC == 1 && inversionC == 0) {
    Csh = true; plays('#D3', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#D3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#A4', 1000, 5.6); keySig(1, true)}
  else if (keyNoteC == '/Eb' && typeNoteC == 1 && inversionC == 0) {
    plays('#Eb3', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#Eb3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#Bb4', 1000, 5.6); keySig(6, true)}
  else if (keyNoteC == '/E' && typeNoteC == 1 && inversionC == 0) {
    plays('#E3', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#E3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#B4', 1000, 5.6); keySig(1, false)}
  else if (keyNoteC == '/F' && typeNoteC == 1 && inversionC == 0) {
    plays('#F3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#F3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#C4', 1000, 5.6); keySig(4, true)}
  else if (keyNoteC == '/Gb' && typeNoteC == 1 && inversionC == 0) {
    Esh = true; plays('#Gb3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#Gb3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#Db4', 1000, 5.6); keySig(3, false)}
  else if (keyNoteC == '/G' && typeNoteC == 1 && inversionC == 0) {
    Fsh = true; plays('#G3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#G3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#D4', 1000, 5.6); keySig(2, true)}
  else if (keyNoteC == '/Ab' && typeNoteC == 2 && inversionC == 0) {
    plays('#Ab2', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#Ab2', 1000, 3.2); plays('#C3', 1000, 4.4); plays('#E3', 1000, 5.6); keySig(4, true)}
  else if (keyNoteC == '/A' && typeNoteC == 2 && inversionC == 0) {
    plays('#A3', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#A3', 1000, 3.2); plays('#Db3', 1000, 4.4); plays('#F3', 1000, 5.6); keySig(3, false)}
  else if (keyNoteC == '/Bb' && typeNoteC == 2 && inversionC == 0) {
    plays('#Bb3', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#Bb3', 1000, 3.2); plays('#D3', 1000, 4.4); plays('#Gb3', 1000, 5.6); keySig(2, true)}
  else if (keyNoteC == '/B' && typeNoteC == 2 && inversionC == 0) {
    plays('#B3', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#B3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#G3', 1000, 5.6); keySig(5, false)}
  else if (keyNoteC == '/C' && typeNoteC == 2 && inversionC == 0) {
    plays('#C3', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#C3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#Ab3', 1000, 5.6);}
  else if (keyNoteC == '/Db' && typeNoteC == 2 && inversionC == 0) {
    plays('#Db3', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#Db3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#A4', 1000, 5.6); keySig(5, true)}
  else if (keyNoteC == '/D' && typeNoteC == 2 && inversionC == 0) {
    plays('#D3', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#D3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#Bb4', 1000, 5.6); keySig(2, false)}
  else if (keyNoteC == '/Eb' && typeNoteC == 2 && inversionC == 0) {
    plays('#Eb3', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#Eb3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#B4', 1000, 5.6); keySig(3, true)}
  else if (keyNoteC == '/E' && typeNoteC == 2 && inversionC == 0) {
    plays('#E3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#E3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#C4', 1000, 5.6); keySig(4, false)}
  else if (keyNoteC == '/F' && typeNoteC == 2 && inversionC == 0) {
    plays('#F3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#F3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#Db4', 1000, 5.6); keySig(1, true)}
  else if (keyNoteC == '/Gb' && typeNoteC == 2 && inversionC == 0) {
    plays('#Gb3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#Gb3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#D4', 1000, 5.6); keySig(6, true)}
  else if (keyNoteC == '/G' && typeNoteC == 2 && inversionC == 0) {
    plays('#G3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#G3', 1000, 3.2); plays('#B4', 1000, 4.4); plays('#Eb4', 1000, 5.6); keySig(1, false)}
  else if (keyNoteC == '/Ab' && typeNoteC == 3 && inversionC == 0) {
    plays('#Ab2', 1000, 0.1); plays('#B3', 1000, 0.11); plays('#D3', 1000, 0.111); plays('#Ab2', 1000, 3.2); plays('#B3', 1000, 4.4); plays('#D3', 1000, 5.6); keySig(7, true)}
  else if (keyNoteC == '/A' && typeNoteC == 3 && inversionC == 0) {
    plays('#A3', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#A3', 1000, 3.2); plays('#C3', 1000, 4.4); plays('#Eb3', 1000, 5.6);}
  else if (keyNoteC == '/Bb' && typeNoteC == 3 && inversionC == 0) {
    plays('#Bb3', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#Bb3', 1000, 3.2); plays('#Db3', 1000, 4.4); plays('#E3', 1000, 5.6); keySig(5, true)}
  else if (keyNoteC == '/B' && typeNoteC == 3 && inversionC == 0) {
    plays('#B3', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#B3', 1000, 3.2); plays('#D3', 1000, 4.4); plays('#F3', 1000, 5.6); keySig(2, false)}
  else if (keyNoteC == '/C' && typeNoteC == 3 && inversionC == 0) {
    plays('#C3', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#C3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#Gb3', 1000, 5.6); keySig(3, true)}
  else if (keyNoteC == '/Db' && typeNoteC == 3 && inversionC == 0) {
    plays('#Db3', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#Db3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#G3', 1000, 5.6); keySig(4, false)}
  else if (keyNoteC == '/D' && typeNoteC == 3 && inversionC == 0) {
    plays('#D3', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#Ab4', 1000, 0.111); plays('#D3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#Ab4', 1000, 5.6); keySig(1, true)}
  else if (keyNoteC == '/Eb' && typeNoteC == 3 && inversionC == 0) {
    plays('#Eb3', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#A5', 1000, 0.11); plays('#Eb3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#A5', 1000, 5.6); keySig(6, true)}
  else if (keyNoteC == '/E' && typeNoteC == 3 && inversionC == 0) {
    plays('#E3', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#E3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#Bb4', 1000, 5.6); keySig(1, false)}
  else if (keyNoteC == '/F' && typeNoteC == 3 && inversionC == 0) {
    plays('#F3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#F3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#B4', 1000, 5.6); keySig(4, true)}
  else if (keyNoteC == '/Gb' && typeNoteC == 3 && inversionC == 0) {
    plays('#Gb3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#Gb3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#C4', 1000, 5.6); keySig(3, false)}
  else if (keyNoteC == '/G' && typeNoteC == 3 && inversionC == 0) {
    plays('#G3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#G3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#Db4', 1000, 5.6); keySig(2, true)}

  else if (keyNoteC == '/Ab' && typeNoteC == 0 && inversionC == 1) {
    plays('#C3', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#C3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#Ab3', 1000, 5.6); keySig(4, true)}
  else if (keyNoteC == '/A' && typeNoteC == 0 && inversionC == 1) {
    plays('#Db3', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#Db3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#A4', 1000, 5.6); keySig(3, false)}
  else if (keyNoteC == '/Bb' && typeNoteC == 0 && inversionC == 1) {
    plays('#D3', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#D3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#Bb4', 1000, 5.6); keySig(2, true)}
  else if (keyNoteC == '/B' && typeNoteC == 0 && inversionC == 1) {
    plays('#Eb3', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#Eb3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#B4', 1000, 5.6); keySig(5, false)}
  else if (keyNoteC == '/C' && typeNoteC == 0 && inversionC == 1) {
    plays('#E3', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#E3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#C4', 1000, 5.6);}
  else if (keyNoteC == '/Db' && typeNoteC == 0 && inversionC == 1) {
    plays('#F3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#F3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#Db4', 1000, 5.6); keySig(5, true)}
  else if (keyNoteC == '/D' && typeNoteC == 0 && inversionC == 1) {
    plays('#Gb3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#Gb3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#D4', 1000, 5.6); keySig(2, false)}
  else if (keyNoteC == '/Eb' && typeNoteC == 0 && inversionC == 1) {
    plays('#G3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#G3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#Eb4', 1000, 5.6); keySig(3, true)}
  else if (keyNoteC == '/E' && typeNoteC == 0 && inversionC == 1) {
    plays('#Ab3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#E4', 1000, 0.111); plays('#Ab3', 1000, 3.2); plays('#B4', 1000, 4.4); plays('#E4', 1000, 5.6); keySig(4, false)}
  else if (keyNoteC == '/F' && typeNoteC == 0 && inversionC == 1) {
    plays('#A4', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#F4', 1000, 0.111); plays('#A4', 1000, 3.2); plays('#C4', 1000, 4.4); plays('#F4', 1000, 5.6); keySig(1, true)}
  else if (keyNoteC == '/Gb' && typeNoteC == 0 && inversionC == 1) {
    plays('#Bb4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#Gb4', 1000, 0.111); plays('#Bb4', 1000, 3.2); plays('#Db4', 1000, 4.4); plays('#Gb4', 1000, 5.6); keySig(6, true)}
  else if (keyNoteC == '/G' && typeNoteC == 0 && inversionC == 1) {
    plays('#B4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#G4', 1000, 0.111); plays('#B4', 1000, 3.2); plays('#D4', 1000, 4.4); plays('#G4', 1000, 5.6); keySig(1, false)}
  else if (keyNoteC == '/Ab' && typeNoteC == 1 && inversionC == 1) {
    plays('#B3', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#B3', 1000, 2.2); plays('#Eb3', 1000, 3.4); plays('#Ab3', 1000, 4.6); keySig(7, true)}
  else if (keyNoteC == '/A' && typeNoteC == 1 && inversionC == 1) {
    Gsh = true; plays('#C3', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#C3', 1000, 2.2); plays('#E3', 1000, 3.4); plays('#A4', 1000, 4.6);}
  else if (keyNoteC == '/Bb' && typeNoteC == 1 && inversionC == 1) {
    plays('#Db3', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#Db3', 1000, 2.2); plays('#F3', 1000, 3.4); plays('#Bb4', 1000, 4.6); keySig(5, true)}
  else if (keyNoteC == '/B' && typeNoteC == 1 && inversionC == 1) {
    plays('#D3', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#D3', 1000, 2.2); plays('#Gb3', 1000, 3.4); plays('#B4', 1000, 4.6); keySig(2, false)}
  else if (keyNoteC == '/C' && typeNoteC == 1 && inversionC == 1) {
    plays('#Eb3', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#Eb3', 1000, 2.2); plays('#G3', 1000, 3.4); plays('#C4', 1000, 4.6); keySig(3, true)}
  else if (keyNoteC == '/Db' && typeNoteC == 1 && inversionC == 1) {
    Bsh = true; plays('#E3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#E3', 1000, 2.2); plays('#Ab3', 1000, 3.4); plays('#Db4', 1000, 4.6); keySig(4, false)}
  else if (keyNoteC == '/D' && typeNoteC == 1 && inversionC == 1) {
    Csh = true; plays('#F3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#F3', 1000, 2.2); plays('#A4', 1000, 3.4); plays('#D4', 1000, 4.6); keySig(1, true)}
  else if (keyNoteC == '/Eb' && typeNoteC == 1 && inversionC == 1) {
    plays('#Gb3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#Gb3', 1000, 2.2); plays('#Bb4', 1000, 3.4); plays('#Eb4', 1000, 4.6); keySig(6, true)}
  else if (keyNoteC == '/E' && typeNoteC == 1 && inversionC == 1) {
    plays('#G3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#E4', 1000, 0.111); plays('#G3', 1000, 2.2); plays('#B4', 1000, 3.4); plays('#E4', 1000, 4.6); keySig(1, false)}
  else if (keyNoteC == '/F' && typeNoteC == 1 && inversionC == 1) {
    plays('#Ab3', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#F4', 1000, 0.111); plays('#Ab3', 1000, 2.2); plays('#C4', 1000, 3.4); plays('#F4', 1000, 4.6); keySig(4, true)}
  else if (keyNoteC == '/Gb' && typeNoteC == 1 && inversionC == 1) {
    Esh = true; plays('#A4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#Gb4', 1000, 0.111); plays('#A4', 1000, 2.2); plays('#Db4', 1000, 3.4); plays('#Gb4', 1000, 4.6); keySig(3, false)}
  else if (keyNoteC == '/G' && typeNoteC == 1 && inversionC == 1) {
    Fsh = true; plays('#Bb4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#G4', 1000, 0.111); plays('#Bb4', 1000, 2.2); plays('#D4', 1000, 3.4); plays('#G4', 1000, 4.6); keySig(2, true)}  
  else if (keyNoteC == '/Ab' && typeNoteC == 2 && inversionC == 1) {
    plays('#C3', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#C3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#Ab3', 1000, 5.6); keySig(4, true)}
  else if (keyNoteC == '/A' && typeNoteC == 2 && inversionC == 1) {
    plays('#Db3', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#Db3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#A4', 1000, 5.6); keySig(3, false)}
  else if (keyNoteC == '/Bb' && typeNoteC == 2 && inversionC == 1) {
    plays('#D3', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#D3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#Bb4', 1000, 5.6); keySig(2, true)}
  else if (keyNoteC == '/B' && typeNoteC == 2 && inversionC == 1) {
    plays('#Eb3', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#Eb3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#B4', 1000, 5.6); keySig(5, false)}
  else if (keyNoteC == '/C' && typeNoteC == 2 && inversionC == 1) {
    plays('#E3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#E3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#C4', 1000, 5.6);}
  else if (keyNoteC == '/Db' && typeNoteC == 2 && inversionC == 1) {
    plays('#F3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#F3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#Db4', 1000, 5.6); keySig(5, true)}
  else if (keyNoteC == '/D' && typeNoteC == 2 && inversionC == 1) {
    plays('#Gb3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#Gb3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#D4', 1000, 5.6); keySig(2, false)}
  else if (keyNoteC == '/Eb' && typeNoteC == 2 && inversionC == 1) {
    plays('#G3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#G3', 1000, 3.2); plays('#B4', 1000, 4.4); plays('#Eb4', 1000, 5.6); keySig(3, true)}
  else if (keyNoteC == '/E' && typeNoteC == 2 && inversionC == 1) {
    plays('#Ab3', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#E4', 1000, 0.111); plays('#Ab3', 1000, 3.2); plays('#C4', 1000, 4.4); plays('#E4', 1000, 5.6); keySig(4, false)}
  else if (keyNoteC == '/F' && typeNoteC == 2 && inversionC == 1) {
    plays('#A4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#F4', 1000, 0.111); plays('#A4', 1000, 3.2); plays('#Db4', 1000, 4.4); plays('#F4', 1000, 5.6); keySig(1, true)}
  else if (keyNoteC == '/Gb' && typeNoteC == 2 && inversionC == 1) {
    plays('#Bb4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#Gb4', 1000, 0.111); plays('#Bb4', 1000, 3.2); plays('#D4', 1000, 4.4); plays('#Gb4', 1000, 5.6); keySig(6, true)}
  else if (keyNoteC == '/G' && typeNoteC == 2 && inversionC == 1) {
    plays('#B4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#G4', 1000, 0.111); plays('#B4', 1000, 3.2); plays('#Eb4', 1000, 4.4); plays('#G4', 1000, 5.6); keySig(1, false)}
  else if (keyNoteC == '/Ab' && typeNoteC == 3 && inversionC == 1) {
    plays('#B3', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#B3', 1000, 2.2); plays('#D3', 1000, 3.4); plays('#Ab3', 1000, 4.6); keySig(7, true)}
  else if (keyNoteC == '/A' && typeNoteC == 3 && inversionC == 1) {
    plays('#C3', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#C3', 1000, 2.2); plays('#Eb3', 1000, 3.4); plays('#A4', 1000, 4.6);}
  else if (keyNoteC == '/Bb' && typeNoteC == 3 && inversionC == 1) {
    plays('#Db3', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#Db3', 1000, 2.2); plays('#E3', 1000, 3.4); plays('#Bb4', 1000, 4.6); keySig(5, true)}
  else if (keyNoteC == '/B' && typeNoteC == 3 && inversionC == 1) {
    plays('#D3', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#D3', 1000, 2.2); plays('#F3', 1000, 3.4); plays('#B4', 1000, 4.6); keySig(2, false)}
  else if (keyNoteC == '/C' && typeNoteC == 3 && inversionC == 1) {
    plays('#Eb3', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#Eb3', 1000, 2.2); plays('#Gb3', 1000, 3.4); plays('#C4', 1000, 4.6); keySig(3, true)}
  else if (keyNoteC == '/Db' && typeNoteC == 3 && inversionC == 1) {
    plays('#E3', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#E3', 1000, 2.2); plays('#G3', 1000, 3.4); plays('#Db4', 1000, 4.6); keySig(4, false)}
  else if (keyNoteC == '/D' && typeNoteC == 3 && inversionC == 1) {
    plays('#F3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#F3', 1000, 2.2); plays('#Ab3', 1000, 3.4); plays('#D4', 1000, 4.6); keySig(1, true)}
  else if (keyNoteC == '/Eb' && typeNoteC == 3 && inversionC == 1) {
    plays('#Gb3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#Gb3', 1000, 2.2); plays('#A4', 1000, 3.4); plays('#Eb4', 1000, 4.6); keySig(6, true)}
  else if (keyNoteC == '/E' && typeNoteC == 3 && inversionC == 1) {
    plays('#G3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#E4', 1000, 0.111); plays('#G3', 1000, 2.2); plays('#Bb4', 1000, 3.4); plays('#E4', 1000, 4.6); keySig(1, false)}
  else if (keyNoteC == '/F' && typeNoteC == 3 && inversionC == 1) {
    plays('#Ab3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#F4', 1000, 0.111); plays('#Ab3', 1000, 2.2); plays('#B4', 1000, 3.4); plays('#F4', 1000, 4.6); keySig(4, true)}
  else if (keyNoteC == '/Gb' && typeNoteC == 3 && inversionC == 1) {
    plays('#A4', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#Gb4', 1000, 0.111); plays('#A4', 1000, 2.2); plays('#C4', 1000, 3.4); plays('#Gb4', 1000, 4.6); keySig(3, false)}
  else if (keyNoteC == '/G' && typeNoteC == 3 && inversionC == 1) {
    plays('#Bb4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#G4', 1000, 0.111); plays('#Bb4', 1000, 2.2); plays('#Db4', 1000, 3.4); plays('#G4', 1000, 4.6); keySig(2, true)}
 
  else if (keyNoteC == '/Ab' && typeNoteC == 0 && inversionC == 2) {
    plays('#Eb3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#Eb3', 1000, 2.2); plays('#Ab3', 1000, 3.4); plays('#C4', 1000, 4.6); keySig(4, true)}
  else if (keyNoteC == '/A' && typeNoteC == 0 && inversionC == 2) {
    plays('#E3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#E3', 1000, 2.2); plays('#A4', 1000, 3.4); plays('#Db4', 1000, 4.6); keySig(3, false)}
  else if (keyNoteC == '/Bb' && typeNoteC == 0 && inversionC == 2) {
    plays('#F3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#F3', 1000, 2.2); plays('#Bb4', 1000, 3.4); plays('#D4', 1000, 4.6); keySig(2, true)}
  else if (keyNoteC == '/B' && typeNoteC == 0 && inversionC == 2) {
    plays('#Gb3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#Gb3', 1000, 2.2); plays('#B4', 1000, 3.4); plays('#Eb4', 1000, 4.6); keySig(5, false)}
  else if (keyNoteC == '/C' && typeNoteC == 0 && inversionC == 2) {
    plays('#G3', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#E4', 1000, 0.111); plays('#G3', 1000, 2.2); plays('#C4', 1000, 3.4); plays('#E4', 1000, 4.6);}
  else if (keyNoteC == '/Db' && typeNoteC == 0 && inversionC == 2) {
    plays('#Ab3', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#F4', 1000, 0.111); plays('#Ab3', 1000, 2.2); plays('#Db4', 1000, 3.4); plays('#F4', 1000, 4.6); keySig(5, true)}
  else if (keyNoteC == '/D' && typeNoteC == 0 && inversionC == 2) {
    plays('#A4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#Gb4', 1000, 0.111); plays('#A4', 1000, 2.2); plays('#D4', 1000, 3.4); plays('#Gb4', 1000, 4.6); keySig(2, false)}
  else if (keyNoteC == '/Eb' && typeNoteC == 0 && inversionC == 2) {
    plays('#Bb4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#G4', 1000, 0.111); plays('#Bb4', 1000, 2.2); plays('#Eb4', 1000, 3.4); plays('#G4', 1000, 4.6); keySig(3, true)}
  else if (keyNoteC == '/E' && typeNoteC == 0 && inversionC == 2) {
    plays('#B4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#Ab4', 1000, 0.111); plays('#B4', 1000, 2.2); plays('#E4', 1000, 3.4); plays('#Ab4', 1000, 4.6); keySig(4, false)}
  else if (keyNoteC == '/F' && typeNoteC == 0 && inversionC == 2) {
    plays('#C4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#A5', 1000, 0.111); plays('#C4', 1000, 2.2); plays('#F4', 1000, 3.4); plays('#A5', 1000, 4.6); keySig(1, true)}
  else if (keyNoteC == '/Gb' && typeNoteC == 0 && inversionC == 2) {
    plays('#Db4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#Bb5', 1000, 0.111); plays('#Db4', 1000, 2.2); plays('#Gb4', 1000, 3.4); plays('#Bb5', 1000, 4.6); keySig(6, true)}
  else if (keyNoteC == '/G' && typeNoteC == 0 && inversionC == 2) {
    plays('#D4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#B5', 1000, 0.111); plays('#D4', 1000, 2.2); plays('#G4', 1000, 3.4); plays('#B5', 1000, 4.6); keySig(1, false)}
  else if (keyNoteC == '/Ab' && typeNoteC == 1 && inversionC == 2) {
    plays('#Eb3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#Eb3', 1000, 2.2); plays('#Ab3', 1000, 3.4); plays('#B4', 1000, 4.6); keySig(7, true)}
  else if (keyNoteC == '/A' && typeNoteC == 1 && inversionC == 2) {
    Gsh = true; plays('#E3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#E3', 1000, 2.2); plays('#A4', 1000, 3.4); plays('#C4', 1000, 4.6);}
  else if (keyNoteC == '/Bb' && typeNoteC == 1 && inversionC == 2) {
    plays('#F3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#F3', 1000, 2.2); plays('#Bb4', 1000, 3.4); plays('#Db4', 1000, 4.6); keySig(5, true)}
  else if (keyNoteC == '/B' && typeNoteC == 1 && inversionC == 2) {
    plays('#Gb3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#Gb3', 1000, 2.2); plays('#B4', 1000, 3.4); plays('#D4', 1000, 4.6); keySig(2, false)}
  else if (keyNoteC == '/C' && typeNoteC == 1 && inversionC == 2) {
    plays('#G3', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#G3', 1000, 2.2); plays('#C4', 1000, 3.4); plays('#Eb4', 1000, 4.6); keySig(3, true)}
  else if (keyNoteC == '/Db' && typeNoteC == 1 && inversionC == 2) {
    Bsh = true; plays('#Ab3', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#E4', 1000, 0.111); plays('#Ab3', 1000, 2.2); plays('#Db4', 1000, 3.4); plays('#E4', 1000, 4.6); keySig(4, false)}
  else if (keyNoteC == '/D' && typeNoteC == 1 && inversionC == 2) {
    Csh = true; plays('#A4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#F4', 1000, 0.111); plays('#A4', 1000, 2.2); plays('#D4', 1000, 3.4); plays('#F4', 1000, 4.6); keySig(1, true)}
  else if (keyNoteC == '/Eb' && typeNoteC == 1 && inversionC == 2) {
    plays('#Bb4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#Gb4', 1000, 0.111); plays('#Bb4', 1000, 2.2); plays('#Eb4', 1000, 3.4); plays('#Gb4', 1000, 4.6); keySig(6, true)}
  else if (keyNoteC == '/E' && typeNoteC == 1 && inversionC == 2) {
    plays('#B4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#G4', 1000, 0.111); plays('#B4', 1000, 2.2); plays('#E4', 1000, 3.4); plays('#G4', 1000, 4.6); keySig(1, false)}
  else if (keyNoteC == '/F' && typeNoteC == 1 && inversionC == 2) {
    plays('#C4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#Ab4', 1000, 0.111); plays('#C4', 1000, 2.2); plays('#F4', 1000, 3.4); plays('#Ab4', 1000, 4.6); keySig(4, true)}
  else if (keyNoteC == '/Gb' && typeNoteC == 1 && inversionC == 2) {
    Esh = true; plays('#Db4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#A5', 1000, 0.111); plays('#Db4', 1000, 2.2); plays('#Gb4', 1000, 3.4); plays('#A5', 1000, 4.6); keySig(3, false)}
  else if (keyNoteC == '/G' && typeNoteC == 1 && inversionC == 2) {
    Fsh = true; plays('#D4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#Bb5', 1000, 0.111); plays('#D4', 1000, 2.2); plays('#G4', 1000, 3.4); plays('#Bb5', 1000, 4.6); keySig(2, true)}  
  else if (keyNoteC == '/Ab' && typeNoteC == 2 && inversionC == 2) {
    plays('#E3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#E3', 1000, 2.2); plays('#Ab3', 1000, 3.4); plays('#C4', 1000, 4.6); keySig(4, true)}
  else if (keyNoteC == '/A' && typeNoteC == 2 && inversionC == 2) {
    plays('#F3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#F3', 1000, 2.2); plays('#A4', 1000, 3.4); plays('#Db4', 1000, 4.6); keySig(3, false)}
  else if (keyNoteC == '/Bb' && typeNoteC == 2 && inversionC == 2) {
    plays('#Gb3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#Gb3', 1000, 2.2); plays('#Bb4', 1000, 3.4); plays('#D4', 1000, 4.6); keySig(2, true)}
  else if (keyNoteC == '/B' && typeNoteC == 2 && inversionC == 2) {
    plays('#G3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#G3', 1000, 2.2); plays('#B4', 1000, 3.4); plays('#Eb4', 1000, 4.6); keySig(5, false)}
  else if (keyNoteC == '/C' && typeNoteC == 2 && inversionC == 2) {
    plays('#Ab3', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#E4', 1000, 0.111); plays('#Ab3', 1000, 2.2); plays('#C4', 1000, 3.4); plays('#E4', 1000, 4.6);}
  else if (keyNoteC == '/Db' && typeNoteC == 2 && inversionC == 2) {
    plays('#A4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#F4', 1000, 0.111); plays('#A4', 1000, 2.2); plays('#Db4', 1000, 3.4); plays('#F4', 1000, 4.6); keySig(5, true)}
  else if (keyNoteC == '/D' && typeNoteC == 2 && inversionC == 2) {
    plays('#Bb4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#Gb4', 1000, 0.111); plays('#Bb4', 1000, 2.2); plays('#D4', 1000, 3.4); plays('#Gb4', 1000, 4.6); keySig(2, false)}
  else if (keyNoteC == '/Eb' && typeNoteC == 2 && inversionC == 2) {
    plays('#B4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#G4', 1000, 0.111); plays('#B4', 1000, 2.2); plays('#Eb4', 1000, 3.4); plays('#G4', 1000, 4.6); keySig(3, true)}
  else if (keyNoteC == '/E' && typeNoteC == 2 && inversionC == 2) {
    plays('#C4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#Ab4', 1000, 0.111); plays('#C4', 1000, 2.2); plays('#E4', 1000, 3.4); plays('#Ab4', 1000, 4.6); keySig(4, false)}
  else if (keyNoteC == '/F' && typeNoteC == 2 && inversionC == 2) {
    plays('#Db4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#A5', 1000, 0.111); plays('#Db4', 1000, 2.2); plays('#F4', 1000, 3.4); plays('#A5', 1000, 4.6); keySig(1, true)}
  else if (keyNoteC == '/Gb' && typeNoteC == 2 && inversionC == 2) {
    plays('#D4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#Bb5', 1000, 0.111); plays('#D4', 1000, 2.2); plays('#Gb4', 1000, 3.4); plays('#Bb5', 1000, 4.6); keySig(6, true)}
  else if (keyNoteC == '/G' && typeNoteC == 2 && inversionC == 2) {
    plays('#Eb4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#B5', 1000, 0.111); plays('#Eb4', 1000, 2.2); plays('#G4', 1000, 3.4); plays('#B5', 1000, 4.6); keySig(1, false)}
  else if (keyNoteC == '/Ab' && typeNoteC == 3 && inversionC == 2) {
    plays('#D3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#D3', 1000, 2.2); plays('#Ab3', 1000, 3.4); plays('#B4', 1000, 4.6); keySig(7, true)}
  else if (keyNoteC == '/A' && typeNoteC == 3 && inversionC == 2) {
    plays('#Eb3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#Eb3', 1000, 2.2); plays('#A4', 1000, 3.4); plays('#C4', 1000, 4.6);}
  else if (keyNoteC == '/Bb' && typeNoteC == 3 && inversionC == 2) {
    plays('#E3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#E3', 1000, 2.2); plays('#Bb4', 1000, 3.4); plays('#Db4', 1000, 4.6); keySig(5, true)}
  else if (keyNoteC == '/B' && typeNoteC == 3 && inversionC == 2) {
    plays('#F3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#F3', 1000, 2.2); plays('#B4', 1000, 3.4); plays('#D4', 1000, 4.6); keySig(2, false)}
  else if (keyNoteC == '/C' && typeNoteC == 3 && inversionC == 2) {
    plays('#Gb3', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#Gb3', 1000, 2.2); plays('#C4', 1000, 3.4); plays('#Eb4', 1000, 4.6); keySig(3, true)}
  else if (keyNoteC == '/Db' && typeNoteC == 3 && inversionC == 2) {
    plays('#G3', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#E4', 1000, 0.111); plays('#G3', 1000, 2.2); plays('#Db4', 1000, 3.4); plays('#E4', 1000, 4.6); keySig(4, false)}
  else if (keyNoteC == '/D' && typeNoteC == 3 && inversionC == 2) {
    plays('#Ab3', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#F4', 1000, 0.111); plays('#Ab3', 1000, 2.2); plays('#D4', 1000, 3.4); plays('#F4', 1000, 4.6); keySig(1, true)}
  else if (keyNoteC == '/Eb' && typeNoteC == 3 && inversionC == 2) {
    plays('#A4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#Gb4', 1000, 0.111); plays('#A4', 1000, 2.2); plays('#Eb4', 1000, 3.4); plays('#Gb4', 1000, 4.6); keySig(6, true)}
  else if (keyNoteC == '/E' && typeNoteC == 3 && inversionC == 2) {
    plays('#Bb4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#G4', 1000, 0.111); plays('#Bb4', 1000, 2.2); plays('#E4', 1000, 3.4); plays('#G4', 1000, 4.6); keySig(1, false)}
  else if (keyNoteC == '/F' && typeNoteC == 3 && inversionC == 2) {
    plays('#B4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#Ab4', 1000, 0.111); plays('#B4', 1000, 2.2); plays('#F4', 1000, 3.4); plays('#Ab4', 1000, 4.6); keySig(4, true)}
  else if (keyNoteC == '/Gb' && typeNoteC == 3 && inversionC == 2) {
    plays('#C4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#A5', 1000, 0.111); plays('#C4', 1000, 2.2); plays('#Gb4', 1000, 3.4); plays('#A5', 1000, 4.6); keySig(3, false)}
  else if (keyNoteC == '/G' && typeNoteC == 3 && inversionC == 2) {
    plays('#Db4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#Bb5', 1000, 0.111); plays('#Db4', 1000, 2.2); plays('#G4', 1000, 3.4); plays('#Bb5', 1000, 4.6); keySig(2, true)} 
  else {
    document.getElementById("grand").style.visibility = "hidden";
    document.getElementById('Speed').textContent = '';
    window.alert("Please enter all fields")
  }
}

// Arpeggios
var keyNoteA;
var typeNoteA;
var inversionA;

let selectionArr = document.getElementById('arrDrop');
selectionArr.addEventListener('change', () => {
    keyNoteA = selectionArr.options[selectionArr.selectedIndex].value;
});

function majorA() {
  typeNoteA = 0;
  document.getElementById('MajorArr').style.backgroundColor = 'limegreen';
  document.getElementById('MinorArr').style.backgroundColor = '#f3f0f3';
}
function minorA() {
  typeNoteA = 1;
  document.getElementById('MajorArr').style.backgroundColor = '#f3f0f3';
  document.getElementById('MinorArr').style.backgroundColor = 'limegreen';
}

function rootA() {
  inversionA = 0;
  document.getElementById('RootArr').style.backgroundColor = 'limegreen';
  document.getElementById('1stArr').style.backgroundColor = '#f3f0f3';
  document.getElementById('2ndArr').style.backgroundColor = '#f3f0f3';
}
function firstA() {
  inversionA = 1;
  document.getElementById('1stArr').style.backgroundColor = 'limegreen';
  document.getElementById('2ndArr').style.backgroundColor = '#f3f0f3';
  document.getElementById('RootArr').style.backgroundColor = '#f3f0f3';
}
function secondA() {
  inversionA = 2;
  document.getElementById('2ndArr').style.backgroundColor = 'limegreen';
  document.getElementById('1stArr').style.backgroundColor = '#f3f0f3';
  document.getElementById('RootArr').style.backgroundColor = '#f3f0f3';
}

function nextArpeggio() {
  reset();
  var lengthA = document.getElementById('rangeValuea').innerText;
  word(lengthA);
  var length = 60/lengthA * 1000;
  numAccident = 0;
  if (keyNoteA == '/Ab' && typeNoteA == 0 && inversionA == 0) {
    plays('#Ab2', length, 1);plays('#C3', length, 2);plays('#Eb3', length, 3);plays('#Ab3', length, 4);plays('#C4', length, 5);
    plays('#Eb4', length, 6);plays('#Ab4', length, 7);plays('#Eb4', length, 8);plays('#C4', length, 9);plays('#Ab3', length, 10);
    plays('#Eb3', length, 11);plays('#C3', length, 12);plays('#Ab2', length, 13); keySig(4, true)}
  else if (keyNoteA == '/A' && typeNoteA == 0 && inversionA == 0) {
    plays('#A3', length, 1);plays('#Db3', length, 2);plays('#E3', length, 3);plays('#A4', length, 4);plays('#Db4', length, 5);
    plays('#E4', length, 6);plays('#A5', length, 7);plays('#E4', length, 8);plays('#Db4', length, 9);plays('#A4', length, 10);
    plays('#E3', length, 11);plays('#Db3', length, 12);plays('#A3', length, 13); keySig(3, false)}
  else if (keyNoteA == '/Bb' && typeNoteA == 0 && inversionA == 0) {
    plays('#Bb3', length, 1);plays('#D3', length, 2);plays('#F3', length, 3);plays('#Bb4', length, 4);plays('#D4', length, 5);
    plays('#F4', length, 6);plays('#Bb5', length, 7);plays('#F4', length, 8);plays('#D4', length, 9);plays('#Bb4', length, 10);
    plays('#F3', length, 11);plays('#D3', length, 12);plays('#Bb3', length, 13); keySig(2, true)}
  else if (keyNoteA == '/B' && typeNoteA == 0 && inversionA == 0) {
    plays('#B3', length, 1);plays('#Eb3', length, 2);plays('#Gb3', length, 3);plays('#B4', length, 4);plays('#Eb4', length, 5);
    plays('#Gb4', length, 6);plays('#B5', length, 7);plays('#Gb4', length, 8);plays('#Eb4', length, 9);plays('#B4', length, 10);
    plays('#Gb3', length, 11);plays('#Eb3', length, 12);plays('#B3', length, 13); keySig(5, false)}
  else if (keyNoteA == '/C' && typeNoteA == 0 && inversionA == 0) {
    plays('#C3', length, 1);plays('#E3', length, 2);plays('#G3', length, 3);plays('#C4', length, 4);plays('#E4', length, 5);
    plays('#G4', length, 6);plays('#C5', length, 7);plays('#G4', length, 8);plays('#E4', length, 9);plays('#C4', length, 10);
    plays('#G3', length, 11);plays('#E3', length, 12);plays('#C3', length, 13); }
  else if (keyNoteA == '/Db' && typeNoteA == 0 && inversionA == 0) {
    plays('#Db3', length, 1);plays('#F3', length, 2);plays('#Ab3', length, 3);plays('#Db4', length, 4);plays('#F4', length, 5);
    plays('#Ab4', length, 6);plays('#Db5', length, 7);plays('#Ab4', length, 8);plays('#F4', length, 9);plays('#Db4', length, 10);
    plays('#Ab3', length, 11);plays('#F3', length, 12);plays('#Db3', length, 13); keySig(5, true)}
  else if (keyNoteA == '/D' && typeNoteA == 0 && inversionA == 0) {
    plays('#D3', length, 1);plays('#Gb3', length, 2);plays('#A4', length, 3);plays('#D4', length, 4);plays('#Gb4', length, 5);
    plays('#A5', length, 6);plays('#D5', length, 7);plays('#A5', length, 8);plays('#Gb4', length, 9);plays('#D4', length, 10);
    plays('#A4', length, 11);plays('#Gb3', length, 12);plays('#D3', length, 13); keySig(2, false)}
  else if (keyNoteA == '/Eb' && typeNoteA == 0 && inversionA == 0) {
    plays('#Eb3', length, 1);plays('#G3', length, 2);plays('#Bb4', length, 3);plays('#Eb4', length, 4);plays('#G4', length, 5);
    plays('#Bb5', length, 6);plays('#Eb5', length, 7);plays('#Bb5', length, 8);plays('#G4', length, 9);plays('#Eb4', length, 10);
    plays('#Bb4', length, 11);plays('#G3', length, 12);plays('#Eb3', length, 13); keySig(3, true)}
  else if (keyNoteA == '/E' && typeNoteA == 0 && inversionA == 0) {
    plays('#E3', length, 1);plays('#Ab3', length, 2);plays('#B4', length, 3);plays('#E4', length, 4);plays('#Ab4', length, 5);
    plays('#B5', length, 6);plays('#E5', length, 7);plays('#B5', length, 8);plays('#Ab4', length, 9);plays('#E4', length, 10);
    plays('#B4', length, 11);plays('#Ab3', length, 12);plays('#E3', length, 13); keySig(4, false)}
  else if (keyNoteA == '/F' && typeNoteA == 0 && inversionA == 0) {
    plays('#F3', length, 1);plays('#A4', length, 2);plays('#C4', length, 3);plays('#F4', length, 4);plays('#A5', length, 5);
    plays('#C5', length, 6);plays('#F5', length, 7);plays('#C5', length, 8);plays('#A5', length, 9);plays('#F4', length, 10);
    plays('#C4', length, 11);plays('#A4', length, 12);plays('#F3', length, 13); keySig(1, true)}
  else if (keyNoteA == '/Gb' && typeNoteA == 0 && inversionA == 0) {
    plays('#Gb3', length, 1);plays('#Bb4', length, 2);plays('#Db4', length, 3);plays('#Gb4', length, 4);plays('#Bb5', length, 5);
    plays('#Db5', length, 6);plays('#Gb5', length, 7);plays('#Db5', length, 8);plays('#Bb5', length, 9);plays('#Gb4', length, 10);
    plays('#Db4', length, 11);plays('#Bb4', length, 12);plays('#Gb3', length, 13); keySig(6, true)}
  else if (keyNoteA == '/G' && typeNoteA == 0 && inversionA == 0) {
    plays('#G3', length, 1);plays('#B4', length, 2);plays('#D4', length, 3);plays('#G4', length, 4);plays('#B5', length, 5);
    plays('#D5', length, 6);plays('#G5', length, 7);plays('#D5', length, 8);plays('#B5', length, 9);plays('#G4', length, 10);
    plays('#D4', length, 11);plays('#B4', length, 12);plays('#G3', length, 13); keySig(1, false)}
  else if (keyNoteA == '/Ab' && typeNoteA == 1 && inversionA == 0) {
    plays('#Ab2', length, 1);plays('#B3', length, 2);plays('#Eb3', length, 3);plays('#Ab3', length, 4);plays('#B4', length, 5);
    plays('#Eb4', length, 6);plays('#Ab4', length, 7);plays('#Eb4', length, 8);plays('#B4', length, 9);plays('#Ab3', length, 10);
    plays('#Eb3', length, 11);plays('#B3', length, 12);plays('#Ab2', length, 13); keySig(7, true)}
  else if (keyNoteA == '/A' && typeNoteA == 1 && inversionA == 0) {
    plays('#A3', length, 1);plays('#C3', length, 2);plays('#E3', length, 3);plays('#A4', length, 4);plays('#C4', length, 5);
    plays('#E4', length, 6);plays('#A5', length, 7);plays('#E4', length, 8);plays('#C4', length, 9);plays('#A4', length, 10);
    plays('#E3', length, 11);plays('#C3', length, 12);plays('#A3', length, 13); }
  else if (keyNoteA == '/Bb' && typeNoteA == 1 && inversionA == 0) {
    plays('#Bb3', length, 1);plays('#Db3', length, 2);plays('#F3', length, 3);plays('#Bb4', length, 4);plays('#Db4', length, 5);
    plays('#F4', length, 6);plays('#Bb5', length, 7);plays('#F4', length, 8);plays('#Db4', length, 9);plays('#Bb4', length, 10);
    plays('#F3', length, 11);plays('#Db3', length, 12);plays('#Bb3', length, 13); keySig(5, true)}
  else if (keyNoteA == '/B' && typeNoteA == 1 && inversionA == 0) {
    plays('#B3', length, 1);plays('#D3', length, 2);plays('#Gb3', length, 3);plays('#B4', length, 4);plays('#D4', length, 5);
    plays('#Gb4', length, 6);plays('#B5', length, 7);plays('#Gb4', length, 8);plays('#D4', length, 9);plays('#B4', length, 10);
    plays('#Gb3', length, 11);plays('#D3', length, 12);plays('#B3', length, 13); keySig(2, false)}
  else if (keyNoteA == '/C' && typeNoteA == 1 && inversionA == 0) {
    plays('#C3', length, 1);plays('#Eb3', length, 2);plays('#G3', length, 3);plays('#C4', length, 4);plays('#Eb4', length, 5);
    plays('#G4', length, 6);plays('#C5', length, 7);plays('#G4', length, 8);plays('#Eb4', length, 9);plays('#C4', length, 10);
    plays('#G3', length, 11);plays('#Eb3', length, 12);plays('#C3', length, 13); keySig(3, true)}
  else if (keyNoteA == '/Db' && typeNoteA == 1 && inversionA == 0) {
    plays('#Db3', length, 1);plays('#E3', length, 2);plays('#Ab3', length, 3);plays('#Db4', length, 4);plays('#E4', length, 5);
    plays('#Ab4', length, 6);plays('#Db5', length, 7);plays('#Ab4', length, 8);plays('#E4', length, 9);plays('#Db4', length, 10);
    plays('#Ab3', length, 11);plays('#E3', length, 12);plays('#Db3', length, 13); keySig(4, false)}
  else if (keyNoteA == '/D' && typeNoteA == 1 && inversionA == 0) {
    plays('#D3', length, 1);plays('#F3', length, 2);plays('#A4', length, 3);plays('#D4', length, 4);plays('#F4', length, 5);
    plays('#A5', length, 6);plays('#D5', length, 7);plays('#A5', length, 8);plays('#F4', length, 9);plays('#D4', length, 10);
    plays('#A4', length, 11);plays('#F3', length, 12);plays('#D3', length, 13); keySig(1, true)}
  else if (keyNoteA == '/Eb' && typeNoteA == 1 && inversionA == 0) {
    plays('#Eb3', length, 1);plays('#Gb3', length, 2);plays('#Bb4', length, 3);plays('#Eb4', length, 4);plays('#Gb4', length, 5);
    plays('#Bb5', length, 6);plays('#Eb5', length, 7);plays('#Bb5', length, 8);plays('#Gb4', length, 9);plays('#Eb4', length, 10);
    plays('#Bb4', length, 11);plays('#Gb3', length, 12);plays('#Eb3', length, 13); keySig(6, true)}
  else if (keyNoteA == '/E' && typeNoteA == 1 && inversionA == 0) {
    plays('#E3', length, 1);plays('#G3', length, 2);plays('#B4', length, 3);plays('#E4', length, 4);plays('#G4', length, 5);
    plays('#B5', length, 6);plays('#E5', length, 7);plays('#B5', length, 8);plays('#G4', length, 9);plays('#E4', length, 10);
    plays('#B4', length, 11);plays('#G3', length, 12);plays('#E3', length, 13); keySig(1, false)}
  else if (keyNoteA == '/F' && typeNoteA == 1 && inversionA == 0) {
    plays('#F3', length, 1);plays('#Ab3', length, 2);plays('#C4', length, 3);plays('#F4', length, 4);plays('#Ab4', length, 5);
    plays('#C5', length, 6);plays('#F5', length, 7);plays('#C5', length, 8);plays('#Ab4', length, 9);plays('#F4', length, 10);
    plays('#C4', length, 11);plays('#Ab3', length, 12);plays('#F3', length, 13); keySig(4, true)}
  else if (keyNoteA == '/Gb' && typeNoteA == 1 && inversionA == 0) {
    plays('#Gb3', length, 1);plays('#A4', length, 2);plays('#Db4', length, 3);plays('#Gb4', length, 4);plays('#A5', length, 5);
    plays('#Db5', length, 6);plays('#Gb5', length, 7);plays('#Db5', length, 8);plays('#A5', length, 9);plays('#Gb4', length, 10);
    plays('#Db4', length, 11);plays('#A4', length, 12);plays('#Gb3', length, 13); keySig(3, false)}
  else if (keyNoteA == '/G' && typeNoteA == 1 && inversionA == 0) {
    plays('#G3', length, 1);plays('#Bb4', length, 2);plays('#D4', length, 3);plays('#G4', length, 4);plays('#Bb5', length, 5);
    plays('#D5', length, 6);plays('#G5', length, 7);plays('#D5', length, 8);plays('#Bb5', length, 9);plays('#G4', length, 10);
    plays('#D4', length, 11);plays('#Bb4', length, 12);plays('#G3', length, 13); keySig(2, true)}

  else if (keyNoteA == '/Ab' && typeNoteA == 0 && inversionA == 1) {
    plays('#C3', length, 2);plays('#Eb3', length, 3);plays('#Ab3', length, 4);plays('#C4', length, 5);plays('#Eb4', length, 6);
    plays('#Ab4', length, 7);plays('#C5', length, 8);plays('#Ab4', length, 9);plays('#Eb4', length, 10);plays('#C4', length, 11);
    plays('#Ab3', length, 12);plays('#Eb3', length, 13); plays('#C3', length, 14); keySig(4, true)}
  else if (keyNoteA == '/A' && typeNoteA == 0 && inversionA == 1) {
    plays('#Db3', length, 1);plays('#E3', length, 2);plays('#A4', length, 3);plays('#Db4', length, 4);plays('#E4', length, 5);
    plays('#A5', length, 6);plays('#Db5', length, 7);plays('#A5', length, 8);plays('#E4', length, 9);plays('#Db4', length, 10);
    plays('#A4', length, 11);plays('#E3', length, 12);plays('#Db3', length, 13); keySig(3, false)}
  else if (keyNoteA == '/Bb' && typeNoteA == 0 && inversionA == 1) {
    plays('#D3', length, 1);plays('#F3', length, 2);plays('#Bb4', length, 3);plays('#D4', length, 4);plays('#F4', length, 5);
    plays('#Bb5', length, 6);plays('#D5', length, 7);plays('#Bb5', length, 8);plays('#F4', length, 9);plays('#D4', length, 10);
    plays('#Bb4', length, 11);plays('#F3', length, 12);plays('#D3', length, 13); keySig(2, true)}
  else if (keyNoteA == '/B' && typeNoteA == 0 && inversionA == 1) {
    plays('#Eb3', length, 1);plays('#Gb3', length, 2);plays('#B4', length, 3);plays('#Eb4', length, 4);plays('#Gb4', length, 5);
    plays('#B5', length, 6);plays('#Eb5', length, 7);plays('#B5', length, 8);plays('#Gb4', length, 9);plays('#Eb4', length, 10);
    plays('#B4', length, 11);plays('#Gb3', length, 12);plays('#Eb3', length, 13); keySig(5, false)}
  else if (keyNoteA == '/C' && typeNoteA == 0 && inversionA == 1) {
    plays('#E3', length, 1);plays('#G3', length, 2);plays('#C4', length, 3);plays('#E4', length, 4);plays('#G4', length, 5);
    plays('#C5', length, 6);plays('#E5', length, 7);plays('#C5', length, 8);plays('#G4', length, 9);plays('#E4', length, 10);
    plays('#C4', length, 11);plays('#G3', length, 12);plays('#E3', length, 13); }
  else if (keyNoteA == '/Db' && typeNoteA == 0 && inversionA == 1) {
    plays('#F3', length, 1);plays('#Ab3', length, 2);plays('#Db4', length, 3);plays('#F4', length, 4);plays('#Ab4', length, 5);
    plays('#Db5', length, 6);plays('#F5', length, 7);plays('#Db5', length, 8);plays('#Ab4', length, 9);plays('#F4', length, 10);
    plays('#Db4', length, 11);plays('#Ab3', length, 12);plays('#F3', length, 13); keySig(5, true)}
  else if (keyNoteA == '/D' && typeNoteA == 0 && inversionA == 1) {
    plays('#Gb3', length, 1);plays('#A4', length, 2);plays('#D4', length, 3);plays('#Gb4', length, 4);plays('#A5', length, 5);
    plays('#D5', length, 6);plays('#Gb5', length, 7);plays('#D5', length, 8);plays('#A5', length, 9);plays('#Gb4', length, 10);
    plays('#D4', length, 11);plays('#A4', length, 12);plays('#Gb3', length, 13); keySig(2, false)}
  else if (keyNoteA == '/Eb' && typeNoteA == 0 && inversionA == 1) {
    plays('#G3', length, 1);plays('#Bb4', length, 2);plays('#Eb4', length, 3);plays('#G4', length, 4);plays('#Bb5', length, 5);
    plays('#Eb5', length, 6);plays('#G5', length, 7);plays('#Eb5', length, 8);plays('#Bb5', length, 9);plays('#G4', length, 10);
    plays('#Eb4', length, 11);plays('#Bb4', length, 12);plays('#G3', length, 13); keySig(3, true)}
  else if (keyNoteA == '/E' && typeNoteA == 0 && inversionA == 1) {
    plays('#Ab3', length, 1);plays('#B4', length, 2);plays('#E4', length, 3);plays('#Ab4', length, 4);plays('#B5', length, 5);
    plays('#E5', length, 6);plays('#Ab5', length, 7);plays('#E5', length, 8);plays('#B5', length, 9);plays('#Ab4', length, 10);
    plays('#E4', length, 11);plays('#B4', length, 12);plays('#Ab3', length, 13); keySig(4, false)}
  else if (keyNoteA == '/F' && typeNoteA == 0 && inversionA == 1) {
    plays('#A4', length, 1);plays('#C4', length, 2);plays('#F4', length, 3);plays('#A5', length, 4);plays('#C5', length, 5);
    plays('#F5', length, 6);plays('#A6', length, 7);plays('#F5', length, 8);plays('#C5', length, 9);plays('#A5', length, 10);
    plays('#F4', length, 11);plays('#C4', length, 12);plays('#A4', length, 13); keySig(1, true)}
  else if (keyNoteA == '/Gb' && typeNoteA == 0 && inversionA == 1) {
    plays('#Bb4', length, 1);plays('#Db4', length, 2);plays('#Gb4', length, 3);plays('#Bb5', length, 4);plays('#Db5', length, 5);
    plays('#Gb5', length, 6);plays('#Bb6', length, 7);plays('#Gb5', length, 8);plays('#Db5', length, 9);plays('#Bb5', length, 10);
    plays('#Gb4', length, 11);plays('#Db4', length, 12);plays('#Bb4', length, 13); keySig(6, true)}
  else if (keyNoteA == '/G' && typeNoteA == 0 && inversionA == 1) {
    plays('#B4', length, 1);plays('#D4', length, 2);plays('#G4', length, 3);plays('#B5', length, 4);plays('#D5', length, 5);
    plays('#G5', length, 6);plays('#B6', length, 7);plays('#G5', length, 8);plays('#D5', length, 9);plays('#B5', length, 10);
    plays('#G4', length, 11);plays('#D4', length, 12);plays('#B4', length, 13); keySig(1, false)}
  else if (keyNoteA == '/Ab' && typeNoteA == 1 && inversionA == 1) {
    plays('#B3', length, 1);plays('#Eb3', length, 2);plays('#Ab3', length, 3);plays('#B4', length, 4);plays('#Eb4', length, 5);
    plays('#Ab4', length, 6);plays('#B5', length, 7);plays('#Ab4', length, 8);plays('#Eb4', length, 9);plays('#B4', length, 10);
    plays('#Ab3', length, 11);plays('#Eb3', length, 12);plays('#B3', length, 13); keySig(7, true)}
  else if (keyNoteA == '/A' && typeNoteA == 1 && inversionA == 1) {
    plays('#C3', length, 1);plays('#E3', length, 2);plays('#A4', length, 3);plays('#C4', length, 4);plays('#E4', length, 5);
    plays('#A5', length, 6);plays('#C5', length, 7);plays('#A5', length, 8);plays('#E4', length, 9);plays('#C4', length, 10);
    plays('#A4', length, 11);plays('#E3', length, 12);plays('#C3', length, 13);}
  else if (keyNoteA == '/Bb' && typeNoteA == 1 && inversionA == 1) {
    plays('#Db3', length, 1);plays('#F3', length, 2);plays('#Bb4', length, 3);plays('#Db4', length, 4);plays('#F4', length, 5);
    plays('#Bb5', length, 6);plays('#Db5', length, 7);plays('#Bb5', length, 8);plays('#F4', length, 9);plays('#Db4', length, 10);
    plays('#Bb4', length, 11);plays('#F3', length, 12);plays('#Db3', length, 13); keySig(5, true)}
  else if (keyNoteA == '/B' && typeNoteA == 1 && inversionA == 1) {
    plays('#D3', length, 1);plays('#Gb3', length, 2);plays('#B4', length, 3);plays('#D4', length, 4);plays('#Gb4', length, 5);
    plays('#B5', length, 6);plays('#D5', length, 7);plays('#B5', length, 8);plays('#Gb4', length, 9);plays('#D4', length, 10);
    plays('#B4', length, 11);plays('#Gb3', length, 12);plays('#D3', length, 13); keySig(2, false)}
  else if (keyNoteA == '/C' && typeNoteA == 1 && inversionA == 1) {
    plays('#Eb3', length, 1);plays('#G3', length, 2);plays('#C4', length, 3);plays('#Eb4', length, 4);plays('#G4', length, 5);
    plays('#C5', length, 6);plays('#Eb5', length, 7);plays('#C5', length, 8);plays('#G4', length, 9);plays('#Eb4', length, 10);
    plays('#C4', length, 11);plays('#G3', length, 12);plays('#Eb3', length, 13); keySig(3, true)}
  else if (keyNoteA == '/Db' && typeNoteA == 1 && inversionA == 1) {
    plays('#E3', length, 1);plays('#Ab3', length, 2);plays('#Db4', length, 3);plays('#E4', length, 4);plays('#Ab4', length, 5);
    plays('#Db5', length, 6);plays('#E5', length, 7);plays('#Db5', length, 8);plays('#Ab4', length, 9);plays('#E4', length, 10);
    plays('#Db4', length, 11);plays('#Ab3', length, 12);plays('#E3', length, 13); keySig(4, false)}
  else if (keyNoteA == '/D' && typeNoteA == 1 && inversionA == 1) {
    plays('#F3', length, 1);plays('#A4', length, 2);plays('#D4', length, 3);plays('#F4', length, 4);plays('#A5', length, 5);
    plays('#D5', length, 6);plays('#F5', length, 7);plays('#D5', length, 8);plays('#A5', length, 9);plays('#F4', length, 10);
    plays('#D4', length, 11);plays('#A4', length, 12);plays('#F3', length, 13); keySig(1, true)}
  else if (keyNoteA == '/Eb' && typeNoteA == 1 && inversionA == 1) {
    plays('#Gb3', length, 1);plays('#Bb4', length, 2);plays('#Eb4', length, 3);plays('#Gb4', length, 4);plays('#Bb5', length, 5);
    plays('#Eb5', length, 6);plays('#Gb5', length, 7);plays('#Eb5', length, 8);plays('#Bb5', length, 9);plays('#Gb4', length, 10);
    plays('#Eb4', length, 11);plays('#Bb4', length, 12);plays('#Gb3', length, 13); keySig(6, true)}
  else if (keyNoteA == '/E' && typeNoteA == 1 && inversionA == 1) {
    plays('#G3', length, 1);plays('#B4', length, 2);plays('#E4', length, 3);plays('#G4', length, 4);plays('#B5', length, 5);
    plays('#E5', length, 6);plays('#G5', length, 7);plays('#E5', length, 8);plays('#B5', length, 9);plays('#G4', length, 10);
    plays('#E4', length, 11);plays('#B4', length, 12);plays('#G3', length, 13); keySig(1, false)}
  else if (keyNoteA == '/F' && typeNoteA == 1 && inversionA == 1) {
    plays('#Ab3', length, 1);plays('#C4', length, 2);plays('#F4', length, 3);plays('#Ab4', length, 4);plays('#C5', length, 5);
    plays('#F5', length, 6);plays('#Ab5', length, 7);plays('#F5', length, 8);plays('#C5', length, 9);plays('#Ab4', length, 10);
    plays('#F4', length, 11);plays('#C4', length, 12);plays('#Ab3', length, 13); keySig(4, true)}
  else if (keyNoteA == '/Gb' && typeNoteA == 1 && inversionA == 1) {
    plays('#A4', length, 1);plays('#Db4', length, 2);plays('#Gb4', length, 3);plays('#A5', length, 4);plays('#Db5', length, 5);
    plays('#Gb5', length, 6);plays('#A6', length, 7);plays('#Gb5', length, 8);plays('#Db5', length, 9);plays('#A5', length, 10);
    plays('#Gb4', length, 11);plays('#Db4', length, 12);plays('#A4', length, 13); keySig(3, false)}
  else if (keyNoteA == '/G' && typeNoteA == 1 && inversionA == 1) {
    plays('#Bb4', length, 1);plays('#D4', length, 2);plays('#G4', length, 3);plays('#Bb5', length, 4);plays('#D5', length, 5);
    plays('#G5', length, 6);plays('#Bb6', length, 7);plays('#G5', length, 8);plays('#D5', length, 9);plays('#Bb5', length, 10);
    plays('#G4', length, 11);plays('#D4', length, 12);plays('#Bb4', length, 13); keySig(2, true)}

  else if (keyNoteA == '/Ab' && typeNoteA == 0 && inversionA == 2) {
    plays('#Eb3', length, 2);plays('#Ab3', length, 3);plays('#C4', length, 4);plays('#Eb4', length, 5);plays('#Ab4', length, 6);
    plays('#C5', length, 7);plays('#Eb5', length, 8);plays('#C5', length, 9);plays('#Ab4', length, 10);plays('#Eb4', length, 11);
    plays('#C4', length, 12);plays('#Ab3', length, 13); plays('#Eb3', length, 14); keySig(4, true)}
  else if (keyNoteA == '/A' && typeNoteA == 0 && inversionA == 2) {
    plays('#E3', length, 1);plays('#A4', length, 2);plays('#Db4', length, 3);plays('#E4', length, 4);plays('#A5', length, 5);
    plays('#Db5', length, 6);plays('#E5', length, 7);plays('#Db5', length, 8);plays('#A5', length, 9);plays('#E4', length, 10);
    plays('#Db4', length, 11);plays('#A4', length, 12);plays('#E3', length, 13); keySig(3, false)}
  else if (keyNoteA == '/Bb' && typeNoteA == 0 && inversionA == 2) {
    plays('#F3', length, 1);plays('#Bb4', length, 2);plays('#D4', length, 3);plays('#F4', length, 4);plays('#Bb5', length, 5);
    plays('#D5', length, 6);plays('#F5', length, 7);plays('#D5', length, 8);plays('#Bb5', length, 9);plays('#F4', length, 10);
    plays('#D4', length, 11);plays('#Bb4', length, 12);plays('#F3', length, 13); keySig(2, true)}
  else if (keyNoteA == '/B' && typeNoteA == 0 && inversionA == 2) {
    plays('#Gb3', length, 1);plays('#B4', length, 2);plays('#Eb4', length, 3);plays('#Gb4', length, 4);plays('#B5', length, 5);
    plays('#Eb5', length, 6);plays('#Gb5', length, 7);plays('#Eb5', length, 8);plays('#B5', length, 9);plays('#Gb4', length, 10);
    plays('#Eb4', length, 11);plays('#B4', length, 12);plays('#Gb3', length, 13); keySig(5, false)}
  else if (keyNoteA == '/C' && typeNoteA == 0 && inversionA == 2) {
    plays('#G3', length, 1);plays('#C4', length, 2);plays('#E4', length, 3);plays('#G4', length, 4);plays('#C5', length, 5);
    plays('#E5', length, 6);plays('#G5', length, 7);plays('#E5', length, 8);plays('#C5', length, 9);plays('#G4', length, 10);
    plays('#E4', length, 11);plays('#C4', length, 12);plays('#G3', length, 13); }
  else if (keyNoteA == '/Db' && typeNoteA == 0 && inversionA == 2) {
    plays('#Ab3', length, 1);plays('#Db4', length, 2);plays('#F4', length, 3);plays('#Ab4', length, 4);plays('#Db5', length, 5);
    plays('#F5', length, 6);plays('#Ab5', length, 7);plays('#F5', length, 8);plays('#Db5', length, 9);plays('#Ab4', length, 10);
    plays('#F4', length, 11);plays('#Db4', length, 12);plays('#Ab3', length, 13); keySig(5, true)}
  else if (keyNoteA == '/D' && typeNoteA == 0 && inversionA == 2) {
    plays('#A4', length, 1);plays('#D4', length, 2);plays('#Gb4', length, 3);plays('#A5', length, 4);plays('#D5', length, 5);
    plays('#Gb5', length, 6);plays('#A6', length, 7);plays('#Gb5', length, 8);plays('#D5', length, 9);plays('#A5', length, 10);
    plays('#Gb4', length, 11);plays('#D4', length, 12);plays('#A4', length, 13); keySig(2, false)}
  else if (keyNoteA == '/Eb' && typeNoteA == 0 && inversionA == 2) {
    plays('#Bb4', length, 1);plays('#Eb4', length, 2);plays('#G4', length, 3);plays('#Bb5', length, 4);plays('#Eb5', length, 5);
    plays('#G5', length, 6);plays('#Bb6', length, 7);plays('#G5', length, 8);plays('#Eb5', length, 9);plays('#Bb5', length, 10);
    plays('#G4', length, 11);plays('#Eb4', length, 12);plays('#Bb4', length, 13); keySig(3, true)}
  else if (keyNoteA == '/E' && typeNoteA == 0 && inversionA == 2) {
    plays('#B4', length, 1);plays('#E4', length, 2);plays('#Ab4', length, 3);plays('#B5', length, 4);plays('#E5', length, 5);
    plays('#Ab5', length, 6);plays('#B6', length, 7);plays('#Ab5', length, 8);plays('#E5', length, 9);plays('#B5', length, 10);
    plays('#Ab4', length, 11);plays('#E4', length, 12);plays('#B4', length, 13); keySig(4, false)}
  else if (keyNoteA == '/F' && typeNoteA == 0 && inversionA == 2) {
    plays('#C4', length, 1);plays('#F4', length, 2);plays('#A5', length, 3);plays('#C5', length, 4);plays('#F5', length, 5);
    plays('#A6', length, 6);plays('#C6', length, 7);plays('#A6', length, 8);plays('#F5', length, 9);plays('#C5', length, 10);
    plays('#A5', length, 11);plays('#F4', length, 12);plays('#C4', length, 13); keySig(1, true)}
  else if (keyNoteA == '/Gb' && typeNoteA == 0 && inversionA == 2) {
    plays('#Db4', length, 1);plays('#Gb4', length, 2);plays('#Bb5', length, 3);plays('#Db5', length, 4);plays('#Gb5', length, 5);
    plays('#Bb6', length, 6);plays('#Db6', length, 7);plays('#Bb6', length, 8);plays('#Gb5', length, 9);plays('#Db5', length, 10);
    plays('#Bb5', length, 11);plays('#Gb4', length, 12);plays('#Db4', length, 13); keySig(6, true)}
  else if (keyNoteA == '/G' && typeNoteA == 0 && inversionA == 2) {
    plays('#D4', length, 1);plays('#G4', length, 2);plays('#B5', length, 3);plays('#D5', length, 4);plays('#G5', length, 5);
    plays('#B6', length, 6);plays('#D6', length, 7);plays('#B6', length, 8);plays('#G5', length, 9);plays('#D5', length, 10);
    plays('#B5', length, 11);plays('#G4', length, 12);plays('#D4', length, 13); keySig(1, false)}
  else if (keyNoteA == '/Ab' && typeNoteA == 1 && inversionA == 2) {
    plays('#Eb3', length, 2);plays('#Ab3', length, 3);plays('#B4', length, 4);plays('#Eb4', length, 5);plays('#Ab4', length, 6);
    plays('#B5', length, 7);plays('#Eb5', length, 8);plays('#B5', length, 9);plays('#Ab4', length, 10);plays('#Eb4', length, 11);
    plays('#B4', length, 12);plays('#Ab3', length, 13); plays('#Eb3', length, 14); keySig(7, true)}
  else if (keyNoteA == '/A' && typeNoteA == 1 && inversionA == 2) {
    plays('#E3', length, 1);plays('#A4', length, 2);plays('#C4', length, 3);plays('#E4', length, 4);plays('#A5', length, 5);
    plays('#C5', length, 6);plays('#E5', length, 7);plays('#C5', length, 8);plays('#A5', length, 9);plays('#E4', length, 10);
    plays('#C4', length, 11);plays('#A4', length, 12);plays('#E3', length, 13); }
  else if (keyNoteA == '/Bb' && typeNoteA == 1 && inversionA == 2) {
    plays('#F3', length, 1);plays('#Bb4', length, 2);plays('#Db4', length, 3);plays('#F4', length, 4);plays('#Bb5', length, 5);
    plays('#Db5', length, 6);plays('#F5', length, 7);plays('#Db5', length, 8);plays('#Bb5', length, 9);plays('#F4', length, 10);
    plays('#Db4', length, 11);plays('#Bb4', length, 12);plays('#F3', length, 13); keySig(5, true)}
  else if (keyNoteA == '/B' && typeNoteA == 1 && inversionA == 2) {
    plays('#Gb3', length, 1);plays('#B4', length, 2);plays('#D4', length, 3);plays('#Gb4', length, 4);plays('#B5', length, 5);
    plays('#D5', length, 6);plays('#Gb5', length, 7);plays('#D5', length, 8);plays('#B5', length, 9);plays('#Gb4', length, 10);
    plays('#D4', length, 11);plays('#B4', length, 12);plays('#Gb3', length, 13); keySig(2, false)}
  else if (keyNoteA == '/C' && typeNoteA == 1 && inversionA == 2) {
    plays('#G3', length, 1);plays('#C4', length, 2);plays('#Eb4', length, 3);plays('#G4', length, 4);plays('#C5', length, 5);
    plays('#Eb5', length, 6);plays('#G5', length, 7);plays('#Eb5', length, 8);plays('#C5', length, 9);plays('#G4', length, 10);
    plays('#Eb4', length, 11);plays('#C4', length, 12);plays('#G3', length, 13); keySig(3, true)}
  else if (keyNoteA == '/Db' && typeNoteA == 1 && inversionA == 2) {
    plays('#Ab3', length, 1);plays('#Db4', length, 2);plays('#E4', length, 3);plays('#Ab4', length, 4);plays('#Db5', length, 5);
    plays('#E5', length, 6);plays('#Ab5', length, 7);plays('#E5', length, 8);plays('#Db5', length, 9);plays('#Ab4', length, 10);
    plays('#E4', length, 11);plays('#Db4', length, 12);plays('#Ab3', length, 13); keySig(4, false)}
  else if (keyNoteA == '/D' && typeNoteA == 1 && inversionA == 2) {
    plays('#A4', length, 1);plays('#D4', length, 2);plays('#F4', length, 3);plays('#A5', length, 4);plays('#D5', length, 5);
    plays('#F5', length, 6);plays('#A6', length, 7);plays('#F5', length, 8);plays('#D5', length, 9);plays('#A5', length, 10);
    plays('#F4', length, 11);plays('#D4', length, 12);plays('#A4', length, 13); keySig(1, true)}
  else if (keyNoteA == '/Eb' && typeNoteA == 1 && inversionA == 2) {
    plays('#Bb4', length, 1);plays('#Eb4', length, 2);plays('#Gb4', length, 3);plays('#Bb5', length, 4);plays('#Eb5', length, 5);
    plays('#Gb5', length, 6);plays('#Bb6', length, 7);plays('#Gb5', length, 8);plays('#Eb5', length, 9);plays('#Bb5', length, 10);
    plays('#Gb4', length, 11);plays('#Eb4', length, 12);plays('#Bb4', length, 13); keySig(6, true)}
  else if (keyNoteA == '/E' && typeNoteA == 1 && inversionA == 2) {
    plays('#B4', length, 1);plays('#E4', length, 2);plays('#G4', length, 3);plays('#B5', length, 4);plays('#E5', length, 5);
    plays('#G5', length, 6);plays('#B6', length, 7);plays('#G5', length, 8);plays('#E5', length, 9);plays('#B5', length, 10);
    plays('#G4', length, 11);plays('#E4', length, 12);plays('#B4', length, 13); keySig(1, false)}
  else if (keyNoteA == '/F' && typeNoteA == 1 && inversionA == 2) {
    plays('#C4', length, 1);plays('#F4', length, 2);plays('#Ab4', length, 3);plays('#C5', length, 4);plays('#F5', length, 5);
    plays('#Ab5', length, 6);plays('#C6', length, 7);plays('#Ab5', length, 8);plays('#F5', length, 9);plays('#C5', length, 10);
    plays('#Ab4', length, 11);plays('#F4', length, 12);plays('#C4', length, 13); keySig(4, true)}
  else if (keyNoteA == '/Gb' && typeNoteA == 1 && inversionA == 2) {
    plays('#Db4', length, 1);plays('#Gb4', length, 2);plays('#A5', length, 3);plays('#Db5', length, 4);plays('#Gb5', length, 5);
    plays('#A6', length, 6);plays('#Db6', length, 7);plays('#A6', length, 8);plays('#Gb5', length, 9);plays('#Db5', length, 10);
    plays('#A5', length, 11);plays('#Gb4', length, 12);plays('#Db4', length, 13); keySig(3, false)}
  else if (keyNoteA == '/G' && typeNoteA == 1 && inversionA == 2) {
    plays('#D4', length, 1);plays('#G4', length, 2);plays('#Bb5', length, 3);plays('#D5', length, 4);plays('#G5', length, 5);
    plays('#Bb6', length, 6);plays('#D6', length, 7);plays('#Bb6', length, 8);plays('#G5', length, 9);plays('#D5', length, 10);
    plays('#Bb5', length, 11);plays('#G4', length, 12);plays('#D4', length, 13); keySig(2, true)}
  else {
    document.getElementById("grand").style.visibility = "hidden";
    document.getElementById('Speed').textContent = '';
    window.alert("Please enter all fields")
  }
  resetLedges();
}

// Opens the information for the theory buttons at the top of the screen
var t = 0;
function theory() {
  if (t % 2 == 0) {
    document.getElementById("guide1").classList.toggle("active");
    document.getElementById("contents").style.visibility = "visible";
  }
  else {
    document.getElementById("guide1").classList.toggle("active");
    document.getElementById("contents").style.visibility = "hidden";
  }
  t++;
}
var t2 = 0;
function theory2() {
  if (t2 % 2 == 0) {
    document.getElementById("guide2").classList.toggle("active");
    document.getElementById("contents2").style.visibility = "visible";
  }
  else {
    document.getElementById("guide2").classList.toggle("active");
    document.getElementById("contents2").style.visibility = "hidden";
  }
  t2++;
}

// Prints the grand staff
function notation() {
  document.getElementById("grand").style.visibility = "visible";
}

// Creates the key signature by showing or hiding images of flats and sharps
var sharps = false;
var numAccident = 0;
function keySig(number, flat) {
  if (flat) {
    sharps = false;
    if (number > 0) {
      document.getElementById('b1').style.visibility="visible";
      document.getElementById('b8').style.visibility="visible";
      numAccident = 1;
    }
    if (number > 1) {
      document.getElementById('b2').style.visibility="visible";
      document.getElementById('b9').style.visibility="visible";
      numAccident = 2;
    }
    if (number > 2) {
      document.getElementById('b3').style.visibility="visible";
      document.getElementById('b10').style.visibility="visible";
      numAccident = 3;
    }
    if (number > 3) {
      document.getElementById('b4').style.visibility="visible";
      document.getElementById('b11').style.visibility="visible";
      numAccident = 4;
    }
    if (number > 4) {
      document.getElementById('b5').style.visibility="visible";
      document.getElementById('b12').style.visibility="visible";
      numAccident = 5;
    }
    if (number > 5) {
      document.getElementById('b6').style.visibility="visible";
      document.getElementById('b13').style.visibility="visible";
      numAccident = 6;
    }
    if (number > 6) {
      document.getElementById('b7').style.visibility="visible";
      document.getElementById('b14').style.visibility="visible";
      numAccident = 7;
    }
  }
  else if (!flat) {
    sharps = true;
    if (number > 0) {
      document.getElementById('s1').style.visibility="visible";
      document.getElementById('s8').style.visibility="visible";
      numAccident = 1;
    }
    if (number > 1) {
      document.getElementById('s2').style.visibility="visible";
      document.getElementById('s9').style.visibility="visible";
      numAccident = 2;
    }
    if (number > 2) {
      document.getElementById('s3').style.visibility="visible";
      document.getElementById('s10').style.visibility="visible";
      numAccident = 3;
    }
    if (number > 3) {
      document.getElementById('s4').style.visibility="visible";
      document.getElementById('s11').style.visibility="visible";
      numAccident = 4;
    }
    if (number > 4) {
      document.getElementById('s5').style.visibility="visible";
      document.getElementById('s12').style.visibility="visible";
      numAccident = 5;
    }
    if (number > 5) {
      document.getElementById('s6').style.visibility="visible";
      document.getElementById('s13').style.visibility="visible";
      numAccident = 6;
    }
    if (number > 6) {
      document.getElementById('s7').style.visibility="visible";
      document.getElementById('s14').style.visibility="visible";
      numAccident = 7;
    }
  }
}

function surprise() {
  findHeight = 560;
  note(findHeight, 1);
  const audio = new Audio('Audio/Epic.mp3');
  audio.play();
}

// Shows all of the notes played on the sheet music
function note(height, number) {
  if (number == 1) {
    document.getElementById('n1').style.visibility="visible";
    n1.style.top = height+"%";
  }
  else if (number == 2) {
    document.getElementById('n2').style.visibility="visible";
    n2.style.top = height+"%";
  }
  else if (number == 3) {
    document.getElementById('n3').style.visibility="visible";
    n3.style.top = height+"%";
  }
  else if (number == 4) {
    document.getElementById('n4').style.visibility="visible";
    n4.style.top = height+"%";
  }
  else if (number == 5) {
    document.getElementById('n5').style.visibility="visible";
    n5.style.top = height+"%";
  }
  else if (number == 6) {
    document.getElementById('n6').style.visibility="visible";
    n6.style.top = height+"%";
  }
  else if (number == 7) {
    document.getElementById('n7').style.visibility="visible";
    n7.style.top = height+"%";
  }
  else if (number == 8) {
    document.getElementById('n8').style.visibility="visible";
    n8.style.top = height+"%";
  }
  else if (number == 9) {
    document.getElementById('n9').style.visibility="visible";
    n9.style.top = height+"%";
  }
  else if (number == 10) {
    document.getElementById('n10').style.visibility="visible";
    n10.style.top = height+"%";
  }
  else if (number == 11) {
    document.getElementById('n11').style.visibility="visible";
    n11.style.top = height+"%";
  }
  else if (number == 12) {
    document.getElementById('n12').style.visibility="visible";
    n12.style.top = height+"%";
  }
  else if (number == 13) {
    document.getElementById('n13').style.visibility="visible";
    n13.style.top = height+"%";
  }
  else if (number == 14) {
    document.getElementById('n14').style.visibility="visible";
    n14.style.top = height+"%";
  }
  else  if (number == 15) {
    document.getElementById('n15').style.visibility="visible";
    n15.style.top = height+"%";
  }
  else if (number == 16) {
    document.getElementById('n16').style.visibility="visible";
    n16.style.top = height+"%";
  }
  else if (number == 17) {
    document.getElementById('n17').style.visibility="visible";
    n17.style.top = height+"%";
  }
  else if (number == 18) {
    document.getElementById('n18').style.visibility="visible";
    n18.style.top = height+"%";
  }
  else if (number == 19) {
    document.getElementById('n19').style.visibility="visible";
    n19.style.top = height+"%";
  }
  else if (number == 20) {
    document.getElementById('n20').style.visibility="visible";
    n20.style.top = height+"%";
  }
  else if (number == 21) {
    document.getElementById('n21').style.visibility="visible";
    n21.style.top = height+"%";
  }
  else if (number == 22) {
    document.getElementById('n22').style.visibility="visible";
    n22.style.top = height+"%";
  }
  else if (number == 23) {
    document.getElementById('n23').style.visibility="visible";
    n23.style.top = height+"%";
  }
}

// Resets all values once something is done playing
function reset() {
  document.getElementById('b1').style.visibility="hidden";
  document.getElementById('b2').style.visibility="hidden";
  document.getElementById('b3').style.visibility="hidden";
  document.getElementById('b4').style.visibility="hidden";
  document.getElementById('b5').style.visibility="hidden";
  document.getElementById('b6').style.visibility="hidden";
  document.getElementById('b7').style.visibility="hidden";
  document.getElementById('b8').style.visibility="hidden";
  document.getElementById('b9').style.visibility="hidden";
  document.getElementById('b10').style.visibility="hidden";
  document.getElementById('b11').style.visibility="hidden";
  document.getElementById('b12').style.visibility="hidden";
  document.getElementById('b13').style.visibility="hidden";
  document.getElementById('b14').style.visibility="hidden";
  document.getElementById('s1').style.visibility="hidden";
  document.getElementById('s2').style.visibility="hidden";
  document.getElementById('s3').style.visibility="hidden";
  document.getElementById('s4').style.visibility="hidden";
  document.getElementById('s5').style.visibility="hidden";
  document.getElementById('s6').style.visibility="hidden";
  document.getElementById('s7').style.visibility="hidden";
  document.getElementById('s8').style.visibility="hidden";
  document.getElementById('s9').style.visibility="hidden";
  document.getElementById('s10').style.visibility="hidden";
  document.getElementById('s11').style.visibility="hidden";
  document.getElementById('s12').style.visibility="hidden";
  document.getElementById('s13').style.visibility="hidden";
  document.getElementById('s14').style.visibility="hidden";
  document.getElementById('n1').style.visibility="hidden";
  document.getElementById('n2').style.visibility="hidden";
  document.getElementById('n3').style.visibility="hidden";
  document.getElementById('n4').style.visibility="hidden";
  document.getElementById('n5').style.visibility="hidden";
  document.getElementById('n6').style.visibility="hidden";
  document.getElementById('n7').style.visibility="hidden";
  document.getElementById('n8').style.visibility="hidden";
  document.getElementById('n9').style.visibility="hidden";
  document.getElementById('n10').style.visibility="hidden";
  document.getElementById('n11').style.visibility="hidden";
  document.getElementById('n12').style.visibility="hidden";
  document.getElementById('n13').style.visibility="hidden";
  document.getElementById('n14').style.visibility="hidden";
  document.getElementById('n15').style.visibility="hidden";
  document.getElementById('n16').style.visibility="hidden";
  document.getElementById('n17').style.visibility="hidden";
  document.getElementById('n18').style.visibility="hidden";
  document.getElementById('n19').style.visibility="hidden";
  document.getElementById('n20').style.visibility="hidden";
  document.getElementById('n21').style.visibility="hidden";
  document.getElementById('n22').style.visibility="hidden";
  document.getElementById('n23').style.visibility="hidden";
}

// Cadences
var maj = true;
var selected = false;
function majorCad() {
  maj = true;
  selected = true;
  document.getElementById('majorCad').style.backgroundColor = 'limegreen';
  document.getElementById('minorCad').style.backgroundColor = '#f3f0f3';
}
function minorCad() {
  maj = false;
  selected = true;
  document.getElementById('minorCad').style.backgroundColor = 'limegreen';
  document.getElementById('majorCad').style.backgroundColor = '#f3f0f3';
}
var typeCad = 0;
function perfect() {
  typeCad = 0;
  document.getElementById('perfect').style.backgroundColor = 'limegreen';
  document.getElementById('plagal').style.backgroundColor = '#f3f0f3';
  document.getElementById('half').style.backgroundColor = '#f3f0f3';
  document.getElementById('deceptive').style.backgroundColor = '#f3f0f3';
  document.getElementById('imperfect').style.backgroundColor = '#f3f0f3';
}
function plagal() {
  typeCad = 1;
  document.getElementById('plagal').style.backgroundColor = 'limegreen';
  document.getElementById('perfect').style.backgroundColor = '#f3f0f3';
  document.getElementById('half').style.backgroundColor = '#f3f0f3';
  document.getElementById('deceptive').style.backgroundColor = '#f3f0f3';
  document.getElementById('imperfect').style.backgroundColor = '#f3f0f3';
}
function half() {
  typeCad = 2;
  document.getElementById('half').style.backgroundColor = 'limegreen';
  document.getElementById('perfect').style.backgroundColor = '#f3f0f3';
  document.getElementById('plagal').style.backgroundColor = '#f3f0f3';
  document.getElementById('deceptive').style.backgroundColor = '#f3f0f3';
  document.getElementById('imperfect').style.backgroundColor = '#f3f0f3';
}
function deceptive() {
  typeCad = 3;
  document.getElementById('deceptive').style.backgroundColor = 'limegreen';
  document.getElementById('perfect').style.backgroundColor = '#f3f0f3';
  document.getElementById('plagal').style.backgroundColor = '#f3f0f3';
  document.getElementById('half').style.backgroundColor = '#f3f0f3';
  document.getElementById('imperfect').style.backgroundColor = '#f3f0f3';
}
function imperfect() {
  typeCad = 4;
  document.getElementById('imperfect').style.backgroundColor = 'limegreen';
  document.getElementById('perfect').style.backgroundColor = '#f3f0f3';
  document.getElementById('plagal').style.backgroundColor = '#f3f0f3';
  document.getElementById('half').style.backgroundColor = '#f3f0f3';
  document.getElementById('deceptive').style.backgroundColor = '#f3f0f3';
}

function clearNumerals() {
  document.getElementById('one').textContent = '';
  document.getElementById('four').textContent = '';
  document.getElementById('five').textContent = '';
  document.getElementById('six').textContent = '';
}

function nextCadence() {
  reset();
  clearNumerals();
  numAccident = 0;

  if (!selected || keyNoteCad == null) {
    document.getElementById("grand").style.visibility = "hidden";
    window.alert("Please enter all fields");
  }

  // Sets the position of the numerals
  else if (typeCad == 0) {
    five.style.left = 29.8+"%";
    one.style.left = 31.6+"%";
    if (!maj) {
      typeHeight = 1;
    }
    Bsh = false;
    Esh = false;
    Csh = false;
    Fsh = false;
    Gsh = false;

    if (maj && selected) {
      document.getElementById('one').textContent = 'I';
      document.getElementById('five').textContent = 'V';
      if (keyNoteCad == '/Ab') {
        plays('#Eb3', 2000, 0.1); plays('#Bb4', 2000, 0.11); plays('#Eb4', 2000, 0.111); plays('#G4', 2000, 0.1111);keySig(4, true);
        plays('#Ab2', 2000, 1.54); plays('#C3', 2000, 1.55); plays('#Eb3', 2000, 1.555); plays('#Ab3', 2000, 1.5555);}
      else if (keyNoteCad == '/A') {
        plays('#E3', 2000, 0.1); plays('#B4', 2000, 0.11); plays('#E4', 2000, 0.111); plays('#Ab4', 2000, 0.1111);keySig(3, false);
        plays('#A3', 2000, 1.54); plays('#Db3', 2000, 1.55); plays('#E3', 2000, 1.555); plays('#A4', 2000, 1.5555);}
      else if (keyNoteCad == '/Bb') {
        plays('#F3', 2000, 0.1); plays('#C4', 2000, 0.11); plays('#F4', 2000, 0.111); plays('#A5', 2000, 0.1111);keySig(2, true);
        plays('#Bb3', 2000, 1.54); plays('#D3', 2000, 1.55); plays('#F3', 2000, 1.555); plays('#Bb4', 2000, 1.5555);}
      else if (keyNoteCad == '/B') {
        plays('#Gb3', 2000, 0.1); plays('#Db4', 2000, 0.11); plays('#Gb4', 2000, 0.111); plays('#Bb5', 2000, 0.1111);keySig(5, false);
        plays('#B3', 2000, 1.54); plays('#Eb3', 2000, 1.55); plays('#Gb3', 2000, 1.555); plays('#B4', 2000, 1.5555);}
      else if (keyNoteCad == '/C') {
        plays('#G3', 2000, 0.1); plays('#D4', 2000, 0.11); plays('#G4', 2000, 0.111); plays('#B5', 2000, 0.1111);
        plays('#C3', 2000, 1.54); plays('#E3', 2000, 1.55); plays('#G3', 2000, 1.555); plays('#C4', 2000, 1.5555);}
      else if (keyNoteCad == '/Db') {
        plays('#Ab3', 2000, 0.1); plays('#Eb4', 2000, 0.11); plays('#Ab4', 2000, 0.111); plays('#C5', 2000, 0.1111);keySig(5, true);
        plays('#Db3', 2000, 1.54); plays('#F3', 2000, 1.55); plays('#Ab3', 2000, 1.555); plays('#Db4', 2000, 1.5555);}
      else if (keyNoteCad == '/D') {
        plays('#A4', 2000, 0.1); plays('#E4', 2000, 0.11); plays('#A5', 2000, 0.111); plays('#Db5', 2000, 0.1111);keySig(2, false);
        plays('#D3', 2000, 1.54); plays('#Gb3', 2000, 1.55); plays('#A4', 2000, 1.555); plays('#D4', 2000, 1.5555);}
      else if (keyNoteCad == '/Eb') {
        plays('#Bb4', 2000, 0.1); plays('#F4', 2000, 0.11); plays('#Bb5', 2000, 0.111); plays('#D5', 2000, 0.1111);keySig(3, true);
        plays('#Eb3', 2000, 1.54); plays('#G3', 2000, 1.55); plays('#Bb4', 2000, 1.555); plays('#Eb4', 2000, 1.5555);}
      else if (keyNoteCad == '/E') {
        plays('#B4', 2000, 0.1); plays('#Gb4', 2000, 0.11); plays('#B5', 2000, 0.111); plays('#Eb5', 2000, 0.1111);keySig(4, false);
        plays('#E3', 2000, 1.54); plays('#Ab3', 2000, 1.55); plays('#B4', 2000, 1.555); plays('#E4', 2000, 1.5555);}
      else if (keyNoteCad == '/F') {
        plays('#C4', 2000, 0.1); plays('#G4', 2000, 0.11); plays('#C5', 2000, 0.111); plays('#E5', 2000, 0.1111);keySig(1, true);
        plays('#F3', 2000, 1.54); plays('#A4', 2000, 1.55); plays('#C4', 2000, 1.555); plays('#F4', 2000, 1.5555);}
      else if (keyNoteCad == '/Gb') {
        plays('#Db4', 2000, 0.1); plays('#Ab4', 2000, 0.11); plays('#Db5', 2000, 0.111); plays('#F5', 2000, 0.1111);keySig(6, true);
        plays('#Gb3', 2000, 1.54); plays('#Bb4', 2000, 1.55); plays('#Db4', 2000, 1.555); plays('#Gb4', 2000, 1.5555);}
      else if (keyNoteCad == '/G') {
        plays('#D4', 2000, 0.1); plays('#A5', 2000, 0.11); plays('#D5', 2000, 0.111); plays('#Gb5', 2000, 0.1111);keySig(1, false);
        plays('#G3', 2000, 1.54); plays('#B4', 2000, 1.55); plays('#D4', 2000, 1.555); plays('#G4', 2000, 1.5555);}
      else {
        document.getElementById("grand").style.visibility = "hidden";
        window.alert("Please enter all fields");}
    }

    else if (!maj && selected) {
      document.getElementById('one').textContent = 'i';
      document.getElementById('five').textContent = 'v';
      if (keyNoteCad == '/Ab') {
        plays('#Eb3', 2000, 0.1); plays('#Bb4', 2000, 0.11); plays('#Eb4', 2000, 0.111); plays('#Gb4', 2000, 0.1111);keySig(7, true);
        plays('#Ab2', 2000, 1.54); plays('#B3', 2000, 1.55); plays('#Eb3', 2000, 1.555); plays('#Ab3', 2000, 1.5555);}
      else if (keyNoteCad == '/A') {
        plays('#E3', 2000, 0.1); plays('#B4', 2000, 0.11); plays('#E4', 2000, 0.111); plays('#G4', 2000, 0.1111);
        plays('#A3', 2000, 1.54); plays('#C3', 2000, 1.55); plays('#E3', 2000, 1.555); plays('#A4', 2000, 1.5555);}
      else if (keyNoteCad == '/Bb') {
        plays('#F3', 2000, 0.1); plays('#C4', 2000, 0.11); plays('#F4', 2000, 0.111); plays('#Ab4', 2000, 0.1111);keySig(5, true);
        plays('#Bb3', 2000, 1.54); plays('#Db3', 2000, 1.55); plays('#F3', 2000, 1.555); plays('#Bb4', 2000, 1.5555);}
      else if (keyNoteCad == '/B') {
        plays('#Gb3', 2000, 0.1); plays('#Db4', 2000, 0.11); plays('#Gb4', 2000, 0.111); plays('#A5', 2000, 0.1111);keySig(2, false);
        plays('#B3', 2000, 1.54); plays('#D3', 2000, 1.55); plays('#Gb3', 2000, 1.555); plays('#B4', 2000, 1.5555);}
      else if (keyNoteCad == '/C') {
        plays('#G3', 2000, 0.1); plays('#D4', 2000, 0.11); plays('#G4', 2000, 0.111); plays('#Bb5', 2000, 0.1111);keySig(3, true);
        plays('#C3', 2000, 1.54); plays('#Eb3', 2000, 1.55); plays('#G3', 2000, 1.555); plays('#C4', 2000, 1.5555);}
      else if (keyNoteCad == '/Db') {
        plays('#Ab3', 2000, 0.1); plays('#Eb4', 2000, 0.11); plays('#Ab4', 2000, 0.111); plays('#B5', 2000, 0.1111);keySig(4, false);
        plays('#Db3', 2000, 1.54); plays('#E3', 2000, 1.55); plays('#Ab3', 2000, 1.555); plays('#Db4', 2000, 1.5555);}
      else if (keyNoteCad == '/D') {
        plays('#A4', 2000, 0.1); plays('#E4', 2000, 0.11); plays('#A5', 2000, 0.111); plays('#C5', 2000, 0.1111);keySig(1, true);
        plays('#D3', 2000, 1.54); plays('#F3', 2000, 1.55); plays('#A4', 2000, 1.555); plays('#D4', 2000, 1.5555);}
      else if (keyNoteCad == '/Eb') {
        plays('#Bb4', 2000, 0.1); plays('#F4', 2000, 0.11); plays('#Bb5', 2000, 0.111); plays('#Db5', 2000, 0.1111);keySig(6, true);
        plays('#Eb3', 2000, 1.54); plays('#Gb3', 2000, 1.55); plays('#Bb4', 2000, 1.555); plays('#Eb4', 2000, 1.5555);}
      else if (keyNoteCad == '/E') {
        plays('#B4', 2000, 0.1); plays('#Gb4', 2000, 0.11); plays('#B5', 2000, 0.111); plays('#D5', 2000, 0.1111);keySig(1, false);
        plays('#E3', 2000, 1.54); plays('#G3', 2000, 1.55); plays('#B4', 2000, 1.555); plays('#E4', 2000, 1.5555);}
      else if (keyNoteCad == '/F') {
        plays('#C4', 2000, 0.1); plays('#G4', 2000, 0.11); plays('#C5', 2000, 0.111); plays('#Eb5', 2000, 0.1111);keySig(4, true);
        plays('#F3', 2000, 1.54); plays('#Ab3', 2000, 1.55); plays('#C4', 2000, 1.555); plays('#F4', 2000, 1.5555);}
      else if (keyNoteCad == '/Gb') {
        plays('#Db4', 2000, 0.1); plays('#Ab4', 2000, 0.11); plays('#Db5', 2000, 0.111); plays('#E5', 2000, 0.1111);keySig(3, false);
        plays('#Gb3', 2000, 1.54); plays('#A4', 2000, 1.55); plays('#Db4', 2000, 1.555); plays('#Gb4', 2000, 1.5555);}
      else if (keyNoteCad == '/G') {
        plays('#D4', 2000, 0.1); plays('#A5', 2000, 0.11); plays('#D5', 2000, 0.111); plays('#F5', 2000, 0.1111);keySig(2, true);
        plays('#G3', 2000, 1.54); plays('#Bb4', 2000, 1.55); plays('#D4', 2000, 1.555); plays('#G4', 2000, 1.5555);}
      else {
        document.getElementById("grand").style.visibility = "hidden";
        window.alert("Please enter all fields");}
    }
    else {
      document.getElementById("grand").style.visibility = "hidden";
      window.alert("Please enter all fields");
    }
  }

  else if (typeCad == 1) {
    four.style.left = 29.8+"%";
    one.style.left = 31.5+"%";
    
    if (maj) {
      document.getElementById('one').textContent = 'I';
      document.getElementById('four').textContent = 'IV';
      if (keyNoteCad == '/Ab') {
        plays('#Db3', 2000, 0.1); plays('#Ab3', 2000, 0.11); plays('#Db4', 2000, 0.111); plays('#F4', 2000, 0.1111);keySig(4, true);
        plays('#Ab2', 2000, 1.54); plays('#C3', 2000, 1.55); plays('#Eb3', 2000, 1.555); plays('#Ab3', 2000, 1.5555);}
      else if (keyNoteCad == '/A') {
        plays('#D3', 2000, 0.1); plays('#A4', 2000, 0.11); plays('#D4', 2000, 0.111); plays('#Gb4', 2000, 0.1111);keySig(3, false);
        plays('#A3', 2000, 1.54); plays('#Db3', 2000, 1.55); plays('#E3', 2000, 1.555); plays('#A4', 2000, 1.5555);}
      else if (keyNoteCad == '/Bb') {
        plays('#Eb3', 2000, 0.1); plays('#Bb4', 2000, 0.11); plays('#Eb4', 2000, 0.111); plays('#G4', 2000, 0.1111);keySig(2, true);
        plays('#Bb3', 2000, 1.54); plays('#D3', 2000, 1.55); plays('#F3', 2000, 1.555); plays('#Bb4', 2000, 1.5555);}
      else if (keyNoteCad == '/B') {
        plays('#E3', 2000, 0.1); plays('#B4', 2000, 0.11); plays('#E4', 2000, 0.111); plays('#Ab4', 2000, 0.1111);keySig(5, false);
        plays('#B3', 2000, 1.54); plays('#Eb3', 2000, 1.55); plays('#Gb3', 2000, 1.555); plays('#B4', 2000, 1.5555);}
      else if (keyNoteCad == '/C') {
        plays('#F3', 2000, 0.1); plays('#C4', 2000, 0.11); plays('#F4', 2000, 0.111); plays('#A5', 2000, 0.1111);
        plays('#C3', 2000, 1.54); plays('#E3', 2000, 1.55); plays('#G3', 2000, 1.555); plays('#C4', 2000, 1.5555);}
      else if (keyNoteCad == '/Db') {
        plays('#Gb3', 2000, 0.1); plays('#Db4', 2000, 0.11); plays('#Gb4', 2000, 0.111); plays('#Bb5', 2000, 0.1111);keySig(5, true);
        plays('#Db3', 2000, 1.54); plays('#F3', 2000, 1.55); plays('#Ab3', 2000, 1.555); plays('#Db4', 2000, 1.5555);}
      else if (keyNoteCad == '/D') {
        plays('#G3', 2000, 0.1); plays('#D4', 2000, 0.11); plays('#G4', 2000, 0.111); plays('#B5', 2000, 0.1111);keySig(2, false);
        plays('#D3', 2000, 1.54); plays('#Gb3', 2000, 1.55); plays('#A4', 2000, 1.555); plays('#D4', 2000, 1.5555);}
      else if (keyNoteCad == '/Eb') {
        plays('#Ab3', 2000, 0.1); plays('#Eb4', 2000, 0.11); plays('#Ab4', 2000, 0.111); plays('#C5', 2000, 0.1111);keySig(3, true);
        plays('#Eb3', 2000, 1.54); plays('#G3', 2000, 1.55); plays('#Bb4', 2000, 1.555); plays('#Eb4', 2000, 1.5555);}
      else if (keyNoteCad == '/E') {
        plays('#A4', 2000, 0.1); plays('#E4', 2000, 0.11); plays('#A5', 2000, 0.111); plays('#Db5', 2000, 0.1111);keySig(4, false);
        plays('#E3', 2000, 1.54); plays('#Ab3', 2000, 1.55); plays('#B4', 2000, 1.555); plays('#E4', 2000, 1.5555);}
      else if (keyNoteCad == '/F') {
        plays('#Bb4', 2000, 0.1); plays('#F4', 2000, 0.11); plays('#Bb5', 2000, 0.111); plays('#D5', 2000, 0.1111);keySig(1, true);
        plays('#F3', 2000, 1.54); plays('#A4', 2000, 1.55); plays('#C4', 2000, 1.555); plays('#F4', 2000, 1.5555);}
      else if (keyNoteCad == '/Gb') {
        plays('#B4', 2000, 0.1); plays('#Gb4', 2000, 0.11); plays('#B5', 2000, 0.111); plays('#Eb5', 2000, 0.1111);keySig(6, true);
        plays('#Gb3', 2000, 1.54); plays('#Bb4', 2000, 1.55); plays('#Db4', 2000, 1.555); plays('#Gb4', 2000, 1.5555);}
      else if (keyNoteCad == '/G') {
        plays('#C4', 2000, 0.1); plays('#G4', 2000, 0.11); plays('#C5', 2000, 0.111); plays('#E5', 2000, 0.1111);keySig(1, false);
        plays('#G3', 2000, 1.54); plays('#B4', 2000, 1.55); plays('#D4', 2000, 1.555); plays('#G4', 2000, 1.5555);}
      else {
        document.getElementById("grand").style.visibility = "hidden";
        window.alert("Please enter all fields");}
    }
    else if (!maj) {
      document.getElementById('one').textContent = 'i';
      document.getElementById('four').textContent = 'iv';
      if (keyNoteCad == '/Ab') {
        plays('#Db3', 2000, 0.1); plays('#Ab3', 2000, 0.11); plays('#Db4', 2000, 0.111); plays('#E4', 2000, 0.1111);keySig(7, true);
        plays('#Ab2', 2000, 1.54); plays('#B3', 2000, 1.55); plays('#Eb3', 2000, 1.555); plays('#Ab3', 2000, 1.5555);}
      else if (keyNoteCad == '/A') {
        plays('#D3', 2000, 0.1); plays('#A4', 2000, 0.11); plays('#D4', 2000, 0.111); plays('#F4', 2000, 0.1111);
        plays('#A3', 2000, 1.54); plays('#C3', 2000, 1.55); plays('#E3', 2000, 1.555); plays('#A4', 2000, 1.5555);}
      else if (keyNoteCad == '/Bb') {
        plays('#Eb3', 2000, 0.1); plays('#Bb4', 2000, 0.11); plays('#Eb4', 2000, 0.111); plays('#Gb4', 2000, 0.1111);keySig(5, true);
        plays('#Bb3', 2000, 1.54); plays('#Db3', 2000, 1.55); plays('#F3', 2000, 1.555); plays('#Bb4', 2000, 1.5555);}
      else if (keyNoteCad == '/B') {
        plays('#E3', 2000, 0.1); plays('#B4', 2000, 0.11); plays('#E4', 2000, 0.111); plays('#G4', 2000, 0.1111);keySig(2, false);
        plays('#B3', 2000, 1.54); plays('#D3', 2000, 1.55); plays('#Gb3', 2000, 1.555); plays('#B4', 2000, 1.5555);}
      else if (keyNoteCad == '/C') {
        plays('#F3', 2000, 0.1); plays('#C4', 2000, 0.11); plays('#F4', 2000, 0.111); plays('#Ab4', 2000, 0.1111);keySig(3, true);
        plays('#C3', 2000, 1.54); plays('#Eb3', 2000, 1.55); plays('#G3', 2000, 1.555); plays('#C4', 2000, 1.5555);}
      else if (keyNoteCad == '/Db') {
        plays('#Gb3', 2000, 0.1); plays('#Db4', 2000, 0.11); plays('#Gb4', 2000, 0.111); plays('#A5', 2000, 0.1111);keySig(4, false);
        plays('#Db3', 2000, 1.54); plays('#E3', 2000, 1.55); plays('#Ab3', 2000, 1.555); plays('#Db4', 2000, 1.5555);}
      else if (keyNoteCad == '/D') {
        plays('#G3', 2000, 0.1); plays('#D4', 2000, 0.11); plays('#G4', 2000, 0.111); plays('#Bb5', 2000, 0.1111);keySig(1, true);
        plays('#D3', 2000, 1.54); plays('#F3', 2000, 1.55); plays('#A4', 2000, 1.555); plays('#D4', 2000, 1.5555);}
      else if (keyNoteCad == '/Eb') {
        plays('#Ab3', 2000, 0.1); plays('#Eb4', 2000, 0.11); plays('#Ab4', 2000, 0.111); plays('#B5', 2000, 0.1111);keySig(6, true);
        plays('#Eb3', 2000, 1.54); plays('#Gb3', 2000, 1.55); plays('#Bb4', 2000, 1.555); plays('#Eb4', 2000, 1.5555);}
      else if (keyNoteCad == '/E') {
        plays('#A4', 2000, 0.1); plays('#E4', 2000, 0.11); plays('#A5', 2000, 0.111); plays('#C5', 2000, 0.1111);keySig(1, false);
        plays('#E3', 2000, 1.54); plays('#G3', 2000, 1.55); plays('#B4', 2000, 1.555); plays('#E4', 2000, 1.5555);}
      else if (keyNoteCad == '/F') {
        plays('#Bb4', 2000, 0.1); plays('#F4', 2000, 0.11); plays('#Bb5', 2000, 0.111); plays('#Db5', 2000, 0.1111);keySig(4, true);
        plays('#F3', 2000, 1.54); plays('#Ab3', 2000, 1.55); plays('#C4', 2000, 1.555); plays('#F4', 2000, 1.5555);}
      else if (keyNoteCad == '/Gb') {
        plays('#B4', 2000, 0.1); plays('#Gb4', 2000, 0.11); plays('#B5', 2000, 0.111); plays('#D5', 2000, 0.1111);keySig(3, false);
        plays('#Gb3', 2000, 1.54); plays('#A4', 2000, 1.55); plays('#Db4', 2000, 1.555); plays('#Gb4', 2000, 1.5555);}
      else if (keyNoteCad == '/G') {
        plays('#C4', 2000, 0.1); plays('#G4', 2000, 0.11); plays('#C5', 2000, 0.111); plays('#Eb5', 2000, 0.1111);keySig(2, true);
        plays('#G3', 2000, 1.54); plays('#Bb4', 2000, 1.55); plays('#D4', 2000, 1.555); plays('#G4', 2000, 1.5555);}
      else {
        document.getElementById("grand").style.visibility = "hidden";
        window.alert("Please enter all fields");}
    }
    else {
      document.getElementById("grand").style.visibility = "hidden";
      window.alert("Please enter all fields");
    }
  }

  else if (typeCad == 2) {
    one.style.left = 29.8+"%";
    five.style.left = 31.5+"%";

    if (maj) {
      document.getElementById('one').textContent = 'I';
      document.getElementById('five').textContent = 'V';
      if (keyNoteCad == '/Ab') {
        plays('#Ab2', 2000, 0.1); plays('#C3', 2000, 0.11); plays('#Eb3', 2000, 0.111); plays('#Ab3', 2000, 0.1111);keySig(4, true);
        plays('#Eb3', 2000, 1.54); plays('#Bb4', 2000, 1.55); plays('#Eb4', 2000, 1.555); plays('#G4', 2000, 1.5555);}
      else if (keyNoteCad == '/A') {
        plays('#A3', 2000, 0.1); plays('#Db3', 2000, 0.11); plays('#E3', 2000, 0.111); plays('#A4', 2000, 0.1111);keySig(3, false);
        plays('#E3', 2000, 1.54); plays('#B4', 2000, 1.55); plays('#E4', 2000, 1.555); plays('#Ab4', 2000, 1.5555);}
      else if (keyNoteCad == '/Bb') {
        plays('#Bb3', 2000, 0.1); plays('#D3', 2000, 0.11); plays('#F3', 2000, 0.111); plays('#Bb4', 2000, 0.1111);keySig(2, true);
        plays('#F3', 2000, 1.54); plays('#C4', 2000, 1.55); plays('#F4', 2000, 1.555); plays('#A5', 2000, 1.5555);}
      else if (keyNoteCad == '/B') {
        plays('#B3', 2000, 0.1); plays('#Eb3', 2000, 0.11); plays('#Gb3', 2000, 0.111); plays('#B4', 2000, 0.1111);keySig(5, false);
        plays('#Gb3', 2000, 1.54); plays('#Db4', 2000, 1.55); plays('#Gb4', 2000, 1.555); plays('#Bb5', 2000, 1.5555);}
      else if (keyNoteCad == '/C') {
        plays('#C3', 2000, 0.1); plays('#E3', 2000, 0.11); plays('#G3', 2000, 0.111); plays('#C4', 2000, 0.1111);
        plays('#G3', 2000, 1.54); plays('#D4', 2000, 1.55); plays('#G4', 2000, 1.555); plays('#B5', 2000, 1.5555);}
      else if (keyNoteCad == '/Db') {
        plays('#Db3', 2000, 0.1); plays('#F3', 2000, 0.11); plays('#Ab3', 2000, 0.111); plays('#Db4', 2000, 0.1111);keySig(5, true);
        plays('#Ab3', 2000, 1.54); plays('#Eb4', 2000, 1.55); plays('#Ab4', 2000, 1.555); plays('#C5', 2000, 1.5555);}
      else if (keyNoteCad == '/D') {
        plays('#D3', 2000, 0.1); plays('#Gb3', 2000, 0.11); plays('#A4', 2000, 0.111); plays('#D4', 2000, 0.1111);keySig(2, false);
        plays('#A4', 2000, 1.54); plays('#E4', 2000, 1.55); plays('#A5', 2000, 1.555); plays('#Db5', 2000, 1.5555);}
      else if (keyNoteCad == '/Eb') {
        plays('#Eb3', 2000, 0.1); plays('#G3', 2000, 0.11); plays('#Bb4', 2000, 0.111); plays('#Eb4', 2000, 0.1111);keySig(3, true);
        plays('#Bb4', 2000, 1.54); plays('#F4', 2000, 1.55); plays('#Bb5', 2000, 1.555); plays('#D5', 2000, 1.5555);}
      else if (keyNoteCad == '/E') {
        plays('#E3', 2000, 0.1); plays('#Ab3', 2000, 0.11); plays('#B4', 2000, 0.111); plays('#E4', 2000, 0.1111);keySig(4, false);
        plays('#B4', 2000, 1.54); plays('#Gb4', 2000, 1.55); plays('#B5', 2000, 1.555); plays('#Eb5', 2000, 1.5555);}
      else if (keyNoteCad == '/F') {
        plays('#F3', 2000, 0.1); plays('#A4', 2000, 0.11); plays('#C4', 2000, 0.111); plays('#F4', 2000, 0.1111);keySig(1, true);
        plays('#C4', 2000, 1.54); plays('#G4', 2000, 1.55); plays('#C5', 2000, 1.555); plays('#E5', 2000, 1.5555);}
      else if (keyNoteCad == '/Gb') {
        plays('#Gb3', 2000, 0.1); plays('#Bb4', 2000, 0.11); plays('#Db4', 2000, 0.111); plays('#Gb4', 2000, 0.1111);keySig(6, true);
        plays('#Db4', 2000, 1.54); plays('#Ab4', 2000, 1.55); plays('#Db5', 2000, 1.555); plays('#F5', 2000, 1.5555);}
      else if (keyNoteCad == '/G') {
        plays('#G3', 2000, 0.1); plays('#B4', 2000, 0.11); plays('#D4', 2000, 0.111); plays('#G4', 2000, 0.1111);keySig(1, false);
        plays('#D4', 2000, 1.54); plays('#A5', 2000, 1.55); plays('#D5', 2000, 1.555); plays('#Gb5', 2000, 1.5555);}
      else {
        document.getElementById("grand").style.visibility = "hidden";
        window.alert("Please enter all fields");}
    }
    else if (!maj) {
      document.getElementById('one').textContent = 'i';
      document.getElementById('five').textContent = 'v';
      if (keyNoteCad == '/Ab') {
        plays('#Ab2', 2000, 0.1); plays('#B3', 2000, 0.11); plays('#Eb3', 2000, 0.111); plays('#Ab3', 2000, 0.1111);keySig(7, true);
        plays('#Eb3', 2000, 1.54); plays('#Bb4', 2000, 1.55); plays('#Eb4', 2000, 1.555); plays('#Gb4', 2000, 1.5555);}
      else if (keyNoteCad == '/A') {
        plays('#A3', 2000, 0.1); plays('#C3', 2000, 0.11); plays('#E3', 2000, 0.111); plays('#A4', 2000, 0.1111);
        plays('#E3', 2000, 1.54); plays('#B4', 2000, 1.55); plays('#E4', 2000, 1.555); plays('#G4', 2000, 1.5555);}
      else if (keyNoteCad == '/Bb') {
        plays('#Bb3', 2000, 0.1); plays('#Db3', 2000, 0.11); plays('#F3', 2000, 0.111); plays('#Bb4', 2000, 0.1111);keySig(5, true);
        plays('#F3', 2000, 1.54); plays('#C4', 2000, 1.55); plays('#F4', 2000, 1.555); plays('#Ab4', 2000, 1.5555);}
      else if (keyNoteCad == '/B') {
        plays('#B3', 2000, 0.1); plays('#D3', 2000, 0.11); plays('#Gb3', 2000, 0.111); plays('#B4', 2000, 0.1111);keySig(2, false);
        plays('#Gb3', 2000, 1.54); plays('#Db4', 2000, 1.55); plays('#Gb4', 2000, 1.555); plays('#A5', 2000, 1.5555);}
      else if (keyNoteCad == '/C') {
        plays('#C3', 2000, 0.1); plays('#Eb3', 2000, 0.11); plays('#G3', 2000, 0.111); plays('#C4', 2000, 0.1111);keySig(3, true);
        plays('#G3', 2000, 1.54); plays('#D4', 2000, 1.55); plays('#G4', 2000, 1.555); plays('#Bb5', 2000, 1.5555);}
      else if (keyNoteCad == '/Db') {
        plays('#Db3', 2000, 0.1); plays('#E3', 2000, 0.11); plays('#Ab3', 2000, 0.111); plays('#Db4', 2000, 0.1111);keySig(4, false);
        plays('#Ab3', 2000, 1.54); plays('#Eb4', 2000, 1.55); plays('#Ab4', 2000, 1.555); plays('#B5', 2000, 1.5555);}
      else if (keyNoteCad == '/D') {
        plays('#D3', 2000, 0.1); plays('#F3', 2000, 0.11); plays('#A4', 2000, 0.111); plays('#D4', 2000, 0.1111);keySig(1, true);
        plays('#A4', 2000, 1.54); plays('#E4', 2000, 1.55); plays('#A5', 2000, 1.555); plays('#C5', 2000, 1.5555);}
      else if (keyNoteCad == '/Eb') {
        plays('#Eb3', 2000, 0.1); plays('#Gb3', 2000, 0.11); plays('#Bb4', 2000, 0.111); plays('#Eb4', 2000, 0.1111);keySig(6, true);
        plays('#Bb4', 2000, 1.54); plays('#F4', 2000, 1.55); plays('#Bb5', 2000, 1.555); plays('#Db5', 2000, 1.5555);}
      else if (keyNoteCad == '/E') {
        plays('#E3', 2000, 0.1); plays('#G3', 2000, 0.11); plays('#B4', 2000, 0.111); plays('#E4', 2000, 0.1111);keySig(1, false);
        plays('#B4', 2000, 1.54); plays('#Gb4', 2000, 1.55); plays('#B5', 2000, 1.555); plays('#D5', 2000, 1.5555);}
      else if (keyNoteCad == '/F') {
        plays('#F3', 2000, 0.1); plays('#Ab3', 2000, 0.11); plays('#C4', 2000, 0.111); plays('#F4', 2000, 0.1111);keySig(4, true);
        plays('#C4', 2000, 1.54); plays('#G4', 2000, 1.55); plays('#C5', 2000, 1.555); plays('#Eb5', 2000, 1.5555);}
      else if (keyNoteCad == '/Gb') {
        plays('#Gb3', 2000, 0.1); plays('#A4', 2000, 0.11); plays('#Db4', 2000, 0.111); plays('#Gb4', 2000, 0.1111);keySig(3, false);
        plays('#Db4', 2000, 1.54); plays('#Ab4', 2000, 1.55); plays('#Db5', 2000, 1.555); plays('#E5', 2000, 1.5555);}
      else if (keyNoteCad == '/G') {
        plays('#G3', 2000, 0.1); plays('#Bb4', 2000, 0.11); plays('#D4', 2000, 0.111); plays('#G4', 2000, 0.1111);keySig(2, true);
        plays('#D4', 2000, 1.54); plays('#A5', 2000, 1.55); plays('#D5', 2000, 1.555); plays('#F5', 2000, 1.5555);}
      else {
        document.getElementById("grand").style.visibility = "hidden";
        window.alert("Please enter all fields");}
    }
    else {
      document.getElementById("grand").style.visibility = "hidden";
      window.alert("Please enter all fields");
    }
  }

  else if (typeCad == 3) {
    five.style.left = 29.8+"%";
    six.style.left = 31.5+"%";
    if (maj) {
      document.getElementById('six').textContent = 'vi';
      document.getElementById('five').textContent = 'V';
      if (keyNoteCad == '/Ab') {
        plays('#Eb3', 2000, 0.1); plays('#Bb4', 2000, 0.11); plays('#Eb4', 2000, 0.111); plays('#G4', 2000, 0.1111);keySig(4, true);
        plays('#F3', 2000, 1.54); plays('#C4', 2000, 1.55); plays('#F4', 2000, 1.555); plays('#Ab4', 2000, 1.5555);}
      else if (keyNoteCad == '/A') {
        plays('#E3', 2000, 0.1); plays('#B4', 2000, 0.11); plays('#E4', 2000, 0.111); plays('#Ab4', 2000, 0.1111);keySig(3, false);
        plays('#Gb3', 2000, 1.54); plays('#Db4', 2000, 1.55); plays('#Gb4', 2000, 1.555); plays('#A5', 2000, 1.5555);}
      else if (keyNoteCad == '/Bb') {
        plays('#F3', 2000, 0.1); plays('#C4', 2000, 0.11); plays('#F4', 2000, 0.111); plays('#A5', 2000, 0.1111);keySig(2, true);
        plays('#G3', 2000, 1.54); plays('#D4', 2000, 1.55); plays('#G4', 2000, 1.555); plays('#Bb5', 2000, 1.5555);}
      else if (keyNoteCad == '/B') {
        plays('#Gb3', 2000, 0.1); plays('#Db4', 2000, 0.11); plays('#Gb4', 2000, 0.111); plays('#Bb5', 2000, 0.1111);keySig(5, false);
        plays('#Ab3', 2000, 1.54); plays('#Eb4', 2000, 1.55); plays('#Ab4', 2000, 1.555); plays('#B5', 2000, 1.5555);}
      else if (keyNoteCad == '/C') {
        plays('#G3', 2000, 0.1); plays('#D4', 2000, 0.11); plays('#G4', 2000, 0.111); plays('#B5', 2000, 0.1111);
        plays('#A4', 2000, 1.54); plays('#E4', 2000, 1.55); plays('#A5', 2000, 1.555); plays('#C5', 2000, 1.5555);}
      else if (keyNoteCad == '/Db') {
        plays('#Ab3', 2000, 0.1); plays('#Eb4', 2000, 0.11); plays('#Ab4', 2000, 0.111); plays('#C5', 2000, 0.1111);keySig(5, true);
        plays('#Bb4', 2000, 1.54); plays('#F4', 2000, 1.55); plays('#Bb5', 2000, 1.555); plays('#Db5', 2000, 1.5555);}
      else if (keyNoteCad == '/D') {
        plays('#A4', 2000, 0.1); plays('#E4', 2000, 0.11); plays('#A5', 2000, 0.111); plays('#Db5', 2000, 0.1111);keySig(2, false);
        plays('#B4', 2000, 1.54); plays('#Gb4', 2000, 1.55); plays('#B5', 2000, 1.555); plays('#D5', 2000, 1.5555);}
      else if (keyNoteCad == '/Eb') {
        plays('#Bb4', 2000, 0.1); plays('#F4', 2000, 0.11); plays('#Bb5', 2000, 0.111); plays('#D5', 2000, 0.1111);keySig(3, true);
        plays('#C4', 2000, 1.54); plays('#G4', 2000, 1.55); plays('#C5', 2000, 1.555); plays('#Eb5', 2000, 1.5555);}
      else if (keyNoteCad == '/E') {
        plays('#B4', 2000, 0.1); plays('#Gb4', 2000, 0.11); plays('#B5', 2000, 0.111); plays('#Eb5', 2000, 0.1111);keySig(4, false);
        plays('#Db4', 2000, 1.54); plays('#Ab4', 2000, 1.55); plays('#Db5', 2000, 1.555); plays('#E5', 2000, 1.5555);}
      else if (keyNoteCad == '/F') {
        plays('#C4', 2000, 0.1); plays('#G4', 2000, 0.11); plays('#C5', 2000, 0.111); plays('#E5', 2000, 0.1111);keySig(1, true);
        plays('#D4', 2000, 1.54); plays('#A5', 2000, 1.55); plays('#D5', 2000, 1.555); plays('#F5', 2000, 1.5555);}
      else if (keyNoteCad == '/Gb') {
        plays('#Db4', 2000, 0.1); plays('#Ab4', 2000, 0.11); plays('#Db5', 2000, 0.111); plays('#F5', 2000, 0.1111);keySig(6, true);
        plays('#Eb4', 2000, 1.54); plays('#Bb5', 2000, 1.55); plays('#Eb5', 2000, 1.555); plays('#Gb5', 2000, 1.5555);}
      else if (keyNoteCad == '/G') {
        plays('#D4', 2000, 0.1); plays('#A5', 2000, 0.11); plays('#D5', 2000, 0.111); plays('#Gb5', 2000, 0.1111);keySig(1, false);
        plays('#E4', 2000, 1.54); plays('#B5', 2000, 1.55); plays('#E5', 2000, 1.555); plays('#G5', 2000, 1.5555);}
      else {
        document.getElementById("grand").style.visibility = "hidden";
        window.alert("Please enter all fields");}
    }
    else if (!maj) {
      document.getElementById('six').textContent = 'VI';
      document.getElementById('five').textContent = 'v';
      if (keyNoteCad == '/Ab') {
        plays('#Eb3', 2000, 0.1); plays('#Bb4', 2000, 0.11); plays('#Eb4', 2000, 0.111); plays('#Gb4', 2000, 0.1111);keySig(7, true);
        plays('#F3', 2000, 1.54); plays('#C4', 2000, 1.55); plays('#F4', 2000, 1.555); plays('#A5', 2000, 1.5555);}
      else if (keyNoteCad == '/A') {
        plays('#E3', 2000, 0.1); plays('#B4', 2000, 0.11); plays('#E4', 2000, 0.111); plays('#G4', 2000, 0.1111);
        plays('#Gb3', 2000, 1.54); plays('#Db4', 2000, 1.55); plays('#Gb4', 2000, 1.555); plays('#Bb5', 2000, 1.5555);}
      else if (keyNoteCad == '/Bb') {
        plays('#F3', 2000, 0.1); plays('#C4', 2000, 0.11); plays('#F4', 2000, 0.111); plays('#Ab4', 2000, 0.1111);keySig(5, true);
        plays('#G3', 2000, 1.54); plays('#D4', 2000, 1.55); plays('#G4', 2000, 1.555); plays('#B5', 2000, 1.5555);}
      else if (keyNoteCad == '/B') {
        plays('#Gb3', 2000, 0.1); plays('#Db4', 2000, 0.11); plays('#Gb4', 2000, 0.111); plays('#A5', 2000, 0.1111);keySig(2, false);
        plays('#Ab3', 2000, 1.54); plays('#Eb4', 2000, 1.55); plays('#Ab4', 2000, 1.555); plays('#C5', 2000, 1.5555);}
      else if (keyNoteCad == '/C') {
        plays('#G3', 2000, 0.1); plays('#D4', 2000, 0.11); plays('#G4', 2000, 0.111); plays('#Bb5', 2000, 0.1111);keySig(3, true);
        plays('#A4', 2000, 1.54); plays('#E4', 2000, 1.55); plays('#A5', 2000, 1.555); plays('#Db5', 2000, 1.5555);}
      else if (keyNoteCad == '/Db') {
        plays('#Ab3', 2000, 0.1); plays('#Eb4', 2000, 0.11); plays('#Ab4', 2000, 0.111); plays('#B5', 2000, 0.1111);keySig(4, false);
        plays('#Bb4', 2000, 1.54); plays('#F4', 2000, 1.55); plays('#Bb5', 2000, 1.555); plays('#D5', 2000, 1.5555);}
      else if (keyNoteCad == '/D') {
        plays('#A4', 2000, 0.1); plays('#E4', 2000, 0.11); plays('#A5', 2000, 0.111); plays('#C5', 2000, 0.1111);keySig(1, true);
        plays('#B4', 2000, 1.54); plays('#Gb4', 2000, 1.55); plays('#B5', 2000, 1.555); plays('#Eb5', 2000, 1.5555);}
      else if (keyNoteCad == '/Eb') {
        plays('#Bb4', 2000, 0.1); plays('#F4', 2000, 0.11); plays('#Bb5', 2000, 0.111); plays('#Db5', 2000, 0.1111);keySig(6, true);
        plays('#C4', 2000, 1.54); plays('#G4', 2000, 1.55); plays('#C5', 2000, 1.555); plays('#E5', 2000, 1.5555);}
      else if (keyNoteCad == '/E') {
        plays('#B4', 2000, 0.1); plays('#Gb4', 2000, 0.11); plays('#B5', 2000, 0.111); plays('#D5', 2000, 0.1111);keySig(1, false);
        plays('#Db4', 2000, 1.54); plays('#Ab4', 2000, 1.55); plays('#Db5', 2000, 1.555); plays('#F5', 2000, 1.5555);}
      else if (keyNoteCad == '/F') {
        plays('#C4', 2000, 0.1); plays('#G4', 2000, 0.11); plays('#C5', 2000, 0.111); plays('#Eb5', 2000, 0.1111);keySig(4, true);
        plays('#D4', 2000, 1.54); plays('#A5', 2000, 1.55); plays('#D5', 2000, 1.555); plays('#Gb5', 2000, 1.5555);}
      else if (keyNoteCad == '/Gb') {
        plays('#Db4', 2000, 0.1); plays('#Ab4', 2000, 0.11); plays('#Db5', 2000, 0.111); plays('#E5', 2000, 0.1111);keySig(3, false);
        plays('#Eb4', 2000, 1.54); plays('#Bb5', 2000, 1.55); plays('#Eb5', 2000, 1.555); plays('#G5', 2000, 1.5555);}
      else if (keyNoteCad == '/G') {
        plays('#D4', 2000, 0.1); plays('#A5', 2000, 0.11); plays('#D5', 2000, 0.111); plays('#F5', 2000, 0.1111);keySig(2, true);
        plays('#E4', 2000, 1.54); plays('#B5', 2000, 1.55); plays('#E5', 2000, 1.555); plays('#Ab5', 2000, 1.5555);}
      else {
        document.getElementById("grand").style.visibility = "hidden";
        window.alert("Please enter all fields");}
    }
    else {
      document.getElementById("grand").style.visibility = "hidden";
      window.alert("Please enter all fields");
    }
  }

  else if (typeCad == 4) {
    five.style.left = 29.8+"%";
    one.style.left = 31.5+"%";

    if (maj && selected) {
      document.getElementById('one').textContent = 'I';
      document.getElementById('five').textContent = 'V';
      if (keyNoteCad == '/Ab') {
        plays('#Eb3', 2000, 0.1); plays('#Bb4', 2000, 0.11); plays('#Eb4', 2000, 0.111); plays('#G4', 2000, 0.1111);keySig(4, true);
        plays('#Ab2', 2000, 1.54); plays('#C3', 2000, 1.55); plays('#Eb3', 2000, 1.555); plays('#C4', 2000, 1.5555);}
      else if (keyNoteCad == '/A') {
        plays('#E3', 2000, 0.1); plays('#B4', 2000, 0.11); plays('#E4', 2000, 0.111); plays('#Ab4', 2000, 0.1111);keySig(3, false);
        plays('#A3', 2000, 1.54); plays('#Db3', 2000, 1.55); plays('#E3', 2000, 1.555); plays('#Db4', 2000, 1.5555);}
      else if (keyNoteCad == '/Bb') {
        plays('#F3', 2000, 0.1); plays('#C4', 2000, 0.11); plays('#F4', 2000, 0.111); plays('#A5', 2000, 0.1111);keySig(2, true);
        plays('#Bb3', 2000, 1.54); plays('#D3', 2000, 1.55); plays('#F3', 2000, 1.555); plays('#D4', 2000, 1.5555);}
      else if (keyNoteCad == '/B') {
        plays('#Gb3', 2000, 0.1); plays('#Db4', 2000, 0.11); plays('#Gb4', 2000, 0.111); plays('#Bb5', 2000, 0.1111);keySig(5, false);
        plays('#B3', 2000, 1.54); plays('#Eb3', 2000, 1.55); plays('#Gb3', 2000, 1.555); plays('#Eb4', 2000, 1.5555);}
      else if (keyNoteCad == '/C') {
        plays('#G3', 2000, 0.1); plays('#D4', 2000, 0.11); plays('#G4', 2000, 0.111); plays('#B5', 2000, 0.1111);
        plays('#C3', 2000, 1.54); plays('#E3', 2000, 1.55); plays('#G3', 2000, 1.555); plays('#E4', 2000, 1.5555);}
      else if (keyNoteCad == '/Db') {
        plays('#Ab3', 2000, 0.1); plays('#Eb4', 2000, 0.11); plays('#Ab4', 2000, 0.111); plays('#C5', 2000, 0.1111);keySig(5, true);
        plays('#Db3', 2000, 1.54); plays('#F3', 2000, 1.55); plays('#Ab3', 2000, 1.555); plays('#F4', 2000, 1.5555);}
      else if (keyNoteCad == '/D') {
        plays('#A4', 2000, 0.1); plays('#E4', 2000, 0.11); plays('#A5', 2000, 0.111); plays('#Db5', 2000, 0.1111);keySig(2, false);
        plays('#D3', 2000, 1.54); plays('#Gb3', 2000, 1.55); plays('#A4', 2000, 1.555); plays('#Gb4', 2000, 1.5555);}
      else if (keyNoteCad == '/Eb') {
        plays('#Bb4', 2000, 0.1); plays('#F4', 2000, 0.11); plays('#Bb5', 2000, 0.111); plays('#D5', 2000, 0.1111);keySig(3, true);
        plays('#Eb3', 2000, 1.54); plays('#G3', 2000, 1.55); plays('#Bb4', 2000, 1.555); plays('#G4', 2000, 1.5555);}
      else if (keyNoteCad == '/E') {
        plays('#B4', 2000, 0.1); plays('#Gb4', 2000, 0.11); plays('#B5', 2000, 0.111); plays('#Eb5', 2000, 0.1111);keySig(4, false);
        plays('#E3', 2000, 1.54); plays('#Ab3', 2000, 1.55); plays('#B4', 2000, 1.555); plays('#Ab4', 2000, 1.5555);}
      else if (keyNoteCad == '/F') {
        plays('#C4', 2000, 0.1); plays('#G4', 2000, 0.11); plays('#C5', 2000, 0.111); plays('#E5', 2000, 0.1111);keySig(1, true);
        plays('#F3', 2000, 1.54); plays('#A4', 2000, 1.55); plays('#C4', 2000, 1.555); plays('#A5', 2000, 1.5555);}
      else if (keyNoteCad == '/Gb') {
        plays('#Db4', 2000, 0.1); plays('#Ab4', 2000, 0.11); plays('#Db5', 2000, 0.111); plays('#F5', 2000, 0.1111);keySig(6, true);
        plays('#Gb3', 2000, 1.54); plays('#Bb4', 2000, 1.55); plays('#Db4', 2000, 1.555); plays('#Bb5', 2000, 1.5555);}
      else if (keyNoteCad == '/G') {
        plays('#D4', 2000, 0.1); plays('#A5', 2000, 0.11); plays('#D5', 2000, 0.111); plays('#Gb5', 2000, 0.1111);keySig(1, false);
        plays('#G3', 2000, 1.54); plays('#B4', 2000, 1.55); plays('#D4', 2000, 1.555); plays('#B5', 2000, 1.5555);}
      else {
        document.getElementById("grand").style.visibility = "hidden";
        window.alert("Please enter all fields");}
    }

    else if (!maj && selected) {
      document.getElementById('one').textContent = 'i';
      document.getElementById('five').textContent = 'v';
      if (keyNoteCad == '/Ab') {
        plays('#Eb3', 2000, 0.1); plays('#Bb4', 2000, 0.11); plays('#Eb4', 2000, 0.111); plays('#Gb4', 2000, 0.1111);keySig(7, true);
        plays('#Ab2', 2000, 1.54); plays('#B3', 2000, 1.55); plays('#Eb3', 2000, 1.555); plays('#B4', 2000, 1.5555);}
      else if (keyNoteCad == '/A') {
        plays('#E3', 2000, 0.1); plays('#B4', 2000, 0.11); plays('#E4', 2000, 0.111); plays('#G4', 2000, 0.1111);
        plays('#A3', 2000, 1.54); plays('#C3', 2000, 1.55); plays('#E3', 2000, 1.555); plays('#C4', 2000, 1.5555);}
      else if (keyNoteCad == '/Bb') {
        plays('#F3', 2000, 0.1); plays('#C4', 2000, 0.11); plays('#F4', 2000, 0.111); plays('#Ab4', 2000, 0.1111);keySig(5, true);
        plays('#Bb3', 2000, 1.54); plays('#Db3', 2000, 1.55); plays('#F3', 2000, 1.555); plays('#Db4', 2000, 1.5555);}
      else if (keyNoteCad == '/B') {
        plays('#Gb3', 2000, 0.1); plays('#Db4', 2000, 0.11); plays('#Gb4', 2000, 0.111); plays('#A5', 2000, 0.1111);keySig(2, false);
        plays('#B3', 2000, 1.54); plays('#D3', 2000, 1.55); plays('#Gb3', 2000, 1.555); plays('#D4', 2000, 1.5555);}
      else if (keyNoteCad == '/C') {
        plays('#G3', 2000, 0.1); plays('#D4', 2000, 0.11); plays('#G4', 2000, 0.111); plays('#Bb5', 2000, 0.1111);keySig(3, true);
        plays('#C3', 2000, 1.54); plays('#Eb3', 2000, 1.55); plays('#G3', 2000, 1.555); plays('#Eb4', 2000, 1.5555);}
      else if (keyNoteCad == '/Db') {
        plays('#Ab3', 2000, 0.1); plays('#Eb4', 2000, 0.11); plays('#Ab4', 2000, 0.111); plays('#B5', 2000, 0.1111);keySig(4, false);
        plays('#Db3', 2000, 1.54); plays('#E3', 2000, 1.55); plays('#Ab3', 2000, 1.555); plays('#E4', 2000, 1.5555);}
      else if (keyNoteCad == '/D') {
        plays('#A4', 2000, 0.1); plays('#E4', 2000, 0.11); plays('#A5', 2000, 0.111); plays('#C5', 2000, 0.1111);keySig(1, true);
        plays('#D3', 2000, 1.54); plays('#F3', 2000, 1.55); plays('#A4', 2000, 1.555); plays('#F4', 2000, 1.5555);}
      else if (keyNoteCad == '/Eb') {
        plays('#Bb4', 2000, 0.1); plays('#F4', 2000, 0.11); plays('#Bb5', 2000, 0.111); plays('#Db5', 2000, 0.1111);keySig(6, true);
        plays('#Eb3', 2000, 1.54); plays('#Gb3', 2000, 1.55); plays('#Bb4', 2000, 1.555); plays('#Gb4', 2000, 1.5555);}
      else if (keyNoteCad == '/E') {
        plays('#B4', 2000, 0.1); plays('#Gb4', 2000, 0.11); plays('#B5', 2000, 0.111); plays('#D5', 2000, 0.1111);keySig(1, false);
        plays('#E3', 2000, 1.54); plays('#G3', 2000, 1.55); plays('#B4', 2000, 1.555); plays('#G4', 2000, 1.5555);}
      else if (keyNoteCad == '/F') {
        plays('#C4', 2000, 0.1); plays('#G4', 2000, 0.11); plays('#C5', 2000, 0.111); plays('#Eb5', 2000, 0.1111);keySig(4, true);
        plays('#F3', 2000, 1.54); plays('#Ab3', 2000, 1.55); plays('#C4', 2000, 1.555); plays('#Ab4', 2000, 1.5555);}
      else if (keyNoteCad == '/Gb') {
        plays('#Db4', 2000, 0.1); plays('#Ab4', 2000, 0.11); plays('#Db5', 2000, 0.111); plays('#E5', 2000, 0.1111);keySig(3, false);
        plays('#Gb3', 2000, 1.54); plays('#A4', 2000, 1.55); plays('#Db4', 2000, 1.555); plays('#A5', 2000, 1.5555);}
      else if (keyNoteCad == '/G') {
        plays('#D4', 2000, 0.1); plays('#A5', 2000, 0.11); plays('#D5', 2000, 0.111); plays('#F5', 2000, 0.1111);keySig(2, true);
        plays('#G3', 2000, 1.54); plays('#Bb4', 2000, 1.55); plays('#D4', 2000, 1.555); plays('#Bb5', 2000, 1.5555);}
      else {
        document.getElementById("grand").style.visibility = "hidden";
        window.alert("Please enter all fields");}
    }
    else {
      document.getElementById("grand").style.visibility = "hidden";
      window.alert("Please enter all fields");
    }
  }
  resetLedges();
}

let selectionCad = document.getElementById('cadDrop');
var keyNoteCad;
selectionCad.addEventListener('change', () => {
    keyNoteCad = selectionCad.options[selectionCad.selectedIndex].value;
});

// 7th Chords
var keyNoteC7;
var typeNoteC7;
var inversionC7;

let selectionChord7 = document.getElementById('7chordDrop');
selectionChord7.addEventListener('change', () => {
    keyNoteC7 = selectionChord7.options[selectionChord7.selectedIndex].value;
});

function majorC7() {
  typeNoteC7 = 0;
  document.getElementById('MajorC7').style.backgroundColor = 'limegreen';
  document.getElementById('MinorC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('DominantC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('AugmentedC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('DiminishedC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('HalfDiminishedC7').style.backgroundColor = '#f3f0f3';
}
function minorC7() {
  typeNoteC7 = 1;
  document.getElementById('MinorC7').style.backgroundColor = 'limegreen';
  document.getElementById('MajorC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('DominantC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('AugmentedC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('DiminishedC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('HalfDiminishedC7').style.backgroundColor = '#f3f0f3';
}
function dominantC7() {
  typeNoteC7 = 2;
  document.getElementById('DominantC7').style.backgroundColor = 'limegreen';
  document.getElementById('MajorC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('MinorC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('AugmentedC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('DiminishedC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('HalfDiminishedC7').style.backgroundColor = '#f3f0f3';
}
function augmentedC7() {
  typeNoteC7 = 3;
  document.getElementById('AugmentedC7').style.backgroundColor = 'limegreen';
  document.getElementById('MajorC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('MinorC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('DominantC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('DiminishedC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('HalfDiminishedC7').style.backgroundColor = '#f3f0f3';
}
function diminishedC7() {
  typeNoteC7 = 5;
  document.getElementById('DiminishedC7').style.backgroundColor = 'limegreen';
  document.getElementById('MajorC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('MinorC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('DominantC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('AugmentedC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('HalfDiminishedC7').style.backgroundColor = '#f3f0f3';
}
function halfdiminishedC7() {
  typeNoteC7 = 4;
  document.getElementById('HalfDiminishedC7').style.backgroundColor = 'limegreen';
  document.getElementById('MajorC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('MinorC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('DominantC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('AugmentedC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('DiminishedC7').style.backgroundColor = '#f3f0f3';
}

function root7() {
  inversionC7 = 0;
  document.getElementById('RootC7').style.backgroundColor = 'limegreen';
  document.getElementById('1stC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('2ndC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('3rdC7').style.backgroundColor = '#f3f0f3';
}
function first7() {
  inversionC7 = 1;
  document.getElementById('1stC7').style.backgroundColor = 'limegreen';
  document.getElementById('RootC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('2ndC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('3rdC7').style.backgroundColor = '#f3f0f3';
}
function second7() {
  inversionC7 = 2;
  document.getElementById('2ndC7').style.backgroundColor = 'limegreen';
  document.getElementById('RootC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('1stC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('3rdC7').style.backgroundColor = '#f3f0f3';
}
function third7() {
  inversionC7 = 3;
  document.getElementById('3rdC7').style.backgroundColor = 'limegreen';
  document.getElementById('RootC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('1stC7').style.backgroundColor = '#f3f0f3';
  document.getElementById('2ndC7').style.backgroundColor = '#f3f0f3';
}

function nextChord7() {
  playChord7(keyNoteC7, typeNoteC7, inversionC7) 
}

function playChord7(keyNoteC7, typeNoteC7, inversionC7) {
  reset();
  if (typeNoteC == 1) {
    typeHeight = 1;
  }
  Bsh = false;
  Esh = false;
  Csh = false;
  Fsh = false;
  Gsh = false;
  numAccident = 0;
  if (keyNoteC7 == '/Ab' && typeNoteC7 == 0 && inversionC7 == 0) {
    plays('#Ab2', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#Ab2', 1000, 3.2); plays('#C3', 1000, 4.4); plays('#Eb3', 1000, 5.6); plays('#G3', 1000, 6.8);keySig(4, true)}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 0 && inversionC7 == 0) {
    plays('#A3', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#A3', 1000, 3.2); plays('#Db3', 1000, 4.4); plays('#E3', 1000, 5.6); plays('#Ab3', 1000, 6.8);keySig(3, false)}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 0 && inversionC7 == 0) {
    plays('#Bb3', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#Bb3', 1000, 3.2); plays('#D3', 1000, 4.4); plays('#F3', 1000, 5.6); plays('#A4', 1000, 6.8);keySig(2, true)}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 0 && inversionC7 == 0) {
    plays('#B3', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#B3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#Gb3', 1000, 5.6); plays('#Bb4', 1000, 6.8);keySig(5, false)}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 0 && inversionC7 == 0) {
    plays('#C3', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#C3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#G3', 1000, 5.6); plays('#B4', 1000, 6.8);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 0 && inversionC7 == 0) {
    plays('#Db3', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#Db3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#Ab3', 1000, 5.6); plays('#C4', 1000, 6.8);keySig(5, true)}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 0 && inversionC7 == 0) {
    plays('#D3', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#D3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#A4', 1000, 5.6); plays('#Db4', 1000, 6.8);keySig(2, false)}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 0 && inversionC7 == 0) {
    plays('#Eb3', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#Eb3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#Bb4', 1000, 5.6); plays('#D4', 1000, 6.8);keySig(3, true)}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 0 && inversionC7 == 0) {
    plays('#E3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#E3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#B4', 1000, 5.6); plays('#Eb4', 1000, 6.8);keySig(4, false)}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 0 && inversionC7 == 0) {
    plays('#F3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#F3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#C4', 1000, 5.6); plays('#E4', 1000, 6.8);keySig(1, true)}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 0 && inversionC7 == 0) {
    plays('#Gb3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#Gb3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#Db4', 1000, 5.6); plays('#F4', 1000, 6.8);keySig(6, true)}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 0 && inversionC7 == 0) {
    plays('#G3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#Gb4', 1000, 0.1111);plays('#G3', 1000, 3.2); plays('#B4', 1000, 4.4); plays('#D4', 1000, 5.6); plays('#Gb4', 1000, 6.8);keySig(1, false)}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 0 && inversionC7 == 1) {
      plays('#Ab3', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#Ab3', 1000, 6.8); plays('#C3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#G3', 1000, 5.6);keySig(4, true)}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 0 && inversionC7 == 1) {
      plays('#A4', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#A4', 1000, 6.8); plays('#Db3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#Ab3', 1000, 5.6);keySig(3, false)}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 0 && inversionC7 == 1) {
    plays('#Bb4', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#Bb4', 1000, 6.8); plays('#D3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#A4', 1000, 5.6);keySig(2, true)}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 0 && inversionC7 == 1) {
    plays('#B4', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#B4', 1000, 6.8); plays('#Eb3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#Bb4', 1000, 5.6);keySig(5, false)}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 0 && inversionC7 == 1) {
    plays('#C4', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#C4', 1000, 6.8); plays('#E3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#B4', 1000, 5.6);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 0 && inversionC7 == 1) {
    plays('#Db4', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#Db4', 1000, 6.8); plays('#F3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#C4', 1000, 5.6);keySig(5, true)}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 0 && inversionC7 == 1) {
    plays('#D4', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#D4', 1000, 6.8); plays('#Gb3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#Db4', 1000, 5.6);keySig(2, false)}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 0 && inversionC7 == 1) {
    plays('#Eb4', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#Eb4', 1000, 6.8); plays('#G3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#D4', 1000, 5.6);keySig(3, true)}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 0 && inversionC7 == 1) {
    plays('#E4', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#E4', 1000, 6.8); plays('#Ab3', 1000, 3.2); plays('#B4', 1000, 4.4); plays('#Eb4', 1000, 5.6);keySig(4, false)}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 0 && inversionC7 == 1) {
    plays('#F4', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#F4', 1000, 6.8); plays('#A4', 1000, 3.2); plays('#C4', 1000, 4.4); plays('#E4', 1000, 5.6);keySig(1, true)}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 0 && inversionC7 == 1) {
    plays('#Gb4', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#Gb4', 1000, 6.8); plays('#Bb4', 1000, 3.2); plays('#Db4', 1000, 4.4); plays('#F4', 1000, 5.6);keySig(6, true)}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 0 && inversionC7 == 1) {
    plays('#G4', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#Gb4', 1000, 0.1111);plays('#G4', 1000, 6.8); plays('#B4', 1000, 3.2); plays('#D4', 1000, 4.4); plays('#Gb4', 1000, 5.6);keySig(1, false)}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 0 && inversionC7 == 2) {
    plays('#Ab3', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#Ab3', 1000, 5.6); plays('#C4', 1000, 6.8); plays('#Eb3', 1000, 3.2); plays('#G3', 1000, 4.4);keySig(4, true)}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 0 && inversionC7 == 2) {
    plays('#A4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#A4', 1000, 5.6); plays('#Db4', 1000, 6.8); plays('#E3', 1000, 3.2); plays('#Ab3', 1000, 4.4);keySig(3, false)}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 0 && inversionC7 == 2) {
    plays('#Bb4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#Bb4', 1000, 5.6); plays('#D4', 1000, 6.8); plays('#F3', 1000, 3.2); plays('#A4', 1000, 4.4);keySig(2, true)}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 0 && inversionC7 == 2) {
    plays('#B4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#B4', 1000, 5.6); plays('#Eb4', 1000, 6.8); plays('#Gb3', 1000, 3.2); plays('#Bb4', 1000, 4.4);keySig(5, false)}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 0 && inversionC7 == 2) {
    plays('#C4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#C4', 1000, 5.6); plays('#E4', 1000, 6.8); plays('#G3', 1000, 3.2); plays('#B4', 1000, 4.4);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 0 && inversionC7 == 2) {
    plays('#Db4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#Db4', 1000, 5.6); plays('#F4', 1000, 6.8); plays('#Ab3', 1000, 3.2); plays('#C4', 1000, 4.4);keySig(5, true)}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 0 && inversionC7 == 2) {
    plays('#D4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#D4', 1000, 5.6); plays('#Gb4', 1000, 6.8); plays('#A4', 1000, 3.2); plays('#Db4', 1000, 4.4);keySig(2, false)}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 0 && inversionC7 == 2) {
    plays('#Eb4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#Eb4', 1000, 5.6); plays('#G4', 1000, 6.8); plays('#Bb4', 1000, 3.2); plays('#D4', 1000, 4.4);keySig(3, true)}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 0 && inversionC7 == 2) {
    plays('#E4', 1000, 0.1); plays('#Ab4', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#E4', 1000, 5.6); plays('#Ab4', 1000, 6.8); plays('#B4', 1000, 3.2); plays('#Eb4', 1000, 4.4);keySig(4, false)}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 0 && inversionC7 == 2) {
    plays('#F4', 1000, 0.1); plays('#A5', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#F4', 1000, 5.6); plays('#A5', 1000, 6.8); plays('#C4', 1000, 3.2); plays('#E4', 1000, 4.4);keySig(1, true)}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 0 && inversionC7 == 2) {
    plays('#Gb4', 1000, 0.1); plays('#Bb5', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#Gb4', 1000, 5.6); plays('#Bb5', 1000, 6.8); plays('#Db4', 1000, 3.2); plays('#F4', 1000, 4.4);keySig(6, true)}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 0 && inversionC7 == 2) {
    plays('#G4', 1000, 0.1); plays('#B5', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#Gb4', 1000, 0.1111);plays('#G4', 1000, 5.6); plays('#B5', 1000, 6.8); plays('#D4', 1000, 3.2); plays('#Gb4', 1000, 4.4);keySig(1, false)}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 0 && inversionC7 == 3) {
    plays('#Ab3', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#Ab3', 1000, 4.4); plays('#C4', 1000, 5.6); plays('#Eb4', 1000, 6.8); plays('#G3', 1000, 3.2);keySig(4, true)}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 0 && inversionC7 == 3) {
    plays('#A4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#E4', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#A4', 1000, 4.4); plays('#Db4', 1000, 5.6); plays('#E4', 1000, 6.8); plays('#Ab3', 1000, 3.2);keySig(3, false)}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 0 && inversionC7 == 3) {
    plays('#Bb4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#F4', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#Bb4', 1000, 4.4); plays('#D4', 1000, 5.6); plays('#F4', 1000, 6.8); plays('#A4', 1000, 3.2);keySig(2, true)}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 0 && inversionC7 == 3) {
    plays('#B4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#Gb4', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#B4', 1000, 4.4); plays('#Eb4', 1000, 5.6); plays('#Gb4', 1000, 6.8); plays('#Bb4', 1000, 3.2);keySig(5, false)}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 0 && inversionC7 == 3) {
    plays('#C4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#G4', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#C4', 1000, 4.4); plays('#E4', 1000, 5.6); plays('#G4', 1000, 6.8); plays('#B4', 1000, 3.2);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 0 && inversionC7 == 3) {
    plays('#Db4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#Ab4', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#Db4', 1000, 4.4); plays('#F4', 1000, 5.6); plays('#Ab4', 1000, 6.8); plays('#C4', 1000, 3.2);keySig(5, true)}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 0 && inversionC7 == 3) {
    plays('#D4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#A5', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#D4', 1000, 4.4); plays('#Gb4', 1000, 5.6); plays('#A5', 1000, 6.8); plays('#Db4', 1000, 3.2);keySig(2, false)}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 0 && inversionC7 == 3) {
    plays('#Eb4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#Bb5', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#Eb4', 1000, 4.4); plays('#G4', 1000, 5.6); plays('#Bb5', 1000, 6.8); plays('#D4', 1000, 3.2);keySig(3, true)}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 0 && inversionC7 == 3) {
    plays('#E4', 1000, 0.1); plays('#Ab4', 1000, 0.11); plays('#B5', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#E4', 1000, 4.4); plays('#Ab4', 1000, 5.6); plays('#B5', 1000, 6.8); plays('#Eb4', 1000, 3.2);keySig(4, false)}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 0 && inversionC7 == 3) {
    plays('#F4', 1000, 0.1); plays('#A5', 1000, 0.11); plays('#C5', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#F4', 1000, 4.4); plays('#A5', 1000, 5.6); plays('#C5', 1000, 6.8); plays('#E4', 1000, 3.2);keySig(1, true)}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 0 && inversionC7 == 3) {
    plays('#Gb4', 1000, 0.1); plays('#Bb5', 1000, 0.11); plays('#Db5', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#Gb4', 1000, 4.4); plays('#Bb5', 1000, 5.6); plays('#Db5', 1000, 6.8); plays('#F4', 1000, 3.2);keySig(6, true)}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 0 && inversionC7 == 3) {
    plays('#G4', 1000, 0.1); plays('#B5', 1000, 0.11); plays('#D5', 1000, 0.111); plays('#Gb4', 1000, 0.1111);plays('#G4', 1000, 4.4); plays('#B5', 1000, 5.6); plays('#D5', 1000, 6.8); plays('#Gb4', 1000, 3.2);keySig(1, false)}  
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 1 && inversionC7 == 0) {
    plays('#Ab2', 1000, 0.1); plays('#B3', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab2', 1000, 3.2); plays('#B3', 1000, 4.4); plays('#Eb3', 1000, 5.6); plays('#Gb3', 1000, 6.8);keySig(7, true);}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 1 && inversionC7 == 0) {
    plays('#A3', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A3', 1000, 3.2); plays('#C3', 1000, 4.4); plays('#E3', 1000, 5.6); plays('#G3', 1000, 6.8);}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 1 && inversionC7 == 0) {
    plays('#Bb3', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb3', 1000, 3.2); plays('#Db3', 1000, 4.4); plays('#F3', 1000, 5.6); plays('#Ab3', 1000, 6.8);keySig(5, true);}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 1 && inversionC7 == 0) {
    plays('#B3', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B3', 1000, 3.2); plays('#D3', 1000, 4.4); plays('#Gb3', 1000, 5.6); plays('#A4', 1000, 6.8);keySig(2, false);}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 1 && inversionC7 == 0) {
    plays('#C3', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#G3', 1000, 5.6); plays('#Bb4', 1000, 6.8);keySig(3, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 1 && inversionC7 == 0) {
    plays('#Db3', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#Ab3', 1000, 5.6); plays('#B4', 1000, 6.8);keySig(4, false);}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 1 && inversionC7 == 0) {
    plays('#D3', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#A4', 1000, 5.6); plays('#C4', 1000, 6.8);keySig(1, true);}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 1 && inversionC7 == 0) {
    plays('#Eb3', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#Bb4', 1000, 5.6); plays('#Db4', 1000, 6.8);keySig(6, true);}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 1 && inversionC7 == 0) {
    plays('#E3', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#B4', 1000, 5.6); plays('#D4', 1000, 6.8);keySig(1, false);}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 1 && inversionC7 == 0) {
    plays('#F3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#C4', 1000, 5.6); plays('#Eb4', 1000, 6.8);keySig(4, true);}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 1 && inversionC7 == 0) {
    plays('#Gb3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#Db4', 1000, 5.6); plays('#E4', 1000, 6.8);keySig(3, false);}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 1 && inversionC7 == 0) {
    plays('#G3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#D4', 1000, 5.6); plays('#F4', 1000, 6.8);keySig(2, true);}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 1 && inversionC7 == 1) {
      plays('#Ab3', 1000, 0.1); plays('#B3', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab3', 1000, 6.8); plays('#B3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#Gb3', 1000, 5.6);keySig(7, true);}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 1 && inversionC7 == 1) {
      plays('#A4', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A4', 1000, 6.8); plays('#C3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#G3', 1000, 5.6);}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 1 && inversionC7 == 1) {
    plays('#Bb4', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb4', 1000, 6.8); plays('#Db3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#Ab3', 1000, 5.6);keySig(5, true);}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 1 && inversionC7 == 1) {
    plays('#B4', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B4', 1000, 6.8); plays('#D3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#A4', 1000, 5.6);keySig(2, false);}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 1 && inversionC7 == 1) {
    plays('#C4', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C4', 1000, 6.8); plays('#Eb3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#Bb4', 1000, 5.6);keySig(3, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 1 && inversionC7 == 1) {
    plays('#Db4', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db4', 1000, 6.8); plays('#E3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#B4', 1000, 5.6);keySig(4, false);}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 1 && inversionC7 == 1) {
    plays('#D4', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D4', 1000, 6.8); plays('#F3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#C4', 1000, 5.6);keySig(1, true);}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 1 && inversionC7 == 1) {
    plays('#Eb4', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb4', 1000, 6.8); plays('#Gb3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#Db4', 1000, 5.6);keySig(6, true);}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 1 && inversionC7 == 1) {
    plays('#E4', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E4', 1000, 6.8); plays('#G3', 1000, 3.2); plays('#B4', 1000, 4.4); plays('#D4', 1000, 5.6);keySig(1, false);}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 1 && inversionC7 == 1) {
    plays('#F4', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F4', 1000, 6.8); plays('#Ab3', 1000, 3.2); plays('#C4', 1000, 4.4); plays('#Eb4', 1000, 5.6);keySig(4, true);}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 1 && inversionC7 == 1) {
    plays('#Gb4', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb4', 1000, 6.8); plays('#A4', 1000, 3.2); plays('#Db4', 1000, 4.4); plays('#E4', 1000, 5.6);keySig(3, false);}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 1 && inversionC7 == 1) {
    plays('#G4', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G4', 1000, 6.8); plays('#Bb4', 1000, 3.2); plays('#D4', 1000, 4.4); plays('#F4', 1000, 5.6);keySig(2, true);}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 1 && inversionC7 == 2) {
    plays('#Ab3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab3', 1000, 5.6); plays('#B4', 1000, 6.8); plays('#Eb3', 1000, 3.2); plays('#Gb3', 1000, 4.4);keySig(7, true);}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 1 && inversionC7 == 2) {
    plays('#A4', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A4', 1000, 5.6); plays('#C4', 1000, 6.8); plays('#E3', 1000, 3.2); plays('#G3', 1000, 4.4);}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 1 && inversionC7 == 2) {
    plays('#Bb4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb4', 1000, 5.6); plays('#Db4', 1000, 6.8); plays('#F3', 1000, 3.2); plays('#Ab3', 1000, 4.4);keySig(5, true);}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 1 && inversionC7 == 2) {
    plays('#B4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B4', 1000, 5.6); plays('#D4', 1000, 6.8); plays('#Gb3', 1000, 3.2); plays('#A4', 1000, 4.4);keySig(2, false);}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 1 && inversionC7 == 2) {
    plays('#C4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C4', 1000, 5.6); plays('#Eb4', 1000, 6.8); plays('#G3', 1000, 3.2); plays('#Bb4', 1000, 4.4);keySig(3, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 1 && inversionC7 == 2) {
    plays('#Db4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db4', 1000, 5.6); plays('#E4', 1000, 6.8); plays('#Ab3', 1000, 3.2); plays('#B4', 1000, 4.4);keySig(4, false);}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 1 && inversionC7 == 2) {
    plays('#D4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D4', 1000, 5.6); plays('#F4', 1000, 6.8); plays('#A4', 1000, 3.2); plays('#C4', 1000, 4.4);keySig(1, true);}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 1 && inversionC7 == 2) {
    plays('#Eb4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb4', 1000, 5.6); plays('#Gb4', 1000, 6.8); plays('#Bb4', 1000, 3.2); plays('#Db4', 1000, 4.4);keySig(6, true);}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 1 && inversionC7 == 2) {
    plays('#E4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E4', 1000, 5.6); plays('#G4', 1000, 6.8); plays('#B4', 1000, 3.2); plays('#D4', 1000, 4.4);keySig(1, false);}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 1 && inversionC7 == 2) {
    plays('#F4', 1000, 0.1); plays('#Ab4', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F4', 1000, 5.6); plays('#Ab4', 1000, 6.8); plays('#C4', 1000, 3.2); plays('#Eb4', 1000, 4.4);keySig(4, true);}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 1 && inversionC7 == 2) {
    plays('#Gb4', 1000, 0.1); plays('#A5', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb4', 1000, 5.6); plays('#A5', 1000, 6.8); plays('#Db4', 1000, 3.2); plays('#E4', 1000, 4.4);keySig(3, false);}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 1 && inversionC7 == 2) {
    plays('#G4', 1000, 0.1); plays('#Bb5', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G4', 1000, 5.6); plays('#Bb5', 1000, 6.8); plays('#D4', 1000, 3.2); plays('#F4', 1000, 4.4);keySig(2, true);}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 1 && inversionC7 == 3) {
    plays('#Ab3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab3', 1000, 4.4); plays('#B4', 1000, 5.6); plays('#Eb4', 1000, 6.8); plays('#Gb3', 1000, 3.2);keySig(7, true);}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 1 && inversionC7 == 3) {
    plays('#A4', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#E4', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A4', 1000, 4.4); plays('#C4', 1000, 5.6); plays('#E4', 1000, 6.8); plays('#G3', 1000, 3.2);}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 1 && inversionC7 == 3) {
    plays('#Bb4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#F4', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb4', 1000, 4.4); plays('#Db4', 1000, 5.6); plays('#F4', 1000, 6.8); plays('#Ab3', 1000, 3.2);keySig(5, true);}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 1 && inversionC7 == 3) {
    plays('#B4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#Gb4', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B4', 1000, 4.4); plays('#D4', 1000, 5.6); plays('#Gb4', 1000, 6.8); plays('#A4', 1000, 3.2);keySig(2, false);}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 1 && inversionC7 == 3) {
    plays('#C4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#G4', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C4', 1000, 4.4); plays('#Eb4', 1000, 5.6); plays('#G4', 1000, 6.8); plays('#Bb4', 1000, 3.2); keySig(3, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 1 && inversionC7 == 3) {
    plays('#Db4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#Ab4', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db4', 1000, 4.4); plays('#E4', 1000, 5.6); plays('#Ab4', 1000, 6.8); plays('#B4', 1000, 3.2);keySig(4, false);}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 1 && inversionC7 == 3) {
    plays('#D4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#A5', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D4', 1000, 4.4); plays('#F4', 1000, 5.6); plays('#A5', 1000, 6.8); plays('#C4', 1000, 3.2);keySig(1, true);}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 1 && inversionC7 == 3) {
    plays('#Eb4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#Bb5', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb4', 1000, 4.4); plays('#Gb4', 1000, 5.6); plays('#Bb5', 1000, 6.8); plays('#Db4', 1000, 3.2);keySig(6, true);}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 1 && inversionC7 == 3) {
    plays('#E4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#B5', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E4', 1000, 4.4); plays('#G4', 1000, 5.6); plays('#B5', 1000, 6.8); plays('#D4', 1000, 3.2);keySig(1, false);}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 1 && inversionC7 == 3) {
    plays('#F4', 1000, 0.1); plays('#Ab4', 1000, 0.11); plays('#C5', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F4', 1000, 4.4); plays('#Ab4', 1000, 5.6); plays('#C5', 1000, 6.8); plays('#Eb4', 1000, 3.2);keySig(4, true);}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 1 && inversionC7 == 3) {
    plays('#Gb4', 1000, 0.1); plays('#A5', 1000, 0.11); plays('#Db5', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb4', 1000, 4.4); plays('#A5', 1000, 5.6); plays('#Db5', 1000, 6.8); plays('#E4', 1000, 3.2);keySig(3, false);}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 1 && inversionC7 == 3) {
    plays('#G4', 1000, 0.1); plays('#Bb5', 1000, 0.11); plays('#D5', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G4', 1000, 4.4); plays('#Bb5', 1000, 5.6); plays('#D5', 1000, 6.8); plays('#F4', 1000, 3.2);keySig(2, true);}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 2 && inversionC7 == 0) {
    plays('#Ab2', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab2', 1000, 3.2); plays('#C3', 1000, 4.4); plays('#Eb3', 1000, 5.6); plays('#Gb3', 1000, 6.8);keySig(5, true);}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 2 && inversionC7 == 0) {
    plays('#A3', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A3', 1000, 3.2); plays('#Db3', 1000, 4.4); plays('#E3', 1000, 5.6); plays('#G3', 1000, 6.8);keySig(2, false);}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 2 && inversionC7 == 0) {
    plays('#Bb3', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb3', 1000, 3.2); plays('#D3', 1000, 4.4); plays('#F3', 1000, 5.6); plays('#Ab3', 1000, 6.8);keySig(3, true);}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 2 && inversionC7 == 0) {
    plays('#B3', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#Gb3', 1000, 5.6); plays('#A4', 1000, 6.8);keySig(4, false);}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 2 && inversionC7 == 0) {
    plays('#C3', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#G3', 1000, 5.6); plays('#Bb4', 1000, 6.8);keySig(1, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 2 && inversionC7 == 0) {
    plays('#Db3', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#Ab3', 1000, 5.6); plays('#B4', 1000, 6.8);keySig(6, true);}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 2 && inversionC7 == 0) {
    plays('#D3', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#A4', 1000, 5.6); plays('#C4', 1000, 6.8);keySig(1, false);}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 2 && inversionC7 == 0) {
    plays('#Eb3', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#Bb4', 1000, 5.6); plays('#Db4', 1000, 6.8);keySig(4, true);}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 2 && inversionC7 == 0) {
    plays('#E3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#B4', 1000, 5.6); plays('#D4', 1000, 6.8);keySig(3, false);}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 2 && inversionC7 == 0) {
    plays('#F3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#C4', 1000, 5.6); plays('#Eb4', 1000, 6.8);keySig(2, true)}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 2 && inversionC7 == 0) {
    plays('#Gb3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#Db4', 1000, 5.6); plays('#E4', 1000, 6.8);keySig(5, false);}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 2 && inversionC7 == 0) {
    plays('#G3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G3', 1000, 3.2); plays('#B4', 1000, 4.4); plays('#D4', 1000, 5.6); plays('#F4', 1000, 6.8);}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 2 && inversionC7 == 1) {
      plays('#Ab3', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab3', 1000, 6.8); plays('#C3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#Gb3', 1000, 5.6);keySig(5, true)}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 2 && inversionC7 == 1) {
      plays('#A4', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A4', 1000, 6.8); plays('#Db3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#G3', 1000, 5.6);keySig(2, false)}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 2 && inversionC7 == 1) {
    plays('#Bb4', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb4', 1000, 6.8); plays('#D3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#Ab3', 1000, 5.6);keySig(3, true)}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 2 && inversionC7 == 1) {
    plays('#B4', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B4', 1000, 6.8); plays('#Eb3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#A4', 1000, 5.6);keySig(4, false)}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 2 && inversionC7 == 1) {
    plays('#C4', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C4', 1000, 6.8); plays('#E3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#Bb4', 1000, 5.6);keySig(1, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 2 && inversionC7 == 1) {
    plays('#Db4', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db4', 1000, 6.8); plays('#F3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#B4', 1000, 5.6);keySig(6, true)}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 2 && inversionC7 == 1) {
    plays('#D4', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D4', 1000, 6.8); plays('#Gb3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#C4', 1000, 5.6);keySig(1, false)}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 2 && inversionC7 == 1) {
    plays('#Eb4', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb4', 1000, 6.8); plays('#G3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#Db4', 1000, 5.6);keySig(4, true)}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 2 && inversionC7 == 1) {
    plays('#E4', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E4', 1000, 6.8); plays('#Ab3', 1000, 3.2); plays('#B4', 1000, 4.4); plays('#D4', 1000, 5.6);keySig(3, false)}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 2 && inversionC7 == 1) {
    plays('#F4', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F4', 1000, 6.8); plays('#A4', 1000, 3.2); plays('#C4', 1000, 4.4); plays('#Eb4', 1000, 5.6);keySig(2, true)}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 2 && inversionC7 == 1) {
    plays('#Gb4', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb4', 1000, 6.8); plays('#Bb4', 1000, 3.2); plays('#Db4', 1000, 4.4); plays('#E4', 1000, 5.6);keySig(5, false);}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 2 && inversionC7 == 1) {
    plays('#G4', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G4', 1000, 6.8); plays('#B4', 1000, 3.2); plays('#D4', 1000, 4.4); plays('#F4', 1000, 5.6);}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 2 && inversionC7 == 2) {
    plays('#Ab3', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab3', 1000, 5.6); plays('#C4', 1000, 6.8); plays('#Eb3', 1000, 3.2); plays('#Gb3', 1000, 4.4);keySig(5, true)}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 2 && inversionC7 == 2) {
    plays('#A4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A4', 1000, 5.6); plays('#Db4', 1000, 6.8); plays('#E3', 1000, 3.2); plays('#G3', 1000, 4.4);keySig(2, false)}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 2 && inversionC7 == 2) {
    plays('#Bb4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb4', 1000, 5.6); plays('#D4', 1000, 6.8); plays('#F3', 1000, 3.2); plays('#Ab3', 1000, 4.4);keySig(3, true)}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 2 && inversionC7 == 2) {
    plays('#B4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B4', 1000, 5.6); plays('#Eb4', 1000, 6.8); plays('#Gb3', 1000, 3.2); plays('#A4', 1000, 4.4);keySig(4, false)}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 2 && inversionC7 == 2) {
    plays('#C4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C4', 1000, 5.6); plays('#E4', 1000, 6.8); plays('#G3', 1000, 3.2); plays('#Bb4', 1000, 4.4);keySig(1, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 2 && inversionC7 == 2) {
    plays('#Db4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db4', 1000, 5.6); plays('#F4', 1000, 6.8); plays('#Ab3', 1000, 3.2); plays('#B4', 1000, 4.4);keySig(6, true)}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 2 && inversionC7 == 2) {
    plays('#D4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D4', 1000, 5.6); plays('#Gb4', 1000, 6.8); plays('#A4', 1000, 3.2); plays('#C4', 1000, 4.4);keySig(1, false)}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 2 && inversionC7 == 2) {
    plays('#Eb4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb4', 1000, 5.6); plays('#G4', 1000, 6.8); plays('#Bb4', 1000, 3.2); plays('#Db4', 1000, 4.4);keySig(4, true)}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 2 && inversionC7 == 2) {
    plays('#E4', 1000, 0.1); plays('#Ab4', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E4', 1000, 5.6); plays('#Ab4', 1000, 6.8); plays('#B4', 1000, 3.2); plays('#D4', 1000, 4.4);keySig(3, false)}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 2 && inversionC7 == 2) {
    plays('#F4', 1000, 0.1); plays('#A5', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F4', 1000, 5.6); plays('#A5', 1000, 6.8); plays('#C4', 1000, 3.2); plays('#Eb4', 1000, 4.4);keySig(2, true)}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 2 && inversionC7 == 2) {
    plays('#Gb4', 1000, 0.1); plays('#Bb5', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb4', 1000, 5.6); plays('#Bb5', 1000, 6.8); plays('#Db4', 1000, 3.2); plays('#E4', 1000, 4.4);keySig(5, false);}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 2 && inversionC7 == 2) {
    plays('#G4', 1000, 0.1); plays('#B5', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G4', 1000, 5.6); plays('#B5', 1000, 6.8); plays('#D4', 1000, 3.2); plays('#F4', 1000, 4.4);}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 2 && inversionC7 == 3) {
    plays('#Ab3', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab3', 1000, 4.4); plays('#C4', 1000, 5.6); plays('#Eb4', 1000, 6.8); plays('#Gb3', 1000, 3.2);keySig(5, true)}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 2 && inversionC7 == 3) {
    plays('#A4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#E4', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A4', 1000, 4.4); plays('#Db4', 1000, 5.6); plays('#E4', 1000, 6.8); plays('#G3', 1000, 3.2);keySig(2, false)}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 2 && inversionC7 == 3) {
    plays('#Bb4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#F4', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb4', 1000, 4.4); plays('#D4', 1000, 5.6); plays('#F4', 1000, 6.8); plays('#Ab3', 1000, 3.2);keySig(3, true)}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 2 && inversionC7 == 3) {
    plays('#B4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#Gb4', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B4', 1000, 4.4); plays('#Eb4', 1000, 5.6); plays('#Gb4', 1000, 6.8); plays('#A4', 1000, 3.2);keySig(4, false)}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 2 && inversionC7 == 3) {
    plays('#C4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#G4', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C4', 1000, 4.4); plays('#E4', 1000, 5.6); plays('#G4', 1000, 6.8); plays('#Bb4', 1000, 3.2);keySig(1, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 2 && inversionC7 == 3) {
    plays('#Db4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#Ab4', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db4', 1000, 4.4); plays('#F4', 1000, 5.6); plays('#Ab4', 1000, 6.8); plays('#B4', 1000, 3.2);keySig(6, true)}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 2 && inversionC7 == 3) {
    plays('#D4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#A5', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D4', 1000, 4.4); plays('#Gb4', 1000, 5.6); plays('#A5', 1000, 6.8); plays('#C4', 1000, 3.2);keySig(1, false)}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 2 && inversionC7 == 3) {
    plays('#Eb4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#Bb5', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb4', 1000, 4.4); plays('#G4', 1000, 5.6); plays('#Bb5', 1000, 6.8); plays('#Db4', 1000, 3.2);keySig(4, true)}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 2 && inversionC7 == 3) {
    plays('#E4', 1000, 0.1); plays('#Ab4', 1000, 0.11); plays('#B5', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E4', 1000, 4.4); plays('#Ab4', 1000, 5.6); plays('#B5', 1000, 6.8); plays('#D4', 1000, 3.2);keySig(3, false)}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 2 && inversionC7 == 3) {
    plays('#F4', 1000, 0.1); plays('#A5', 1000, 0.11); plays('#C5', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F4', 1000, 4.4); plays('#A5', 1000, 5.6); plays('#C5', 1000, 6.8); plays('#Eb4', 1000, 3.2);keySig(2, true)}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 2 && inversionC7 == 3) {
    plays('#Gb4', 1000, 0.1); plays('#Bb5', 1000, 0.11); plays('#Db5', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb4', 1000, 4.4); plays('#Bb5', 1000, 5.6); plays('#Db5', 1000, 6.8); plays('#E4', 1000, 3.2);keySig(5, false)}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 2 && inversionC7 == 3) {
    plays('#G4', 1000, 0.1); plays('#B5', 1000, 0.11); plays('#D5', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G4', 1000, 4.4); plays('#B5', 1000, 5.6); plays('#D5', 1000, 6.8); plays('#F4', 1000, 3.2);}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 3 && inversionC7 == 0) {
    plays('#Ab2', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab2', 1000, 3.2); plays('#C3', 1000, 4.4); plays('#E3', 1000, 5.6); plays('#Gb3', 1000, 6.8);keySig(4, true)}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 3 && inversionC7 == 0) {
    plays('#A3', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A3', 1000, 3.2); plays('#Db3', 1000, 4.4); plays('#F3', 1000, 5.6); plays('#G3', 1000, 6.8);keySig(3, false)}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 3 && inversionC7 == 0) {
    plays('#Bb3', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb3', 1000, 3.2); plays('#D3', 1000, 4.4); plays('#Gb3', 1000, 5.6); plays('#Ab3', 1000, 6.8);keySig(2, true)}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 3 && inversionC7 == 0) {
    plays('#B3', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#G3', 1000, 5.6); plays('#A4', 1000, 6.8);keySig(5, false)}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 3 && inversionC7 == 0) {
    plays('#C3', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#Ab3', 1000, 5.6); plays('#Bb4', 1000, 6.8);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 3 && inversionC7 == 0) {
    plays('#Db3', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#A4', 1000, 5.6); plays('#B4', 1000, 6.8);keySig(5, true)}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 3 && inversionC7 == 0) {
    plays('#D3', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#Bb4', 1000, 5.6); plays('#C4', 1000, 6.8);keySig(2, false)}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 3 && inversionC7 == 0) {
    plays('#Eb3', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#B4', 1000, 5.6); plays('#Db4', 1000, 6.8);keySig(3, true)}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 3 && inversionC7 == 0) {
    plays('#E3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#C4', 1000, 5.6); plays('#D4', 1000, 6.8);keySig(4, false)}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 3 && inversionC7 == 0) {
    plays('#F3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#Db4', 1000, 5.6); plays('#Eb4', 1000, 6.8);keySig(1, true)}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 3 && inversionC7 == 0) {
    plays('#Gb3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#D4', 1000, 5.6); plays('#E4', 1000, 6.8);keySig(6, true)}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 3 && inversionC7 == 0) {
    plays('#G3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G3', 1000, 3.2); plays('#B4', 1000, 4.4); plays('#Eb4', 1000, 5.6); plays('#F4', 1000, 6.8);keySig(1, false)}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 3 && inversionC7 == 1) {
      plays('#Ab3', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab3', 1000, 6.8); plays('#C3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#Gb3', 1000, 5.6);keySig(4, true)}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 3 && inversionC7 == 1) {
      plays('#A4', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A4', 1000, 6.8); plays('#Db3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#G3', 1000, 5.6);keySig(3, false)}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 3 && inversionC7 == 1) {
    plays('#Bb4', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb4', 1000, 6.8); plays('#D3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#Ab3', 1000, 5.6);keySig(2, true)}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 3 && inversionC7 == 1) {
    plays('#B4', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B4', 1000, 6.8); plays('#Eb3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#A4', 1000, 5.6);keySig(5, false)}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 3 && inversionC7 == 1) {
    plays('#C4', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C4', 1000, 6.8); plays('#E3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#Bb4', 1000, 5.6);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 3 && inversionC7 == 1) {
    plays('#Db4', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db4', 1000, 6.8); plays('#F3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#B4', 1000, 5.6);keySig(5, true)}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 3 && inversionC7 == 1) {
    plays('#D4', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D4', 1000, 6.8); plays('#Gb3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#C4', 1000, 5.6);keySig(2, false)}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 3 && inversionC7 == 1) {
    plays('#Eb4', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb4', 1000, 6.8); plays('#G3', 1000, 3.2); plays('#B4', 1000, 4.4); plays('#Db4', 1000, 5.6);keySig(3, true)}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 3 && inversionC7 == 1) {
    plays('#E4', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E4', 1000, 6.8); plays('#Ab3', 1000, 3.2); plays('#C4', 1000, 4.4); plays('#D4', 1000, 5.6);keySig(4, false)}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 3 && inversionC7 == 1) {
    plays('#F4', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F4', 1000, 6.8); plays('#A4', 1000, 3.2); plays('#Db4', 1000, 4.4); plays('#Eb4', 1000, 5.6);keySig(1, true)}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 3 && inversionC7 == 1) {
    plays('#Gb4', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb4', 1000, 6.8); plays('#Bb4', 1000, 3.2); plays('#D4', 1000, 4.4); plays('#E4', 1000, 5.6);keySig(6, true)}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 3 && inversionC7 == 1) {
    plays('#G4', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G4', 1000, 6.8); plays('#B4', 1000, 3.2); plays('#Eb4', 1000, 4.4); plays('#F4', 1000, 5.6);keySig(1, false)}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 3 && inversionC7 == 2) {
    plays('#Ab3', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab3', 1000, 5.6); plays('#C4', 1000, 6.8); plays('#E3', 1000, 3.2); plays('#Gb3', 1000, 4.4);keySig(4, true)}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 3 && inversionC7 == 2) {
    plays('#A4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A4', 1000, 5.6); plays('#Db4', 1000, 6.8); plays('#F3', 1000, 3.2); plays('#G3', 1000, 4.4);keySig(3, false)}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 3 && inversionC7 == 2) {
    plays('#Bb4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb4', 1000, 5.6); plays('#D4', 1000, 6.8); plays('#Gb3', 1000, 3.2); plays('#Ab3', 1000, 4.4);keySig(2, true)}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 3 && inversionC7 == 2) {
    plays('#B4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B4', 1000, 5.6); plays('#Eb4', 1000, 6.8); plays('#G3', 1000, 3.2); plays('#A4', 1000, 4.4);keySig(5, false)}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 3 && inversionC7 == 2) {
    plays('#C4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C4', 1000, 5.6); plays('#E4', 1000, 6.8); plays('#Ab3', 1000, 3.2); plays('#Bb4', 1000, 4.4);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 3 && inversionC7 == 2) {
    plays('#Db4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db4', 1000, 5.6); plays('#F4', 1000, 6.8); plays('#A4', 1000, 3.2); plays('#B4', 1000, 4.4);keySig(5, true)}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 3 && inversionC7 == 2) {
    plays('#D4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D4', 1000, 5.6); plays('#Gb4', 1000, 6.8); plays('#Bb4', 1000, 3.2); plays('#C4', 1000, 4.4);keySig(2, false)}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 3 && inversionC7 == 2) {
    plays('#Eb4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb4', 1000, 5.6); plays('#G4', 1000, 6.8); plays('#B4', 1000, 3.2); plays('#Db4', 1000, 4.4);keySig(3, true)}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 3 && inversionC7 == 2) {
    plays('#E4', 1000, 0.1); plays('#Ab4', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E4', 1000, 5.6); plays('#Ab4', 1000, 6.8); plays('#C4', 1000, 3.2); plays('#D4', 1000, 4.4);keySig(4, false)}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 3 && inversionC7 == 2) {
    plays('#F4', 1000, 0.1); plays('#A5', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F4', 1000, 5.6); plays('#A5', 1000, 6.8); plays('#Db4', 1000, 3.2); plays('#Eb4', 1000, 4.4);keySig(1, true)}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 3 && inversionC7 == 2) {
    plays('#Gb4', 1000, 0.1); plays('#Bb5', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb4', 1000, 5.6); plays('#Bb5', 1000, 6.8); plays('#D4', 1000, 3.2); plays('#E4', 1000, 4.4);keySig(6, true)}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 3 && inversionC7 == 2) {
    plays('#G4', 1000, 0.1); plays('#B5', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G4', 1000, 5.6); plays('#B5', 1000, 6.8); plays('#Eb4', 1000, 3.2); plays('#F4', 1000, 4.4);keySig(1, false)}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 3 && inversionC7 == 3) {
    plays('#Ab3', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#E4', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab3', 1000, 4.4); plays('#C4', 1000, 5.6); plays('#E4', 1000, 6.8); plays('#Gb3', 1000, 3.2);keySig(4, true)}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 3 && inversionC7 == 3) {
    plays('#A4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#F4', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A4', 1000, 4.4); plays('#Db4', 1000, 5.6); plays('#F4', 1000, 6.8); plays('#G3', 1000, 3.2);keySig(3, false)}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 3 && inversionC7 == 3) {
    plays('#Bb4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#Gb4', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb4', 1000, 4.4); plays('#D4', 1000, 5.6); plays('#Gb4', 1000, 6.8); plays('#Ab3', 1000, 3.2);keySig(2, true)}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 3 && inversionC7 == 3) {
    plays('#B4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#G4', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B4', 1000, 4.4); plays('#Eb4', 1000, 5.6); plays('#G4', 1000, 6.8); plays('#A4', 1000, 3.2);keySig(5, false)}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 3 && inversionC7 == 3) {
    plays('#C4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#Ab4', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C4', 1000, 4.4); plays('#E4', 1000, 5.6); plays('#Ab4', 1000, 6.8); plays('#Bb4', 1000, 3.2);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 3 && inversionC7 == 3) {
    plays('#Db4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#A5', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db4', 1000, 4.4); plays('#F4', 1000, 5.6); plays('#A5', 1000, 6.8); plays('#B4', 1000, 3.2);keySig(5, true)}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 3 && inversionC7 == 3) {
    plays('#D4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#Bb5', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D4', 1000, 4.4); plays('#Gb4', 1000, 5.6); plays('#Bb5', 1000, 6.8); plays('#C4', 1000, 3.2);keySig(2, false)}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 3 && inversionC7 == 3) {
    plays('#Eb4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#B5', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb4', 1000, 4.4); plays('#G4', 1000, 5.6); plays('#B5', 1000, 6.8); plays('#Db4', 1000, 3.2);keySig(3, true)}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 3 && inversionC7 == 3) {
    plays('#E4', 1000, 0.1); plays('#Ab4', 1000, 0.11); plays('#C5', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E4', 1000, 4.4); plays('#Ab4', 1000, 5.6); plays('#C5', 1000, 6.8); plays('#D4', 1000, 3.2);keySig(4, false)}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 3 && inversionC7 == 3) {
    plays('#F4', 1000, 0.1); plays('#A5', 1000, 0.11); plays('#Db5', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F4', 1000, 4.4); plays('#A5', 1000, 5.6); plays('#Db5', 1000, 6.8); plays('#Eb4', 1000, 3.2);keySig(1, true)}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 3 && inversionC7 == 3) {
    plays('#Gb4', 1000, 0.1); plays('#Bb5', 1000, 0.11); plays('#D5', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb4', 1000, 4.4); plays('#Bb5', 1000, 5.6); plays('#D5', 1000, 6.8); plays('#E4', 1000, 3.2);keySig(6, true)}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 3 && inversionC7 == 3) {
    plays('#G4', 1000, 0.1); plays('#B5', 1000, 0.11); plays('#Eb5', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G4', 1000, 4.4); plays('#B5', 1000, 5.6); plays('#Eb5', 1000, 6.8); plays('#F4', 1000, 3.2);keySig(1, false)}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 4 && inversionC7 == 0) {
    plays('#Ab2', 1000, 0.1); plays('#B3', 1000, 0.11); plays('#D3', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab2', 1000, 3.2); plays('#B3', 1000, 4.4); plays('#D3', 1000, 5.6); plays('#Gb3', 1000, 6.8);keySig(7, true);}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 4 && inversionC7 == 0) {
    plays('#A3', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A3', 1000, 3.2); plays('#C3', 1000, 4.4); plays('#Eb3', 1000, 5.6); plays('#G3', 1000, 6.8);}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 4 && inversionC7 == 0) {
    plays('#Bb3', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb3', 1000, 3.2); plays('#Db3', 1000, 4.4); plays('#E3', 1000, 5.6); plays('#Ab3', 1000, 6.8);keySig(5, true);}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 4 && inversionC7 == 0) {
    plays('#B3', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B3', 1000, 3.2); plays('#D3', 1000, 4.4); plays('#F3', 1000, 5.6); plays('#A4', 1000, 6.8);keySig(2, false);}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 4 && inversionC7 == 0) {
    plays('#C3', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#Gb3', 1000, 5.6); plays('#Bb4', 1000, 6.8);keySig(3, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 4 && inversionC7 == 0) {
    plays('#Db3', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#G3', 1000, 5.6); plays('#B4', 1000, 6.8);keySig(4, false);}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 4 && inversionC7 == 0) {
    plays('#D3', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#Ab3', 1000, 5.6); plays('#C4', 1000, 6.8);keySig(1, true);}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 4 && inversionC7 == 0) {
    plays('#Eb3', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#A4', 1000, 5.6); plays('#Db4', 1000, 6.8);keySig(6, true);}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 4 && inversionC7 == 0) {
    plays('#E3', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#Bb4', 1000, 5.6); plays('#D4', 1000, 6.8);keySig(1, false);}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 4 && inversionC7 == 0) {
    plays('#F3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#B4', 1000, 5.6); plays('#Eb4', 1000, 6.8);keySig(4, true);}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 4 && inversionC7 == 0) {
    plays('#Gb3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#C4', 1000, 5.6); plays('#E4', 1000, 6.8);keySig(3, false);}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 4 && inversionC7 == 0) {
    plays('#G3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#Db4', 1000, 5.6); plays('#F4', 1000, 6.8);keySig(2, true);}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 4 && inversionC7 == 1) {
      plays('#Ab3', 1000, 0.1); plays('#B3', 1000, 0.11); plays('#D3', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab3', 1000, 6.8); plays('#B3', 1000, 3.2); plays('#D3', 1000, 4.4); plays('#Gb3', 1000, 5.6);keySig(7, true);}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 4 && inversionC7 == 1) {
      plays('#A4', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A4', 1000, 6.8); plays('#C3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#G3', 1000, 5.6);}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 4 && inversionC7 == 1) {
    plays('#Bb4', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb4', 1000, 6.8); plays('#Db3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#Ab3', 1000, 5.6);keySig(5, true);}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 4 && inversionC7 == 1) {
    plays('#B4', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B4', 1000, 6.8); plays('#D3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#A4', 1000, 5.6);keySig(2, false);}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 4 && inversionC7 == 1) {
    plays('#C4', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C4', 1000, 6.8); plays('#Eb3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#Bb4', 1000, 5.6); keySig(3, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 4 && inversionC7 == 1) {
    plays('#Db4', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db4', 1000, 6.8); plays('#E3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#B4', 1000, 5.6);keySig(4, false);}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 4 && inversionC7 == 1) {
    plays('#D4', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D4', 1000, 6.8); plays('#F3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#C4', 1000, 5.6);keySig(1, true);}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 4 && inversionC7 == 1) {
    plays('#Eb4', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb4', 1000, 6.8); plays('#Gb3', 1000, 3.2
); plays('#A4', 1000, 4.4); plays('#Db4', 1000, 5.6);keySig(6, true);}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 4 && inversionC7 == 1) {
    plays('#E4', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E4', 1000, 6.8); plays('#G3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#D4', 1000, 5.6);keySig(1, false);}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 4 && inversionC7 == 1) {
    plays('#F4', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F4', 1000, 6.8); plays('#Ab3', 1000, 3.2); plays('#B4', 1000, 4.4); plays('#Eb4', 1000, 5.6);keySig(4, true);}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 4 && inversionC7 == 1) {
    plays('#Gb4', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb4', 1000, 6.8); plays('#A4', 1000, 3.2); plays('#C4', 1000, 4.4); plays('#E4', 1000, 5.6);keySig(3, false);}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 4 && inversionC7 == 1) {
    plays('#G4', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G4', 1000, 6.8); plays('#Bb4', 1000, 3.2); plays('#Db4', 1000, 4.4); plays('#F4', 1000, 5.6);keySig(2, true);}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 4 && inversionC7 == 2) {
    plays('#Ab3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#D3', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab3', 1000, 5.6); plays('#B4', 1000, 6.8); plays('#D3', 1000, 3.2); plays('#Gb3', 1000, 4.4);keySig(7, true);}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 4 && inversionC7 == 2) {
    plays('#A4', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A4', 1000, 5.6); plays('#C4', 1000, 6.8); plays('#Eb3', 1000, 3.2); plays('#G3', 1000, 4.4);}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 4 && inversionC7 == 2) {
    plays('#Bb4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb4', 1000, 5.6); plays('#Db4', 1000, 6.8); plays('#E3', 1000, 3.2); plays('#Ab3', 1000, 4.4);keySig(5, true);}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 4 && inversionC7 == 2) {
    plays('#B4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B4', 1000, 5.6); plays('#D4', 1000, 6.8); plays('#F3', 1000, 3.2); plays('#A4', 1000, 4.4);keySig(2, false);}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 4 && inversionC7 == 2) {
    plays('#C4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C4', 1000, 5.6); plays('#Eb4', 1000, 6.8); plays('#Gb3', 1000, 3.2); plays('#Bb4', 1000, 4.4);keySig(3, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 4 && inversionC7 == 2) {
    plays('#Db4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db4', 1000, 5.6); plays('#E4', 1000, 6.8); plays('#G3', 1000, 3.2); plays('#B4', 1000, 4.4);keySig(4, false);}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 4 && inversionC7 == 2) {
    plays('#D4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D4', 1000, 5.6); plays('#F4', 1000, 6.8); plays('#Ab3', 1000, 3.2); plays('#C4', 1000, 4.4);keySig(1, true);}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 4 && inversionC7 == 2) {
    plays('#Eb4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb4', 1000, 5.6); plays('#Gb4', 1000, 6.8); plays('#A4', 1000, 3.2); plays('#Db4', 1000, 4.4);keySig(6, true);}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 4 && inversionC7 == 2) {
    plays('#E4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E4', 1000, 5.6); plays('#G4', 1000, 6.8); plays('#Bb4', 1000, 3.2); plays('#D4', 1000, 4.4);keySig(1, false);}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 4 && inversionC7 == 2) {
    plays('#F4', 1000, 0.1); plays('#Ab4', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F4', 1000, 5.6); plays('#Ab4', 1000, 6.8); plays('#B4', 1000, 3.2); plays('#Eb4', 1000, 4.4);keySig(4, true);}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 4 && inversionC7 == 2) {
    plays('#Gb4', 1000, 0.1); plays('#A5', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb4', 1000, 5.6); plays('#A5', 1000, 6.8); plays('#C4', 1000, 3.2); plays('#E4', 1000, 4.4);keySig(3, false);}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 4 && inversionC7 == 2) {
    plays('#G4', 1000, 0.1); plays('#Bb5', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G4', 1000, 5.6); plays('#Bb5', 1000, 6.8); plays('#Db4', 1000, 3.2); plays('#F4', 1000, 4.4);keySig(2, true);}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 4 && inversionC7 == 3) {
    plays('#Ab3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#Ab3', 1000, 4.4); plays('#B4', 1000, 5.6); plays('#D4', 1000, 6.8); plays('#Gb3', 1000, 3.2);keySig(7, true);}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 4 && inversionC7 == 3) {
    plays('#A4', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#A4', 1000, 4.4); plays('#C4', 1000, 5.6); plays('#Eb4', 1000, 6.8); plays('#G3', 1000, 3.2);}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 4 && inversionC7 == 3) {
    plays('#Bb4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#E4', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#Bb4', 1000, 4.4); plays('#Db4', 1000, 5.6); plays('#E4', 1000, 6.8); plays('#Ab3', 1000, 3.2);keySig(5, true);}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 4 && inversionC7 == 3) {
    plays('#B4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#F4', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#B4', 1000, 4.4); plays('#D4', 1000, 5.6); plays('#F4', 1000, 6.8); plays('#A4', 1000, 3.2);keySig(2, false);}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 4 && inversionC7 == 3) {
    plays('#C4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#Gb4', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#C4', 1000, 4.4); plays('#Eb4', 1000, 5.6); plays('#Gb4', 1000, 6.8); plays('#Bb4', 1000, 3.2);keySig(3, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 4 && inversionC7 == 3) {
    plays('#Db4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#G4', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#Db4', 1000, 4.4); plays('#E4', 1000, 5.6); plays('#G4', 1000, 6.8); plays('#B4', 1000, 3.2);keySig(4, false);}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 4 && inversionC7 == 3) {
    plays('#D4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#Ab4', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#D4', 1000, 4.4); plays('#F4', 1000, 5.6); plays('#Ab4', 1000, 6.8); plays('#C4', 1000, 3.2);keySig(1, true);}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 4 && inversionC7 == 3) {
    plays('#Eb4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#A5', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#Eb4', 1000, 4.4); plays('#Gb4', 1000, 5.6); plays('#A5', 1000, 6.8); plays('#Db4', 1000, 3.2);keySig(6, true);}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 4 && inversionC7 == 3) {
    plays('#E4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#Bb5', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#E4', 1000, 4.4); plays('#G4', 1000, 5.6); plays('#Bb5', 1000, 6.8); plays('#D4', 1000, 3.2);keySig(1, false);}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 4 && inversionC7 == 3) {
    plays('#F4', 1000, 0.1); plays('#Ab4', 1000, 0.11); plays('#B5', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#F4', 1000, 4.4); plays('#Ab4', 1000, 5.6); plays('#B5', 1000, 6.8); plays('#Eb4', 1000, 3.2);keySig(4, true);}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 4 && inversionC7 == 3) {
    plays('#Gb4', 1000, 0.1); plays('#A5', 1000, 0.11); plays('#C5', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#Gb4', 1000, 4.4); plays('#A5', 1000, 5.6); plays('#C5', 1000, 6.8); plays('#E4', 1000, 3.2);keySig(3, false);}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 4 && inversionC7 == 3) {
    plays('#G4', 1000, 0.1); plays('#Bb5', 1000, 0.11); plays('#Db5', 1000, 0.111); plays('#F4', 1000, 0.1111);plays('#G4', 1000, 4.4); plays('#Bb5', 1000, 5.6); plays('#Db5', 1000, 6.8); plays('#F4', 1000, 3.2);keySig(2, true);}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 5 && inversionC7 == 0) {
    plays('#Ab2', 1000, 0.1); plays('#B3', 1000, 0.11); plays('#D3', 1000, 0.111); plays('#F3', 1000, 0.1111);plays('#Ab2', 1000, 3.2); plays('#B3', 1000, 4.4); plays('#D3', 1000, 5.6); plays('#F3', 1000, 6.8);keySig(7, true);}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 5 && inversionC7 == 0) {
    plays('#A3', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#A3', 1000, 3.2); plays('#C3', 1000, 4.4); plays('#Eb3', 1000, 5.6); plays('#Gb3', 1000, 6.8);}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 5 && inversionC7 == 0) {
    plays('#Bb3', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#Bb3', 1000, 3.2); plays('#Db3', 1000, 4.4); plays('#E3', 1000, 5.6); plays('#G3', 1000, 6.8);keySig(5, true);}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 5 && inversionC7 == 0) {
    plays('#B3', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#B3', 1000, 3.2); plays('#D3', 1000, 4.4); plays('#F3', 1000, 5.6); plays('#Ab3', 1000, 6.8);keySig(2, false);}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 5 && inversionC7 == 0) {
    plays('#C3', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#C3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#Gb3', 1000, 5.6); plays('#A4', 1000, 6.8);keySig(3, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 5 && inversionC7 == 0) {
    plays('#Db3', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#Db3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#G3', 1000, 5.6); plays('#Bb4', 1000, 6.8);keySig(4, false);}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 5 && inversionC7 == 0) {
    plays('#D3', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#D3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#Ab3', 1000, 5.6); plays('#B4', 1000, 6.8);keySig(1, true);}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 5 && inversionC7 == 0) {
    plays('#Eb3', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#Eb3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#A4', 1000, 5.6); plays('#C4', 1000, 6.8);keySig(6, true);}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 5 && inversionC7 == 0) {
    plays('#E3', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#E3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#Bb4', 1000, 5.6); plays('#Db4', 1000, 6.8);keySig(1, false);}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 5 && inversionC7 == 0) {
    plays('#F3', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#F3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#B4', 1000, 5.6); plays('#D4', 1000, 6.8);keySig(4, true);}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 5 && inversionC7 == 0) {
    plays('#Gb3', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#Gb3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#C4', 1000, 5.6); plays('#Eb4', 1000, 6.8);keySig(3, false);}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 5 && inversionC7 == 0) {
    plays('#G3', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#G3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#Db4', 1000, 5.6); plays('#E4', 1000, 6.8);keySig(2, true);}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 5 && inversionC7 == 1) {
      plays('#Ab3', 1000, 0.1); plays('#B3', 1000, 0.11); plays('#D3', 1000, 0.111); plays('#F3', 1000, 0.1111);plays('#Ab3', 1000, 6.8); plays('#B3', 1000, 3.2); plays('#D3', 1000, 4.4); plays('#F3', 1000, 5.6);keySig(7, true);}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 5 && inversionC7 == 1) {
      plays('#A4', 1000, 0.1); plays('#C3', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#A4', 1000, 6.8); plays('#C3', 1000, 3.2); plays('#Eb3', 1000, 4.4); plays('#Gb3', 1000, 5.6);}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 5 && inversionC7 == 1) {
    plays('#Bb4', 1000, 0.1); plays('#Db3', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#Bb4', 1000, 6.8); plays('#Db3', 1000, 3.2); plays('#E3', 1000, 4.4); plays('#G3', 1000, 5.6);keySig(5, true);}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 5 && inversionC7 == 1) {
    plays('#B4', 1000, 0.1); plays('#D3', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#B4', 1000, 6.8); plays('#D3', 1000, 3.2); plays('#F3', 1000, 4.4); plays('#Ab3', 1000, 5.6);keySig(2, false);}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 5 && inversionC7 == 1) {
    plays('#C4', 1000, 0.1); plays('#Eb3', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#C4', 1000, 6.8); plays('#Eb3', 1000, 3.2); plays('#Gb3', 1000, 4.4); plays('#A4', 1000, 5.6); keySig(3, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 5 && inversionC7 == 1) {
    plays('#Db4', 1000, 0.1); plays('#E3', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#Db4', 1000, 6.8); plays('#E3', 1000, 3.2); plays('#G3', 1000, 4.4); plays('#Bb4', 1000, 5.6);keySig(4, false);}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 5 && inversionC7 == 1) {
    plays('#D4', 1000, 0.1); plays('#F3', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#D4', 1000, 6.8); plays('#F3', 1000, 3.2); plays('#Ab3', 1000, 4.4); plays('#B4', 1000, 5.6);keySig(1, true);}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 5 && inversionC7 == 1) {
    plays('#Eb4', 1000, 0.1); plays('#Gb3', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#Eb4', 1000, 6.8); plays('#Gb3', 1000, 3.2); plays('#A4', 1000, 4.4); plays('#C4', 1000, 5.6);keySig(6, true);}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 5 && inversionC7 == 1) {
    plays('#E4', 1000, 0.1); plays('#G3', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#E4', 1000, 6.8); plays('#G3', 1000, 3.2); plays('#Bb4', 1000, 4.4); plays('#Db4', 1000, 5.6);keySig(1, false);}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 5 && inversionC7 == 1) {
    plays('#F4', 1000, 0.1); plays('#Ab3', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#F4', 1000, 6.8); plays('#Ab3', 1000, 3.2); plays('#B4', 1000, 4.4); plays('#D4', 1000, 5.6);keySig(4, true);}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 5 && inversionC7 == 1) {
    plays('#Gb4', 1000, 0.1); plays('#A4', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#Gb4', 1000, 6.8); plays('#A4', 1000, 3.2); plays('#C4', 1000, 4.4); plays('#Eb4', 1000, 5.6);keySig(3, false);}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 5 && inversionC7 == 1) {
    plays('#G4', 1000, 0.1); plays('#Bb4', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#G4', 1000, 6.8); plays('#Bb4', 1000, 3.2); plays('#Db4', 1000, 4.4); plays('#E4', 1000, 5.6);keySig(2, true);}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 5 && inversionC7 == 2) {
    plays('#Ab3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#D3', 1000, 0.111); plays('#F3', 1000, 0.1111);plays('#Ab3', 1000, 5.6); plays('#B4', 1000, 6.8); plays('#D3', 1000, 3.2); plays('#F3', 1000, 4.4);keySig(7, true);}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 5 && inversionC7 == 2) {
    plays('#A4', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#Eb3', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#A4', 1000, 5.6); plays('#C4', 1000, 6.8); plays('#Eb3', 1000, 3.2); plays('#Gb3', 1000, 4.4);}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 5 && inversionC7 == 2) {
    plays('#Bb4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#E3', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#Bb4', 1000, 5.6); plays('#Db4', 1000, 6.8); plays('#E3', 1000, 3.2); plays('#G3', 1000, 4.4);keySig(5, true);}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 5 && inversionC7 == 2) {
    plays('#B4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#F3', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#B4', 1000, 5.6); plays('#D4', 1000, 6.8); plays('#F3', 1000, 3.2); plays('#Ab3', 1000, 4.4);keySig(2, false);}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 5 && inversionC7 == 2) {
    plays('#C4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#Gb3', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#C4', 1000, 5.6); plays('#Eb4', 1000, 6.8); plays('#Gb3', 1000, 3.2); plays('#A4', 1000, 4.4);keySig(3, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 5 && inversionC7 == 2) {
    plays('#Db4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#G3', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#Db4', 1000, 5.6); plays('#E4', 1000, 6.8); plays('#G3', 1000, 3.2); plays('#Bb4', 1000, 4.4);keySig(4, false);}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 5 && inversionC7 == 2) {
    plays('#D4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#Ab3', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#D4', 1000, 5.6); plays('#F4', 1000, 6.8); plays('#Ab3', 1000, 3.2); plays('#B4', 1000, 4.4);keySig(1, true);}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 5 && inversionC7 == 2) {
    plays('#Eb4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#A4', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#Eb4', 1000, 5.6); plays('#Gb4', 1000, 6.8); plays('#A4', 1000, 3.2); plays('#C4', 1000, 4.4);keySig(6, true);}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 5 && inversionC7 == 2) {
    plays('#E4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#Bb4', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#E4', 1000, 5.6); plays('#G4', 1000, 6.8); plays('#Bb4', 1000, 3.2); plays('#Db4', 1000, 4.4);keySig(1, false);}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 5 && inversionC7 == 2) {
    plays('#F4', 1000, 0.1); plays('#Ab4', 1000, 0.11); plays('#B4', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#F4', 1000, 5.6); plays('#Ab4', 1000, 6.8); plays('#B4', 1000, 3.2); plays('#D4', 1000, 4.4);keySig(4, true);}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 5 && inversionC7 == 2) {
    plays('#Gb4', 1000, 0.1); plays('#A5', 1000, 0.11); plays('#C4', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#Gb4', 1000, 5.6); plays('#A5', 1000, 6.8); plays('#C4', 1000, 3.2); plays('#Eb4', 1000, 4.4);keySig(3, false);}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 5 && inversionC7 == 2) {
    plays('#G4', 1000, 0.1); plays('#Bb5', 1000, 0.11); plays('#Db4', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#G4', 1000, 5.6); plays('#Bb5', 1000, 6.8); plays('#Db4', 1000, 3.2); plays('#E4', 1000, 4.4);keySig(2, true);}
  else if (keyNoteC7 == '/Ab' && typeNoteC7 == 5 && inversionC7 == 3) {
    plays('#Ab3', 1000, 0.1); plays('#B4', 1000, 0.11); plays('#D4', 1000, 0.111); plays('#F3', 1000, 0.1111);plays('#Ab3', 1000, 4.4); plays('#B4', 1000, 5.6); plays('#D4', 1000, 6.8); plays('#F3', 1000, 3.2);keySig(7, true);}
  else if (keyNoteC7 == '/A' && typeNoteC7 == 5 && inversionC7 == 3) {
    plays('#A4', 1000, 0.1); plays('#C4', 1000, 0.11); plays('#Eb4', 1000, 0.111); plays('#Gb3', 1000, 0.1111);plays('#A4', 1000, 4.4); plays('#C4', 1000, 5.6); plays('#Eb4', 1000, 6.8); plays('#Gb3', 1000, 3.2);}
  else if (keyNoteC7 == '/Bb' && typeNoteC7 == 5 && inversionC7 == 3) {
    plays('#Bb4', 1000, 0.1); plays('#Db4', 1000, 0.11); plays('#E4', 1000, 0.111); plays('#G3', 1000, 0.1111);plays('#Bb4', 1000, 4.4); plays('#Db4', 1000, 5.6); plays('#E4', 1000, 6.8); plays('#G3', 1000, 3.2);keySig(5, true);}
  else if (keyNoteC7 == '/B' && typeNoteC7 == 5 && inversionC7 == 3) {
    plays('#B4', 1000, 0.1); plays('#D4', 1000, 0.11); plays('#F4', 1000, 0.111); plays('#Ab3', 1000, 0.1111);plays('#B4', 1000, 4.4); plays('#D4', 1000, 5.6); plays('#F4', 1000, 6.8); plays('#Ab3', 1000, 3.2);keySig(2, false);}
  else if (keyNoteC7 == '/C' && typeNoteC7 == 5 && inversionC7 == 3) {
    plays('#C4', 1000, 0.1); plays('#Eb4', 1000, 0.11); plays('#Gb4', 1000, 0.111); plays('#A4', 1000, 0.1111);plays('#C4', 1000, 4.4); plays('#Eb4', 1000, 5.6); plays('#Gb4', 1000, 6.8); plays('#A4', 1000, 3.2);keySig(3, true);}
  else if (keyNoteC7 == '/Db' && typeNoteC7 == 5 && inversionC7 == 3) {
    plays('#Db4', 1000, 0.1); plays('#E4', 1000, 0.11); plays('#G4', 1000, 0.111); plays('#Bb4', 1000, 0.1111);plays('#Db4', 1000, 4.4); plays('#E4', 1000, 5.6); plays('#G4', 1000, 6.8); plays('#Bb4', 1000, 3.2);keySig(4, false);}
  else if (keyNoteC7 == '/D' && typeNoteC7 == 5 && inversionC7 == 3) {
    plays('#D4', 1000, 0.1); plays('#F4', 1000, 0.11); plays('#Ab4', 1000, 0.111); plays('#B4', 1000, 0.1111);plays('#D4', 1000, 4.4); plays('#F4', 1000, 5.6); plays('#Ab4', 1000, 6.8); plays('#B4', 1000, 3.2);keySig(1, true);}
  else if (keyNoteC7 == '/Eb' && typeNoteC7 == 5 && inversionC7 == 3) {
    plays('#Eb4', 1000, 0.1); plays('#Gb4', 1000, 0.11); plays('#A5', 1000, 0.111); plays('#C4', 1000, 0.1111);plays('#Eb4', 1000, 4.4); plays('#Gb4', 1000, 5.6); plays('#A5', 1000, 6.8); plays('#C4', 1000, 3.2);keySig(6, true);}
  else if (keyNoteC7 == '/E' && typeNoteC7 == 5 && inversionC7 == 3) {
    plays('#E4', 1000, 0.1); plays('#G4', 1000, 0.11); plays('#Bb5', 1000, 0.111); plays('#Db4', 1000, 0.1111);plays('#E4', 1000, 4.4); plays('#G4', 1000, 5.6); plays('#Bb5', 1000, 6.8); plays('#Db4', 1000, 3.2);keySig(1, false);}
  else if (keyNoteC7 == '/F' && typeNoteC7 == 5 && inversionC7 == 3) {
    plays('#F4', 1000, 0.1); plays('#Ab4', 1000, 0.11); plays('#B5', 1000, 0.111); plays('#D4', 1000, 0.1111);plays('#F4', 1000, 4.4); plays('#Ab4', 1000, 5.6); plays('#B5', 1000, 6.8); plays('#D4', 1000, 3.2);keySig(4, true);}
  else if (keyNoteC7 == '/Gb' && typeNoteC7 == 5 && inversionC7 == 3) {
    plays('#Gb4', 1000, 0.1); plays('#A5', 1000, 0.11); plays('#C5', 1000, 0.111); plays('#Eb4', 1000, 0.1111);plays('#Gb4', 1000, 4.4); plays('#A5', 1000, 5.6); plays('#C5', 1000, 6.8); plays('#Eb4', 1000, 3.2);keySig(3, false);}
  else if (keyNoteC7 == '/G' && typeNoteC7 == 5 && inversionC7 == 3) {
    plays('#G4', 1000, 0.1); plays('#Bb5', 1000, 0.11); plays('#Db5', 1000, 0.111); plays('#E4', 1000, 0.1111);plays('#G4', 1000, 4.4); plays('#Bb5', 1000, 5.6); plays('#Db5', 1000, 6.8); plays('#E4', 1000, 3.2);keySig(2, true);} 
  else {
    document.getElementById("grand").style.visibility = "hidden";
    document.getElementById('Speed').textContent = '';
    window.alert("Please enter all fields");
  }

  if (typeNoteC7 == 2 && inversionC7 == 0) {
    document.getElementById('acc5').style.visibility = "visible";
    document.getElementById('acc5').style.top = 50 + '%';
    document.getElementById('acc5').style.left = 50 + '%';
  }
}

// 7th Arpeggios
var keyNoteA7;
var typeNoteA7;
var inversionA7;

let selectionArr7 = document.getElementById('arr7Drop');
selectionArr7.addEventListener('change', () => {
    keyNoteA7 = selectionArr7.options[selectionArr7.selectedIndex].value;
});

function majorA7() {
  typeNoteA7 = 0;
  document.getElementById('MajorA7').style.backgroundColor = 'limegreen';
  document.getElementById('MinorA7').style.backgroundColor = '#f3f0f3';
  document.getElementById('DominantA7').style.backgroundColor = '#f3f0f3';
}
function minorA7() {
  typeNoteA7 = 1;
  document.getElementById('MinorA7').style.backgroundColor = 'limegreen';
  document.getElementById('MajorA7').style.backgroundColor = '#f3f0f3';
  document.getElementById('DominantA7').style.backgroundColor = '#f3f0f3';
}
function dominantA7() {
  typeNoteA7 = 2;
  document.getElementById('DominantA7').style.backgroundColor = 'limegreen';
  document.getElementById('MajorA7').style.backgroundColor = '#f3f0f3';
  document.getElementById('MinorA7').style.backgroundColor = '#f3f0f3';
}

function rootA7() {
  inversionA7 = 0;
  document.getElementById('RootA7').style.backgroundColor = 'limegreen';
  document.getElementById('1stA7').style.backgroundColor = '#f3f0f3';
  document.getElementById('2ndA7').style.backgroundColor = '#f3f0f3';
  document.getElementById('3rdA7').style.backgroundColor = '#f3f0f3';
}
function firstA7() {
  inversionA7 = 1;
  document.getElementById('1stA7').style.backgroundColor = 'limegreen';
  document.getElementById('RootA7').style.backgroundColor = '#f3f0f3';
  document.getElementById('2ndA7').style.backgroundColor = '#f3f0f3';
  document.getElementById('3rdA7').style.backgroundColor = '#f3f0f3';
}
function secondA7() {
  inversionA7 = 2;
  document.getElementById('2ndA7').style.backgroundColor = 'limegreen';
  document.getElementById('RootA7').style.backgroundColor = '#f3f0f3';
  document.getElementById('1stA7').style.backgroundColor = '#f3f0f3';
  document.getElementById('3rdA7').style.backgroundColor = '#f3f0f3';
}
function thirdA7() {
  inversionA7 = 3;
  document.getElementById('3rdA7').style.backgroundColor = 'limegreen';
  document.getElementById('RootA7').style.backgroundColor = '#f3f0f3';
  document.getElementById('1stA7').style.backgroundColor = '#f3f0f3';
  document.getElementById('2ndA7').style.backgroundColor = '#f3f0f3';
}

function nextArpeggio7() {
  reset();
  var lengthA7 = document.getElementById('rangeValuea7').innerText;
  word(lengthA7);
  var length = 60/lengthA7 * 1000;
  numAccident = 0;
  if (keyNoteA7 == '/Ab' && typeNoteA7 == 0 && inversionA7 == 0) {
    plays('#Ab2', length, 1);plays('#C3', length, 2);plays('#Eb3', length, 3);plays('#G3', length, 4);plays('#Ab3', length, 5);plays('#C4', length, 6);plays('#Eb4', length, 7);plays('#G4', length, 8);plays('#Ab4', length, 9);plays('#G4', length, 10);plays('#Eb4', length, 11);plays('#C4', length, 12);plays('#Ab3', length, 13);plays('#G3', length,14);plays('#Eb3',length, 15);plays('#C3', length, 16);plays('#Ab2', length, 17); keySig(4, true)} 
  else if (keyNoteA7 == '/A' && typeNoteA7 == 0 && inversionA7 == 0) {
    plays('#A3', length, 1);plays('#Db3', length, 2);plays('#E3', length, 3);plays('#Ab3', length, 4);plays('#A4', length, 5);plays('#Db4', length, 6);plays('#E4', length, 7);plays('#Ab4', length, 8);plays('#A5', length, 9);plays('#Ab4', length, 10);plays('#E4', length, 11);plays('#Db4',length, 12);plays('#A4', length, 13);plays('#Ab3', length,14);plays('#E3', length, 15);plays('#Db3', length, 16);plays('#A3', length, 17); keySig(3, false)}
  else if (keyNoteA7 == '/Bb' && typeNoteA7 == 0 && inversionA7 == 0) {
    plays('#Bb3', length, 1);plays('#D3', length, 2);plays('#F3', length, 3);plays('#A4', length, 4);plays('#Bb4', length, 5);plays('#D4', length, 6);plays('#F4', length, 7);plays('#A5', length, 8);plays('#Bb5', length, 9);plays('#A5', length, 10);plays('#F4', length, 11);plays('#D4', length, 12);plays('#Bb4', length, 13);plays('#A4', length, 14);plays('#F3',length, 15);plays('#D3', length, 16);plays('#Bb3', length, 17); keySig(2, true)}
  else if (keyNoteA7 == '/B' && typeNoteA7 == 0 && inversionA7 == 0) {
    plays('#B3', length, 1);plays('#Eb3', length, 2);plays('#Gb3', length, 3);plays('#Bb4', length, 4);plays('#B4', length, 5);plays('#Eb4', length, 6);plays('#Gb4', length, 7);plays('#Bb5', length, 8);plays('#B5', length, 9);plays('#Bb5', length, 10);plays('#Gb4', length,11);plays('#Eb4',length, 12);plays('#B4', length, 13);plays('#Bb4',length,14);plays('#Gb3', length, 15);plays('#Eb3', length, 16);plays('#B3', length, 17); keySig(5, false)}
  else if (keyNoteA7 == '/C' && typeNoteA7 == 0 && inversionA7 == 0) {
    plays('#C3', length, 1);plays('#E3', length, 2);plays('#G3', length, 3);plays('#B4', length, 4);plays('#C4', length, 5);plays('#E4', length, 6);plays('#G4', length, 7);plays('#B5', length, 8);plays('#C5', length, 9);plays('#B5', length, 10);plays('#G4', length, 11);plays('#E4', length, 12);plays('#C4', length, 13);plays('#B4', length, 14);plays('#G3', length, 15);plays('#E3', length, 16);plays('#C3', length, 17); }
  else if (keyNoteA7 == '/Db' && typeNoteA7 == 0 && inversionA7 == 0) {
    plays('#Db3', length, 1);plays('#F3', length, 2);plays('#Ab3', length, 3);plays('#C4', length, 4);plays('#Db4', length, 5);plays('#F4', length, 6);plays('#Ab4', length, 7);plays('#C5', length, 8);plays('#Db5', length, 9);plays('#C5', length, 10);plays('#Ab4', length, 11);plays('#F4', length, 12);plays('#Db4', length, 13);plays('#C4', length,14);plays('#Ab3',length, 15);plays('#F3', length, 16);plays('#Db3', length, 17); keySig(5, true)}
  else if (keyNoteA7 == '/D' && typeNoteA7 == 0 && inversionA7 == 0) {
    plays('#D3', length, 1);plays('#Gb3', length, 2);plays('#A4', length, 3);plays('#Db4', length, 4);plays('#D4', length, 5);plays('#Gb4', length, 6);plays('#A5', length, 7);plays('#Db5', length, 8);plays('#D5', length, 9);plays('#Db5', length, 10);plays('#A5', length, 11);plays('#Gb4',length, 12);plays('#D4', length, 13);plays('#Db4', length,14);plays('#A4', length, 15);plays('#Gb3', length, 16);plays('#D3', length, 17); keySig(2, false)}
  else if (keyNoteA7 == '/Eb' && typeNoteA7 == 0 && inversionA7 == 0) {
    plays('#Eb3', length, 1);plays('#G3', length, 2);plays('#Bb4', length, 3);plays('#D4', length, 4);plays('#Eb4', length, 5);plays('#G4', length, 6);plays('#Bb5', length, 7);plays('#D5', length, 8);plays('#Eb5', length, 9);plays('#D5', length, 10);plays('#Bb5', length, 11);plays('#G4', length, 12);plays('#Eb4', length, 13);plays('#D4', length, 14);plays('#Bb4', length, 15);plays('#G3', length, 16);plays('#Eb3', length, 17); keySig(3, true)}
  else if (keyNoteA7 == '/E' && typeNoteA7 == 0 && inversionA7 == 0) {
    plays('#E3', length, 1);plays('#Ab3', length, 2);plays('#B4', length, 3);plays('#Eb4', length, 4);plays('#E4', length, 5);plays('#Ab4', length, 6);plays('#B5', length, 7);plays('#Eb5', length, 8);plays('#E5', length, 9);plays('#Eb5', length, 10);plays('#B5', length, 11);plays('#Ab4',length, 12);plays('#E4', length, 13);plays('#Eb4', length,14);plays('#B4', length, 15);plays('#Ab3', length, 16);plays('#E3', length, 17); keySig(4, false)}
  else if (keyNoteA7 == '/F' && typeNoteA7 == 0 && inversionA7 == 0) {
    plays('#F3', length, 1);plays('#A4', length, 2);plays('#C4', length, 3);plays('#E4', length, 4);plays('#F4', length, 5);plays('#A5', length, 6);plays('#C5', length, 7);plays('#E5', length, 8);plays('#F5', length, 9);plays('#E5', length, 10);plays('#C5', length, 11);plays('#A5', length, 12);plays('#F4', length, 13);plays('#E4', length, 14);plays('#C4', length, 15);plays('#A4', length, 16);plays('#F3', length, 17); keySig(1, true)}
  else if (keyNoteA7 == '/Gb' && typeNoteA7 == 0 && inversionA7 == 0) {
    plays('#Gb3', length, 1);plays('#Bb4', length, 2);plays('#Db4', length, 3);plays('#F4', length, 4);plays('#Gb4', length, 5);plays('#Bb5', length, 6);plays('#Db5', length, 7);plays('#F5', length, 8);plays('#Gb5', length, 9);plays('#F5', length, 10);plays('#Db5', length, 11);plays('#Bb5', length, 12);plays('#Gb4', length,13);plays('#F4', length, 14);plays('#Db4',length,15);plays('#Bb4', length, 16);plays('#Gb3', length, 17); keySig(6, true)}
  else if (keyNoteA7 == '/G' && typeNoteA7 == 0 && inversionA7 == 0) {
    plays('#G3', length, 1);plays('#B4', length, 2);plays('#D4', length, 3);plays('#Gb4', length, 4);plays('#G4', length, 5);plays('#B5', length, 6);plays('#D5', length, 7);plays('#Gb5', length, 8);plays('#G5', length, 9);plays('#Gb5', length, 10);plays('#D5', length, 11);plays('#B5', length, 12);plays('#G4', length, 13);plays('#Gb4', length, 14);
    plays('#D4', length, 15);plays('#B4', length, 16);plays('#G3', length, 17); keySig(1, false)}
  else if (keyNoteA7 == '/Ab' && typeNoteA7 == 0 && inversionA7 == 1) {
    plays('#C3', length, 1);plays('#Eb3', length, 2);plays('#G3', length, 3);plays('#Ab3', length, 4);plays('#C4', length, 5);plays('#Eb4', length, 6);plays('#G4', length, 7);plays('#Ab4', length, 8);plays('#C5', length, 9);plays('#Ab4', length, 10);plays('#G4', length, 11);plays('#Eb4', length, 12);plays('#C4', length, 13);plays('#Ab3', length,14);plays('#G3', length,15);plays('#Eb3',length, 16);plays('#C3', length, 17);keySig(4, true)}
  else if (keyNoteA7 == '/A' && typeNoteA7 == 0 && inversionA7 == 1) {
    plays('#Db3', length, 1);plays('#E3', length, 2);plays('#Ab3', length, 3);plays('#A4', length, 4);plays('#Db4', length, 5);plays('#E4', length, 6);plays('#Ab4', length, 7);plays('#A5', length, 8);plays('#Db5', length,9);plays('#A5', length, 10);plays('#Ab4', length, 11);plays('#E4', length, 12);plays('#Db4',length, 13);plays('#A4', length, 14);plays('#Ab3', length,15);plays('#E3', length, 16);plays('#Db3', length, 17); keySig(3, false)}
  else if (keyNoteA7 == '/Bb' && typeNoteA7 == 0 && inversionA7 == 1) {
    plays('#D3', length, 1);plays('#F3', length, 2);plays('#A4', length, 3);plays('#Bb4', length, 4);plays('#D4', length, 5);plays('#F4', length, 6);plays('#A5', length, 7);plays('#Bb5', length, 8);plays('#D5', length, 9);plays('#Bb5', length, 10);plays('#A5', length, 11);plays('#F4', length, 12);plays('#D4', length, 13);plays('#Bb4', length, 14);plays('#A4', length, 15);plays('#F3',length, 16);plays('#D3', length, 17); keySig(2, true)}
  else if (keyNoteA7 == '/B' && typeNoteA7 == 0 && inversionA7 == 1) {
    plays('#Eb3', length, 1);plays('#Gb3', length, 2);plays('#Bb4', length, 3);plays('#B4', length, 4);plays('#Eb4', length, 5);plays('#Gb4', length, 6);plays('#Bb5', length, 7);plays('#B5', length, 8);plays('#Eb5', length, 9);plays('#B5', length, 10);plays('#Bb5', length, 11);plays('#Gb4', length,12);plays('#Eb4',length, 13);plays('#B4', length, 14);plays('#Bb4',length,15);plays('#Gb3', length, 16);plays('#Eb3', length, 17); keySig(5, false)}
  else if (keyNoteA7 == '/C' && typeNoteA7 == 0 && inversionA7 == 1) {
    plays('#E3', length, 1);plays('#G3', length, 2);plays('#B4', length, 3);plays('#C4', length, 4);plays('#E4', length, 5);plays('#G4', length, 6);plays('#B5', length, 7);plays('#C5', length, 8);plays('#E5', length, 9);plays('#C5', length, 10);plays('#B5', length, 11);plays('#G4', length, 12);plays('#E4', length, 13);plays('#C4', length, 14);plays('#B4', length, 15);plays('#G3', length, 16);plays('#E3', length, 17); }
  else if (keyNoteA7 == '/Db' && typeNoteA7 == 0 && inversionA7 == 1) {
    plays('#F3', length, 1);plays('#Ab3', length, 2);plays('#C4', length, 3);plays('#Db4', length, 4);plays('#F4', length, 5);plays('#Ab4', length, 6);plays('#C5', length, 7);plays('#Db5', length, 8);plays('#F5', length, 9);plays('#Db5', length, 10);plays('#C5', length, 11);plays('#Ab4', length, 12);plays('#F4', length, 13);plays('#Db4', length, 14);plays('#C4', length,15);plays('#Ab3',length, 16);plays('#F3', length, 17); keySig(5, true)}
  else if (keyNoteA7 == '/D' && typeNoteA7 == 0 && inversionA7 == 1) {
    plays('#Gb3', length, 1);plays('#A4', length, 2);plays('#Db4', length, 3);plays('#D4', length, 4);plays('#Gb4', length, 5);plays('#A5', length, 6);plays('#Db5', length, 7);plays('#D5', length, 8);plays('#Gb5', length, 9);plays('#D5', length, 10);plays('#Db5', length, 11);plays('#A5', length, 12);plays('#Gb4',length, 13);plays('#D4', length, 14);plays('#Db4', length,15);plays('#A4', length, 16);plays('#Gb3', length, 17); keySig(2, false)}
  else if (keyNoteA7 == '/Eb' && typeNoteA7 == 0 && inversionA7 == 1) {
    plays('#G3', length, 1);plays('#Bb4', length, 2);plays('#D4', length, 3);plays('#Eb4', length, 4);plays('#G4', length, 5);plays('#Bb5', length, 6);plays('#D5', length, 7);plays('#Eb5', length, 8);plays('#G5', length, 9);plays('#Eb5', length, 10);plays('#D5', length, 11);plays('#Bb5', length, 12);plays('#G4', length, 13);plays('#Eb4', length, 14);plays('#D4', length, 15);plays('#Bb4', length, 16);plays('#G3', length, 17); keySig(3, true)}
  else if (keyNoteA7 == '/E' && typeNoteA7 == 0 && inversionA7 == 1) {
    plays('#Ab3', length, 1);plays('#B4', length, 2);plays('#Eb4', length, 3);plays('#E4', length, 4);plays('#Ab4', length, 5);plays('#B5', length, 6);plays('#Eb5', length, 7);plays('#E5', length, 8);plays('#Ab5', length, 9);plays('#E5', length, 10);plays('#Eb5', length, 11);plays('#B5', length, 12);plays('#Ab4',length, 13);plays('#E4', length, 14);plays('#Eb4', length,15);plays('#B4', length, 16);plays('#Ab3', length, 17); keySig(4, false)}
  else if (keyNoteA7 == '/F' && typeNoteA7 == 0 && inversionA7 == 1) {
    plays('#A4', length, 1);plays('#C4', length, 2);plays('#E4', length, 3);plays('#F4', length, 4);plays('#A5', length, 5);plays('#C5', length, 6);plays('#E5', length, 7);plays('#F5', length, 8);plays('#A6', length, 9);plays('#F5', length, 10);plays('#E5', length, 11);plays('#C5', length, 12);plays('#A5', length, 13);plays('#F4', length, 14);plays('#E4', length, 15);plays('#C4', length, 16);plays('#A4', length, 17); keySig(1, true)}
  else if (keyNoteA7 == '/Gb' && typeNoteA7 == 0 && inversionA7 == 1) {
    plays('#Bb4', length, 1);plays('#Db4', length, 2);plays('#F4', length, 3);plays('#Gb4', length, 4);plays('#Bb5', length, 5);plays('#Db5', length, 6);plays('#F5', length, 7);plays('#Gb5', length, 8);plays('#Bb6', length, 9);plays('#Gb5', length, 10);plays('#F5', length, 11);plays('#Db5', length, 12);plays('#Bb5', length, 13);plays('#Gb4', length,14);plays('#F4', length, 15);plays('#Db4',length,16);plays('#Bb4', length, 17); keySig(6, true)} 
  else if (keyNoteA7 == '/G' && typeNoteA7 == 0 && inversionA7 == 1) {
    plays('#B4', length, 1);plays('#D4', length, 2);plays('#Gb4', length, 3);plays('#G4', length, 4);plays('#B5', length, 5);plays('#D5', length, 6);plays('#Gb5', length, 7);plays('#G5', length, 8);plays('#B6', length, 9);plays('#G5', length, 10);plays('#Gb5', length, 11);plays('#D5', length, 12);plays('#B5', length, 13);plays('#G4', length, 14);plays('#Gb4', length, 15);
    plays('#D4', length, 16);plays('#B4', length, 17); keySig(1, false)}
  else if (keyNoteA7 == '/Ab' && typeNoteA7 == 0 && inversionA7 == 2) {
    plays('#Eb3', length, 1);plays('#G3', length, 2);plays('#Ab3', length, 3);plays('#C4', length, 4);plays('#Eb4', length, 5);plays('#G4', length, 6);plays('#Ab4', length, 7);plays('#C5', length, 8);plays('#Eb5', length, 9);plays('#C5', length, 10);plays('#Ab4', length, 11);plays('#G4', length, 12);plays('#Eb4', length, 13);plays('#C4', length, 14);plays('#Ab3', length,15);plays('#G3', length,16);plays('#Eb3',length, 17); keySig(4, true)}
  else if (keyNoteA7 == '/A' && typeNoteA7 == 0 && inversionA7 == 2) {
    plays('#E3', length, 1);plays('#Ab3', length, 2);plays('#A4', length, 3);plays('#Db4', length, 4);plays('#E4', length, 5);plays('#Ab4', length, 6);plays('#A5', length, 7);plays('#Db5', length, 8);plays('#E5', length, 9);plays('#Db5', length,10);plays('#A5', length, 11);plays('#Ab4', length, 12);plays('#E4', length, 13);plays('#Db4',length, 14);plays('#A4', length, 15);plays('#Ab3', length,16);plays('#E3', length, 17); keySig(3, false)}  
  else if (keyNoteA7 == '/Bb' && typeNoteA7 == 0 && inversionA7 == 2) {
    plays('#F3', length, 1);plays('#A4', length, 2);plays('#Bb4', length, 3);plays('#D4', length, 4);plays('#F4', length, 5);plays('#A5', length, 6);plays('#Bb5', length, 7);plays('#D5', length, 8);plays('#F5', length, 9);plays('#D5', length, 10);plays('#Bb5', length, 11);plays('#A5', length, 12);plays('#F4', length, 13);plays('#D4', length, 14);plays('#Bb4', length, 15);plays('#A4', length, 16);plays('#F3',length, 17); keySig(2, true)}
  else if (keyNoteA7 == '/B' && typeNoteA7 == 0 && inversionA7 == 2) {
    plays('#Gb3', length, 1);plays('#Bb4', length, 2);plays('#B4', length, 3);plays('#Eb4', length, 4);plays('#Gb4', length, 5);plays('#Bb5', length, 6);plays('#B5', length, 7);plays('#Eb5', length, 8);plays('#Gb5', length, 9);plays('#Eb5', length, 10);plays('#B5', length, 11);plays('#Bb5', length, 12);plays('#Gb4', length,13);plays('#Eb4',length, 14);plays('#B4', length, 15);plays('#Bb4',length,16);plays('#Gb3', length, 17); keySig(5, false)}
  else if (keyNoteA7 == '/C' && typeNoteA7 == 0 && inversionA7 == 2) {
    plays('#G3', length, 1);plays('#B4', length, 2);plays('#C4', length, 3);plays('#E4', length, 4);plays('#G4', length, 5);plays('#B5', length, 6);plays('#C5', length, 7);plays('#E5', length, 8);plays('#G5', length, 9);plays('#E5', length, 10);plays('#C5', length, 11);plays('#B5', length, 12);plays('#G4', length, 13);plays('#E4', length, 14);plays('#C4', length, 15);plays('#B4', length, 16);plays('#G3', length, 17); }
  else if (keyNoteA7 == '/Db' && typeNoteA7 == 0 && inversionA7 == 2) {
    plays('#Ab3', length, 1);plays('#C4', length, 2);plays('#Db4', length, 3);plays('#F4', length, 4);plays('#Ab4', length, 5);plays('#C5', length, 6);plays('#Db5', length, 7);plays('#F5', length, 8);plays('#Ab5', length, 9);plays('#F5', length, 10);plays('#Db5', length, 11);plays('#C5', length, 12);plays('#Ab4', length, 13);plays('#F4', length, 14);plays('#Db4', length, 15);plays('#C4', length,16);plays('#Ab3',length, 17); keySig(5, true)}
  else if (keyNoteA7 == '/D' && typeNoteA7 == 0 && inversionA7 == 2) {
    plays('#A4', length, 1);plays('#Db4', length, 2);plays('#D4', length, 3);plays('#Gb4', length, 4);plays('#A5', length, 5);plays('#Db5', length, 6);plays('#D5', length, 7);plays('#Gb5', length, 8);plays('#A6', length, 9);plays('#Gb5', length, 10);plays('#D5', length, 11);plays('#Db5', length, 12);plays('#A5', length, 13);plays('#Gb4',length, 14);plays('#D4', length, 15);plays('#Db4', length,16);plays('#A4', length, 17); keySig(2, false)} 
  else if (keyNoteA7 == '/Eb' && typeNoteA7 == 0 && inversionA7 == 2) {
    plays('#Bb4', length, 1);plays('#D4', length, 2);plays('#Eb4', length, 3);plays('#G4', length, 4);plays('#Bb5', length, 5);plays('#D5', length, 6);plays('#Eb5', length, 7);plays('#G5', length, 8);plays('#Bb6', length, 9);plays('#G5', length, 10);plays('#Eb5', length, 11);plays('#D5', length, 12);plays('#Bb5', length, 13);plays('#G4', length, 14);plays('#Eb4', length, 15);plays('#D4', length, 16);plays('#Bb4', length, 17); keySig(3, true)}
  else if (keyNoteA7 == '/E' && typeNoteA7 == 0 && inversionA7 == 2) {
    plays('#B4', length, 1);plays('#Eb4', length, 2);plays('#E4', length, 3);plays('#Ab4', length, 4);plays('#B5', length, 5);plays('#Eb5', length, 6);plays('#E5', length, 7);plays('#Ab5', length, 8);plays('#B6', length, 9);plays('#Ab5', length, 10);plays('#E5', length, 11);plays('#Eb5', length, 12);plays('#B5', length, 13);plays('#Ab4',length, 14);plays('#E4', length, 15);plays('#Eb4', length,16);plays('#B4', length, 17); keySig(4, false)} 
  else if (keyNoteA7 == '/F' && typeNoteA7 == 0 && inversionA7 == 2) {
    plays('#C4', length, 1);plays('#E4', length, 2);plays('#F4', length, 3);plays('#A5', length, 4);plays('#C5', length, 5);plays('#E5', length, 6);plays('#F5', length, 7);plays('#A6', length, 8);plays('#C6', length, 9);plays('#A6', length, 10);plays('#F5', length, 11);plays('#E5', length, 12);plays('#C5', length, 13);plays('#A5', length, 14);plays('#F4', length, 15);plays('#E4', length, 16);plays('#C4', length, 17); keySig(1, true)}
  else if (keyNoteA7 == '/Gb' && typeNoteA7 == 0 && inversionA7 == 2) {
    plays('#Db4', length, 1);plays('#F4', length, 2);plays('#Gb4', length, 3);plays('#Bb5', length, 4);plays('#Db5', length, 5);plays('#F5', length, 6);plays('#Gb5', length, 7);plays('#Bb6', length, 8);plays('#Db6', length, 9);plays('#Bb6', length, 10);plays('#Gb5', length, 11);plays('#F5', length, 12);plays('#Db5', length, 13);plays('#Bb5', length, 14);plays('#Gb4', length,15);plays('#F4', length, 16);plays('#Db4',length,17); keySig(6, true)} 
  else if (keyNoteA7 == '/G' && typeNoteA7 == 0 && inversionA7 == 2) {
    plays('#D4', length, 1);plays('#Gb4', length, 2);plays('#G4', length, 3);plays('#B5', length, 4);plays('#D5', length, 5);plays('#Gb5', length, 6);plays('#G5', length, 7);plays('#B6', length, 8);plays('#D6', length, 9);plays('#B6', length, 10);plays('#G5', length, 11);plays('#Gb5', length, 12);plays('#D5', length, 13);plays('#B5', length, 14);plays('#G4', length, 15);plays('#Gb4', length, 16);
    plays('#D4', length, 17); keySig(1, false)}
  else if (keyNoteA7 == '/Ab' && typeNoteA7 == 0 && inversionA7 == 3) {
    plays('#G3', length, 1);plays('#Ab3', length, 2);plays('#C4', length, 3);plays('#Eb4', length, 4);plays('#G4', length, 5);plays('#Ab4', length, 6);plays('#C5', length, 7);plays('#Eb5', length, 8);plays('#G5', length, 9);plays('#Eb5', length, 10);plays('#C5', length, 11);plays('#Ab4', length, 12);plays('#G4', length, 13);plays('#Eb4', length, 14);plays('#C4', length, 15);plays('#Ab3', length,16);plays('#G3', length,17); keySig(4, true)}
  else if (keyNoteA7 == '/A' && typeNoteA7 == 0 && inversionA7 == 3) {
    plays('#Ab3', length, 1);plays('#A4', length, 2);plays('#Db4', length, 3);plays('#E4', length, 4);plays('#Ab4', length, 5);plays('#A5', length, 6);plays('#Db5', length, 7);plays('#E5', length, 8);plays('#Ab5', length, 9);plays('#E5', length, 10);plays('#Db5', length,11);plays('#A5', length, 12);plays('#Ab4', length, 13);plays('#E4', length, 14);plays('#Db4',length, 15);plays('#A4', length, 16);plays('#Ab3', length,17); keySig(3, false)} 
  else if (keyNoteA7 == '/Bb' && typeNoteA7 == 0 && inversionA7 == 3) {
    plays('#A4', length, 1);plays('#Bb4', length, 2);plays('#D4', length, 3);plays('#F4', length, 4);plays('#A5', length, 5);plays('#Bb5', length, 6);plays('#D5', length, 7);plays('#F5', length, 8);plays('#A6', length, 9);plays('#F5', length, 10);plays('#D5', length, 11);plays('#Bb5', length, 12);plays('#A5', length, 13);plays('#F4', length, 14);plays('#D4', length, 15);plays('#Bb4', length, 16);plays('#A4', length, 17); keySig(2, true)}
  else if (keyNoteA7 == '/B' && typeNoteA7 == 0 && inversionA7 == 3) {
    plays('#Bb4', length, 1);plays('#B4', length, 2);plays('#Eb4', length, 3);plays('#Gb4', length, 4);plays('#Bb5', length, 5);plays('#B5', length, 6);plays('#Eb5', length, 7);plays('#Gb5', length, 8);plays('#Bb6', length, 9);plays('#Gb5', length, 10);plays('#Eb5', length, 11);plays('#B5', length, 12);plays('#Bb5', length, 13);plays('#Gb4', length,14);plays('#Eb4',length, 15);plays('#B4', length, 16);plays('#Bb4',length,17); keySig(5, false)}
  else if (keyNoteA7 == '/C' && typeNoteA7 == 0 && inversionA7 == 3) {
    plays('#B4', length, 1);plays('#C4', length, 2);plays('#E4', length, 3);plays('#G4', length, 4);plays('#B5', length, 5);plays('#C5', length, 6);plays('#E5', length, 7);plays('#G5', length, 8);plays('#B6', length, 9);plays('#G5', length, 10);plays('#E5', length, 11);plays('#C5', length, 12);plays('#B5', length, 13);plays('#G4', length, 14);plays('#E4', length, 15);plays('#C4', length, 16);plays('#B4', length, 17); }
  else if (keyNoteA7 == '/Db' && typeNoteA7 == 0 && inversionA7 == 3) {
    plays('#C4', length, 1);plays('#Db4', length, 2);plays('#F4', length, 3);plays('#Ab4', length, 4);plays('#C5', length, 5);plays('#Db5', length, 6);plays('#F5', length, 7);plays('#Ab5', length, 8);plays('#C6', length, 9);plays('#Ab5', length, 10);plays('#F5', length, 11);plays('#Db5', length, 12);plays('#C5', length, 13);plays('#Ab4', length, 14);plays('#F4', length, 15);plays('#Db4', length, 16);plays('#C4', length,17); keySig(5, true)}
  else if (keyNoteA7 == '/D' && typeNoteA7 == 0 && inversionA7 == 3) {
    plays('#Db4', length, 1);plays('#D4', length, 2);plays('#Gb4', length, 3);plays('#A5', length, 4);plays('#Db5', length, 5);plays('#D5', length, 6);plays('#Gb5', length, 7);plays('#A6', length, 8);plays('#Db6', length, 9);plays('#A6', length, 10);plays('#Gb5', length, 11);plays('#D5', length, 12);plays('#Db5', length, 13);plays('#A5', length, 14);plays('#Gb4',length, 15);plays('#D4', length, 16);plays('#Db4', length,17); keySig(2, false)} 
  else if (keyNoteA7 == '/Eb' && typeNoteA7 == 0 && inversionA7 == 3) {
    plays('#D4', length, 1);plays('#Eb4', length, 2);plays('#G4', length, 3);plays('#Bb5', length, 4);plays('#D5', length, 5);plays('#Eb5', length, 6);plays('#G5', length, 7);plays('#Bb6', length, 8);plays('#D6', length, 9);plays('#Bb6', length, 10);plays('#G5', length, 11);plays('#Eb5', length, 12);plays('#D5', length, 13);plays('#Bb5', length, 14);plays('#G4', length, 15);plays('#Eb4', length, 16);plays('#D4', length, 17); keySig(3, true)} 
  else if (keyNoteA7 == '/E' && typeNoteA7 == 0 && inversionA7 == 3) {
    plays('#Eb4', length, 1);plays('#E4', length, 2);plays('#Ab4', length, 3);plays('#B5', length, 4);plays('#Eb5', length, 5);plays('#E5', length, 6);plays('#Ab5', length, 7);plays('#B6', length, 8);plays('#Eb6', length, 9);plays('#B6', length, 10);plays('#Ab5', length, 11);plays('#E5', length, 12);plays('#Eb5', length, 13);plays('#B5', length, 14);plays('#Ab4',length, 15);plays('#E4', length, 16);plays('#Eb4', length,17); keySig(4, false)}
  else if (keyNoteA7 == '/F' && typeNoteA7 == 0 && inversionA7 == 3) {
    plays('#E4', length, 1);plays('#F4', length, 2);plays('#A5', length, 3);plays('#C5', length, 4);plays('#E5', length, 5);plays('#F5', length, 6);plays('#A6', length, 7);plays('#C6', length, 8);plays('#E6', length, 9);plays('#C6', length, 10);plays('#A6', length, 11);plays('#F5', length, 12);plays('#E5', length, 13);plays('#C5', length, 14);plays('#A5', length, 15);plays('#F4', length, 16);plays('#E4', length, 17); keySig(1, true)}
  else if (keyNoteA7 == '/Gb' && typeNoteA7 == 0 && inversionA7 == 3) {
    plays('#F4', length, 1);plays('#Gb4', length, 2);plays('#Bb5', length, 3);plays('#Db5', length, 4);plays('#F5', length, 5);plays('#Gb5', length, 6);plays('#Bb6', length, 7);plays('#Db6', length, 8);plays('#F6', length, 9);plays('#Db6', length, 10);plays('#Bb6', length, 11);plays('#Gb5', length, 12);plays('#F5', length, 13);plays('#Db5', length, 14);plays('#Bb5', length, 15);plays('#Gb4', length,16);plays('#F4', length, 17); keySig(6, true)}
  else if (keyNoteA7 == '/G' && typeNoteA7 == 0 && inversionA7 == 3) {
    plays('#Gb4', length, 1);plays('#G4', length, 2);plays('#B5', length, 3);plays('#D5', length, 4);plays('#Gb5', length, 5);plays('#G5', length, 6);plays('#B6', length, 7);plays('#D6', length, 8);plays('#Gb6', length, 9);plays('#D6', length, 10);plays('#B6', length, 11);plays('#G5', length, 12);plays('#Gb5', length, 13);plays('#D5', length, 14);plays('#B5', length, 15);plays('#G4', length, 16);plays('#Gb4', length, 17); keySig(1, false)}  
  else if (keyNoteA7 == '/Ab' && typeNoteA7 == 1 && inversionA7 == 0) {
    plays('#Ab2', length, 1);plays('#B3', length, 2);plays('#Eb3', length, 3);plays('#Gb3', length, 4);plays('#Ab3', length, 5);plays('#B4', length, 6);plays('#Eb4', length, 7);plays('#Gb4', length, 8);plays('#Ab4', length, 9);plays('#Gb4', length, 10);plays('#Eb4', length, 11);plays('#B4', length, 12);plays('#Ab3', length, 13);plays('#Gb3', length,14);plays('#Eb3',length, 15);plays('#B3', length, 16);plays('#Ab2', length, 17); keySig(7, true);} 
  else if (keyNoteA7 == '/A' && typeNoteA7 == 1 && inversionA7 == 0) {
    plays('#A3', length, 1);plays('#C3', length, 2);plays('#E3', length, 3);plays('#G3', length, 4);plays('#A4', length, 5);plays('#C4', length, 6);plays('#E4', length, 7);plays('#G4', length, 8);plays('#A5', length, 9);plays('#G4', length, 10);plays('#E4', length, 11);plays('#C4',length, 12);plays('#A4', length, 13);plays('#G3', length,14);plays('#E3', length, 15);plays('#C3', length, 16);plays('#A3', length, 17);}
  else if (keyNoteA7 == '/Bb' && typeNoteA7 == 1 && inversionA7 == 0) {
    plays('#Bb3', length, 1);plays('#Db3', length, 2);plays('#F3', length, 3);plays('#Ab3', length, 4);plays('#Bb4', length, 5);plays('#Db4', length, 6);plays('#F4', length, 7);plays('#Ab4', length, 8);plays('#Bb5', length, 9);plays('#Ab4', length, 10);plays('#F4', length, 11);plays('#Db4', length, 12);plays('#Bb4', length, 13);plays('#Ab3', length, 14);plays('#F3',length, 15);plays('#Db3', length, 16);plays('#Bb3', length, 17); keySig(5, true);}
  else if (keyNoteA7 == '/B' && typeNoteA7 == 1 && inversionA7 == 0) {
    plays('#B3', length, 1);plays('#D3', length, 2);plays('#Gb3', length, 3);plays('#A4', length, 4);plays('#B4', length, 5);plays('#D4', length, 6);plays('#Gb4', length, 7);plays('#A5', length, 8);plays('#B5', length, 9);plays('#A5', length, 10);plays('#Gb4', length,11);plays('#D4',length, 12);plays('#B4', length, 13);plays('#A4',length,14);plays('#Gb3', length, 15);plays('#D3', length, 16);plays('#B3', length, 17); keySig(2, false);}
  else if (keyNoteA7 == '/C' && typeNoteA7 == 1 && inversionA7 == 0) {
    plays('#C3', length, 1);plays('#Eb3', length, 2);plays('#G3', length, 3);plays('#Bb4', length, 4);plays('#C4', length, 5);plays('#Eb4', length, 6);plays('#G4', length, 7);plays('#Bb5', length, 8);plays('#C5', length, 9);plays('#Bb5', length, 10);plays('#G4', length, 11);plays('#Eb4', length, 12);plays('#C4', length, 13);plays('#Bb4', length, 14);plays('#G3', length, 15);plays('#Eb3', length, 16);plays('#C3', length, 17); keySig(3, true);}
  else if (keyNoteA7 == '/Db' && typeNoteA7 == 1 && inversionA7 == 0) {
    plays('#Db3', length, 1);plays('#E3', length, 2);plays('#Ab3', length, 3);plays('#B4', length, 4);plays('#Db4', length, 5);plays('#E4', length, 6);plays('#Ab4', length, 7);plays('#B5', length, 8);plays('#Db5', length, 9);plays('#B5', length, 10);plays('#Ab4', length, 11);plays('#E4', length, 12);plays('#Db4', length, 13);plays('#B4', length,14);plays('#Ab3',length, 15);plays('#E3', length, 16);plays('#Db3', length, 17); keySig(4, false);}
  else if (keyNoteA7 == '/D' && typeNoteA7 == 1 && inversionA7 == 0) {
    plays('#D3', length, 1);plays('#F3', length, 2);plays('#A4', length, 3);plays('#C4', length, 4);plays('#D4', length, 5);plays('#F4', length, 6);plays('#A5', length, 7);plays('#C5', length, 8);plays('#D5', length, 9);plays('#C5', length, 10);plays('#A5', length, 11);plays('#F4',length, 12);plays('#D4', length, 13);plays('#C4', length,14);plays('#A4', length, 15);plays('#F3', length, 16);plays('#D3', length, 17); keySig(1, true);}
  else if (keyNoteA7 == '/Eb' && typeNoteA7 == 1 && inversionA7 == 0) {
    plays('#Eb3', length, 1);plays('#Gb3', length, 2);plays('#Bb4', length, 3);plays('#Db4', length, 4);plays('#Eb4', length, 5);plays('#Gb4', length, 6);plays('#Bb5', length, 7);plays('#Db5', length, 8);plays('#Eb5', length, 9);plays('#Db5', length, 10);plays('#Bb5', length, 11);plays('#Gb4', length, 12);plays('#Eb4', length, 13);plays('#Db4', length, 14);plays('#Bb4', length, 15);plays('#Gb3', length, 16);plays('#Eb3', length, 17); keySig(6, true);}
  else if (keyNoteA7 == '/E' && typeNoteA7 == 1 && inversionA7 == 0) {
    plays('#E3', length, 1);plays('#G3', length, 2);plays('#B4', length, 3);plays('#D4', length, 4);plays('#E4', length, 5);plays('#G4', length, 6);plays('#B5', length, 7);plays('#D5', length, 8);plays('#E5', length, 9);plays('#D5', length, 10);plays('#B5', length, 11);plays('#G4',length, 12);plays('#E4', length, 13);plays('#D4', length,14);plays('#B4', length, 15);plays('#G3', length, 16);plays('#E3', length, 17); keySig(1, false);}
  else if (keyNoteA7 == '/F' && typeNoteA7 == 1 && inversionA7 == 0) {
    plays('#F3', length, 1);plays('#Ab3', length, 2);plays('#C4', length, 3);plays('#Eb4', length, 4);plays('#F4', length, 5);plays('#Ab4', length, 6);plays('#C5', length, 7);plays('#Eb5', length, 8);plays('#F5', length, 9);plays('#Eb5', length, 10);plays('#C5', length, 11);plays('#Ab4', length, 12);plays('#F4', length, 13);plays('#Eb4', length, 14);plays('#C4', length, 15);plays('#Ab3', length, 16);plays('#F3', length, 17); keySig(4, true);}
  else if (keyNoteA7 == '/Gb' && typeNoteA7 == 1 && inversionA7 == 0) {
    plays('#Gb3', length, 1);plays('#A4', length, 2);plays('#Db4', length, 3);plays('#E4', length, 4);plays('#Gb4', length, 5);plays('#A5', length, 6);plays('#Db5', length, 7);plays('#E5', length, 8);plays('#Gb5', length, 9);plays('#E5', length, 10);plays('#Db5', length, 11);plays('#A5', length, 12);plays('#Gb4', length,13);plays('#E4', length, 14);plays('#Db4',length,15);plays('#A4', length, 16);plays('#Gb3', length, 17); keySig(3, false);}
  else if (keyNoteA7 == '/G' && typeNoteA7 == 1 && inversionA7 == 0) {
    plays('#G3', length, 1);plays('#Bb4', length, 2);plays('#D4', length, 3);plays('#F4', length, 4);plays('#G4', length, 5);plays('#Bb5', length, 6);plays('#D5', length, 7);plays('#F5', length, 8);plays('#G5', length, 9);plays('#F5', length, 10);plays('#D5', length, 11);plays('#Bb5', length, 12);plays('#G4', length, 13);plays('#F4', length, 14);
    plays('#D4', length, 15);plays('#Bb4', length, 16);plays('#G3', length, 17); keySig(2, true);}
  else if (keyNoteA7 == '/Ab' && typeNoteA7 == 1 && inversionA7 == 1) {
    plays('#B3', length, 1);plays('#Eb3', length, 2);plays('#Gb3', length, 3);plays('#Ab3', length, 4);plays('#B4', length, 5);plays('#Eb4', length, 6);plays('#Gb4', length, 7);plays('#Ab4', length, 8);plays('#B5', length, 9);plays('#Ab4', length, 10);plays('#Gb4', length, 11);plays('#Eb4', length, 12);plays('#B4', length, 13);plays('#Ab3', length,14);plays('#Gb3', length,15);plays('#Eb3',length, 16);plays('#B3', length, 17); keySig(7, true);}
  else if (keyNoteA7 == '/A' && typeNoteA7 == 1 && inversionA7 == 1) {
    plays('#C3', length, 1);plays('#E3', length, 2);plays('#G3', length, 3);plays('#A4', length, 4);plays('#C4', length, 5);plays('#E4', length, 6);plays('#G4', length, 7);plays('#A5', length, 8);plays('#C5', length,9);plays('#A5', length, 10);plays('#G4', length, 11);plays('#E4', length, 12);plays('#C4',length, 13);plays('#A4', length, 14);plays('#G3', length,15);plays('#E3', length, 16);plays('#C3', length, 17);}
  else if (keyNoteA7 == '/Bb' && typeNoteA7 == 1 && inversionA7 == 1) {
    plays('#Db3', length, 1);plays('#F3', length, 2);plays('#Ab3', length, 3);plays('#Bb4', length, 4);plays('#Db4', length, 5);plays('#F4', length, 6);plays('#Ab4', length, 7);plays('#Bb5', length, 8);plays('#Db5', length, 9);plays('#Bb5', length, 10);plays('#Ab4', length, 11);plays('#F4', length, 12);plays('#Db4', length, 13);plays('#Bb4', length, 14);plays('#Ab3', length, 15);plays('#F3',length, 16);plays('#Db3', length, 17); keySig(5, true);}
  else if (keyNoteA7 == '/B' && typeNoteA7 == 1 && inversionA7 == 1) {
    plays('#D3', length, 1);plays('#Gb3', length, 2);plays('#A4', length, 3);plays('#B4', length, 4);plays('#D4', length, 5);plays('#Gb4', length, 6);plays('#A5', length, 7);plays('#B5', length, 8);plays('#D5', length, 9);plays('#B5', length, 10);plays('#A5', length, 11);plays('#Gb4', length,12);plays('#D4',length, 13);plays('#B4', length, 14);plays('#A4',length,15);plays('#Gb3', length, 16);plays('#D3', length, 17); keySig(2, false);}
  else if (keyNoteA7 == '/C' && typeNoteA7 == 1 && inversionA7 == 1) {
    plays('#Eb3', length, 1);plays('#G3', length, 2);plays('#Bb4', length, 3);plays('#C4', length, 4);plays('#Eb4', length, 5);plays('#G4', length, 6);plays('#Bb5', length, 7);plays('#C5', length, 8);plays('#Eb5', length, 9);plays('#C5', length, 10);plays('#Bb5', length, 11);plays('#G4', length, 12);plays('#Eb4', length, 13);plays('#C4', length, 14);plays('#Bb4', length, 15);plays('#G3', length, 16);plays('#Eb3', length, 17); keySig(3, true);}
  else if (keyNoteA7 == '/Db' && typeNoteA7 == 1 && inversionA7 == 1) {
    plays('#E3', length, 1);plays('#Ab3', length, 2);plays('#B4', length, 3);plays('#Db4', length, 4);plays('#E4', length, 5);plays('#Ab4', length, 6);plays('#B5', length, 7);plays('#Db5', length, 8);plays('#E5', length, 9);plays('#Db5', length, 10);plays('#B5', length, 11);plays('#Ab4', length, 12);plays('#E4', length, 13);plays('#Db4', length, 14);plays('#B4', length,15);plays('#Ab3',length, 16);plays('#E3', length, 17); keySig(4, false);}
  else if (keyNoteA7 == '/D' && typeNoteA7 == 1 && inversionA7 == 1) {
    plays('#F3', length, 1);plays('#A4', length, 2);plays('#C4', length, 3);plays('#D4', length, 4);plays('#F4', length, 5);plays('#A5', length, 6);plays('#C5', length, 7);plays('#D5', length, 8);plays('#F5', length, 9);plays('#D5', length, 10);plays('#C5', length, 11);plays('#A5', length, 12);plays('#F4',length, 13);plays('#D4', length, 14);plays('#C4', length,15);plays('#A4', length, 16);plays('#F3', length, 17); keySig(1, true);}
  else if (keyNoteA7 == '/Eb' && typeNoteA7 == 1 && inversionA7 == 1) {
    plays('#Gb3', length, 1);plays('#Bb4', length, 2);plays('#Db4', length, 3);plays('#Eb4', length, 4);plays('#Gb4', length, 5);plays('#Bb5', length, 6);plays('#Db5', length, 7);plays('#Eb5', length, 8);plays('#Gb5', length, 9);plays('#Eb5', length, 10);plays('#Db5', length, 11);plays('#Bb5', length, 12);plays('#Gb4', length, 13);plays('#Eb4', length, 14);plays('#Db4', length, 15);plays('#Bb4', length, 16);plays('#Gb3', length, 17); keySig(6, true);}
  else if (keyNoteA7 == '/E' && typeNoteA7 == 1 && inversionA7 == 1) {
    plays('#G3', length, 1);plays('#B4', length, 2);plays('#D4', length, 3);plays('#E4', length, 4);plays('#G4', length, 5);plays('#B5', length, 6);plays('#D5', length, 7);plays('#E5', length, 8);plays('#G5', length, 9);plays('#E5', length, 10);plays('#D5', length, 11);plays('#B5', length, 12);plays('#G4',length, 13);plays('#E4', length, 14);plays('#D4', length,15);plays('#B4', length, 16);plays('#G3', length, 17); keySig(1, false);}
  else if (keyNoteA7 == '/F' && typeNoteA7 == 1 && inversionA7 == 1) {
    plays('#Ab3', length, 1);plays('#C4', length, 2);plays('#Eb4', length, 3);plays('#F4', length, 4);plays('#Ab4', length, 5);plays('#C5', length, 6);plays('#Eb5', length, 7);plays('#F5', length, 8);plays('#Ab5', length, 9);plays('#F5', length, 10);plays('#Eb5', length, 11);plays('#C5', length, 12);plays('#Ab4', length, 13);plays('#F4', length, 14);plays('#Eb4', length, 15);plays('#C4', length, 16);plays('#Ab3', length, 17); keySig(4, true);}
  else if (keyNoteA7 == '/Gb' && typeNoteA7 == 1 && inversionA7 == 1) {
    plays('#A4', length, 1);plays('#Db4', length, 2);plays('#E4', length, 3);plays('#Gb4', length, 4);plays('#A5', length, 5);plays('#Db5', length, 6);plays('#E5', length, 7);plays('#Gb5', length, 8);plays('#A6', length, 9);plays('#Gb5', length, 10);plays('#E5', length, 11);plays('#Db5', length, 12);plays('#A5', length, 13);plays('#Gb4', length,14);plays('#E4', length, 15);plays('#Db4',length,16);plays('#A4', length, 17); keySig(3, false);} 
  else if (keyNoteA7 == '/G' && typeNoteA7 == 1 && inversionA7 == 1) {
    plays('#Bb4', length, 1);plays('#D4', length, 2);plays('#F4', length, 3);plays('#G4', length, 4);plays('#Bb5', length, 5);plays('#D5', length, 6);plays('#F5', length, 7);plays('#G5', length, 8);plays('#Bb6', length, 9);plays('#G5', length, 10);plays('#F5', length, 11);plays('#D5', length, 12);plays('#Bb5', length, 13);plays('#G4', length, 14);plays('#F4', length, 15);
    plays('#D4', length, 16);plays('#Bb4', length, 17); keySig(2, true);}
  else if (keyNoteA7 == '/Ab' && typeNoteA7 == 1 && inversionA7 == 2) {
    plays('#Eb3', length, 1);plays('#Gb3', length, 2);plays('#Ab3', length, 3);plays('#B4', length, 4);plays('#Eb4', length, 5);plays('#Gb4', length, 6);plays('#Ab4', length, 7);plays('#B5', length, 8);plays('#Eb5', length, 9);plays('#B5', length, 10);plays('#Ab4', length, 11);plays('#Gb4', length, 12);plays('#Eb4', length, 13);plays('#B4', length, 14);plays('#Ab3', length,15);plays('#Gb3', length,16);plays('#Eb3',length, 17); keySig(7, true);}
  else if (keyNoteA7 == '/A' && typeNoteA7 == 1 && inversionA7 == 2) {
    plays('#E3', length, 1);plays('#G3', length, 2);plays('#A4', length, 3);plays('#C4', length, 4);plays('#E4', length, 5);plays('#G4', length, 6);plays('#A5', length, 7);plays('#C5', length, 8);plays('#E5', length, 9);plays('#C5', length,10);plays('#A5', length, 11);plays('#G4', length, 12);plays('#E4', length, 13);plays('#C4',length, 14);plays('#A4', length, 15);plays('#G3', length,16);plays('#E3', length, 17);}  
  else if (keyNoteA7 == '/Bb' && typeNoteA7 == 1 && inversionA7 == 2) {
    plays('#F3', length, 1);plays('#Ab3', length, 2);plays('#Bb4', length, 3);plays('#Db4', length, 4);plays('#F4', length, 5);plays('#Ab4', length, 6);plays('#Bb5', length, 7);plays('#Db5', length, 8);plays('#F5', length, 9);plays('#Db5', length, 10);plays('#Bb5', length, 11);plays('#Ab4', length, 12);plays('#F4', length, 13);plays('#Db4', length, 14);plays('#Bb4', length, 15);plays('#Ab3', length, 16);plays('#F3',length, 17); keySig(5, true);}
  else if (keyNoteA7 == '/B' && typeNoteA7 == 1 && inversionA7 == 2) {
    plays('#Gb3', length, 1);plays('#A4', length, 2);plays('#B4', length, 3);plays('#D4', length, 4);plays('#Gb4', length, 5);plays('#A5', length, 6);plays('#B5', length, 7);plays('#D5', length, 8);plays('#Gb5', length, 9);plays('#D5', length, 10);plays('#B5', length, 11);plays('#A5', length, 12);plays('#Gb4', length,13);plays('#D4',length, 14);plays('#B4', length, 15);plays('#A4',length,16);plays('#Gb3', length, 17); keySig(2, false);}
  else if (keyNoteA7 == '/C' && typeNoteA7 == 1 && inversionA7 == 2) {
    plays('#G3', length, 1);plays('#Bb4', length, 2);plays('#C4', length, 3);plays('#Eb4', length, 4);plays('#G4', length, 5);plays('#Bb5', length, 6);plays('#C5', length, 7);plays('#Eb5', length, 8);plays('#G5', length, 9);plays('#Eb5', length, 10);plays('#C5', length, 11);plays('#Bb5', length, 12);plays('#G4', length, 13);plays('#Eb4', length, 14);plays('#C4', length, 15);plays('#Bb4', length, 16);plays('#G3', length, 17); keySig(3, true);}
  else if (keyNoteA7 == '/Db' && typeNoteA7 == 1 && inversionA7 == 2) {
    plays('#Ab3', length, 1);plays('#B4', length, 2);plays('#Db4', length, 3);plays('#E4', length, 4);plays('#Ab4', length, 5);plays('#B5', length, 6);plays('#Db5', length, 7);plays('#E5', length, 8);plays('#Ab5', length, 9);plays('#E5', length, 10);plays('#Db5', length, 11);plays('#B5', length, 12);plays('#Ab4', length, 13);plays('#E4', length, 14);plays('#Db4', length, 15);plays('#B4', length,16);plays('#Ab3',length, 17); keySig(4, false);}
  else if (keyNoteA7 == '/D' && typeNoteA7 == 1 && inversionA7 == 2) {
    plays('#A4', length, 1);plays('#C4', length, 2);plays('#D4', length, 3);plays('#F4', length, 4);plays('#A5', length, 5);plays('#C5', length, 6);plays('#D5', length, 7);plays('#F5', length, 8);plays('#A6', length, 9);plays('#F5', length, 10);plays('#D5', length, 11);plays('#C5', length, 12);plays('#A5', length, 13);plays('#F4',length, 14);plays('#D4', length, 15);plays('#C4', length,16);plays('#A4', length, 17); keySig(1, true);} 
  else if (keyNoteA7 == '/Eb' && typeNoteA7 == 1 && inversionA7 == 2) {
    plays('#Bb4', length, 1);plays('#Db4', length, 2);plays('#Eb4', length, 3);plays('#Gb4', length, 4);plays('#Bb5', length, 5);plays('#Db5', length, 6);plays('#Eb5', length, 7);plays('#Gb5', length, 8);plays('#Bb6', length, 9);plays('#Gb5', length, 10);plays('#Eb5', length, 11);plays('#Db5', length, 12);plays('#Bb5', length, 13);plays('#Gb4', length, 14);plays('#Eb4', length, 15);plays('#Db4', length, 16);plays('#Bb4', length, 17); keySig(6, true);}
  else if (keyNoteA7 == '/E' && typeNoteA7 == 1 && inversionA7 == 2) {
    plays('#B4', length, 1);plays('#D4', length, 2);plays('#E4', length, 3);plays('#G4', length, 4);plays('#B5', length, 5);plays('#D5', length, 6);plays('#E5', length, 7);plays('#G5', length, 8);plays('#B6', length, 9);plays('#G5', length, 10);plays('#E5', length, 11);plays('#D5', length, 12);plays('#B5', length, 13);plays('#G4',length, 14);plays('#E4', length, 15);plays('#D4', length,16);plays('#B4', length, 17); keySig(1, false);} 
  else if (keyNoteA7 == '/F' && typeNoteA7 == 1 && inversionA7 == 2) {
    plays('#C4', length, 1);plays('#Eb4', length, 2);plays('#F4', length, 3);plays('#Ab4', length, 4);plays('#C5', length, 5);plays('#Eb5', length, 6);plays('#F5', length, 7);plays('#Ab5', length, 8);plays('#C6', length, 9);plays('#Ab5', length, 10);plays('#F5', length, 11);plays('#Eb5', length, 12);plays('#C5', length, 13);plays('#Ab4', length, 14);plays('#F4', length, 15);plays('#Eb4', length, 16);plays('#C4', length, 17); keySig(4, true);}
  else if (keyNoteA7 == '/Gb' && typeNoteA7 == 1 && inversionA7 == 2) {
    plays('#Db4', length, 1);plays('#E4', length, 2);plays('#Gb4', length, 3);plays('#A5', length, 4);plays('#Db5', length, 5);plays('#E5', length, 6);plays('#Gb5', length, 7);plays('#A6', length, 8);plays('#Db6', length, 9);plays('#A6', length, 10);plays('#Gb5', length, 11);plays('#E5', length, 12);plays('#Db5', length, 13);plays('#A5', length, 14);plays('#Gb4', length,15);plays('#E4', length, 16);plays('#Db4',length,17); keySig(3, false);} 
  else if (keyNoteA7 == '/G' && typeNoteA7 == 1 && inversionA7 == 2) {
    plays('#D4', length, 1);plays('#F4', length, 2);plays('#G4', length, 3);plays('#Bb5', length, 4);plays('#D5', length, 5);plays('#F5', length, 6);plays('#G5', length, 7);plays('#Bb6', length, 8);plays('#D6', length, 9);plays('#Bb6', length, 10);plays('#G5', length, 11);plays('#F5', length, 12);plays('#D5', length, 13);plays('#Bb5', length, 14);plays('#G4', length, 15);plays('#F4', length, 16);
    plays('#D4', length, 17); keySig(2, true);}
  else if (keyNoteA7 == '/Ab' && typeNoteA7 == 1 && inversionA7 == 3) {
    plays('#Gb3', length, 1);plays('#Ab3', length, 2);plays('#B4', length, 3);plays('#Eb4', length, 4);plays('#Gb4', length, 5);plays('#Ab4', length, 6);plays('#B5', length, 7);plays('#Eb5', length, 8);plays('#Gb5', length, 9);plays('#Eb5', length, 10);plays('#B5', length, 11);plays('#Ab4', length, 12);plays('#Gb4', length, 13);plays('#Eb4', length, 14);plays('#B4', length, 15);plays('#Ab3', length,16);plays('#Gb3', length,17); keySig(7, true);}
  else if (keyNoteA7 == '/A' && typeNoteA7 == 1 && inversionA7 == 3) {
    plays('#G3', length, 1);plays('#A4', length, 2);plays('#C4', length, 3);plays('#E4', length, 4);plays('#G4', length, 5);plays('#A5', length, 6);plays('#C5', length, 7);plays('#E5', length, 8);plays('#G5', length, 9);plays('#E5', length, 10);plays('#C5', length,11);plays('#A5', length, 12);plays('#G4', length, 13);plays('#E4', length, 14);plays('#C4',length, 15);plays('#A4', length, 16);plays('#G3', length,17);} 
  else if (keyNoteA7 == '/Bb' && typeNoteA7 == 1 && inversionA7 == 3) {
    plays('#Ab3', length, 1);plays('#Bb4', length, 2);plays('#Db4', length, 3);plays('#F4', length, 4);plays('#Ab4', length, 5);plays('#Bb5', length, 6);plays('#Db5', length, 7);plays('#F5', length, 8);plays('#Ab5', length, 9);plays('#F5', length, 10);plays('#Db5', length, 11);plays('#Bb5', length, 12);plays('#Ab4', length, 13);plays('#F4', length, 14);plays('#Db4', length, 15);plays('#Bb4', length, 16);plays('#Ab3', length, 17); keySig(5, true);}
  else if (keyNoteA7 == '/B' && typeNoteA7 == 1 && inversionA7 == 3) {
    plays('#A4', length, 1);plays('#B4', length, 2);plays('#D4', length, 3);plays('#Gb4', length, 4);plays('#A5', length, 5);plays('#B5', length, 6);plays('#D5', length, 7);plays('#Gb5', length, 8);plays('#A6', length, 9);plays('#Gb5', length, 10);plays('#D5', length, 11);plays('#B5', length, 12);plays('#A5', length, 13);plays('#Gb4', length,14);plays('#D4',length, 15);plays('#B4', length, 16);plays('#A4',length,17); keySig(2, false);}
  else if (keyNoteA7 == '/C' && typeNoteA7 == 1 && inversionA7 == 3) {
    plays('#Bb4', length, 1);plays('#C4', length, 2);plays('#Eb4', length, 3);plays('#G4', length, 4);plays('#Bb5', length, 5);plays('#C5', length, 6);plays('#Eb5', length, 7);plays('#G5', length, 8);plays('#Bb6', length, 9);plays('#G5', length, 10);plays('#Eb5', length, 11);plays('#C5', length, 12);plays('#Bb5', length, 13);plays('#G4', length, 14);plays('#Eb4', length, 15);plays('#C4', length, 16);plays('#Bb4', length, 17); keySig(3, true);}
  else if (keyNoteA7 == '/Db' && typeNoteA7 == 1 && inversionA7 == 3) {
    plays('#B4', length, 1);plays('#Db4', length, 2);plays('#E4', length, 3);plays('#Ab4', length, 4);plays('#B5', length, 5);plays('#Db5', length, 6);plays('#E5', length, 7);plays('#Ab5', length, 8);plays('#B6', length, 9);plays('#Ab5', length, 10);plays('#E5', length, 11);plays('#Db5', length, 12);plays('#B5', length, 13);plays('#Ab4', length, 14);plays('#E4', length, 15);plays('#Db4', length, 16);plays('#B4', length,17); keySig(4, false);}
  else if (keyNoteA7 == '/D' && typeNoteA7 == 1 && inversionA7 == 3) {
    plays('#C4', length, 1);plays('#D4', length, 2);plays('#F4', length, 3);plays('#A5', length, 4);plays('#C5', length, 5);plays('#D5', length, 6);plays('#F5', length, 7);plays('#A6', length, 8);plays('#C6', length, 9);plays('#A6', length, 10);plays('#F5', length, 11);plays('#D5', length, 12);plays('#C5', length, 13);plays('#A5', length, 14);plays('#F4',length, 15);plays('#D4', length, 16);plays('#C4', length,17); keySig(1, true);} 
  else if (keyNoteA7 == '/Eb' && typeNoteA7 == 1 && inversionA7 == 3) {
    plays('#Db4', length, 1);plays('#Eb4', length, 2);plays('#Gb4', length, 3);plays('#Bb5', length, 4);plays('#Db5', length, 5);plays('#Eb5', length, 6);plays('#Gb5', length, 7);plays('#Bb6', length, 8);plays('#Db6', length, 9);plays('#Bb6', length, 10);plays('#Gb5', length, 11);plays('#Eb5', length, 12);plays('#Db5', length, 13);plays('#Bb5', length, 14);plays('#Gb4', length, 15);plays('#Eb4', length, 16);plays('#Db4', length, 17); keySig(6, true);} 
  else if (keyNoteA7 == '/E' && typeNoteA7 == 1 && inversionA7 == 3) {
    plays('#D4', length, 1);plays('#E4', length, 2);plays('#G4', length, 3);plays('#B5', length, 4);plays('#D5', length, 5);plays('#E5', length, 6);plays('#G5', length, 7);plays('#B6', length, 8);plays('#D6', length, 9);plays('#B6', length, 10);plays('#G5', length, 11);plays('#E5', length, 12);plays('#D5', length, 13);plays('#B5', length, 14);plays('#G4',length, 15);plays('#E4', length, 16);plays('#D4', length,17); keySig(1, false);}
  else if (keyNoteA7 == '/F' && typeNoteA7 == 1 && inversionA7 == 3) {
    plays('#Eb4', length, 1);plays('#F4', length, 2);plays('#Ab4', length, 3);plays('#C5', length, 4);plays('#Eb5', length, 5);plays('#F5', length, 6);plays('#Ab5', length, 7);plays('#C6', length, 8);plays('#Eb6', length, 9);plays('#C6', length, 10);plays('#Ab5', length, 11);plays('#F5', length, 12);plays('#Eb5', length, 13);plays('#C5', length, 14);plays('#Ab4', length, 15);plays('#F4', length, 16);plays('#Eb4', length, 17); keySig(4, true);}
  else if (keyNoteA7 == '/Gb' && typeNoteA7 == 1 && inversionA7 == 3) {
    plays('#E4', length, 1);plays('#Gb4', length, 2);plays('#A5', length, 3);plays('#Db5', length, 4);plays('#E5', length, 5);plays('#Gb5', length, 6);plays('#A6', length, 7);plays('#Db6', length, 8);plays('#E6', length, 9);plays('#Db6', length, 10);plays('#A6', length, 11);plays('#Gb5', length, 12);plays('#E5', length, 13);plays('#Db5', length, 14);plays('#A5', length, 15);plays('#Gb4', length,16);plays('#E4', length, 17); keySig(3, false);}
  else if (keyNoteA7 == '/G' && typeNoteA7 == 1 && inversionA7 == 3) {
    plays('#F4', length, 1);plays('#G4', length, 2);plays('#Bb5', length, 3);plays('#D5', length, 4);plays('#F5', length, 5);plays('#G5', length, 6);plays('#Bb6', length, 7);plays('#D6', length, 8);plays('#F6', length, 9);plays('#D6', length, 10);plays('#Bb6', length, 11);plays('#G5', length, 12);plays('#F5', length, 13);plays('#D5', length, 14);plays('#Bb5', length, 15);plays('#G4', length, 16);plays('#F4', length, 17); keySig(2, true);}
  else if (keyNoteA7 == '/Ab' && typeNoteA7 == 2 && inversionA7 == 0) {
    plays('#Ab2', length, 1);plays('#C3', length, 2);plays('#Eb3', length, 3);plays('#Gb3', length, 4);plays('#Ab3', length, 5);plays('#C4', length, 6);plays('#Eb4', length, 7);plays('#Gb4', length, 8);plays('#Ab4', length, 9);plays('#Gb4', length, 10);plays('#Eb4', length, 11);plays('#C4', length, 12);plays('#Ab3', length, 13);plays('#Gb3', length,14);plays('#Eb3',length, 15);plays('#C3', length, 16);plays('#Ab2', length, 17); keySig(5, true)} 
  else if (keyNoteA7 == '/A' && typeNoteA7 == 2 && inversionA7 == 0) {
    plays('#A3', length, 1);plays('#Db3', length, 2);plays('#E3', length, 3);plays('#G3', length, 4);plays('#A4', length, 5);plays('#Db4', length, 6);plays('#E4', length, 7);plays('#G4', length, 8);plays('#A5', length, 9);plays('#G4', length, 10);plays('#E4', length, 11);plays('#Db4',length, 12);plays('#A4', length, 13);plays('#G3', length,14);plays('#E3', length, 15);plays('#Db3', length, 16);plays('#A3', length, 17); keySig(2, false)}
  else if (keyNoteA7 == '/Bb' && typeNoteA7 == 2 && inversionA7 == 0) {
    plays('#Bb3', length, 1);plays('#D3', length, 2);plays('#F3', length, 3);plays('#Ab3', length, 4);plays('#Bb4', length, 5);plays('#D4', length, 6);plays('#F4', length, 7);plays('#Ab4', length, 8);plays('#Bb5', length, 9);plays('#Ab4', length, 10);plays('#F4', length, 11);plays('#D4', length, 12);plays('#Bb4', length, 13);plays('#Ab3', length, 14);plays('#F3',length, 15);plays('#D3', length, 16);plays('#Bb3', length, 17); keySig(3, true)}
  else if (keyNoteA7 == '/B' && typeNoteA7 == 2 && inversionA7 == 0) {
    plays('#B3', length, 1);plays('#Eb3', length, 2);plays('#Gb3', length, 3);plays('#A4', length, 4);plays('#B4', length, 5);plays('#Eb4', length, 6);plays('#Gb4', length, 7);plays('#A5', length, 8);plays('#B5', length, 9);plays('#A5', length, 10);plays('#Gb4', length,11);plays('#Eb4',length, 12);plays('#B4', length, 13);plays('#A4',length,14);plays('#Gb3', length, 15);plays('#Eb3', length, 16);plays('#B3', length, 17); keySig(4, false)}
  else if (keyNoteA7 == '/C' && typeNoteA7 == 2 && inversionA7 == 0) {
    plays('#C3', length, 1);plays('#E3', length, 2);plays('#G3', length, 3);plays('#Bb4', length, 4);plays('#C4', length, 5);plays('#E4', length, 6);plays('#G4', length, 7);plays('#Bb5', length, 8);plays('#C5', length, 9);plays('#Bb5', length, 10);plays('#G4', length, 11);plays('#E4', length, 12);plays('#C4', length, 13);plays('#Bb4', length, 14);plays('#G3', length, 15);plays('#E3', length, 16);plays('#C3', length, 17); keySig(1, true);}
  else if (keyNoteA7 == '/Db' && typeNoteA7 == 2 && inversionA7 == 0) {
    plays('#Db3', length, 1);plays('#F3', length, 2);plays('#Ab3', length, 3);plays('#B4', length, 4);plays('#Db4', length, 5);plays('#F4', length, 6);plays('#Ab4', length, 7);plays('#B5', length, 8);plays('#Db5', length, 9);plays('#B5', length, 10);plays('#Ab4', length, 11);plays('#F4', length, 12);plays('#Db4', length, 13);plays('#B4', length,14);plays('#Ab3',length, 15);plays('#F3', length, 16);plays('#Db3', length, 17); keySig(6, true)}
  else if (keyNoteA7 == '/D' && typeNoteA7 == 2 && inversionA7 == 0) {
    plays('#D3', length, 1);plays('#Gb3', length, 2);plays('#A4', length, 3);plays('#C4', length, 4);plays('#D4', length, 5);plays('#Gb4', length, 6);plays('#A5', length, 7);plays('#C5', length, 8);plays('#D5', length, 9);plays('#C5', length, 10);plays('#A5', length, 11);plays('#Gb4',length, 12);plays('#D4', length, 13);plays('#C4', length,14);plays('#A4', length, 15);plays('#Gb3', length, 16);plays('#D3', length, 17); keySig(1, false)}
  else if (keyNoteA7 == '/Eb' && typeNoteA7 == 2 && inversionA7 == 0) {
    plays('#Eb3', length, 1);plays('#G3', length, 2);plays('#Bb4', length, 3);plays('#Db4', length, 4);plays('#Eb4', length, 5);plays('#G4', length, 6);plays('#Bb5', length, 7);plays('#Db5', length, 8);plays('#Eb5', length, 9);plays('#Db5', length, 10);plays('#Bb5', length, 11);plays('#G4', length, 12);plays('#Eb4', length, 13);plays('#Db4', length, 14);plays('#Bb4', length, 15);plays('#G3', length, 16);plays('#Eb3', length, 17); keySig(4, true)}
  else if (keyNoteA7 == '/E' && typeNoteA7 == 2 && inversionA7 == 0) {
    plays('#E3', length, 1);plays('#Ab3', length, 2);plays('#B4', length, 3);plays('#D4', length, 4);plays('#E4', length, 5);plays('#Ab4', length, 6);plays('#B5', length, 7);plays('#D5', length, 8);plays('#E5', length, 9);plays('#D5', length, 10);plays('#B5', length, 11);plays('#Ab4',length, 12);plays('#E4', length, 13);plays('#D4', length,14);plays('#B4', length, 15);plays('#Ab3', length, 16);plays('#E3', length, 17); keySig(3, false)}
  else if (keyNoteA7 == '/F' && typeNoteA7 == 2 && inversionA7 == 0) {
    plays('#F3', length, 1);plays('#A4', length, 2);plays('#C4', length, 3);plays('#Eb4', length, 4);plays('#F4', length, 5);plays('#A5', length, 6);plays('#C5', length, 7);plays('#Eb5', length, 8);plays('#F5', length, 9);plays('#Eb5', length, 10);plays('#C5', length, 11);plays('#A5', length, 12);plays('#F4', length, 13);plays('#Eb4', length, 14);plays('#C4', length, 15);plays('#A4', length, 16);plays('#F3', length, 17); keySig(2, true)}
  else if (keyNoteA7 == '/Gb' && typeNoteA7 == 2 && inversionA7 == 0) {
    plays('#Gb3', length, 1);plays('#Bb4', length, 2);plays('#Db4', length, 3);plays('#E4', length, 4);plays('#Gb4', length, 5);plays('#Bb5', length, 6);plays('#Db5', length, 7);plays('#E5', length, 8);plays('#Gb5', length, 9);plays('#E5', length, 10);plays('#Db5', length, 11);plays('#Bb5', length, 12);plays('#Gb4', length,13);plays('#E4', length, 14);plays('#Db4',length,15);plays('#Bb4', length, 16);plays('#Gb3', length, 17); keySig(5, false)}
  else if (keyNoteA7 == '/G' && typeNoteA7 == 2 && inversionA7 == 0) {
    plays('#G3', length, 1);plays('#B4', length, 2);plays('#D4', length, 3);plays('#F4', length, 4);plays('#G4', length, 5);plays('#B5', length, 6);plays('#D5', length, 7);plays('#F5', length, 8);plays('#G5', length, 9);plays('#F5', length, 10);plays('#D5', length, 11);plays('#B5', length, 12);plays('#G4', length, 13);plays('#F4', length, 14);
    plays('#D4', length, 15);plays('#B4', length, 16);plays('#G3', length, 17);}
  else if (keyNoteA7 == '/Ab' && typeNoteA7 == 2 && inversionA7 == 1) {
    plays('#C3', length, 1);plays('#Eb3', length, 2);plays('#Gb3', length, 3);plays('#Ab3', length, 4);plays('#C4', length, 5);plays('#Eb4', length, 6);plays('#Gb4', length, 7);plays('#Ab4', length, 8);plays('#C5', length, 9);plays('#Ab4', length, 10);plays('#Gb4', length, 11);plays('#Eb4', length, 12);plays('#C4', length, 13);plays('#Ab3', length,14);plays('#Gb3', length,15);plays('#Eb3',length, 16);plays('#C3', length, 17);keySig(5, true)}
  else if (keyNoteA7 == '/A' && typeNoteA7 == 2 && inversionA7 == 1) {
    plays('#Db3', length, 1);plays('#E3', length, 2);plays('#G3', length, 3);plays('#A4', length, 4);plays('#Db4', length, 5);plays('#E4', length, 6);plays('#G4', length, 7);plays('#A5', length, 8);plays('#Db5', length,9);plays('#A5', length, 10);plays('#G4', length, 11);plays('#E4', length, 12);plays('#Db4',length, 13);plays('#A4', length, 14);plays('#G3', length,15);plays('#E3', length, 16);plays('#Db3', length, 17); keySig(2, false)}
  else if (keyNoteA7 == '/Bb' && typeNoteA7 == 2 && inversionA7 == 1) {
    plays('#D3', length, 1);plays('#F3', length, 2);plays('#Ab3', length, 3);plays('#Bb4', length, 4);plays('#D4', length, 5);plays('#F4', length, 6);plays('#Ab4', length, 7);plays('#Bb5', length, 8);plays('#D5', length, 9);plays('#Bb5', length, 10);plays('#Ab4', length, 11);plays('#F4', length, 12);plays('#D4', length, 13);plays('#Bb4', length, 14);plays('#Ab3', length, 15);plays('#F3',length, 16);plays('#D3', length, 17); keySig(3, true)}
  else if (keyNoteA7 == '/B' && typeNoteA7 == 2 && inversionA7 == 1) {
    plays('#Eb3', length, 1);plays('#Gb3', length, 2);plays('#A4', length, 3);plays('#B4', length, 4);plays('#Eb4', length, 5);plays('#Gb4', length, 6);plays('#A5', length, 7);plays('#B5', length, 8);plays('#Eb5', length, 9);plays('#B5', length, 10);plays('#A5', length, 11);plays('#Gb4', length,12);plays('#Eb4',length, 13);plays('#B4', length, 14);plays('#A4',length,15);plays('#Gb3', length, 16);plays('#Eb3', length, 17); keySig(4, false)}
  else if (keyNoteA7 == '/C' && typeNoteA7 == 2 && inversionA7 == 1) {
    plays('#E3', length, 1);plays('#G3', length, 2);plays('#Bb4', length, 3);plays('#C4', length, 4);plays('#E4', length, 5);plays('#G4', length, 6);plays('#Bb5', length, 7);plays('#C5', length, 8);plays('#E5', length, 9);plays('#C5', length, 10);plays('#Bb5', length, 11);plays('#G4', length, 12);plays('#E4', length, 13);plays('#C4', length, 14);plays('#Bb4', length, 15);plays('#G3', length, 16);plays('#E3', length, 17); keySig(1, true);}
  else if (keyNoteA7 == '/Db' && typeNoteA7 == 2 && inversionA7 == 1) {
    plays('#F3', length, 1);plays('#Ab3', length, 2);plays('#B4', length, 3);plays('#Db4', length, 4);plays('#F4', length, 5);plays('#Ab4', length, 6);plays('#B5', length, 7);plays('#Db5', length, 8);plays('#F5', length, 9);plays('#Db5', length, 10);plays('#B5', length, 11);plays('#Ab4', length, 12);plays('#F4', length, 13);plays('#Db4', length, 14);plays('#B4', length,15);plays('#Ab3',length, 16);plays('#F3', length, 17); keySig(6, true)}
  else if (keyNoteA7 == '/D' && typeNoteA7 == 2 && inversionA7 == 1) {
    plays('#Gb3', length, 1);plays('#A4', length, 2);plays('#C4', length, 3);plays('#D4', length, 4);plays('#Gb4', length, 5);plays('#A5', length, 6);plays('#C5', length, 7);plays('#D5', length, 8);plays('#Gb5', length, 9);plays('#D5', length, 10);plays('#C5', length, 11);plays('#A5', length, 12);plays('#Gb4',length, 13);plays('#D4', length, 14);plays('#C4', length,15);plays('#A4', length, 16);plays('#Gb3', length, 17); keySig(1, false)}
  else if (keyNoteA7 == '/Eb' && typeNoteA7 == 2 && inversionA7 == 1) {
    plays('#G3', length, 1);plays('#Bb4', length, 2);plays('#Db4', length, 3);plays('#Eb4', length, 4);plays('#G4', length, 5);plays('#Bb5', length, 6);plays('#Db5', length, 7);plays('#Eb5', length, 8);plays('#G5', length, 9);plays('#Eb5', length, 10);plays('#Db5', length, 11);plays('#Bb5', length, 12);plays('#G4', length, 13);plays('#Eb4', length, 14);plays('#Db4', length, 15);plays('#Bb4', length, 16);plays('#G3', length, 17); keySig(4, true)}
  else if (keyNoteA7 == '/E' && typeNoteA7 == 2 && inversionA7 == 1) {
    plays('#Ab3', length, 1);plays('#B4', length, 2);plays('#D4', length, 3);plays('#E4', length, 4);plays('#Ab4', length, 5);plays('#B5', length, 6);plays('#D5', length, 7);plays('#E5', length, 8);plays('#Ab5', length, 9);plays('#E5', length, 10);plays('#D5', length, 11);plays('#B5', length, 12);plays('#Ab4',length, 13);plays('#E4', length, 14);plays('#D4', length,15);plays('#B4', length, 16);plays('#Ab3', length, 17); keySig(3, false)}
  else if (keyNoteA7 == '/F' && typeNoteA7 == 2 && inversionA7 == 1) {
    plays('#A4', length, 1);plays('#C4', length, 2);plays('#Eb4', length, 3);plays('#F4', length, 4);plays('#A5', length, 5);plays('#C5', length, 6);plays('#Eb5', length, 7);plays('#F5', length, 8);plays('#A6', length, 9);plays('#F5', length, 10);plays('#Eb5', length, 11);plays('#C5', length, 12);plays('#A5', length, 13);plays('#F4', length, 14);plays('#Eb4', length, 15);plays('#C4', length, 16);plays('#A4', length, 17); keySig(2, true)}
  else if (keyNoteA7 == '/Gb' && typeNoteA7 == 2 && inversionA7 == 1) {
    plays('#Bb4', length, 1);plays('#Db4', length, 2);plays('#E4', length, 3);plays('#Gb4', length, 4);plays('#Bb5', length, 5);plays('#Db5', length, 6);plays('#E5', length, 7);plays('#Gb5', length, 8);plays('#Bb6', length, 9);plays('#Gb5', length, 10);plays('#E5', length, 11);plays('#Db5', length, 12);plays('#Bb5', length, 13);plays('#Gb4', length,14);plays('#E4', length, 15);plays('#Db4',length,16);plays('#Bb4', length, 17); keySig(5, false)} 
  else if (keyNoteA7 == '/G' && typeNoteA7 == 2 && inversionA7 == 1) {
    plays('#B4', length, 1);plays('#D4', length, 2);plays('#F4', length, 3);plays('#G4', length, 4);plays('#B5', length, 5);plays('#D5', length, 6);plays('#F5', length, 7);plays('#G5', length, 8);plays('#B6', length, 9);plays('#G5', length, 10);plays('#F5', length, 11);plays('#D5', length, 12);plays('#B5', length, 13);plays('#G4', length, 14);plays('#F4', length, 15);
    plays('#D4', length, 16);plays('#B4', length, 17);}
  else if (keyNoteA7 == '/Ab' && typeNoteA7 == 2 && inversionA7 == 2) {
    plays('#Eb3', length, 1);plays('#Gb3', length, 2);plays('#Ab3', length, 3);plays('#C4', length, 4);plays('#Eb4', length, 5);plays('#Gb4', length, 6);plays('#Ab4', length, 7);plays('#C5', length, 8);plays('#Eb5', length, 9);plays('#C5', length, 10);plays('#Ab4', length, 11);plays('#Gb4', length, 12);plays('#Eb4', length, 13);plays('#C4', length, 14);plays('#Ab3', length,15);plays('#Gb3', length,16);plays('#Eb3',length, 17); keySig(5, true)}
  else if (keyNoteA7 == '/A' && typeNoteA7 == 2 && inversionA7 == 2) {
    plays('#E3', length, 1);plays('#G3', length, 2);plays('#A4', length, 3);plays('#Db4', length, 4);plays('#E4', length, 5);plays('#G4', length, 6);plays('#A5', length, 7);plays('#Db5', length, 8);plays('#E5', length, 9);plays('#Db5', length,10);plays('#A5', length, 11);plays('#G4', length, 12);plays('#E4', length, 13);plays('#Db4',length, 14);plays('#A4', length, 15);plays('#G3', length,16);plays('#E3', length, 17); keySig(2, false)}  
  else if (keyNoteA7 == '/Bb' && typeNoteA7 == 2 && inversionA7 == 2) {
    plays('#F3', length, 1);plays('#Ab3', length, 2);plays('#Bb4', length, 3);plays('#D4', length, 4);plays('#F4', length, 5);plays('#Ab4', length, 6);plays('#Bb5', length, 7);plays('#D5', length, 8);plays('#F5', length, 9);plays('#D5', length, 10);plays('#Bb5', length, 11);plays('#Ab4', length, 12);plays('#F4', length, 13);plays('#D4', length, 14);plays('#Bb4', length, 15);plays('#Ab3', length, 16);plays('#F3',length, 17); keySig(3, true)}
  else if (keyNoteA7 == '/B' && typeNoteA7 == 2 && inversionA7 == 2) {
    plays('#Gb3', length, 1);plays('#A4', length, 2);plays('#B4', length, 3);plays('#Eb4', length, 4);plays('#Gb4', length, 5);plays('#A5', length, 6);plays('#B5', length, 7);plays('#Eb5', length, 8);plays('#Gb5', length, 9);plays('#Eb5', length, 10);plays('#B5', length, 11);plays('#A5', length, 12);plays('#Gb4', length,13);plays('#Eb4',length, 14);plays('#B4', length, 15);plays('#A4',length,16);plays('#Gb3', length, 17); keySig(4, false)}
  else if (keyNoteA7 == '/C' && typeNoteA7 == 2 && inversionA7 == 2) {
    plays('#G3', length, 1);plays('#Bb4', length, 2);plays('#C4', length, 3);plays('#E4', length, 4);plays('#G4', length, 5);plays('#Bb5', length, 6);plays('#C5', length, 7);plays('#E5', length, 8);plays('#G5', length, 9);plays('#E5', length, 10);plays('#C5', length, 11);plays('#Bb5', length, 12);plays('#G4', length, 13);plays('#E4', length, 14);plays('#C4', length, 15);plays('#Bb4', length, 16);plays('#G3', length, 17); keySig(1, true);}
  else if (keyNoteA7 == '/Db' && typeNoteA7 == 2 && inversionA7 == 2) {
    plays('#Ab3', length, 1);plays('#B4', length, 2);plays('#Db4', length, 3);plays('#F4', length, 4);plays('#Ab4', length, 5);plays('#B5', length, 6);plays('#Db5', length, 7);plays('#F5', length, 8);plays('#Ab5', length, 9);plays('#F5', length, 10);plays('#Db5', length, 11);plays('#B5', length, 12);plays('#Ab4', length, 13);plays('#F4', length, 14);plays('#Db4', length, 15);plays('#B4', length,16);plays('#Ab3',length, 17); keySig(6, true)}
  else if (keyNoteA7 == '/D' && typeNoteA7 == 2 && inversionA7 == 2) {
    plays('#A4', length, 1);plays('#C4', length, 2);plays('#D4', length, 3);plays('#Gb4', length, 4);plays('#A5', length, 5);plays('#C5', length, 6);plays('#D5', length, 7);plays('#Gb5', length, 8);plays('#A6', length, 9);plays('#Gb5', length, 10);plays('#D5', length, 11);plays('#C5', length, 12);plays('#A5', length, 13);plays('#Gb4',length, 14);plays('#D4', length, 15);plays('#C4', length,16);plays('#A4', length, 17); keySig(1, false)} 
  else if (keyNoteA7 == '/Eb' && typeNoteA7 == 2 && inversionA7 == 2) {
    plays('#Bb4', length, 1);plays('#Db4', length, 2);plays('#Eb4', length, 3);plays('#G4', length, 4);plays('#Bb5', length, 5);plays('#Db5', length, 6);plays('#Eb5', length, 7);plays('#G5', length, 8);plays('#Bb6', length, 9);plays('#G5', length, 10);plays('#Eb5', length, 11);plays('#Db5', length, 12);plays('#Bb5', length, 13);plays('#G4', length, 14);plays('#Eb4', length, 15);plays('#Db4', length, 16);plays('#Bb4', length, 17); keySig(4, true)}
  else if (keyNoteA7 == '/E' && typeNoteA7 == 2 && inversionA7 == 2) {
    plays('#B4', length, 1);plays('#D4', length, 2);plays('#E4', length, 3);plays('#Ab4', length, 4);plays('#B5', length, 5);plays('#D5', length, 6);plays('#E5', length, 7);plays('#Ab5', length, 8);plays('#B6', length, 9);plays('#Ab5', length, 10);plays('#E5', length, 11);plays('#D5', length, 12);plays('#B5', length, 13);plays('#Ab4',length, 14);plays('#E4', length, 15);plays('#D4', length,16);plays('#B4', length, 17); keySig(3, false)} 
  else if (keyNoteA7 == '/F' && typeNoteA7 == 2 && inversionA7 == 2) {
    plays('#C4', length, 1);plays('#Eb4', length, 2);plays('#F4', length, 3);plays('#A5', length, 4);plays('#C5', length, 5);plays('#Eb5', length, 6);plays('#F5', length, 7);plays('#A6', length, 8);plays('#C6', length, 9);plays('#A6', length, 10);plays('#F5', length, 11);plays('#Eb5', length, 12);plays('#C5', length, 13);plays('#A5', length, 14);plays('#F4', length, 15);plays('#Eb4', length, 16);plays('#C4', length, 17); keySig(2, true)}
  else if (keyNoteA7 == '/Gb' && typeNoteA7 == 2 && inversionA7 == 2) {
    plays('#Db4', length, 1);plays('#E4', length, 2);plays('#Gb4', length, 3);plays('#Bb5', length, 4);plays('#Db5', length, 5);plays('#E5', length, 6);plays('#Gb5', length, 7);plays('#Bb6', length, 8);plays('#Db6', length, 9);plays('#Bb6', length, 10);plays('#Gb5', length, 11);plays('#E5', length, 12);plays('#Db5', length, 13);plays('#Bb5', length, 14);plays('#Gb4', length,15);plays('#E4', length, 16);plays('#Db4',length,17); keySig(5, false)} 
  else if (keyNoteA7 == '/G' && typeNoteA7 == 2 && inversionA7 == 2) {
    plays('#D4', length, 1);plays('#F4', length, 2);plays('#G4', length, 3);plays('#B5', length, 4);plays('#D5', length, 5);plays('#F5', length, 6);plays('#G5', length, 7);plays('#B6', length, 8);plays('#D6', length, 9);plays('#B6', length, 10);plays('#G5', length, 11);plays('#F5', length, 12);plays('#D5', length, 13);plays('#B5', length, 14);plays('#G4', length, 15);plays('#F4', length, 16);
    plays('#D4', length, 17);}
  else if (keyNoteA7 == '/Ab' && typeNoteA7 == 2 && inversionA7 == 3) {
    plays('#Gb3', length, 1);plays('#Ab3', length, 2);plays('#C4', length, 3);plays('#Eb4', length, 4);plays('#Gb4', length, 5);plays('#Ab4', length, 6);plays('#C5', length, 7);plays('#Eb5', length, 8);plays('#Gb5', length, 9);plays('#Eb5', length, 10);plays('#C5', length, 11);plays('#Ab4', length, 12);plays('#Gb4', length, 13);plays('#Eb4', length, 14);plays('#C4', length, 15);plays('#Ab3', length,16);plays('#Gb3', length,17); keySig(5, true)}
  else if (keyNoteA7 == '/A' && typeNoteA7 == 2 && inversionA7 == 3) {
    plays('#G3', length, 1);plays('#A4', length, 2);plays('#Db4', length, 3);plays('#E4', length, 4);plays('#G4', length, 5);plays('#A5', length, 6);plays('#Db5', length, 7);plays('#E5', length, 8);plays('#G5', length, 9);plays('#E5', length, 10);plays('#Db5', length,11);plays('#A5', length, 12);plays('#G4', length, 13);plays('#E4', length, 14);plays('#Db4',length, 15);plays('#A4', length, 16);plays('#G3', length,17); keySig(2, false)} 
  else if (keyNoteA7 == '/Bb' && typeNoteA7 == 2 && inversionA7 == 3) {
    plays('#Ab3', length, 1);plays('#Bb4', length, 2);plays('#D4', length, 3);plays('#F4', length, 4);plays('#Ab4', length, 5);plays('#Bb5', length, 6);plays('#D5', length, 7);plays('#F5', length, 8);plays('#Ab5', length, 9);plays('#F5', length, 10);plays('#D5', length, 11);plays('#Bb5', length, 12);plays('#Ab4', length, 13);plays('#F4', length, 14);plays('#D4', length, 15);plays('#Bb4', length, 16);plays('#Ab3', length, 17); keySig(3, true)}
  else if (keyNoteA7 == '/B' && typeNoteA7 == 2 && inversionA7 == 3) {
    plays('#A4', length, 1);plays('#B4', length, 2);plays('#Eb4', length, 3);plays('#Gb4', length, 4);plays('#A5', length, 5);plays('#B5', length, 6);plays('#Eb5', length, 7);plays('#Gb5', length, 8);plays('#A6', length, 9);plays('#Gb5', length, 10);plays('#Eb5', length, 11);plays('#B5', length, 12);plays('#A5', length, 13);plays('#Gb4', length,14);plays('#Eb4',length, 15);plays('#B4', length, 16);plays('#A4',length,17); keySig(4, false)}
  else if (keyNoteA7 == '/C' && typeNoteA7 == 2 && inversionA7 == 3) {
    plays('#Bb4', length, 1);plays('#C4', length, 2);plays('#E4', length, 3);plays('#G4', length, 4);plays('#Bb5', length, 5);plays('#C5', length, 6);plays('#E5', length, 7);plays('#G5', length, 8);plays('#Bb6', length, 9);plays('#G5', length, 10);plays('#E5', length, 11);plays('#C5', length, 12);plays('#Bb5', length, 13);plays('#G4', length, 14);plays('#E4', length, 15);plays('#C4', length, 16);plays('#Bb4', length, 17); keySig(1, true);}
  else if (keyNoteA7 == '/Db' && typeNoteA7 == 2 && inversionA7 == 3) {
    plays('#B4', length, 1);plays('#Db4', length, 2);plays('#F4', length, 3);plays('#Ab4', length, 4);plays('#B5', length, 5);plays('#Db5', length, 6);plays('#F5', length, 7);plays('#Ab5', length, 8);plays('#B6', length, 9);plays('#Ab5', length, 10);plays('#F5', length, 11);plays('#Db5', length, 12);plays('#B5', length, 13);plays('#Ab4', length, 14);plays('#F4', length, 15);plays('#Db4', length, 16);plays('#B4', length,17); keySig(6, true)}
  else if (keyNoteA7 == '/D' && typeNoteA7 == 2 && inversionA7 == 3) {
    plays('#C4', length, 1);plays('#D4', length, 2);plays('#Gb4', length, 3);plays('#A5', length, 4);plays('#C5', length, 5);plays('#D5', length, 6);plays('#Gb5', length, 7);plays('#A6', length, 8);plays('#C6', length, 9);plays('#A6', length, 10);plays('#Gb5', length, 11);plays('#D5', length, 12);plays('#C5', length, 13);plays('#A5', length, 14);plays('#Gb4',length, 15);plays('#D4', length, 16);plays('#C4', length,17); keySig(1, false)} 
  else if (keyNoteA7 == '/Eb' && typeNoteA7 == 2 && inversionA7 == 3) {
    plays('#Db4', length, 1);plays('#Eb4', length, 2);plays('#G4', length, 3);plays('#Bb5', length, 4);plays('#Db5', length, 5);plays('#Eb5', length, 6);plays('#G5', length, 7);plays('#Bb6', length, 8);plays('#Db6', length, 9);plays('#Bb6', length, 10);plays('#G5', length, 11);plays('#Eb5', length, 12);plays('#Db5', length, 13);plays('#Bb5', length, 14);plays('#G4', length, 15);plays('#Eb4', length, 16);plays('#Db4', length, 17); keySig(4, true)} 
  else if (keyNoteA7 == '/E' && typeNoteA7 == 2 && inversionA7 == 3) {
    plays('#D4', length, 1);plays('#E4', length, 2);plays('#Ab4', length, 3);plays('#B5', length, 4);plays('#D5', length, 5);plays('#E5', length, 6);plays('#Ab5', length, 7);plays('#B6', length, 8);plays('#D6', length, 9);plays('#B6', length, 10);plays('#Ab5', length, 11);plays('#E5', length, 12);plays('#D5', length, 13);plays('#B5', length, 14);plays('#Ab4',length, 15);plays('#E4', length, 16);plays('#D4', length,17); keySig(3, false)}
  else if (keyNoteA7 == '/F' && typeNoteA7 == 2 && inversionA7 == 3) {
    plays('#Eb4', length, 1);plays('#F4', length, 2);plays('#A5', length, 3);plays('#C5', length, 4);plays('#Eb5', length, 5);plays('#F5', length, 6);plays('#A6', length, 7);plays('#C6', length, 8);plays('#Eb6', length, 9);plays('#C6', length, 10);plays('#A6', length, 11);plays('#F5', length, 12);plays('#Eb5', length, 13);plays('#C5', length, 14);plays('#A5', length, 15);plays('#F4', length, 16);plays('#Eb4', length, 17); keySig(2, true)}
  else if (keyNoteA7 == '/Gb' && typeNoteA7 == 2 && inversionA7 == 3) {
    plays('#E4', length, 1);plays('#Gb4', length, 2);plays('#Bb5', length, 3);plays('#Db5', length, 4);plays('#E5', length, 5);plays('#Gb5', length, 6);plays('#Bb6', length, 7);plays('#Db6', length, 8);plays('#E6', length, 9);plays('#Db6', length, 10);plays('#Bb6', length, 11);plays('#Gb5', length, 12);plays('#E5', length, 13);plays('#Db5', length, 14);plays('#Bb5', length, 15);plays('#Gb4', length,16);plays('#E4', length, 17); keySig(5, false)}
  else if (keyNoteA7 == '/G' && typeNoteA7 == 2 && inversionA7 == 3) {
    plays('#F4', length, 1);plays('#G4', length, 2);plays('#B5', length, 3);plays('#D5', length, 4);plays('#F5', length, 5);plays('#G5', length, 6);plays('#B6', length, 7);plays('#D6', length, 8);plays('#F6', length, 9);plays('#D6', length, 10);plays('#B6', length, 11);plays('#G5', length, 12);plays('#F5', length, 13);plays('#D5', length, 14);plays('#B5', length, 15);plays('#G4', length, 16);plays('#F4', length, 17);}  
  else {
    document.getElementById("grand").style.visibility = "hidden";
    document.getElementById('Speed').textContent = '';
    window.alert("Please enter all fields")
  }
  resetLedges();
}

// Other button
var keyNoteOther;
var typeNoteOther;

let selectionOther = document.getElementById('otherDrop');
selectionOther.addEventListener('change', () => {
    keyNoteOther = selectionOther.options[selectionOther.selectedIndex].value;
});

function thirds() {
  typeNoteOther = 0;
  document.getElementById('3rds').style.backgroundColor = 'limegreen';
  document.getElementById('6ths').style.backgroundColor = '#f3f0f3';
}
function sixths() {
  typeNoteOther = 1;
  document.getElementById('6ths').style.backgroundColor = 'limegreen';
  document.getElementById('3rds').style.backgroundColor = '#f3f0f3';
}

// Scales in 3rds and 6ths
function scales36() {
  reset();
  var length36 = document.getElementById('rangeValue36').innerText;
  var length = 60/length36 * 1000;
  numAccident = 0;
  if (typeNoteOther == 0 && keyNoteOther == '/Ab') {
    plays2('#Ab3', length, 1);plays2('#Bb4', length, 2);plays2('#C4', length, 3);plays2('#Db4', length, 4);plays2('#Eb4', length, 5);
    plays2('#F4', length, 6);plays2('#G4', length, 7);plays2('#Ab4', length, 8);plays2('#G4', length, 9);plays2('#F4', length, 10);
    plays2('#Eb4', length, 11);plays2('#Db4', length, 12);plays2('#C4', length, 13);plays2('#Bb4', length, 14);plays2('#Ab3', length, 15);
    plays2('#C4', length, 1);plays2('#Db4', length, 2);plays2('#Eb4', length, 3);plays2('#F4', length, 4);plays2('#G4', length, 5);
    plays2('#Ab4', length, 6);plays2('#Bb5', length, 7);plays2('#C5', length, 8);plays2('#Bb5', length, 9);plays2('#Ab4', length, 10);
    plays2('#G4', length, 11);plays2('#F4', length, 12);plays2('#Eb4', length, 13);plays2('#Db4', length, 14);plays2('#C4', length, 15);
  }
  else if (typeNoteOther == 0 && keyNoteOther == '/A') {
    plays2('#A4', length, 1);plays2('#B4', length, 2);plays2('#Db4', length, 3);plays2('#D4', length, 4);plays2('#E4', length, 5);
    plays2('#Gb4', length, 6);plays2('#Ab4', length, 7);plays2('#A5', length, 8);plays2('#Ab4', length, 9);plays2('#Gb4', length, 10);
    plays2('#E4', length, 11);plays2('#D4', length, 12);plays2('#Db4', length, 13);plays2('#B4', length, 14);plays2('#A4', length, 15);
    plays2('#Db4', length, 1);plays2('#D4', length, 2);plays2('#E4', length, 3);plays2('#Gb4', length, 4);plays2('#Ab4', length, 5);
    plays2('#A5', length, 6);plays2('#B5', length, 7);plays2('#Db5', length, 8);plays2('#B5', length, 9);plays2('#A5', length, 10);
    plays2('#Ab4', length, 11);plays2('#Gb4', length, 12);plays2('#E4', length, 13);plays2('#D4', length, 14);plays2('#Db4', length, 15);
  }
  else if (typeNoteOther == 0 && keyNoteOther == '/Bb') {
    plays2('#Bb4', length, 1);plays2('#C4', length, 2);plays2('#D4', length, 3);plays2('#Eb4', length, 4);plays2('#F4', length, 5);
    plays2('#G4', length, 6);plays2('#A5', length, 7);plays2('#Bb5', length, 8);plays2('#A5', length, 9);plays2('#G4', length, 10);
    plays2('#F4', length, 11);plays2('#Eb4', length, 12);plays2('#D4', length, 13);plays2('#C4', length, 14);plays2('#Bb4', length, 15);
    plays2('#D4', length, 1);plays2('#Eb4', length, 2);plays2('#F4', length, 3);plays2('#G4', length, 4);plays2('#A5', length, 5);
    plays2('#Bb5', length, 6);plays2('#C5', length, 7);plays2('#D5', length, 8);plays2('#C5', length, 9);plays2('#Bb5', length, 10);
    plays2('#A5', length, 11);plays2('#G4', length, 12);plays2('#F4', length, 13);plays2('#Eb4', length, 14);plays2('#D4', length, 15);
  }
  else if (typeNoteOther == 0 && keyNoteOther == '/B') {
    plays2('#B4', length, 1);plays2('#Db4', length, 2);plays2('#Eb4', length, 3);plays2('#E4', length, 4);plays2('#Gb4', length, 5);
    plays2('#Ab4', length, 6);plays2('#Bb5', length, 7);plays2('#B5', length, 8);plays2('#Bb5', length, 9);plays2('#Ab4', length, 10);
    plays2('#Gb4', length, 11);plays2('#E4', length, 12);plays2('#Eb4', length, 13);plays2('#Db4', length, 14);plays2('#B4', length, 15);
    plays2('#Eb4', length, 1);plays2('#E4', length, 2);plays2('#Gb4', length, 3);plays2('#Ab4', length, 4);plays2('#Bb5', length, 5);
    plays2('#B5', length, 6);plays2('#Db5', length, 7);plays2('#Eb5', length, 8);plays2('#Db5', length, 9);plays2('#B5', length, 10);
    plays2('#Bb5', length, 11);plays2('#Ab4', length, 12);plays2('#Gb4', length, 13);plays2('#E4', length, 14);plays2('#Eb4', length, 15);
  }
  else if (typeNoteOther == 0 && keyNoteOther == '/C') {
    plays2('#C4', length, 1);plays2('#D4', length, 2);plays2('#E4', length, 3);plays2('#F4', length, 4);plays2('#G4', length, 5);
    plays2('#A5', length, 6);plays2('#B5', length, 7);plays2('#C5', length, 8);plays2('#B5', length, 9);plays2('#A5', length, 10);
    plays2('#G4', length, 11);plays2('#F4', length, 12);plays2('#E4', length, 13);plays2('#D4', length, 14);plays2('#C4', length, 15);
    plays2('#E4', length, 1);plays2('#F4', length, 2);plays2('#G4', length, 3);plays2('#A5', length, 4);plays2('#B5', length, 5);
    plays2('#C5', length, 6);plays2('#D5', length, 7);plays2('#E5', length, 8);plays2('#D5', length, 9);plays2('#C5', length, 10);
    plays2('#B5', length, 11);plays2('#A5', length, 12);plays2('#G4', length, 13);plays2('#F4', length, 14);plays2('#E4', length, 15);
  }
  else if (typeNoteOther == 0 && keyNoteOther == '/Db') {
    plays2('#Db4', length, 1);plays2('#Eb4', length, 2);plays2('#F4', length, 3);plays2('#Gb4', length, 4);plays2('#Ab4', length, 5);
    plays2('#Bb5', length, 6);plays2('#C5', length, 7);plays2('#Db5', length, 8);plays2('#C5', length, 9);plays2('#Bb5', length, 10);
    plays2('#Ab4', length, 11);plays2('#Gb4', length, 12);plays2('#F4', length, 13);plays2('#Eb4', length, 14);plays2('#Db4', length, 15);
    plays2('#F4', length, 1);plays2('#Gb4', length, 2);plays2('#Ab4', length, 3);plays2('#Bb5', length, 4);plays2('#C5', length, 5);
    plays2('#Db5', length, 6);plays2('#Eb5', length, 7);plays2('#F5', length, 8);plays2('#Eb5', length, 9);plays2('#Db5', length, 10);
    plays2('#C5', length, 11);plays2('#Bb5', length, 12);plays2('#Ab4', length, 13);plays2('#Gb4', length, 14);plays2('#F4', length, 15);
  }
  else if (typeNoteOther == 0 && keyNoteOther == '/D') {
    plays2('#D4', length, 1);plays2('#E4', length, 2);plays2('#Gb4', length, 3);plays2('#G4', length, 4);plays2('#A5', length, 5);
    plays2('#B5', length, 6);plays2('#Db5', length, 7);plays2('#D5', length, 8);plays2('#Db5', length, 9);plays2('#B5', length, 10);
    plays2('#A5', length, 11);plays2('#G4', length, 12);plays2('#Gb4', length, 13);plays2('#E4', length, 14);plays2('#D4', length, 15);
    plays2('#Gb4', length, 1);plays2('#G4', length, 2);plays2('#A5', length, 3);plays2('#B5', length, 4);plays2('#Db5', length, 5);
    plays2('#D5', length, 6);plays2('#E5', length, 7);plays2('#Gb5', length, 8);plays2('#E5', length, 9);plays2('#D5', length, 10);
    plays2('#Db5', length, 11);plays2('#B5', length, 12);plays2('#A5', length, 13);plays2('#G4', length, 14);plays2('#Gb4', length, 15);
  }
  else if (typeNoteOther == 0 && keyNoteOther == '/Eb') {
    plays2('#Eb4', length, 1);plays2('#F4', length, 2);plays2('#G4', length, 3);plays2('#Ab4', length, 4);plays2('#Bb5', length, 5);
    plays2('#C5', length, 6);plays2('#D5', length, 7);plays2('#Eb5', length, 8);plays2('#D5', length, 9);plays2('#C5', length, 10);
    plays2('#Bb5', length, 11);plays2('#Ab4', length, 12);plays2('#G4', length, 13);plays2('#F4', length, 14);plays2('#Eb4', length, 15);
    plays2('#G4', length, 1);plays2('#Ab4', length, 2);plays2('#Bb5', length, 3);plays2('#C5', length, 4);plays2('#D5', length, 5);
    plays2('#Eb5', length, 6);plays2('#F5', length, 7);plays2('#G5', length, 8);plays2('#F5', length, 9);plays2('#Eb5', length, 10);
    plays2('#D5', length, 11);plays2('#C5', length, 12);plays2('#Bb5', length, 13);plays2('#Ab4', length, 14);plays2('#G4', length, 15);
  }
  else if (typeNoteOther == 0 && keyNoteOther == '/E') {
    plays2('#E4', length, 1);plays2('#Gb4', length, 2);plays2('#Ab4', length, 3);plays2('#A5', length, 4);plays2('#B5', length, 5);
    plays2('#Db5', length, 6);plays2('#Eb5', length, 7);plays2('#E5', length, 8);plays2('#Eb5', length, 9);plays2('#Db5', length, 10);
    plays2('#B5', length, 11);plays2('#A5', length, 12);plays2('#Ab4', length, 13);plays2('#Gb4', length, 14);plays2('#E4', length, 15);
    plays2('#Ab4', length, 1);plays2('#A5', length, 2);plays2('#B5', length, 3);plays2('#Db5', length, 4);plays2('#Eb5', length, 5);
    plays2('#E5', length, 6);plays2('#Gb5', length, 7);plays2('#Ab5', length, 8);plays2('#Gb5', length, 9);plays2('#E5', length, 10);
    plays2('#Eb5', length, 11);plays2('#Db5', length, 12);plays2('#B5', length, 13);plays2('#A5', length, 14);plays2('#Ab4', length, 15);
  }
  else if (typeNoteOther == 0 && keyNoteOther == '/F') {
    plays2('#F4', length, 1);plays2('#G4', length, 2);plays2('#A5', length, 3);plays2('#Bb5', length, 4);plays2('#C5', length, 5);
    plays2('#D5', length, 6);plays2('#E5', length, 7);plays2('#F5', length, 8);plays2('#E5', length, 9);plays2('#D5', length, 10);
    plays2('#C5', length, 11);plays2('#Bb5', length, 12);plays2('#A5', length, 13);plays2('#G4', length, 14);plays2('#F4', length, 15);
    plays2('#A5', length, 1);plays2('#Bb5', length, 2);plays2('#C5', length, 3);plays2('#D5', length, 4);plays2('#E5', length, 5);
    plays2('#F5', length, 6);plays2('#G5', length, 7);plays2('#A6', length, 8);plays2('#G5', length, 9);plays2('#F5', length, 10);
    plays2('#E5', length, 11);plays2('#D5', length, 12);plays2('#C5', length, 13);plays2('#Bb5', length, 14);plays2('#A5', length, 15);
  }
  else if (typeNoteOther == 0 && keyNoteOther == '/Gb') {
    plays2('#Gb4', length, 1);plays2('#Ab4', length, 2);plays2('#Bb5', length, 3);plays2('#B5', length, 4);plays2('#Db5', length, 5);
    plays2('#Eb5', length, 6);plays2('#F5', length, 7);plays2('#Gb5', length, 8);plays2('#F5', length, 9);plays2('#Eb5', length, 10);
    plays2('#Db5', length, 11);plays2('#B5', length, 12);plays2('#Bb5', length, 13);plays2('#Ab4', length, 14);plays2('#Gb4', length, 15);
    plays2('#Bb5', length, 1);plays2('#B5', length, 2);plays2('#Db5', length, 3);plays2('#Eb5', length, 4);plays2('#F5', length, 5);
    plays2('#Gb5', length, 6);plays2('#Ab5', length, 7);plays2('#Bb6', length, 8);plays2('#Ab5', length, 9);plays2('#Gb5', length, 10);
    plays2('#F5', length, 11);plays2('#Eb5', length, 12);plays2('#Db5', length, 13);plays2('#B5', length, 14);plays2('#Bb5', length, 15);
  }
  else if (typeNoteOther == 0 && keyNoteOther == '/G') {
    plays2('#G4', length, 1);plays2('#A5', length, 2);plays2('#B5', length, 3);plays2('#C5', length, 4);plays2('#D5', length, 5);
    plays2('#E5', length, 6);plays2('#Gb5', length, 7);plays2('#G5', length, 8);plays2('#Gb5', length, 9);plays2('#E5', length, 10);
    plays2('#D5', length, 11);plays2('#C5', length, 12);plays2('#B5', length, 13);plays2('#A5', length, 14);plays2('#G4', length, 15);
    plays2('#B5', length, 1);plays2('#C5', length, 2);plays2('#D5', length, 3);plays2('#E5', length, 4);plays2('#Gb5', length, 5);
    plays2('#G5', length, 6);plays2('#A6', length, 7);plays2('#B6', length, 8);plays2('#A6', length, 9);plays2('#G5', length, 10);
    plays2('#Gb5', length, 11);plays2('#E5', length, 12);plays2('#D5', length, 13);plays2('#C5', length, 14);plays2('#B5', length, 15);
  }
  else if (typeNoteOther == 1 && keyNoteOther == '/Ab') {
    plays2('#Ab3', length, 1);plays2('#Bb4', length, 2);plays2('#C4', length, 3);plays2('#Db4', length, 4);plays2('#Eb4', length, 5);
    plays2('#F4', length, 6);plays2('#G4', length, 7);plays2('#Ab4', length, 8);plays2('#G4', length, 9);plays2('#F4', length, 10);
    plays2('#Eb4', length, 11);plays2('#Db4', length, 12);plays2('#C4', length, 13);plays2('#Bb4', length, 14);plays2('#Ab3', length, 15);
    plays2('#C3', length, 1);plays2('#Db3', length, 2);plays2('#Eb3', length, 3);plays2('#F3', length, 4);plays2('#G3', length, 5);
    plays2('#Ab3', length, 6);plays2('#Bb4', length, 7);plays2('#C4', length, 8);plays2('#Bb4', length, 9);plays2('#Ab3', length, 10);
    plays2('#G3', length, 11);plays2('#F3', length, 12);plays2('#Eb3', length, 13);plays2('#Db3', length, 14);plays2('#C3', length, 15);
  }
  else if (typeNoteOther == 1 && keyNoteOther == '/A') {
    plays2('#A4', length, 1);plays2('#B4', length, 2);plays2('#Db4', length, 3);plays2('#D4', length, 4);plays2('#E4', length, 5);
    plays2('#Gb4', length, 6);plays2('#Ab4', length, 7);plays2('#A5', length, 8);plays2('#Ab4', length, 9);plays2('#Gb4', length, 10);
    plays2('#E4', length, 11);plays2('#D4', length, 12);plays2('#Db4', length, 13);plays2('#B4', length, 14);plays2('#A4', length, 15);
    plays2('#Db3', length, 1);plays2('#D3', length, 2);plays2('#E3', length, 3);plays2('#Gb3', length, 4);plays2('#Ab3', length, 5);
    plays2('#A4', length, 6);plays2('#B4', length, 7);plays2('#Db4', length, 8);plays2('#B4', length, 9);plays2('#A4', length, 10);
    plays2('#Ab3', length, 11);plays2('#Gb3', length, 12);plays2('#E3', length, 13);plays2('#D3', length, 14);plays2('#Db3', length, 15);
  }
  else if (typeNoteOther == 1 && keyNoteOther == '/Bb') {
    plays2('#Bb4', length, 1);plays2('#C4', length, 2);plays2('#D4', length, 3);plays2('#Eb4', length, 4);plays2('#F4', length, 5);
    plays2('#G4', length, 6);plays2('#A5', length, 7);plays2('#Bb5', length, 8);plays2('#A5', length, 9);plays2('#G4', length, 10);
    plays2('#F4', length, 11);plays2('#Eb4', length, 12);plays2('#D4', length, 13);plays2('#C4', length, 14);plays2('#Bb4', length, 15);
    plays2('#D3', length, 1);plays2('#Eb3', length, 2);plays2('#F3', length, 3);plays2('#G3', length, 4);plays2('#A4', length, 5);
    plays2('#Bb4', length, 6);plays2('#C4', length, 7);plays2('#D4', length, 8);plays2('#C4', length, 9);plays2('#Bb4', length, 10);
    plays2('#A4', length, 11);plays2('#G3', length, 12);plays2('#F3', length, 13);plays2('#Eb3', length, 14);plays2('#D3', length, 15);
  }
  else if (typeNoteOther == 1 && keyNoteOther == '/B') {
    plays2('#B4', length, 1);plays2('#Db4', length, 2);plays2('#Eb4', length, 3);plays2('#E4', length, 4);plays2('#Gb4', length, 5);
    plays2('#Ab4', length, 6);plays2('#Bb5', length, 7);plays2('#B5', length, 8);plays2('#Bb5', length, 9);plays2('#Ab4', length, 10);
    plays2('#Gb4', length, 11);plays2('#E4', length, 12);plays2('#Eb4', length, 13);plays2('#Db4', length, 14);plays2('#B4', length, 15);
    plays2('#Eb3', length, 1);plays2('#E3', length, 2);plays2('#Gb3', length, 3);plays2('#Ab3', length, 4);plays2('#Bb4', length, 5);
    plays2('#B4', length, 6);plays2('#Db4', length, 7);plays2('#Eb4', length, 8);plays2('#Db4', length, 9);plays2('#B4', length, 10);
    plays2('#Bb4', length, 11);plays2('#Ab3', length, 12);plays2('#Gb3', length, 13);plays2('#E3', length, 14);plays2('#Eb3', length, 15);
  }
  else if (typeNoteOther == 1 && keyNoteOther == '/C') {
    plays2('#C4', length, 1);plays2('#D4', length, 2);plays2('#E4', length, 3);plays2('#F4', length, 4);plays2('#G4', length, 5);
    plays2('#A5', length, 6);plays2('#B5', length, 7);plays2('#C5', length, 8);plays2('#B5', length, 9);plays2('#A5', length, 10);
    plays2('#G4', length, 11);plays2('#F4', length, 12);plays2('#E4', length, 13);plays2('#D4', length, 14);plays2('#C4', length, 15);
    plays2('#E3', length, 1);plays2('#F3', length, 2);plays2('#G3', length, 3);plays2('#A4', length, 4);plays2('#B4', length, 5);
    plays2('#C4', length, 6);plays2('#D4', length, 7);plays2('#E4', length, 8);plays2('#D4', length, 9);plays2('#C4', length, 10);
    plays2('#B4', length, 11);plays2('#A4', length, 12);plays2('#G3', length, 13);plays2('#F3', length, 14);plays2('#E3', length, 15);
  }
  else if (typeNoteOther == 1 && keyNoteOther == '/Db') {
    plays2('#Db4', length, 1);plays2('#Eb4', length, 2);plays2('#F4', length, 3);plays2('#Gb4', length, 4);plays2('#Ab4', length, 5);
    plays2('#Bb5', length, 6);plays2('#C5', length, 7);plays2('#Db5', length, 8);plays2('#C5', length, 9);plays2('#Bb5', length, 10);
    plays2('#Ab4', length, 11);plays2('#Gb4', length, 12);plays2('#F4', length, 13);plays2('#Eb4', length, 14);plays2('#Db4', length, 15);
    plays2('#F3', length, 1);plays2('#Gb3', length, 2);plays2('#Ab3', length, 3);plays2('#Bb4', length, 4);plays2('#C4', length, 5);
    plays2('#Db4', length, 6);plays2('#Gb4', length, 7);plays2('#F4', length, 8);plays2('#Gb4', length, 9);plays2('#Db4', length, 10);
    plays2('#C4', length, 11);plays2('#Bb4', length, 12);plays2('#Ab3', length, 13);plays2('#Gb3', length, 14);plays2('#F3', length, 15);
  }
  else if (typeNoteOther == 1 && keyNoteOther == '/D') {
    plays2('#D4', length, 1);plays2('#E4', length, 2);plays2('#Gb4', length, 3);plays2('#G4', length, 4);plays2('#A5', length, 5);
    plays2('#B5', length, 6);plays2('#Db5', length, 7);plays2('#D5', length, 8);plays2('#Db5', length, 9);plays2('#B5', length, 10);
    plays2('#A5', length, 11);plays2('#G4', length, 12);plays2('#Gb4', length, 13);plays2('#E4', length, 14);plays2('#D4', length, 15);
    plays2('#Gb3', length, 1);plays2('#G3', length, 2);plays2('#A4', length, 3);plays2('#B4', length, 4);plays2('#Db4', length, 5);
    plays2('#D4', length, 6);plays2('#E4', length, 7);plays2('#Gb4', length, 8);plays2('#E4', length, 9);plays2('#D4', length, 10);
    plays2('#Db4', length, 11);plays2('#B4', length, 12);plays2('#A4', length, 13);plays2('#G3', length, 14);plays2('#Gb3', length, 15);
  }
  else if (typeNoteOther == 1 && keyNoteOther == '/Eb') {
    plays2('#Eb4', length, 1);plays2('#F4', length, 2);plays2('#G4', length, 3);plays2('#Ab4', length, 4);plays2('#Bb5', length, 5);
    plays2('#C5', length, 6);plays2('#D5', length, 7);plays2('#Eb5', length, 8);plays2('#D5', length, 9);plays2('#C5', length, 10);
    plays2('#Bb5', length, 11);plays2('#Ab4', length, 12);plays2('#G4', length, 13);plays2('#F4', length, 14);plays2('#Eb4', length, 15);
    plays2('#G3', length, 1);plays2('#Ab3', length, 2);plays2('#Bb4', length, 3);plays2('#C4', length, 4);plays2('#D4', length, 5);
    plays2('#Eb4', length, 6);plays2('#F4', length, 7);plays2('#G4', length, 8);plays2('#F4', length, 9);plays2('#Eb4', length, 10);
    plays2('#D4', length, 11);plays2('#C4', length, 12);plays2('#Bb4', length, 13);plays2('#Ab3', length, 14);plays2('#G3', length, 15);
  }
  else if (typeNoteOther == 1 && keyNoteOther == '/E') {
    plays2('#E4', length, 1);plays2('#Gb4', length, 2);plays2('#Ab4', length, 3);plays2('#A5', length, 4);plays2('#B5', length, 5);
    plays2('#Db5', length, 6);plays2('#Eb5', length, 7);plays2('#E5', length, 8);plays2('#Eb5', length, 9);plays2('#Db5', length, 10);
    plays2('#B5', length, 11);plays2('#A5', length, 12);plays2('#Ab4', length, 13);plays2('#Gb4', length, 14);plays2('#E4', length, 15);
    plays2('#Ab4', length, 1);plays2('#A5', length, 2);plays2('#B5', length, 3);plays2('#Db5', length, 4);plays2('#Eb5', length, 5);
    plays2('#E5', length, 6);plays2('#Gb5', length, 7);plays2('#Ab5', length, 8);plays2('#Gb5', length, 9);plays2('#E5', length, 10);
    plays2('#Eb5', length, 11);plays2('#Db5', length, 12);plays2('#B5', length, 13);plays2('#A5', length, 14);plays2('#Ab4', length, 15);
  }
  else if (typeNoteOther == 1 && keyNoteOther == '/F') {
    plays2('#F4', length, 1);plays2('#G4', length, 2);plays2('#A5', length, 3);plays2('#Bb5', length, 4);plays2('#C5', length, 5);
    plays2('#D5', length, 6);plays2('#E5', length, 7);plays2('#F5', length, 8);plays2('#E5', length, 9);plays2('#D5', length, 10);
    plays2('#C5', length, 11);plays2('#Bb5', length, 12);plays2('#A5', length, 13);plays2('#G4', length, 14);plays2('#F4', length, 15);
    plays2('#A4', length, 1);plays2('#Bb4', length, 2);plays2('#C4', length, 3);plays2('#D4', length, 4);plays2('#E4', length, 5);
    plays2('#F4', length, 6);plays2('#G4', length, 7);plays2('#A5', length, 8);plays2('#G4', length, 9);plays2('#F4', length, 10);
    plays2('#E4', length, 11);plays2('#D4', length, 12);plays2('#C4', length, 13);plays2('#Bb4', length, 14);plays2('#A4', length, 15);
  }
  else if (typeNoteOther == 1 && keyNoteOther == '/Gb') {
    plays2('#Gb4', length, 1);plays2('#Ab4', length, 2);plays2('#Bb5', length, 3);plays2('#B5', length, 4);plays2('#Db5', length, 5);
    plays2('#Eb5', length, 6);plays2('#F5', length, 7);plays2('#Gb5', length, 8);plays2('#F5', length, 9);plays2('#Eb5', length, 10);
    plays2('#Db5', length, 11);plays2('#B5', length, 12);plays2('#Bb5', length, 13);plays2('#Ab4', length, 14);plays2('#Gb4', length, 15);
    plays2('#Bb4', length, 1);plays2('#B4', length, 2);plays2('#Db4', length, 3);plays2('#Eb4', length, 4);plays2('#F4', length, 5);
    plays2('#Gb4', length, 6);plays2('#Ab4', length, 7);plays2('#Bb5', length, 8);plays2('#Ab4', length, 9);plays2('#Gb4', length, 10);
    plays2('#F4', length, 11);plays2('#Eb4', length, 12);plays2('#Db4', length, 13);plays2('#B4', length, 14);plays2('#Bb4', length, 15);
  }
  else if (typeNoteOther == 1 && keyNoteOther == '/G') {
    plays2('#G4', length, 1);plays2('#A5', length, 2);plays2('#B5', length, 3);plays2('#C5', length, 4);plays2('#D5', length, 5);
    plays2('#E5', length, 6);plays2('#Gb5', length, 7);plays2('#G5', length, 8);plays2('#Gb5', length, 9);plays2('#E5', length, 10);
    plays2('#D5', length, 11);plays2('#C5', length, 12);plays2('#B5', length, 13);plays2('#A5', length, 14);plays2('#G4', length, 15);
    plays2('#B4', length, 1);plays2('#C4', length, 2);plays2('#D4', length, 3);plays2('#E4', length, 4);plays2('#Gb4', length, 5);
    plays2('#G4', length, 6);plays2('#A5', length, 7);plays2('#B5', length, 8);plays2('#A5', length, 9);plays2('#G4', length, 10);
    plays2('#Gb4', length, 11);plays2('#E4', length, 12);plays2('#D4', length, 13);plays2('#C4', length, 14);plays2('#B4', length, 15);
  }
  else {
    document.getElementById("grand").style.visibility = "hidden";
    document.getElementById('Speed').textContent = '';
    window.alert("Please enter all fields")
  }
}

// Chromatic scale
function chromatic() {
  length = 200;
  plays2('#C4', length, 1);plays2('#Db4', length, 2);plays2('#D4', length, 3);plays2('#Eb4', length, 4);plays2('#E4', length, 5);plays2('#F4', length, 6);plays2('#Gb4', length, 7);
  plays2('#G4', length, 8);plays2('#Ab4', length, 9);plays2('#A5', length, 10);plays2('#Bb5', length, 11);plays2('#B5', length, 12);plays2('#C5', length, 13);plays2('#B5', length, 14);
  plays2('#Bb5', length, 15);plays2('#A5', length, 16);plays2('#Ab4', length, 17);plays2('#G4', length, 18);plays2('#Gb4', length, 19);plays2('#F4', length, 20);plays2('#E4', length, 21);
  plays2('#Eb4', length, 22);plays2('#D4', length, 23);plays2('#Db4', length, 24);plays2('#C4', length, 25);
}

// 64 chords
function cadential() {
  length = 2000
  plays2('#G3', length*2, 0.1);plays2('#G4', length*2, 0.1);plays2('#C5', length, 0.1);plays2('#E5', length, 0.1); plays2('#B5', length, 1.1); plays2('#D5', length, 1.1);
}
function passing() {
  length = 2000
  plays2('#C3', length, 0.1);plays2('#E4', length, 0.1);plays2('#G4', length, 0.1);plays2('#C5', length, 0.1);
  plays2('#D3', length, 1.1);plays2('#D4', length, 1.1);plays2('#G4', length, 1.1);plays2('#B5', length, 1.1);
  plays2('#E3', length, 2.1);plays2('#C4', length, 2.1);plays2('#G4', length, 2.1);plays2('#C5', length, 2.1);
}
function pedal() {
  length = 2000
  plays2('#C3', length, 0.1);plays2('#C4', length, 0.11);plays2('#E4', length, 0.111);plays2('#G4', length, 0.111);
  plays2('#C3', length, 1.1);plays2('#C4', length, 1.11);plays2('#F4', length, 1.111);plays2('#A5', length, 1.111);
  plays2('#C3', length, 2.1);plays2('#C4', length, 2.11);plays2('#E4', length, 2.111);plays2('#G4', length, 2.111);
}
function arpeggiated() {
 length = 2000
  plays2('#C3', length, 0.1);plays2('#E4', length, 0.11);plays2('#G4', length, 0.111);plays2('#C5', length, 0.111);
  plays2('#E3', length, 1.1);plays2('#C4', length, 1.11);plays2('#G4', length, 1.111);
  plays2('#G3', length, 2.1);plays2('#G4', length, 2.11);plays2('#C5', length, 2.111);plays2('#E5', length, 2.111);
}