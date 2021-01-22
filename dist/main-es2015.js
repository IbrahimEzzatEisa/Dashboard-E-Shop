(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<router-outlet></router-outlet>\r\n<ngx-spinner [fullScreen]=\"true\" type=\"ball-clip-rotate-multiple\" size=\"medium\" >\r\n    <p class=\"loading\">  Watting </p>\r\n    <div class=\"loader\">\r\n   \r\n      </div>\r\n</ngx-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-wrapper\">\r\n            <a class=\"navbar-brand\">\r\n                <i class=\"material-icons\">person</i>\r\n\r\n            </a>\r\n\r\n            <a class=\"navbar-brand\">\r\n                <p style=\"font-family: Arabic;\"> {{username}}</p>\r\n\r\n            </a>\r\n        </div>\r\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n            <!-- <form class=\"navbar-form\">\r\n                <div class=\"input-group no-border\">\r\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                        <i class=\"material-icons\">search</i>\r\n                        <div class=\"ripple-container\"></div>\r\n                    </button>\r\n                </div>\r\n            </form> -->\r\n         \r\n        </div>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\r\n    <a class=\"simple-text\">\r\n        <img src=\"../../../assets/img/CAR (2).png\" style=\" width: 100px\">\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n    <div *ngIf=\"isMobileMenu()\">\r\n\r\n    </div>\r\n\r\n    <ul class=\"nav\">\r\n\r\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\r\n\r\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\r\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                <p>{{menuItem.title}}</p>\r\n            </a>\r\n        </li>\r\n\r\n\r\n        <li>\r\n            <a style=\"font-family: Arabic;\" class=\"nav-link text-center\" (click)=\"logout()\">\r\n                <i class=\"fas fa-sign-out-alt fa-2x users\"> </i> تسجيل الخروج\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"sidebar \" style=\"    background-color: #49bcc4 !important;\" >\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"    background-color: #49bcc4 !important;\r\n        \" ></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar></app-navbar>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"isMaps('maps')\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n   \r\n</div>\r\n<!-- Buy-Modal-angular -->\r\n<div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n<div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n            <h4 class=\"margin-top\">\r\n                Free Version\r\n            </h4>\r\n            <div class=\"separator\"></div>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"wrapper-card\">\r\n                    <div class=\"image-container\">\r\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\r\n                    </div>\r\n                    Html5\r\n                    <div class=\"separator\"></div>\r\n                    <div class=\"product-type\">\r\n                        FREE\r\n                    </div>\r\n                </div>\r\n            </a>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"wrapper-card\">\r\n                    <div class=\"image-container image-angular-cli\">\r\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\r\n                    </div>\r\n                    Angular\r\n                    <div class=\"separator\"></div>\r\n                    <div class=\"product-type\">\r\n                        FREE\r\n                    </div>\r\n                </div>\r\n            </a>\r\n            <h4>\r\n                PRO Version\r\n            </h4>\r\n            <div class=\"separator\"></div>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"image-container\">\r\n                    <img src=\"./assets/img/html.png\" alt=\"unloaded\">\r\n                </div>\r\n                Html5\r\n                <div class=\"separator\"></div>\r\n                <div class=\"price\">\r\n                    from\r\n                    <span>\r\n                        49\r\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </div>\r\n            </a>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"image-container image-angular-cli\">\r\n                    <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\r\n                </div>\r\n                Angular\r\n                <div class=\"separator\"></div>\r\n                <div class=\"price\">\r\n                    from\r\n                    <span>\r\n                        59\r\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"limiter\">\r\n    <div class=\"container-login100\">\r\n        <div class=\"wrap-login100 p-t-190 p-b-30\">\r\n            <form class=\"login100-form validate-form\">\r\n\r\n                <span class=\"login100-form-title p-t-20 p-b-45\">\r\n\t\t\t\t\t\tتسجيل الدخول \r\n\t\t\t\t\t</span>\r\n\r\n                <div class=\"wrap-input100 validate-input m-b-10\" data-validate=\"Username is required\">\r\n                    <input class=\"input100\" type=\"text\" name=\"username\" placeholder=\"المستخدم\" name=\"username\" [(ngModel)]=\"user.email\" #username=\"ngModel\">\r\n                    <span class=\"focus-input100\"></span>\r\n                    <span class=\"symbol-input100\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\r\n\t\t\t\t\t\t</span>\r\n                </div>\r\n\r\n                <div class=\"wrap-input100 validate-input m-b-10\" data-validate=\"Password is required\">\r\n                    <input class=\"input100\" type=\"password\" name=\"pass\" placeholder=\"كلمة المرور\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\">\r\n                    <span class=\"focus-input100\"></span>\r\n                    <span class=\"symbol-input100\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-lock\"></i>\r\n\t\t\t\t\t\t</span>\r\n                </div>\r\n\r\n                <div class=\"container-login100-form-btn p-t-10\">\r\n                    <button class=\"login100-form-btn\" (click)=\"login()\">\r\n\t\t\t\t\t\t\tتسجيل دخول\r\n\t\t\t\t\t\t</button>\r\n                </div>\r\n\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\n@font-face {\n  font-family: Arabic;\n  src: url('ArbFONTS-GE_SS_Two_Bold.otf');\n}\n@font-face {\n  font-family: NoirStd;\n  src: url('NoirStd-Regular.ttf');\n}\n.loading {\n  font-family: Arabic;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYnJhaGltZXp6YXQvRGVza3RvcC9hZG1pbi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBRUE7RUFDSSxtQkFBQTtFQUNBLHVDQUFBO0FDQUo7QURFRTtFQUNFLG9CQUFBO0VBQ0EsK0JBQUE7QUNBSjtBREVFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmFiaWM7XHJcbiAgICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9BcmJGT05UUy1HRV9TU19Ud29fQm9sZC5vdGZcIik7XHJcbiAgfVxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IE5vaXJTdGQ7XHJcbiAgICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Ob2lyU3RkLVJlZ3VsYXIudHRmXCIpO1xyXG4gIH1cclxuICAubG9hZGluZ3tcclxuICAgIGZvbnQtZmFtaWx5OiBBcmFiaWM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gXHJcbiBcclxuICBcclxuICIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogQXJhYmljO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9BcmJGT05UUy1HRV9TU19Ud29fQm9sZC5vdGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IE5vaXJTdGQ7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL05vaXJTdGQtUmVndWxhci50dGZcIik7XG59XG4ubG9hZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBBcmFiaWM7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_services_api_interceptors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/api/interceptors */ "./src/app/shared/services/api/interceptors/index.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.module */ "./src/app/layouts/admin-layout/admin-layout.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _layouts_admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_12__["AdminLayoutModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _shared_services_api_interceptors__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _shared_services_api_interceptors__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"], multi: true }
        ], bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_services_Guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/Guards */ "./src/app/shared/services/Guards/index.ts");








const routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        children: [
            {
                path: '',
                redirectTo: 'pages',
                pathMatch: 'full'
            },
            {
                path: 'pages',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./layouts/admin-layout/admin-layout.module */ "./src/app/layouts/admin-layout/admin-layout.module.ts")).then(m => m.AdminLayoutModule),
                canActivate: [_shared_services_Guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            },
            {
                path: '**',
                redirectTo: 'pages'
            }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                useHash: false
            })
        ],
        exports: [],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");






