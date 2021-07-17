// Importing Helpers
import { NodeHelper, FuncsHelper } from './modules/Helpers';
// Getting Methods from Helpers
const { getNode, getNodes, addClass, removeClass, nextNode } = new NodeHelper();
const { imgLoadHelper } = new FuncsHelper();

// Invoking Functions from Helper

function addHeader() {
  if (getNode('.home')) {
    let tl = gsap.timeline();
    tl.to(
      '.header__block',
      1,
      {
        y: 0,
      },
      '-=1',
    )
      .to('.home .page-subtitle div', 1, {
        y: 0,
      })
      .to(
        '.home .page-title div',
        1,
        {
          y: 0,
        },
        '-=1',
      )
      .to('.scroll', 1, {
        opacity: 1,
      })
      .to('.fp-left', 1, { opacity: 1 });
  }
}

function problemAnimate() {
  if (getNode('.problem')) {
    let tl = gsap.timeline();
    const duration = 0.3;
    tl.fromTo('.problem-dots1', duration, { opacity: 0 }, { opacity: 1 }, 1)
      .fromTo('.problem-text .bg', duration, { width: 0 }, { width: '100%' })
      .fromTo('.problem-text .text', duration, { opacity: 0 }, { opacity: 1 })
      .fromTo('.problem-dots2', duration, { opacity: 0 }, { opacity: 1 }, `-=${duration}`)
      .fromTo('.problem-plus', duration, { opacity: 0 }, { opacity: 1 })
      .fromTo(
        '.problem-plus',
        duration,
        { transform: 'rotate(-90deg)' },
        { transform: 'rotate(0deg)' },
      )
      .fromTo('.problem-line .first', duration, { x: '-100%' }, { x: '0' })
      .fromTo('.problem-line .second', duration, { x: '-100%' }, { x: '0' }, '-=0.25')
      .fromTo('.problem-category__item .bg', duration, { width: 0 }, { width: '100%' })
      .fromTo('.problem-category__later', duration, { opacity: 0 }, { opacity: 1 })
      .fromTo('.problem-category__text', duration, { opacity: 0 }, { opacity: 1 }, `-=${duration}`)
      .to('.problem-text .bg', duration, { width: '0' })
      .to('.problem-category__item .bg', duration, { width: '0' }, `-=${duration}`);
  }
}

function solutionAnimate() {
  let solution = getNode('.solution');
  const duration = 0.3;
  if (solution) {
    let tl = gsap.timeline();
    tl.fromTo('.line-top', duration, { opacity: 0 }, { opacity: 1 })
      .fromTo('.line-side', duration, { y: '-100%' }, { y: 0 })
      .fromTo('.line-side2', duration, { y: '-100%' }, { y: 0 })
      .fromTo('.left-line', duration, { x: '-101%' }, { x: '-25%' })
      .fromTo('.right-line', duration, { x: '101%' }, { x: '25%' }, `-=${duration}`);
    function mouseEnterSolutionBtn() {
      let tl = gsap.timeline();
      tl.to('.left-line', duration, { x: '-10%' }).to(
        '.right-line',
        duration,
        { x: '10%' },
        `-=${duration}`,
      );
    }

    function mouseOutSolutionBtn() {
      let tl = gsap.timeline();
      tl.to('.left-line', duration, { x: '-25%' }).to(
        '.right-line',
        duration,
        { x: '25%' },
        `-=${duration}`,
      );
    }
    let solutionBtn = getNode('.solution .section-btn');

    solutionBtn.addEventListener('mouseenter', mouseEnterSolutionBtn);
    solutionBtn.addEventListener('mouseout', mouseOutSolutionBtn);
  }
}

function benefitsAnimation() {
  let benefitsNode = getNode('.benefits');
  const duration = 0.5;
  if (benefitsNode) {
    let tl = gsap.timeline();
    tl.fromTo('.bg__white', 0.5, { width: 0 }, { width: '100%' }, 3)
      .fromTo('.benefits-item__text-show', 0.5, { left: '80px' }, { left: '-100%' })
      .fromTo('.benefits-item__text-hidden', 0.3, { opacity: 0 }, { opacity: 1 }, '-=0.5')
      .to('.bg__white', duration, { width: 0 });
  }
}

