/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/button-load.js":
/*!****************************!*\
  !*** ./src/button-load.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _menu_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-load */ \"./src/menu-load.js\");\n/* harmony import */ var _contact_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-load */ \"./src/contact-load.js\");\n\n\n\n\nfunction buttonLoad() {\n    const content = document.querySelector('#content');\n    //Create buttons tab to append buttons\n    const tabs = document.createElement('div');\n    tabs.classList = 'buttons-tab';\n\n    //create and append home button\n    const homeBtn = document.createElement('button');\n    homeBtn.innerText = \"HOME\";\n    tabs.appendChild(homeBtn);\n\n    //create and append menu button\n    const menuBtn = document.createElement('button');\n    menuBtn.innerText = \"MENU\";\n    tabs.appendChild(menuBtn);\n\n    //create and append contact button\n    const cntBtn = document.createElement('button');\n    cntBtn.innerText = 'CONTACT';\n    tabs.appendChild(cntBtn);\n\n    //Link load pages with buttons\n    homeBtn.addEventListener('click', () =>{\n        content.replaceChildren(buttonLoad(), (0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    });\n\n    menuBtn.addEventListener('click', () =>{\n        content.replaceChildren(buttonLoad(), (0,_menu_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n        \n    });\n\n    cntBtn.addEventListener('click', () => {\n        content.replaceChildren(buttonLoad(), (0,_contact_load__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    })\n    \n    return tabs;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/button-load.js?");

/***/ }),

/***/ "./src/contact-load.js":
/*!*****************************!*\
  !*** ./src/contact-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactLoad() {\n    const contact = document.createElement('div');\n\n    //Create and append contact header\n    const contactHeader = document.createElement('h1');\n    contactHeader.textContent = \"CONTACT US\";\n    contact.appendChild(contactHeader);\n\n    //Create and append to contact form\n    const contactForm = document.createElement('form');\n    \n    //Create and append the contact mail\n    const contactMail = document.createElement('input');\n    contactMail.setAttribute(\"type\", \"text\");\n    contactMail.setAttribute(\"name\", \"email\");\n    contactMail.setAttribute(\"placeholder\", \"Enter your e-mail\");\n    contactMail.setAttribute(\"required\",\"\");\n    contactForm.appendChild(contactMail);\n\n    //Create and append the contact title\n    const contactTitle = document.createElement(\"input\");\n    contactTitle.setAttribute(\"type\", \"text\");\n    contactTitle.setAttribute(\"name\", \"title\");\n    contactTitle.setAttribute(\"placeholder\", \"Title of your message\");\n    contactTitle.setAttribute(\"required\",\"\");\n    contactForm.appendChild(contactTitle);\n\n    //Create and append the contact textarea\n    const contactTA = document.createElement('textarea');\n    contactTA.setAttribute(\"name\", \"textarea\");\n    contactTA.setAttribute(\"rows\", \"4\");\n    contactTA.setAttribute(\"cols\", \"20\");\n    contactTA.setAttribute(\"placeholder\", \"Your message...\");\n    contactTA.setAttribute(\"required\",\"\");\n    contactForm.appendChild(contactTA);\n\n    //Create and append the submit button\n    const contactSubmit = document.createElement(\"button\");\n    contactSubmit.setAttribute(\"type\", \"submit\");\n    contactSubmit.setAttribute(\"value\", \"submit\");\n    contactSubmit.innerText = \"SUBMIT\";\n    contactForm.appendChild(contactSubmit);\n\n    contact.appendChild(contactForm);\n\n    return contact;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/contact-load.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-load */ \"./src/initial-load.js\");\n\n(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initial-load.js":
/*!*****************************!*\
  !*** ./src/initial-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _button_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-load */ \"./src/button-load.js\");\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n\n\n\nfunction initialLoad() {\n    const content = document.querySelector('#content');\n    content.appendChild((0,_button_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    content.appendChild((0,_page_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/initial-load.js?");

/***/ }),

