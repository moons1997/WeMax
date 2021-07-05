(()=>{"use strict";var __webpack_modules__={"./app/js/index.js":
/*!*************************!*\
  !*** ./app/js/index.js ***!
  \*************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Helpers */ \"./app/js/modules/Helpers.js\");\n// Importing Helpers\r\n\r\n// Getting Methods from Helpers\r\nconst { getNode, getNodes, addClass, removeClass, nextNode } = new _modules_Helpers__WEBPACK_IMPORTED_MODULE_0__.NodeHelper();\r\nconst { imgLoadHelper } = new _modules_Helpers__WEBPACK_IMPORTED_MODULE_0__.FuncsHelper();\r\n\r\n// Invoking Functions from Helper\r\n\r\nfunction WaveLine(params) {\r\n  // wave animation\r\n  const canvas = getNode('canvas');\r\n  const ctx = canvas.getContext('2d');\r\n\r\n  canvas.width = innerWidth;\r\n  canvas.height = innerHeight;\r\n\r\n  const wave = {\r\n    y: canvas.height / 2,\r\n    length: -0.006,\r\n    amplitude: 400,\r\n    frequency: 0.01,\r\n  };\r\n\r\n  let increment = wave.frequency;\r\n  ctx.fillStyle = 'rgba(0,0,0, 0.01)';\r\n  function waveAnimation(params) {\r\n    requestAnimationFrame(waveAnimation);\r\n\r\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\r\n    ctx.beginPath();\r\n    ctx.moveTo(0, canvas.height);\r\n\r\n    for (let i = 0; i < canvas.width; i++) {\r\n      ctx.lineTo(\r\n        i,\r\n        wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment),\r\n      );\r\n    }\r\n\r\n    ctx.strokeStyle = 'hsl(200, 50%, 50%)';\r\n    ctx.stroke();\r\n    increment += wave.frequency;\r\n  }\r\n  waveAnimation();\r\n  // wave animation\r\n}\r\n// WaveLine();\r\n\r\nfunction problemAnimate() {\r\n  let tl = gsap.timeline();\r\n\r\n  tl.fromTo('.problem-dots1', 0.5, { opacity: 0 }, { opacity: 1 })\r\n    .fromTo('.problem-text .bg', 0.5, { width: 0 }, { width: '100%' })\r\n    .fromTo('.problem-text .text', 0.5, { opacity: 0 }, { opacity: 1 })\r\n    .fromTo('.problem-dots2', 0.5, { opacity: 0 }, { opacity: 1 }, '-=0.5')\r\n    .fromTo('.problem-plus', 0.5, { opacity: 0 }, { opacity: 1 })\r\n    .fromTo('.problem-plus', 0.5, { transform: 'rotate(-90deg)' }, { transform: 'rotate(0deg)' })\r\n    .fromTo('.problem-line .first', 0.5, { x: '-100%' }, { x: '0' })\r\n    .fromTo('.problem-line .second', 0.5, { x: '-100%' }, { x: '0' }, '-=0.25')\r\n    .fromTo('.problem-category__item .bg', 0.5, { width: 0 }, { width: '100%' })\r\n    .fromTo('.problem-category__later', 0.5, { opacity: 0 }, { opacity: 1 })\r\n    .fromTo('.problem-category__text', 0.5, { opacity: 0 }, { opacity: 1 }, '-=0.5')\r\n    .fromTo('.problem-text .bg', 0.5, { width: '100%' }, { width: '0' })\r\n    .to('.problem-category__item .bg', 0.5, { width: '0' }, '-=0.5');\r\n}\r\n\r\nfunction solutionAnimate() {\r\n  let tl = gsap.timeline();\r\n  tl.fromTo('.line-top', 0.5, { opacity: 0 }, { opacity: 1 })\r\n    .fromTo('.line-side', 0.5, { y: '-100%' }, { y: 0 })\r\n    .fromTo('.line-side2', 0.5, { y: '-100%' }, { y: 0 })\r\n    .fromTo('.left-line', 0.5, { x: '-101%' }, { x: '-25%' })\r\n    .fromTo('.right-line', 0.5, { x: '101%' }, { x: '25%' }, '-=0.5');\r\n}\r\n\r\n// solution btn effect\r\nfunction mouseEnterSolutionBtn() {\r\n  let tl = gsap.timeline();\r\n  tl.to('.left-line', 1, { x: '-10%' }).to('.right-line', 1, { x: '10%' }, '-=1');\r\n}\r\n\r\nfunction mouseOutSolutionBtn() {\r\n  let tl = gsap.timeline();\r\n  tl.to('.left-line', 1, { x: '-25%' }).to('.right-line', 1, { x: '25%' }, '-=1');\r\n}\r\nlet solutionBtn = getNode('.solution .section-btn');\r\n\r\nif (solutionBtn) {\r\n  solutionBtn.addEventListener('mouseenter', mouseEnterSolutionBtn);\r\n  solutionBtn.addEventListener('mouseout', mouseOutSolutionBtn);\r\n}\r\n// solution btn effect\r\n\r\nfunction aboutSlider() {\r\n  if (getNode('.about__swiper-img')) {\r\n    let aboutSwiperImg = new Swiper('.about__swiper-img', {});\r\n    let aboutSwiperText = new Swiper('.about__swiper-text', {\r\n      simulateTouch: false,\r\n      allowTouchMove: false,\r\n      spaceBetween: 100,\r\n      speed: 2000,\r\n      autoplay: {\r\n        delay: 10000,\r\n        disableOnInteraction: false,\r\n      },\r\n      draggable: false,\r\n      pagination: {\r\n        el: '.swiper-pagination',\r\n        clickable: true,\r\n      },\r\n    });\r\n    aboutSwiperImg.on('slideChange', function (e) {\r\n      let tl = gsap.timeline();\r\n      tl.fromTo(\r\n        '.test',\r\n        2,\r\n        {\r\n          width: '100%',\r\n        },\r\n        { width: '0' },\r\n        '2',\r\n      );\r\n    });\r\n\r\n    aboutSwiperImg.controller.control = aboutSwiperText;\r\n    aboutSwiperText.controller.control = aboutSwiperImg;\r\n    /* ------------- last --------------- */\r\n  }\r\n}\r\nfunction aboutSliderReset() {\r\n  if (getNode('.about-slide')) {\r\n    let el = getNode('.about-slide-content .swiper-container');\r\n    el.swiper.autoplay.start();\r\n    el.classList.remove('swiper-paused');\r\n\r\n    const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');\r\n\r\n    activeNavItem.classList.remove('swiper-pagination-bullet-active');\r\n    // activeNavItem.style.animation = 'none';\r\n\r\n    setTimeout(() => {\r\n      activeNavItem.classList.add('swiper-pagination-bullet-active');\r\n      // activeNavItem.style.animation = '';\r\n    }, 10);\r\n  }\r\n}\r\nfunction agreementSlider() {\r\n  if (getNode('.agreement')) {\r\n    let agreementSwiperText = new Swiper('.agreement__swiper-text', {\r\n      direction: 'vertical',\r\n      slidesPerView: 1,\r\n      spaceBetween: 30,\r\n      mousewheel: true,\r\n      speed: 2000,\r\n      // autoplay: {\r\n      //   delay: 10000,\r\n      // },\r\n    });\r\n    let agreementSwiperImg = new Swiper('.agreement__swiper-img', {});\r\n    agreementSwiperImg.controller.control = agreementSwiperText;\r\n    agreementSwiperText.controller.control = agreementSwiperImg;\r\n    let agreementBlock = getNode('.agreement .fp-tableCell');\r\n    addClass(agreementBlock, 'scrollable-content');\r\n\r\n    agreementSwiperText.on('slideChange', function (e) {\r\n      var swiper = this;\r\n      var currentIndex = swiper.realIndex + 1;\r\n      let tl = gsap.timeline();\r\n      tl.fromTo('.agreement-descrition__text span', 1, { width: 0 }, { width: '45%' }, 2);\r\n      if (swiper.isEnd) {\r\n        removeClass(agreementBlock, 'scrollable-content');\r\n      } else {\r\n        addClass(agreementBlock, 'scrollable-content');\r\n      }\r\n      if (currentIndex == 1) {\r\n        removeClass(agreementBlock, 'scrollable-content');\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\nfunction fullPage() {\r\n  new fullpage('#fullpage', {\r\n    licenseKey: 'YOUR KEY HERE',\r\n    lockAnchors: false,\r\n    anchors: ['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6'],\r\n    navigation: true,\r\n    navigationPosition: 'left',\r\n    // scrollOverflow: true,\r\n    normalScrollElements: '.scrollable-content',\r\n    onLeave: function (index, nextIndex, direction) {\r\n      aboutSliderReset();\r\n      if (nextIndex.index == 1 && getNode('.agreement')) {\r\n        let agreementBlock = getNode('.agreement .fp-tableCell');\r\n        addClass(agreementBlock, 'scrollable-content');\r\n      }\r\n      if (getNode('.video-solution')) {\r\n        getNode('.video-solution').play();\r\n      }\r\n    },\r\n  });\r\n}\r\n\r\nfunction mouseEnterBmtLeft(node) {\r\n  let tl = gsap.timeline();\r\n  tl.to(node, 1, { width: '490px' })\r\n    .to(`${node} .bmt-line__left-plus`, 1, { rotation: '-180' }, '-=1')\r\n    .to(`${node} .bmt-line__right-plus`, 1, { rotation: '180' }, '-=1');\r\n}\r\nfunction mouseOutBmtRight(node) {\r\n  let tl = gsap.timeline();\r\n  let bgLeft = CSSRulePlugin.getRule('.bmt .left::before');\r\n  let bgRight = CSSRulePlugin.getRule('.bmt .right::before');\r\n  tl.to(node, 1, {\r\n    width: '245px',\r\n  })\r\n    .to(`${node} .bmt-line__left-plus`, 1, { rotation: '0' }, '-=1')\r\n    .to(`${node} .bmt-line__right-plus`, 1, { rotation: '0' }, '-=1')\r\n    .to(bgLeft, 1, { backgroundColor: '#000000', opacity: 0.5 }, '-=1')\r\n    .to(bgRight, 1, { backgroundColor: '#000000', opacity: 0.5 }, '-=1')\r\n    .to('.bmt-line__left-textBottom', 0.5, { opacity: 0 }, '-=1')\r\n    .to('.bmt-line__right-textBottom', 0.5, { opacity: 0 }, '-=1');\r\n}\r\n\r\nfunction bmtSection() {\r\n  let leftBtn = getNode('.left_btn');\r\n  let rightBtn = getNode('.right_btn');\r\n  if (getNode('.bmt')) {\r\n    // hover\r\n    leftBtn.addEventListener('mouseenter', () => {\r\n      mouseEnterBmtLeft('.bmt-line__left');\r\n      let bgLeft = CSSRulePlugin.getRule('.bmt .left::before');\r\n\r\n      gsap.to(bgLeft, 1, { backgroundColor: '#29B7B8', opacity: 0.7 }, '-=1');\r\n      gsap.to('.bmt-line__left-textBottom', 1, { opacity: 1 }, '0.5');\r\n    });\r\n    leftBtn.addEventListener('mouseout', () => {\r\n      mouseOutBmtRight('.bmt-line__left');\r\n    });\r\n\r\n    rightBtn.addEventListener('mouseenter', () => {\r\n      mouseEnterBmtLeft('.bmt-line__right');\r\n      let bgRight = CSSRulePlugin.getRule('.bmt .right::before');\r\n\r\n      gsap.to(bgRight, 1, { backgroundColor: '#29B7B8', opacity: 0.7 });\r\n      gsap.to('.bmt-line__right-textBottom', 1, { opacity: 1 });\r\n    });\r\n    rightBtn.addEventListener('mouseout', () => {\r\n      mouseOutBmtRight('.bmt-line__right');\r\n    });\r\n\r\n    let bmtSection = getNode('.bmt');\r\n    let header = getNode('.header');\r\n    let bmtRowBtn = getNodes('.bmt-row__btn');\r\n    let bmtLineLeft = getNode('.bmt-line__left');\r\n    let bmtLineRight = getNode('.bmt-line__right');\r\n\r\n    // on-click\r\n    rightBtn.addEventListener('click', function () {\r\n      addClass(bmtSection, 'active-left');\r\n      let tl = gsap.timeline();\r\n      tl.to('.bmt-row', 1, { visibility: 'visible' }).to('.bmt-row', 1, {\r\n        opacity: 1,\r\n      });\r\n      // .to(bmtLineRight, 1, { width: '2000px' }, '-=1');\r\n      addClass(header, 'active-bg-left');\r\n    });\r\n\r\n    leftBtn.addEventListener('click', function () {\r\n      addClass(bmtSection, 'active-right');\r\n      let tl = gsap.timeline();\r\n      tl.to('.bmt-row', 1, { visibility: 'visible' }).to('.bmt-row', 1, {\r\n        opacity: 1,\r\n      });\r\n      addClass(header, 'active-bg-right');\r\n    });\r\n\r\n    bmtRowBtn[0].addEventListener('click', function () {\r\n      removeClass(bmtSection, 'active-left');\r\n      removeClass(header, 'active-bg-left');\r\n\r\n      let tl = gsap.timeline();\r\n\r\n      tl.to('.bmt-row', 1, {\r\n        opacity: 0,\r\n      }).to('.bmt-row', 1, { visibility: 'hidden' });\r\n    });\r\n\r\n    bmtRowBtn[1].addEventListener('click', function () {\r\n      removeClass(bmtSection, 'active-right');\r\n      removeClass(header, 'active-bg-right');\r\n\r\n      let tl = gsap.timeline();\r\n\r\n      tl.to('.bmt-row', 1, {\r\n        opacity: 0,\r\n      }).to('.bmt-row', 1, { visibility: 'hidden' });\r\n    });\r\n  }\r\n}\r\n\r\nfunction destroyFullPage() {\r\n  fullpage_api.destroy('all');\r\n}\r\n\r\nfunction startFullPage(header) {\r\n  const lmenu = document.querySelector('.dp-page_lmenu');\r\n\r\n  fullPage(lmenu, header);\r\n}\r\n\r\nfunction init() {\r\n  fullPage();\r\n  problemAnimate();\r\n  solutionAnimate();\r\n\r\n  aboutSlider();\r\n  agreementSlider();\r\n  bmtSection();\r\n}\r\ninit();\r\n\r\nconst swup = new Swup({\r\n  plugins: [new SwupSlideTheme()],\r\n});\r\n\r\nswup.on('willReplaceContent', function () {\r\n  destroyFullPage();\r\n});\r\n\r\nswup.on('contentReplaced', function () {\r\n  startFullPage();\r\n  init();\r\n});\r\n\n\n//# sourceURL=webpack://gulp-project/./app/js/index.js?")},"./app/js/modules/Helpers.js":
/*!***********************************!*\
  !*** ./app/js/modules/Helpers.js ***!
  \***********************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NodeHelper\": () => (/* binding */ NodeHelper),\n/* harmony export */   \"FuncsHelper\": () => (/* binding */ FuncsHelper)\n/* harmony export */ });\nclass NodeHelper {\n\n    getNode = $node =>  document.querySelector($node)\n\n    getNodes = $nodes =>  document.querySelectorAll($nodes)\n\n    addClass = ($node, className = '') => {\n        if (typeof $node === 'string') {\n            const $element = this.getNode($node) \n            if ($element) {\n                $element.classList.add(className)\n            }\n            return ''\n        }\n        $node.classList.add(className)\n    }\n\n    removeClass = ($node, className = '') => {\n        if (typeof $node === 'string') {\n            const $element = this.getNode($node) \n            if ($element) {\n                $element.classList.remove(className)\n            }\n            return ''\n        }\n        $node.classList.remove(className)\n    }\n\n    nextNode = ($currentNode) => {\n        if (typeof $currentNode === 'string') {\n            const $element = this.getNode($currentNode) \n            if ($element) {\n                return $element.nextElementSibling\n            }\n        }\n        return $currentNode.nextElementSibling\n    }\n\n}\n\nclass FuncsHelper {\n\n    imgLoadHelper = () => {\n        const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]')\n        const windowHeight = document.documentElement.clientHeight\n    \n        let lazyImagesPositions = [];\n        if (lazyImages.length > 0) {\n            lazyImages.forEach(img => {\n                if (img.dataset.src || img.dataset.srcset) {\n                    lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset)\n                    lazyScrollCheck()\n                }\n            })\n        }\n    \n        window.addEventListener('scroll', lazyScroll)\n    \n        function lazyScroll() {\n            if (lazyImages.length > 0) {\n                lazyScrollCheck()\n            }\n        }\n    \n        function lazyScrollCheck() {\n            let imgIndex = lazyImagesPositions.findIndex(\n                item => pageYOffset > item - windowHeight\n            )\n            if (imgIndex  >= 0) {\n                if (lazyImages[imgIndex].dataset.src) {\n                    lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src\n                    lazyImages[imgIndex].removeAttribute('data-src')\n                } else if (lazyImages[imgIndex].dataset.srcset) {\n                    lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset\n                    lazyImages[imgIndex].removeAttribute('data-srcset')\n                }\n                delete lazyImagesPositions[imgIndex]\n            }\n        }\n    }\n\n}\n\n\n\n\n//# sourceURL=webpack://gulp-project/./app/js/modules/Helpers.js?")}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,n)=>{for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./app/js/index.js")})();