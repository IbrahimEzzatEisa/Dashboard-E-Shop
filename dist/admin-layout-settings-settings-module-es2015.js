(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-layout-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/settings/settings/settings-list.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/settings/settings/settings-list.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/layouts/admin-layout/settings/settings-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/settings/settings-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "./src/app/layouts/admin-layout/settings/settings.component.ts");
/* harmony import */ var _settings_settings_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings-list.component */ "./src/app/layouts/admin-layout/settings/settings/settings-list.component.ts");





const routes = [{
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _settings_settings_list_component__WEBPACK_IMPORTED_MODULE_4__["SettingsListComponent"],
            },
        ]
    }];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SettingsRoutingModule);



/***/ }),

/***/ "./src/app/layouts/admin-layout/settings/settings.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layouts/admin-layout/settings/settings.component.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let SettingsComponent = class SettingsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: `<router-outlet></router-outlet>`
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SettingsComponent);



/***/ }),

/***/ "./src/app/layouts/admin-layout/settings/settings.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/settings/settings.module.ts ***!
  \******************************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.component */ "./src/app/layouts/admin-layout/settings/settings.component.ts");
/* harmony import */ var _settings_settings_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings-list.component */ "./src/app/layouts/admin-layout/settings/settings/settings-list.component.ts");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/layouts/admin-layout/settings/settings-routing.module.ts");








let SettingsModule = class SettingsModule {
};
SettingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
            _settings_settings_list_component__WEBPACK_IMPORTED_MODULE_6__["SettingsListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_7__["SettingsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ]
    })
], SettingsModule);



/***/ }),

