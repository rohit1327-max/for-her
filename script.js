const photos = [];

for (let i = 1; i <= 20; i++) {
  photos.push(`photos/photo${i}.jpeg`);
}

let current = 0;

const heartBtn = document.getElementById("heartBtn");
const start = document.getElementById("start");
const slideshow = document.getElementById("slideshow");
const photo = document.getElementById("photo");
const song = document.getElementById("song");
const final = document.getElementById("final");

heartBtn.addEventListener("click", () => {
  // Hide the start screen
  start.style.display = "none";

  // Show the slideshow
  slideshow.style.display = "flex";

  // Start the music
  song.play();

  // Show the first photo
  photo.src = photos[0];

  // Change photo every 3 seconds
  const timer = setInterval(() => {
    current++;

    if (current >= photos.length) {
      clearInterval(timer);

      slideshow.style.display = "none";
      final.style.display = "flex";
      return;
    }

    photo.src = photos[current];
  }, 3000);
});