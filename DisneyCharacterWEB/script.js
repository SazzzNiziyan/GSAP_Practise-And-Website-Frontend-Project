
let sections = gsap.utils.toArray(".rosette")
const scrollAmount =
  document.querySelector(".main").scrollWidth - window.innerWidth;


gsap.to(sections, {
   x: -scrollAmount,
    scrollTrigger: {
        trigger: ".page1",
        start: "top top",
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        end: () => "+=" + scrollAmount
    }, // start animation when ".box" enters the viewport
});

let cards = gsap.utils.toArray(".rosette");

function updateCards() {
    const viewportCenter = window.innerWidth / 2;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();

        const cardCenter = rect.left + rect.width / 2;

        const distance = Math.abs(viewportCenter - cardCenter);

        const maxDistance = window.innerWidth / 2;

        let scale = gsap.utils.mapRange(
            0,
            maxDistance,
            1.8,
            1,
            distance
        );

        scale = gsap.utils.clamp(1, 1.9, scale);

        gsap.to(card.querySelector("img"), {
            scale,
            duration: 0.2,
            overwrite: true
        });
    });
}

gsap.ticker.add(updateCards);
