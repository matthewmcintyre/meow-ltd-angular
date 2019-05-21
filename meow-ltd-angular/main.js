(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _find_jobs_find_jobs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./find-jobs/find-jobs.component */ "./src/app/find-jobs/find-jobs.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");








var routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: "pricing", component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__["PricingComponent"] },
    { path: "find-jobs", component: _find_jobs_find_jobs_component__WEBPACK_IMPORTED_MODULE_6__["FindJobsComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'meow-ltd-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/about/about.component */ "./src/app/home/about/about.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _find_jobs_find_jobs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./find-jobs/find-jobs.component */ "./src/app/find-jobs/find-jobs.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _book_demo_book_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book-demo/book-demo.component */ "./src/app/book-demo/book-demo.component.ts");
/* harmony import */ var _home_landing_landing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/landing/landing.component */ "./src/app/home/landing/landing.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _home_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _find_jobs_find_jobs_component__WEBPACK_IMPORTED_MODULE_10__["FindJobsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _book_demo_book_demo_component__WEBPACK_IMPORTED_MODULE_12__["BookDemoComponent"],
                _home_landing_landing_component__WEBPACK_IMPORTED_MODULE_13__["LandingComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-demo/book-demo.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-demo/book-demo.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stZGVtby9ib29rLWRlbW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/book-demo/book-demo.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-demo/book-demo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  book-demo works!\n</p>\n"

/***/ }),

/***/ "./src/app/book-demo/book-demo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-demo/book-demo.component.ts ***!
  \**************************************************/
/*! exports provided: BookDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDemoComponent", function() { return BookDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookDemoComponent = /** @class */ (function () {
    function BookDemoComponent() {
    }
    BookDemoComponent.prototype.ngOnInit = function () {
    };
    BookDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-demo',
            template: __webpack_require__(/*! ./book-demo.component.html */ "./src/app/book-demo/book-demo.component.html"),
            styles: [__webpack_require__(/*! ./book-demo.component.css */ "./src/app/book-demo/book-demo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookDemoComponent);
    return BookDemoComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/find-jobs/find-jobs.component.css":
/*!***************************************************!*\
  !*** ./src/app/find-jobs/find-jobs.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmQtam9icy9maW5kLWpvYnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/find-jobs/find-jobs.component.html":
/*!****************************************************!*\
  !*** ./src/app/find-jobs/find-jobs.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  find-jobs works!\n</p>\n"

/***/ }),

/***/ "./src/app/find-jobs/find-jobs.component.ts":
/*!**************************************************!*\
  !*** ./src/app/find-jobs/find-jobs.component.ts ***!
  \**************************************************/
/*! exports provided: FindJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindJobsComponent", function() { return FindJobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FindJobsComponent = /** @class */ (function () {
    function FindJobsComponent() {
    }
    FindJobsComponent.prototype.ngOnInit = function () {
    };
    FindJobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-find-jobs',
            template: __webpack_require__(/*! ./find-jobs.component.html */ "./src/app/find-jobs/find-jobs.component.html"),
            styles: [__webpack_require__(/*! ./find-jobs.component.css */ "./src/app/find-jobs/find-jobs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FindJobsComponent);
    return FindJobsComponent;
}());



/***/ }),

/***/ "./src/app/home/about/about.component.css":
/*!************************************************!*\
  !*** ./src/app/home/about/about.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#aboutSection {\n  padding-top: 40px;\n  background-image: url('trianglify-dark-bg.svg');\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh2 {\n  color: white;\n  font-size: 32px;\n  font-family: \"merriweather\";\n  margin-bottom: -15px;\n}\n\n.aboutContent {\n  text-align: center;\n  padding: 5px 20px;\n  font-family: \"roboto\";\n  font-size: 18px;\n  font-weight: 300;\n  color: white;\n  line-height: 26px;\n}\n\n#showcaseArea {\n  width: 100%;\n  text-align: center;\n  display: flex;\n  overflow: scroll;\n}\n\n.showcase {\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.firstShowcase {\n  margin-left: calc((100vw - 300px) / 2);\n}\n\n.whiteBox {\n  background-color: white;\n  height: 250px;\n  width: 300px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5px 20px;\n  font-size: 16px;\n  font-family: \"roboto\";\n  line-height: 24px;\n  font-weight: 350;\n  color: #4a4a4a;\n  z-index: 1;\n}\n\n.icon {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 4px solid #4a4a4a;\n  margin: 10px;\n}\n\nh3 {\n  margin-top: 15px;\n  margin-bottom: -2px;\n  font-size: 24px;\n  font-family: \"merriweather\";\n  color: #ef8686;\n}\n\n.bottomBox {\n  padding: 20px;\n  margin-top: -10px;\n  height: 120px;\n  width: 280px;\n  border-radius: 10px;\n  background-color: #a1a3a6;\n  font-size: 16px;\n  font-family: \"roboto\";\n  line-height: 24px;\n  font-weight: 350;\n  color: white;\n}\n\n.bottomBoxText {\n  margin-top: 10px;\n}\n\n#showcaseSelector {\n  margin: 12px;\n  display: flex;\n}\n\n.dot {\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n  border: 1.5px solid #ef8686;\n  margin: 2.5px;\n}\n\n.activeDot {\n  background-color: #ef8686;\n}\n\n#learnMore {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n#learnMoreIcon {\n  width: 30px;\n  height: 30px;\n  border-radius: 3px;\n  background-color: white;\n  margin: 10px;\n}\n\n#learnMoreText {\n  font-family: \"roboto\";\n  font-size: 20px;\n  color: white;\n}\n\n@media (max-width: 350px) {\n  .firstShowcase {\n    margin-left: calc((100vw - 280px) / 2);\n  }\n\n  .whiteBox {\n    height: 240px;\n    width: 280px;\n    padding: 10px;\n    font-size: 16px;\n    line-height: 22px;\n  }\n\n  .icon {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: 4px solid #4a4a4a;\n  }\n\n  h3 {\n    margin: 10px;\n    font-size: 22px;\n    font-family: \"merriweather\";\n    color: #ef8686;\n  }\n\n  .bottomBox {\n    padding: 18px;\n    height: 110px;\n    width: 260px;\n    font-size: 15px;\n  }\n\n  .bottomBoxText {\n    margin-top: 6px;\n  }\n}\n\n@media (min-width: 600px) {\n  .aboutContent {\n    width: 540px;\n  }\n}\n\n@media (min-width: 800px) {\n}\n\n@media (min-width: 960px) {\n  #showcaseArea {\n    width: 960px;\n    overflow: hidden;\n  }\n\n  .showcase {\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n\n  .firstShowcase {\n    margin-left: 0px;\n  }\n\n  #showcaseSelector {\n    margin: 12px;\n    display: none;\n  }\n\n  #learnMore {\n    margin-top: 15px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLCtDQUEyRTtFQUMzRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0Usc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dFNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy90cmlhbmdsaWZ5LWJnL3RyaWFuZ2xpZnktZGFyay1iZy5zdmcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LWZhbWlseTogXCJtZXJyaXdlYXRoZXJcIjtcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XG59XG5cbi5hYm91dENvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBmb250LWZhbWlseTogXCJyb2JvdG9cIjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jc2hvd2Nhc2VBcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnNob3djYXNlIHtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmlyc3RTaG93Y2FzZSB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKCgxMDB2dyAtIDMwMHB4KSAvIDIpO1xufVxuXG4ud2hpdGVCb3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJyb2JvdG9cIjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzNTA7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiA0cHggc29saWQgIzRhNGE0YTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5oMyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwibWVycml3ZWF0aGVyXCI7XG4gIGNvbG9yOiAjZWY4Njg2O1xufVxuXG4uYm90dG9tQm94IHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAyODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExYTNhNjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJyb2JvdG9cIjtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJvdHRvbUJveFRleHQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jc2hvd2Nhc2VTZWxlY3RvciB7XG4gIG1hcmdpbjogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRvdCB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZWY4Njg2O1xuICBtYXJnaW46IDIuNXB4O1xufVxuXG4uYWN0aXZlRG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmODY4Njtcbn1cblxuI2xlYXJuTW9yZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNsZWFybk1vcmVJY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4jbGVhcm5Nb3JlVGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIC5maXJzdFNob3djYXNlIHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYygoMTAwdncgLSAyODBweCkgLyAyKTtcbiAgfVxuXG4gIC53aGl0ZUJveCB7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICB3aWR0aDogMjgwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIH1cblxuICAuaWNvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjNGE0YTRhO1xuICB9XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC1mYW1pbHk6IFwibWVycml3ZWF0aGVyXCI7XG4gICAgY29sb3I6ICNlZjg2ODY7XG4gIH1cblxuICAuYm90dG9tQm94IHtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgd2lkdGg6IDI2MHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gIC5ib3R0b21Cb3hUZXh0IHtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5hYm91dENvbnRlbnQge1xuICAgIHdpZHRoOiA1NDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICNzaG93Y2FzZUFyZWEge1xuICAgIHdpZHRoOiA5NjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnNob3djYXNlIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZmlyc3RTaG93Y2FzZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuXG4gICNzaG93Y2FzZVNlbGVjdG9yIHtcbiAgICBtYXJnaW46IDEycHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNsZWFybk1vcmUge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/about/about.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/about/about.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"aboutSection\">\n  <h2>Who are we?</h2>\n  <p class=\"aboutContent\">\n    Meow ltd. is an online marketplace helping employers find top talent faster\n    with no agency fees. By personalising recruitment, Meow ltd. gives\n    candidates a voice beyond just a CV, making it easier for employers to match\n    quickly and find the best fit.\n  </p>\n\n  <div id=\"showcaseArea\">\n    <div class=\"showcase firstShowcase\">\n      <div class=\"whiteBox\">\n        <div class=\"icon\"></div>\n\n        <h3>Save time</h3>\n\n        <p>\n          Set your hiring criteria and Meow ltd. are able to share qualifying\n          candidates within hours saving you time and money.\n        </p>\n      </div>\n\n      <div class=\"bottomBox\">\n        <p class=\"bottomBoxText\">\n          Utilising proprietary technology to search and match the best\n          candidates for your role.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"showcase\">\n      <div class=\"whiteBox\">\n        <div class=\"icon\"></div>\n\n        <h3>Improve reach</h3>\n\n        <p>\n          We have integrated with major job boards to improve reach but also\n          with niche job boards, blogs, and content websites.\n        </p>\n      </div>\n\n      <div class=\"bottomBox\">\n        <p class=\"bottomBoxText\">\n          Leveraging unique reach within key universities and career groups.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"showcase \">\n      <div class=\"whiteBox\">\n        <div class=\"icon\"></div>\n\n        <h3>Fixed price</h3>\n\n        <p>\n          Unlike a traditional agency, we offer a fixed price model allowing you\n          to control your hiring costs saving on recruitment fees.\n        </p>\n      </div>\n\n      <div class=\"bottomBox\">\n        <p class=\"bottomBoxText\">\n          Enabling you to save your business time and other internal costs.\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"showcaseSelector\">\n    <div class=\"dot activeDot\"></div>\n    <div class=\"dot\"></div>\n    <div class=\"dot\"></div>\n  </div>\n\n  <div id=\"learnMore\">\n    <div id=\"learnMoreIcon\"></div>\n    <a id=\"learnMoreText\" href=\"#\">Learn a little more</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/home/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/home/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bgWrapper {\n  position: relative;\n}\n.bg {\n  position: absolute;\n  top: -100px;\n  z-index: -1;\n  width: 100vw;\n  height: 150vh;\n  background-image: url('trianglify-light-bg.svg');\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0RBQXlFO0FBQzNFIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmdXcmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMDBweDtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxNTB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy90cmlhbmdsaWZ5LWJnL3RyaWFuZ2xpZnktbGlnaHQtYmcuc3ZnKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bgWrapper\">\n  <div class=\"bg\"></div>\n\n  <app-landing></app-landing>\n  <app-about></app-about>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/landing/landing.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/landing/landing.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#introHeading {\n}\n\nh1 {\n  margin: 20px 15px;\n  font-family: \"Merriweather\";\n  font-size: 40px;\n  line-height: 48px;\n  color: #4a4a4a;\n}\n\n#benefitList {\n  font-family: \"roboto\";\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 24px;\n  color: #4a4a4a;\n}\n\n.benefit {\n  display: flex;\n  align-items: center;\n}\n\n.benefitText {\n}\n\n.tickIcon {\n  margin: 7px 15px;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: #86efa5;\n}\n\n.mainDemoButton {\n  width: 200px;\n  height: 50px;\n  background-color: #ef8686;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 20px;\n  font-family: \"roboto\";\n  font-weight: 300;\n  box-shadow: 10px 10px 10px 1px #eaeaea;\n  margin: 20px 15px;\n  cursor: pointer;\n}\n\n.mainDemoButton:hover {\n  -webkit-transform: translate(1px, 1px);\n          transform: translate(1px, 1px);\n  box-shadow: 8px 7px 7px 1px #eaeaea;\n}\n\n#videoLink {\n  display: flex;\n  margin-left: 15px;\n}\n\n#blueCircle {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: #0099ff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#playIcon {\n  width: 0;\n  height: 0;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-left: 10px solid white;\n  border-radius: 2px;\n  margin-left: 2px;\n}\n\n#videoText {\n  color: #0099ff;\n  font-family: \"roboto\";\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 350;\n  text-decoration: underline;\n  margin: 0 10px;\n}\n\n#videoBox {\n  display: none;\n  width: 250px;\n  height: 150px;\n  border-radius: 15px;\n  background-color: #0099ff;\n  box-shadow: 10px 10px 10px 1px #eaeaea;\n}\n\n#videoBackgroundOne {\n  display: none;\n  width: 200px;\n  height: 120px;\n  border-radius: 15px;\n  background-color: #f5a623;\n  opacity: 0.2;\n  box-shadow: 10px 10px 10px 1px #eaeaea;\n}\n\n#videoBackgroundTwo {\n  display: none;\n  width: 200px;\n  height: 120px;\n  border-radius: 15px;\n  background-color: #86efa5;\n  opacity: 0.3;\n  box-shadow: 10px 10px 10px 1px #eaeaea;\n}\n\n#videoBackgroundThree {\n  display: none;\n  width: 160px;\n  height: 90px;\n  border-radius: 15px;\n  background-color: #ef8686;\n  opacity: 0.2;\n  box-shadow: 10px 10px 10px 1px #eaeaea;\n}\n\n#trustedWrapper {\n  background-color: #a1a3a6;\n  width: 100%;\n  padding: 20px 0px;\n  margin-top: 50px;\n}\n\n#trustedSection {\n  width: 100%;\n  background-color: #a1a3a6;\n  font-family: \"roboto\";\n  color: white;\n  font-weight: 300;\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#boxWrapper {\n  display: flex;\n}\n\n.box {\n  margin: 10px 7px;\n  width: 150px;\n  height: 40px;\n  border: 4px solid white;\n}\n\n@media (max-width: 350px) {\n  .box {\n    width: 130px;\n    height: 35px;\n  }\n}\n\n@media (min-width: 600px) {\n  #leftSideWrapper {\n    width: 380px;\n  }\n\n  #videoLink {\n    display: none;\n  }\n  #homeWrapper {\n    position: relative;\n  }\n  #videoBox {\n    position: absolute;\n    display: inline-block;\n    right: 40px;\n    top: 80px;\n    z-index: 4;\n  }\n  #videoBackgroundOne {\n    position: absolute;\n    display: inline-block;\n    right: 120px;\n    top: 90px;\n  }\n  #videoBackgroundTwo {\n    position: absolute;\n    display: inline-block;\n    right: 20px;\n    top: 60px;\n  }\n  #videoBackgroundThree {\n    position: absolute;\n    display: inline-block;\n    right: 20px;\n    top: 200px;\n  }\n\n  .aboutContent {\n    width: 540px;\n  }\n\n  #trustedSection {\n    flex-direction: row;\n    justify-content: flex-start;\n    padding-left: 15px;\n  }\n}\n\n@media (min-width: 800px) {\n  #videoBox {\n    right: 60px;\n    top: 80px;\n    width: 300px;\n    height: 180px;\n  }\n  #videoBackgroundOne {\n    right: 170px;\n    top: 90px;\n    width: 240px;\n    height: 150px;\n  }\n  #videoBackgroundTwo {\n    right: 40px;\n    top: 40px;\n    width: 240px;\n    height: 150px;\n  }\n  #videoBackgroundThree {\n    right: 30px;\n    top: 200px;\n    width: 190px;\n    height: 120px;\n  }\n}\n\n@media (min-width: 960px) {\n  #homeWrapper {\n    width: 960px;\n    margin: auto;\n  }\n  #trustedSection {\n    width: 960px;\n    margin: auto;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHNDQUFzQztBQUN4Qzs7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHNDQUFzQztBQUN4Qzs7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osU0FBUztFQUNYO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxTQUFTO0VBQ1g7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ludHJvSGVhZGluZyB7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAyMHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogIzRhNGE0YTtcbn1cblxuI2JlbmVmaXRMaXN0IHtcbiAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjNGE0YTRhO1xufVxuXG4uYmVuZWZpdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iZW5lZml0VGV4dCB7XG59XG5cbi50aWNrSWNvbiB7XG4gIG1hcmdpbjogN3B4IDE1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2ZWZhNTtcbn1cblxuLm1haW5EZW1vQnV0dG9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjg2ODY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDFweCAjZWFlYWVhO1xuICBtYXJnaW46IDIwcHggMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1haW5EZW1vQnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpO1xuICBib3gtc2hhZG93OiA4cHggN3B4IDdweCAxcHggI2VhZWFlYTtcbn1cblxuI3ZpZGVvTGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4jYmx1ZUNpcmNsZSB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTlmZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNwbGF5SWNvbiB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4jdmlkZW9UZXh0IHtcbiAgY29sb3I6ICMwMDk5ZmY7XG4gIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogMzUwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbiN2aWRlb0JveCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTlmZjtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMXB4ICNlYWVhZWE7XG59XG5cbiN2aWRlb0JhY2tncm91bmRPbmUge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWE2MjM7XG4gIG9wYWNpdHk6IDAuMjtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMXB4ICNlYWVhZWE7XG59XG4jdmlkZW9CYWNrZ3JvdW5kVHdvIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODZlZmE1O1xuICBvcGFjaXR5OiAwLjM7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDFweCAjZWFlYWVhO1xufVxuI3ZpZGVvQmFja2dyb3VuZFRocmVlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjg2ODY7XG4gIG9wYWNpdHk6IDAuMjtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMXB4ICNlYWVhZWE7XG59XG5cbiN0cnVzdGVkV3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMWEzYTY7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuI3RydXN0ZWRTZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMWEzYTY7XG4gIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNib3hXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJveCB7XG4gIG1hcmdpbjogMTBweCA3cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIC5ib3gge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICNsZWZ0U2lkZVdyYXBwZXIge1xuICAgIHdpZHRoOiAzODBweDtcbiAgfVxuXG4gICN2aWRlb0xpbmsge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI2hvbWVXcmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgI3ZpZGVvQm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHJpZ2h0OiA0MHB4O1xuICAgIHRvcDogODBweDtcbiAgICB6LWluZGV4OiA0O1xuICB9XG4gICN2aWRlb0JhY2tncm91bmRPbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcmlnaHQ6IDEyMHB4O1xuICAgIHRvcDogOTBweDtcbiAgfVxuICAjdmlkZW9CYWNrZ3JvdW5kVHdvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogNjBweDtcbiAgfVxuICAjdmlkZW9CYWNrZ3JvdW5kVGhyZWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiAyMDBweDtcbiAgfVxuXG4gIC5hYm91dENvbnRlbnQge1xuICAgIHdpZHRoOiA1NDBweDtcbiAgfVxuXG4gICN0cnVzdGVkU2VjdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xuICAjdmlkZW9Cb3gge1xuICAgIHJpZ2h0OiA2MHB4O1xuICAgIHRvcDogODBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgfVxuICAjdmlkZW9CYWNrZ3JvdW5kT25lIHtcbiAgICByaWdodDogMTcwcHg7XG4gICAgdG9wOiA5MHB4O1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG4gICN2aWRlb0JhY2tncm91bmRUd28ge1xuICAgIHJpZ2h0OiA0MHB4O1xuICAgIHRvcDogNDBweDtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuICAjdmlkZW9CYWNrZ3JvdW5kVGhyZWUge1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIHRvcDogMjAwcHg7XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gICNob21lV3JhcHBlciB7XG4gICAgd2lkdGg6IDk2MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAjdHJ1c3RlZFNlY3Rpb24ge1xuICAgIHdpZHRoOiA5NjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/landing/landing.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/landing/landing.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"homeWrapper\">\n  <div id=\"leftSideWrapper\">\n    <div id=\"introHeading\">\n      <h1>Using technology to disrupt recruitment</h1>\n    </div>\n\n    <div id=\"benefitList\">\n      <div class=\"benefit\">\n        <div class=\"tickIcon\"></div>\n        <span>Intelligent matching algorithm</span>\n      </div>\n\n      <div class=\"benefit\">\n        <div class=\"tickIcon\"></div>\n        <span>Video interview technology</span>\n      </div>\n\n      <div class=\"benefit\">\n        <div class=\"tickIcon\"></div>\n        <span>Applicant management portal</span>\n      </div>\n\n      <div class=\"benefit\">\n        <div class=\"tickIcon\"></div>\n        <span>Customisable dashboard</span>\n      </div>\n\n      <div class=\"benefit\">\n        <div class=\"tickIcon\"></div>\n        <span>Fixed fee recruitment</span>\n      </div>\n    </div>\n\n    <div class=\"mainDemoButton\">\n      Book a demo\n    </div>\n  </div>\n\n  <div id=\"videoLink\">\n    <div id=\"videoLinkIcon\">\n      <div id=\"blueCircle\">\n        <div id=\"playIcon\"></div>\n      </div>\n    </div>\n    <div id=\"videoText\">\n      How it works\n    </div>\n  </div>\n\n  <div id=\"videoBox\"></div>\n  <div id=\"videoBackgroundOne\"></div>\n  <div id=\"videoBackgroundTwo\"></div>\n  <div id=\"videoBackgroundThree\"></div>\n</div>\n\n<div id=\"trustedWrapper\">\n  <div id=\"trustedSection\">\n    <span>Trusted by:</span>\n    <div id=\"boxWrapper\">\n      <div class=\"box\"></div>\n      <div class=\"box\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/landing/landing.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/landing/landing.component.ts ***!
  \***************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/home/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/home/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  box-shadow: 1px 1px 20px -13px;\n}\n\n.topMenuWrapper {\n  width: 100%;\n  height: 40px;\n  background-color: #f7f7f8;\n}\n\n#topMenu {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  font-family: \"Roboto\";\n  font-size: 13px;\n  font-weight: 300;\n  color: #4a4a4a;\n}\n\n.option {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  padding: 0px 15px;\n  border-bottom: solid 5px #f7f7f8;\n}\n\n.login {\n  display: none;\n  border-bottom: solid 5px #f7f7f8;\n}\n\n.activeOption {\n  height: 100%;\n  border-bottom: solid 5px #0099ff;\n  font-family: \"Roboto\";\n  font-weight: 700;\n}\n\n#mainMenu {\n  width: 100%;\n  height: 70px;\n  display: flex;\n  background-color: white;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n\n.logo {\n  border-bottom: solid 5px #4a4a4a;\n  margin-left: 15px;\n}\n\n.logoPartOne {\n  color: #ef8686;\n  font-family: \"Roboto\";\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.logoPartTwo {\n  color: #4a4a4a;\n  font-family: \"Roboto\";\n  font-size: 20px;\n}\n\n.rightMenu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 15px;\n}\n\n.menuOptions {\n  display: none;\n  font-family: \"roboto\";\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.menuDropDown {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 70px;\n  left: 0;\n  right: 0;\n  height: 160px;\n  width: 100%;\n  background-color: #ef8686;\n  border-radius: 0px 0px 13px 13px;\n}\n\n.menuItem {\n  margin: 10px;\n  color: white;\n}\n\n.demoButton {\n  height: 40px;\n  width: 120px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 15px;\n  font-family: \"roboto\";\n  font-weight: 300;\n  background-color: #ef8686;\n  color: white;\n  border-radius: 10px;\n  box-shadow: 10px 10px 10px 1px #eaeaea;\n  margin: 0px 15px 0px 5px;\n  cursor: pointer;\n}\n\n.demoButton:hover {\n  -webkit-transform: translate(1px, 1px);\n          transform: translate(1px, 1px);\n  box-shadow: 8px 7px 7px 1px #eaeaea;\n}\n\n.line {\n  width: 26px;\n  height: 4px;\n  background-color: #4a4a4a;\n  margin: 5px;\n  border-radius: 2px;\n  transition: 0.2s linear;\n}\n\n/*TODO improve the translation as the cross is very subtly off*/\n\n.lineOneRotate {\n  -webkit-transform: rotate(45deg) translate(1px, 8px);\n          transform: rotate(45deg) translate(1px, 8px);\n  width: 26px;\n  height: 4px;\n  background-color: #4a4a4a;\n  margin: 5px;\n  border-radius: 2px;\n  transition: 0.2s linear;\n}\n\n.lineTwoRotate {\n  -webkit-transform: rotate(-45deg) translate(-2px, -6px);\n          transform: rotate(-45deg) translate(-2px, -6px);\n  width: 26px;\n  height: 4px;\n  background-color: #4a4a4a;\n  margin: 5px;\n  border-radius: 2px;\n  transition: 0.2s linear;\n}\n\n@media (min-width: 350px) {\n  .demoButton {\n    width: 140px;\n    font-size: 16px;\n  }\n\n  .logoPartOne {\n    font-size: 24px;\n  }\n\n  .logoPartTwo {\n    font-size: 24px;\n  }\n}\n\n@media (min-width: 600px) {\n  .option {\n    width: auto;\n    justify-content: flex-start;\n    padding: 0px 15px 0px 5px;\n    margin: 0px 15px;\n  }\n\n  .login {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: auto;\n    margin-right: 15px;\n    padding: 0px 5px 0px 15px;\n  }\n\n  header {\n    box-shadow: none;\n  }\n\n  #mainMenu {\n    background: none;\n  }\n\n  #burgerMenu {\n    display: none;\n  }\n\n  .menuOptions {\n    display: inline-block;\n  }\n\n  .menuItem {\n    color: #4a4a4a;\n  }\n\n  #demoButton {\n    margin: 0 5px;\n  }\n}\n\n@media (min-width: 800px) {\n}\n\n@media (min-width: 1000px) {\n  #topMenu {\n    width: 990px;\n    margin: auto;\n    padding: 0px 15px;\n  }\n\n  #mainMenu {\n    width: 960px;\n    margin: auto;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxzQ0FBOEI7VUFBOUIsOEJBQThCO0VBQzlCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUNBLCtEQUErRDs7QUFDL0Q7RUFDRSxvREFBNEM7VUFBNUMsNENBQTRDO0VBQzVDLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdURBQStDO1VBQS9DLCtDQUErQztFQUMvQyxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMjBweCAtMTNweDtcbn1cblxuLnRvcE1lbnVXcmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmODtcbn1cblxuI3RvcE1lbnUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0YTRhNGE7XG59XG5cbi5vcHRpb24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgNXB4ICNmN2Y3Zjg7XG59XG5cbi5sb2dpbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDVweCAjZjdmN2Y4O1xufVxuXG4uYWN0aXZlT3B0aW9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCA1cHggIzAwOTlmZjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNtYWluTWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ28ge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCA1cHggIzRhNGE0YTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5sb2dvUGFydE9uZSB7XG4gIGNvbG9yOiAjZWY4Njg2O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubG9nb1BhcnRUd28ge1xuICBjb2xvcjogIzRhNGE0YTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnJpZ2h0TWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5tZW51T3B0aW9ucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tZW51RHJvcERvd24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4Njg2O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEzcHggMTNweDtcbn1cblxuLm1lbnVJdGVtIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kZW1vQnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4Njg2O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDFweCAjZWFlYWVhO1xuICBtYXJnaW46IDBweCAxNXB4IDBweCA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kZW1vQnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpO1xuICBib3gtc2hhZG93OiA4cHggN3B4IDdweCAxcHggI2VhZWFlYTtcbn1cblxuLmxpbmUge1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xufVxuLypUT0RPIGltcHJvdmUgdGhlIHRyYW5zbGF0aW9uIGFzIHRoZSBjcm9zcyBpcyB2ZXJ5IHN1YnRseSBvZmYqL1xuLmxpbmVPbmVSb3RhdGUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDFweCwgOHB4KTtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhO1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcbn1cblxuLmxpbmVUd29Sb3RhdGUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtMnB4LCAtNnB4KTtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhO1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KSB7XG4gIC5kZW1vQnV0dG9uIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmxvZ29QYXJ0T25lIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICAubG9nb1BhcnRUd28ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLm9wdGlvbiB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IDBweCAxNXB4IDBweCA1cHg7XG4gICAgbWFyZ2luOiAwcHggMTVweDtcbiAgfVxuXG4gIC5sb2dpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nOiAwcHggNXB4IDBweCAxNXB4O1xuICB9XG5cbiAgaGVhZGVyIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgI21haW5NZW51IHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG5cbiAgI2J1cmdlck1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWVudU9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5tZW51SXRlbSB7XG4gICAgY29sb3I6ICM0YTRhNGE7XG4gIH1cblxuICAjZGVtb0J1dHRvbiB7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAjdG9wTWVudSB7XG4gICAgd2lkdGg6IDk5MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgfVxuXG4gICNtYWluTWVudSB7XG4gICAgd2lkdGg6IDk2MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"topMenuWrapper\">\n    <div id=\"topMenu\">\n      <div\n        class=\"option\"\n        routerLink=\"/find-jobs\"\n        routerLinkActive=\"activeOption\"\n      >\n        <a>Find jobs</a>\n      </div>\n      <div\n        class=\"option\"\n        routerLink=\"/\"\n        routerLinkActive=\"activeOption\"\n        [routerLinkActiveOptions]=\"{ exact: true }\"\n      >\n        <a>Employers / Post Job</a>\n      </div>\n      <div class=\"login\" routerLink=\"/login\" routerLinkActive=\"activeOption\">\n        <a>My Account</a>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"mainMenu\">\n    <a routerLink=\"/\" class=\"logo\">\n      <span class=\"logoPartOne\">MEOW </span>\n      <span class=\"logoPartTwo\">Ltd.</span>\n    </a>\n\n    <div class=\"rightMenu\">\n      <div\n        class=\"menuOptions\"\n        [ngClass]=\"{\n          menuDropDown: menuOpen\n        }\"\n      >\n        <a routerLink=\"/\" class=\"menuItem\">Home</a>\n        <a routerLink=\"/about\" class=\"menuItem\">About</a>\n        <a routerLink=\"/pricing\" class=\"menuItem\">Pricing</a>\n        <a routerLink=\"/contact\" class=\"menuItem\">Contact</a>\n      </div>\n\n      <div class=\"demoButton\">\n        Book a demo\n      </div>\n      <div id=\"burgerMenu\" (click)=\"menuClicked()\">\n        <div\n          id=\"lineOne\"\n          [ngClass]=\"{\n            lineOneRotate: menuOpen,\n            line: !menuOpen\n          }\"\n        ></div>\n        <div\n          id=\"lineTwo\"\n          class=\"line\"\n          [ngClass]=\"{\n            lineTwoRotate: menuOpen,\n            line: !menuOpen\n          }\"\n        ></div>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.menuOpen = false;
    }
    NavComponent.prototype.menuClicked = function () {
        this.menuOpen = !this.menuOpen;
        console.log(this.menuOpen);
    };
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-nav",
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.css":
/*!***********************************************!*\
  !*** ./src/app/pricing/pricing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNpbmcvcHJpY2luZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/*!************************************************!*\
  !*** ./src/app/pricing/pricing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pricing works!\n</p>\n"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/pricing/pricing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/matthewmcintyre/Git/meow-ltd-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map