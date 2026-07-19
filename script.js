const photos = [
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg",
"photo6.jpg",
"photo7.jpg",
"photo8.jpg",
"photo9.jpg",
"photo10.jpg"
];

let current = 0;

const heartBtn = document.getElementById("heartBtn");
const start = document.getElementById("start");
const slideshow = document.getElementById("slideshow");
const photo = document.getElementById("photo");
const song = document.getElementById("song");
const final = document.getElementById("final");

heartBtn.onclick = () => {
    start.style.display = "none";
    slideshow.style.display = "flex";

    song.play();

    photo.src = photos[current];

    const interval = setInterval(() => {
        current++;

        if (current >= photos.length) {
            clearInterval(interval);
            slideshow.style.display = "none";
            final.style.display = "flex";
            return;
        }

        photo.src = photos[current];

    }, 3000);
};
