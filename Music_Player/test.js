const songListContainer = document.getElementById("songListContainer");
const songTag = document.getElementById("songTag");

// Progress Case Variables
const showCurrentTime = document.getElementById("showCurrentTime");
const showtotalDuration = document.getElementById("showtotalDuration");
const currentProgressBar = document.getElementById("currentProgressBar");
const progressBar = document.getElementById("progressBar");

const currentSongTitle = document.getElementById("currentSongTitle");

// Button Case Variables
const backwardBtn = document.getElementById("backwardBtn");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const forwardBtn = document.getElementById("forwardBtn");
let isPlaying = false;

pauseBtn.style.display = "none";

// Song Track
const track = [
    { trackId: "music/adele_remedy.mp3", title: "Adele - Remedy" },
    { trackId: "music/adele_rollingInTheDeep.mp3", title: "Adele - Rolling In The Deep" },
    { trackId: "music/adele_sendMyLove.mp3", title: "Adele - Send My Love" },
    { trackId: "music/adele_setFireToTheRain.mp3", title: "Adele - Set Fire To The Rain" },
];

// <i class="far fa-play-circle"></i>
//<i class="far fa-pause-circle"></i>

// Song Selection and Audio Playing
for (let i = 0; i < track.length; i++) {
    const trackTag = document.createElement("div");
    const songTitle = (i + 1).toString() + ". " + track[i].title;
    trackTag.classList.add("text-warning", "mb-1", "hover-shadow", "rounded");
    trackTag.style.cursor = "pointer";

    trackTag.addEventListener("click", () => {
        isPlaying = true;
        songPlayingAndTitle(i);
        // iconShowing();
    });

    trackTag.append(songTitle);
    songListContainer.append(trackTag);
}

// Progress Time Creation
function createMinuteAndSecond(timeRequest) {
    const totalMinute = Math.floor(timeRequest / 60);
    const totalSecond = Math.floor(timeRequest % 60);

    const totalSecondPerfect = totalSecond < 10 ? "0" + totalSecond.toString() : totalSecond;
    const totalMinutePerfect = totalMinute < 10 ? "0" + totalMinute.toString() : totalMinute;
    return totalMinutePerfect + ":" + totalSecondPerfect;
}

// For Total Duration
let totalDuration = 0;
songTag.addEventListener("loadeddata", () => {
    totalDuration = songTag.duration;
    showtotalDuration.textContent = createMinuteAndSecond(totalDuration);
});

songTag.addEventListener("timeupdate", () => {
    // For Current Time Progress
    const currentTimePlaying = Math.floor(songTag.currentTime);
    showCurrentTime.textContent = createMinuteAndSecond(currentTimePlaying) + " | ";

    // For Current Bar Progress
    updateCurrentProgress(currentTimePlaying);
});

// Update Current Progress
const updateCurrentProgress = (inputTime) => {
    const currentProgressWidth = (400 / totalDuration) * inputTime;
    currentProgressBar.style.width = currentProgressWidth.toString() + "px";
};

// Song Playing And Title Function
const songPlayingAndTitle = (currentSongId) => {
    currentSongTitle.textContent = track[currentSongId].title;
    songTag.src = track[currentSongId].trackId;
    songTag.play();
    updatePlayAndPauseBtn();
};

// Play And Pause Icon Function
const updatePlayAndPauseBtn = () => {
    if (isPlaying) {
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
    } else {
        playBtn.style.display = "block";
        pauseBtn.style.display = "none";
    }
};

// Play Btn
let currentPlayingSongId = 0;
playBtn.addEventListener("click", () => {
    const currentTimePlaying = Math.floor(songTag.currentTime);
    isPlaying = true;

    if (currentTimePlaying === 0) {
        songPlayingAndTitle(currentPlayingSongId);
    } else {
        songTag.play();
        updatePlayAndPauseBtn();
    }
});

// Pause Btn
pauseBtn.addEventListener("click", () => {
    isPlaying = false;
    songTag.pause();
    updatePlayAndPauseBtn();
});

// Backward Btn
backwardBtn.addEventListener("click", () => {
    isPlaying = true;
    if (currentPlayingSongId === 0) {
        currentPlayingSongId = track.length - 1;
        songPlayingAndTitle(currentPlayingSongId);
    } else {
        currentPlayingSongId--;
        songPlayingAndTitle(currentPlayingSongId);
    }
});

// Forward Btn
forwardBtn.addEventListener("click", () => {
    isPlaying = true;
    if (currentPlayingSongId === track.length - 1) {
        currentPlayingSongId = 0;
        songPlayingAndTitle(currentPlayingSongId);
    } else {
        currentPlayingSongId++;
        songPlayingAndTitle(currentPlayingSongId);
    }
});
