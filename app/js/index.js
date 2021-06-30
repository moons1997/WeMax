// Importing Helpers
import { NodeHelper, FuncsHelper } from './modules/Helpers';

// Getting Methods from Helpers
const { getNode, getNodes, addClass, removeClass, nextNode } = new NodeHelper();
const { imgLoadHelper } = new FuncsHelper();

// Invoking Functions from Helper

function problemAnimate() {
  let tl = gsap.timeline();

  tl.fromTo('.problem-dots1', 0.5, { opacity: 0 }, { opacity: 1 })
    .fromTo('.problem-text .bg', 0.5, { width: 0 }, { width: '100%' })
    .fromTo('.problem-text .text', 0.5, { opacity: 0 }, { opacity: 1 })
    .fromTo('.problem-dots2', 0.5, { opacity: 0 }, { opacity: 1 }, '-=0.5')
    .fromTo('.problem-plus', 0.5, { opacity: 0 }, { opacity: 1 })
    .fromTo('.problem-plus', 0.5, { transform: 'rotate(-90deg)' }, { transform: 'rotate(0deg)' })
    .fromTo('.problem-line .first', 0.5, { x: '-100%' }, { x: '0' })
    .fromTo('.problem-line .second', 0.5, { x: '-100%' }, { x: '0' }, '-=0.25')
    .fromTo('.problem-category__item .bg', 0.5, { width: 0 }, { width: '100%' })
    .fromTo('.problem-category__later', 0.5, { opacity: 0 }, { opacity: 1 })
    .fromTo('.problem-category__text', 0.5, { opacity: 0 }, { opacity: 1 }, '-=0.5')
    .fromTo('.problem-text .bg', 0.5, { width: '100%' }, { width: '0' })
    .to('.problem-category__item .bg', 0.5, { width: '0' }, '-=0.5');
}

function solutionAnimate(){
  let tl = gsap.timeline();
  tl.fromTo('.line-top', 0.5, { opacity: 0 }, { opacity: 1 })
  .fromTo('.line-side', 0.5, { y: '-100%' }, { y: 0 })
  .fromTo('.line-side2', 0.5, { y: '-100%' }, { y: 0 })
  .fromTo('.left-line', 0.5, { x: '-101%' }, { x: '-25%' })
  .fromTo('.right-line', 0.5, { x: '101%' }, { x: '25%' }, '-=0.5');
}

function mouseEnterSolutionBtn(){
  let tl = gsap.timeline();
    tl.to('.left-line', 1, { x: '-10%' })
    .to('.right-line', 1, { x: '10%' }, '-=1');
}

function mouseOutSolutionBtn(){
  let tl = gsap.timeline();
    tl.to('.left-line', 1, { x: '-25%' })
    .to('.right-line', 1, { x: '25%' }, '-=1');
}
let solutionBtn = getNode('.solution .section-btn');
solutionBtn.addEventListener("mouseenter", mouseEnterSolutionBtn);
solutionBtn.addEventListener("mouseout", mouseOutSolutionBtn);

function fullPage() {
  new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
    // sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],

    lockAnchors: false,
    anchors: ['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6'],
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
  });
}
// function fullPage(menu_nodes, header) {
//   new fullpage("#full-page", {
//     autoScrolling: true,
//     // scrollBar: true,
//     anchors: ["page1", "page2", "page3", "page4", "page5", "page6"],
//     onLeave: function (index, nextIndex, direction) {
//       // console.log(nextIndex.index);

//       if (document.querySelector(".home")) {
//         if (nextIndex.index >= 3) {
//           header.classList.add("sticky");
//         } else {
//           header.classList.remove("sticky");
//         }
//       } else if (document.querySelector(".about")) {
//         if (nextIndex.index >= 2) {
//           header.classList.add("sticky");
//         } else {
//           header.classList.remove("sticky");
//         }
//       } else if (document.querySelector(".installment")) {
//         // let { anchor } = index;
//         // console.log(anchor);

//         if (nextIndex.index > 0) {
//           header.classList.add("sticky");
//           menu_nodes.classList.add("dark_color");
//           if (nextIndex.index === 2) {
//             menu_nodes.classList.add("dp-page_lmenu_hidden");
//           } else if (nextIndex.index !== 2) {
//             menu_nodes.classList.remove("dp-page_lmenu_hidden");
//           }
//         } else {
//           header.classList.remove("sticky");
//           menu_nodes.classList.remove("dark_color");
//         }
//       } else if (document.querySelector(".sale_accumulator")) {
//         if (nextIndex.index > 0) {
//           header.classList.add("sticky");
//           menu_nodes.classList.add("dark_color");
//           if (nextIndex.index === 3) {
//             menu_nodes.classList.add("dp-page_lmenu_hidden");
//           } else if (nextIndex.index !== 3) {
//             menu_nodes.classList.remove("dp-page_lmenu_hidden");
//           }
//         } else {
//           header.classList.remove("sticky");
//           menu_nodes.classList.remove("dark_color");
//         }
//       } else if (document.querySelector(".sale_loader")) {
//         if (nextIndex.index === 1) {
//           menu_nodes.classList.add("dp-page_lmenu_hidden");
//         } else if (nextIndex.index !== 1) {
//           menu_nodes.classList.remove("dp-page_lmenu_hidden");
//         }
//       } else if (document.querySelector(".services_traction")) {
//         if (nextIndex.index > 0) {
//           header.classList.add("sticky");
//           menu_nodes.classList.add("dark_color");
//           if (nextIndex.index === 4) {
//             menu_nodes.classList.add("dp-page_lmenu_hidden");
//           } else if (nextIndex.index !== 4) {
//             menu_nodes.classList.remove("dp-page_lmenu_hidden");
//           }
//         } else {
//           header.classList.remove("sticky");
//           menu_nodes.classList.remove("dark_color");
//         }
//       }

//       if (direction == "down") {
//         if (document.querySelector(".home")) {
//           // textAnime("[data-animate]");
//           textAnime(".about-home .text_anime span");
//           textAnime(".induidal .text_anime span");
//           textAnime(".solution .text_anime span");
//           textAnime(".car.first .text_anime span");
//           textAnime(".car.second .text_anime span");
//         } else if (document.querySelector(".about")) {
//           textAnime(".about-header .text_anime span");
//           textAnime(".about-footer .text_anime span");
//           textAnime(".induidal .text_anime span");
//           textAnime(".values .text_anime span");
//         } else if (document.querySelector(".installment")) {
//           textAnime(".advantage .text_anime span");
//         } else if (document.querySelector(".sale_accumulator")) {
//           textAnime(".dp-page.one .text_anime span");
//           textAnime(".dp-page.two .text_anime span");
//           textAnime(".benefits .text_anime span");
//           textAnime(".delivery .text_anime span");
//         }
//       }
//     },
//   });
// }
// fullPage(lmenu, header);


 // swup
//  const swup = new Swup({
//   plugins: [
//     new SwupOverlayTheme({
//       color: "#282828",
//       duration: 1000,
//       direction: "to-bottom",
//     }),
//   ],
// });


function init() {
  fullPage();
  problemAnimate();
  solutionAnimate();
}
init();
