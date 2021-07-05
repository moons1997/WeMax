// Importing Helpers
import { NodeHelper, FuncsHelper } from './modules/Helpers';
// Getting Methods from Helpers
const { getNode, getNodes, addClass, removeClass, nextNode } = new NodeHelper();
const { imgLoadHelper } = new FuncsHelper();

// Invoking Functions from Helper

function WaveLine(params) {
  // wave animation
  const canvas = getNode('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const wave = {
    y: canvas.height / 2,
    length: -0.006,
    amplitude: 400,
    frequency: 0.01,
  };

  let increment = wave.frequency;
  ctx.fillStyle = 'rgba(0,0,0, 0.01)';
  function waveAnimation(params) {
    requestAnimationFrame(waveAnimation);

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);

    for (let i = 0; i < canvas.width; i++) {
      ctx.lineTo(
        i,
        wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment),
      );
    }

    ctx.strokeStyle = 'hsl(200, 50%, 50%)';
    ctx.stroke();
    increment += wave.frequency;
  }
  waveAnimation();
  // wave animation
}
// WaveLine();

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

function solutionAnimate() {
  let tl = gsap.timeline();
  tl.fromTo('.line-top', 0.5, { opacity: 0 }, { opacity: 1 })
    .fromTo('.line-side', 0.5, { y: '-100%' }, { y: 0 })
    .fromTo('.line-side2', 0.5, { y: '-100%' }, { y: 0 })
    .fromTo('.left-line', 0.5, { x: '-101%' }, { x: '-25%' })
    .fromTo('.right-line', 0.5, { x: '101%' }, { x: '25%' }, '-=0.5');
}

// solution btn effect
function mouseEnterSolutionBtn() {
  let tl = gsap.timeline();
  tl.to('.left-line', 1, { x: '-10%' }).to('.right-line', 1, { x: '10%' }, '-=1');
}

function mouseOutSolutionBtn() {
  let tl = gsap.timeline();
  tl.to('.left-line', 1, { x: '-25%' }).to('.right-line', 1, { x: '25%' }, '-=1');
}
let solutionBtn = getNode('.solution .section-btn');

if (solutionBtn) {
  solutionBtn.addEventListener('mouseenter', mouseEnterSolutionBtn);
  solutionBtn.addEventListener('mouseout', mouseOutSolutionBtn);
}
// solution btn effect

function aboutSlider() {
  if (getNode('.about__swiper-img')) {
    let aboutSwiperImg = new Swiper('.about__swiper-img', {});
    let aboutSwiperText = new Swiper('.about__swiper-text', {
      simulateTouch: false,
      allowTouchMove: false,
      spaceBetween: 100,
      speed: 2000,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      draggable: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    aboutSwiperImg.on('slideChange', function (e) {
      let tl = gsap.timeline();
      tl.fromTo(
        '.test',
        2,
        {
          width: '100%',
        },
        { width: '0' },
        '2',
      );
    });

    aboutSwiperImg.controller.control = aboutSwiperText;
    aboutSwiperText.controller.control = aboutSwiperImg;
    /* ------------- last --------------- */
  }
}
function aboutSliderReset() {
  if (getNode('.about-slide')) {
    let el = getNode('.about-slide-content .swiper-container');
    el.swiper.autoplay.start();
    el.classList.remove('swiper-paused');

    const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');

    activeNavItem.classList.remove('swiper-pagination-bullet-active');
    // activeNavItem.style.animation = 'none';

    setTimeout(() => {
      activeNavItem.classList.add('swiper-pagination-bullet-active');
      // activeNavItem.style.animation = '';
    }, 10);
  }
}
function agreementSlider() {
  if (getNode('.agreement')) {
    let agreementSwiperText = new Swiper('.agreement__swiper-text', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      speed: 2000,
      // autoplay: {
      //   delay: 10000,
      // },
    });
    let agreementSwiperImg = new Swiper('.agreement__swiper-img', {});
    agreementSwiperImg.controller.control = agreementSwiperText;
    agreementSwiperText.controller.control = agreementSwiperImg;
    let agreementBlock = getNode('.agreement .fp-tableCell');
    addClass(agreementBlock, 'scrollable-content');

    agreementSwiperText.on('slideChange', function (e) {
      var swiper = this;
      var currentIndex = swiper.realIndex + 1;
      let tl = gsap.timeline();
      tl.fromTo('.agreement-descrition__text span', 1, { width: 0 }, { width: '45%' }, 2);
      if (swiper.isEnd) {
        removeClass(agreementBlock, 'scrollable-content');
      } else {
        addClass(agreementBlock, 'scrollable-content');
      }
      if (currentIndex == 1) {
        removeClass(agreementBlock, 'scrollable-content');
      }
    });
  }
}

function fullPage() {
  new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
    lockAnchors: false,
    anchors: ['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6'],
    navigation: true,
    navigationPosition: 'left',
    // scrollOverflow: true,
    normalScrollElements: '.scrollable-content',
    onLeave: function (index, nextIndex, direction) {
      aboutSliderReset();
      if (nextIndex.index == 1 && getNode('.agreement')) {
        let agreementBlock = getNode('.agreement .fp-tableCell');
        addClass(agreementBlock, 'scrollable-content');
      }
      if (getNode('.video-solution')) {
        getNode('.video-solution').play();
      }
    },
  });
}

