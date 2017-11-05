webpackJsonp([4,7],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/company/company.module": [
		259,
		0
	],
	"./modules/home/home.module": [
		260,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 116;


/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(143);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'companies', loadChildren: './modules/company/company.module#CompanyModule' },
    { path: 'home', loadChildren: './modules/home/home.module#HomeModule' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular Super Powers!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'ngsp-root',
        template: __webpack_require__(204),
        styles: [__webpack_require__(199)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_materialize__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store_devtools__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_state_reducers_company__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_state_effects_company__ = __webpack_require__(141);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["a" /* StoreModule */].provideStore({ companies: __WEBPACK_IMPORTED_MODULE_10_app_state_reducers_company__["a" /* companiesReducer */] }),
            __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_11_app_state_effects_company__["a" /* CompanyEffects */]),
            __WEBPACK_IMPORTED_MODULE_9__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension({
                maxAge: 5
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toArray__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_company__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CompanyEffects = (function () {
    function CompanyEffects(actions$, http) {
        var _this = this;
        this.actions$ = actions$;
        this.http = http;
        this.url = 'https://firebootcamp-crm-api.azurewebsites.net/api/company';
        this.loadCompanies$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_9__actions_company__["d" /* LOAD_COMPANIES */])
            .switchMap(function () {
            return _this.http.get(_this.url)
                .map(function (response) { return response.json(); })
                .map(function (companies) { return new __WEBPACK_IMPORTED_MODULE_9__actions_company__["e" /* LoadCompaniesSuccessAction */](companies); })
                .catch(function (error) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_9__actions_company__["f" /* LoadCompaniesFailAction */](error.status + ': ' + error.statusText)); });
        });
    }
    return CompanyEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], CompanyEffects.prototype, "loadCompanies$", void 0);
CompanyEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */]) === "function" && _c || Object])
], CompanyEffects);

var _a, _b, _c;
//# sourceMappingURL=company.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_company__ = __webpack_require__(71);
/* harmony export (immutable) */ __webpack_exports__["a"] = companiesReducer;

function companiesReducer(state, action) {
    if (state === void 0) { state = { list: [], error: '' }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_company__["g" /* LOAD_COMPANIES_SUCCESS */]:
            return { list: action.payload, error: '' };
        case __WEBPACK_IMPORTED_MODULE_0__actions_company__["h" /* LOAD_COMPANIES_FAIL */]:
            return { list: [], error: action.payload };
        case __WEBPACK_IMPORTED_MODULE_0__actions_company__["i" /* REMOVE_COMPANY */]:
            // TODO: Implement remove as a real action against the server (for now this just removes an element locally)
            return { list: state.list.filter(function (company) { return company.id !== action.payload; }), error: '' };
        case __WEBPACK_IMPORTED_MODULE_0__actions_company__["j" /* ADD_COMPANY */]:
            // TODO: Implement add as a real action against the server (for now this just adds an element locally)
            var newId = void 0;
            if (state.list && state.list.length > 0) {
                var currentLargestId = Math.max.apply(Math, state.list.map(function (company) { return company.id; }));
                newId = currentLargestId + 1;
            }
            else {
                newId = 1;
            }
            var companiesList = state.list.concat({
                id: newId,
                name: 'Luke ' + newId,
                email: 'luke@' + newId + '.com',
                phone: newId
            });
            return { list: companiesList, error: '' };
        default:
            return state;
    }
}
;
//# sourceMappingURL=company.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, ".logo-margin {\n  margin-left: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper\">\n    <a routerLink=\"/\" class=\"brand-logo logo-margin\">{{title}}</a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li><a routerLink=\"/home\">Home</a></li>\n      <li><a routerLink=\"/companies\">Companies</a></li>\n    </ul>\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(117);


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ADD_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REMOVE_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD_COMPANIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOAD_COMPANIES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_COMPANIES_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoadCompaniesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LoadCompaniesSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LoadCompaniesFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RemoveCompanyAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCompanyAction; });
var ADD_COMPANY = 'Add Company';
var REMOVE_COMPANY = 'Remove Company';
var LOAD_COMPANIES = 'Load Companies';
var LOAD_COMPANIES_SUCCESS = 'Load Companies Success';
var LOAD_COMPANIES_FAIL = 'Load Companies Fail';
var LoadCompaniesAction = (function () {
    function LoadCompaniesAction() {
        this.type = LOAD_COMPANIES;
    }
    return LoadCompaniesAction;
}());

var LoadCompaniesSuccessAction = (function () {
    function LoadCompaniesSuccessAction(payload) {
        this.payload = payload;
        this.type = LOAD_COMPANIES_SUCCESS;
    }
    return LoadCompaniesSuccessAction;
}());

var LoadCompaniesFailAction = (function () {
    function LoadCompaniesFailAction(error) {
        this.error = error;
        this.type = LOAD_COMPANIES_FAIL;
        this.payload = error;
    }
    return LoadCompaniesFailAction;
}());

var RemoveCompanyAction = (function () {
    function RemoveCompanyAction(id) {
        this.type = REMOVE_COMPANY;
        this.payload = id;
    }
    return RemoveCompanyAction;
}());

var AddCompanyAction = (function () {
    function AddCompanyAction() {
        this.type = ADD_COMPANY;
    }
    return AddCompanyAction;
}());

//# sourceMappingURL=company.js.map

/***/ })

},[255]);
//# sourceMappingURL=main.bundle.js.map