(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-layout-language-language-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/language/language/language-list.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/language/language/language-list.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n\r\n  <nav class=\"navbar navbar-expand-lg  \">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-wrapper\">\r\n        <a class=\"navbar-brand titlePage\" data-toggle=\"modal\" data-target=\"#exampleModal\">\r\n          <i class=\"fas fa-globe \"> </i>\r\n          المدن\r\n\r\n        </a>\r\n        <span> <i class=\"fas fa-arrow-circle-right\"></i></span>\r\n\r\n        <a class=\"navbar-brand titlePage\" data-toggle=\"modal\" data-target=\"#exampleModal\">\r\n          <i class=\"fas fa-plus-circle\" data-toggle=\"modal\" data-target=\"#exampleModal\"> </i>\r\n          أضافة مدينة\r\n        </a>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </nav>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm12\">\r\n        <div class=\"card card-plain\">\r\n\r\n          <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n\r\n              <table class=\"table table-bordered\">\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\"> المدينة </th>\r\n                    <th scope=\"col\"> أختيارات</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let prop of cityList; let i=index\">\r\n\r\n                    <td> {{prop.name}}</td>\r\n\r\n                    <td>\r\n                      <i class=\"fa  fa-edit \" title=\"تعديل \" (click)=\"fill(prop)\" data-toggle=\"modal\"\r\n                        data-target=\"#basicExampleModal\"></i>\r\n                      <i class=\"fa fa-trash \" title=\"مسح \" (click)=\"delete(i)\"></i>\r\n\r\n                    </td>\r\n                  </tr>\r\n\r\n\r\n\r\n\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <!-- <nav aria-label=\"Page navigation example\">\r\n      <ul class=\"pagination \">\r\n        <li class=\"page-item \" *ngFor=\"let item of data\"><a class=\"page-link \" (click)=\"navigate(item)\">\r\n            {{item}}\r\n          </a></li>\r\n\r\n\r\n      </ul>\r\n      <div class=\"col text-center\">\r\n        <h5> الصفحة المعروضه حاليا رقم <span class=\"activeNumber\"> {{pageTitle}} </span>\r\n        </h5>\r\n      </div>\r\n\r\n    </nav> -->\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered  modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">\r\n\r\n          <div class=\"row\">\r\n\r\n\r\n            <div class=\"text-center\">\r\n              <a class=\"titleheader\">\r\n                أضافة مدينة </a>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n        </h5>\r\n\r\n\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"modal-body\">\r\n          <form>\r\n      \r\n\r\n\r\n            <div class=\"row\">\r\n              <div class=\"form-group col-md-12 col-sm-6 \">\r\n                <label> اسم المدينة\r\n                </label>\r\n                <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"city.name\">\r\n\r\n\r\n\r\n              </div>\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n          </form>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 col-sm-12 mx-auto\">\r\n            <button class=\"btn btn-primary btn-lg btn-block\" type=\"button\" (click)=\"save()\">حفظ\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 col-sm-12 mx-auto\">\r\n            <button type=\"button\" class=\"btn bg-cancel btn-block \" data-dismiss=\"modal\" (click)=\"cancel()\"> إلغاء\r\n            </button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--end add-->\r\n<!-- Edit Modal-->\r\n<div class=\"modal fade\" id=\"basicExampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">\r\n\r\n          <div class=\"row\">\r\n\r\n\r\n\r\n\r\n            <div class=\"text-center\">\r\n              <a class=\"titleheader\">\r\n                تعديل المدينة </a>\r\n            </div>\r\n          </div>\r\n\r\n        </h5>\r\n\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"modal-body\">\r\n          <form>\r\n        \r\n            <div class=\"row\">\r\n\r\n              <div class=\"form-group col-md-12 col-sm-6 \">\r\n                <label>\r\n                  اسم المدينة\r\n                </label>\r\n                <input class=\"form-control\" name=\"name\" [(ngModel)]=\"city.name\" #name=\"ngModel\" autocomplete=\"off\">\r\n              </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n          \r\n          </form>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 col-sm-12 mx-auto\">\r\n            <button class=\"btn btn-primary btn-lg btn-block\" type=\"button\" (click)=\"saveupdate()\">حفظ\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 col-sm-12 mx-auto\">\r\n            <button type=\"button\" class=\"btn bg-cancel btn-block \" data-dismiss=\"modal\" (click)=\"cancel()\"> إلغاء\r\n            </button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "./src/app/layouts/admin-layout/language/language-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/language/language-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: LanguageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageRoutingModule", function() { return LanguageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _language_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language.component */ "./src/app/layouts/admin-layout/language/language.component.ts");
/* harmony import */ var _language_language_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./language/language-list.component */ "./src/app/layouts/admin-layout/language/language/language-list.component.ts");