function contactAnimation() {
  let contactNode = getNode('.contact');
  if (contactNode) {
    let tl = gsap.timeline();
    tl.fromTo('.bg_hidden', 0.5, { x: 0 }, { x: '-2000px' }, 1)
      .fromTo('.map-address', 1, { left: '-100%' }, { left: '50px' })
      .fromTo('.map-address p', 1, { opacity: 0 }, { opacity: 1 })
      .fromTo('.contact .home-content', 1, { opacity: 0 }, { opacity: 1 }, '-=1');
  }
}
function swupDarkPagination() {}
swupDarkPagination();

function aboutSlider() {
  if (getNode('.about__swiper-img')) {
    let aboutSwiperImg = new Swiper('.about__swiper-img', {
      spaceBetween: 150,
    });
    let aboutSwiperText = new Swiper('.about__swiper-text', {
      simulateTouch: false,
      allowTouchMove: false,
      // parallax: true,
      spaceBetween: 100,
      speed: 1000,
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
        1,
        {
          width: '100%',
        },
        { width: '0' },
        '0.7',
      );
    });

    aboutSwiperImg.controller.control = aboutSwiperText;
    aboutSwiperText.controller.control = aboutSwiperImg;
    /* ------------- last --------------- */
  }
}

function agreementSlider() {
  if (getNode('.agreement')) {
    let agreementSwiperText = new Swiper('.agreement__swiper-text', {
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      speed: 1500,
      simulateTouch: false,
      allowTouchMove: false,
      // parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
    });
    let agreementSwiperImg = new Swiper('.agreement__swiper-img', {
      spaceBetween: 300,
    });

    agreementSwiperImg.controller.control = agreementSwiperText;
    agreementSwiperText.controller.control = agreementSwiperImg;

    agreementSwiperText.on('slideChange', function (e) {
      let tl = gsap.timeline();
      tl.fromTo(
        '.agreement_test',
        1.3,
        {
          width: '100%',
        },
        { width: '0' },
        '1.3',
      );
    });
  }
}
/* ------ text animation ------ */
const textAnime = (nodes) => {
  var tl = gsap.timeline();
  tl.fromTo(
    nodes,
    1,
    { y: '100%', opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.3,
    },
  );
};

function fullPage() {
  new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
    lockAnchors: false,
    // anchors: ['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6'],
    navigation: true,
    showActiveTooltip: true,
    navigationPosition: 'left',
    // scrollOverflow: true,
    scrollingSpeed: 1500,
    normalScrollElements: '.scrollable-content',
    onLeave: function (index, nextIndex, direction) {
      // aboutSliderReset();

      if (getNode('.video-solution')) {
        getNode('.video-solution').play();
      }
      if (getNode('.bad-grid')) {
        getNode('.bad-grid').play();
      }
      if (getNode('.off-grid')) {
        getNode('.off-grid').play();
      }
      if (getNode('.benefits')) {
        getNode('.video-benefits').play();
      }

      /* --------full page------ */

      if (nextIndex.index == 3) {
        problemAnimate();
      }
      if (nextIndex.index == 5 && direction == 'down') {
        benefitsAnimation();
      }
      if (direction == 'down') {
        if (getNode('.main-page')) {
          textAnime('.home .animate-text span');
          textAnime('.home-about .animate-text span');
          textAnime('.market .animate-text span');
          textAnime('.problem .animate-text span');
          textAnime('.solution .animate-text span');
          solutionAnimate();
        } else if (getNode('.about-page')) {
          textAnime('.about .animate-text span');
          textAnime('.agreement .animate-text span');
          textAnime('.bmt .animate-text span');
        } else if (getNode('.solution-page')) {
          textAnime('.solution-m .animate-text span');
          textAnime('.first .animate-text span');
          textAnime('.second .animate-text span');
          textAnime('.off .animate-text span');
          textAnime('.off-solution .animate-text span');
          textAnime('.benefits .animate-text span');
        } else if (getNode('.partners-page')) {
          textAnime('.first .animate-text span');
          textAnime('.partners .animate-text span');
          textAnime('.map .animate-text span');
        }
      }
    },
  });
}

