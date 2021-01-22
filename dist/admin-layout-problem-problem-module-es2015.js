(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-layout-problem-problem-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/problem/problem/problem-list.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/problem/problem/problem-list.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n\r\n    <nav class=\"navbar navbar-expand-lg  \">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-wrapper\">\r\n                <a class=\"navbar-brand titlePage\">\r\n                   الشكاوي\r\n\r\n                </a>\r\n            </div>\r\n\r\n        </div>\r\n    </nav>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm12\">\r\n                <div class=\"card card-plain\">\r\n\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive\">\r\n\r\n                            <table class=\"table table-bordered\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th scope=\"col\"> الاسم الاول </th>\r\n                                        <th scope=\"col\"> الاسم الثانى </th>\r\n                                        <th scope=\"col\"> رقم الموبايل </th>\r\n                                        <th scope=\"col\"> الشكوي </th>\r\n                                        <th scope=\"col\"> أختيارات</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let prop of problemList; let i=index\">\r\n\r\n                                        <td> {{prop.firstName}}</td>\r\n                                        <td> {{prop.lastName}}</td>\r\n                                        <td> {{prop.phone}}</td>\r\n                                        <td> {{prop.message}}</td>\r\n                                        <td>\r\n\r\n                                            <i class=\"fa fa-trash \" title=\"مسح \" (click)=\"delete(i)\"></i>\r\n\r\n                                        </td>\r\n                                    </tr>\r\n\r\n\r\n\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n\r\n        <!-- <nav aria-label=\"Page navigation example\">\r\n      <ul class=\"pagination \">\r\n        <li class=\"page-item \" *ngFor=\"let item of data\"><a class=\"page-link \" (click)=\"navigate(item)\">\r\n            {{item}}\r\n          </a></li>\r\n\r\n\r\n      </ul>\r\n      <div class=\"col text-center\">\r\n        <h5> الصفحة المعروضه حاليا رقم <span class=\"activeNumber\"> {{pageTitle}} </span>\r\n        </h5>\r\n      </div>\r\n\r\n    </nav> -->\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/layouts/admin-layout/problem/problem-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/problem/problem-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ProblemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemRoutingModule", function() { return ProblemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _problem_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./problem.component */ "./src/app/layouts/admin-layout/problem/problem.component.ts");
/* harmony import */ var _problem_problem_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./problem/problem-list.component */ "./src/app/layouts/admin-layout/problem/problem/problem-list.component.ts");





const routes = [{
        path: '',
        component: _problem_component__WEBPACK_IMPORTED_MODULE_3__["ProblemComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _problem_problem_list_component__WEBPACK_IMPORTED_MODULE_4__["ProblemListComponent"],
            },
        ]
    }];
let ProblemRoutingModule = class ProblemRoutingModule {
};
ProblemRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProblemRoutingModule);



/***/ }),

/***/ "./src/app/layouts/admin-layout/problem/problem.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/problem/problem.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemComponent", function() { return ProblemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ProblemComponent = class ProblemComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
ProblemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProblemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-problem',
        template: `<router-outlet></router-outlet>`
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProblemComponent);



/***/ }),

/***/ "./src/app/layouts/admin-layout/problem/problem.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/problem/problem.module.ts ***!
  \****************************************************************/
/*! exports provided: ProblemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemModule", function() { return ProblemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _problem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./problem-routing.module */ "./src/app/layouts/admin-layout/problem/problem-routing.module.ts");
/* harmony import */ var _problem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./problem.component */ "./src/app/layouts/admin-layout/problem/problem.component.ts");
/* harmony import */ var _problem_problem_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./problem/problem-list.component */ "./src/app/layouts/admin-layout/problem/problem/problem-list.component.ts");








let ProblemModule = class ProblemModule {
};
ProblemModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _problem_component__WEBPACK_IMPORTED_MODULE_6__["ProblemComponent"],
            _problem_problem_list_component__WEBPACK_IMPORTED_MODULE_7__["ProblemListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _problem_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProblemRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ]
    })
], ProblemModule);



/***/ }),