const routes = [{
        path: '',
        component: _language_component__WEBPACK_IMPORTED_MODULE_3__["LanguageComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _language_language_list_component__WEBPACK_IMPORTED_MODULE_4__["LanguageListComponent"],
            },
        ]
    }];
let LanguageRoutingModule = class LanguageRoutingModule {
};
LanguageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LanguageRoutingModule);



/***/ }),

/***/ "./src/app/layouts/admin-layout/language/language.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layouts/admin-layout/language/language.component.ts ***!
  \*********************************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let LanguageComponent = class LanguageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
LanguageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LanguageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-language',
        template: `<router-outlet></router-outlet>`
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LanguageComponent);



/***/ }),

/***/ "./src/app/layouts/admin-layout/language/language.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/language/language.module.ts ***!
  \******************************************************************/
/*! exports provided: LanguageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageModule", function() { return LanguageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _language_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./language.component */ "./src/app/layouts/admin-layout/language/language.component.ts");
/* harmony import */ var _language_language_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./language/language-list.component */ "./src/app/layouts/admin-layout/language/language/language-list.component.ts");
/* harmony import */ var _language_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./language-routing.module */ "./src/app/layouts/admin-layout/language/language-routing.module.ts");








let LanguageModule = class LanguageModule {
};
LanguageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _language_component__WEBPACK_IMPORTED_MODULE_5__["LanguageComponent"],
            _language_language_list_component__WEBPACK_IMPORTED_MODULE_6__["LanguageListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _language_routing_module__WEBPACK_IMPORTED_MODULE_7__["LanguageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ]
    })
], LanguageModule);



/***/ }),