let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        ],
        declarations: [
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
        ],
        exports: [
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.navbar-transparent{\r\nbackground-color: #1B5B84 !important;\r\n}\r\ni{\r\n    color: white !important;\r\n\r\n}\r\np{\r\n    font-family: Arabic !important;\r\n    color: white !important;\r\n    font-size: 14px;\r\n    \r\n}\r\n.material-icons{\r\n    color: white !important;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7SUFDSSx1QkFBdUI7O0FBRTNCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSx1QkFBdUI7O0FBRTNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5hdmJhci10cmFuc3BhcmVudHtcclxuYmFja2dyb3VuZC1jb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xyXG59XHJcbml7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuXHJcbn1cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmFiaWMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgXHJcbn1cclxuLm1hdGVyaWFsLWljb25ze1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let NavbarComponent = class NavbarComponent {
    constructor(location, element, router) {
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        this.username = localStorage.getItem('user');
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(listTitle => listTitle);
        const navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                this.mobile_menu_visible = 0;
            }
        });
    }
    notification() {
        this.router.navigate(['/pages/notification']);
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    ;
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    }
    ;
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    }
    ;
    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".material-icons {\n  color: white !important;\n  font-size: 30px !important;\n}\n\np {\n  color: white;\n  font-family: Arabic !important;\n  font-size: 15px;\n}\n\n.nav li.active > a {\n  background-color: white !important;\n  color: #1B5B84 !important;\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4);\n}\n\n.nav li.active > a i {\n  color: #1B5B84 !important;\n}\n\n.nav li.active > a p {\n  color: #1B5B84 !important;\n}\n\n.nav li.active > a .fa-users {\n  color: white !important;\n}\n\n.users {\n  margin-right: 20% !important;\n}\n\n.fa-sign-out-alt {\n  color: white !important;\n  margin-left: 46%;\n}\n\n.fa-bars {\n  margin-right: 15% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYnJhaGltZXp6YXQvRGVza3RvcC9hZG1pbi9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURHQTtFQUNJLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxzRkFBQTtBQ0FKOztBRENJO0VBQ0kseUJBQUE7QUNDUjs7QURFSTtFQUNJLHlCQUFBO0FDQVI7O0FERUk7RUFDSSx1QkFBQTtBQ0FSOztBRElBO0VBQ0ksNEJBQUE7QUNESjs7QURLQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLDRCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcmlhbC1pY29uc3tcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG5cclxufVxyXG5we1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyYWJpYyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ubmF2IGxpLmFjdGl2ZSA+IGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYSgyNDQsIDY3LCA1NCwgMC40KTtcclxuICAgICYgaSB7XHJcbiAgICAgICAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcbiAgICAmIHB7XHJcbiAgICAgICAgY29sb3I6ICMxQjVCODQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICYgLmZhLXVzZXJzIHtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi51c2Vyc3tcclxuICAgIG1hcmdpbi1yaWdodDogMjAlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uZmEtc2lnbi1vdXQtYWx0IHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ2JTtcclxuXHJcbn1cclxuLmZhLWJhcnN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5tYXRlcmlhbC1pY29ucyB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYyAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5uYXYgbGkuYWN0aXZlID4gYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMUI1Qjg0ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDI0NCwgNjcsIDU0LCAwLjQpO1xufVxuLm5hdiBsaS5hY3RpdmUgPiBhIGkge1xuICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xufVxuLm5hdiBsaS5hY3RpdmUgPiBhIHAge1xuICBjb2xvcjogIzFCNUI4NCAhaW1wb3J0YW50O1xufVxuLm5hdiBsaS5hY3RpdmUgPiBhIC5mYS11c2VycyB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4udXNlcnMge1xuICBtYXJnaW4tcmlnaHQ6IDIwJSAhaW1wb3J0YW50O1xufVxuXG4uZmEtc2lnbi1vdXQtYWx0IHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA0NiU7XG59XG5cbi5mYS1iYXJzIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNSUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const ROUTES = [
    { path: 'users', title: 'المستخدمين ', icon: ' supervisor_account', class: ' ' },
    { path: 'language', title: ' المدينة ', icon: ' language', class: '' },
    { path: 'musics', title: ' الطيارين ', icon: ' local_shipping    ', class: '' },
    { path: 'albumcategory', title: 'الاقسام  ', icon: ' emoji_symbols', class: '' },
    { path: 'stars', title: '   المنتجات ', icon: ' redeem   ', class: '' },
    { path: 'home', title: '   المحلات ', icon: ' redeem   ', class: '' },
    { path: 'pharma', title: '   الصيدلية ', icon: ' redeem   ', class: '' },
    { path: 'album', title: 'من نحن ', icon: ' emoji_symbols', class: '' },
    { path: 'problem', title: 'الشكاوي  ', icon: ' library_books', class: '' },
    { path: 'settings', title: 'الطلبات  ', icon: ' settings', class: '' },
];
let SidebarComponent = class SidebarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }
    ;
};
SidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);







let AdminLayoutComponent = class AdminLayoutComponent {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    ngOnInit() {
        const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        const elemMainPanel = document.querySelector('.main-panel');
        const elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe((ev) => {
            this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                if (event.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]).subscribe((event) => {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            let ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemSidebar);
        }
        const window_width = jquery__WEBPACK_IMPORTED_MODULE_6__(window).width();
        let $sidebar = jquery__WEBPACK_IMPORTED_MODULE_6__('.sidebar');
        let $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_6__('body > .navbar-collapse');
        let $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_6__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_6__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_6__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_6__('.fixed-plugin .badge').click(function () {
            let $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_6__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_6__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_6__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_6__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_6__('.fixed-plugin .img-holder').click(function () {
            let $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_6__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_6__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_6__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_6__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    }
    ngAfterViewInit() {
        this.runOnRouteChange();
    }
    isMaps(path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    }
    runOnRouteChange() {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemMainPanel = document.querySelector('.main-panel');
            const ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemMainPanel);
            ps.update();
        }
    }
    isMac() {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
};
AdminLayoutComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-layout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AdminLayoutComponent);



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var app_components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/components/components.module */ "./src/app/components/components.module.ts");














let AdminLayoutModule = class AdminLayoutModule {
};
AdminLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutRoutesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            app_components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"]
        ],
        declarations: [
            _admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"],
        ]
    })
], AdminLayoutModule);



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutesModule", function() { return AdminLayoutRoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");




const AdminLayoutRoutes = [{
        path: '',
        component: _admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                redirectTo: 'users',
                pathMatch: 'full'
            },
            {
                path: 'users',
                loadChildren: () => Promise.all(/*! import() | admin-layout-user-users-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-layout-user-users-module")]).then(__webpack_require__.bind(null, /*! ../admin-layout/user/users.module */ "./src/app/layouts/admin-layout/user/users.module.ts")).then(m => m.UsersModule),
            },
            {
                path: 'stars',
                loadChildren: () => Promise.all(/*! import() | admin-layout-stars-stars-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-layout-stars-stars-module")]).then(__webpack_require__.bind(null, /*! ../admin-layout/stars/stars.module */ "./src/app/layouts/admin-layout/stars/stars.module.ts")).then(m => m.StarsModule),
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-layout-settings-settings-module */ "admin-layout-settings-settings-module").then(__webpack_require__.bind(null, /*! ../admin-layout/settings/settings.module */ "./src/app/layouts/admin-layout/settings/settings.module.ts")).then(m => m.SettingsModule),
            },
            {
                path: 'notification',
                loadChildren: () => Promise.all(/*! import() | admin-layout-notifications-notification-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-layout-notifications-notification-module")]).then(__webpack_require__.bind(null, /*! ../admin-layout/notifications/notification.module */ "./src/app/layouts/admin-layout/notifications/notification.module.ts")).then(m => m.NotificationModule),
            },
            {
                path: 'musics',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-layout-musics-musics-module */ "admin-layout-musics-musics-module").then(__webpack_require__.bind(null, /*! ../admin-layout/musics/musics.module */ "./src/app/layouts/admin-layout/musics/musics.module.ts")).then(m => m.MusicsModule),
            },
            {
                path: 'language',
                loadChildren: () => Promise.all(/*! import() | admin-layout-language-language-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-layout-language-language-module")]).then(__webpack_require__.bind(null, /*! ../admin-layout/language/language.module */ "./src/app/layouts/admin-layout/language/language.module.ts")).then(m => m.LanguageModule),
            },
            {
                path: 'album',
                loadChildren: () => Promise.all(/*! import() | admin-layout-Album-album-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-layout-Album-album-module")]).then(__webpack_require__.bind(null, /*! ../admin-layout/Album/album.module */ "./src/app/layouts/admin-layout/Album/album.module.ts")).then(m => m.AlbumModule),
            },
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() | admin-layout-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-layout-home-home-module")]).then(__webpack_require__.bind(null, /*! ../admin-layout/home/home.module */ "./src/app/layouts/admin-layout/home/home.module.ts")).then(m => m.HomeModule),
            },
            {
                path: 'albumcategory',
                loadChildren: () => Promise.all(/*! import() | admin-layout-albumcategory-albumcategory-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-layout-albumcategory-albumcategory-module")]).then(__webpack_require__.bind(null, /*! ../admin-layout/albumcategory/albumcategory.module */ "./src/app/layouts/admin-layout/albumcategory/albumcategory.module.ts")).then(m => m.AlbumcategoryModule),
            },
            {
                path: 'problem',
                loadChildren: () => Promise.all(/*! import() | admin-layout-problem-problem-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-layout-problem-problem-module")]).then(__webpack_require__.bind(null, /*! ../admin-layout/problem/problem.module */ "./src/app/layouts/admin-layout/problem/problem.module.ts")).then(m => m.ProblemModule),
            },
            {
                path: 'pharma',
                loadChildren: () => Promise.all(/*! import() | admin-layout-pharma-pharma-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-layout-pharma-pharma-module")]).then(__webpack_require__.bind(null, /*! ../admin-layout/pharma/pharma.module */ "./src/app/layouts/admin-layout/pharma/pharma.module.ts")).then(m => m.PharmaModule),
            },
        ]
    }];