/***/ "./src/app/layouts/admin-layout/problem/problem/problem-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/problem/problem/problem-list.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.navbar-absolute {\n  background-color: white;\n}\n.table-bordered {\n  border: 2px solid #1B5B84;\n}\n.fa-arrow-circle-right {\n  color: #1B5B84;\n}\ntd {\n  text-align: center;\n}\n.fa-edit {\n  color: #1B5B84;\n}\n.fa-trash {\n  color: #1B5B84;\n  margin-right: 20px;\n}\nth {\n  border: 2px solid #1B5B84;\n  border-bottom: 2px solid #1B5B84;\n  text-align: center;\n  color: #1B5B84;\n  font-family: Arabic;\n}\ntd {\n  border: 2px solid #1B5B84;\n  border-bottom: 2px solid #1B5B84;\n}\n.titlePage {\n  color: #1B5B84 !important;\n  font-family: Arabic;\n}\n.fa-plus-circle:before {\n  content: \"\";\n  margin-left: 5px;\n}\n.input100 {\n  font-family: Arabic;\n  font-size: 15px;\n  line-height: 1.2;\n  color: white;\n  height: 40px;\n  display: block;\n  background: white;\n  border-radius: 25px;\n  border-top-color: #1B5B84 !important;\n  border: 2px solid #1B5B84;\n  padding: 0 30px 0 53px;\n}\n.symbol-input100 {\n  font-size: 15px;\n  color: #1B5B84 !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  border-radius: 25px;\n  direction: ltr;\n  width: 21%;\n  bottom: 0;\n  height: 100%;\n  pointer-events: none;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n:-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #1B5B84 !important;\n}\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #1B5B84 !important;\n}\n.Title {\n  margin-top: 4px;\n  padding-left: 20%;\n}\nli {\n  color: #1B5B84;\n  cursor: pointer;\n}\nh5 {\n  color: #1B5B84;\n  font-size: 20px;\n  font-family: Arabic;\n}\n.activeNumber {\n  color: #0a3f42;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9hZG1pbi1sYXlvdXQvcHJvYmxlbS9wcm9ibGVtL3Byb2JsZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9pYnJhaGltZXp6YXQvRGVza3RvcC9hZG1pbi9zcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L3Byb2JsZW0vcHJvYmxlbS9wcm9ibGVtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksdUJBQUE7QURFSjtBQ0NBO0VBQ0kseUJBQUE7QURFSjtBQ0NBO0VBQ0ksY0FBQTtBREVKO0FDQ0E7RUFDSSxrQkFBQTtBREVKO0FDQ0E7RUFDSSxjQUFBO0FERUo7QUNDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBREVKO0FDQ0E7RUFDSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QURFSjtBQ0NBO0VBQ0kseUJBQUE7RUFDQSxnQ0FBQTtBREVKO0FDRUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FEQ0o7QUNFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBRENKO0FDRUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QURDSjtBQ0VBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFJQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUdBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRENKO0FDTEE7RUFDSSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QURDSjtBQ0xBO0VBQ0kseUNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FEQ0o7QUNMQTtFQUNJLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRENKO0FDTEE7RUFDSSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QURDSjtBQ0VBO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtBRENKO0FDRUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FEQ0o7QUNFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBRENKO0FDRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEQ0o7QUNFQTtFQUNJLGNBQUE7QURDSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L3Byb2JsZW0vcHJvYmxlbS9wcm9ibGVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubmF2YmFyLWFic29sdXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxQjVCODQ7XG59XG5cbi5mYS1hcnJvdy1jaXJjbGUtcmlnaHQge1xuICBjb2xvcjogIzFCNUI4NDtcbn1cblxudGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mYS1lZGl0IHtcbiAgY29sb3I6ICMxQjVCODQ7XG59XG5cbi5mYS10cmFzaCB7XG4gIGNvbG9yOiAjMUI1Qjg0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbnRoIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzFCNUI4NDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxQjVCODQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMxQjVCODQ7XG4gIGZvbnQtZmFtaWx5OiBBcmFiaWM7XG59XG5cbnRkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzFCNUI4NDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxQjVCODQ7XG59XG5cbi50aXRsZVBhZ2Uge1xuICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQXJhYmljO1xufVxuXG4uZmEtcGx1cy1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgZVcIjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmlucHV0MTAwIHtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItdG9wLWNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxQjVCODQ7XG4gIHBhZGRpbmc6IDAgMzBweCAwIDUzcHg7XG59XG5cbi5zeW1ib2wtaW5wdXQxMDAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBkaXJlY3Rpb246IGx0cjtcbiAgd2lkdGg6IDIxJTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTtcbiAgLyogRmlyZWZveCAqL1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xufVxuXG4uVGl0bGUge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIHBhZGRpbmctbGVmdDogMjAlO1xufVxuXG5saSB7XG4gIGNvbG9yOiAjMUI1Qjg0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmg1IHtcbiAgY29sb3I6ICMxQjVCODQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYztcbn1cblxuLmFjdGl2ZU51bWJlciB7XG4gIGNvbG9yOiAjMGEzZjQyO1xufSIsIi5uYXZiYXItYWJzb2x1dGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50YWJsZS1ib3JkZXJlZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMUI1Qjg0O1xyXG59XHJcblxyXG4uZmEtYXJyb3ctY2lyY2xlLXJpZ2h0IHtcclxuICAgIGNvbG9yOiAjMUI1Qjg0XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZhLWVkaXQge1xyXG4gICAgY29sb3I6ICMxQjVCODRcclxufVxyXG5cclxuLmZhLXRyYXNoIHtcclxuICAgIGNvbG9yOiAjMUI1Qjg0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG50aCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMUI1Qjg0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxQjVCODQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzFCNUI4NDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmFiaWM7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxQjVCODQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFCNUI4NDtcclxuICAgIC8vIGJvcmRlci10b3A6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRpdGxlUGFnZSB7XHJcbiAgICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYztcclxufVxyXG5cclxuLmZhLXBsdXMtY2lyY2xlOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjA1NVwiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmlucHV0MTAwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmFiaWM7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMUI1Qjg0O1xyXG4gICAgcGFkZGluZzogMCAzMHB4IDAgNTNweDtcclxufVxyXG5cclxuLnN5bWJvbC1pbnB1dDEwMCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICB3aWR0aDogMjElO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICAgIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5UaXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxufVxyXG5cclxubGkge1xyXG4gICAgY29sb3I6ICMxQjVCODQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGNvbG9yOiAjMUI1Qjg0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYztcclxufVxyXG5cclxuLmFjdGl2ZU51bWJlciB7XHJcbiAgICBjb2xvcjogIzBhM2Y0MjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/problem/problem/problem-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/problem/problem/problem-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProblemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemListComponent", function() { return ProblemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_api_reset_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/api/reset-password.service */ "./src/app/shared/services/api/reset-password.service.ts");
/* harmony import */ var _shared_models_problem_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/models/problem.model */ "./src/app/shared/models/problem.model.ts");
/* harmony import */ var _shared_services_swal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/swal.service */ "./src/app/shared/services/swal.service.ts");





