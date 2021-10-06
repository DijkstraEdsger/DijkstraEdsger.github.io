exports.ids = ["my-components-my-components-module"];
exports.modules = {

/***/ "1D0/":
/*!***************************************************************!*\
  !*** ./src/app/my-components/my-components-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MyComponentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyComponentsRoutingModule", function() { return MyComponentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ "Vd4w");





const routes = [
    {
        path: '',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }
];
class MyComponentsRoutingModule {
}
MyComponentsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyComponentsRoutingModule });
MyComponentsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyComponentsRoutingModule_Factory(t) { return new (t || MyComponentsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyComponentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyComponentsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "5eNu":
/*!***********************************************************!*\
  !*** ./src/app/components/input-fa/input-fa.component.ts ***!
  \***********************************************************/
/*! exports provided: InputFaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFaComponent", function() { return InputFaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class InputFaComponent {
    constructor() {
        this.value = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
    }
    get focus() {
        return this.isFocus;
    }
    emitValue(event) {
        var value = event.target.value;
        return this.value.next(value);
    }
}
InputFaComponent.ɵfac = function InputFaComponent_Factory(t) { return new (t || InputFaComponent)(); };
InputFaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputFaComponent, selectors: [["app-input-fa"]], hostVars: 2, hostBindings: function InputFaComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focus", ctx.focus);
    } }, inputs: { icon: "icon", placeholder: "placeholder" }, outputs: { value: "value" }, decls: 2, vars: 0, consts: [[1, "fa", "fa-envelope-o"], ["type", "text", "placeholder", "email", 3, "focus", "blur", "keyup"]], template: function InputFaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function InputFaComponent_Template_input_focus_1_listener() { return ctx.isFocus = true; })("blur", function InputFaComponent_Template_input_blur_1_listener() { return ctx.isFocus = false; })("keyup", function InputFaComponent_Template_input_keyup_1_listener($event) { return ctx.emitValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["input[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  margin-left: 5px;\n}\n\n[_nghost-%COMP%] {\n  border: 1px solid green;\n  border-radius: 15px;\n  padding: 5px;\n}\n\n.focus[_nghost-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\ni[_ngcontent-%COMP%] {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnB1dC1mYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0RUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6ImlucHV0LWZhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuOmhvc3QoLmZvY3VzKSB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuaSB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputFaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-fa',
                templateUrl: './input-fa.component.html',
                styleUrls: ['./input-fa.component.scss']
            }]
    }], function () { return []; }, { icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.focus']
        }] }); })();


/***/ }),

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


/***/ }),

/***/ "OgZP":
/*!*******************************************************!*\
  !*** ./src/app/my-components/my-components.module.ts ***!
  \*******************************************************/
/*! exports provided: MyComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyComponentsModule", function() { return MyComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _my_components_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-components-routing.module */ "1D0/");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "Vd4w");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");






class MyComponentsModule {
}
MyComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyComponentsModule });
MyComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyComponentsModule_Factory(t) { return new (t || MyComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _my_components_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyComponentsRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyComponentsModule, { declarations: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _my_components_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyComponentsRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _my_components_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyComponentsRoutingModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Vd4w":
/*!*****************************************************************!*\
  !*** ./src/app/my-components/components/main/main.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_metadata_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/metadata-share.service */ "BniZ");
/* harmony import */ var src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/seo.service */ "gYN0");
/* harmony import */ var _components_input_fa_input_fa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/input-fa/input-fa.component */ "5eNu");





class MainComponent {
    constructor(metadataShareService, seoService) {
        this.metadataShareService = metadataShareService;
        this.seoService = seoService;
    }
    ngOnInit() {
        // meta data\
        let data = {
            seo: {
                title: 'MyComponents Page | Dynamic Title and Meta Tags Demo',
                metaTags: [
                    { name: 'description', content: 'MyComponents description' },
                    { property: 'og:title', content: 'MyComponents Title' },
                    {
                        proprety: 'og:description',
                        content: 'MyComponents description',
                    },
                    { name: 'twitter:card', content: 'summary_large_image' },
                ],
            },
        };
        let seoData = data['seo'];
        this.seoService.updateTitle(seoData['title']);
        this.seoService.updateMetaTags(seoData['metaTags']);
    }
    ngAfterViewInit() {
        let b = document.createElement('button');
        b.innerText = 'OK';
        b.style.width = '100px';
        b.style.margin = '30px';
        b.onclick = () => alert('Hello!');
        document.getElementById('buttonWrapper').appendChild(b);
    }
    showInputValue(event) {
        console.log(event);
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_metadata_share_service__WEBPACK_IMPORTED_MODULE_1__["MetadataShareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 2, vars: 0, consts: [[3, "value"], ["id", "buttonWrapper"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-input-fa", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("value", function MainComponent_Template_app_input_fa_value_0_listener($event) { return ctx.showInputValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
    } }, directives: [_components_input_fa_input_fa_component__WEBPACK_IMPORTED_MODULE_3__["InputFaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_metadata_share_service__WEBPACK_IMPORTED_MODULE_1__["MetadataShareService"] }, { type: src_app_services_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"] }]; }, null); })();


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _input_fa_input_fa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-fa/input-fa.component */ "5eNu");




class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_input_fa_input_fa_component__WEBPACK_IMPORTED_MODULE_2__["InputFaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_input_fa_input_fa_component__WEBPACK_IMPORTED_MODULE_2__["InputFaComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_input_fa_input_fa_component__WEBPACK_IMPORTED_MODULE_2__["InputFaComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [_input_fa_input_fa_component__WEBPACK_IMPORTED_MODULE_2__["InputFaComponent"]]
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=my-components-my-components-module.js.map