let AdminLayoutRoutesModule = class AdminLayoutRoutesModule {
};
AdminLayoutRoutesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(AdminLayoutRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AdminLayoutRoutesModule);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: white !important;\n  opacity: 1;\n  /* Firefox */\n}\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: white !important;\n  opacity: 1;\n  /* Firefox */\n}\n:-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: white !important;\n  opacity: 1;\n  /* Firefox */\n}\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: white !important;\n  opacity: 1;\n  /* Firefox */\n}\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: white !important;\n  opacity: 1;\n  /* Firefox */\n}\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: white !important;\n}\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: white !important;\n}\n/*---------------------------------------------*/\na {\n  font-family: Arabic !important;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n  transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n}\na:focus {\n  outline: none !important;\n}\na:hover {\n  text-decoration: none;\n  color: #fff;\n}\n/*---------------------------------------------*/\nh1, h2, h3, h4, h5, h6 {\n  margin: 0px;\n}\np {\n  font-family: Arabic;\n  font-size: 14px;\n  line-height: 1.7;\n  color: white;\n  margin: 0px;\n}\nul, li {\n  margin: 0px;\n  list-style-type: none;\n}\n/*---------------------------------------------*/\ninput {\n  outline: none;\n  border: none;\n}\ntextarea {\n  outline: none;\n  border: none;\n}\ntextarea:focus, input:focus {\n  border-color: transparent !important;\n}\n/*---------------------------------------------*/\nbutton {\n  outline: none !important;\n  border: none;\n  background: transparent;\n}\nbutton:hover {\n  cursor: pointer;\n}\niframe {\n  border: none !important;\n}\n/*//////////////////////////////////////////////////////////////////\n[ Utility ]*/\n.txt1 {\n  font-family: Arabic;\n  font-size: 16px;\n  color: #cccccc;\n  line-height: 1.4;\n}\n.bo1 {\n  border-bottom: 1px solid #999999;\n}\n.hov1:hover {\n  border-color: #d33f8d;\n}\n/*//////////////////////////////////////////////////////////////////\n[ login ]*/\n.limiter {\n  width: 100%;\n  margin: 0 auto;\n}\n.container-login100 {\n  direction: rtl;\n  width: 100%;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 15px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  z-index: 1;\n}\n.container-login100::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-image: url('b.jpg');\n  background-size: cover;\n  opacity: 0.9;\n}\n.wrap-login100 {\n  width: 390px;\n  margin-right: 50%;\n  background: transparent;\n}\n/*------------------------------------------------------------------\n[  ]*/\n.login100-form {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: wrap;\n}\n.login100-form-title {\n  font-family: Arabic;\n  font-size: 24px;\n  color: #fff;\n  line-height: 1.2;\n  text-align: center;\n  width: 100%;\n  display: block;\n}\n/*---------------------------------------------*/\n.login100-form-avatar {\n  width: 350px;\n  height: 100px;\n  margin: 0 auto;\n  margin-top: 7%;\n}\n.login100-form-avatar img {\n  width: 100%;\n  margin-top: -45%;\n}\n/*---------------------------------------------*/\n.wrap-input100 {\n  position: relative;\n  width: 100%;\n  z-index: 1;\n}\n.input100 {\n  font-family: Arabic;\n  font-size: 15px;\n  line-height: 1.2;\n  color: white;\n  height: 40px;\n  margin-top: 20px;\n  display: block;\n  width: 100%;\n  background: #1B5B84;\n  border-radius: 13px;\n  padding: 0 30px 0 53px;\n}\n/*------------------------------------------------------------------\n[ Focus ]*/\n.focus-input100 {\n  display: block;\n  position: absolute;\n  border-radius: 25px;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 0px 0px 0px;\n  color: #1B5B84;\n}\n.input100:focus + .focus-input100 {\n  -webkit-animation: anim-shadow 0.5s ease-in-out forwards;\n  animation: anim-shadow 0.5s ease-in-out forwards;\n}\n@-webkit-keyframes anim-shadow {\n  to {\n    box-shadow: 0px 0px 80px 30px;\n    opacity: 0;\n  }\n}\n@keyframes anim-shadow {\n  to {\n    box-shadow: 0px 0px 80px 30px;\n    opacity: 0;\n  }\n}\n.symbol-input100 {\n  font-size: 15px;\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  border-radius: 25px;\n  bottom: -8px;\n  left: -10px;\n  width: 100%;\n  height: 100%;\n  padding-left: 30px;\n  pointer-events: none;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.input100:focus + .focus-input100 + .symbol-input100 {\n  color: #1c7f82;\n  padding-left: 23px;\n}\n/*------------------------------------------------------------------\n[ Button ]*/\n.container-login100-form-btn {\n  width: 40%;\n  display: -webkit-box;\n  display: flex;\n  margin-top: 20px;\n  margin: auto;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.login100-form-btn {\n  font-family: Arabic;\n  font-size: 15px;\n  line-height: 1.5;\n  color: #e0e0e0;\n  margin-top: 20px;\n  width: 100%;\n  height: 50px;\n  border-radius: 25px;\n  background: #1B5B84;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 25px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n  position: relative;\n  z-index: 1;\n}\n.login100-form-btn::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n  top: 0;\n  left: 0;\n  background: #1B5B84;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n  opacity: 0;\n}\n.login100-form-btn:hover {\n  background: transparent;\n  color: #fff;\n}\n.login100-form-btn:hover:before {\n  opacity: 1;\n}\n/*------------------------------------------------------------------\n[ Button sign in with ]*/\n.btn-face,\n.btn-google {\n  font-family: Arabic;\n  font-size: 16px;\n  line-height: 1.2;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: calc((100% - 10px) / 2);\n  height: 40px;\n  border-radius: 3px;\n  border: 1px solid #e6e6e6;\n  background-color: #fff;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.btn-face {\n  color: #1c7f82;\n}\n.btn-face i {\n  font-size: 20px;\n  margin-right: 10px;\n  padding-bottom: 1px;\n}\n.btn-google {\n  color: #555555;\n}\n.btn-google img {\n  width: 19px;\n  margin-right: 10px;\n  padding-bottom: 1px;\n}\n.btn-face:hover,\n.btn-google:hover {\n  border-color: #d33f8d;\n}\n/*------------------------------------------------------------------\n[ Alert validate ]*/\n.validate-input {\n  position: relative;\n}\n.alert-validate::before {\n  content: attr(data-validate);\n  position: absolute;\n  max-width: 70%;\n  background-color: white;\n  border: 1px solid #c80000;\n  border-radius: 14px;\n  padding: 4px 25px 4px 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 8px;\n  pointer-events: none;\n  font-family: Arabic;\n  color: #c80000;\n  font-size: 13px;\n  line-height: 1.4;\n  text-align: left;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: opacity 0.4s;\n  transition: opacity 0.4s;\n}\n.alert-validate::after {\n  content: \"\";\n  font-family: FontAwesome;\n  display: block;\n  position: absolute;\n  color: #c80000;\n  font-size: 15px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 13px;\n}\n.alert-validate:hover:before {\n  visibility: visible;\n  opacity: 1;\n}\n@media (max-width: 992px) {\n  .alert-validate::before {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n/*//////////////////////////////////////////////////////////////////\n[ responsive ]*/\n@media (max-width: 576px) {\n  .wrap-login100 {\n    padding-top: 80px;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaWJyYWhpbWV6emF0L0Rlc2t0b3AvYWRtaW4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFBZ0IseUNBQUE7RUFDZCx1QkFBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FER2Q7QUNMQTtFQUFnQix5Q0FBQTtFQUNkLHVCQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QURHZDtBQ0xBO0VBQWdCLHlDQUFBO0VBQ2QsdUJBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBREdkO0FDTEE7RUFBZ0IseUNBQUE7RUFDZCx1QkFBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FER2Q7QUNMQTtFQUFnQix5Q0FBQTtFQUNkLHVCQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QURHZDtBQ0FBO0VBQXlCLDRCQUFBO0VBQ3ZCLHVCQUFBO0FESUY7QUNEQTtFQUEwQixtQkFBQTtFQUN4Qix1QkFBQTtBREtGO0FDSEEsZ0RBQUE7QUFDQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBRE1BO0FDSEE7RUFDQSx3QkFBQTtBRE1BO0FDSEE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QURNQTtBQ0hBLGdEQUFBO0FBQ0E7RUFDQSxXQUFBO0FETUE7QUNIQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURNQTtBQ0hBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FETUE7QUNGQSxnREFBQTtBQUNBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURLQTtBQ0ZBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURLQTtBQ0ZBO0VBQ0Esb0NBQUE7QURLQTtBQ0FBLGdEQUFBO0FBQ0E7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBREdBO0FDQUE7RUFDQSxlQUFBO0FER0E7QUNBQTtFQUNBLHVCQUFBO0FER0E7QUNDQTtZQUFBO0FBRUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURFQTtBQ0NBO0VBQ0EsZ0NBQUE7QURFQTtBQ0NBO0VBQ0EscUJBQUE7QURFQTtBQ0VBO1VBQUE7QUFHQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FEQUE7QUNHQTtFQUVBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUlBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FERkE7QUNLQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FERkE7QUNLQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FERkE7QUNPQTtLQUFBO0FBRUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFJQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGVBQUE7QURKQTtBQ1FBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBRExBO0FDUUEsZ0RBQUE7QUFDQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QURMQTtBQ09BO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FESkE7QUNRQSxnREFBQTtBQUNBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBRExBO0FDUUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBRExBO0FDU0E7VUFBQTtBQUVBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBRE5BO0FDVUE7RUFDQSx3REFBQTtFQUNBLGdEQUFBO0FEUEE7QUNVQTtFQUNBO0lBQ0UsNkJBQUE7SUFDQSxVQUFBO0VEUEE7QUFDRjtBQ1VBO0VBQ0E7SUFDRSw2QkFBQTtJQUNBLFVBQUE7RURSQTtBQUNGO0FDV0E7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0VBSUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSw0QkFBQTtFQUdBLG9CQUFBO0FEWkE7QUNlQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBRFpGO0FDZ0JBO1dBQUE7QUFFQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUlBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBRGRBO0FDaUJBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUlBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSw0QkFBQTtFQUdBLG9CQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FEaEJBO0FDbUJBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUVBLDRCQUFBO0VBR0Esb0JBQUE7RUFDQSxVQUFBO0FEakJBO0FDb0JBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FEakJBO0FDb0JBO0VBQ0EsVUFBQTtBRGpCQTtBQ29CQTt3QkFBQTtBQUVBOztFQUVBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsb0JBQUE7RUFJQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFFQSw0QkFBQTtFQUdBLG9CQUFBO0FEbkJBO0FDdUJBO0VBQ0EsY0FBQTtBRHBCQTtBQ3dCQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEckJBO0FDd0JBO0VBQ0EsY0FBQTtBRHJCQTtBQ3dCQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEckJBO0FDeUJBOztFQUVBLHFCQUFBO0FEdEJBO0FDMkJBO21CQUFBO0FBR0E7RUFDQSxrQkFBQTtBRHpCQTtBQzRCQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7RUFJQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUVBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0VBRUEsZ0NBQUE7RUFHQSx3QkFBQTtBRDVCQTtBQytCQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO0VBSUEsMkJBQUE7RUFDQSxXQUFBO0FENUJBO0FDK0JBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FENUJBO0FDK0JBO0VBQ0E7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUQ1QkE7QUFDRjtBQytCQTtlQUFBO0FBR0E7RUFDQTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFRDlCQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46OnBsYWNlaG9sZGVyIHtcbiAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxO1xuICAvKiBGaXJlZm94ICovXG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYSB7XG4gIGZvbnQtZmFtaWx5OiBBcmFiaWMgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbWFyZ2luOiAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBtYXJnaW46IDBweDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBBcmFiaWM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDBweDtcbn1cblxudWwsIGxpIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnRleHRhcmVhIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG50ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pZnJhbWUge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblsgVXRpbGl0eSBdKi9cbi50eHQxIHtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2NjY2NjYztcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLmJvMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5OTk5O1xufVxuXG4uaG92MTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2QzM2Y4ZDtcbn1cblxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblsgbG9naW4gXSovXG4ubGltaXRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbnRhaW5lci1sb2dpbjEwMCB7XG4gIGRpcmVjdGlvbjogcnRsO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jb250YWluZXItbG9naW4xMDA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYi5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLndyYXAtbG9naW4xMDAge1xuICB3aWR0aDogMzkwcHg7XG4gIG1hcmdpbi1yaWdodDogNTAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblsgIF0qL1xuLmxvZ2luMTAwLWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmxvZ2luMTAwLWZvcm0tdGl0bGUge1xuICBmb250LWZhbWlseTogQXJhYmljO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmxvZ2luMTAwLWZvcm0tYXZhdGFyIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNyU7XG59XG5cbi5sb2dpbjEwMC1mb3JtLWF2YXRhciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTQ1JTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLndyYXAtaW5wdXQxMDAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaW5wdXQxMDAge1xuICBmb250LWZhbWlseTogQXJhYmljO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMxQjVCODQ7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIHBhZGRpbmc6IDAgMzBweCAwIDUzcHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5bIEZvY3VzIF0qL1xuLmZvY3VzLWlucHV0MTAwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xuICBjb2xvcjogIzFCNUI4NDtcbn1cblxuLmlucHV0MTAwOmZvY3VzICsgLmZvY3VzLWlucHV0MTAwIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGFuaW0tc2hhZG93IDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbjogYW5pbS1zaGFkb3cgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW0tc2hhZG93IHtcbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggODBweCAzMHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYW5pbS1zaGFkb3cge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4MHB4IDMwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLnN5bWJvbC1pbnB1dDEwMCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm90dG9tOiAtOHB4O1xuICBsZWZ0OiAtMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4uaW5wdXQxMDA6Zm9jdXMgKyAuZm9jdXMtaW5wdXQxMDAgKyAuc3ltYm9sLWlucHV0MTAwIHtcbiAgY29sb3I6ICMxYzdmODI7XG4gIHBhZGRpbmctbGVmdDogMjNweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblsgQnV0dG9uIF0qL1xuLmNvbnRhaW5lci1sb2dpbjEwMC1mb3JtLWJ0biB7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9naW4xMDAtZm9ybS1idG4ge1xuICBmb250LWZhbWlseTogQXJhYmljO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjZTBlMGUwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjMUI1Qjg0O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubG9naW4xMDAtZm9ybS1idG46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICMxQjVCODQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgb3BhY2l0eTogMDtcbn1cblxuLmxvZ2luMTAwLWZvcm0tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubG9naW4xMDAtZm9ybS1idG46aG92ZXI6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblsgQnV0dG9uIHNpZ24gaW4gd2l0aCBdKi9cbi5idG4tZmFjZSxcbi5idG4tZ29vZ2xlIHtcbiAgZm9udC1mYW1pbHk6IEFyYWJpYztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogY2FsYygoMTAwJSAtIDEwcHgpIC8gMik7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbi5idG4tZmFjZSB7XG4gIGNvbG9yOiAjMWM3ZjgyO1xufVxuXG4uYnRuLWZhY2UgaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xufVxuXG4uYnRuLWdvb2dsZSB7XG4gIGNvbG9yOiAjNTU1NTU1O1xufVxuXG4uYnRuLWdvb2dsZSBpbWcge1xuICB3aWR0aDogMTlweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xufVxuXG4uYnRuLWZhY2U6aG92ZXIsXG4uYnRuLWdvb2dsZTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2QzM2Y4ZDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblsgQWxlcnQgdmFsaWRhdGUgXSovXG4udmFsaWRhdGUtaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXZhbGlkYXRlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjODAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDRweCAyNXB4IDRweCAxMHB4O1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcmlnaHQ6IDhweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBBcmFiaWM7XG4gIGNvbG9yOiAjYzgwMDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbn1cblxuLmFsZXJ0LXZhbGlkYXRlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi74GqXCI7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNjODAwMDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHJpZ2h0OiAxM3B4O1xufVxuXG4uYWxlcnQtdmFsaWRhdGU6aG92ZXI6YmVmb3JlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5bIHJlc3BvbnNpdmUgXSovXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLndyYXAtbG9naW4xMDAge1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG59IiwiXHJcbjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5hIHtcclxuZm9udC1mYW1pbHk6IEFyYWJpYyAhaW1wb3J0YW50O1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmxpbmUtaGVpZ2h0OiAxLjc7XHJcbmNvbG9yOiAjNjY2NjY2O1xyXG5tYXJnaW46IDBweDtcclxudHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbi13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbi1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4tbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG59XHJcblxyXG5hOmZvY3VzIHtcclxub3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5oMSxoMixoMyxoNCxoNSxoNiB7XHJcbm1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5wIHtcclxuZm9udC1mYW1pbHk6IEFyYWJpYztcclxuZm9udC1zaXplOiAxNHB4O1xyXG5saW5lLWhlaWdodDogMS43O1xyXG5jb2xvcjogd2hpdGU7XHJcbm1hcmdpbjogMHB4O1xyXG59XHJcblxyXG51bCwgbGkge1xyXG5tYXJnaW46IDBweDtcclxubGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5pbnB1dCB7XHJcbm91dGxpbmU6IG5vbmU7XHJcbmJvcmRlcjogbm9uZTtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG5vdXRsaW5lOiBub25lO1xyXG5ib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1cyB7XHJcbmJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmJ1dHRvbiB7XHJcbm91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuYm9yZGVyOiBub25lO1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pZnJhbWUge1xyXG5ib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblsgVXRpbGl0eSBdKi9cclxuLnR4dDEge1xyXG5mb250LWZhbWlseTogQXJhYmljO1xyXG5mb250LXNpemU6IDE2cHg7XHJcbmNvbG9yOiAjY2NjY2NjO1xyXG5saW5lLWhlaWdodDogMS40O1xyXG59XHJcblxyXG4uYm8xIHtcclxuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk5OTk7XHJcbn1cclxuXHJcbi5ob3YxOmhvdmVyIHtcclxuYm9yZGVyLWNvbG9yOiAjZDMzZjhkO1xyXG59XHJcblxyXG5cclxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuWyBsb2dpbiBdKi9cclxuXHJcbi5saW1pdGVyIHtcclxud2lkdGg6IDEwMCU7XHJcbm1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWxvZ2luMTAwIHtcclxuXHJcbmRpcmVjdGlvbjogcnRsO1xyXG53aWR0aDogMTAwJTsgIFxyXG5taW4taGVpZ2h0OiAxMDB2aDtcclxuZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbmRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuZGlzcGxheTogLW1vei1ib3g7XHJcbmRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LXdyYXA6IHdyYXA7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5wYWRkaW5nOiAxNXB4O1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jb250YWluZXItbG9naW4xMDA6OmJlZm9yZSB7XHJcbmNvbnRlbnQ6IFwiXCI7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnotaW5kZXg6IC0xO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG50b3A6IDA7XHJcbmxlZnQ6IDA7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9iLmpwZycpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5vcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi53cmFwLWxvZ2luMTAwIHtcclxud2lkdGg6IDM5MHB4O1xyXG5tYXJnaW4tcmlnaHQ6IDUwJTtcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuWyAgXSovXHJcbi5sb2dpbjEwMC1mb3JtIHtcclxud2lkdGg6IDEwMCU7XHJcbmRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5kaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbmRpc3BsYXk6IC1tb3otYm94O1xyXG5kaXNwbGF5OiAtbXMtZmxleGJveDtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5mbGV4LXdyYXA6IHdyYXA7XHJcblxyXG59XHJcblxyXG4ubG9naW4xMDAtZm9ybS10aXRsZSB7XHJcbmZvbnQtZmFtaWx5OiBBcmFiaWMgO1xyXG5mb250LXNpemU6IDI0cHg7XHJcbmNvbG9yOiAjZmZmO1xyXG5saW5lLWhlaWdodDogMS4yO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbndpZHRoOiAxMDAlO1xyXG5kaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ubG9naW4xMDAtZm9ybS1hdmF0YXIge1xyXG53aWR0aDogMzUwcHg7XHJcbmhlaWdodDogMTAwcHg7XHJcbm1hcmdpbjogMCBhdXRvO1xyXG5tYXJnaW4tdG9wOiA3JTtcclxufVxyXG4ubG9naW4xMDAtZm9ybS1hdmF0YXIgaW1nIHtcclxud2lkdGg6IDEwMCU7XHJcbm1hcmdpbi10b3A6IC00NSU7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi53cmFwLWlucHV0MTAwIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG53aWR0aDogMTAwJTtcclxuei1pbmRleDogMTtcclxufVxyXG5cclxuLmlucHV0MTAwIHtcclxuZm9udC1mYW1pbHk6IEFyYWJpYztcclxuZm9udC1zaXplOiAxNXB4O1xyXG5saW5lLWhlaWdodDogMS4yO1xyXG5jb2xvcjogd2hpdGU7XHJcbmhlaWdodDogNDBweDtcclxubWFyZ2luLXRvcDogMjBweDtcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiAxMDAlO1xyXG5iYWNrZ3JvdW5kOiAjMUI1Qjg0O1xyXG5ib3JkZXItcmFkaXVzOiAxM3B4O1xyXG5wYWRkaW5nOiAwIDMwcHggMCA1M3B4O1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuWyBGb2N1cyBdKi9cclxuLmZvY3VzLWlucHV0MTAwIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYm9yZGVyLXJhZGl1czogMjVweDtcclxuYm90dG9tOiAwO1xyXG5sZWZ0OiAwO1xyXG56LWluZGV4OiAtMTtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxuYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xyXG5jb2xvcjogIzFCNUI4NDtcclxuXHJcbn1cclxuXHJcbi5pbnB1dDEwMDpmb2N1cyArIC5mb2N1cy1pbnB1dDEwMCB7XHJcbi13ZWJraXQtYW5pbWF0aW9uOiBhbmltLXNoYWRvdyAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG5hbmltYXRpb246IGFuaW0tc2hhZG93IDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltLXNoYWRvdyB7XHJcbnRvIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDgwcHggMzBweDtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbS1zaGFkb3cge1xyXG50byB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4MHB4IDMwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG59XHJcblxyXG4uc3ltYm9sLWlucHV0MTAwIHtcclxuZm9udC1zaXplOiAxNXB4O1xyXG5jb2xvcjogd2hpdGU7XHJcblxyXG5kaXNwbGF5OiAtd2Via2l0LWJveDtcclxuZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5kaXNwbGF5OiAtbW96LWJveDtcclxuZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYm9yZGVyLXJhZGl1czogMjVweDtcclxuXHJcbmJvdHRvbTogLThweDtcclxubGVmdDogLTEwcHg7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbnBhZGRpbmctbGVmdDogMzBweDtcclxucG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4td2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4tby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxudHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbn1cclxuXHJcbi5pbnB1dDEwMDpmb2N1cyArIC5mb2N1cy1pbnB1dDEwMCArIC5zeW1ib2wtaW5wdXQxMDAge1xyXG4gIGNvbG9yOiAjMWM3ZjgyO1xyXG4gIHBhZGRpbmctbGVmdDogMjNweDtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblsgQnV0dG9uIF0qL1xyXG4uY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuIHtcclxud2lkdGg6IDQwJTtcclxuZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbmRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuZGlzcGxheTogLW1vei1ib3g7XHJcbmRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5tYXJnaW4tdG9wOiAyMHB4O1xyXG5tYXJnaW46IGF1dG87XHJcblxyXG5mbGV4LXdyYXA6IHdyYXA7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4xMDAtZm9ybS1idG4ge1xyXG5mb250LWZhbWlseTogQXJhYmljO1xyXG5mb250LXNpemU6IDE1cHg7XHJcbmxpbmUtaGVpZ2h0OiAxLjU7XHJcbmNvbG9yOiAjZTBlMGUwO1xyXG5tYXJnaW4tdG9wOiAyMHB4O1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiA1MHB4O1xyXG5ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5iYWNrZ3JvdW5kOiAjMUI1Qjg0O1xyXG5kaXNwbGF5OiAtd2Via2l0LWJveDtcclxuZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5kaXNwbGF5OiAtbW96LWJveDtcclxuZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5wYWRkaW5nOiAwIDI1cHg7XHJcblxyXG4td2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4tby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxudHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcblxyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5sb2dpbjEwMC1mb3JtLWJ0bjo6YmVmb3JlIHtcclxuY29udGVudDogXCJcIjtcclxuZGlzcGxheTogYmxvY2s7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuei1pbmRleDogLTE7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbmJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbnRvcDogMDtcclxubGVmdDogMDtcclxuYmFja2dyb3VuZDogIzFCNUI4NDtcclxuXHJcbi13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbi1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4tbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG50cmFuc2l0aW9uOiBhbGwgMC40cztcclxub3BhY2l0eTogMDtcclxufVxyXG5cclxuLmxvZ2luMTAwLWZvcm0tYnRuOmhvdmVyIHtcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbmNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubG9naW4xMDAtZm9ybS1idG46aG92ZXI6YmVmb3JlIHtcclxub3BhY2l0eTogMTtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuWyBCdXR0b24gc2lnbiBpbiB3aXRoIF0qL1xyXG4uYnRuLWZhY2UsXHJcbi5idG4tZ29vZ2xlIHtcclxuZm9udC1mYW1pbHk6IEFyYWJpYztcclxuZm9udC1zaXplOiAxNnB4O1xyXG5saW5lLWhlaWdodDogMS4yO1xyXG5cclxuZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbmRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuZGlzcGxheTogLW1vei1ib3g7XHJcbmRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxud2lkdGg6IGNhbGMoKDEwMCUgLSAxMHB4KSAvIDIpO1xyXG5oZWlnaHQ6IDQwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDNweDtcclxuYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbi13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbi1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4tbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG50cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG5cclxuXHJcbi5idG4tZmFjZSB7XHJcbmNvbG9yOiAjMWM3ZjgyO1xyXG47XHJcbn1cclxuXHJcbi5idG4tZmFjZSBpIHtcclxuZm9udC1zaXplOiAyMHB4O1xyXG5tYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbnBhZGRpbmctYm90dG9tOiAxcHg7XHJcbn1cclxuXHJcbi5idG4tZ29vZ2xlIHtcclxuY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuXHJcbi5idG4tZ29vZ2xlIGltZyB7XHJcbndpZHRoOiAxOXB4O1xyXG5tYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbnBhZGRpbmctYm90dG9tOiAxcHg7XHJcbn1cclxuXHJcblxyXG4uYnRuLWZhY2U6aG92ZXIsXHJcbi5idG4tZ29vZ2xlOmhvdmVyIHtcclxuYm9yZGVyLWNvbG9yOiAjZDMzZjhkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblsgQWxlcnQgdmFsaWRhdGUgXSovXHJcblxyXG4udmFsaWRhdGUtaW5wdXQge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcclxuY29udGVudDogYXR0cihkYXRhLXZhbGlkYXRlKTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5tYXgtd2lkdGg6IDcwJTtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNjODAwMDA7XHJcbmJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbnBhZGRpbmc6IDRweCAyNXB4IDRweCAxMHB4O1xyXG50b3A6IDUwJTtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbi1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4tbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4tby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxucmlnaHQ6IDhweDtcclxucG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG5mb250LWZhbWlseTogQXJhYmljO1xyXG5jb2xvcjogI2M4MDAwMDtcclxuZm9udC1zaXplOiAxM3B4O1xyXG5saW5lLWhlaWdodDogMS40O1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxudmlzaWJpbGl0eTogaGlkZGVuO1xyXG5vcGFjaXR5OiAwO1xyXG5cclxuLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XHJcbi1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcclxuLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XHJcbnRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcclxufVxyXG5cclxuLmFsZXJ0LXZhbGlkYXRlOjphZnRlciB7XHJcbmNvbnRlbnQ6IFwiXFxmMDZhXCI7XHJcbmZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuZGlzcGxheTogYmxvY2s7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuY29sb3I6ICNjODAwMDA7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxudG9wOiA1MCU7XHJcbi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4tbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbnJpZ2h0OiAxM3B4O1xyXG59XHJcblxyXG4uYWxlcnQtdmFsaWRhdGU6aG92ZXI6YmVmb3JlIHtcclxudmlzaWJpbGl0eTogdmlzaWJsZTtcclxub3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbi5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxufVxyXG5cclxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuWyByZXNwb25zaXZlIF0qL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbi53cmFwLWxvZ2luMTAwIHtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/api */ "./src/app/shared/services/api/index.ts");



// import { SwalService } from 'app/shared/services';



let LoginComponent = class LoginComponent {
    constructor(loginService, router, route, swalService, spinner) {
        this.loginService = loginService;
        this.router = router;
        this.route = route;
        this.swalService = swalService;
        this.spinner = spinner;
        this.user = new _shared_services_api__WEBPACK_IMPORTED_MODULE_5__["UserLogin"]();
        this.busyLoggingIn = false;
        this.isRememberMeChecked = false;
    }
    forgetMe() {
        localStorage.removeItem(this.userId);
    }
    login() {
        this.busyLoggingIn = true;
        this.spinner.show();
        this.loginService.login(this.user).subscribe(res => {
            if (res) {
                this.spinner.hide();
                if (this.redirectUrl) {
                    this.router.navigateByUrl(this.redirectUrl);
                }
                else {
                    this.spinner.hide();
                    this.router.navigate(['/pages/users']);
                }
            }
        });
        this.spinner.hide();
    }
    ngOnInit() {
        if (this.route.snapshot.queryParams) {
            this.redirectUrl = this.route.snapshot.queryParams.redirect || '';
            this.redirectMessage = this.route.snapshot.queryParams.redirectMessage || '';
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _shared_services_api__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_4__["SwalService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_api__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _shared_services__WEBPACK_IMPORTED_MODULE_4__["SwalService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/shared/services/Auth/authentication.services.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/Auth/authentication.services.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




var jwtDecode = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
let AuthenticationService = class AuthenticationService {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.refreshLoginStatus();
    }
    setSessionExpirationNotification(remainingTimeMs) {
        if (this.expirationTimeout) {
            clearTimeout(this.expirationTimeout);
        }
        // this.expirationTimeout = setTimeout(() => {
        // this.redirectToLogin(this.route.snapshot['_routerState'].url, '  Finished');
        // }, remainingTimeMs);
    }
    getLoginStatus() {
        if (!localStorage.getItem('token'))
            return false;
        try {
            let token = localStorage.getItem('token');
            let decodedToken = jwtDecode(token);
            console.log(decodedToken);
            localStorage.setItem('user', decodedToken.firstname);
            let expDate = Number.parseInt(decodedToken.exp) * 1000;
            let today = new Date().valueOf();
            if (expDate > today) {
                this.setSessionExpirationNotification(expDate - today);
                return true;
            }
        }
        catch (err) {
            return false;
        }
        return false;
    }
    refreshLoginStatus() {
        if (!this.loggedIn) {
            this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.getLoginStatus());
        }
        else {
            this.loggedIn.next(this.getLoginStatus());
        }
    }
    isLoggedIn() {
        this.refreshLoginStatus();
        return this.loggedIn.asObservable();
    }
    getStoredUserId() {
        if (!localStorage.getItem('token'))
            return null;
        try {
            let token = localStorage.getItem('token');
            let decodedToken = jwtDecode(token);
            return decodedToken.UserId;
        }
        catch (err) {
            return null;
        }
    }
    getToken() {
        let token = localStorage.getItem('token');
        return token;
    }
    getLoggedUserName() {
        if (!localStorage.getItem('token'))
            return null;
        try {
            let token = localStorage.getItem('token');
            let decodedToken = jwtDecode(token);
            return decodedToken.UserName;
        }
        catch (err) {
            return null;
        }
    }
    getLoggedUserId() {
        if (!localStorage.getItem('token'))
            return null;
        try {
            let token = localStorage.getItem('token');
            let decodedToken = jwtDecode(token);
            return decodedToken.UserId;
        }
        catch (err) {
            return null;
        }
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
    redirectToLogin(path, msg) {
        localStorage.clear();
        this.router.navigate(['/login'], {
            queryParams: {
                redirect: path,
                redirectMessage: msg
            }
        });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/shared/services/Auth/index.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/Auth/index.ts ***!
  \***********************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _authentication_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.services */ "./src/app/shared/services/Auth/authentication.services.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });





/***/ }),

/***/ "./src/app/shared/services/Guards/auth-guard.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/Guards/auth-guard.service.ts ***!
  \**************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Auth */ "./src/app/shared/services/Auth/index.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        this.loginStatus = this.authService.getLoginStatus();
        if (this.loginStatus) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Auth__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _Auth__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/services/Guards/index.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/Guards/index.ts ***!
  \*************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/shared/services/Guards/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });





/***/ }),

