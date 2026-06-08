var main = document.querySelector('#main')
var body = document.querySelector('body')
var cursor = document.querySelector("#cursor")
var iframe = document.querySelector("#yt-video");
const overlay = document.querySelector("#overlay");



body.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
        x: dets.x - 10,
        y: dets.y - 10,
        duration: 0.5,
        ease: "back.out(1.7)",
    })
})

main.addEventListener("mouseenter", () => {
    cursor.innerHTML = "Play";
    cursor.style.backgroundColor = "rgba(209, 201, 201, 0.608)"
    gsap.to("#cursor", {
        "height": "100px",
        "width": "100px",
    })
})

main.addEventListener("mouseleave", () => {
    cursor.innerHTML = "";
    cursor.style.backgroundColor = "white"
    gsap.to("#cursor", {
        "height": "20px",
        "width": "20px",
    })
})

let player;
let playerReady = false;
let isPlaying = false;

window.onYouTubeIframeAPIReady = function () {
    player = new YT.Player("yt-video", {
        videoId: "7uX2UoAEi5I",
        playerVars: {
            controls: 0,
            modestbranding: 1,
            rel: 0,
            fs: 1
        },
        events: {
            onReady: function () {
                console.log("PLAYER READY");
                playerReady = true;
            }
        }
    });
};

main.addEventListener("click", () => {
    if (!playerReady) {
        return;
    }

    if (!isPlaying) {
        player.playVideo();
        isPlaying = true;
    } else {
        player.pauseVideo();
        isPlaying = false;
    }
});

main.addEventListener("dblclick", () => {
  if (!document.fullscreenElement) {
    main.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});