function bmtSection() {
  const duration = 0.5;
  function mouseEnterBmtLeft(node) {
    let tl = gsap.timeline();

    tl.to(node, duration, { width: '490px' })
      .to(`${node} .bmt-line__left-plus`, duration, { rotation: '-180' }, `-=${duration}`)
      .to(`${node} .bmt-line__right-plus`, duration, { rotation: '180' }, `-=${duration}`);
  }
  function mouseOutBmtRight(node) {
    let tl = gsap.timeline();
    let bgLeft = CSSRulePlugin.getRule('.bmt .left::before');
    let bgRight = CSSRulePlugin.getRule('.bmt .right::before');
    tl.to(node, duration, {
      width: '245px',
    })
      .to(`${node} .bmt-line__left-plus`, duration, { rotation: '0' }, `-=${duration}`)
      .to(`${node} .bmt-line__right-plus`, duration, { rotation: '0' }, `-=${duration}`)
      .to(bgLeft, duration, { backgroundColor: '#000000', opacity: 0.5 }, `-=${duration}`)
      .to(bgRight, duration, { backgroundColor: '#000000', opacity: 0.5 }, `-=${duration}`)
      .to('.bmt-line__left-textBottom', duration, { opacity: 0 }, `-=${duration}`)
      .to('.bmt-line__right-textBottom', duration, { opacity: 0 }, `-=${duration}`);
  }

  let leftBtn = getNode('.left_btn');
  let rightBtn = getNode('.right_btn');
  if (getNode('.bmt')) {
    // hover
    leftBtn.addEventListener('mouseenter', () => {
      mouseEnterBmtLeft('.bmt-line__left');
      let bgLeft = CSSRulePlugin.getRule('.bmt .left::before');

      gsap.to(bgLeft, duration, { backgroundColor: '#29B7B8', opacity: 0.7 }, `-=${duration}`);
      gsap.to('.bmt-line__left-textBottom', duration, { opacity: 1 }, '0.5');
    });
    leftBtn.addEventListener('mouseout', () => {
      mouseOutBmtRight('.bmt-line__left');
    });

    rightBtn.addEventListener('mouseenter', () => {
      mouseEnterBmtLeft('.bmt-line__right');
      let bgRight = CSSRulePlugin.getRule('.bmt .right::before');

      gsap.to(bgRight, duration, { backgroundColor: '#29B7B8', opacity: 0.7 });
      gsap.to('.bmt-line__right-textBottom', duration, { opacity: 1 });
    });
    rightBtn.addEventListener('mouseout', () => {
      mouseOutBmtRight('.bmt-line__right');
    });

    let bmtSection = getNode('.bmt');
    let bmtRowBtn = getNodes('.bmt-row__btn');

    // on-click
    rightBtn.addEventListener('click', function () {
      addClass(bmtSection, 'active-left');
      let tl = gsap.timeline();
      tl.to('.bmt-row', duration, { visibility: 'visible' }).to('.bmt-row', duration, {
        opacity: 1,
      });
    });

    leftBtn.addEventListener('click', function () {
      addClass(bmtSection, 'active-right');
      let tl = gsap.timeline();
      tl.to('.bmt-row', duration, { visibility: 'visible' }).to('.bmt-row', duration, {
        opacity: 1,
      });
    });

    bmtRowBtn[0].addEventListener('click', function () {
      removeClass(bmtSection, 'active-left');

      let tl = gsap.timeline();

      tl.to('.bmt-row', duration, {
        opacity: 0,
      }).to('.bmt-row', duration, { visibility: 'hidden' });
    });

    bmtRowBtn[1].addEventListener('click', function () {
      removeClass(bmtSection, 'active-right');

      let tl = gsap.timeline();

      tl.to('.bmt-row', duration, {
        opacity: 0,
      }).to('.bmt-row', duration, { visibility: 'hidden' });
    });
  }
}

