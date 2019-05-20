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

module.exports = "#aboutSection {\n  padding-top: 40px;\n  background-color: #4a4a4a;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh2 {\n  color: white;\n  font-size: 32px;\n  font-family: \"merriweather\";\n}\n\n.aboutContent {\n  text-align: center;\n  padding: 12px 20px;\n  font-family: \"roboto\";\n  font-size: 18px;\n  font-weight: 300;\n  color: white;\n  line-height: 26px;\n}\n\n#showcaseArea {\n  width: 100%;\n  text-align: center;\n  display: flex;\n  overflow: scroll;\n}\n\n.showcase {\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.firstShowcase {\n  margin-left: calc((100vw - 300px) / 2);\n}\n\n.whiteBox {\n  background-color: white;\n  height: 250px;\n  width: 300px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  font-size: 16px;\n  font-family: \"roboto\";\n  line-height: 24px;\n  font-weight: 350;\n  color: #4a4a4a;\n  z-index: 1;\n}\n\n.icon {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 4px solid #4a4a4a;\n}\n\nh3 {\n  margin: 20px;\n  font-size: 24px;\n  font-family: \"merriweather\";\n  color: #ef8686;\n}\n\n.bottomBox {\n  padding: 20px;\n  margin-top: -10px;\n  height: 120px;\n  width: 280px;\n  border-radius: 10px;\n  background-color: #a1a3a6;\n  font-size: 16px;\n  font-family: \"roboto\";\n  line-height: 24px;\n  font-weight: 350;\n  color: white;\n}\n\n.bottomBoxText {\n  margin-top: 10px;\n}\n\n#showcaseSelector {\n  margin: 12px;\n  display: flex;\n}\n\n.dot {\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n  border: 1.5px solid #ef8686;\n  margin: 2.5px;\n}\n\n.activeDot {\n  background-color: #ef8686;\n}\n\n#learnMore {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n#learnMoreIcon {\n  width: 30px;\n  height: 30px;\n  border-radius: 3px;\n  background-color: white;\n  margin: 10px;\n}\n\n#learnMoreText {\n  font-family: \"roboto\";\n  font-size: 20px;\n  color: white;\n}\n\n@media (min-width: 600px) {\n  .aboutContent {\n    width: 540px;\n  }\n}\n\n@media (min-width: 800px) {\n}\n\n@media (min-width: 960px) {\n  #showcaseArea {\n    width: 960px;\n    overflow: hidden;\n  }\n\n  .showcase {\n    padding: 5px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n\n  .firstShowcase {\n    margin-left: 0px;\n  }\n\n  #showcaseSelector {\n    margin: 12px;\n    display: none;\n  }\n\n  #learnMore {\n    margin-top: 15px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWJvdXRTZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lcnJpd2VhdGhlclwiO1xufVxuXG4uYWJvdXRDb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNzaG93Y2FzZUFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uc2hvd2Nhc2Uge1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5maXJzdFNob3djYXNlIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoKDEwMHZ3IC0gMzAwcHgpIC8gMik7XG59XG5cbi53aGl0ZUJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogMzUwO1xuICBjb2xvcjogIzRhNGE0YTtcbiAgei1pbmRleDogMTtcbn1cblxuLmljb24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNHB4IHNvbGlkICM0YTRhNGE7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lcnJpd2VhdGhlclwiO1xuICBjb2xvcjogI2VmODY4Njtcbn1cblxuLmJvdHRvbUJveCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMjgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMWEzYTY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogMzUwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ib3R0b21Cb3hUZXh0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI3Nob3djYXNlU2VsZWN0b3Ige1xuICBtYXJnaW46IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kb3Qge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2VmODY4NjtcbiAgbWFyZ2luOiAyLjVweDtcbn1cblxuLmFjdGl2ZURvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjg2ODY7XG59XG5cbiNsZWFybk1vcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jbGVhcm5Nb3JlSWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuI2xlYXJuTW9yZVRleHQge1xuICBmb250LWZhbWlseTogXCJyb2JvdG9cIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuYWJvdXRDb250ZW50IHtcbiAgICB3aWR0aDogNTQwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xuICAjc2hvd2Nhc2VBcmVhIHtcbiAgICB3aWR0aDogOTYwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5zaG93Y2FzZSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmZpcnN0U2hvd2Nhc2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cblxuICAjc2hvd2Nhc2VTZWxlY3RvciB7XG4gICAgbWFyZ2luOiAxMnB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjbGVhcm5Nb3JlIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG59XG4iXX0= */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-landing></app-landing>\n<app-about></app-about>\n"

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

