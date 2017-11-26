webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__avaliation_avaliation__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lawyer_list_lawyerlist__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__result_result_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slide_slide__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__avaliation_avaliation__["a" /* AvaliationPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__lawyer_list_lawyerlist__["a" /* LawyerListPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__result_result_component__["a" /* ResultComponent */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__slide_slide__["a" /* SlideComponent */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'tab',template:/*ion-inline-start:"/Users/emerson/Documents/workspace/final/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" style="color: #17b2ce;"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Avaliation" tabIcon="information-circle" style="color: #17b2ce;"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Result" tabIcon="contacts" style="color: #17b2ce;"></ion-tab>\n\n	<ion-tab [root]="tab3Root" tabTitle="Lawyers" tabIcon="contacts" style="color: #17b2ce;"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/emerson/Documents/workspace/final/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvaliationPage = (function () {
    function AvaliationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AvaliationPage;
}());
AvaliationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'avaliation',template:/*ion-inline-start:"/Users/emerson/Documents/workspace/final/src/pages/avaliation/avaliation.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Avaliação\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card style=" margin: 0px ; width: 100% !important; background-color: #e0e8f2">\n\n    <ion-icon style="font-size: 30px; float: right; padding: 5px; color: lightgreen;" name="checkmark-circle-outline"></ion-icon>\n\n\n    <ion-card-content>\n      <ion-card-title>\n        Conclusão\n      </ion-card-title>\n      <h2>\n        Segundo analise do sistema, seu caso foi considerado viavel , opte pela ação que fara em seguida.\n      </h2>\n    </ion-card-content>\n  </ion-card>\n  <br>\n  <button ion-button round block outline style="background-color: #aeeecc; color: #fff; border: none;">Participar da Representação</button>\n\n  <br>\n  <button ion-button round block outline style="background-color: #449c6c; color: #fff; border: none;">Abrir Processo</button>\n\n  <br>\n  <button ion-button round block outline style="background-color: #17b2ce; color: #fff; border: none;">Desistir</button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/emerson/Documents/workspace/final/src/pages/avaliation/avaliation.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], AvaliationPage);

//# sourceMappingURL=avaliation.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LawyerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LawyerListPage = (function () {
    function LawyerListPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return LawyerListPage;
}());
LawyerListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lawyer-list',template:/*ion-inline-start:"/Users/emerson/Documents/workspace/final/src/pages/lawyer-list/lawyer-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Lawyer List\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n            1 of 3\n          </ion-col>\n          <ion-col col-8>\n            2 of 3 (wider)\n          </ion-col>\n          <ion-col>\n            3 of 3\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            1 of 3\n          </ion-col>\n          <ion-col col-6>\n            2 of 3 (wider)\n          </ion-col>\n          <ion-col>\n            3 of 3\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/emerson/Documents/workspace/final/src/pages/lawyer-list/lawyer-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], LawyerListPage);

//# sourceMappingURL=lawyerlist.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultComponent = (function () {
    function ResultComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ResultComponent;
}());
ResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-result',template:/*ion-inline-start:"/Users/emerson/Documents/workspace/final/src/pages/result/result.component.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Result\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="http://blog.unimonte.br/wp-content/uploads/2016/11/quanto-ganha-um-advogado.jpeg">\n      </ion-avatar>\n      <h2>Maria Rosana</h2>\n      <p>Atuação: Civil</p>\n      <p style="float: right;">\n        <ion-icon name="chatboxes" style="color: green;"></ion-icon> CHAT\n      </p>\n    </ion-item>\n\n\n  </ion-card>\n\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="http://www.gruponortesul.com/wp-content/uploads/2017/02/advogado.jpg">\n      </ion-avatar>\n      <h2>José Bonifacio</h2>\n      <p>Atuação: Civil</p>\n      <p style="float: right;">\n        <ion-icon name="chatboxes" style="color: green;"></ion-icon> CHAT\n      </p>\n    </ion-item>\n\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="http://portalcontabilsc.com.br/wp-content/uploads/2016/01/advogados.jpg">\n      </ion-avatar>\n      <h2>Mario Andrade</h2>\n      <p>Atuação: Civil</p>\n      <p style="float: right;">\n        <ion-icon name="chatboxes" style="color: green;"></ion-icon> CHAT\n      </p>\n    </ion-item>\n\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="http://mudrovitsch.adv.br/wp-content/uploads/2015/10/george-andrade-alves-mudrovitsch-advogados.jpg">\n      </ion-avatar>\n      <h2>Carlos Rofrigues</h2>\n      <p>Atuação: Civil</p>\n      <p style="float: right;">\n        <ion-icon name="chatboxes" style="color: green;"></ion-icon> CHAT\n      </p>\n    </ion-item>\n\n\n  </ion-card>\n\n\n\n</ion-content>\n\n<style>\n  .item-inner {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n\n  }\n</style>\n'/*ion-inline-end:"/Users/emerson/Documents/workspace/final/src/pages/result/result.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ResultComponent);

//# sourceMappingURL=result-component.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlideComponent = (function () {
    function SlideComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SlideComponent.prototype.ngOnInit = function () {
        this.goPage();
    };
    SlideComponent.prototype.goPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    return SlideComponent;
}());
SlideComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: "app-slide",template:/*ion-inline-start:"/Users/emerson/Documents/workspace/final/src/pages/slide/slide.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>\n			Result\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-slides pager="true" parallax="true" padding>\n\n    <ion-slide>\n      <img src="https://i.pinimg.com/736x/46/d4/97/46d4979f3dff9d2670a62d14dc9eaa70--i-am-beautiful-poster-ideas.jpg">\n      <h1>Welcome to my app!</h1>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img2.svg">\n      <h1>All of the features</h1>\n      <p>Here\'s what you can do with the app...</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img3.svg">\n      <h1>Get started now!</h1>\n      <button ion-button outline small (click)="goPage()">\n        Start using the app\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/emerson/Documents/workspace/final/src/pages/slide/slide.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]])
], SlideComponent);

//# sourceMappingURL=slide.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(215);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

// Add any polyfills you need here!
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_avaliation_avaliation__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_result_result_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_lawyer_list_lawyerlist__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_slide_slide__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_avaliation_avaliation__["a" /* AvaliationPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_result_result_component__["a" /* ResultComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pages_lawyer_list_lawyerlist__["a" /* LawyerListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_slide_slide__["a" /* SlideComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_avaliation_avaliation__["a" /* AvaliationPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_result_result_component__["a" /* ResultComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_slide_slide__["a" /* SlideComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pages_lawyer_list_lawyerlist__["a" /* LawyerListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/emerson/Documents/workspace/final/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/emerson/Documents/workspace/final/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Platform */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, camera) {
        this.navCtrl = navCtrl;
        this.camera = camera;
    }
    HomePage.prototype.onTakePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            saveToPhotoAlbum: true,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/emerson/Documents/workspace/final/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<h2>Fale sobre seu relato:</h2>\n  <textarea placeholder="Digite seu relato." style="width:100%; height:150px" name="comment" id="comment-textarea"\n			ng-model="">\n  </textarea>\n\n  <div style="float:right; margin-top: 20px;">\n    <button ion-button small style="background-color: #ffba5c" (click)="onTakePicture()">Anexar documentos</button>\n  </div>\n\n<hr>\n <br>\n <br>\n <br>\n\n\n<button full ion-button round style="background-color: #17b2ce">Enviar</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/emerson/Documents/workspace/final/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map