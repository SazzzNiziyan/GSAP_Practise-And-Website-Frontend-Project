var menu = document.querySelector("#menu")
var opon = document.querySelector(".ri-menu-3-line")
var close = document.querySelector(".ri-close-large-line")
var tl = gsap.timeline()

tl.to(menu,{
    right: "0%",
    duration: 0.2,
})

tl.from("h1",{
    x:100,
    opacity: 0,
    stagger:0.07,
})


tl.from(close,{
    x:50,
    opacity: 0,
})

tl.pause()

opon.addEventListener("click", ()=>{
    tl.play()
})
 

close.addEventListener("click", ()=>{
    tl.reverse()
})