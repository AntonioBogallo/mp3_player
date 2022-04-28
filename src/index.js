const play = document.querySelector(".play");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const songsList = [
  "https://scummbar.com/mi2/MI1-CD/01%20-%20Opening%20Themes%20-%20Introduction.mp3",
  "https://scummbar.com/mi2/MI1-CD/02%20-%20Chapter%20Screen.mp3",
  "https://scummbar.com/mi2/MI1-CD/03%20-%20The%20Scumm%20Bar.mp3"
];
// const arrayButtons = [play, next, prev];
let url = songsList[0];
let song = new Audio(url);
let currentSong = 0;

function playSong() {
  const btnPlay = document.querySelector(".play img");
  if (song.paused) {
    url = songsList[currentSong];
    song = new Audio(url);
    song.play();
    btnPlay.src = "./assets/pause.png";
  } else {
    song.pause();
    btnPlay.src = "./assets/play-button-arrowhead.png";
  }
}

function nextSong() {
  if (currentSong < songsList.length - 1) {
    song.pause();
    currentSong++;
    playSong();
  }
}

function prevSong() {
  if (currentSong > 0) {
    song.pause();
    currentSong--;
    playSong();
  }
}

play.addEventListener("click", () => playSong());
next.addEventListener("click", () => nextSong());
prev.addEventListener("click", () => prevSong());
