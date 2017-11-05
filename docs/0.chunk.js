webpackJsonp([0,7],{

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_modules_company_pages_company_list_company_list_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_company_company_routes__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_modules_company_views_company_table_company_table_component__ = __webpack_require__(264);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CompanyModule = (function () {
    function CompanyModule() {
    }
    return CompanyModule;
}());
CompanyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4_app_modules_company_company_routes__["a" /* routes */])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5_app_modules_company_views_company_table_company_table_component__["a" /* CompanyTableComponent */], __WEBPACK_IMPORTED_MODULE_2_app_modules_company_pages_company_list_company_list_component__["a" /* CompanyListComponent */]]
    })
], CompanyModule);

//# sourceMappingURL=company.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_state_actions_company__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_materialize__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyListComponent = (function () {
    function CompanyListComponent(store) {
        this.store = store;
    }
    CompanyListComponent.prototype.ngOnInit = function () {
        this.companies$ = this.store.select('companies');
        this.loadCompanies();
        this.toastErrors();
    };
    CompanyListComponent.prototype.refresh = function () {
        this.loadCompanies();
    };
    CompanyListComponent.prototype.add = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2_app_state_actions_company__["a" /* AddCompanyAction */]());
    };
    CompanyListComponent.prototype.loadCompanies = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2_app_state_actions_company__["b" /* LoadCompaniesAction */]());
    };
    CompanyListComponent.prototype.toastErrors = function () {
        this.companies$.subscribe(function (companies) {
            if (companies.error) {
                __WEBPACK_IMPORTED_MODULE_3_angular2_materialize__["b" /* toast */]("An error occurred: " + companies.error, 3000, 'error-toast');
            }
        });
    };
    CompanyListComponent.prototype.deleteCompany = function (companyId) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2_app_state_actions_company__["c" /* RemoveCompanyAction */](companyId));
    };
    return CompanyListComponent;
}());
CompanyListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'ngsp-company-list',
        template: __webpack_require__(269),
        styles: [__webpack_require__(266)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["e" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["e" /* Store */]) === "function" && _a || Object])
], CompanyListComponent);

var _a;
//# sourceMappingURL=company-list.component.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_company_list_company_list_component__ = __webpack_require__(261);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__pages_company_list_company_list_component__["a" /* CompanyListComponent */] }
];
//# sourceMappingURL=company.routes.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyTableComponent = (function () {
    function CompanyTableComponent() {
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.refresh = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CompanyTableComponent.prototype.ngOnInit = function () {
    };
    return CompanyTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", Array)
], CompanyTableComponent.prototype, "companies", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Output */])(),
    __metadata("design:type", Object)
], CompanyTableComponent.prototype, "add", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Output */])(),
    __metadata("design:type", Object)
], CompanyTableComponent.prototype, "delete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Output */])(),
    __metadata("design:type", Object)
], CompanyTableComponent.prototype, "refresh", void 0);
CompanyTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'ngsp-company-table',
        template: __webpack_require__(270),
        styles: [__webpack_require__(267)]
    }),
    __metadata("design:paramtypes", [])
], CompanyTableComponent);

//# sourceMappingURL=company-table.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, ".icon-margin {\n  margin-left: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"companies$ | async; let companies; else loading\">\n    <ngsp-company-table [companies]=\"companies.list\" (delete)=\"deleteCompany($event)\" (refresh)=\"refresh()\" (add)=\"add()\"></ngsp-company-table>\n</div>\n<ng-template #loading>\n    <span>Loading...</span>\n</ng-template>"

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports = "<table class=\"<bordered></bordered>\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Phone</th>\n      <th>Email</th>\n      <th>Actions</th>\n      <th>\n        <a class=\"btn-floating waves-effect waves-light right icon-margin\" (click)=\"refresh.emit()\"><i class=\"material-icons\">refresh</i></a>\n        <a class=\"btn-floating waves-effect waves-light right\" (click)=\"add.emit()\"><i class=\"material-icons\">add</i></a>\n      </th>\n    </tr>\n  </thead>\n  <tr *ngFor=\"let company of companies\">\n    <td>{{company.name}}</td>\n    <td>{{company.phone}}</td>\n    <td>{{company.email}}</td>\n    <td colspan=\"2\">\n      <a class=\"btn-floating waves-effect waves-light red darken-3 right\" (click)=\"delete.emit(company.id)\"><i class=\"material-icons\">delete</i></a>\n    </td>\n  </tr>\n</table>"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map