/***/ "./src/app/shared/services/api/album-categories.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/api/album-categories.service.ts ***!
  \*****************************************************************/
/*! exports provided: CategoriesCategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesCategoriesService", function() { return CategoriesCategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globals_global_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals/global-config */ "./src/app/shared/services/api/globals/global-config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const API_URL = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].CategoryGetAll;
const API_URL_Create = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].createCategory;
const deleteCategory = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].CategoryDelete;
const API_URL_Update = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].CategoryUpadte;
let CategoriesCategoriesService = class CategoriesCategoriesService {
    constructor(http) {
        this.http = http;
    }
    create(model) {
        return this.http.post(API_URL_Create, model);
    }
    // get Categories search
    getAll(SearchTerm, offset, limit) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('SearchTerm', SearchTerm);
        params = params.append('offset', offset);
        params = params.append('limit', limit);
        return this.http.get(API_URL, { params: params });
    }
    get(id) {
        return this.http.get(API_URL + `/${id}`);
    }
    update(model) {
        const options = {
            id: model.id,
            name: model.name,
            order: model.order
        };
        return this.http.put(API_URL_Update, options);
    }
    delete(id) {
        return this.http.delete(deleteCategory + `/${id}`);
    }
};
CategoriesCategoriesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CategoriesCategoriesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], CategoriesCategoriesService);



