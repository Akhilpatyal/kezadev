function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}


function loadingAnimation() {
    var tl = gsap.timeline()
    tl.from(".page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from(".page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "50px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from(".page1 h1, .page1 p, .page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
    console.log("Loading animation triggered"); // Check if the function is called
}

function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}



function page2animation() {


    var rightElem = document.querySelectorAll(".right-elem")

    rightElem.forEach(function (elem) {
        elem.addEventListener("mouseenter", () => {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })

        elem.addEventListener("mouseleave", () => {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })

        elem.addEventListener("mousemove", (dets) => {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 15,
                y: dets.y - elem.getBoundingClientRect().y - 100
            })
        })
    })
}

function page3video() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector(".page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: " scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0,
        })
    })

    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: " scaleX(0.5) scaleY(0.5)",
            opacity: 0,
            borderRadius: "30px",
        })
    })

    var sections = document.querySelectorAll(".sec-right")
    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()

        })
    })
    sections.forEach(function (elem) {
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()

        })
    })
}



// gsap.to("#bottom6-part2 h4", {
//     x: 150,
//     duration: 1,
//     stagger: {
//         amount: -0.2
//     },
//     scrollTrigger: {
//         trigger: "#bottom6-part2",
//         scroller: "body",
//         scrub: true,
//         start:"top 80%",
//         end:"top -80%",
//     }
// })

function Page6Animation() {

    gsap.from(".btm6-parts h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#bottom6-part2",
            scroller: ".main",
            start: "top 80%",
            end: "top -10%",
            scrub: true,
        }
    })
}


// loader



// locomotiveAnimation()

// navAnimation()
// page2animation();

// page3video()
// Page6Animation()

// loadingAnimation()