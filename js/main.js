const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    if (burger.classList.contains('active')) {
        gsap.to('.nav-items-movil', {x: '100%'});
        gsap.set('body', {overflow: "auto"});
        gsap.set('body', {overflowX: "hidden"})
    } else {
        gsap.to('.nav-items-movil', {x: '0%'});
        gsap.fromTo('.nav-items-movil a', {opacity: 0}, {opacity: 1, y: 20, delay: 0.3, stagger: 0.25})
        gsap.set('body', {overflow: "hiden"})
    }
    burger.classList.toggle("active");
});