/***/ }),

/***/ "./src/app/shared/services/api/album.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/api/album.service.ts ***!
  \******************************************************/
/*! exports provided: AlbumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function() { return AlbumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _globals_global_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals/global-config */ "./src/app/shared/services/api/globals/global-config.ts");




const API_URL = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].albums;
let AlbumService = class AlbumService {
    constructor(http) {
        this.http = http;
    }
    create(model) {
        return this.http.post(API_URL, model);
    }
    // get Album search
    getAll(offset, limit) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('offset', offset);
        params = params.append('limit', limit);
        return this.http.get(API_URL, { params: params });
    }
    get(id) {
        return this.http.get(API_URL + `/${id}`);
    }
    update(id, model) {
        return this.http.put(API_URL + `/${id}`, model);
    }
    delete(id) {
        return this.http.delete(API_URL + `/${id}`);
    }
};
AlbumService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AlbumService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AlbumService);



/***/ }),

/***/ "./src/app/shared/services/api/annonce.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/api/annonce.service.ts ***!
  \********************************************************/
/*! exports provided: AnnonceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnonceService", function() { return AnnonceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globals_global_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals/global-config */ "./src/app/shared/services/api/globals/global-config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const API_URL = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].getAbout;
const API_URL_Create = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].createAbout;
const deleteCategory = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].DeleteAbout;
const API_URL_Update = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].updateAbout;
const API_URL_order = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].order;
let AnnonceService = class AnnonceService {
    constructor(http) {
        this.http = http;
    }
    create(model) {
        return this.http.post(API_URL_Create, model);
    }
    get() {
        return this.http.get(API_URL);
    }
    update(model) {
        const object = {
            id: 1,
            content: model.content
        };
        return this.http.put(API_URL_Update, object);
    }
    delete(id) {
        return this.http.delete(deleteCategory + `/${id}`);
    }
    getAll(offset, limit) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('offset', offset);
        params = params.append('limit', limit);
        return this.http.get(API_URL, { params: params });
    }
};
AnnonceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AnnonceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AnnonceService);



