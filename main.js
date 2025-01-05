import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
        
    const headerTimeline = gsap.timeline({ defaults: { duration: 1 } });
    const heroTimeline = gsap.timeline({ defaults: { duration: 1.5 } });

    headerTimeline
        .from(".header__details", { opacity: 0, x: -20, ease: "bounce" })
        .from(".navigation a", { opacity: 0, x: 20, stagger: 0.2 });

    heroTimeline
        .from(".hero__inner", { opacity: 0 });

    gsap.utils.toArray(".animate").forEach((element) => {
        const isFooter = element.tagName.toLowerCase() === "footer";

        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: isFooter ? "top: 90%" : "top 65%",
                end: "bottom 20%",
                toggleClass: "in-view", 
                once: true,
            },
            opacity: 0,
            y: -20,
            duration: 1,
        });

        gsap.from(element.querySelectorAll(".card"), {
            scrollTrigger: {
            trigger: element,
            start: "top 65%",
            end: "bottom 20%",
            toggleClass: "in-view", 
            once: true,
            },
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.3,
        });
    });
});