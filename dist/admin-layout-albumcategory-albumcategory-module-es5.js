function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-layout-albumcategory-albumcategory-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/albumcategory/albumcategory/albumcategory-list.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/albumcategory/albumcategory/albumcategory-list.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsAdminLayoutAlbumcategoryAlbumcategoryAlbumcategoryListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content\">\r\n\r\n    <nav class=\"navbar navbar-expand-lg    \">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-wrapper\">\r\n                <a class=\"navbar-brand titlePage\">\r\n                    <i class=\"fas fa-music \"> </i> الاقسام\r\n                </a>\r\n\r\n                <span> <i class=\"fas fa-arrow-circle-right\"></i></span>\r\n\r\n                <a class=\"navbar-brand titlePage\" data-toggle=\"modal\" data-target=\"#exampleModal\">\r\n                    <i class=\"fas fa-plus-circle\" data-toggle=\"modal\" data-target=\"#exampleModal\"> </i> أضافة قسم جديد\r\n                </a>\r\n            </div>\r\n\r\n            <div class=\"justify-content-end\" id=\"navigation\">\r\n\r\n                <ul class=\"navbar-nav\">\r\n\r\n                    <li class=\"nav-item \">\r\n\r\n                        <input class=\"input100\" type=\"text\" name=\"username\" placeholder=\"بحث\" name=\"search\">\r\n                        <span class=\"symbol-input100\">\r\n              <i class=\"fa fa-search justify-content-end\"></i>\r\n\r\n            </span>\r\n                    </li>\r\n\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm12\">\r\n                <div class=\"card card-plain\">\r\n\r\n                    <div class=\"card-body\">\r\n                        <div class=\"table-responsive\">\r\n\r\n                            <table class=\"table table-bordered\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th scope=\"col\">القسم </th>\r\n\r\n                                        <th scope=\"col\"> الأختيارات </th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let prop of categoryList; let i=index\">\r\n                                        <td> {{prop.name}}</td>\r\n\r\n                                        <td>\r\n                                            <i class=\"fa  fa-edit \" title=\"تعديل \" (click)=\"fill(prop)\" data-toggle=\"modal\" data-target=\"#basicExampleModal\"></i>\r\n                                            <i class=\"fa fa-trash \" title=\"مسح \" (click)=\"delete(i)\"></i>\r\n\r\n                                        </td>\r\n\r\n                                    </tr>\r\n\r\n\r\n\r\n\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered  modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">\r\n\r\n                    <div class=\"row\">\r\n\r\n\r\n\r\n\r\n                        <div class=\"text-center\">\r\n                            <a class=\"titleheader\">\r\n                أضافة قسم جديد  </a>\r\n\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                </h5>\r\n\r\n\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"modal-body\">\r\n                    <form>\r\n\r\n\r\n\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-12 col-sm-6 \">\r\n                                <label> القسم \r\n                </label>\r\n                                <input class=\"form-control\" type=\"titleAr\" name=\"titleAr\" [(ngModel)]=\"category.name\">\r\n\r\n\r\n\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n\r\n\r\n\r\n                    </form>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 col-sm-12 mx-auto\">\r\n                        <button class=\"btn btn-primary btn-lg btn-block\" type=\"button\" (click)=\"save()\">حفظ\r\n            </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 col-sm-12 mx-auto\">\r\n                        <button type=\"button\" class=\"btn bg-cancel btn-block \" data-dismiss=\"modal\" (click)=\"cancel()\"> إلغاء\r\n            </button>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--end add-->\r\n<!-- Edit Modal-->\r\n<div class=\"modal fade\" id=\"basicExampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">\r\n\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"text-center\">\r\n                            <a class=\"titleheader\">\r\n                تعديل قسم  </a>\r\n\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                </h5>\r\n\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"modal-body\">\r\n                    <form>\r\n                        <div class=\"row\">\r\n\r\n                            <div class=\"form-group col-md-12 col-sm-6 \">\r\n                                <label>\r\n                  القسم\r\n                </label>\r\n                                <input class=\"form-control\" name=\"name\" [(ngModel)]=\"category.name\" autocomplete=\"off\">\r\n                            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                        </div>\r\n                        <div class=\"row\">\r\n\r\n                            <div class=\"form-group col-md-12 col-sm-6 \">\r\n                                <label>\r\n                  الترقيم\r\n                </label>\r\n                                <input class=\"form-control\" #order=\"ngModel\" name=\"name\" [(ngModel)]=\"category.order\" autocomplete=\"off\">\r\n                            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                        </div>\r\n\r\n\r\n\r\n                    </form>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 col-sm-12 mx-auto\">\r\n                        <button class=\"btn btn-primary btn-lg btn-block\" type=\"button\" (click)=\"saveupdate()\">حفظ\r\n            </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12 col-sm-12 mx-auto\">\r\n                        <button type=\"button\" class=\"btn bg-cancel btn-block \" data-dismiss=\"modal\" (click)=\"cancel()\"> إلغاء\r\n            </button>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>";
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/albumcategory/albumcategory-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/layouts/admin-layout/albumcategory/albumcategory-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: AlbumcategoryRoutingModule */

  /***/
  function srcAppLayoutsAdminLayoutAlbumcategoryAlbumcategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumcategoryRoutingModule", function () {
      return AlbumcategoryRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _albumcategory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./albumcategory.component */
    "./src/app/layouts/admin-layout/albumcategory/albumcategory.component.ts");
    /* harmony import */


    var _albumcategory_albumcategory_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./albumcategory/albumcategory-list.component */
    "./src/app/layouts/admin-layout/albumcategory/albumcategory/albumcategory-list.component.ts");

    var routes = [{
      path: '',
      component: _albumcategory_component__WEBPACK_IMPORTED_MODULE_3__["AlbumcategoryComponent"],
      children: [{
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }, {
        path: 'list',
        component: _albumcategory_albumcategory_list_component__WEBPACK_IMPORTED_MODULE_4__["AlbumcategoryListComponent"]
      }]
    }];

    var AlbumcategoryRoutingModule = function AlbumcategoryRoutingModule() {
      _classCallCheck(this, AlbumcategoryRoutingModule);
    };

    AlbumcategoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AlbumcategoryRoutingModule);
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/albumcategory/albumcategory.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/layouts/admin-layout/albumcategory/albumcategory.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AlbumcategoryComponent */

  /***/
  function srcAppLayoutsAdminLayoutAlbumcategoryAlbumcategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumcategoryComponent", function () {
      return AlbumcategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AlbumcategoryComponent =
    /*#__PURE__*/
    function () {
      function AlbumcategoryComponent(router) {
        _classCallCheck(this, AlbumcategoryComponent);

        this.router = router;
      }

      _createClass(AlbumcategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlbumcategoryComponent;
    }();

    AlbumcategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AlbumcategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-albumcategory',
      template: "<router-outlet></router-outlet>"
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AlbumcategoryComponent);
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/albumcategory/albumcategory.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/layouts/admin-layout/albumcategory/albumcategory.module.ts ***!
    \****************************************************************************/

  /*! exports provided: AlbumcategoryModule */

  /***/
  function srcAppLayoutsAdminLayoutAlbumcategoryAlbumcategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumcategoryModule", function () {
      return AlbumcategoryModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _albumcategory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./albumcategory.component */
    "./src/app/layouts/admin-layout/albumcategory/albumcategory.component.ts");
    /* harmony import */


    var _albumcategory_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./albumcategory-routing.module */
    "./src/app/layouts/admin-layout/albumcategory/albumcategory-routing.module.ts");
    /* harmony import */


    var _albumcategory_albumcategory_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./albumcategory/albumcategory-list.component */
    "./src/app/layouts/admin-layout/albumcategory/albumcategory/albumcategory-list.component.ts");

    var AlbumcategoryModule = function AlbumcategoryModule() {
      _classCallCheck(this, AlbumcategoryModule);
    };

    AlbumcategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_albumcategory_albumcategory_list_component__WEBPACK_IMPORTED_MODULE_7__["AlbumcategoryListComponent"], _albumcategory_component__WEBPACK_IMPORTED_MODULE_5__["AlbumcategoryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _albumcategory_routing_module__WEBPACK_IMPORTED_MODULE_6__["AlbumcategoryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
    })], AlbumcategoryModule);
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/albumcategory/albumcategory/albumcategory-list.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/layouts/admin-layout/albumcategory/albumcategory/albumcategory-list.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsAdminLayoutAlbumcategoryAlbumcategoryAlbumcategoryListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.navbar-absolute {\n  background-color: white;\n}\n.table-bordered {\n  border: 2px solid #1B5B84;\n}\n.fa-arrow-circle-right {\n  color: #1B5B84;\n}\ntd {\n  text-align: center;\n  font-family: Arabic;\n  font-size: 18px;\n}\n.fa-edit {\n  color: #1B5B84;\n}\n.fa-trash {\n  color: #1B5B84;\n  margin-right: 20px;\n}\nth {\n  border: 2px solid #1B5B84;\n  border-bottom: 2px solid #1B5B84;\n  text-align: center;\n  color: #1B5B84;\n  font-family: Arabic;\n}\ntd {\n  border: 2px solid #1B5B84;\n  border-bottom: 2px solid #1B5B84;\n}\n.titlePage {\n  color: #1B5B84 !important;\n  font-family: Arabic;\n}\n.fa-plus-circle:before {\n  content: \"\";\n  margin-left: 5px;\n}\n.input100 {\n  font-family: Arabic;\n  font-size: 15px;\n  line-height: 1.2;\n  color: white;\n  height: 40px;\n  display: block;\n  background: white;\n  border-radius: 25px;\n  border-top-color: #1B5B84 !important;\n  border: 2px solid #1B5B84;\n  padding: 0 30px 0 53px;\n}\n.symbol-input100 {\n  font-size: 15px;\n  color: #1B5B84 !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  border-radius: 25px;\n  direction: ltr;\n  width: 21%;\n  bottom: 0;\n  height: 100%;\n  pointer-events: none;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n:-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #1B5B84 !important;\n}\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #1B5B84 !important;\n}\n.Title {\n  margin-top: 4px;\n  padding-left: 20%;\n}\nli {\n  color: #1B5B84;\n  cursor: pointer;\n}\nh5 {\n  color: #1B5B84;\n  font-size: 20px;\n  font-family: Arabic;\n}\n.activeNumber {\n  color: #0a3f42;\n}\n.modal-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n  align-items: flex-start;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n  background-color: #1B5B84;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: white;\n}\n.modal-body {\n  position: relative;\n  -webkit-box-flex: 1;\n  flex: 1 1 auto;\n  padding: 1rem;\n  background-color: #e4dfdf7a;\n}\n.modal-content {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);\n  border: 1px solid;\n  padding: 10px;\n  box-shadow: 5px 10px #1B5B84;\n}\n.titleheader {\n  color: white !important;\n  font-family: Arabic;\n}\n.fa-close {\n  margin-right: -20px;\n  color: white !important;\n}\n.btn-primary {\n  background-color: #1B5B84;\n}\n.form-control {\n  border: 1px solid #1B5B84;\n  color: #053777;\n  font-weight: 200;\n  border-radius: 7px;\n  font-size: 20px;\n  font-family: Arabic;\n  margin-right: 5px;\n  padding-right: 10px;\n}\nlabel {\n  font-weight: 500;\n  display: block;\n  margin: 4px 0;\n  text-transform: uppercase;\n  font-size: 15px;\n  overflow: hidden;\n  direction: rtl;\n  float: right;\n  color: #1B5B84 !important;\n  font-family: Arabic;\n}\nlabel span {\n  float: right;\n  text-transform: none;\n  font-weight: 200;\n  line-height: 1em;\n  font-style: italic;\n  opacity: 0.8;\n}\n.btn {\n  font-family: Arabic;\n}\ntd {\n  text-align: center;\n  font-size: 18px;\n  font-family: Arabic;\n}\n.fa-edit {\n  color: #1B5B84;\n}\n.fa-trash {\n  color: #1B5B84;\n  margin-right: 20px;\n}\n.navbar-absolute {\n  background-color: white;\n}\n.table-bordered {\n  border: 2px solid #1B5B84;\n}\n.fa-arrow-circle-right {\n  color: #1B5B84;\n}\nth {\n  border: 2px solid #1B5B84;\n  border-bottom: 2px solid #1B5B84;\n  text-align: center;\n  color: #1B5B84;\n  font-family: Arabic;\n}\ntd {\n  border: 2px solid #1B5B84;\n  border-bottom: 2px solid #1B5B84;\n}\n.titlePage {\n  color: #1B5B84 !important;\n  font-family: Arabic !important;\n}\n.fa-plus-circle:before {\n  content: \"\";\n  margin-left: 5px;\n}\na {\n  font-family: Arabic !important;\n}\n.input100 {\n  font-family: Arabic;\n  font-size: 15px;\n  line-height: 1.2;\n  color: white;\n  height: 40px;\n  display: block;\n  background: white;\n  border-radius: 25px;\n  border-top-color: #1B5B84 !important;\n  border: 2px solid #1B5B84;\n  padding: 0 30px 0 53px;\n}\n.symbol-input100 {\n  font-size: 15px;\n  color: #1B5B84 !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  border-radius: 25px;\n  direction: ltr;\n  width: 22%;\n  bottom: 0;\n  height: 100%;\n  pointer-events: none;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n:-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #1B5B84 !important;\n  opacity: 1;\n  /* Firefox */\n}\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #1B5B84 !important;\n}\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #1B5B84 !important;\n}\n.Title {\n  margin-top: 4px;\n  padding-left: 20%;\n}\n.modal-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n  align-items: flex-start;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n  background-color: #1B5B84;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: white;\n}\n.modal-body {\n  position: relative;\n  -webkit-box-flex: 1;\n  flex: 1 1 auto;\n  padding: 1rem;\n  background-color: #e4dfdf7a;\n}\n.modal-content {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);\n  border: 1px solid;\n  padding: 10px;\n  box-shadow: 5px 10px #1B5B84;\n}\n.titleheader {\n  color: white !important;\n  font-family: Arabic;\n}\n.fa-close {\n  margin-right: -20px;\n  color: white !important;\n}\n.form-control {\n  border: 1px solid #1B5B84;\n  color: #053777;\n  font-weight: 200;\n  border-radius: 7px;\n  font-size: 20px;\n  font-family: Arabic;\n  margin-right: 5px;\n}\nlabel {\n  font-weight: 500;\n  display: block;\n  margin: 4px 0;\n  text-transform: uppercase;\n  font-size: 15px;\n  overflow: hidden;\n  direction: rtl;\n  float: right;\n  color: #1B5B84 !important;\n  font-family: Arabic;\n}\nlabel span {\n  float: right;\n  text-transform: none;\n  font-weight: 200;\n  line-height: 1em;\n  font-style: italic;\n  opacity: 0.8;\n}\n.btn-primary {\n  background-color: #1B5B84;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9hZG1pbi1sYXlvdXQvYWxidW1jYXRlZ29yeS9hbGJ1bWNhdGVnb3J5L2FsYnVtY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9pYnJhaGltZXp6YXQvRGVza3RvcC9hZG1pbi9zcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2xhbmd1YWdlL2xhbmd1YWdlL2xhbmd1YWdlLWxpc3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaWJyYWhpbWV6emF0L0Rlc2t0b3AvYWRtaW4vc3JjL2FwcC9sYXlvdXRzL2FkbWluLWxheW91dC9hbGJ1bWNhdGVnb3J5L2FsYnVtY2F0ZWdvcnkvYWxidW1jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLHVCQUFBO0FERUo7QUNDQTtFQUNJLHlCQUFBO0FERUo7QUNDQTtFQUNJLGNBQUE7QURFSjtBQ0NBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURFSjtBQ0NBO0VBQ0ksY0FBQTtBREVKO0FDQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QURFSjtBQ0NBO0VBQ0kseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FERUo7QUNDQTtFQUNJLHlCQUFBO0VBQ0EsZ0NBQUE7QURFSjtBQ0VBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBRENKO0FDRUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QURDSjtBQ0VBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FEQ0o7QUNFQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBSUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJB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QTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUY0TUo7QUUzTUk7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FGNk1SO0FFek1BO0VBQ0kseUJBQUE7QUY0TUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2FkbWluLWxheW91dC9hbGJ1bWNhdGVnb3J5L2FsYnVtY2F0ZWdvcnkvYWxidW1jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm5hdmJhci1hYnNvbHV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGFibGUtYm9yZGVyZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMUI1Qjg0O1xufVxuXG4uZmEtYXJyb3ctY2lyY2xlLXJpZ2h0IHtcbiAgY29sb3I6ICMxQjVCODQ7XG59XG5cbnRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJhYmljO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5mYS1lZGl0IHtcbiAgY29sb3I6ICMxQjVCODQ7XG59XG5cbi5mYS10cmFzaCB7XG4gIGNvbG9yOiAjMUI1Qjg0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbnRoIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzFCNUI4NDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxQjVCODQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMxQjVCODQ7XG4gIGZvbnQtZmFtaWx5OiBBcmFiaWM7XG59XG5cbnRkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzFCNUI4NDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxQjVCODQ7XG59XG5cbi50aXRsZVBhZ2Uge1xuICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQXJhYmljO1xufVxuXG4uZmEtcGx1cy1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgZVcIjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmlucHV0MTAwIHtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItdG9wLWNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxQjVCODQ7XG4gIHBhZGRpbmc6IDAgMzBweCAwIDUzcHg7XG59XG5cbi5zeW1ib2wtaW5wdXQxMDAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBkaXJlY3Rpb246IGx0cjtcbiAgd2lkdGg6IDIxJTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTtcbiAgLyogRmlyZWZveCAqL1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xufVxuXG4uVGl0bGUge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIHBhZGRpbmctbGVmdDogMjAlO1xufVxuXG5saSB7XG4gIGNvbG9yOiAjMUI1Qjg0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmg1IHtcbiAgY29sb3I6ICMxQjVCODQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYztcbn1cblxuLmFjdGl2ZU51bWJlciB7XG4gIGNvbG9yOiAjMGEzZjQyO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI1Qjg0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGRmZGY3YTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDVweCAxMHB4ICMxQjVCODQ7XG59XG5cbi50aXRsZWhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQXJhYmljO1xufVxuXG4uZmEtY2xvc2Uge1xuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFCNUI4NDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxQjVCODQ7XG4gIGNvbG9yOiAjMDUzNzc3O1xuICBmb250LXdlaWdodDogMjAwO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNHB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYztcbn1cbmxhYmVsIHNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmJ0biB7XG4gIGZvbnQtZmFtaWx5OiBBcmFiaWM7XG59XG5cbnRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmFiaWM7XG59XG5cbi5mYS1lZGl0IHtcbiAgY29sb3I6ICMxQjVCODQ7XG59XG5cbi5mYS10cmFzaCB7XG4gIGNvbG9yOiAjMUI1Qjg0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5uYXZiYXItYWJzb2x1dGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzFCNUI4NDtcbn1cblxuLmZhLWFycm93LWNpcmNsZS1yaWdodCB7XG4gIGNvbG9yOiAjMUI1Qjg0O1xufVxuXG50aCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxQjVCODQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMUI1Qjg0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMUI1Qjg0O1xuICBmb250LWZhbWlseTogQXJhYmljO1xufVxuXG50ZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxQjVCODQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMUI1Qjg0O1xufVxuXG4udGl0bGVQYWdlIHtcbiAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYyAhaW1wb3J0YW50O1xufVxuXG4uZmEtcGx1cy1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgZVcIjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuYSB7XG4gIGZvbnQtZmFtaWx5OiBBcmFiaWMgIWltcG9ydGFudDtcbn1cblxuLmlucHV0MTAwIHtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItdG9wLWNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxQjVCODQ7XG4gIHBhZGRpbmc6IDAgMzBweCAwIDUzcHg7XG59XG5cbi5zeW1ib2wtaW5wdXQxMDAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBkaXJlY3Rpb246IGx0cjtcbiAgd2lkdGg6IDIyJTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTtcbiAgLyogRmlyZWZveCAqL1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xufVxuXG4uVGl0bGUge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIHBhZGRpbmctbGVmdDogMjAlO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI1Qjg0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGRmZGY3YTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDVweCAxMHB4ICMxQjVCODQ7XG59XG5cbi50aXRsZWhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQXJhYmljO1xufVxuXG4uZmEtY2xvc2Uge1xuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxQjVCODQ7XG4gIGNvbG9yOiAjMDUzNzc3O1xuICBmb250LXdlaWdodDogMjAwO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNHB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYztcbn1cbmxhYmVsIHNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFCNUI4NDtcbn0iLCIubmF2YmFyLWFic29sdXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGFibGUtYm9yZGVyZWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFCNUI4NDtcclxufVxyXG5cclxuLmZhLWFycm93LWNpcmNsZS1yaWdodCB7XHJcbiAgICBjb2xvcjogIzFCNUI4NFxyXG59XHJcblxyXG50ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogQXJhYmljO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZmEtZWRpdCB7XHJcbiAgICBjb2xvcjogIzFCNUI4NFxyXG59XHJcblxyXG4uZmEtdHJhc2gge1xyXG4gICAgY29sb3I6ICMxQjVCODQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbnRoIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxQjVCODQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFCNUI4NDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMUI1Qjg0O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYztcclxufVxyXG5cclxudGQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFCNUI4NDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMUI1Qjg0O1xyXG4gICAgLy8gYm9yZGVyLXRvcDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udGl0bGVQYWdlIHtcclxuICAgIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQXJhYmljO1xyXG59XHJcblxyXG4uZmEtcGx1cy1jaXJjbGU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDU1XCI7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uaW5wdXQxMDAge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxQjVCODQ7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHggMCA1M3B4O1xyXG59XHJcblxyXG4uc3ltYm9sLWlucHV0MTAwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgIHdpZHRoOiAyMSU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG5cclxuIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICAgIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLlRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjAlO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBjb2xvcjogIzFCNUI4NDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaDUge1xyXG4gICAgY29sb3I6ICMxQjVCODQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJhYmljO1xyXG59XHJcblxyXG4uYWN0aXZlTnVtYmVyIHtcclxuICAgIGNvbG9yOiAjMGEzZjQyO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjVCODQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGRmZGY3YTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAjMUI1Qjg0O1xyXG59XHJcblxyXG4udGl0bGVoZWFkZXIge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQXJhYmljO1xyXG59XHJcblxyXG4uZmEtY2xvc2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFCNUI4NDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMUI1Qjg0O1xyXG4gICAgY29sb3I6ICMwNTM3Nzc7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYztcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA0cHggMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYztcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LWZhbWlseTogQXJhYmljO1xyXG59IiwiQGltcG9ydFwiLi4vLi4vLi4vYWRtaW4tbGF5b3V0L2xhbmd1YWdlL2xhbmd1YWdlL2xhbmd1YWdlLWxpc3QuY29tcG9uZW50LnNjc3NcIjtcclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYztcclxufVxyXG5cclxuLmZhLWVkaXQge1xyXG4gICAgY29sb3I6ICMxQjVCODRcclxufVxyXG5cclxuLmZhLXRyYXNoIHtcclxuICAgIGNvbG9yOiAjMUI1Qjg0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWFic29sdXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGFibGUtYm9yZGVyZWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFCNUI4NDtcclxufVxyXG5cclxuLmZhLWFycm93LWNpcmNsZS1yaWdodCB7XHJcbiAgICBjb2xvcjogIzFCNUI4NFxyXG59XHJcblxyXG50aCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMUI1Qjg0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxQjVCODQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzFCNUI4NDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmFiaWM7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxQjVCODQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFCNUI4NDtcclxuICAgIC8vIGJvcmRlci10b3A6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRpdGxlUGFnZSB7XHJcbiAgICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmEtcGx1cy1jaXJjbGU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDU1XCI7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmFiaWMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0MTAwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmFiaWM7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMUI1Qjg0O1xyXG4gICAgcGFkZGluZzogMCAzMHB4IDAgNTNweDtcclxufVxyXG5cclxuLnN5bWJvbC1pbnB1dDEwMCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICB3aWR0aDogMjIlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbn1cclxuXHJcbiA6OnBsYWNlaG9sZGVyIHtcclxuICAgIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvKiBGaXJlZm94ICovXHJcbn1cclxuXHJcbiA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICAgIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5UaXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM3JlbTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI1Qjg0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRkZmRmN2E7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggIzFCNUI4NDtcclxufVxyXG5cclxuLnRpdGxlaGVhZGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYztcclxufVxyXG5cclxuLmZhLWNsb3NlIHtcclxuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMUI1Qjg0O1xyXG4gICAgY29sb3I6ICMwNTM3Nzc7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYztcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQXJhYmljO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFCNUI4NDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/albumcategory/albumcategory/albumcategory-list.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/layouts/admin-layout/albumcategory/albumcategory/albumcategory-list.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: AlbumcategoryListComponent */

  /***/
  function srcAppLayoutsAdminLayoutAlbumcategoryAlbumcategoryAlbumcategoryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumcategoryListComponent", function () {
      return AlbumcategoryListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_models_categories_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/models/categories.model */
    "./src/app/shared/models/categories.model.ts");
    /* harmony import */


    var _shared_services_api_album_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/api/album-categories.service */
    "./src/app/shared/services/api/album-categories.service.ts");
    /* harmony import */


    var _shared_services_swal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/swal.service */
    "./src/app/shared/services/swal.service.ts");

    var AlbumcategoryListComponent =
    /*#__PURE__*/
    function () {
      function AlbumcategoryListComponent(albumcategoryServices, swalService) {
        _classCallCheck(this, AlbumcategoryListComponent);

        this.albumcategoryServices = albumcategoryServices;
        this.swalService = swalService; // category: Categories;

        this.categoryList = [];
        this.category = new _shared_models_categories_model__WEBPACK_IMPORTED_MODULE_2__["Categories"]();
        this.data = [];
        this.pagenumber = 0;
        this.pageTitle = 1;
      }

      _createClass(AlbumcategoryListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // ini obj
          this.category = new _shared_models_categories_model__WEBPACK_IMPORTED_MODULE_2__["Categories"]();
          this.getAllData();
        } // get all data of category

      }, {
        key: "getAllData",
        value: function getAllData() {
          var _this = this;

          this.albumcategoryServices.getAll('', '1', '100').subscribe(function (res) {
            _this.data = [];
            var a = res.result.length / 100 + 1;

            for (var index = 1; index <= a; index++) {
              _this.data.push(index);
            }

            _this.categoryList = res.result;
          });
        } //fill

      }, {
        key: "fill",
        value: function fill(prop) {
          this.category.id = prop.id;
          this.category.name = prop.name;
        }
      }, {
        key: "reset",
        value: function reset() {
          this.category.id = 0;
          this.category.name = '';
        }
      }, {
        key: "open",
        value: function open() {
          this.reset();
        }
      }, {
        key: "save",
        value: function save() {
          var _this2 = this;

          this.albumcategoryServices.create(this.category).subscribe(function (res) {
            _this2.swalService.Notifier(' تم الحفظ بنجاح .. شكرا لك ');

            _this2.reset();

            _this2.getAllData();
          }, function (err) {
            var errorMessage = err.data || ' حدث خطأ اثناء الحفظ .. من فضلك حاول مرة آخري    ';

            _this2.swalService.NotifierError(errorMessage);
          });
        }
      }, {
        key: "delete",
        value: function _delete(index) {
          var _this3 = this;

          this.category = Object.assign({}, this.categoryList[index]);
          this.index = index;
          this.swalService.showRemoveConfirmation(index).then(function (result) {
            if (result.value) {
              _this3.albumcategoryServices["delete"](_this3.category.id).subscribe(function (res) {
                _this3.swalService.Notifier('تم مسح البيانات بنجاح ');

                _this3.reset();

                _this3.getAllData();
              }, function (err) {
                var errorMessage = err.message || ' خطآ في مسح البيانات  ';

                _this3.swalService.NotifierError(errorMessage);
              });
            }
          });
        }
      }, {
        key: "saveupdate",
        value: function saveupdate() {
          this.update();
        }
      }, {
        key: "update",
        value: function update() {
          var _this4 = this;

          this.albumcategoryServices.update(this.category).subscribe(function (res) {
            _this4.swalService.Notifier('تم حفظ التعديلات بنجاح ');

            _this4.reset();

            _this4.getAllData();
          }, function (err) {
            var errorMessage = err.data || ' حدث خطأ اثناء الحفظ .. من فضلك حاول مرة آخري    ';

            _this4.swalService.NotifierError(errorMessage);
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.reset();
        }
      }]);

      return AlbumcategoryListComponent;
    }();

    AlbumcategoryListComponent.ctorParameters = function () {
      return [{
        type: _shared_services_api_album_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesCategoriesService"]
      }, {
        type: _shared_services_swal_service__WEBPACK_IMPORTED_MODULE_4__["SwalService"]
      }];
    };

    AlbumcategoryListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-albumcategory-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./albumcategory-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/albumcategory/albumcategory/albumcategory-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./albumcategory-list.component.scss */
      "./src/app/layouts/admin-layout/albumcategory/albumcategory/albumcategory-list.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_api_album_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesCategoriesService"], _shared_services_swal_service__WEBPACK_IMPORTED_MODULE_4__["SwalService"]])], AlbumcategoryListComponent);
    /***/
  }
}]);
//# sourceMappingURL=admin-layout-albumcategory-albumcategory-module-es5.js.map