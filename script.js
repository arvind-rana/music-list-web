//console.log("hello my name is arvind rana")

const audioElement = new Audio("./music/2.mp3");
//const audioElement = new Audio("music/3.mp3");
// ./index.html
// ../index1.html
// ../objects/obj.js
let songIndex = 0;
const myProgresBar = document.getElementById("myProgressBar");
const masterPlay = document.getElementById("master");
const gif = document.getElementById("songInfo");
const songList = document.querySelector(".songList");
//songItems = document.querySelectorAll(".songItem");

const songs = [
  {
    songName: "teri yado me",
    filePath: "./music/2.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "mahi ya ve",
    filePath: "./music/3.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "sow motion",
    filePath: "./music/4.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "fir bhi tumko chahunga",
    filePath: "./music/2.mp3'",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Ave runsia",
    filePath: "./music/2.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Ram aaye h",
    filePath: "./music/2.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "yimmy yimmy",
    filePath: "./music/2.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "pani pani ho gyi",
    filePath: "./music/2.mp3",
    coverPath: "cover/1.jpg",
  },
];
// songItems.forEach((ele,i)=> {
//     console.log(ele,i);
//      ele.getElementsByTagName("img")[0].src = songs[i].coverPath;
//      ele.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// })

//Whenever clicked any song

const audioArr = [0, 0, 0, 0, 0, 0, 0, 0];
const playing = [0, 0, 0, 0, 0, 0, 0, 0];

songList.addEventListener("click", (e) => {
  let container = e.target.closest(".songItem");
  if (container) {
    // get the current song id
    let id = container.dataset.song;

    // agar chal rha hai to off karo, else on kro
    // playing[id - 1] ^= 1;

    if (playing[id] == 0) {
      playing[id] = 1;
      audioArr[id] = new Audio(songs[id].filePath);
      audioArr[id].play();
      // let a = document.querySelectorAll(".songItemPlay");
      // console.log("hii");
      // a.classList.remove("fa-circle-play");
      // a.classList.add("fa-circle-pause");
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      audioArr[id].addEventListener("timeupdate", () => {
        // console.log("hiiii");
        let progress =
          (audioArr[id].currentTime / audioArr[id].duration) * 100;
        myProgresBar.value = progress;
        myProgresBar.addEventListener("change", () => {
          audioArr[id].currentTime =
            (myProgresBar.value * audioElement.duration) / 100;
        });
      });
    } else {
      playing[id] = 0;
      audioArr[id].pause();
      masterPlay.classList.remove("fa-circle-pause");
      masterPlay.classList.add("fa-circle-play");
      myProgresBar.addEventListener("change", () => {
        audioArr[id].currentTime =
          (myProgresBar.value * audioElement.duration) / 100;
      });

      // let a = document.querySelectorAll(".songItemPlay");
      // a.classList.remove("fa-circle-pause");
      // a.classList.add("fa-circle-play");
    }
  }
});




