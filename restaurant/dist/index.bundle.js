"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeAbout: () => (/* binding */ initializeAbout)
/* harmony export */ });
function initializeAbout() {
    const contentDiv = document.getElementById('content');
    const aboutpage = document.createElement('div');
    aboutpage.innerHTML = `<h1>Welcome to About</h1>
    <img src="restaurant_image.jpg" alt="Restaurant Image">
    <p>Experience the finest dining experience in town at our restaurant. Our chefs prepare delicious dishes with the freshest ingredients, ensuring a memorable culinary journey for our guests.</p>`;
    contentDiv.appendChild(aboutpage);
}

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeHome: () => (/* binding */ initializeHome)
/* harmony export */ });
function initializeHome() {
    const contentDiv = document.getElementById('content');
    const homepage = document.createElement('div');
    homepage.innerHTML = `<h1>Welcome to Our Restaurant</h1>
    <img src="restaurant_image.jpg" alt="Restaurant Image">
    <p>Experience the finest dining experience in town at our restaurant. Our chefs prepare delicious dishes with the freshest ingredients, ensuring a memorable culinary journey for our guests.</p>`;
    contentDiv.appendChild(homepage);


}

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeMenu: () => (/* binding */ initializeMenu)
/* harmony export */ });
function initializeMenu() {
    const contentDiv = document.getElementById('content');
    const menupage = document.createElement('div');
    menupage.innerHTML = `<h1>Welcome to Menu</h1>
    <img src="restaurant_image.jpg" alt="Restaurant Image">
    <p>Experience the finest dining experience in town at our restaurant. Our chefs prepare delicious dishes with the freshest ingredients, ensuring a memorable culinary journey for our guests.</p>`;
    contentDiv.appendChild(menupage);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ "./src/About.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");




// Call the function to initialize the page

function home() {
    (0,_Home__WEBPACK_IMPORTED_MODULE_0__.initializeHome)();

}
function menu() {
    (0,_Menu__WEBPACK_IMPORTED_MODULE_2__.initializeMenu)();

}
function about() {
    (0,_About__WEBPACK_IMPORTED_MODULE_1__.initializeAbout)();

}

// Logging to verify webpack setup
console.log("Webpack is working!");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1RPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUHdDO0FBQ0U7QUFDRjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL0hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQWJvdXQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGFib3V0cGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXRwYWdlLmlubmVySFRNTCA9IGA8aDE+V2VsY29tZSB0byBBYm91dDwvaDE+XHJcbiAgICA8aW1nIHNyYz1cInJlc3RhdXJhbnRfaW1hZ2UuanBnXCIgYWx0PVwiUmVzdGF1cmFudCBJbWFnZVwiPlxyXG4gICAgPHA+RXhwZXJpZW5jZSB0aGUgZmluZXN0IGRpbmluZyBleHBlcmllbmNlIGluIHRvd24gYXQgb3VyIHJlc3RhdXJhbnQuIE91ciBjaGVmcyBwcmVwYXJlIGRlbGljaW91cyBkaXNoZXMgd2l0aCB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMsIGVuc3VyaW5nIGEgbWVtb3JhYmxlIGN1bGluYXJ5IGpvdXJuZXkgZm9yIG91ciBndWVzdHMuPC9wPmA7XHJcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGFib3V0cGFnZSk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUhvbWUoKSB7XHJcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGhvbWVwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob21lcGFnZS5pbm5lckhUTUwgPSBgPGgxPldlbGNvbWUgdG8gT3VyIFJlc3RhdXJhbnQ8L2gxPlxyXG4gICAgPGltZyBzcmM9XCJyZXN0YXVyYW50X2ltYWdlLmpwZ1wiIGFsdD1cIlJlc3RhdXJhbnQgSW1hZ2VcIj5cclxuICAgIDxwPkV4cGVyaWVuY2UgdGhlIGZpbmVzdCBkaW5pbmcgZXhwZXJpZW5jZSBpbiB0b3duIGF0IG91ciByZXN0YXVyYW50LiBPdXIgY2hlZnMgcHJlcGFyZSBkZWxpY2lvdXMgZGlzaGVzIHdpdGggdGhlIGZyZXNoZXN0IGluZ3JlZGllbnRzLCBlbnN1cmluZyBhIG1lbW9yYWJsZSBjdWxpbmFyeSBqb3VybmV5IGZvciBvdXIgZ3Vlc3RzLjwvcD5gO1xyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChob21lcGFnZSk7XHJcblxyXG5cclxufSIsImV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplTWVudSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgbWVudXBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVwYWdlLmlubmVySFRNTCA9IGA8aDE+V2VsY29tZSB0byBNZW51PC9oMT5cclxuICAgIDxpbWcgc3JjPVwicmVzdGF1cmFudF9pbWFnZS5qcGdcIiBhbHQ9XCJSZXN0YXVyYW50IEltYWdlXCI+XHJcbiAgICA8cD5FeHBlcmllbmNlIHRoZSBmaW5lc3QgZGluaW5nIGV4cGVyaWVuY2UgaW4gdG93biBhdCBvdXIgcmVzdGF1cmFudC4gT3VyIGNoZWZzIHByZXBhcmUgZGVsaWNpb3VzIGRpc2hlcyB3aXRoIHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cywgZW5zdXJpbmcgYSBtZW1vcmFibGUgY3VsaW5hcnkgam91cm5leSBmb3Igb3VyIGd1ZXN0cy48L3A+YDtcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudXBhZ2UpO1xyXG59IiwiaW1wb3J0IHsgaW5pdGlhbGl6ZUhvbWUgfSBmcm9tICcuL0hvbWUnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQWJvdXQgfSBmcm9tICcuL0Fib3V0JztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZU1lbnUgfSBmcm9tICcuL01lbnUnO1xyXG5cclxuLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gaW5pdGlhbGl6ZSB0aGUgcGFnZVxyXG5cclxuZnVuY3Rpb24gaG9tZSgpIHtcclxuICAgIGluaXRpYWxpemVIb21lKCk7XHJcblxyXG59XHJcbmZ1bmN0aW9uIG1lbnUoKSB7XHJcbiAgICBpbml0aWFsaXplTWVudSgpO1xyXG5cclxufVxyXG5mdW5jdGlvbiBhYm91dCgpIHtcclxuICAgIGluaXRpYWxpemVBYm91dCgpO1xyXG5cclxufVxyXG5cclxuLy8gTG9nZ2luZyB0byB2ZXJpZnkgd2VicGFjayBzZXR1cFxyXG5jb25zb2xlLmxvZyhcIldlYnBhY2sgaXMgd29ya2luZyFcIik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9