/***/ "./src/app/layouts/admin-layout/language/language/language-list.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/language/language/language-list.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.navbar-absolute {\n  background-color: white;\n}\n.table-bordered {\n  border: 2px solid #1B5B84;\n}\n.fa-arrow-circle-right {\n  color: #1B5B84;\n}\ntd {\n  text-align: center;\n  font-family: Arabic;\n  font-size: 18px;\n}\n.fa-edit {\n  color: #1B5B84;\n}\n.fa-trash {\n  color: #1B5B84;\n  margin-right: 20px;\n}\nth {\n  border: 2px solid #1B5B84;\n  border-bottom: 2px solid #1B5B84;\n  text-align: center;\n  color: #1B5B84;\n  font-family: Arabic;\n}\ntd {\n  border: 2px solid #1B5B84;\n  border-bottom: 2px solid #1B5B84;\n}\n.titlePage {\n  color: #1B5B84 !important;\n  font-family: Arabic;\n}\n.fa-plus-circle:before {\n  content: \"\";\n  margin-left: 5px;\n}\n.input100 {\n  font-family: Arabic;\n  font-size: 15px;\n  line-height: 1.2;\n  color: white;\n  height: 40px;\n  display: block;\n  background: white;\n  border-radius: 25px;\n  border-top-color: #1B5B84 !important;\n  border: 2px solid #1B5B84;\n  padding: 0 30px 0 53px;\n}\n.symbol-input100 {\n  font-size: 15px;\n  color: #1B5B84 !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  border-radius: 25px;\n  direction: ltr;\n  width: 21%;\n  bottom: 0;\n  height: 100%;\n  pointer-events: none;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n:-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #1B5B84 !important;\n}\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #1B5B84 !important;\n}\n.Title {\n  margin-top: 4px;\n  padding-left: 20%;\n}\nli {\n  color: #1B5B84;\n  cursor: pointer;\n}\nh5 {\n  color: #1B5B84;\n  font-size: 20px;\n  font-family: Arabic;\n}\n.activeNumber {\n  color: #0a3f42;\n}\n.modal-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n  align-items: flex-start;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n  background-color: #1B5B84;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: white;\n}\n.modal-body {\n  position: relative;\n  -webkit-box-flex: 1;\n  flex: 1 1 auto;\n  padding: 1rem;\n  background-color: #e4dfdf7a;\n}\n.modal-content {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);\n  border: 1px solid;\n  padding: 10px;\n  box-shadow: 5px 10px #1B5B84;\n}\n.titleheader {\n  color: white !important;\n  font-family: Arabic;\n}\n.fa-close {\n  margin-right: -20px;\n  color: white !important;\n}\n.btn-primary {\n  background-color: #1B5B84;\n}\n.form-control {\n  border: 1px solid #1B5B84;\n  color: #053777;\n  font-weight: 200;\n  border-radius: 7px;\n  font-size: 20px;\n  font-family: Arabic;\n  margin-right: 5px;\n  padding-right: 10px;\n}\nlabel {\n  font-weight: 500;\n  display: block;\n  margin: 4px 0;\n  text-transform: uppercase;\n  font-size: 15px;\n  overflow: hidden;\n  direction: rtl;\n  float: right;\n  color: #1B5B84 !important;\n  font-family: Arabic;\n}\nlabel span {\n  float: right;\n  text-transform: none;\n  font-weight: 200;\n  line-height: 1em;\n  font-style: italic;\n  opacity: 0.8;\n}\n.btn {\n  font-family: Arabic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9hZG1pbi1sYXlvdXQvbGFuZ3VhZ2UvbGFuZ3VhZ2UvbGFuZ3VhZ2UtbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9pYnJhaGltZXp6YXQvRGVza3RvcC9hZG1pbi9zcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2xhbmd1YWdlL2xhbmd1YWdlL2xhbmd1YWdlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksdUJBQUE7QURFSjtBQ0NBO0VBQ0kseUJBQUE7QURFSjtBQ0NBO0VBQ0ksY0FBQTtBREVKO0FDQ0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBREVKO0FDQ0E7RUFDSSxjQUFBO0FERUo7QUNDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBREVKO0FDQ0E7RUFDSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QURFSjtBQ0NBO0VBQ0kseUJBQUE7RUFDQSxnQ0FBQTtBREVKO0FDRUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FEQ0o7QUNFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBRENKO0FDRUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QURDSjtBQ0VBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFJQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUdBLG9CQUFBO0FEQ0o7QUNFQztFQUNHLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRENKO0FDTEM7RUFDRyx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QURDSjtBQ0xDO0VBQ0cseUNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FEQ0o7QUNMQztFQUNHLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRENKO0FDTEM7RUFDRyx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QURDSjtBQ0VDO0VBQ0csNEJBQUE7RUFDQSx5QkFBQTtBRENKO0FDRUM7RUFDRyxtQkFBQTtFQUNBLHlCQUFBO0FEQ0o7QUNFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBRENKO0FDRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEQ0o7QUNFQTtFQUNJLGNBQUE7QURDSjtBQ0VBO0VBQ0ksb0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7QURDSjtBQ0VBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QURDSjtBQ0VBO0VBQ0ksNENBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBRENKO0FDRUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FEQ0o7QUNFQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QURDSjtBQ0VBO0VBQ0kseUJBQUE7QURDSjtBQ0VBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FEQ0o7QUNBSTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QURFUjtBQ0VBO0VBQ0ksbUJBQUE7QURDSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2xhbmd1YWdlL2xhbmd1YWdlL2xhbmd1YWdlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubmF2YmFyLWFic29sdXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxQjVCODQ7XG59XG5cbi5mYS1hcnJvdy1jaXJjbGUtcmlnaHQge1xuICBjb2xvcjogIzFCNUI4NDtcbn1cblxudGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmFiaWM7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZhLWVkaXQge1xuICBjb2xvcjogIzFCNUI4NDtcbn1cblxuLmZhLXRyYXNoIHtcbiAgY29sb3I6ICMxQjVCODQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxudGgge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMUI1Qjg0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFCNUI4NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzFCNUI4NDtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYztcbn1cblxudGQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMUI1Qjg0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFCNUI4NDtcbn1cblxuLnRpdGxlUGFnZSB7XG4gIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBcmFiaWM7XG59XG5cbi5mYS1wbHVzLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu+BlVwiO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaW5wdXQxMDAge1xuICBmb250LWZhbWlseTogQXJhYmljO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci10b3AtY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgIzFCNUI4NDtcbiAgcGFkZGluZzogMCAzMHB4IDAgNTNweDtcbn1cblxuLnN5bWJvbC1pbnB1dDEwMCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGRpcmVjdGlvbjogbHRyO1xuICB3aWR0aDogMjElO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxO1xuICAvKiBGaXJlZm94ICovXG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xufVxuXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XG59XG5cbi5UaXRsZSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XG59XG5cbmxpIHtcbiAgY29sb3I6ICMxQjVCODQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDUge1xuICBjb2xvcjogIzFCNUI4NDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogQXJhYmljO1xufVxuXG4uYWN0aXZlTnVtYmVyIHtcbiAgY29sb3I6ICMwYTNmNDI7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjNyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQjVCODQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZGZkZjdhO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggIzFCNUI4NDtcbn1cblxuLnRpdGxlaGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBcmFiaWM7XG59XG5cbi5mYS1jbG9zZSB7XG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI1Qjg0O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFCNUI4NDtcbiAgY29sb3I6ICMwNTM3Nzc7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogQXJhYmljO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxubGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA0cHggMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQXJhYmljO1xufVxubGFiZWwgc3BhbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uYnRuIHtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYztcbn0iLCIubmF2YmFyLWFic29sdXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGFibGUtYm9yZGVyZWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFCNUI4NDtcclxufVxyXG5cclxuLmZhLWFycm93LWNpcmNsZS1yaWdodCB7XHJcbiAgICBjb2xvcjogIzFCNUI4NFxyXG59XHJcblxyXG50ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQXJhYmljO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZmEtZWRpdCB7XHJcbiAgICBjb2xvcjogIzFCNUI4NFxyXG59XHJcblxyXG4uZmEtdHJhc2gge1xyXG4gICAgY29sb3I6ICMxQjVCODQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbnRoIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxQjVCODQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFCNUI4NDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMUI1Qjg0O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYztcclxufVxyXG5cclxudGQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFCNUI4NDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMUI1Qjg0O1xyXG4gICAgLy8gYm9yZGVyLXRvcDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udGl0bGVQYWdlIHtcclxuICAgIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQXJhYmljO1xyXG59XHJcblxyXG4uZmEtcGx1cy1jaXJjbGU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDU1XCI7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uaW5wdXQxMDAge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxQjVCODQ7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHggMCA1M3B4O1xyXG59XHJcblxyXG4uc3ltYm9sLWlucHV0MTAwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgIHdpZHRoOiAyMSU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG5cclxuIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICAgIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLlRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjAlO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBjb2xvcjogIzFCNUI4NDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaDUge1xyXG4gICAgY29sb3I6ICMxQjVCODQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJhYmljO1xyXG59XHJcblxyXG4uYWN0aXZlTnVtYmVyIHtcclxuICAgIGNvbG9yOiAjMGEzZjQyO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjVCODQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGRmZGY3YTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAjMUI1Qjg0O1xyXG59XHJcblxyXG4udGl0bGVoZWFkZXIge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQXJhYmljO1xyXG59XHJcblxyXG4uZmEtY2xvc2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFCNUI4NDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMUI1Qjg0O1xyXG4gICAgY29sb3I6ICMwNTM3Nzc7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYztcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA0cHggMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYztcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LWZhbWlseTogQXJhYmljO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/language/language/language-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/language/language/language-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LanguageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageListComponent", function() { return LanguageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_city_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/models/city.model */ "./src/app/shared/models/city.model.ts");
/* harmony import */ var _shared_services_api_languages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/api/languages.service */ "./src/app/shared/services/api/languages.service.ts");
/* harmony import */ var _shared_services_swal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/swal.service */ "./src/app/shared/services/swal.service.ts");





