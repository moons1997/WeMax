// Importing Helpers
import { NodeHelper, FuncsHelper } from './modules/Helpers';

// Getting Methods from Helpers
const { getNode, getNodes, addClass, removeClass, nextNode } = new NodeHelper();
const { imgLoadHelper } = new FuncsHelper();

// Invoking Functions from Helper

function problemSection() {
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
let tl = gsap.timeline();
tl.fromTo('.line-top', 3, { opacity: 0 }, { opacity: 1 });
tl.fromTo('.line-side', 3, { y: '-100%' }, { y: 0 });

function fullPage() {
  new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
    // sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],

    lockAnchors: false,
    anchors: ['page-1', 'page-2', 'page-3', 'page-4'],
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['page-1', 'page-2', 'page-3', 'page-4'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
  });
}

function init() {
  fullPage();
  problemSection();
}
init();