module.exports = "#introHeading {\n}\n\nh1 {\n  margin: 20px 15px;\n  font-family: \"Merriweather\";\n  font-size: 40px;\n  line-height: 48px;\n  color: #4a4a4a;\n}\n\n#benefitList {\n  font-family: \"roboto\";\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 24px;\n  color: #4a4a4a;\n}\n\n.benefit {\n  display: flex;\n\n  align-items: center;\n}\n\n.tickIcon {\n  margin: 7px 15px;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: #86efa5;\n}\n\n.mainDemoButton {\n  width: 200px;\n  height: 50px;\n  background-color: #ef8686;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 20px;\n  font-family: \"roboto\";\n  font-weight: 300;\n  box-shadow: 10px 10px 10px 1px #eaeaea;\n  margin: 20px 15px;\n  cursor: pointer;\n}\n\n.mainDemoButton:hover {\n  -webkit-transform: translate(1px, 1px);\n          transform: translate(1px, 1px);\n  box-shadow: 8px 7px 7px 1px #eaeaea;\n}\n\n#videoLink {\n  display: flex;\n  margin-left: 15px;\n}\n\n#blueCircle {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: #0099ff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#playIcon {\n  width: 0;\n  height: 0;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-left: 10px solid white;\n  border-radius: 2px;\n  margin-left: 2px;\n}\n\n#videoText {\n  color: #0099ff;\n  font-family: \"roboto\";\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 350;\n  text-decoration: underline;\n  margin: 0 10px;\n}\n\n#videoBox {\n  display: none;\n  width: 250px;\n  height: 150px;\n  border-radius: 15px;\n  background-color: #0099ff;\n  box-shadow: 10px 10px 10px 1px #eaeaea;\n}\n\n#videoBackgroundOne {\n  display: none;\n  width: 200px;\n  height: 120px;\n  border-radius: 15px;\n  background-color: #f5a623;\n  opacity: 0.2;\n  box-shadow: 10px 10px 10px 1px #eaeaea;\n}\n\n#videoBackgroundTwo {\n  display: none;\n  width: 200px;\n  height: 120px;\n  border-radius: 15px;\n  background-color: #86efa5;\n  opacity: 0.3;\n  box-shadow: 10px 10px 10px 1px #eaeaea;\n}\n\n#videoBackgroundThree {\n  display: none;\n  width: 160px;\n  height: 90px;\n  border-radius: 15px;\n  background-color: #ef8686;\n  opacity: 0.2;\n  box-shadow: 10px 10px 10px 1px #eaeaea;\n}\n\n#trustedSection {\n  padding: 20px;\n  margin-top: 50px;\n  width: 100%;\n  background-color: #a1a3a6;\n  font-family: \"roboto\";\n  color: white;\n  font-weight: 300;\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#boxWrapper {\n  display: flex;\n}\n\n.box {\n  margin: 10px 7px;\n  width: 150px;\n  height: 40px;\n  border: 4px solid white;\n}\n\n@media (min-width: 600px) {\n  #leftSideWrapper {\n    width: 380px;\n  }\n\n  #videoLink {\n    display: none;\n  }\n  #homeWrapper {\n    position: relative;\n  }\n  #videoBox {\n    position: absolute;\n    display: inline-block;\n    right: 40px;\n    top: 80px;\n    z-index: 4;\n  }\n  #videoBackgroundOne {\n    position: absolute;\n    display: inline-block;\n    right: 120px;\n    top: 90px;\n  }\n  #videoBackgroundTwo {\n    position: absolute;\n    display: inline-block;\n    right: 20px;\n    top: 60px;\n  }\n  #videoBackgroundThree {\n    position: absolute;\n    display: inline-block;\n    right: 20px;\n    top: 200px;\n  }\n\n  .aboutContent {\n    width: 540px;\n  }\n}\n\n@media (min-width: 800px) {\n  #videoBox {\n    right: 60px;\n    top: 80px;\n    width: 300px;\n    height: 180px;\n  }\n  #videoBackgroundOne {\n    right: 170px;\n    top: 90px;\n    width: 240px;\n    height: 150px;\n  }\n  #videoBackgroundTwo {\n    right: 40px;\n    top: 40px;\n    width: 240px;\n    height: 150px;\n  }\n  #videoBackgroundThree {\n    right: 30px;\n    top: 200px;\n    width: 190px;\n    height: 120px;\n  }\n}\n\n@media (min-width: 960px) {\n  #homeWrapper {\n    width: 960px;\n    margin: auto;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7O0VBRWIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usc0NBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQ0FBaUM7RUFDakMsb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixTQUFTO0VBQ1g7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFNBQVM7RUFDWDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ludHJvSGVhZGluZyB7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAyMHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogIzRhNGE0YTtcbn1cblxuI2JlbmVmaXRMaXN0IHtcbiAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjNGE0YTRhO1xufVxuXG4uYmVuZWZpdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpY2tJY29uIHtcbiAgbWFyZ2luOiA3cHggMTVweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODZlZmE1O1xufVxuXG4ubWFpbkRlbW9CdXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmODY4NjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJyb2JvdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMXB4ICNlYWVhZWE7XG4gIG1hcmdpbjogMjBweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbkRlbW9CdXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCk7XG4gIGJveC1zaGFkb3c6IDhweCA3cHggN3B4IDFweCAjZWFlYWVhO1xufVxuXG4jdmlkZW9MaW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbiNibHVlQ2lyY2xlIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OWZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3BsYXlJY29uIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbiN2aWRlb1RleHQge1xuICBjb2xvcjogIzAwOTlmZjtcbiAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzNTA7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuI3ZpZGVvQm94IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OWZmO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAxcHggI2VhZWFlYTtcbn1cblxuI3ZpZGVvQmFja2dyb3VuZE9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YTYyMztcbiAgb3BhY2l0eTogMC4yO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAxcHggI2VhZWFlYTtcbn1cbiN2aWRlb0JhY2tncm91bmRUd28ge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NmVmYTU7XG4gIG9wYWNpdHk6IDAuMztcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMXB4ICNlYWVhZWE7XG59XG4jdmlkZW9CYWNrZ3JvdW5kVGhyZWUge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmODY4NjtcbiAgb3BhY2l0eTogMC4yO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAxcHggI2VhZWFlYTtcbn1cblxuI3RydXN0ZWRTZWN0aW9uIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMWEzYTY7XG4gIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNib3hXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJveCB7XG4gIG1hcmdpbjogMTBweCA3cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICNsZWZ0U2lkZVdyYXBwZXIge1xuICAgIHdpZHRoOiAzODBweDtcbiAgfVxuXG4gICN2aWRlb0xpbmsge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI2hvbWVXcmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgI3ZpZGVvQm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHJpZ2h0OiA0MHB4O1xuICAgIHRvcDogODBweDtcbiAgICB6LWluZGV4OiA0O1xuICB9XG4gICN2aWRlb0JhY2tncm91bmRPbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcmlnaHQ6IDEyMHB4O1xuICAgIHRvcDogOTBweDtcbiAgfVxuICAjdmlkZW9CYWNrZ3JvdW5kVHdvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogNjBweDtcbiAgfVxuICAjdmlkZW9CYWNrZ3JvdW5kVGhyZWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiAyMDBweDtcbiAgfVxuXG4gIC5hYm91dENvbnRlbnQge1xuICAgIHdpZHRoOiA1NDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgI3ZpZGVvQm94IHtcbiAgICByaWdodDogNjBweDtcbiAgICB0b3A6IDgwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cbiAgI3ZpZGVvQmFja2dyb3VuZE9uZSB7XG4gICAgcmlnaHQ6IDE3MHB4O1xuICAgIHRvcDogOTBweDtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuICAjdmlkZW9CYWNrZ3JvdW5kVHdvIHtcbiAgICByaWdodDogNDBweDtcbiAgICB0b3A6IDQwcHg7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbiAgI3ZpZGVvQmFja2dyb3VuZFRocmVlIHtcbiAgICByaWdodDogMzBweDtcbiAgICB0b3A6IDIwMHB4O1xuICAgIHdpZHRoOiAxOTBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xuICAjaG9tZVdyYXBwZXIge1xuICAgIHdpZHRoOiA5NjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/landing/landing.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/landing/landing.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"homeWrapper\">\n  <div id=\"leftSideWrapper\">\n    <div id=\"introHeading\">\n      <h1>Using technology to disrupt recruitment</h1>\n    </div>\n\n    <div id=\"benefitList\">\n      <div class=\"benefit\">\n        <div class=\"tickIcon\"></div>\n        <span>Intelligent matching algorithm</span>\n      </div>\n\n      <div class=\"benefit\">\n        <div class=\"tickIcon\"></div>\n        <span>Video interview technology</span>\n      </div>\n\n      <div class=\"benefit\">\n        <div class=\"tickIcon\"></div>\n        <span>Applicant management portal</span>\n      </div>\n\n      <div class=\"benefit\">\n        <div class=\"tickIcon\"></div>\n        <span>Customisable dashboard</span>\n      </div>\n\n      <div class=\"benefit\">\n        <div class=\"tickIcon\"></div>\n        <span>Fixed fee recruitment</span>\n      </div>\n    </div>\n\n    <div class=\"mainDemoButton\">\n      Book a demo\n    </div>\n  </div>\n\n  <div id=\"videoLink\">\n    <div id=\"videoLinkIcon\">\n      <div id=\"blueCircle\">\n        <div id=\"playIcon\"></div>\n      </div>\n    </div>\n    <div id=\"videoText\">\n      How it works\n    </div>\n  </div>\n\n  <div id=\"videoBox\"></div>\n  <div id=\"videoBackgroundOne\"></div>\n  <div id=\"videoBackgroundTwo\"></div>\n  <div id=\"videoBackgroundThree\"></div>\n</div>\n\n<div id=\"trustedSection\">\n  <span>Trusted by:</span>\n  <div id=\"boxWrapper\">\n    <div class=\"box\"></div>\n    <div class=\"box\"></div>\n  </div>\n</div>\n"

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

