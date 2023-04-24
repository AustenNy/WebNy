document.addEventListener("DOMContentLoaded", function(event) {
    $(".cover").fadeIn()
    // $("html").css("--firstColor", "#0000FF");
    setTimeout(function() { 
        $(".cover").fadeOut()
    // $("html").css("--firstColor", "#f4f4f4");
    }, 50);

// gsap.registerPlugin(scrollTrigger);

//     gsap.to(".move", {
//         scrollTrigger:".moveTrigger",
// translateY: -50,
// opacity: 1,
//  rotation: 360,
// duration: 2
//     });

    gsap.to(".move2", {
        scrollTrigger:{
            trigger:".moveTrigger2",
            start: "40% 50%",
            end: "80% 70%",
            // start: "top 30%",
            scrub: 1,
        // markers: true,
        toggleActions: "play none none reverse"
        },
        translateY: -90,
// opacity: 1,
duration: 1
    });
    gsap.to(".dance", {
        scrollTrigger:{
            trigger:".danceTrigger",
            start: "40% 50%",
            end: "80% 70%",
            scrub: 1,
          //markers: true,
        toggleActions: "play none none reverse"
        },
        translateY: -60,
// opacity: 1,
duration: 1
    });
    gsap.to(".view", {
        scrollTrigger:{
            trigger:".view",
            start: "-30% center",
            end: "-5% center",
            scrub: 1,
        // markers: true,
        toggleActions: "play none none reverse"
        },
        scaleX: 1.2,
        scaleY: 1.2,
        duration: 1.3
    });
    // gsap.to(".box", {
    //     scrollTrigger:{
    //         trigger:".ballTrigger",
    //         start: "top 90%",
    //         scrub: 1,
    //     toggleActions: "play pause reverse pause",
    //     },
    //     translateX: 500,
    //     duration: 1.3
    // });




});
