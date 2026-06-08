var finalPosition = "M 100 250 Q 1000 250 1950 250"
var svg = document.querySelector(".string")

svg.addEventListener("mousemove", function (dets) {
    path = `M 100 250 Q ${dets.x} ${dets.y} 1950 250`
    gsap.to("svg path", {
        attr: { d: path },
        duration : 0.1,
        ease : "power3.out"
    })
})


svg.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: finalPosition },
        duration: 1.5,
        ease:"elastic.out(1,0.1)"
    })
})