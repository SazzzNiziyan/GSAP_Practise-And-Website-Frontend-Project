const h1 = document.querySelector("h1")
const h1Text = document.querySelector("h1").textContent

const splittedText = h1Text.split("");
const halfText = splittedText.length / 2
var againAddedText = ''

splittedText.forEach(function (elem, idx) {
    //this code works for when you want the animation from custom value
    if (idx < 5) {
        againAddedText += `<span class = "a">${elem}</span>`
    }

    //this code works for when you want the animation from between
    /* if (idx < halfText) {
         againAddedText += `<span class = "a">${elem}</span>`
    }*/

    else (
        againAddedText += `<span class = "b">${elem}</span>`
    )

})

h1.innerHTML = againAddedText


gsap.from(".a", {
    y: 200,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.1
})

gsap.fromTo('.a', {
    "fontSize": "55px",
}, { "fontSize": "165px", })

gsap.from(".b", {
    y: 200,
    duration: 0.5,
    delay: 0.3,
    "fontSize": "55px",
    stagger: -0.1

})



