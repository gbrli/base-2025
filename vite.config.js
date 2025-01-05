import htmlPurge from "vite-plugin-html-purgecss";
import { gsap } from "gsap";

export default {
  plugins: [htmlPurge(), gsap],
};