/***/ }),

/***/ "./src/app/shared/services/api/artist.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/api/artist.service.ts ***!
  \*******************************************************/
/*! exports provided: ArtistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return ArtistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _globals_global_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals/global-config */ "./src/app/shared/services/api/globals/global-config.ts");




const API_URL = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].artists;
let ArtistService = class ArtistService {
    constructor(http) {
        this.http = http;
    }
    create(model) {
        return this.http.post(API_URL, model);
    }
    // get Album search
    getAll(offset, limit) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('offset', offset);
        params = params.append('limit', limit);
        return this.http.get(API_URL, { params: params });
    }
    get(id) {
        return this.http.get(API_URL + `/${id}`);
    }
    update(id, model) {
        return this.http.put(API_URL + `/${id}`, model);
    }
    delete(id) {
        return this.http.delete(API_URL + `/${id}`);
    }
};
ArtistService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ArtistService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ArtistService);



/***/ }),

/***/ "./src/app/shared/services/api/delivery.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/api/delivery.service.ts ***!
  \*********************************************************/
/*! exports provided: DeliveryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryService", function() { return DeliveryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globals_global_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals/global-config */ "./src/app/shared/services/api/globals/global-config.ts");




const API_URL_getAll = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].DeliveryGetAll;
const API_URL_Delete = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].DeliveryDelete;
const API_URL_update = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].DeliveryUpadte;
const API_URL_create = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].createDelivery;
let DeliveryService = class DeliveryService {
    constructor(http) {
        this.http = http;
    }
    create(model) {
        return this.http.post(API_URL_create, model);
    }
    // get Album search
    getAll(SearchTerm, offset, limit) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('SearchTerm', SearchTerm);
        params = params.append('offset', offset);
        params = params.append('limit', limit);
        return this.http.get(API_URL_getAll, { params: params });
    }
    //  get(id: number): Observable<City[]> {
    //  return this.http.get<City[]>(API_URL + `/${id}`);
    //  }
    update(model) {
        const options = {
            id: model.id,
            name: model.name,
            fisrtPhone: model.fisrtPhone,
            secondPhone: model.secondPhone,
        };
        return this.http.put(API_URL_update, options);
    }
    delete(id) {
        return this.http.delete(API_URL_Delete + `/${id}`);
    }
};
DeliveryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DeliveryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], DeliveryService);



/***/ }),

/***/ "./src/app/shared/services/api/globals/global-config.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/api/globals/global-config.ts ***!
  \**************************************************************/