module.exports = "header {\n  box-shadow: 1px 1px 20px -13px;\n}\n\n.topMenuWrapper {\n  width: 100%;\n  height: 40px;\n  background-color: #f7f7f8;\n}\n\n#topMenu {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  font-family: \"Roboto\";\n  font-size: 13px;\n  font-weight: 300;\n  color: #4a4a4a;\n}\n\n.option {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  padding: 0px 15px;\n  border-bottom: solid 5px #f7f7f8;\n}\n\n.login {\n  display: none;\n  border-bottom: solid 5px #f7f7f8;\n}\n\n.activeOption {\n  height: 100%;\n  border-bottom: solid 5px #0099ff;\n  font-family: \"Roboto\";\n  font-weight: 700;\n}\n\n#mainMenu {\n  width: 100%;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n\n.logo {\n  border-bottom: solid 5px #4a4a4a;\n  margin-left: 15px;\n}\n\n.logoPartOne {\n  color: #ef8686;\n  font-family: \"Roboto\";\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.logoPartTwo {\n  color: #4a4a4a;\n  font-family: \"Roboto\";\n  font-size: 20px;\n}\n\n.rightMenu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 15px;\n}\n\n.menuOptions {\n  display: none;\n  font-family: \"roboto\";\n  font-size: 16px;\n  color: #4a4a4a;\n  font-weight: 400;\n}\n\n.menuDropDown {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  position: absolute;\n  top: 70px;\n  left: 0;\n  right: 0;\n  height: 160px;\n  width: 100%;\n  background-color: #ef8686;\n  border-radius: 0px 0px 13px 13px;\n}\n\n.menuItem {\n  margin: 10px;\n}\n\n.demoButton {\n  height: 40px;\n  width: 120px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 15px;\n  font-family: \"roboto\";\n  font-weight: 300;\n  background-color: #ef8686;\n  color: white;\n  border-radius: 10px;\n  box-shadow: 10px 10px 10px 1px #eaeaea;\n  margin: 0px 15px 0px 5px;\n  cursor: pointer;\n}\n\n.demoButton:hover {\n  -webkit-transform: translate(1px, 1px);\n          transform: translate(1px, 1px);\n  box-shadow: 8px 7px 7px 1px #eaeaea;\n}\n\n.line {\n  width: 26px;\n  height: 4px;\n  background-color: #4a4a4a;\n  margin: 5px;\n  border-radius: 2px;\n  transition: 0.2s linear;\n}\n\n/*TODO improve the translation as the cross is very subtly off*/\n\n.lineOneRotate {\n  -webkit-transform: rotate(45deg) translate(1px, 8px);\n          transform: rotate(45deg) translate(1px, 8px);\n  width: 26px;\n  height: 4px;\n  background-color: #4a4a4a;\n  margin: 5px;\n  border-radius: 2px;\n  transition: 0.2s linear;\n}\n\n.lineTwoRotate {\n  -webkit-transform: rotate(-45deg) translate(-2px, -6px);\n          transform: rotate(-45deg) translate(-2px, -6px);\n  width: 26px;\n  height: 4px;\n  background-color: #4a4a4a;\n  margin: 5px;\n  border-radius: 2px;\n  transition: 0.2s linear;\n}\n\n@media (min-width: 350px) {\n  .demoButton {\n    width: 140px;\n    font-size: 16px;\n  }\n\n  .logoPartOne {\n    font-size: 24px;\n  }\n\n  .logoPartTwo {\n    font-size: 24px;\n  }\n}\n\n@media (min-width: 600px) {\n  .option {\n    width: auto;\n    justify-content: flex-start;\n    padding: 0px 15px 0px 5px;\n    margin: 0px 15px;\n  }\n\n  .login {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: auto;\n    margin-right: 15px;\n    padding: 0px 5px 0px 15px;\n  }\n\n  header {\n    box-shadow: none;\n  }\n\n  #burgerMenu {\n    display: none;\n  }\n\n  .menuOptions {\n    display: inline-block;\n  }\n\n  #demoButton {\n    margin: 0 5px;\n  }\n}\n\n@media (min-width: 800px) {\n}\n\n@media (min-width: 1000px) {\n  #topMenu {\n    width: 990px;\n    margin: auto;\n    padding: 0px 15px;\n  }\n\n  #mainMenu {\n    width: 960px;\n    margin: auto;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxzQ0FBOEI7VUFBOUIsOEJBQThCO0VBQzlCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUNBLCtEQUErRDs7QUFDL0Q7RUFDRSxvREFBNEM7VUFBNUMsNENBQTRDO0VBQzVDLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdURBQStDO1VBQS9DLCtDQUErQztFQUMvQyxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAyMHB4IC0xM3B4O1xufVxuXG4udG9wTWVudVdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y4O1xufVxuXG4jdG9wTWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzRhNGE0YTtcbn1cblxuLm9wdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCA1cHggI2Y3ZjdmODtcbn1cblxuLmxvZ2luIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgNXB4ICNmN2Y3Zjg7XG59XG5cbi5hY3RpdmVPcHRpb24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDVweCAjMDA5OWZmO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI21haW5NZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb2dvIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgNXB4ICM0YTRhNGE7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubG9nb1BhcnRPbmUge1xuICBjb2xvcjogI2VmODY4NjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmxvZ29QYXJ0VHdvIHtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5yaWdodE1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ubWVudU9wdGlvbnMge1xuICBkaXNwbGF5OiBub25lO1xuICBmb250LWZhbWlseTogXCJyb2JvdG9cIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzRhNGE0YTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm1lbnVEcm9wRG93biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDE2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmODY4NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxM3B4IDEzcHg7XG59XG5cbi5tZW51SXRlbSB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmRlbW9CdXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjg2ODY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMXB4ICNlYWVhZWE7XG4gIG1hcmdpbjogMHB4IDE1cHggMHB4IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRlbW9CdXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCk7XG4gIGJveC1zaGFkb3c6IDhweCA3cHggN3B4IDFweCAjZWFlYWVhO1xufVxuXG4ubGluZSB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XG59XG4vKlRPRE8gaW1wcm92ZSB0aGUgdHJhbnNsYXRpb24gYXMgdGhlIGNyb3NzIGlzIHZlcnkgc3VidGx5IG9mZiovXG4ubGluZU9uZVJvdGF0ZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoMXB4LCA4cHgpO1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xufVxuXG4ubGluZVR3b1JvdGF0ZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC0ycHgsIC02cHgpO1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIHtcbiAgLmRlbW9CdXR0b24ge1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAubG9nb1BhcnRPbmUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuXG4gIC5sb2dvUGFydFR3byB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAub3B0aW9uIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMHB4IDE1cHggMHB4IDVweDtcbiAgICBtYXJnaW46IDBweCAxNXB4O1xuICB9XG5cbiAgLmxvZ2luIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDE1cHg7XG4gIH1cblxuICBoZWFkZXIge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAjYnVyZ2VyTWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tZW51T3B0aW9ucyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgI2RlbW9CdXR0b24ge1xuICAgIG1hcmdpbjogMCA1cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgI3RvcE1lbnUge1xuICAgIHdpZHRoOiA5OTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMHB4IDE1cHg7XG4gIH1cblxuICAjbWFpbk1lbnUge1xuICAgIHdpZHRoOiA5NjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbiJdfQ== */"

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