/***/ "./src/app/layouts/admin-layout/settings/settings/settings-list.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/settings/settings/settings-list.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.table-bordered {\n  border: 2px solid #49bcc4;\n}\n.fa-arrow-circle-right {\n  color: #49bcc4;\n}\nth {\n  border: 2px solid #49bcc4;\n  border-bottom: 2px solid #49bcc4;\n  text-align: center;\n  color: #49bcc4;\n  font-family: Arabic;\n}\n.modal-title {\n  font-size: 15px;\n  text-align: center;\n  font-family: Arabic;\n}\ntd {\n  border: 2px solid #49bcc4;\n  border-bottom: 2px solid #49bcc4;\n}\n.titlePage {\n  color: #49bcc4 !important;\n  font-family: Arabic !important;\n}\n.fa-plus-circle:before {\n  content: \"\";\n  margin-left: 5px;\n}\n.input100 {\n  font-family: Arabic;\n  font-size: 15px;\n  line-height: 1.2;\n  color: white;\n  height: 40px;\n  display: block;\n  background: white;\n  border-radius: 25px;\n  width: 84%;\n  border-top-color: #49bcc4 !important;\n  border: 2px solid #49bcc4;\n  padding: 0 30px 0 53px;\n}\n.symbol-input100 {\n  font-size: 15px;\n  color: #49bcc4 !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  border-radius: 25px;\n  direction: ltr;\n  width: 21%;\n  bottom: 0;\n  height: 100%;\n  pointer-events: none;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #49bcc4 !important;\n  opacity: 1;\n  /* Firefox */\n}\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #49bcc4 !important;\n  opacity: 1;\n  /* Firefox */\n}\n:-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #49bcc4 !important;\n  opacity: 1;\n  /* Firefox */\n}\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #49bcc4 !important;\n  opacity: 1;\n  /* Firefox */\n}\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #49bcc4 !important;\n  opacity: 1;\n  /* Firefox */\n}\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #49bcc4 !important;\n}\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #49bcc4 !important;\n}\n.Title {\n  margin-top: 4px;\n  padding-left: 20%;\n}\n.click {\n  background-color: #49bcc4 !important;\n  font-family: Arabic;\n  font-size: 30px !important;\n}\nlabel {\n  color: #49bcc4;\n  font-size: 20px !important;\n  font-family: Arabic;\n  float: right;\n}\n.control-group {\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  text-align: left;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  width: 200px;\n  height: 210px;\n  margin: 10px;\n}\n.card-header-d {\n  background-color: #95afc0 !important;\n}\n.control-group {\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  text-align: left;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  width: 200px;\n  height: 210px;\n  margin: 10px;\n}\n.control {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  font-size: 18px;\n}\n.control input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n.control__indicator {\n  position: absolute;\n  top: 2px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background: #e6e6e6;\n}\n.form-control {\n  border: 1px solid #E3E3E3;\n  border-radius: 10px;\n  color: #49bcc4;\n  font-size: 18px;\n  -webkit-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;\n  box-shadow: none;\n  height: 50px;\n  font-family: Arabic !important;\n  text-align: center !important;\n}\n.modal-header {\n  background-color: #49bcc4 !important;\n  color: white;\n  font-family: Arabic !important;\n  font-size: 20px !important;\n}\n.btn-primary {\n  background-color: #49bcc4;\n  color: white;\n  font-size: 15px;\n  font-family: Arabic;\n}\n.btn-secondary {\n  background-color: #137075;\n  color: white;\n  font-size: 15px;\n  font-family: Arabic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9hZG1pbi1sYXlvdXQvc2V0dGluZ3Mvc2V0dGluZ3Mvc2V0dGluZ3MtbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9pYnJhaGltZXp6YXQvRGVza3RvcC9hZG1pbi9zcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L3NldHRpbmdzL3NldHRpbmdzL3NldHRpbmdzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0kseUJBQUE7QURFSjtBQ0VFO0VBQ0EsY0FBQTtBRENGO0FDQ0U7RUFDSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QURFTjtBQ0dFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURBSjtBQ0VFO0VBQ0kseUJBQUE7RUFDQSxnQ0FBQTtBRENOO0FDR0U7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0FEQU47QUNFRTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBRENOO0FDRUU7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FEQ047QUNDTTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUVBLG9CQUFBO0VBSUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBRUEsNEJBQUE7RUFHQSxvQkFBQTtBREFWO0FDR1U7RUFBZ0IseUNBQUE7RUFDWix5QkFBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FERTFCO0FDSlU7RUFBZ0IseUNBQUE7RUFDWix5QkFBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FERTFCO0FDSlU7RUFBZ0IseUNBQUE7RUFDWix5QkFBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FERTFCO0FDSlU7RUFBZ0IseUNBQUE7RUFDWix5QkFBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FERTFCO0FDSlU7RUFBZ0IseUNBQUE7RUFDWix5QkFBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FERTFCO0FDQ1k7RUFBeUIsNEJBQUE7RUFDdkIseUJBQUE7QURHZDtBQ0FZO0VBQTBCLG1CQUFBO0VBQ3hCLHlCQUFBO0FESWQ7QUNGWTtFQUNFLGVBQUE7RUFDUixpQkFBQTtBREtOO0FDRFk7RUFDWixvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QURJQTtBQ0ZBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FES0o7QUNDQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FERUo7QUNBRTtFQUNFLG9DQUFBO0FER0o7QUNDRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FERUo7QUNBRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBREdKO0FDREU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FESUo7QUNGRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FES0o7QUNGRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRHQUFBO0VBQUEsb0dBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FES0o7QUNIRTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QURNSjtBQ0pFO0VBQ0YseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FET0E7QUNMRTtFQUNFLHlCQUFBO0VBQ0osWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRFFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9hZG1pbi1sYXlvdXQvc2V0dGluZ3Mvc2V0dGluZ3Mvc2V0dGluZ3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0OWJjYzQ7XG59XG5cbi5mYS1hcnJvdy1jaXJjbGUtcmlnaHQge1xuICBjb2xvcjogIzQ5YmNjNDtcbn1cblxudGgge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNDliY2M0O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ5YmNjNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzQ5YmNjNDtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYztcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmFiaWM7XG59XG5cbnRkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzQ5YmNjNDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0OWJjYzQ7XG59XG5cbi50aXRsZVBhZ2Uge1xuICBjb2xvcjogIzQ5YmNjNCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQXJhYmljICFpbXBvcnRhbnQ7XG59XG5cbi5mYS1wbHVzLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu+BlVwiO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaW5wdXQxMDAge1xuICBmb250LWZhbWlseTogQXJhYmljO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiA4NCU7XG4gIGJvcmRlci10b3AtY29sb3I6ICM0OWJjYzQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgIzQ5YmNjNDtcbiAgcGFkZGluZzogMCAzMHB4IDAgNTNweDtcbn1cblxuLnN5bWJvbC1pbnB1dDEwMCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM0OWJjYzQgIWltcG9ydGFudDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGRpcmVjdGlvbjogbHRyO1xuICB3aWR0aDogMjElO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICBjb2xvcjogIzQ5YmNjNCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxO1xuICAvKiBGaXJlZm94ICovXG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogIzQ5YmNjNCAhaW1wb3J0YW50O1xufVxuXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gIGNvbG9yOiAjNDliY2M0ICFpbXBvcnRhbnQ7XG59XG5cbi5UaXRsZSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XG59XG5cbi5jbGljayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OWJjYzQgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYztcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmxhYmVsIHtcbiAgY29sb3I6ICM0OWJjYzQ7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQXJhYmljO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jb250cm9sLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAzMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmNhcmQtaGVhZGVyLWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTVhZmMwICFpbXBvcnRhbnQ7XG59XG5cbi5jb250cm9sLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAzMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY29udHJvbCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jb250cm9sX19pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UzRTNFMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICM0OWJjYzQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LWZhbWlseTogQXJhYmljICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YmNjNCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBBcmFiaWMgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OWJjYzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogQXJhYmljO1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzcwNzU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogQXJhYmljO1xufSIsIi50YWJsZS1ib3JkZXJlZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDliY2M0O1xyXG4gIFxyXG4gIFxyXG4gIH1cclxuICAuZmEtYXJyb3ctY2lyY2xlLXJpZ2h0e1xyXG4gIGNvbG9yIDogIzQ5YmNjNH1cclxuICBcclxuICB0aHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzQ5YmNjNDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0OWJjYzQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM0OWJjYzQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBBcmFiaWM7XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgfVxyXG4gIC5tb2RhbC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmFiaWM7XHJcbiAgfVxyXG4gIHRke1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjNDliY2M0O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ5YmNjNDtcclxuICAgICAgLy8gYm9yZGVyLXRvcDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIFxyXG4gIH1cclxuICAudGl0bGVQYWdle1xyXG4gICAgICBjb2xvcjogIzQ5YmNjNCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LWZhbWlseTogQXJhYmljICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mYS1wbHVzLWNpcmNsZTpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlxcZjA1NVwiO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIC5pbnB1dDEwMCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBBcmFiaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzQ5YmNjNCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjNDliY2M0O1xyXG4gICAgICBwYWRkaW5nOiAwIDMwcHggMCA1M3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zeW1ib2wtaW5wdXQxMDAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICM0OWJjYzQgIWltcG9ydGFudDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICAgICAgICB3aWR0aDogMjElO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNDliY2M0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICAgICAgICAgICAgICBjb2xvcjogIzQ5YmNjNCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgICAgICAgICAgICAgY29sb3I6ICM0OWJjYzQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuVGl0bGV7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC5jbGlja3tcclxuYmFja2dyb3VuZC1jb2xvcjogIzQ5YmNjNCAhaW1wb3J0YW50O1xyXG5mb250LWZhbWlseTogQXJhYmljO1xyXG5mb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5sYWJlbHtcclxuICAgIGNvbG9yOiAjNDliY2M0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQXJhYmljO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4uY29udHJvbC1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG4gIC5jYXJkLWhlYWRlci1ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1YWZjMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY29udHJvbC1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG4gIC5jb250cm9sIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLmNvbnRyb2wgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuY29udHJvbF9faW5kaWNhdG9yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UzRTNFMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogIzQ5YmNjNDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYyAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YmNjNCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG4tcHJpbWFyeXtcclxuYmFja2dyb3VuZC1jb2xvcjogIzQ5YmNjNDtcclxuY29sb3I6IHdoaXRlO1xyXG5mb250LXNpemU6IDE1cHg7XHJcbmZvbnQtZmFtaWx5OiBBcmFiaWM7XHJcbiAgfVxyXG4gIC5idG4tc2Vjb25kYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzcwNzU7XHJcbmNvbG9yOiB3aGl0ZTtcclxuZm9udC1zaXplOiAxNXB4O1xyXG5mb250LWZhbWlseTogQXJhYmljO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/settings/settings/settings-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/admin-layout/settings/settings/settings-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SettingsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsListComponent", function() { return SettingsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let SettingsListComponent = class SettingsListComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    home() {
        this.router.navigate(['/pages/home']);
    }
};
SettingsListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SettingsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/settings/settings/settings-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings-list.component.scss */ "./src/app/layouts/admin-layout/settings/settings/settings-list.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SettingsListComponent);



/***/ })

}]);
//# sourceMappingURL=admin-layout-settings-settings-module-es2015.js.map