(()=>{"use strict";var __webpack_modules__={"./app/js/index.js":
/*!*************************!*\
  !*** ./app/js/index.js ***!
  \*************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Helpers */ "./app/js/modules/Helpers.js");\n// Importing Helpers\r\n\r\n// Getting Methods from Helpers\r\nconst { getNode, getNodes, addClass, removeClass, nextNode } = new _modules_Helpers__WEBPACK_IMPORTED_MODULE_0__.NodeHelper();\r\nconst { imgLoadHelper } = new _modules_Helpers__WEBPACK_IMPORTED_MODULE_0__.FuncsHelper();\r\n\r\n// Invoking Functions from Helper\r\n\r\nfunction WaveLine(params) {\r\n  // wave animation\r\n  const canvas = getNode("canvas");\r\n  const ctx = canvas.getContext("2d");\r\n\r\n  canvas.width = innerWidth;\r\n  canvas.height = innerHeight;\r\n\r\n  const wave = {\r\n    y: canvas.height / 2,\r\n    length: -0.006,\r\n    amplitude: 400,\r\n    frequency: 0.01,\r\n  };\r\n\r\n  let increment = wave.frequency;\r\n  ctx.fillStyle = "rgba(0,0,0, 0.01)";\r\n  function waveAnimation(params) {\r\n    requestAnimationFrame(waveAnimation);\r\n\r\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\r\n    ctx.beginPath();\r\n    ctx.moveTo(0, canvas.height);\r\n\r\n    for (let i = 0; i < canvas.width; i++) {\r\n      ctx.lineTo(\r\n        i,\r\n        wave.y +\r\n          Math.sin(i * wave.length + increment) *\r\n            wave.amplitude *\r\n            Math.sin(increment)\r\n      );\r\n    }\r\n\r\n    ctx.strokeStyle = "hsl(200, 50%, 50%)";\r\n    ctx.stroke();\r\n    increment += wave.frequency;\r\n  }\r\n  waveAnimation();\r\n  // wave animation\r\n}\r\n// WaveLine();\r\n\r\nfunction problemAnimate() {\r\n  let tl = gsap.timeline();\r\n\r\n  tl.fromTo(".problem-dots1", 0.5, { opacity: 0 }, { opacity: 1 })\r\n    .fromTo(".problem-text .bg", 0.5, { width: 0 }, { width: "100%" })\r\n    .fromTo(".problem-text .text", 0.5, { opacity: 0 }, { opacity: 1 })\r\n    .fromTo(".problem-dots2", 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.5")\r\n    .fromTo(".problem-plus", 0.5, { opacity: 0 }, { opacity: 1 })\r\n    .fromTo(\r\n      ".problem-plus",\r\n      0.5,\r\n      { transform: "rotate(-90deg)" },\r\n      { transform: "rotate(0deg)" }\r\n    )\r\n    .fromTo(".problem-line .first", 0.5, { x: "-100%" }, { x: "0" })\r\n    .fromTo(".problem-line .second", 0.5, { x: "-100%" }, { x: "0" }, "-=0.25")\r\n    .fromTo(".problem-category__item .bg", 0.5, { width: 0 }, { width: "100%" })\r\n    .fromTo(".problem-category__later", 0.5, { opacity: 0 }, { opacity: 1 })\r\n    .fromTo(\r\n      ".problem-category__text",\r\n      0.5,\r\n      { opacity: 0 },\r\n      { opacity: 1 },\r\n      "-=0.5"\r\n    )\r\n    .fromTo(".problem-text .bg", 0.5, { width: "100%" }, { width: "0" })\r\n    .to(".problem-category__item .bg", 0.5, { width: "0" }, "-=0.5");\r\n}\r\n\r\nfunction solutionAnimate() {\r\n  let tl = gsap.timeline();\r\n  tl.fromTo(".line-top", 0.5, { opacity: 0 }, { opacity: 1 })\r\n    .fromTo(".line-side", 0.5, { y: "-100%" }, { y: 0 })\r\n    .fromTo(".line-side2", 0.5, { y: "-100%" }, { y: 0 })\r\n    .fromTo(".left-line", 0.5, { x: "-101%" }, { x: "-25%" })\r\n    .fromTo(".right-line", 0.5, { x: "101%" }, { x: "25%" }, "-=0.5");\r\n}\r\n\r\n// solution btn effect\r\nfunction mouseEnterSolutionBtn() {\r\n  let tl = gsap.timeline();\r\n  tl.to(".left-line", 1, { x: "-10%" }).to(\r\n    ".right-line",\r\n    1,\r\n    { x: "10%" },\r\n    "-=1"\r\n  );\r\n}\r\n\r\nfunction mouseOutSolutionBtn() {\r\n  let tl = gsap.timeline();\r\n  tl.to(".left-line", 1, { x: "-25%" }).to(\r\n    ".right-line",\r\n    1,\r\n    { x: "25%" },\r\n    "-=1"\r\n  );\r\n}\r\nlet solutionBtn = getNode(".solution .section-btn");\r\n\r\nif (solutionBtn) {\r\n  solutionBtn.addEventListener("mouseenter", mouseEnterSolutionBtn);\r\n  solutionBtn.addEventListener("mouseout", mouseOutSolutionBtn);\r\n}\r\n// solution btn effect\r\n\r\nfunction aboutSlider() {\r\n  let aboutSwiperImg = new Swiper(".about__swiper-img", {\r\n    direction: "vertical",\r\n  });\r\n  let aboutSwiperText = new Swiper(".about__swiper-text", {\r\n    autoplay: {\r\n      delay: 10000,\r\n    },\r\n    pagination: {\r\n      el: ".swiper-pagination",\r\n      clickable: true,\r\n    },\r\n  });\r\n\r\n  aboutSwiperImg.controller.control = aboutSwiperText;\r\n  aboutSwiperText.controller.control = aboutSwiperImg;\r\n}\r\nfunction agreementSlider() {\r\n  let agreementSwiperText = new Swiper(".agreement__swiper-text", {\r\n    direction: "vertical",\r\n    slidesPerView: 1,\r\n    spaceBetween: 30,\r\n    mousewheel: true,\r\n    speed: 2000,\r\n    // autoplay: {\r\n    //   delay: 10000,\r\n    // },\r\n  });\r\n  let agreementSwiperImg = new Swiper(".agreement__swiper-img", {});\r\n  agreementSwiperImg.controller.control = agreementSwiperText;\r\n  agreementSwiperText.controller.control = agreementSwiperImg;\r\n  let agreementBlock = getNode(".agreement .fp-tableCell");\r\n  addClass(agreementBlock, "scrollable-content");\r\n\r\n  agreementSwiperText.on("slideChange", function (e) {\r\n    var swiper = this;\r\n    var currentIndex = swiper.realIndex + 1;\r\n    let tl = gsap.timeline();\r\n    tl.fromTo(\r\n      ".agreement-descrition__text span",\r\n      1,\r\n      { width: 0 },\r\n      { width: "45%" },\r\n      2\r\n    );\r\n    if (swiper.isEnd) {\r\n      removeClass(agreementBlock, "scrollable-content");\r\n    } else {\r\n      addClass(agreementBlock, "scrollable-content");\r\n    }\r\n    if (currentIndex == 1) {\r\n      removeClass(agreementBlock, "scrollable-content");\r\n    }\r\n  });\r\n}\r\n\r\nfunction fullPage() {\r\n  new fullpage("#fullpage", {\r\n    licenseKey: "YOUR KEY HERE",\r\n    lockAnchors: false,\r\n    anchors: ["page-1", "page-2", "page-3", "page-4", "page-5", "page-6"],\r\n    navigation: true,\r\n    navigationPosition: "left",\r\n    // scrollOverflow: true,\r\n    normalScrollElements: ".scrollable-content",\r\n    onLeave: function (index, nextIndex, direction) {\r\n      if (nextIndex.index == 2) {\r\n        let agreementBlock = getNode(".agreement .fp-tableCell");\r\n        addClass(agreementBlock, "scrollable-content");\r\n      }\r\n    },\r\n  });\r\n}\r\n\r\nfunction mouseEnterBmtLeft(node) {\r\n  let tl = gsap.timeline();\r\n  tl.to(node, 1, { width: "490px" })\r\n    .to(`${node} .bmt-line__left-plus`, 1, { rotation: "-180" }, "-=1")\r\n    .to(`${node} .bmt-line__right-plus`, 1, { rotation: "180" }, "-=1");\r\n}\r\nfunction mouseOutBmtRight(node) {\r\n  let tl = gsap.timeline();\r\n  let bgLeft = CSSRulePlugin.getRule(".bmt .left::before");\r\n  let bgRight = CSSRulePlugin.getRule(".bmt .right::before");\r\n  tl.to(node, 1, {\r\n    width: "245px",\r\n  })\r\n    .to(`${node} .bmt-line__left-plus`, 1, { rotation: "0" }, "-=1")\r\n    .to(`${node} .bmt-line__right-plus`, 1, { rotation: "0" }, "-=1")\r\n    .to(bgLeft, 1, { backgroundColor: "#000000", opacity: 0.5 }, "-=1")\r\n    .to(bgRight, 1, { backgroundColor: "#000000", opacity: 0.5 }, "-=1")\r\n    .to(".bmt-line__left-textBottom", 0.5, { opacity: 0 }, "-=1")\r\n    .to(".bmt-line__right-textBottom", 0.5, { opacity: 0 }, "-=1");\r\n}\r\n\r\nfunction bmtSection() {\r\n  let leftBtn = getNode(".left_btn");\r\n  let rightBtn = getNode(".right_btn");\r\n  if (getNode(".bmt")) {\r\n    // hover\r\n    leftBtn.addEventListener("mouseenter", () => {\r\n      mouseEnterBmtLeft(".bmt-line__left");\r\n      let bgLeft = CSSRulePlugin.getRule(".bmt .left::before");\r\n\r\n      gsap.to(bgLeft, 1, { backgroundColor: "#29B7B8", opacity: 0.7 }, "-=1");\r\n      gsap.to(".bmt-line__left-textBottom", 1, { opacity: 1 }, "-=1");\r\n    });\r\n    leftBtn.addEventListener("mouseout", () => {\r\n      mouseOutBmtRight(".bmt-line__left");\r\n    });\r\n\r\n    rightBtn.addEventListener("mouseenter", () => {\r\n      mouseEnterBmtLeft(".bmt-line__right");\r\n      let bgRight = CSSRulePlugin.getRule(".bmt .right::before");\r\n\r\n      gsap.to(bgRight, 1, { backgroundColor: "#29B7B8", opacity: 0.7 }, "-=1");\r\n      gsap.to(".bmt-line__right-textBottom", 1, { opacity: 1 }, "-=1");\r\n    });\r\n    rightBtn.addEventListener("mouseout", () => {\r\n      mouseOutBmtRight(".bmt-line__right");\r\n    });\r\n    let bmtSection = getNode(".bmt");\r\n    let header = getNode(".header");\r\n    let bmtRowBtn = getNode(".bmt-row__btn");\r\n    // on-click\r\n    rightBtn.addEventListener("click", function () {\r\n      addClass(bmtSection, "active-left");\r\n      let tl = gsap.timeline();\r\n      tl.to(".bmt-row", 1, { visibility: "visible" }).to(".bmt-row", 1, {\r\n        opacity: 1,\r\n      });\r\n      addClass(header, "active-bg-left");\r\n    });\r\n    bmtRowBtn.addEventListener("click", function () {\r\n      removeClass(bmtSection, "active-left");\r\n      removeClass(header, "active-bg-left");\r\n      let tl = gsap.timeline();\r\n      tl.to(".bmt-row", 1, {\r\n        opacity: 0,\r\n      }).to(".bmt-row", 1, { visibility: "hidden" });\r\n    });\r\n  }\r\n}\r\nbmtSection();\r\n\r\nfunction destroyFullPage() {\r\n  fullpage_api.destroy("all");\r\n}\r\n\r\nfunction startFullPage(header) {\r\n  const lmenu = document.querySelector(".dp-page_lmenu");\r\n\r\n  fullPage(lmenu, header);\r\n}\r\n\r\nfunction init() {\r\n  fullPage();\r\n  problemAnimate();\r\n  solutionAnimate();\r\n  let aboutSliderClass = getNode(".about__swiper-img");\r\n  let agreementSliderClass = getNode(".agreement");\r\n  if (aboutSliderClass) {\r\n    aboutSlider();\r\n  }\r\n  if (agreementSliderClass) {\r\n    agreementSlider();\r\n  }\r\n}\r\ninit();\r\n\r\nconst swup = new Swup({\r\n  plugins: [new SwupSlideTheme()],\r\n});\r\n\r\nswup.on("willReplaceContent", function () {\r\n  destroyFullPage();\r\n});\r\n\r\nswup.on("contentReplaced", function () {\r\n  startFullPage();\r\n  init();\r\n});\r\n\n\n//# sourceURL=webpack://gulp-project/./app/js/index.js?')},"./app/js/modules/Helpers.js":
/*!***********************************!*\
  !*** ./app/js/modules/Helpers.js ***!
  \***********************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NodeHelper\": () => (/* binding */ NodeHelper),\n/* harmony export */   \"FuncsHelper\": () => (/* binding */ FuncsHelper)\n/* harmony export */ });\nclass NodeHelper {\r\n\r\n    getNode = $node =>  document.querySelector($node)\r\n\r\n    getNodes = $nodes =>  document.querySelectorAll($nodes)\r\n\r\n    addClass = ($node, className = '') => {\r\n        if (typeof $node === 'string') {\r\n            const $element = this.getNode($node) \r\n            if ($element) {\r\n                $element.classList.add(className)\r\n            }\r\n            return ''\r\n        }\r\n        $node.classList.add(className)\r\n    }\r\n\r\n    removeClass = ($node, className = '') => {\r\n        if (typeof $node === 'string') {\r\n            const $element = this.getNode($node) \r\n            if ($element) {\r\n                $element.classList.remove(className)\r\n            }\r\n            return ''\r\n        }\r\n        $node.classList.remove(className)\r\n    }\r\n\r\n    nextNode = ($currentNode) => {\r\n        if (typeof $currentNode === 'string') {\r\n            const $element = this.getNode($currentNode) \r\n            if ($element) {\r\n                return $element.nextElementSibling\r\n            }\r\n        }\r\n        return $currentNode.nextElementSibling\r\n    }\r\n\r\n}\r\n\r\nclass FuncsHelper {\r\n\r\n    imgLoadHelper = () => {\r\n        const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]')\r\n        const windowHeight = document.documentElement.clientHeight\r\n    \r\n        let lazyImagesPositions = [];\r\n        if (lazyImages.length > 0) {\r\n            lazyImages.forEach(img => {\r\n                if (img.dataset.src || img.dataset.srcset) {\r\n                    lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset)\r\n                    lazyScrollCheck()\r\n                }\r\n            })\r\n        }\r\n    \r\n        window.addEventListener('scroll', lazyScroll)\r\n    \r\n        function lazyScroll() {\r\n            if (lazyImages.length > 0) {\r\n                lazyScrollCheck()\r\n            }\r\n        }\r\n    \r\n        function lazyScrollCheck() {\r\n            let imgIndex = lazyImagesPositions.findIndex(\r\n                item => pageYOffset > item - windowHeight\r\n            )\r\n            if (imgIndex  >= 0) {\r\n                if (lazyImages[imgIndex].dataset.src) {\r\n                    lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src\r\n                    lazyImages[imgIndex].removeAttribute('data-src')\r\n                } else if (lazyImages[imgIndex].dataset.srcset) {\r\n                    lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset\r\n                    lazyImages[imgIndex].removeAttribute('data-srcset')\r\n                }\r\n                delete lazyImagesPositions[imgIndex]\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-project/./app/js/modules/Helpers.js?")}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,n)=>{for(var r in n)__webpack_require__.o(n,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./app/js/index.js")})();