let ProblemListComponent = class ProblemListComponent {
    constructor(problemServices, swalService) {
        this.problemServices = problemServices;
        this.swalService = swalService;
        this.problemList = [];
        this.editObj = new _shared_models_problem_model__WEBPACK_IMPORTED_MODULE_3__["Problem"]();
        this.data = [];
        this.pagenumber = 0;
        this.pageTitle = 1;
    }
    ngOnInit() {
        this.problem = new _shared_models_problem_model__WEBPACK_IMPORTED_MODULE_3__["Problem"]();
        this.getAllData();
    }
    // get all data of category
    getAllData() {
        this.problemServices.getAll('', '1', '100').subscribe(res => {
            this.data = [];
            let a = (res.result.length / 100) + 1;
            for (let index = 1; index <= a; index++) {
                this.data.push(index);
            }
            this.problemList = res.result;
        });
    }
    delete(index) {
        this.editObj = Object.assign({}, this.problemList[index]);
        this.index = index;
        this.swalService.showRemoveConfirmation(index).then(result => {
            if (result.value) {
                this.problemServices.delete(this.editObj.id).subscribe(res => {
                    this.swalService.Notifier('تم مسح البيانات بنجاح ');
                    this.getAllData();
                }, err => {
                    let errorMessage = err.message || ' خطآ في مسح البيانات  ';
                    this.swalService.NotifierError(errorMessage);
                });
            }
        });
    }
};
ProblemListComponent.ctorParameters = () => [
    { type: _shared_services_api_reset_password_service__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordService"] },
    { type: _shared_services_swal_service__WEBPACK_IMPORTED_MODULE_4__["SwalService"] }
];
ProblemListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-problem-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./problem-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/problem/problem/problem-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./problem-list.component.scss */ "./src/app/layouts/admin-layout/problem/problem/problem-list.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_api_reset_password_service__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordService"],
        _shared_services_swal_service__WEBPACK_IMPORTED_MODULE_4__["SwalService"]])
], ProblemListComponent);



/***/ })

}]);
//# sourceMappingURL=admin-layout-problem-problem-module-es2015.js.map