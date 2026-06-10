window.addEventListener("wheel", function (elem) {
    const direction = elem.deltaY
    gsap.killTweensOf(".elem");
    if (direction < 0) {
        gsap.to(".elem", {
            transform: "translateX(0%)",
            ease: "none",
            duration: 3,
            repeat: -1,
            paused: false
        })
        gsap.to("img",{
            rotate:0
        })
    }
    else {
        gsap.to(".elem", {
            transform: "translateX(-200%)",
            ease: "none",
            duration: 3,
            repeat: -1,
            paused: false
        })
        gsap.to("img",{
            rotate:180
        })
    }
})