function mapSection() {
  if (getNode('.map')) {
    let mapWorld = getNode('.map__world');
    /* ------------ */
    let affrica = getNode('.africa1');
    let affricaAlert = getNode('.map-alert__africa');
    let affrica1map = getNode('.africa_1');
    /* ------------ */
    let affrica2 = getNode('.africa2');
    let affrica2Alert = getNode('.map-alert__africa2');
    let affrica2map = getNode('.africa_2');
    /* ------------ */
    let india = getNode('.india');
    let indiaAlert = getNode('.map-alert__india');
    let indiaMap = getNode('.south-asia_india');
    /* ------------ */
    let asia1 = getNode('.asia1');
    let asia1Alert = getNode('.map-alert__asia1');
    let asia1map = getNode('.south-asia_1');
    /* ------------ */
    let asia2 = getNode('.asia2');
    let asia2Alert = getNode('.map-alert__asia2');
    let asia2map = getNode('.south-asia_2');

    function showMapAddress(node, alertNode, nodeMap) {
      node.addEventListener('click', function () {
        addClass(alertNode, 'active');
        addClass(nodeMap, 'active');
      });
    }
    showMapAddress(affrica, affricaAlert, affrica1map);
    showMapAddress(affrica2, affrica2Alert, affrica2map);
    showMapAddress(india, indiaAlert, indiaMap);
    showMapAddress(asia1, asia1Alert, asia1map);
    showMapAddress(asia2, asia2Alert, asia2map);

    function hiddenMap(nodeAlert, nodeMap) {
      removeClass(nodeAlert, 'active');
      removeClass(nodeMap, 'active');
    }
    mapWorld.addEventListener('click', function (e) {
      if (affrica != e.target) {
        hiddenMap(affricaAlert, affrica1map);
      }
      if (affrica2 != e.target) {
        hiddenMap(affrica2Alert, affrica2map);
      }
      if (india != e.target) {
        hiddenMap(indiaAlert, indiaMap);
      }
      if (asia1 != e.target) {
        hiddenMap(asia1Alert, asia1map);
      }
      if (asia2 != e.target) {
        hiddenMap(asia2Alert, asia2map);
      }
    });
  }
}

function destroyFullPage() {
  fullpage_api.destroy('all');
}

/* function startFullPage(header) {
  const lmenu = document.querySelector('.dp-page_lmenu');

  fullPage(lmenu, header);
} */

const textAnime2 = (nodes) => {
  var tl = gsap.timeline();
  tl.to(nodes, 0.5, {
    y: 0,
    opacity: 1,
    stagger: 0.3,
  });
};

const scrollTop = 400;
function getPosTop(node) {
  return getNode(node).getBoundingClientRect().y < scrollTop;
}

function mobileScreen() {
  window.addEventListener('scroll', function () {
    // console.log(getNode(".home-about").getBoundingClientRect().y);

    if (getNode('.main-page')) {
      if (getPosTop('.home-about')) {
        textAnime2('.home-about .animate-text span');
        let homeAboutBG = CSSRulePlugin.getRule('.home-about .section-img::before');
        gsap.to(homeAboutBG, 0.5, { width: 0 });
      }
      if (getPosTop('.market')) {
        textAnime2('.market .animate-text span');
        const node = CSSRulePlugin.getRule('.market-item__text::before');
        gsap.to(node, 0.5, { width: '50%' });
      }
      if (getPosTop('.problem')) {
        textAnime2('.problem .animate-text span');
        let tl = gsap.timeline();
        tl.to('.problem-text .bg', 1, { width: '0%' }, 2).to(
          '.problem-category__item .bg',
          1,
          { width: '0%' },
          '-=1',
        );
      }
    }
  });

  // menu bureger
  getNode('.menu-btn').addEventListener('click', function (params) {
    getNode('.menu-btn').classList.toggle('active');
    getNode('.mob-menu').classList.toggle('active');

    let tl = gsap.timeline();
    tl.fromTo('.mob-navabr li', 0.3, { y: '-100%' }, { y: '0', stagger: 0.1 });
  });

  const menu = getNodes('.mob-navabr li a');
  for (let index = 0; index < menu.length; index++) {
    menu[index].addEventListener('click', function (params) {
      removeClass(getNode('.menu-btn', 'active'));
      removeClass(getNode('.mob-menu', 'active'));
    });
  }

  // if (getNode(".main-page")) {
  //   textAnime(".home .animate-text span");
  //   textAnime(".home-about .animate-text span");
  //   textAnime(".market .animate-text span");
  //   textAnime(".problem .animate-text span");
  //   textAnime(".solution .animate-text span");
  //   solutionAnimate();
  // } else if (getNode(".about-page")) {
  //   textAnime(".about .animate-text span");
  //   textAnime(".agreement .animate-text span");
  //   textAnime(".bmt .animate-text span");
  // } else if (getNode(".solution-page")) {
  //   textAnime(".solution-m .animate-text span");
  //   textAnime(".first .animate-text span");
  //   textAnime(".second .animate-text span");
  //   textAnime(".off .animate-text span");
  //   textAnime(".off-solution .animate-text span");
  //   textAnime(".benefits .animate-text span");
  // } else if (getNode(".partners-page")) {
  //   textAnime(".first .animate-text span");
  //   textAnime(".partners .animate-text span");
  //   textAnime(".map .animate-text span");
  // }
}