/***/ "./src/menu-load.js":
/*!**************************!*\
  !*** ./src/menu-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuLoad() {\n    //create menu for foods and drinks to append\n    const menu = document.createElement('div');\n    const menuHeader = document.createElement('h1');\n    menuHeader.textContent = \"MENU\"\n    menu.appendChild(menuHeader);\n    menu.classList = \"menu\";\n\n    //create menu foods and append to menu\n    const menuFoods = document.createElement('div');\n    const foodHeader = document.createElement('h2');\n    foodHeader.textContent = \"FOODS\";\n    menuFoods.classList = \"menu-foods\";\n    menuFoods.appendChild(foodHeader);\n    menu.appendChild(menuFoods);\n\n    //create foods and append to menu foods\n    const foodList = document.createElement('ul');\n    const foodListArray = [[\"Pizza\", \" 1$\"],[\"Hamburger\", \" 1$\"], [\"Kebab\", \" 1$\"], [\"Soup\", \" 1$\"], [\"Special Soup\", \" 2$\"]];\n\n    //Append the foods into foodlist as li items\n    for(let food in foodListArray) {\n        let foodie = document.createElement('li');\n        foodie.textContent =`${foodListArray[food[0]]}`;\n        foodList.appendChild(foodie);\n    }\n    menuFoods.appendChild(foodList);\n\n    //create menu drinks and append to menu\n    const menuDrinks = document.createElement('div');\n    const drinkHeader = document.createElement('h2');\n    drinkHeader.textContent = \"DRINKS\";\n    menuDrinks.classList = \"menu-drinks\";\n    menuDrinks.appendChild(drinkHeader)\n    menu.appendChild(menuDrinks);\n\n    //create drinks and append to menu drinks\n    const drinkList = document.createElement('ul');\n    const drinkListArray = [[\"Water\", \" 1$\"],[\"Coffee\", \" 1$\"], [\"Soda\", \" 1$\"], [\"Tea\", \" 1$\"], [\"Beypazarı Mineral Water\", \" 2$\"]];\n\n    //Append the drinks into drinklist as li items\n    for(let drink in drinkListArray) {\n        let drinkie = document.createElement('li');\n        drinkie.textContent =`${drinkListArray[drink[0]]}`;\n        drinkList.appendChild(drinkie);\n    }\n    menuDrinks.appendChild(drinkList);\n\n    return menu;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu-load.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _icon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.jpg */ \"./src/icon.jpg\");\n\n\nfunction pageLoad() {\n    const homePage = document.createElement(\"div\");\n    homePage.classList = 'home';\n\n    //create and append header for home page\n    const title = document.createElement('h1');\n    title.classList = 'home-title';\n    title.textContent = \"Best Restaurant Ever\"\n    \n    //create and append about for home page\n    const about = document.createElement('div');\n    about.classList = 'home-about';\n    const aboutH = document.createElement('h2');\n    const aboutP = document.createElement('p');\n    aboutH.textContent= \"ABOUT\";\n    aboutP.textContent = \"We are the best restaurant because we make the best foods for the cheapest prices.\";\n    about.appendChild(aboutH);\n    about.appendChild(aboutP);\n\n    //create and append hours for homepage\n    const schedule = document.createElement('div');\n    schedule.classList = 'home-schedule';\n    const scheduleH = document.createElement(\"h2\");\n    const scheduleP = document.createElement(\"p\");\n    scheduleH.textContent = \"HOURS\";\n    scheduleP.textContent = \"Open 24/7 Because all our staff were gamers back then.(they never sleep)\";\n    schedule.appendChild(scheduleH);\n    schedule.appendChild(scheduleP);\n\n    //add and append the resturant image\n    const restaurantImage = new Image();\n    restaurantImage.src = _icon_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    restaurantImage.style.width = \"700px\";\n    restaurantImage.style.height= \"600px\";\n    \n    //append the divs into main homepage div\n    homePage.appendChild(restaurantImage);\n    homePage.appendChild(title);\n    homePage.appendChild(about);\n    homePage.appendChild(schedule);\n    \n\n    return homePage;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ }),

/***/ "./src/icon.jpg":
/*!**********************!*\
  !*** ./src/icon.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b134c6811df875ce2ff.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/icon.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;