import {SplitText} from "../libs/SplitText.js";
import gsap from "../libs/gsap/all.js";

// watch on scroll animations
document.addEventListener("watcherCallback", function (e) {
    const entry = e.detail.entry;
    const target = entry.target;

    const classList = target.classList;

    if (
        classList.contains("_watcher-view") &&
        classList.contains("js-animated")
    ) {
        const split = new SplitText(target);
        const words = split.chars;
        gsap.from(words, 0.5, {
            x: -40,
            autoAlpha: 0,
            delay: 0.05,
        });
    }
});