let LanguageListComponent = class LanguageListComponent {
    constructor(languageServices, swalService) {
        this.languageServices = languageServices;
        this.swalService = swalService;
        this.cityList = [];
        this.editObj = new _shared_models_city_model__WEBPACK_IMPORTED_MODULE_2__["City"]();
        this.data = [];
        this.pagenumber = 0;
        this.pageTitle = 1;
    }
    ngOnInit() {
        this.city = new _shared_models_city_model__WEBPACK_IMPORTED_MODULE_2__["City"]();
        this.getAllData();
    }
    // get all data of category
    getAllData() {
        this.languageServices.getAll('', '1', '100').subscribe(res => {
            this.data = [];
            let a = (res.result.length / 100) + 1;
            for (let index = 1; index <= a; index++) {
                this.data.push(index);
            }
            this.cityList = res.result;
        });
    }
    //fill
    fill(prop) {
        this.city.id = prop.id;
        this.city.name = prop.name;
    }
    reset() {
        this.city.id = 0;
        this.city.name = '';
    }
    open() {
        this.reset();
    }
    save() {
        this.languageServices.create(this.city).subscribe(res => {
            this.swalService.Notifier(' تم الحفظ بنجاح .. شكرا لك ');
            this.reset();
            this.getAllData();
        }, err => {
            let errorMessage = err.data || ' حدث خطأ اثناء الحفظ .. من فضلك حاول مرة آخري    ';
            this.swalService.NotifierError(errorMessage);
        });
    }
    delete(index) {
        this.editObj = Object.assign({}, this.cityList[index]);
        this.index = index;
        this.swalService.showRemoveConfirmation(index).then(result => {
            if (result.value) {
                this.languageServices.delete(this.editObj.id).subscribe(res => {
                    this.swalService.Notifier('تم مسح البيانات بنجاح ');
                    this.reset();
                    this.getAllData();
                }, err => {
                    let errorMessage = err.message || ' خطآ في مسح البيانات  ';
                    this.swalService.NotifierError(errorMessage);
                });
            }
        });
    }
    saveupdate() {
        this.update();
    }
    update() {
        this.languageServices.update(this.city).subscribe(res => {
            this.swalService.Notifier('تم حفظ التعديلات بنجاح ');
            this.reset();
            this.getAllData();
        }, err => {
            let errorMessage = err.data || ' حدث خطأ اثناء الحفظ .. من فضلك حاول مرة آخري    ';
            this.swalService.NotifierError(errorMessage);
        });
    }
    cancel() {
        this.reset();
    }
};
LanguageListComponent.ctorParameters = () => [
    { type: _shared_services_api_languages_service__WEBPACK_IMPORTED_MODULE_3__["LanguagesService"] },
    { type: _shared_services_swal_service__WEBPACK_IMPORTED_MODULE_4__["SwalService"] }
];
LanguageListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-language-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./language-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/language/language/language-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./language-list.component.scss */ "./src/app/layouts/admin-layout/language/language/language-list.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_api_languages_service__WEBPACK_IMPORTED_MODULE_3__["LanguagesService"],
        _shared_services_swal_service__WEBPACK_IMPORTED_MODULE_4__["SwalService"]])
], LanguageListComponent);



/***/ })

}]);
//# sourceMappingURL=admin-layout-language-language-module-es2015.js.map