function mouseEnterBmtLeft(node) {
  let tl = gsap.timeline();
  tl.to(node, 1, { width: '490px' })
    .to(`${node} .bmt-line__left-plus`, 1, { rotation: '-180' }, '-=1')
    .to(`${node} .bmt-line__right-plus`, 1, { rotation: '180' }, '-=1');
}
function mouseOutBmtRight(node) {
  let tl = gsap.timeline();
  let bgLeft = CSSRulePlugin.getRule('.bmt .left::before');
  let bgRight = CSSRulePlugin.getRule('.bmt .right::before');
  tl.to(node, 1, {
    width: '245px',
  })
    .to(`${node} .bmt-line__left-plus`, 1, { rotation: '0' }, '-=1')
    .to(`${node} .bmt-line__right-plus`, 1, { rotation: '0' }, '-=1')
    .to(bgLeft, 1, { backgroundColor: '#000000', opacity: 0.5 }, '-=1')
    .to(bgRight, 1, { backgroundColor: '#000000', opacity: 0.5 }, '-=1')
    .to('.bmt-line__left-textBottom', 0.5, { opacity: 0 }, '-=1')
    .to('.bmt-line__right-textBottom', 0.5, { opacity: 0 }, '-=1');
}

function bmtSection() {
  let leftBtn = getNode('.left_btn');
  let rightBtn = getNode('.right_btn');
  if (getNode('.bmt')) {
    // hover
    leftBtn.addEventListener('mouseenter', () => {
      mouseEnterBmtLeft('.bmt-line__left');
      let bgLeft = CSSRulePlugin.getRule('.bmt .left::before');

      gsap.to(bgLeft, 1, { backgroundColor: '#29B7B8', opacity: 0.7 }, '-=1');
      gsap.to('.bmt-line__left-textBottom', 1, { opacity: 1 }, '0.5');
    });
    leftBtn.addEventListener('mouseout', () => {
      mouseOutBmtRight('.bmt-line__left');
    });

    rightBtn.addEventListener('mouseenter', () => {
      mouseEnterBmtLeft('.bmt-line__right');
      let bgRight = CSSRulePlugin.getRule('.bmt .right::before');

      gsap.to(bgRight, 1, { backgroundColor: '#29B7B8', opacity: 0.7 });
      gsap.to('.bmt-line__right-textBottom', 1, { opacity: 1 });
    });
    rightBtn.addEventListener('mouseout', () => {
      mouseOutBmtRight('.bmt-line__right');
    });

    let bmtSection = getNode('.bmt');
    let header = getNode('.header');
    let bmtRowBtn = getNodes('.bmt-row__btn');
    let bmtLineLeft = getNode('.bmt-line__left');
    let bmtLineRight = getNode('.bmt-line__right');

    // on-click
    rightBtn.addEventListener('click', function () {
      addClass(bmtSection, 'active-left');
      let tl = gsap.timeline();
      tl.to('.bmt-row', 1, { visibility: 'visible' }).to('.bmt-row', 1, {
        opacity: 1,
      });
      // .to(bmtLineRight, 1, { width: '2000px' }, '-=1');
      addClass(header, 'active-bg-left');
    });

    leftBtn.addEventListener('click', function () {
      addClass(bmtSection, 'active-right');
      let tl = gsap.timeline();
      tl.to('.bmt-row', 1, { visibility: 'visible' }).to('.bmt-row', 1, {
        opacity: 1,
      });
      addClass(header, 'active-bg-right');
    });

    bmtRowBtn[0].addEventListener('click', function () {
      removeClass(bmtSection, 'active-left');
      removeClass(header, 'active-bg-left');

      let tl = gsap.timeline();

      tl.to('.bmt-row', 1, {
        opacity: 0,
      }).to('.bmt-row', 1, { visibility: 'hidden' });
    });

    bmtRowBtn[1].addEventListener('click', function () {
      removeClass(bmtSection, 'active-right');
      removeClass(header, 'active-bg-right');

      let tl = gsap.timeline();

      tl.to('.bmt-row', 1, {
        opacity: 0,
      }).to('.bmt-row', 1, { visibility: 'hidden' });
    });
  }
}

function destroyFullPage() {
  fullpage_api.destroy('all');
}

function startFullPage(header) {
  const lmenu = document.querySelector('.dp-page_lmenu');

  fullPage(lmenu, header);
}

function init() {
  fullPage();
  problemAnimate();
  solutionAnimate();

  aboutSlider();
  agreementSlider();
  bmtSection();
}
init();

const swup = new Swup({
  plugins: [new SwupSlideTheme()],
});

swup.on('willReplaceContent', function () {
  destroyFullPage();
});

swup.on('contentReplaced', function () {
  startFullPage();
  init();
});
