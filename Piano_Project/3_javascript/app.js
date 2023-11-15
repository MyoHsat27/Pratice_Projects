const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];
const notesInput = document.querySelector("#noteContainer");
const recordingBtn = document.querySelector(".recordingBtn");

let piecesContainer = document.querySelector("#list");
let pianoMemory = {
   songNames: [],
   notes: [],
   tempo: [],
};

function createButton(name) {
   const createButton = document.createElement("button");
   createButton.classList.add("buttonStyle");
   createButton.classList.add("pianoKeys");
   createButton.append(name);
   document.querySelector(".keyContainer").append(createButton);
}

// To Get Tempo
let pianoTempo = "";
let time = 0;
let startTime;

function startTempo() {
   if (recordingBtn.classList.contains("haveNot")) {
      notesInput.value = "";
      recordingBtn.classList.toggle("haveNot"); // if the recordingBtn have clicked the recording will not start over
      recordingBtn.classList.toggle("starting"); // if the recordingBtn haven't starting, the save button will not work
      startTime = setInterval(() => {
         time += 4;
      }, 1);
   }
}

function stopTempo() {
   pianoTempo += `${time},`;
   pianoMemory.tempo.push(pianoTempo);
   pianoTempo = "";
   recordingBtn.classList.toggle("haveNot");
   recordingBtn.classList.toggle("starting");
}

// Making Keys
notes.map((el, index) => {
   createButton(el);
   let buttons = document.querySelectorAll(".pianoKeys");
   buttons[index].addEventListener("click", (event) => {
      playNote(event.target.innerText);
   });
});

// Creating Sound for Normal
function playNote(note) {
   // Only work when the recording have started
   if (recordingBtn.classList.contains("starting")) {
      pianoTempo += `${time},`;
      time = 0;
   }
   let sound = new Audio(`../sounds/${note}.mp3`);
   sound.play();
   notesInput.value += `${note}, `;
}

// Creating Sound for Replay
function replayNote(note) {
   let sound = new Audio(`../sounds/${note}.mp3`);
   sound.play();
}

// Creating Sound for Replay
function runMemory(musicnote, tempoArr, tempo = 0) {
   musicnote.map((el, index) => {
      setTimeout(replayNote, tempo, el);
      tempo += tempoArr[index];
   });
}

// Saving Song
function createPiece() {
   // Only work when the recording have started
   if (recordingBtn.classList.contains("starting")) {
      stopTempo();
      clearInterval(startTime);
      pianoMemory.notes.push(notesInput.value);
      notesInput.value = "";
      let songName = prompt("Enter the song name");
      if (songName.length <= 15) {
         pianoMemory.songNames.push(songName);
         piecesContainer.innerHTML = "";
         pianoMemory.notes.map((el, index) => {
            piecesContainer.innerHTML += `<li class="listStyle"><div class="pieceName">${pianoMemory.songNames[index]}</div> <button onclick="replay(${index})" class="btn btn-primary">Play</button></li>`;
         });
      } else {
         songName = prompt("The amount characters can only between 0-15");
         pianoMemory.songNames.push(songName);
         piecesContainer.innerHTML = "";
         pianoMemory.notes.map((el, index) => {
            piecesContainer.innerHTML += `<li class="listStyle"><div class="pieceName">${pianoMemory.songNames[index]}</div> <button onclick="replay(${index})" class="btn btn-primary">Play</button></li>`;
         });
      }
   }
}

// Getting Data to Save Song
function replay(x) {
   let currentPiece = pianoMemory.notes[x].split(",");
   let notes = currentPiece.map((el, index) => {
      return el.trim();
   });
   notes.pop();
   let currentTempoString = pianoMemory.tempo[x].split(",");
   currentTempoString.pop();
   currentTempoString.shift();
   let currentTempo = currentTempoString.map((el) => parseInt(el));
   console.log(notes, currentTempo);
   runMemory(notes, currentTempo);
}

document.addEventListener("keydown", (event) => {
   let current = event.keyCode;
   switch (current) {
      case 65:
         playNote("C4");
         break;
      case 83:
         playNote("D4");
         break;
      case 68:
         playNote("E4");
         break;
      case 70:
         playNote("F4");
         break;
      case 74:
         playNote("G4");
         break;
      case 75:
         playNote("A4");
         break;
      case 76:
         playNote("B4");
         break;
      case 186:
         playNote("C5");
         break;
   }
});
