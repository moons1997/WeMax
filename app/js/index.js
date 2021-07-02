// Importing Helpers
import { NodeHelper, FuncsHelper } from "./modules/Helpers";
// Getting Methods from Helpers
const { getNode, getNodes, addClass, removeClass, nextNode } = new NodeHelper();
const { imgLoadHelper } = new FuncsHelper();

// Invoking Functions from Helper

function WaveLine(params) {
  // wave animation
  const canvas = getNode("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const wave = {
    y: canvas.height / 2,
    length: -0.006,
    amplitude: 400,
    frequency: 0.01,
  };

  let increment = wave.frequency;
  ctx.fillStyle = "rgba(0,0,0, 0.01)";
  function waveAnimation(params) {
    requestAnimationFrame(waveAnimation);

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);

    for (let i = 0; i < canvas.width; i++) {
      ctx.lineTo(
        i,
        wave.y +
          Math.sin(i * wave.length + increment) *
            wave.amplitude *
            Math.sin(increment)
      );
    }

    ctx.strokeStyle = "hsl(200, 50%, 50%)";
    ctx.stroke();
    increment += wave.frequency;
  }
  waveAnimation();
  // wave animation
}
// WaveLine();

function problemAnimate() {
  let tl = gsap.timeline();

  tl.fromTo(".problem-dots1", 0.5, { opacity: 0 }, { opacity: 1 })
    .fromTo(".problem-text .bg", 0.5, { width: 0 }, { width: "100%" })
    .fromTo(".problem-text .text", 0.5, { opacity: 0 }, { opacity: 1 })
    .fromTo(".problem-dots2", 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.5")
    .fromTo(".problem-plus", 0.5, { opacity: 0 }, { opacity: 1 })
    .fromTo(
      ".problem-plus",
      0.5,
      { transform: "rotate(-90deg)" },
      { transform: "rotate(0deg)" }
    )
    .fromTo(".problem-line .first", 0.5, { x: "-100%" }, { x: "0" })
    .fromTo(".problem-line .second", 0.5, { x: "-100%" }, { x: "0" }, "-=0.25")
    .fromTo(".problem-category__item .bg", 0.5, { width: 0 }, { width: "100%" })
    .fromTo(".problem-category__later", 0.5, { opacity: 0 }, { opacity: 1 })
    .fromTo(
      ".problem-category__text",
      0.5,
      { opacity: 0 },
      { opacity: 1 },
      "-=0.5"
    )
    .fromTo(".problem-text .bg", 0.5, { width: "100%" }, { width: "0" })
    .to(".problem-category__item .bg", 0.5, { width: "0" }, "-=0.5");
}

function solutionAnimate() {
  let tl = gsap.timeline();
  tl.fromTo(".line-top", 0.5, { opacity: 0 }, { opacity: 1 })
    .fromTo(".line-side", 0.5, { y: "-100%" }, { y: 0 })
    .fromTo(".line-side2", 0.5, { y: "-100%" }, { y: 0 })
    .fromTo(".left-line", 0.5, { x: "-101%" }, { x: "-25%" })
    .fromTo(".right-line", 0.5, { x: "101%" }, { x: "25%" }, "-=0.5");
}

// solution btn effect
function mouseEnterSolutionBtn() {
  let tl = gsap.timeline();
  tl.to(".left-line", 1, { x: "-10%" }).to(
    ".right-line",
    1,
    { x: "10%" },
    "-=1"
  );
}

function mouseOutSolutionBtn() {
  let tl = gsap.timeline();
  tl.to(".left-line", 1, { x: "-25%" }).to(
    ".right-line",
    1,
    { x: "25%" },
    "-=1"
  );
}
let solutionBtn = getNode(".solution .section-btn");

if (solutionBtn) {
  solutionBtn.addEventListener("mouseenter", mouseEnterSolutionBtn);
  solutionBtn.addEventListener("mouseout", mouseOutSolutionBtn);
}
// solution btn effect

function aboutSlider() {
  let aboutSwiperImg = new Swiper(".about__swiper-img", {
    direction: "vertical",
  });
  let aboutSwiperText = new Swiper(".about__swiper-text", {
    autoplay: {
      delay: 10000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  aboutSwiperImg.controller.control = aboutSwiperText;
  aboutSwiperText.controller.control = aboutSwiperImg;
}
function agreementSlider() {
  let agreementSwiperText = new Swiper(".agreement__swiper-text", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    // autoplay: {
    //   delay: 10000,
    // },
  });
  let agreementSwiperImg = new Swiper(".agreement__swiper-img", {});
  agreementSwiperImg.controller.control = agreementSwiperText;
  agreementSwiperText.controller.control = agreementSwiperImg;
}

function fullPage() {
  new fullpage("#fullpage", {
    licenseKey: "YOUR KEY HERE",
    lockAnchors: false,
    anchors: ["page-1", "page-2", "page-3", "page-4", "page-5", "page-6"],
    navigation: true,
    navigationPosition: "left",
    // scrollOverflow: true,
    normalScrollElements: ".scrollable-content",
    onLeave: function (index, nextIndex, direction) {
      // console.log(nextIndex.index);
    },
  });

  // fullpage_api.setAllowScrolling(true);
}

function destroyFullPage() {
  fullpage_api.destroy("all");
}

function startFullPage(header) {
  const lmenu = document.querySelector(".dp-page_lmenu");

  fullPage(lmenu, header);
}

function init() {
  fullPage();
  problemAnimate();
  solutionAnimate();
  let aboutSliderClass = getNode(".about__swiper-img");
  if (aboutSliderClass) {
    aboutSlider();
    agreementSlider();
  }
}
init();

const swup = new Swup({
  plugins: [new SwupSlideTheme()],
});

swup.on("willReplaceContent", function () {
  destroyFullPage();
});

swup.on("contentReplaced", function () {
  startFullPage();
  init();
});