function init() {
  fullPage();

  aboutSlider();
  agreementSlider();
  bmtSection();

  mapSection();
  contactAnimation();

  if (getNode('.about-page') || getNode('.partners-page')) {
    addClass(getNode('body'), 'dark-dots');
  }
  if (window.innerWidth <= 1024) {
    destroyFullPage();
    mobileScreen();
  }
}
init();

let preloader = () => {
  if (getNode('.preloader')) {
    addClass(getNode('body'), 'addd');
    gsap.to('body', 0.3, { overflow: 'hidden' });
    history.scrollRestoration = 'manual';

    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }

    fullpage_api.moveTo('page-1', 1);
    fullpage_api.silentMoveTo('page-1', 1);
    fullpage_api.setAllowScrolling(false);
    let tl = gsap.timeline();
    tl.to(
      '.header__block',
      0.1,
      {
        y: '-50px',
      },
      '-=1',
    )
      .to(
        '.home video',
        0.1,
        {
          filter: 'blur(15px)',
        },
        '-=1',
      )
      .to('.home .page-subtitle div', 0.1, {
        y: '100%',
      })
      .to(
        '.home .page-title div',
        0.1,
        {
          y: '100%',
        },
        '-=1',
      )
      .to('.scroll', 0.1, {
        opacity: 0,
      });

    let counter = 0;

    let $counterNode = getNode('.preloader__counter'),
      $preloaderNode = getNode('.preloader'),
      bgPreloader = CSSRulePlugin.getRule('.preloader::before');

    let i = setInterval(() => {
      counter++;

      $counterNode.textContent = `${counter}%`;
      if (counter === 15) {
        gsap.to(bgPreloader, 3, { opacity: 0 });
      }
      if (counter === 80) {
        gsap.to(bgPreloader, 2, { opacity: 1 });
        // gsap.fromTo('.navbar', 1, { y: -100 }, { y: 0 });
      }
      if (counter === 100) {
        setTimeout(() => {
          let tl = gsap.timeline();
          tl.to($preloaderNode, 1, { opacity: 0 })
            .to('.home video', 1, {
              filter: 'blur(0px)',
            })
            .to(
              '.header__block',
              1,
              {
                y: 0,
              },
              '-=1',
            )
            .to('.home .page-subtitle div', 1, {
              y: 0,
            })
            .to(
              '.home .page-title div',
              1,
              {
                y: 0,
              },
              '-=1',
            )
            .to('.scroll', 1, {
              opacity: 1,
            });

          setTimeout(() => {
            $preloaderNode.style.display = 'none';
            fullpage_api.setAllowScrolling(true);
            removeClass('body', 'addd');
            gsap.to('body', 0.1, { overflow: 'visible' });
            gsap.fromTo(' #fp-nav', 1, { opacity: 0 }, { opacity: 1 }, 1);
          }, 1000);
        }, 1500);
        clearInterval(i);
      }
    }, 10);
  }
};
preloader();

const swup = new Swup({
  plugins: [
    new SwupOverlayTheme({
      color: '#151515',
      duration: 1000,
      direction: 'to-right',
    }),
  ],
});

swup.on('willReplaceContent', function () {
  destroyFullPage();
  if (getNode('.about-page') || getNode('.partners-page')) {
    removeClass(getNode('body'), 'dark-dots');
  }
});

swup.on('contentReplaced', function () {
  /*  startFullPage(); */
  init();
});
