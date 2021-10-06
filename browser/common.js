(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "BniZ":
/*!****************************************************!*\
  !*** ./src/app/services/metadata-share.service.ts ***!
  \****************************************************/
/*! exports provided: MetadataShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataShareService", function() { return MetadataShareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class MetadataShareService {
    constructor() {
        this._title = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.title$ = this._title.asObservable();
        this._description = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.description$ = this._description.asObservable();
        this._image = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.image$ = this._image.asObservable();
    }
    set title(value) {
        this._title.next(value);
    }
    set description(value) {
        this._description.next(value);
    }
    set image(value) {
        this._image.next(value);
    }
}
MetadataShareService.ɵfac = function MetadataShareService_Factory(t) { return new (t || MetadataShareService)(); };
MetadataShareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MetadataShareService, factory: MetadataShareService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetadataShareService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map