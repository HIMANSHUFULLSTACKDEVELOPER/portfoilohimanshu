document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('play');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const title = document.getElementById('title');
  const artist = document.getElementById('artist');
  const cover = document.getElementById('cover');
  const progressContainer = document.querySelector('.progress-container');
  const progress = document.querySelector('.progress');
  const container = document.querySelector('.player-container');

  // Song titles
  const songs = ['song1', 'song2', 'song3', 'song4', 'song5'];
  let songIndex = 0;

  // Initially load song details into DOM
  loadSong(songs[songIndex]);

  // Play song
  function playSong() {
      container.classList.add('play');
      playBtn.querySelector('i.fas').classList.remove('fa-play');
      playBtn.querySelector('i.fas').classList.add('fa-pause');
      audio.play();
  }

  // Pause song
  function pauseSong() {
      container.classList.remove('play');
      playBtn.querySelector('i.fas').classList.add('fa-play');
      playBtn.querySelector('i.fas').classList.remove('fa-pause');
      audio.pause();
  }

  // Previous song
  function prevSong() {
      songIndex--;
      if (songIndex < 0) {
          songIndex = songs.length - 1;
      }
      loadSong(songs[songIndex]);
      playSong();
  }

  // Next song
  function nextSong() {
      songIndex++;
      if (songIndex > songs.length - 1) {
          songIndex = 0;
      }
      loadSong(songs[songIndex]);
      playSong();
  }

  // Update progress bar
  function updateProgress(e) {
      const { duration, currentTime } = e.srcElement;
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;
  }

  // Set progress bar
  function setProgress(e) {
      const width = this.clientWidth;
      const clickX = e.offsetX;
      const duration = audio.duration;
      audio.currentTime = (clickX / width) * duration;
  }

  // Update song details
  function loadSong(song) {
      title.innerText = song;
      audio.src = `${song}.mp3`;
      cover.src = `${song}.jpg`;
      // You might want to add artist information here as well
  }

  // Event listeners
  playBtn.addEventListener('click', () => {
      const isPlaying = container.classList.contains('play');
      if (isPlaying) {
          pauseSong();
      } else {
          playSong();
      }
  });

  prevBtn.addEventListener('click', prevSong);
  nextBtn.addEventListener('click', nextSong);
  audio.addEventListener('timeupdate', updateProgress);
  progressContainer.addEventListener('click', setProgress);
  audio.addEventListener('ended', nextSong);
});