/*! exports provided: BaseURL, API_URL, API_URL_Yaboos, END_POINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseURL", function() { return BaseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL_Yaboos", function() { return API_URL_Yaboos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_POINTS", function() { return END_POINTS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const BaseURL = "http://eshop5827-001-site3.etempurl.com";
const API_URL = BaseURL + '/api/Account';
const API_URL_Yaboos = BaseURL + '/api';
class END_POINTS {
}
// yaboos  API
END_POINTS.login = API_URL + "/login";
//post user
END_POINTS.users = API_URL + "/register";
// get All user
END_POINTS.GetAllUser = API_URL + "/admin/getAllUser";
// update user
END_POINTS.updateUser = API_URL + "/admin/update";
// ContactUs
END_POINTS.getProblems = API_URL_Yaboos + "/ContactUs/admin/getAll";
END_POINTS.deleteProblems = API_URL_Yaboos + '/ContactUs/admin/delete';
// about
END_POINTS.createAbout = API_URL_Yaboos + "/About/admin/create";
END_POINTS.getAbout = API_URL_Yaboos + "/About/Get";
END_POINTS.updateAbout = API_URL_Yaboos + '/About/admin/update';
END_POINTS.DeleteAbout = API_URL_Yaboos + '/About/admin/delete';
// city
END_POINTS.createCity = API_URL_Yaboos + "/City/admin/create";
END_POINTS.getAllCity = API_URL_Yaboos + "/City/GetAll";
END_POINTS.updateCity = API_URL_Yaboos + '/City/admin/update';
END_POINTS.DeleteCity = API_URL_Yaboos + '/City/admin/delete';
// Category / /api/Category/GetAll
END_POINTS.CategoryGetAll = API_URL_Yaboos + "/Category/GetAll";
END_POINTS.createCategory = API_URL_Yaboos + "/Category/admin/create";
END_POINTS.CategoryUpadte = API_URL_Yaboos + '/Category/admin/update';
END_POINTS.CategoryDelete = API_URL_Yaboos + '/Category/admin/delete';
//Delivery
END_POINTS.DeliveryGetAll = API_URL_Yaboos + "/Delivery/GetAll";
END_POINTS.createDelivery = API_URL_Yaboos + "/Delivery/admin/create";
END_POINTS.DeliveryUpadte = API_URL_Yaboos + "/Delivery/admin/update";
END_POINTS.DeliveryDelete = API_URL_Yaboos + '/Delivery/admin/delete';
///api/Notification/GetAll
END_POINTS.NotificationGetAll = API_URL_Yaboos + "/Notification/GetAll";
END_POINTS.createNotification = API_URL_Yaboos + "/Notification/admin/create";
END_POINTS.NotificationUpadte = API_URL_Yaboos + "/Notification/admin/update";
END_POINTS.NotificationDelete = API_URL_Yaboos + "/Notification/admin​/delete​";
//Product
END_POINTS.ProductGetAll = API_URL_Yaboos + "/Product/GetAll";
END_POINTS.Productcreate = API_URL_Yaboos + "/Product/admin/create";
END_POINTS.ProductUpadte = API_URL_Yaboos + "/Product/admin/update";
END_POINTS.ProductDelete = API_URL_Yaboos + '/Product/admin/delete';
END_POINTS.ProductByID = API_URL_Yaboos + '/Product/admin/getById';
///api/Supplier/admin/create
END_POINTS.SupplierGetAll = API_URL_Yaboos + "/Supplier/GetAll";
END_POINTS.Suppliercreate = API_URL_Yaboos + "/Supplier/admin/create";
END_POINTS.SuppliertUpadte = API_URL_Yaboos + "/Supplier/admin/update";
END_POINTS.SuppliertDelete = API_URL_Yaboos + '/Supplier/admin/delete';
// public static SupplierByID = API_URL_Yaboos+"/Supplier/admin​/getById";
END_POINTS.SupplierByID = API_URL_Yaboos + '/Supplier/admin/getById';
END_POINTS.albumCategories = API_URL_Yaboos + "/albumCategories/admin";
END_POINTS.albums = API_URL_Yaboos + "/albums/admin";
END_POINTS.languages = API_URL_Yaboos + "/languages/admin";
END_POINTS.songs = API_URL_Yaboos + "/songs/admin";
END_POINTS.artists = API_URL_Yaboos + "/artists/admin";
END_POINTS.passwordreset = API_URL + "/passwordreset";
END_POINTS.notification = API_URL_Yaboos + "/notifications/admin/pushToAll";
END_POINTS.annonce = API_URL_Yaboos + "/advertisements/admin";
END_POINTS.order = API_URL_Yaboos + "/Order/GetByUser";


/***/ }),

/***/ "./src/app/shared/services/api/index.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/services/api/index.ts ***!
  \**********************************************/
/*! exports provided: UserLogin, LoginService, CategoriesCategoriesService, AlbumService, ArtistService, LanguagesService, SongsService, ResetPasswordService, UsersService, AnnonceService, DeliveryService, ProductsService, SuppliersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/shared/services/api/login.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return _login_service__WEBPACK_IMPORTED_MODULE_1__["UserLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]; });

/* harmony import */ var _album_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album-categories.service */ "./src/app/shared/services/api/album-categories.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesCategoriesService", function() { return _album_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesCategoriesService"]; });

/* harmony import */ var _album_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./album.service */ "./src/app/shared/services/api/album.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function() { return _album_service__WEBPACK_IMPORTED_MODULE_3__["AlbumService"]; });

/* harmony import */ var _artist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artist.service */ "./src/app/shared/services/api/artist.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return _artist_service__WEBPACK_IMPORTED_MODULE_4__["ArtistService"]; });

/* harmony import */ var _languages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./languages.service */ "./src/app/shared/services/api/languages.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LanguagesService", function() { return _languages_service__WEBPACK_IMPORTED_MODULE_5__["LanguagesService"]; });

/* harmony import */ var _songs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./songs.service */ "./src/app/shared/services/api/songs.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SongsService", function() { return _songs_service__WEBPACK_IMPORTED_MODULE_6__["SongsService"]; });

/* harmony import */ var _reset_password_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password.service */ "./src/app/shared/services/api/reset-password.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordService", function() { return _reset_password_service__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordService"]; });

/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users.service */ "./src/app/shared/services/api/users.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return _users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]; });

/* harmony import */ var _annonce_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./annonce.service */ "./src/app/shared/services/api/annonce.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnnonceService", function() { return _annonce_service__WEBPACK_IMPORTED_MODULE_9__["AnnonceService"]; });

/* harmony import */ var _delivery_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./delivery.service */ "./src/app/shared/services/api/delivery.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeliveryService", function() { return _delivery_service__WEBPACK_IMPORTED_MODULE_10__["DeliveryService"]; });

/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products.service */ "./src/app/shared/services/api/products.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return _products_service__WEBPACK_IMPORTED_MODULE_11__["ProductsService"]; });

/* harmony import */ var _suppliers_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./suppliers.service */ "./src/app/shared/services/api/suppliers.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuppliersService", function() { return _suppliers_service__WEBPACK_IMPORTED_MODULE_12__["SuppliersService"]; });
















/***/ }),

/***/ "./src/app/shared/services/api/interceptors/error.interceptor.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/services/api/interceptors/error.interceptor.ts ***!
  \***********************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




// import { NotifierService } from "angular-notifier";
let ErrorInterceptor = class ErrorInterceptor {
    constructor(
    //    private notifier: NotifierService
    ) { }
    intercept(req, next) {
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 0) { // ConnectionError
                // this.notifier.notify('error', 'خطأ فى الاتصال بالخادم. ');
            }
            else if (err.status === 401) { // NotAuthorized errior
            }
            const error = {
                status: err.status,
                statusText: err.statusText,
                message: err.error ? err.error.message : ''
            };
            // const error = err.error ? err.error.message || err.statusText: err.status;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/shared/services/api/interceptors/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/api/interceptors/index.ts ***!
  \***********************************************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/shared/services/api/interceptors/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/shared/services/api/interceptors/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });






/***/ }),

/***/ "./src/app/shared/services/api/interceptors/jwt.interceptor.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/services/api/interceptors/jwt.interceptor.ts ***!
  \*********************************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let JwtInterceptor = class JwtInterceptor {
    intercept(request, next) {
        let header = {};
        let token = localStorage.getItem('token');
        if (token) {
            header['Authorization'] = "Bearer" + " " + token;
        }
        request = request.clone({
            setHeaders: header
        });
        return next.handle(request);
    }
};
JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], JwtInterceptor);



/***/ }),

/***/ "./src/app/shared/services/api/languages.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/api/languages.service.ts ***!
  \**********************************************************/
/*! exports provided: LanguagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesService", function() { return LanguagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globals_global_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals/global-config */ "./src/app/shared/services/api/globals/global-config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const API_URL_getAll = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].getAllCity;
const API_URL_Delete = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].DeleteCity;
const API_URL_update = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].updateCity;
const API_URL_create = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].createCity;
let LanguagesService = class LanguagesService {
    constructor(http) {
        this.http = http;
    }
    create(model) {
        return this.http.post(API_URL_create, model);
    }
    // get Album search
    getAll(SearchTerm, offset, limit) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('SearchTerm', SearchTerm);
        params = params.append('offset', offset);
        params = params.append('limit', limit);
        return this.http.get(API_URL_getAll, { params: params });
    }
    //  get(id: number): Observable<City[]> {
    //  return this.http.get<City[]>(API_URL + `/${id}`);
    //  }
    update(model) {
        return this.http.put(API_URL_update, model);
    }
    delete(id) {
        return this.http.delete(API_URL_Delete + `/${id}`);
    }
};
LanguagesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LanguagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LanguagesService);



/***/ }),

/***/ "./src/app/shared/services/api/login.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/api/login.service.ts ***!
  \******************************************************/
/*! exports provided: UserLogin, LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _globals_global_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globals/global-config */ "./src/app/shared/services/api/globals/global-config.ts");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Auth */ "./src/app/shared/services/Auth/index.ts");
/* harmony import */ var _swal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../swal.service */ "./src/app/shared/services/swal.service.ts");







const API_URL = _globals_global_config__WEBPACK_IMPORTED_MODULE_4__["END_POINTS"].login;
class UserLogin {
}
let LoginService = class LoginService {
    constructor(http, authenticationService, swalService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.swalService = swalService;
    }
    login(user) {
        return this.http.post(API_URL, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            localStorage.setItem('token', Object.values(res)[2]);
        }, err => {
            if (err[Object.keys(err)[0]] == 400) {
                this.swalService.NotifierError('من فضلك ادخل الحقول الممطلوبة');
            }
            else {
                this.swalService.NotifierError(' اسم المستخدم او كلمه المرور غير صحيحة   ');
            }
        }));
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _Auth__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _swal_service__WEBPACK_IMPORTED_MODULE_6__["SwalService"] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _Auth__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        _swal_service__WEBPACK_IMPORTED_MODULE_6__["SwalService"]])
], LoginService);



/***/ }),

/***/ "./src/app/shared/services/api/products.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/api/products.service.ts ***!
  \*********************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globals_global_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals/global-config */ "./src/app/shared/services/api/globals/global-config.ts");




const API_URL = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].ProductGetAll;
const API_URL_update = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].ProductUpadte;
const API_URL_Delete = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].ProductDelete;
const API_URL_create = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].Productcreate;
const API_URL_ById = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].ProductByID;
let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
    }
    create(model) {
        return this.http.post(API_URL_create, model);
    }
    // get Album search
    getAll(SupplierId, CategoryId, SearchTerm, offset, limit) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('SupplierId', SupplierId);
        params = params.append('CategoryId', CategoryId);
        params = params.append('SearchTerm', SearchTerm);
        params = params.append('offset', offset);
        params = params.append('limit', limit);
        return this.http.get(API_URL, { params: params });
    }
    get(id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('id', id);
        return this.http.get(API_URL_ById, { params: params });
    }
    update(model) {
        const options = {
            id: Number(model.id),
            name: model.name,
            imagePath: model.imagePath,
            order: model.order,
            categoryId: model.categoryId,
            supplierId: model.supplierId,
            categoryName: model.categoryName,
            supplierName: model.supplierName,
            imageExtension: model.imageExtension,
            imageBase64: model.imageBase64,
        };
        return this.http.put(API_URL_update, options);
    }
    delete(id) {
        return this.http.delete(API_URL_Delete + `/${id}`);
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProductsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ProductsService);



/***/ }),

/***/ "./src/app/shared/services/api/reset-password.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/services/api/reset-password.service.ts ***!
  \***************************************************************/
/*! exports provided: ResetPasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordService", function() { return ResetPasswordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globals_global_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals/global-config */ "./src/app/shared/services/api/globals/global-config.ts");




const API_URL_getAll = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].getProblems;
const API_URL_Delete = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].deleteProblems;
let ResetPasswordService = class ResetPasswordService {
    constructor(http) {
        this.http = http;
    }
    // get Album search
    getAll(SearchTerm, offset, limit) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('SearchTerm', SearchTerm);
        params = params.append('offset', offset);
        params = params.append('limit', limit);
        return this.http.get(API_URL_getAll, { params: params });
    }
    delete(id) {
        return this.http.delete(API_URL_Delete + `/${id}`);
    }
};
ResetPasswordService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ResetPasswordService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ResetPasswordService);



/***/ }),

/***/ "./src/app/shared/services/api/songs.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/api/songs.service.ts ***!
  \******************************************************/
/*! exports provided: SongsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsService", function() { return SongsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globals_global_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals/global-config */ "./src/app/shared/services/api/globals/global-config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const API_URL = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].songs;
let SongsService = class SongsService {
    constructor(http) {
        this.http = http;
    }
    create(model) {
        return this.http.post(API_URL, model);
    }
    getAll() {
        return this.http.get(API_URL);
    }
    get(id) {
        return this.http.get(API_URL + `/${id}`);
    }
    update(id, model) {
        return this.http.put(API_URL + `/${id}`, model);
    }
    delete(id) {
        return this.http.delete(API_URL + `/${id}`);
    }
};
SongsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SongsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], SongsService);



/***/ }),

/***/ "./src/app/shared/services/api/suppliers.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/api/suppliers.service.ts ***!
  \**********************************************************/
/*! exports provided: SuppliersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersService", function() { return SuppliersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _globals_global_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals/global-config */ "./src/app/shared/services/api/globals/global-config.ts");




const API_URL = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].SupplierGetAll;
const API_URL_update = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].SuppliertUpadte;
const API_URL_Delete = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].SuppliertDelete;
const API_URL_create = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].Suppliercreate;
const API_URL_ById = _globals_global_config__WEBPACK_IMPORTED_MODULE_3__["END_POINTS"].SupplierByID;
let SuppliersService = class SuppliersService {
    constructor(http) {
        this.http = http;
    }
    create(model) {
        return this.http.post(API_URL_create, model);
    }
    // get Album search
    getAll(CityId, CategoryId, SearchTerm, offset, limit) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('CityId', CityId);
        params = params.append('CategoryId', CategoryId);
        params = params.append('SearchTerm', SearchTerm);
        params = params.append('offset', offset);
        params = params.append('limit', limit);
        return this.http.get(API_URL, { params: params });
    }
    get(id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('id', id);
        return this.http.get(API_URL_ById, { params: params });
    }
    update(model) {
        const options = {
            id: model.id,
            name: model.name,
            phoneNumber: model.phoneNumber,
            imagePath: model.imagePath,
            order: model.order,
            cityId: model.cityId,
            cityName: model.cityName,
            imageExtension: model.imageExtension,
            imageBase64: model.imageBase64,
            rate: model.rate
        };
        return this.http.put(API_URL_update, options);
    }
    delete(id) {
        return this.http.delete(API_URL_Delete + `/${id}`);
    }
};
SuppliersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SuppliersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SuppliersService);



/***/ }),

/***/ "./src/app/shared/services/api/users.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/api/users.service.ts ***!
  \******************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globals_global_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals/global-config */ "./src/app/shared/services/api/globals/global-config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const API_URL = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].users;
const API_URL_getAllUser = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].GetAllUser;
const API_URL_updateUser = _globals_global_config__WEBPACK_IMPORTED_MODULE_2__["END_POINTS"].updateUser;
let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
    }
    create(model) {
        return this.http.post(API_URL, model);
    }
    get(id) {
        return this.http.get(API_URL + `/${id}`);
    }
    update(model) {
        return this.http.put(API_URL_updateUser, model);
    }
    // get Album search
    getAll(SearchTerm, offset, limit) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('SearchTerm', SearchTerm);
        params = params.append('offset', offset);
        params = params.append('limit', limit);
        return this.http.get(API_URL_getAllUser, { params: params });
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], UsersService);



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: SwalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _swal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swal.service */ "./src/app/shared/services/swal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwalService", function() { return _swal_service__WEBPACK_IMPORTED_MODULE_1__["SwalService"]; });





/***/ }),

/***/ "./src/app/shared/services/swal.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/swal.service.ts ***!
  \*************************************************/
/*! exports provided: SwalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalService", function() { return SwalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



let SwalService = class SwalService {
    showRemoveConfirmation(elementName) {
        elementName ? elementName = `"${elementName}"` : elementName = "";
        return new Promise((resolve, reject) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: ' هل أنت متآكد??',
                text: `مسح ${elementName}!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: ' نعم , لا!',
                cancelButtonText: 'ألغاء'
            }).then((result) => {
                resolve(result);
            });
        });
    }
    Notifier(title) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            position: 'center',
            icon: 'success',
            title: title,
            showConfirmButton: false,
            timer: 1500,
            background: '#0be881',
        });
    }
    watched(title) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            position: 'center',
            icon: 'info',
            title: title,
            showConfirmButton: false,
            timer: 1500
        });
    }
    confirm(text) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            icon: 'success',
            position: 'center',
            title: 'Attend',
            html: text,
        });
    }
    NotifierError(text) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            position: 'center',
            icon: 'error',
            title: 'حدث خطا ...',
            text: text,
            showConfirmButton: false,
            timer: 2200,
            background: '#eb4d4b',
            footer: ' '
        });
    }
    NotifierEvent(title, text) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            position: 'bottom-end',
            title: title,
            text: text,
            showConfirmButton: true,
            allowOutsideClick: false,
            confirmButtonText: 'تم',
            // background:'#e0fbfc',
            showClass: {
                popup: 'animated bounceIn fast'
            },
            hideClass: {
                popup: 'animated fadeOutLeft slow'
            }
        });
    }
};
SwalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SwalService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");











let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
        ],
        exports: [],
        providers: []
    })
], SharedModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);

/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ibrahimezzat/Desktop/admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map