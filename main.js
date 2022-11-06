(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+NcZ":
/*!******************************************!*\
  !*** ./src/app/service/email.service.ts ***!
  \******************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class EmailService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    enviar(body) {
        return this.httpClient.post('https://www.pumahs.com/api/envio_email.php', body);
    }
}
EmailService.ɵfac = function EmailService_Factory(t) { return new (t || EmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EmailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmailService, factory: EmailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "/vi4":
/*!*******************************************************!*\
  !*** ./src/app/pumahs/servicos/servicos.component.ts ***!
  \*******************************************************/
/*! exports provided: ServicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosComponent", function() { return ServicosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ServicosComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicosComponent.ɵfac = function ServicosComponent_Factory(t) { return new (t || ServicosComponent)(); };
ServicosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicosComponent, selectors: [["app-servicos"]], decls: 46, vars: 0, consts: [[1, "wrapper", 2, "background-color", "black"], [1, "section-dark", 2, "background-image", "url('assets/img/clientes/wallpaper-001.jpg')", "background-size", "cover", "min-height", "100vh", "max-height", "100%", "overflow", "hidden", "position", "relative", "width", "100%", "z-index", "1", "display", "-ms-flexbox", "display", "-webkit-flex", "display", "flex", "/* center vertically */\n        align-items", "center", "/*center horizontaly */\n        justify-content", "center", "/*center horizontaly ie */\n        -ms-flex-pack", "center"], [1, "container", 2, "align-items", "center", "text-align", "center"], [1, "row"], [1, "card", 2, "width", "18rem", "margin", "20px"], ["src", "./assets/img/card/mundoDigital.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "../../../assets/img/pdf/artigoQualMelhorSite.pdf", "target", "_blank", 1, "col-12", "btn", "btn-outline-default", "download-link", "btn-round"], ["src", "./assets/img/card/lgpd.jpg", "alt", "Card image cap", 1, "card-img-top"], ["href", "../../../assets/img/pdf/leiGeralProte\u00E7\u00E3oDadosPessoais.pdf", "target", "blank", 1, "col-12", "btn", "btn-outline-default", "btn-round"], ["src", "./assets/img/card/usabilit.jpg", "alt", "Card image cap", 1, "card-img-top", 2, "height", "170px"], ["href", "../../../assets/img/pdf/usabilidade.pdf", "target", "blank", 1, "col-12", "btn", "btn-outline-default", "btn-round"], ["src", "./assets/img/card/socialRedes.jpg", "alt", "Card image cap", 1, "card-img-top"], ["href", "../../../assets/img/pdf/socialRedes.pdf", "target", "blank", 1, "col-12", "btn", "btn-outline-default", "btn-round"]], template: function ServicosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Qual \u00E9 o melhor site?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Descubra qual \u00E9 o melhor site para voc\u1EBD, qual destas categorias se encaixa para o seu investimento!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ACESSAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "(LGPD) como funciona?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "A Lei Geral de Prote\u00E7\u00E3o de Dados Pessoais, Lei n\u00BA 13.709/2018.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ACESSAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Usabilidade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Padr\u00F5es Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Definida como o estudo ou a aplica\u00E7\u00E3o de t\u00E9cnicas de uso de sites.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "ACESSAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Redes Sociais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Definida como o estudo ou a aplica\u00E7\u00E3o de t\u00E9cnicas que proporcionem a facilidade de uso de sites.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "ACESSAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1bWFocy9zZXJ2aWNvcy9zZXJ2aWNvcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-servicos',
                templateUrl: './servicos.component.html',
                styleUrls: ['./servicos.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/puma/Documents/cursos/pumahswebsite/pumahswebsite/src/main.ts */"zUnb");


/***/ }),

/***/ "3tRH":
/*!********************************************!*\
  !*** ./src/app/pumahs/pumahs.component.ts ***!
  \********************************************/
/*! exports provided: PumahsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PumahsComponent", function() { return PumahsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class PumahsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PumahsComponent.ɵfac = function PumahsComponent_Factory(t) { return new (t || PumahsComponent)(); };
PumahsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PumahsComponent, selectors: [["app-pumahs"]], decls: 2, vars: 0, template: function PumahsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pumahs works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1bWFocy9wdW1haHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PumahsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pumahs',
                templateUrl: './pumahs.component.html',
                styleUrls: ['./pumahs.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4rXd":
/*!***************************************************!*\
  !*** ./src/app/pumahs/planos/planos.component.ts ***!
  \***************************************************/
/*! exports provided: PlanosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanosComponent", function() { return PlanosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class PlanosComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlanosComponent.ɵfac = function PlanosComponent_Factory(t) { return new (t || PlanosComponent)(); };
PlanosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanosComponent, selectors: [["app-planos"]], decls: 121, vars: 0, consts: [[1, "wrapper", 2, "background-color", "black"], [1, "section-dark", 2, "background-image", "url('assets/img/clientes/wallpaper-001.jpg')", "background-size", "cover", "min-height", "100vh", "max-height", "100%", "overflow", "hidden", "position", "relative", "width", "100%", "z-index", "1", "display", "-ms-flexbox", "display", "-webkit-flex", "display", "flex", "/* center vertically */\n        align-items", "center", "/*center horizontaly */\n        justify-content", "center", "/*center horizontaly ie */\n        -ms-flex-pack", "center"], [1, "container", 2, "align-items", "center"], [1, "row"], [1, "col-12"], [1, "warpper"], ["id", "one", "name", "group", "type", "radio", "checked", "", 1, "radio"], ["id", "two", "name", "group", "type", "radio", 1, "radio"], ["id", "three", "name", "group", "type", "radio", 1, "radio"], ["id", "four", "name", "group", "type", "radio", 1, "radio"], ["id", "five", "name", "group", "type", "radio", 1, "radio"], [1, "tabs"], ["id", "one-tab", "for", "one", 1, "tab"], ["id", "two-tab", "for", "two", 1, "tab"], ["id", "three-tab", "for", "three", 1, "tab"], ["id", "four-tab", "for", "four", 1, "tab"], ["id", "five-tab", "for", "five", 1, "tab"], [1, "col-12", "panels"], ["id", "one-panel", 1, "panel"], [1, "panel-title"], [2, "color", "red", "text-align", "right"], ["id", "two-panel", 1, "panel"], [2, "color", "red", "text-align", "right", "font", "bold"], ["id", "three-panel", 1, "panel"], ["id", "four-panel", 1, "panel"], ["id", "five-panel", 1, "panel"]], template: function PlanosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "One-Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Multi-Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Landing-Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "E-commerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Hot-Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Vamos colocar a sua ideia em a\u00E7\u00E3o!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "One-Page r\u00E1pido e leve!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Tudo em uma unica pagina de rolagem, um website limpo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " (clean-page). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " transformando a criatividade e ideias ao seu gosto, seja para uso pessoal, profissional ou empresa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " O conte\u00FAdo apresentado ser\u00E1 com um layout apropriado e responsivo. visualiza\u00E7\u00E3o em computadores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "(Desktop)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ", celulares ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "(Mobile)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ", Tablets etc ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Temos o plano que cabe no seu bolso.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Vamos colocar a sua ideia em a\u00E7\u00E3o!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Multi-Page r\u00E1pido e leve!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Um investimento apropriado para quem deseja disponibilizar uma gama de conte\u00FAdo. Utilizando paginas com layout personalizados, a divulga\u00E7\u00E3o direcionada ao seus visitantes e leitores. Contudo Menus e submenus organizados de forma intuitiva tornando f\u00E1cil a navega\u00E7\u00E3o em um website responsivo. visualiza\u00E7\u00E3o em computadores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "(Desktop)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ", celulares ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "(Mobile)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ", Tablets etc ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Temos o plano que cabe no seu bolso.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Vamos colocar a sua ideia em a\u00E7\u00E3o!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Landing-Page r\u00E1pido e leve!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " O marketing digital est\u00E1 voando em seus investimento, buscando encontrar seu p\u00FAblico alvo. Tornando cada ve mais atraente seus objetivos. Videos imagens e mais. Tudo para conquistar e fidelizar seus clientes ou publico alvo. Promo\u00E7\u00F5es, Alertas, Divulga\u00E7\u00F5es rel\u00E2mpago... visualiza\u00E7\u00E3o em computadores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "(Desktop)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ", celulares ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "(Mobile)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, ", Tablets etc ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Temos o plano que cabe no seu bolso.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Vamos colocar a sua ideia em a\u00E7\u00E3o!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "E-commerce r\u00E1pido e leve!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Sua loja virtual de uma forma atraente e com layout personalizado, uma loja online hoje \u00E9 o que mais atrai o publico. a facilidade de compra com seguran\u00E7a e suas variedades de produtos apresentados faz com que os investimentos sejam alcan\u00E7ados. desenvolvendo um website responsivo para visualiza\u00E7\u00E3o em computadores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "(Desktop)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, ", celulares ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "(Mobile)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ", Tablets etc ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Temos o plano que cabe no seu bolso.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Vamos colocar a sua ideia em a\u00E7\u00E3o!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Hot-Site r\u00E1pido e leve!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Quem nunca se interessou em uma campanha quente de um lan\u00E7amento ou promo\u00E7\u00E3o chamativa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Este investimento \u00E9 para quem deseja impactar com seus an\u00FAncios, chegar provocando o publico alvo e alcan\u00E7ando o m\u00E1ximo de pessoas em menos tempo. Desenvolvendo um website responsivo para visualiza\u00E7\u00E3o em computadores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "(Desktop)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, ", celulares ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "(Mobile)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, ", Tablets etc ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Temos o plano que cabe no seu bolso.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h2[_ngcontent-%COMP%]{\n  color:#000;\n  text-align:center;\n  font-size:2em;\n}\n.warpper[_ngcontent-%COMP%]{\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n}\n.tab[_ngcontent-%COMP%]{\n  cursor: pointer;\n  padding:10px 20px;\n  margin:0px 2px;\n  background:rgba(27, 27, 27, 0.733);\n  display:inline-block;\n  color:#fff;\n  border-radius:3px 3px 0px 0px;\n  box-shadow: 0 0.5rem 0.8rem #00000080;\n}\n.panels[_ngcontent-%COMP%]{\n  background:#fffffff6;\n  box-shadow: 0 2rem 2rem #00000080;\n  min-height:200px;\n  width:100%;\n  max-width:800px;\n  border-radius:3px;\n  overflow:hidden;\n  padding:20px;  \n}\n.panel[_ngcontent-%COMP%]{\n  display:none;\n  animation: fadein .8s;\n}\n@keyframes fadein {\n    from {\n        opacity:0;\n    }\n    to {\n        opacity:1;\n    }\n}\n.panel-title[_ngcontent-%COMP%]{\n  font-size:1.5em;\n  font-weight:bold\n}\n.radio[_ngcontent-%COMP%]{\n  display:none;\n}\n#one[_ngcontent-%COMP%]:checked    ~ .panels[_ngcontent-%COMP%]   #one-panel[_ngcontent-%COMP%], #two[_ngcontent-%COMP%]:checked    ~ .panels[_ngcontent-%COMP%]   #two-panel[_ngcontent-%COMP%], #four[_ngcontent-%COMP%]:checked    ~ .panels[_ngcontent-%COMP%]   #four-panel[_ngcontent-%COMP%], #five[_ngcontent-%COMP%]:checked    ~ .panels[_ngcontent-%COMP%]   #five-panel[_ngcontent-%COMP%], #three[_ngcontent-%COMP%]:checked    ~ .panels[_ngcontent-%COMP%]   #three-panel[_ngcontent-%COMP%]{\n  display:block\n}\n#one[_ngcontent-%COMP%]:checked    ~ .tabs[_ngcontent-%COMP%]   #one-tab[_ngcontent-%COMP%], #two[_ngcontent-%COMP%]:checked    ~ .tabs[_ngcontent-%COMP%]   #two-tab[_ngcontent-%COMP%], #four[_ngcontent-%COMP%]:checked    ~ .tabs[_ngcontent-%COMP%]   #four-tab[_ngcontent-%COMP%], #five[_ngcontent-%COMP%]:checked    ~ .tabs[_ngcontent-%COMP%]   #five-tab[_ngcontent-%COMP%], #three[_ngcontent-%COMP%]:checked    ~ .tabs[_ngcontent-%COMP%]   #three-tab[_ngcontent-%COMP%]{\n  background:#fffffff6;\n  color:#000;\n  border-top: 3px solid #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVtYWhzL3BsYW5vcy9wbGFub3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0g7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFDQTtJQUNJO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7QUFDSjtBQUNBO0VBQ0UsZUFBZTtFQUNmO0FBQ0Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBOzs7OztFQUtFO0FBQ0Y7QUFDQTs7Ozs7RUFLRSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3B1bWFocy9wbGFub3MvcGxhbm9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFyaW1vOjQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5ib2R5e1xuICBiYWNrZ3JvdW5kOiNDRERDMzk7XG4gIGZvbnQtZmFtaWx5OiAnQXJpbW8nLCBzYW5zLXNlcmlmO1xufSAqL1xuaDJ7XG4gIGNvbG9yOiMwMDA7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBmb250LXNpemU6MmVtO1xufVxuLndhcnBwZXJ7XG4gIGRpc3BsYXk6ZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50YWJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzoxMHB4IDIwcHg7XG4gIG1hcmdpbjowcHggMnB4O1xuICBiYWNrZ3JvdW5kOnJnYmEoMjcsIDI3LCAyNywgMC43MzMpO1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgY29sb3I6I2ZmZjtcbiAgYm9yZGVyLXJhZGl1czozcHggM3B4IDBweCAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDAuOHJlbSAjMDAwMDAwODA7XG59XG4ucGFuZWxze1xuICBiYWNrZ3JvdW5kOiNmZmZmZmZmNjtcbiAgYm94LXNoYWRvdzogMCAycmVtIDJyZW0gIzAwMDAwMDgwO1xuICBtaW4taGVpZ2h0OjIwMHB4O1xuICB3aWR0aDoxMDAlO1xuICBtYXgtd2lkdGg6ODAwcHg7XG4gIGJvcmRlci1yYWRpdXM6M3B4O1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIHBhZGRpbmc6MjBweDsgIFxufVxuLnBhbmVse1xuICBkaXNwbGF5Om5vbmU7XG4gIGFuaW1hdGlvbjogZmFkZWluIC44cztcbn1cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG4ucGFuZWwtdGl0bGV7XG4gIGZvbnQtc2l6ZToxLjVlbTtcbiAgZm9udC13ZWlnaHQ6Ym9sZFxufVxuLnJhZGlve1xuICBkaXNwbGF5Om5vbmU7XG59XG4jb25lOmNoZWNrZWQgfiAucGFuZWxzICNvbmUtcGFuZWwsXG4jdHdvOmNoZWNrZWQgfiAucGFuZWxzICN0d28tcGFuZWwsXG4jZm91cjpjaGVja2VkIH4gLnBhbmVscyAjZm91ci1wYW5lbCxcbiNmaXZlOmNoZWNrZWQgfiAucGFuZWxzICNmaXZlLXBhbmVsLFxuI3RocmVlOmNoZWNrZWQgfiAucGFuZWxzICN0aHJlZS1wYW5lbHtcbiAgZGlzcGxheTpibG9ja1xufVxuI29uZTpjaGVja2VkIH4gLnRhYnMgI29uZS10YWIsXG4jdHdvOmNoZWNrZWQgfiAudGFicyAjdHdvLXRhYixcbiNmb3VyOmNoZWNrZWQgfiAudGFicyAjZm91ci10YWIsXG4jZml2ZTpjaGVja2VkIH4gLnRhYnMgI2ZpdmUtdGFiLFxuI3RocmVlOmNoZWNrZWQgfiAudGFicyAjdGhyZWUtdGFie1xuICBiYWNrZ3JvdW5kOiNmZmZmZmZmNjtcbiAgY29sb3I6IzAwMDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMwMDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-planos',
                templateUrl: './planos.component.html',
                styleUrls: ['./planos.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Dj7g":
/*!***************************************************!*\
  !*** ./src/app/common/mobile/mobile.component.ts ***!
  \***************************************************/
/*! exports provided: MobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileComponent", function() { return MobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



const _c0 = function () { return ["/dashboard"]; };
const _c1 = function () { return ["/servicos"]; };
const _c2 = function () { return ["/quemsomos"]; };
const _c3 = function () { return ["/artigos"]; };
const _c4 = function () { return ["/clientes"]; };
const _c5 = function () { return ["/contato"]; };
class MobileComponent {
    constructor() { }
    ngOnInit() {
    }
}
MobileComponent.ɵfac = function MobileComponent_Factory(t) { return new (t || MobileComponent)(); };
MobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileComponent, selectors: [["app-mobile"]], decls: 46, vars: 12, consts: [["id", "kt_header_mobile", 1, "header-mobile", "align-items-center", "header-mobile-fixed"], [3, "routerLink"], [1, "d-flex", "align-items-center"], [1, "btn", "btn-icon", "btn-clean", "btn-dropdown", "btn-lg", "mr-1", "pulse", "pulse-primary"], [1, "svg-icon", "svg-icon-xl", "svg-icon-primary"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["x", "0", "y", "0", "width", "24", "height", "24"], ["d", "M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z", "fill", "#000000", "opacity", "0.3"], ["d", "M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z", "fill", "#000000"], [1, "pulse-ring"], [1, "svg-icon", "svg-icon-primary", "svg-icon-2x"], ["d", "M13.6855025,18.7082217 C15.9113859,17.8189707 18.682885,17.2495635 22,17 C22,16.9325178 22,13.1012863 22,5.50630526 L21.9999762,5.50630526 C21.9999762,5.23017604 21.7761292,5.00632908 21.5,5.00632908 C21.4957817,5.00632908 21.4915635,5.00638247 21.4873465,5.00648922 C18.658231,5.07811173 15.8291155,5.74261533 13,7 C13,7.04449645 13,10.79246 13,18.2438906 L12.9999854,18.2438906 C12.9999854,18.520041 13.2238496,18.7439052 13.5,18.7439052 C13.5635398,18.7439052 13.6264972,18.7317946 13.6855025,18.7082217 Z", "fill", "#000000"], ["d", "M10.3144829,18.7082217 C8.08859955,17.8189707 5.31710038,17.2495635 1.99998542,17 C1.99998542,16.9325178 1.99998542,13.1012863 1.99998542,5.50630526 L2.00000925,5.50630526 C2.00000925,5.23017604 2.22385621,5.00632908 2.49998542,5.00632908 C2.50420375,5.00632908 2.5084219,5.00638247 2.51263888,5.00648922 C5.34175439,5.07811173 8.17086991,5.74261533 10.9999854,7 C10.9999854,7.04449645 10.9999854,10.79246 10.9999854,18.2438906 L11,18.2438906 C11,18.520041 10.7761358,18.7439052 10.4999854,18.7439052 C10.4364457,18.7439052 10.3734882,18.7317946 10.3144829,18.7082217 Z", "fill", "#000000", "opacity", "0.3"], ["fill", "#000000", "x", "4", "y", "5", "width", "16", "height", "3", "rx", "1.5"], ["d", "M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L12.5,10 C13.3284271,10 14,10.6715729 14,11.5 C14,12.3284271 13.3284271,13 12.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z", "fill", "#000000", "opacity", "0.3"], ["d", "M8,17 C8.55228475,17 9,17.4477153 9,18 L9,21 C9,21.5522847 8.55228475,22 8,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,18 C2,17.4477153 2.44771525,17 3,17 L3,16.5 C3,15.1192881 4.11928813,14 5.5,14 C6.88071187,14 8,15.1192881 8,16.5 L8,17 Z M5.5,15 C4.67157288,15 4,15.6715729 4,16.5 L4,17 L7,17 L7,16.5 C7,15.6715729 6.32842712,15 5.5,15 Z", "fill", "#000000", "opacity", "0.3"], ["d", "M2,11.8650466 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.23590829,11 3.04485894,11.3127315 2,11.8650466 Z M6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 L15,9 C15.5522847,9 16,8.55228475 16,8 C16,7.44771525 15.5522847,7 15,7 L6,7 Z", "fill", "#000000"], ["fill", "#000000", "opacity", "0.3", "cx", "12", "cy", "12", "r", "10"], ["d", "M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 L7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z", "fill", "#000000", "opacity", "0.3"]], template: function MobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PumaHS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "rect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "rect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "rect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "rect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "rect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "circle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9tb2JpbGUvbW9iaWxlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile',
                templateUrl: './mobile.component.html',
                styleUrls: ['./mobile.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NZJM":
/*!*******************************************************!*\
  !*** ./src/app/pumahs/carousel/carousel.component.ts ***!
  \*******************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 20, vars: 0, consts: [[1, "entire-content"], [1, "content-carrousel"], [1, "shadow"], ["src", "../../../assets/img/projetos/siteVacinar.jpg"], ["src", "../../../assets/img/projetos/audiovoicer.jpg"], ["src", "../../../assets/img/projetos/ecommerce.jpg"], ["src", "../../../assets/img/projetos/leandro.jpg"], ["src", "../../../assets/img/projetos/profissionaisSa.jpg"], ["src", "../../../assets/img/projetos/edjTransfer.jpg"], ["src", "../../../assets/img/projetos/leandroSite.jpg"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    } \nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n    max-width: 100%;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    background-image: #6adecd\n    } \n#slideshow[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-top: 20px;\n    height: 100px;\n    width: 100%;\n    \n    \n    box-sizing: border-box;\n    } \n.slideshow-title[_ngcontent-%COMP%] {\n    font-family: 'Allerta Stencil';\n    font-size: 62px;\n    color: #fff;\n    margin: 10%;\n    text-align: center;\n    margin-top: 5%;\n    letter-spacing: 3px;\n    font-weight: 300;\n    } \n.sub-heading[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    font-size: 18px;\n    } \n.sub-heading-two[_ngcontent-%COMP%] {\n    font-size: 15px;\n    } \n.sub-heading-three[_ngcontent-%COMP%] {\n    font-size: 13px;\n    } \n.sub-heading-four[_ngcontent-%COMP%] {\n    font-size: 11px;\n    } \n.sub-heading-five[_ngcontent-%COMP%] {\n    font-size: 9px;\n    } \n.sub-heading-six[_ngcontent-%COMP%] {\n    font-size: 7px;\n    } \n.sub-heading-seven[_ngcontent-%COMP%] {\n    font-size: 5px;\n    } \n.sub-heading-eight[_ngcontent-%COMP%] {\n    font-size: 3px;\n    } \n.sub-heading-nine[_ngcontent-%COMP%] {\n    font-size: 1px;\n    } \n.entire-content[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 190px;\n    perspective: 1000px;\n    position: relative;\n    padding-top: 80px;\n    } \n.content-carrousel[_ngcontent-%COMP%] {\n    width: 100%;\n    position: absolute;\n    float: right;\n    animation: rotar 15s infinite linear;\n    transform-style: preserve-3d;\n    } \n.content-carrousel[_ngcontent-%COMP%]:hover {\n    animation-play-state: paused;\n    cursor: pointer;\n    } \n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 120px;\n    \n    overflow: hidden;\n    position: absolute;\n    } \n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(1) {\n    transform: rotateY(0deg) translateZ(300px); \n    } \n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(2) {\n    transform: rotateY(40deg) translateZ(300px); \n    } \n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(3) {\n    transform: rotateY(80deg) translateZ(300px); \n    } \n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(4) {\n    transform: rotateY(120deg) translateZ(300px); \n    } \n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(5) {\n    transform: rotateY(160deg) translateZ(300px); \n    } \n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(6) {\n    transform: rotateY(200deg) translateZ(300px); \n    } \n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(7) {\n    transform: rotateY(240deg) translateZ(300px); \n    } \n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(8) {\n    transform: rotateY(280deg) translateZ(300px); \n    } \n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(9) {\n    transform: rotateY(320deg) translateZ(300px); \n    } \n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(10) {\n    transform: rotateY(360deg) translateZ(300px); \n    } \n.shadow[_ngcontent-%COMP%] {\n        position: absolute;\n        box-shadow: 0px 0px 20px 0px #000;\n        border-radius: 1px;\n    } \n.content-carrousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    image-rendering: auto;\n    transition: all 300ms;\n    width: 100%;\n    height: 100%;\n    } \n.content-carrousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n    transform: scale(1.2);\n    transition: all 300ms;\n    } \n@keyframes rotar {\n    from {\n    transform: rotateY(0deg);\n    } to {\n    transform: rotateY(360deg);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVtYWhzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FBQ2pCO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVjtBQUVBO0lBQ0EsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEI7SUFDQTtBQUVBO0lBQ0EsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixzREFBc0Q7SUFDdEQsc0JBQXNCO0lBQ3RCO0FBRUE7SUFDQSw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCO0FBRUE7SUFDQSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmO0FBQUU7SUFDRixlQUFlO0lBQ2Y7QUFBRTtJQUNGLGVBQWU7SUFDZjtBQUFFO0lBQ0YsZUFBZTtJQUNmO0FBQUU7SUFDRixjQUFjO0lBQ2Q7QUFBRTtJQUNGLGNBQWM7SUFDZDtBQUFFO0lBQ0YsY0FBYztJQUNkO0FBQUU7SUFDRixjQUFjO0lBQ2Q7QUFBRTtJQUNGLGNBQWM7SUFDZDtBQUVBO0lBQ0EsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQjtBQUVBO0lBQ0EsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QjtBQUVBO0lBQ0EsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZjtBQUVBO0lBQ0EsV0FBVztJQUNYLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQjtBQUVBO0lBQ0EsMENBQTBDO0lBQzFDO0FBQUU7SUFDRiwyQ0FBMkM7SUFDM0M7QUFBRTtJQUNGLDJDQUEyQztJQUMzQztBQUFFO0lBQ0YsNENBQTRDO0lBQzVDO0FBQUU7SUFDRiw0Q0FBNEM7SUFDNUM7QUFBRTtJQUNGLDRDQUE0QztJQUM1QztBQUFFO0lBQ0YsNENBQTRDO0lBQzVDO0FBQUU7SUFDRiw0Q0FBNEM7SUFDNUM7QUFBRTtJQUNGLDRDQUE0QztJQUM1QztBQUFFO0lBQ0YsNENBQTRDO0lBQzVDO0FBRUE7UUFDSSxrQkFBa0I7UUFDbEIsaUNBQWlDO1FBQ2pDLGtCQUFrQjtJQUN0QjtBQUVBO0lBQ0EscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBRUE7SUFDQSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCO0FBRUE7SUFDQTtJQUNBLHdCQUF3QjtJQUN4QixFQUFFO0lBQ0YsMEJBQTBCO0lBQzFCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wdW1haHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIDNEIFNsaWRlc2hvdyAqLyBcbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICBcbiAgICBodG1sLCBib2R5IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAjNmFkZWNkXG4gICAgfVxuICAgIFxuICAgICNzbGlkZXNob3cge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBcInNyYy9hc3NldHMvaW1nL3NsaWRlci8xMS5qcGdcIjsgKi9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgICBcbiAgICAuc2xpZGVzaG93LXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0FsbGVydGEgU3RlbmNpbCc7XG4gICAgZm9udC1zaXplOiA2MnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuICAgIFxuICAgIC5zdWItaGVhZGluZyB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH0gLnN1Yi1oZWFkaW5nLXR3byB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH0gLnN1Yi1oZWFkaW5nLXRocmVlIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfSAuc3ViLWhlYWRpbmctZm91ciB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH0gLnN1Yi1oZWFkaW5nLWZpdmUge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIH0gLnN1Yi1oZWFkaW5nLXNpeCB7XG4gICAgZm9udC1zaXplOiA3cHg7XG4gICAgfSAuc3ViLWhlYWRpbmctc2V2ZW4ge1xuICAgIGZvbnQtc2l6ZTogNXB4O1xuICAgIH0gLnN1Yi1oZWFkaW5nLWVpZ2h0IHtcbiAgICBmb250LXNpemU6IDNweDtcbiAgICB9IC5zdWItaGVhZGluZy1uaW5lIHtcbiAgICBmb250LXNpemU6IDFweDtcbiAgICB9XG4gICAgXG4gICAgLmVudGlyZS1jb250ZW50IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgIH1cbiAgICBcbiAgICAuY29udGVudC1jYXJyb3VzZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYW5pbWF0aW9uOiByb3RhciAxNXMgaW5maW5pdGUgbGluZWFyO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgfVxuICAgIFxuICAgIC5jb250ZW50LWNhcnJvdXNlbDpob3ZlciB7XG4gICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5jb250ZW50LWNhcnJvdXNlbCBmaWd1cmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgIzNiNDQ0YjsgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRlbnQtY2Fycm91c2VsIGZpZ3VyZTpudGgtY2hpbGQoMSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDMwMHB4KTsgXG4gICAgfSAuY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCgyKSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDQwZGVnKSB0cmFuc2xhdGVaKDMwMHB4KTsgXG4gICAgfSAuY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCgzKSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDgwZGVnKSB0cmFuc2xhdGVaKDMwMHB4KTsgXG4gICAgfSAuY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCg0KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDEyMGRlZykgdHJhbnNsYXRlWigzMDBweCk7IFxuICAgIH0gLmNvbnRlbnQtY2Fycm91c2VsIGZpZ3VyZTpudGgtY2hpbGQoNSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxNjBkZWcpIHRyYW5zbGF0ZVooMzAwcHgpOyBcbiAgICB9IC5jb250ZW50LWNhcnJvdXNlbCBmaWd1cmU6bnRoLWNoaWxkKDYpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjAwZGVnKSB0cmFuc2xhdGVaKDMwMHB4KTsgXG4gICAgfSAuY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCg3KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDI0MGRlZykgdHJhbnNsYXRlWigzMDBweCk7IFxuICAgIH0gLmNvbnRlbnQtY2Fycm91c2VsIGZpZ3VyZTpudGgtY2hpbGQoOCkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyODBkZWcpIHRyYW5zbGF0ZVooMzAwcHgpOyBcbiAgICB9IC5jb250ZW50LWNhcnJvdXNlbCBmaWd1cmU6bnRoLWNoaWxkKDkpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzIwZGVnKSB0cmFuc2xhdGVaKDMwMHB4KTsgXG4gICAgfSAuY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCgxMCkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpIHRyYW5zbGF0ZVooMzAwcHgpOyBcbiAgICB9IFxuICAgIFxuICAgIC5zaGFkb3cge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggIzAwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgIH1cbiAgICBcbiAgICAuY29udGVudC1jYXJyb3VzZWwgaW1nIHtcbiAgICBpbWFnZS1yZW5kZXJpbmc6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRlbnQtY2Fycm91c2VsIGltZzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgICB9XG4gICAgXG4gICAgQGtleWZyYW1lcyByb3RhciB7XG4gICAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIH0gdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "P0Gm":
/*!*********************************************************!*\
  !*** ./src/app/pumahs/ecommerce/ecommerce.component.ts ***!
  \*********************************************************/
/*! exports provided: EcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function() { return EcommerceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class EcommerceComponent {
    constructor() { }
    ngOnInit() {
    }
}
EcommerceComponent.ɵfac = function EcommerceComponent_Factory(t) { return new (t || EcommerceComponent)(); };
EcommerceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EcommerceComponent, selectors: [["app-ecommerce"]], decls: 2, vars: 0, template: function EcommerceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ecommerce works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1bWFocy9lY29tbWVyY2UvZWNvbW1lcmNlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcommerceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ecommerce',
                templateUrl: './ecommerce.component.html',
                styleUrls: ['./ecommerce.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QYrp":
/*!*************************************************************!*\
  !*** ./src/app/pumahs/single-page/single-page.component.ts ***!
  \*************************************************************/
/*! exports provided: SinglePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePageComponent", function() { return SinglePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class SinglePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
SinglePageComponent.ɵfac = function SinglePageComponent_Factory(t) { return new (t || SinglePageComponent)(); };
SinglePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SinglePageComponent, selectors: [["app-single-page"]], decls: 17, vars: 0, consts: [[1, "wrapper", 2, "background-color", "black"], [1, "page-header", "section-dark", 2, "background-image", "url('assets/img/wallpaper-001.jpg')", "background-size", "cover", "height", "300px"], [1, "row", "container"], [1, "col-3"], [1, "card"], [1, "card-image"], [1, "card-text", 2, "background-color", "azure"], [1, "date"], ["src", "./assets/img/projetos/siteVacinar.jpg", "alt", "Imuniza\u00E7\u00E3o Vacinar", 1, "img-rounded", "img-responsive", 2, "width", "250px", "height", "200px"]], template: function SinglePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "4 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Single-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00C9 um aplicativo da web ou site que interage com o usu\u00E1rio reescrevendo dinamicamente ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1bWFocy9zaW5nbGUtcGFnZS9zaW5nbGUtcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SinglePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-page',
                templateUrl: './single-page.component.html',
                styleUrls: ['./single-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _common_mobile_mobile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/mobile/mobile.component */ "Dj7g");
/* harmony import */ var _common_subheader_subheader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/subheader/subheader.component */ "oari");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/footer/footer.component */ "acaO");






class AppComponent {
    constructor() {
        this.title = 'pumaWEBSITE';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "d-flex", "flex-column", "flex-root"], [1, "d-flex", "flex-row", "flex-column-fluid", "page"], ["id", "kt_wrapper", 1, "d-flex", "flex-column", "flex-row-fluid"], [1, "overlay"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-subheader", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_common_mobile_mobile_component__WEBPACK_IMPORTED_MODULE_1__["MobileComponent"], _common_subheader_subheader_component__WEBPACK_IMPORTED_MODULE_2__["SubheaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".overlay[_ngcontent-%COMP%] { position:absolute; top: 90px; left: 550px; }\n\n\n\n@media only screen and (max-width: 980px){\n    .overlay[_ngcontent-%COMP%] { display: none; }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFOztBQUV0RCxvSEFBb0g7O0FBQ3BIO0lBQ0ksV0FBVyxhQUFhLEVBQUU7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHsgcG9zaXRpb246YWJzb2x1dGU7IHRvcDogOTBweDsgbGVmdDogNTUwcHg7IH1cblxuLypFc2NvbmRlIGEgZGl2ZSBkZSBjbGFzc2UgT3ZlcmxheSBjYXNvIHNlamEgaWRlbnRpZmljYWRvIHF1ZSBvIHdpZHRoIE1vYmlsZSBtYXhpbW8gZGVzZWphIGlndWFsIG91IG1lbm9yIHF1ZSA5ODBweCovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KXtcbiAgICAub3ZlcmxheSB7IGRpc3BsYXk6IG5vbmU7IH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Xro/":
/*!*****************************************************!*\
  !*** ./src/app/pumahs/contact/contact.component.ts ***!
  \*****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _service_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/email.service */ "+NcZ");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-mask */ "bOtU");






class ContactComponent {
    constructor(formBuilder, emailService) {
        this.formBuilder = formBuilder;
        this.emailService = emailService;
        this.form = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            celular: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            mensagem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    get f() { return this.form.controls; }
    ngOnInit() {
    }
    post() {
        const body = {
            to: 'cosclerison@gmail.com',
            subject: 'PumaHS Contato',
            // Corpo da mensagem enviada por email para o gestor
            content: `<h1>${this.f.nome.value}</h1><br />
                <h3>${this.f.celular.value}</h3>
                <h3>${this.f.email.value}</h3>
                <p>${this.f.mensagem.value}</p>`
        };
        this.emailService.enviar(body)
            .subscribe(envioEmail => {
            // console.log(this.form);
        });
        if (this.form.valid) {
            alert('E-mail enviado com sucesso!');
            // alert(`${body}`);
            this.form.reset();
        }
        else {
            alert('E-mail não enviado!');
        }
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 73, vars: 1, consts: [[1, "wrapper", 2, "background-color", "black"], [1, "section-dark", 2, "background-image", "url('assets/img/clientes/wallpaper-001.jpg')", "background-size", "cover", "min-height", "100vh", "max-height", "100%", "overflow", "hidden", "position", "relative", "width", "100%", "z-index", "1", "display", "-ms-flexbox", "display", "-webkit-flex", "display", "flex", "/* center vertically */\n        align-items", "center", "/*center horizontaly */\n        justify-content", "center", "/*center horizontaly ie */\n        -ms-flex-pack", "center"], [1, "container"], [1, "row"], [1, "col-lg-4"], [1, "text-white", 2, "text-decoration-color", "black", "text-align", "justify"], [1, "alert", "alert-dark"], ["href", "https://www.facebook.com/pumahardsoft/"], ["href", "https://www.instagram.com/pumahardsoft/"], ["href", "https://wa.me/5511998901467?text=Seja Bem Vindo a Puma Hatd Soft ! Atendimento em hor\u00E1rio comercial. Obrigado"], [3, "formGroup"], [1, "text-white", 2, "text-decoration-color", "black"], [1, "form-group"], [1, "text-light", 2, "width", "6rem"], ["type", "text", "placeholder", "Nome", "formControlName", "nome", "required", "", 1, "form-control"], ["type", "text", "placeholder", "(00) 00000-0000", "mask", "(00) 00000-0000", "formControlName", "celular", "required", "", 1, "form-control"], ["type", "email", "placeholder", "email@email.com", "formControlName", "email", "required", "", "email", "", 1, "form-control"], ["formControlName", "mensagem", "placeholder", "Digite aqui ...", "rows", "2", "required", "", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Exitem in\u00FAmeros meios de contatos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Assim como podemos utilizar-los ao nosso favor. Uma ferramenta crucial para n\u00F3s, nos dias de hoje, ferramentas que nos tr\u00E1s agilidade e desempenho. Seja por mensagem ou auto respostas um meio de comunica\u00E7\u00E3o que visa manter uma qualidade em seu favorecimento de utiliza\u00E7\u00E3o.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Nossos contatos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Email: pumahs@pumahs.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Celular: (11) 99890-1467");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " E por meios de");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Redes Sociais");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " acesse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "WhatsApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "A Puma Hard Soft aguarda o seu contato.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Celular");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Mensagem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_71_listener() { return ctx.post(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], ngx_mask__WEBPACK_IMPORTED_MODULE_3__["MaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["EmailValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1bWFocy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _service_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"] }]; }, null); })();


/***/ }),

/***/ "Xyum":
/*!***************************************************!*\
  !*** ./src/app/pumahs/client/client.component.ts ***!
  \***************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel/carousel.component */ "NZJM");



class ClientComponent {
    constructor() { }
    ngOnInit() {
    }
}
ClientComponent.ɵfac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(); };
ClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["app-client"]], decls: 13, vars: 0, consts: [[1, "wrapper", 2, "background-color", "black"], [1, "page-header", "section-dark", 2, "background-image", "url('assets/img/clientes/wallpaper-001.jpg')", "background-size", "cover"], [1, "row"], [1, "col-12", "text-white"], [1, ""], [1, "card-image"], [1, "badge", "badge-secondary"]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nossos clientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Click na imagem para acessar o WEB-SITE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1bWFocy9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client',
                templateUrl: './client.component.html',
                styleUrls: ['./client.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: options, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pumahs_pumahs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pumahs/pumahs.component */ "3tRH");
/* harmony import */ var _pumahs_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pumahs/dashboard/dashboard.component */ "ZIUu");
/* harmony import */ var _pumahs_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pumahs/about/about.component */ "qa8T");
/* harmony import */ var _pumahs_client_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pumahs/client/client.component */ "Xyum");
/* harmony import */ var _pumahs_project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pumahs/project/project.component */ "yXGk");
/* harmony import */ var _pumahs_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pumahs/contact/contact.component */ "Xro/");
/* harmony import */ var _pumahs_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pumahs/carousel/carousel.component */ "NZJM");
/* harmony import */ var _common_common_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/common.component */ "dPok");
/* harmony import */ var _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/menu/menu.component */ "aNIU");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/header/header.component */ "uU1w");
/* harmony import */ var _common_subheader_subheader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/subheader/subheader.component */ "oari");
/* harmony import */ var _common_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/home/home.component */ "vNcg");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/footer/footer.component */ "acaO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _pumahs_servicos_servicos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pumahs/servicos/servicos.component */ "/vi4");
/* harmony import */ var _pumahs_single_page_single_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pumahs/single-page/single-page.component */ "QYrp");
/* harmony import */ var _pumahs_multi_page_multi_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pumahs/multi-page/multi-page.component */ "rP3G");
/* harmony import */ var _pumahs_ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pumahs/ecommerce/ecommerce.component */ "P0Gm");
/* harmony import */ var _common_mobile_mobile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./common/mobile/mobile.component */ "Dj7g");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _pumahs_planos_planos_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pumahs/planos/planos.component */ "4rXd");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-mask */ "bOtU");





























const options = null;
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_26__["NgxMaskModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pumahs_pumahs_component__WEBPACK_IMPORTED_MODULE_5__["PumahsComponent"],
        _pumahs_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        _pumahs_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _pumahs_client_client_component__WEBPACK_IMPORTED_MODULE_8__["ClientComponent"],
        _pumahs_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
        _pumahs_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
        _pumahs_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"],
        _common_common_component__WEBPACK_IMPORTED_MODULE_12__["CommonComponent"],
        _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
        _common_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _common_subheader_subheader_component__WEBPACK_IMPORTED_MODULE_15__["SubheaderComponent"],
        _common_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
        _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
        _pumahs_servicos_servicos_component__WEBPACK_IMPORTED_MODULE_19__["ServicosComponent"],
        _pumahs_single_page_single_page_component__WEBPACK_IMPORTED_MODULE_20__["SinglePageComponent"],
        _pumahs_multi_page_multi_page_component__WEBPACK_IMPORTED_MODULE_21__["MultiPageComponent"],
        _pumahs_ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_22__["EcommerceComponent"],
        _common_mobile_mobile_component__WEBPACK_IMPORTED_MODULE_23__["MobileComponent"],
        _pumahs_planos_planos_component__WEBPACK_IMPORTED_MODULE_25__["PlanosComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_26__["NgxMaskModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pumahs_pumahs_component__WEBPACK_IMPORTED_MODULE_5__["PumahsComponent"],
                    _pumahs_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                    _pumahs_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _pumahs_client_client_component__WEBPACK_IMPORTED_MODULE_8__["ClientComponent"],
                    _pumahs_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
                    _pumahs_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                    _pumahs_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"],
                    _common_common_component__WEBPACK_IMPORTED_MODULE_12__["CommonComponent"],
                    _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
                    _common_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                    _common_subheader_subheader_component__WEBPACK_IMPORTED_MODULE_15__["SubheaderComponent"],
                    _common_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                    _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                    _pumahs_servicos_servicos_component__WEBPACK_IMPORTED_MODULE_19__["ServicosComponent"],
                    _pumahs_single_page_single_page_component__WEBPACK_IMPORTED_MODULE_20__["SinglePageComponent"],
                    _pumahs_multi_page_multi_page_component__WEBPACK_IMPORTED_MODULE_21__["MultiPageComponent"],
                    _pumahs_ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_22__["EcommerceComponent"],
                    _common_mobile_mobile_component__WEBPACK_IMPORTED_MODULE_23__["MobileComponent"],
                    _pumahs_planos_planos_component__WEBPACK_IMPORTED_MODULE_25__["PlanosComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_26__["NgxMaskModule"].forRoot(),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZIUu":
/*!*********************************************************!*\
  !*** ./src/app/pumahs/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel/carousel.component */ "NZJM");



class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 31, vars: 0, consts: [[1, "wrapper", 2, "background-color", "black"], [1, "section-dark", 2, "background-image", "url('assets/img/clientes/wallpaper-001.jpg')", "background-size", "cover", "min-height", "100vh", "max-height", "100%", "overflow", "hidden", "position", "relative", "width", "100%", "z-index", "1", "display", "-ms-flexbox", "display", "-webkit-flex", "display", "flex", "/* center vertically */\n        align-items", "center", "/*center horizontaly */\n        justify-content", "center", "/*center horizontaly ie */\n        -ms-flex-pack", "center"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "content-center"], [1, "sp-container"], [1, "sp-content"], [1, "sp-globe"], [1, "frame-1"], [1, "frame-2"], [1, "frame-3"], [1, "frame-4"], [1, "frame-5"], [1, "moving-clouds", 2, "background-image", "url('assets/img/dashboard/nuvem.png')"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ESTAMOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "AQUI PARA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "DESENVOLVER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "O SEU ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " WEB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " SITE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]], styles: ["*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    }\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n    max-width: 100%;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    background-image: #6adecd\n    }\n#slideshow[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-top: 20px;\n    height: 100px;\n    width: 100%;\n    \n    \n    box-sizing: border-box;\n    }\n.slideshow-title[_ngcontent-%COMP%] {\n    font-family: 'Allerta Stencil';\n    font-size: 62px;\n    color: #fff;\n    margin: 10%;\n    text-align: center;\n    margin-top: 5%;\n    letter-spacing: 3px;\n    font-weight: 300;\n    }\n.sub-heading[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    font-size: 18px;\n    }\n.sub-heading-two[_ngcontent-%COMP%] {\n    font-size: 15px;\n    }\n.sub-heading-three[_ngcontent-%COMP%] {\n    font-size: 13px;\n    }\n.sub-heading-four[_ngcontent-%COMP%] {\n    font-size: 11px;\n    }\n.sub-heading-five[_ngcontent-%COMP%] {\n    font-size: 9px;\n    }\n.sub-heading-six[_ngcontent-%COMP%] {\n    font-size: 7px;\n    }\n.sub-heading-seven[_ngcontent-%COMP%] {\n    font-size: 5px;\n    }\n.sub-heading-eight[_ngcontent-%COMP%] {\n    font-size: 3px;\n    }\n.sub-heading-nine[_ngcontent-%COMP%] {\n    font-size: 1px;\n    }\n.entire-content[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 190px;\n    perspective: 1000px;\n    position: relative;\n    padding-top: 80px;\n    }\n.content-carrousel[_ngcontent-%COMP%] {\n    width: 100%;\n    position: absolute;\n    float: right;\n    animation: rotar 15s infinite linear;\n    transform-style: preserve-3d;\n    }\n.content-carrousel[_ngcontent-%COMP%]:hover {\n    animation-play-state: paused;\n    cursor: pointer;\n    }\n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 120px;\n    \n    overflow: hidden;\n    position: absolute;\n    }\n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(1) {\n    transform: rotateY(0deg) translateZ(300px);\n    }\n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(2) {\n    transform: rotateY(40deg) translateZ(300px);\n    }\n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(3) {\n    transform: rotateY(80deg) translateZ(300px);\n    }\n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(4) {\n    transform: rotateY(120deg) translateZ(300px);\n    }\n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(5) {\n    transform: rotateY(160deg) translateZ(300px);\n    }\n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(6) {\n    transform: rotateY(200deg) translateZ(300px);\n    }\n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(7) {\n    transform: rotateY(240deg) translateZ(300px);\n    }\n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(8) {\n    transform: rotateY(280deg) translateZ(300px);\n    }\n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(9) {\n    transform: rotateY(320deg) translateZ(300px);\n    }\n.content-carrousel[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(10) {\n    transform: rotateY(360deg) translateZ(300px);\n    }\n.shadow[_ngcontent-%COMP%] {\n        position: absolute;\n        box-shadow: 0px 0px 20px 0px #000;\n        border-radius: 1px;\n    }\n.content-carrousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    image-rendering: auto;\n    transition: all 300ms;\n    width: 100%;\n    height: 100%;\n    }\n.content-carrousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n    transform: scale(1.2);\n    transition: all 300ms;\n    }\n@keyframes rotar {\n    from {\n    transform: rotateY(0deg);\n    } to {\n    transform: rotateY(360deg);\n    }\n}\n\n\np[_ngcontent-%COMP%] {\n    position: relative;\n    font-family: sans-serif;\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 3em;\n    letter-spacing: 4px;\n    overflow: hidden;\n    background: linear-gradient(90deg, #000, #fff, #000);\n    background-repeat: no-repeat;\n    background-size: 80%;\n    animation: animate 15s linear infinite;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: rgba(255, 255, 255, 0);\n  }\n@keyframes animate {\n    0% {\n      background-position: -500%;\n    }\n    100% {\n      background-position: 500%;\n    }\n  }\n\n\n.sp-container[_ngcontent-%COMP%] {\n\tposition: fixed;\n\ttop: 0px;\n\tleft: 0px;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 0;\n\tbackground: radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.7));\n}\n.sp-content[_ngcontent-%COMP%] {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tleft: 0px;\n\ttop: 0px;\n\tz-index: 1000;\n}\n.sp-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 50%;\n\tline-height: 100px;\n\theight: 90px;\n\tmargin-top: -50px;\n\tfont-size: 30px;\n    font-style: oblique;\n\twidth: 100%;\n\ttext-align: center;\n\tcolor: transparent;\n\tanimation: blurFadeInOut 3s ease-in backwards;\n}\n.sp-container[_ngcontent-%COMP%]   h3.frame-1[_ngcontent-%COMP%] {\n\tanimation-delay: 0s;\n}\n.sp-container[_ngcontent-%COMP%]   h3.frame-2[_ngcontent-%COMP%] {\n\tanimation-delay: 3s;\n}\n.sp-container[_ngcontent-%COMP%]   h3.frame-3[_ngcontent-%COMP%] {\n\tanimation-delay: 6s;\n}\n.sp-container[_ngcontent-%COMP%]   h3.frame-4[_ngcontent-%COMP%] {\n\tfont-size: 200px;\n\tanimation-delay: 9s;\n}\n.sp-container[_ngcontent-%COMP%]   h3.frame-5[_ngcontent-%COMP%] {\n\tanimation: none;\n\tcolor: transparent;\n\ttext-shadow: 0px 0px 1px #fff;\n}\n.sp-container[_ngcontent-%COMP%]   h3.frame-5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n\tanimation: blurFadeIn 3s ease-in 12s backwards;\n\tcolor: transparent;\n\ttext-shadow: 0px 0px 1px #fff;\n}\n.sp-container[_ngcontent-%COMP%]   h3.frame-5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n\tanimation-delay: 13s;\n}\n.sp-container[_ngcontent-%COMP%]   h3.frame-5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n\tanimation-delay: 14s;\n}\n.sp-globe[_ngcontent-%COMP%] {\n\tposition: absolute;\n\twidth: 282px;\n\theight: 273px;\n\tleft: 50%;\n\ttop: 50%;\n\tmargin: -137px 0 0 -141px;\n\t\n\tanimation: fadeInBack 3.6s linear 14s backwards;\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)\";\n\tfilter: alpha(opacity=30);\n\topacity: 0.3;\n\ttransform: scale(5);\n}\n.sp-circle-link[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tleft: 50%;\n\tbottom: 100px;\n\tmargin-left: -50px;\n\ttext-align: center;\n\tline-height: 100px;\n\twidth: 100px;\n\theight: 100px;\n\tbackground: #fff;\n\tcolor: #3f1616;\n\tfont-size: 25px;\n\tborder-radius: 50%;\n\tanimation: fadeInRotate 1s linear 16s backwards;\n\ttransform: scale(1) rotate(0deg);\n}\n.sp-circle-link[_ngcontent-%COMP%]:hover {\n\tbackground: #85373b;\n\tcolor: #fff;\n}\n\n\n\n@keyframes blurFadeInOut {\n\t0% {\n\t\topacity: 0;\n\t\ttext-shadow: 0px 0px 40px #fff;\n\t\ttransform: scale(1.3);\n\t}\n\t20%, 75% {\n\t\topacity: 1;\n\t\ttext-shadow: 0px 0px 1px #fff;\n\t\ttransform: scale(1);\n\t}\n\t100% {\n\t\topacity: 0;\n\t\ttext-shadow: 0px 0px 50px #fff;\n\t\ttransform: scale(0);\n\t}\n}\n@keyframes blurFadeIn {\n\t0% {\n\t\topacity: 0;\n\t\ttext-shadow: 0px 0px 40px #fff;\n\t\ttransform: scale(1.3);\n\t}\n\t50% {\n\t\topacity: 0.5;\n\t\ttext-shadow: 0px 0px 10px #fff;\n\t\ttransform: scale(1.1);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\ttext-shadow: 0px 0px 1px #fff;\n\t\ttransform: scale(1);\n\t}\n}\n@keyframes fadeInBack {\n\t0% {\n\t\topacity: 0;\n\t\ttransform: scale(0);\n\t}\n\t50% {\n\t\topacity: 0.4;\n\t\ttransform: scale(2);\n\t}\n\t100% {\n\t\topacity: 0.2;\n\t\ttransform: scale(5);\n\t}\n}\n@keyframes fadeInRotate {\n\t0% {\n\t\topacity: 0;\n\t\ttransform: scale(0) rotate(360deg);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\ttransform: scale(1) rotate(0deg);\n\t}\n}\n.promocao[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 10%;\n    right: 15%;\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVtYWhzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakI7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWO0FBRUE7SUFDQSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQjtJQUNBO0FBRUE7SUFDQSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLHNEQUFzRDtJQUN0RCxzQkFBc0I7SUFDdEI7QUFFQTtJQUNBLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEI7QUFFQTtJQUNBLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Y7QUFBRTtJQUNGLGVBQWU7SUFDZjtBQUFFO0lBQ0YsZUFBZTtJQUNmO0FBQUU7SUFDRixlQUFlO0lBQ2Y7QUFBRTtJQUNGLGNBQWM7SUFDZDtBQUFFO0lBQ0YsY0FBYztJQUNkO0FBQUU7SUFDRixjQUFjO0lBQ2Q7QUFBRTtJQUNGLGNBQWM7SUFDZDtBQUFFO0lBQ0YsY0FBYztJQUNkO0FBRUE7SUFDQSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCO0FBRUE7SUFDQSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCO0FBRUE7SUFDQSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmO0FBRUE7SUFDQSxXQUFXO0lBQ1gsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCO0FBRUE7SUFDQSwwQ0FBMEM7SUFDMUM7QUFBRTtJQUNGLDJDQUEyQztJQUMzQztBQUFFO0lBQ0YsMkNBQTJDO0lBQzNDO0FBQUU7SUFDRiw0Q0FBNEM7SUFDNUM7QUFBRTtJQUNGLDRDQUE0QztJQUM1QztBQUFFO0lBQ0YsNENBQTRDO0lBQzVDO0FBQUU7SUFDRiw0Q0FBNEM7SUFDNUM7QUFBRTtJQUNGLDRDQUE0QztJQUM1QztBQUFFO0lBQ0YsNENBQTRDO0lBQzVDO0FBQUU7SUFDRiw0Q0FBNEM7SUFDNUM7QUFFQTtRQUNJLGtCQUFrQjtRQUNsQixpQ0FBaUM7UUFDakMsa0JBQWtCO0lBQ3RCO0FBRUE7SUFDQSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFFQTtJQUNBLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckI7QUFFQTtJQUNBO0lBQ0Esd0JBQXdCO0lBQ3hCLEVBQUU7SUFDRiwwQkFBMEI7SUFDMUI7QUFDSjtBQUdBLG1CQUFtQjtBQUNuQiwwQ0FBMEM7QUFFMUM7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0RBQW9EO0lBQ3BELDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3QiwrQ0FBK0M7RUFDakQ7QUFFQTtJQUNFO01BQ0UsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7RUFDRjtBQUdGLG1CQUFtQjtBQUVuQjs7Ozs7Ozs7Ozs7OztFQWFFO0FBQ0Y7Q0FDQyxlQUFlO0NBQ2YsUUFBUTtDQUNSLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsWUFBWTtDQUNaLFVBQVU7Q0FJViwyRkFBMkY7QUFDNUY7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFNBQVM7Q0FDVCxRQUFRO0NBQ1IsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGVBQWU7SUFDWixtQkFBbUI7Q0FDdEIsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FJbEIsNkNBQTZDO0FBQzlDO0FBQ0E7Q0FJQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUlDLG1CQUFtQjtBQUNwQjtBQUNBO0NBSUMsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FJaEIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FJQyxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLDZCQUE2QjtBQUM5QjtBQUNBO0NBSUMsOENBQThDO0NBQzlDLGtCQUFrQjtDQUNsQiw2QkFBNkI7QUFDOUI7QUFDQTtDQUlDLG9CQUFvQjtBQUNyQjtBQUNBO0NBSUMsb0JBQW9CO0FBQ3JCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixTQUFTO0NBQ1QsUUFBUTtDQUNSLHlCQUF5QjtDQUN6QixpR0FBaUc7Q0FJakcsK0NBQStDO0NBQy9DLGlFQUFpRTtDQUNqRSx5QkFBeUI7Q0FDekIsWUFBWTtDQUtaLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGVBQWU7Q0FHZixrQkFBa0I7Q0FJbEIsK0NBQStDO0NBSy9DLGdDQUFnQztBQUNqQztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLFdBQVc7QUFDWjtBQUNBLEdBQUc7QUE0REgsR0FBRztBQXVESCxHQUFHO0FBRUg7Q0FDQztFQUNDLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIscUJBQXFCO0NBQ3RCO0NBQ0E7RUFDQyxVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixtQkFBbUI7Q0FDcEI7QUFDRDtBQUNBO0NBQ0M7RUFDQyxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLHFCQUFxQjtDQUN0QjtDQUNBO0VBQ0MsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixxQkFBcUI7Q0FDdEI7Q0FDQTtFQUNDLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IsbUJBQW1CO0NBQ3BCO0FBQ0Q7QUFDQTtDQUNDO0VBQ0MsVUFBVTtFQUNWLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjtBQUNEO0FBQ0E7Q0FDQztFQUNDLFVBQVU7RUFDVixrQ0FBa0M7Q0FDbkM7Q0FDQTtFQUNDLFVBQVU7RUFDVixnQ0FBZ0M7Q0FDakM7QUFDRDtBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3B1bWFocy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAzRCBTbGlkZXNob3cgKi9cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIGh0bWwsIGJvZHkge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICM2YWRlY2RcbiAgICB9XG5cbiAgICAjc2xpZGVzaG93IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDA7ICovXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogXCJzcmMvYXNzZXRzL2ltZy9zbGlkZXIvMTEuanBnXCI7ICovXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICAuc2xpZGVzaG93LXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0FsbGVydGEgU3RlbmNpbCc7XG4gICAgZm9udC1zaXplOiA2MnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuXG4gICAgLnN1Yi1oZWFkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfSAuc3ViLWhlYWRpbmctdHdvIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfSAuc3ViLWhlYWRpbmctdGhyZWUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9IC5zdWItaGVhZGluZy1mb3VyIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgfSAuc3ViLWhlYWRpbmctZml2ZSB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgfSAuc3ViLWhlYWRpbmctc2l4IHtcbiAgICBmb250LXNpemU6IDdweDtcbiAgICB9IC5zdWItaGVhZGluZy1zZXZlbiB7XG4gICAgZm9udC1zaXplOiA1cHg7XG4gICAgfSAuc3ViLWhlYWRpbmctZWlnaHQge1xuICAgIGZvbnQtc2l6ZTogM3B4O1xuICAgIH0gLnN1Yi1oZWFkaW5nLW5pbmUge1xuICAgIGZvbnQtc2l6ZTogMXB4O1xuICAgIH1cblxuICAgIC5lbnRpcmUtY29udGVudCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxOTBweDtcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICB9XG5cbiAgICAuY29udGVudC1jYXJyb3VzZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYW5pbWF0aW9uOiByb3RhciAxNXMgaW5maW5pdGUgbGluZWFyO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtY2Fycm91c2VsOmhvdmVyIHtcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuY29udGVudC1jYXJyb3VzZWwgZmlndXJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICMzYjQ0NGI7ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtY2Fycm91c2VsIGZpZ3VyZTpudGgtY2hpbGQoMSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDMwMHB4KTtcbiAgICB9IC5jb250ZW50LWNhcnJvdXNlbCBmaWd1cmU6bnRoLWNoaWxkKDIpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoNDBkZWcpIHRyYW5zbGF0ZVooMzAwcHgpO1xuICAgIH0gLmNvbnRlbnQtY2Fycm91c2VsIGZpZ3VyZTpudGgtY2hpbGQoMykge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg4MGRlZykgdHJhbnNsYXRlWigzMDBweCk7XG4gICAgfSAuY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCg0KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDEyMGRlZykgdHJhbnNsYXRlWigzMDBweCk7XG4gICAgfSAuY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCg1KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE2MGRlZykgdHJhbnNsYXRlWigzMDBweCk7XG4gICAgfSAuY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCg2KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDIwMGRlZykgdHJhbnNsYXRlWigzMDBweCk7XG4gICAgfSAuY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCg3KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDI0MGRlZykgdHJhbnNsYXRlWigzMDBweCk7XG4gICAgfSAuY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCg4KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDI4MGRlZykgdHJhbnNsYXRlWigzMDBweCk7XG4gICAgfSAuY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCg5KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDMyMGRlZykgdHJhbnNsYXRlWigzMDBweCk7XG4gICAgfSAuY29udGVudC1jYXJyb3VzZWwgZmlndXJlOm50aC1jaGlsZCgxMCkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpIHRyYW5zbGF0ZVooMzAwcHgpO1xuICAgIH1cblxuICAgIC5zaGFkb3cge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggIzAwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgIH1cblxuICAgIC5jb250ZW50LWNhcnJvdXNlbCBpbWcge1xuICAgIGltYWdlLXJlbmRlcmluZzogYXV0bztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5jb250ZW50LWNhcnJvdXNlbCBpbWc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyByb3RhciB7XG4gICAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIH0gdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICAgIH1cbn1cblxuXG4vKiB0ZXN0ZSBkZSB0ZXh0byAqL1xuLyogPHA+RGVzZW52b2x2ZW5kbzxicj4gc2V1IFdFQiBTSVRFPC9wPiAqL1xuXG5wIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMCwgI2ZmZiwgIzAwMCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcbiAgICBhbmltYXRpb246IGFuaW1hdGUgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gICAgMCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTUwMCU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAwJTtcbiAgICB9XG4gIH1cblxuXG4vKiB0ZXh0IGFuaW1hdGlvbiAqL1xuXG4vKiAuY29udGFpbmVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5oMS5tYWluLCBwLmRlbW9zIHtcblx0LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE4cztcblx0LW1vei1hbmltYXRpb24tZGVsYXk6IDE4cztcblx0LW1zLWFuaW1hdGlvbi1kZWxheTogMThzO1xuXHRhbmltYXRpb24tZGVsYXk6IDE4cztcbn0qL1xuLnNwLWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiAwcHg7XG5cdGxlZnQ6IDBweDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0ei1pbmRleDogMDtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMykgMzUlLCByZ2JhKDAsIDAsIDAsIDAuNykpO1xuXHRiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMSksIHJnYmEoMCwgMCwgMCwgMC4zKSAzNSUsIHJnYmEoMCwgMCwgMCwgMC43KSk7XG5cdGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMykgMzUlLCByZ2JhKDAsIDAsIDAsIDAuNykpO1xuXHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMykgMzUlLCByZ2JhKDAsIDAsIDAsIDAuNykpO1xufVxuLnNwLWNvbnRlbnQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGxlZnQ6IDBweDtcblx0dG9wOiAwcHg7XG5cdHotaW5kZXg6IDEwMDA7XG59XG4uc3AtY29udGFpbmVyIGgzIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDUwJTtcblx0bGluZS1oZWlnaHQ6IDEwMHB4O1xuXHRoZWlnaHQ6IDkwcHg7XG5cdG1hcmdpbi10b3A6IC01MHB4O1xuXHRmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcblx0d2lkdGg6IDEwMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHQtd2Via2l0LWFuaW1hdGlvbjogYmx1ckZhZGVJbk91dCAzcyBlYXNlLWluIGJhY2t3YXJkcztcblx0LW1vei1hbmltYXRpb246IGJsdXJGYWRlSW5PdXQgM3MgZWFzZS1pbiBiYWNrd2FyZHM7XG5cdC1tcy1hbmltYXRpb246IGJsdXJGYWRlSW5PdXQgM3MgZWFzZS1pbiBiYWNrd2FyZHM7XG5cdGFuaW1hdGlvbjogYmx1ckZhZGVJbk91dCAzcyBlYXNlLWluIGJhY2t3YXJkcztcbn1cbi5zcC1jb250YWluZXIgaDMuZnJhbWUtMSB7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcblx0LW1vei1hbmltYXRpb24tZGVsYXk6IDBzO1xuXHQtbXMtYW5pbWF0aW9uLWRlbGF5OiAwcztcblx0YW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cbi5zcC1jb250YWluZXIgaDMuZnJhbWUtMiB7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzcztcblx0LW1vei1hbmltYXRpb24tZGVsYXk6IDNzO1xuXHQtbXMtYW5pbWF0aW9uLWRlbGF5OiAzcztcblx0YW5pbWF0aW9uLWRlbGF5OiAzcztcbn1cbi5zcC1jb250YWluZXIgaDMuZnJhbWUtMyB7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA2cztcblx0LW1vei1hbmltYXRpb24tZGVsYXk6IDZzO1xuXHQtbXMtYW5pbWF0aW9uLWRlbGF5OiA2cztcblx0YW5pbWF0aW9uLWRlbGF5OiA2cztcbn1cbi5zcC1jb250YWluZXIgaDMuZnJhbWUtNCB7XG5cdGZvbnQtc2l6ZTogMjAwcHg7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA5cztcblx0LW1vei1hbmltYXRpb24tZGVsYXk6IDlzO1xuXHQtbXMtYW5pbWF0aW9uLWRlbGF5OiA5cztcblx0YW5pbWF0aW9uLWRlbGF5OiA5cztcbn1cbi5zcC1jb250YWluZXIgaDMuZnJhbWUtNSB7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBub25lO1xuXHQtbW96LWFuaW1hdGlvbjogbm9uZTtcblx0LW1zLWFuaW1hdGlvbjogbm9uZTtcblx0YW5pbWF0aW9uOiBub25lO1xuXHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdHRleHQtc2hhZG93OiAwcHggMHB4IDFweCAjZmZmO1xufVxuLnNwLWNvbnRhaW5lciBoMy5mcmFtZS01IHNwYW4ge1xuXHQtd2Via2l0LWFuaW1hdGlvbjogYmx1ckZhZGVJbiAzcyBlYXNlLWluIDEycyBiYWNrd2FyZHM7XG5cdC1tb3otYW5pbWF0aW9uOiBibHVyRmFkZUluIDFzIGVhc2UtaW4gMTJzIGJhY2t3YXJkcztcblx0LW1zLWFuaW1hdGlvbjogYmx1ckZhZGVJbiAzcyBlYXNlLWluIDEycyBiYWNrd2FyZHM7XG5cdGFuaW1hdGlvbjogYmx1ckZhZGVJbiAzcyBlYXNlLWluIDEycyBiYWNrd2FyZHM7XG5cdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0dGV4dC1zaGFkb3c6IDBweCAwcHggMXB4ICNmZmY7XG59XG4uc3AtY29udGFpbmVyIGgzLmZyYW1lLTUgc3BhbjpudGgtY2hpbGQoMikge1xuXHQtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTNzO1xuXHQtbW96LWFuaW1hdGlvbi1kZWxheTogMTNzO1xuXHQtbXMtYW5pbWF0aW9uLWRlbGF5OiAxM3M7XG5cdGFuaW1hdGlvbi1kZWxheTogMTNzO1xufVxuLnNwLWNvbnRhaW5lciBoMy5mcmFtZS01IHNwYW46bnRoLWNoaWxkKDMpIHtcblx0LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE0cztcblx0LW1vei1hbmltYXRpb24tZGVsYXk6IDE0cztcblx0LW1zLWFuaW1hdGlvbi1kZWxheTogMTRzO1xuXHRhbmltYXRpb24tZGVsYXk6IDE0cztcbn1cbi5zcC1nbG9iZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDI4MnB4O1xuXHRoZWlnaHQ6IDI3M3B4O1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogNTAlO1xuXHRtYXJnaW46IC0xMzdweCAwIDAgLTE0MXB4O1xuXHQvKiBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoaHR0cDovL3dlYi1zb25pY2suenoubXUvaW1hZ2VzL3NsL2dsb2JlLnBuZykgbm8tcmVwZWF0IHRvcCBsZWZ0OyAqL1xuXHQtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluQmFjayAzLjZzIGxpbmVhciAxNHMgYmFja3dhcmRzO1xuXHQtbW96LWFuaW1hdGlvbjogZmFkZUluQmFjayAzLjZzIGxpbmVhciAxNHMgYmFja3dhcmRzO1xuXHQtbXMtYW5pbWF0aW9uOiBmYWRlSW5CYWNrIDMuNnMgbGluZWFyIDE0cyBiYWNrd2FyZHM7XG5cdGFuaW1hdGlvbjogZmFkZUluQmFjayAzLjZzIGxpbmVhciAxNHMgYmFja3dhcmRzO1xuXHQtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTMwKVwiO1xuXHRmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MzApO1xuXHRvcGFjaXR5OiAwLjM7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSg1KTtcblx0LW1vei10cmFuc2Zvcm06IHNjYWxlKDUpO1xuXHQtby10cmFuc2Zvcm06IHNjYWxlKDUpO1xuXHQtbXMtdHJhbnNmb3JtOiBzY2FsZSg1KTtcblx0dHJhbnNmb3JtOiBzY2FsZSg1KTtcbn1cbi5zcC1jaXJjbGUtbGluayB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogNTAlO1xuXHRib3R0b206IDEwMHB4O1xuXHRtYXJnaW4tbGVmdDogLTUwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bGluZS1oZWlnaHQ6IDEwMHB4O1xuXHR3aWR0aDogMTAwcHg7XG5cdGhlaWdodDogMTAwcHg7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGNvbG9yOiAjM2YxNjE2O1xuXHRmb250LXNpemU6IDI1cHg7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuXHQtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHQtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluUm90YXRlIDFzIGxpbmVhciAxNnMgYmFja3dhcmRzO1xuXHQtbW96LWFuaW1hdGlvbjogZmFkZUluUm90YXRlIDFzIGxpbmVhciAxNnMgYmFja3dhcmRzO1xuXHQtbXMtYW5pbWF0aW9uOiBmYWRlSW5Sb3RhdGUgMXMgbGluZWFyIDE2cyBiYWNrd2FyZHM7XG5cdGFuaW1hdGlvbjogZmFkZUluUm90YXRlIDFzIGxpbmVhciAxNnMgYmFja3dhcmRzO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuXHQtbW96LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuXHQtby10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcblx0LW1zLXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbn1cbi5zcC1jaXJjbGUtbGluazpob3ZlciB7XG5cdGJhY2tncm91bmQ6ICM4NTM3M2I7XG5cdGNvbG9yOiAjZmZmO1xufVxuLyoqL1xuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmx1ckZhZGVJbk91dCB7XG5cdDAlIHtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHRleHQtc2hhZG93OiAwcHggMHB4IDQwcHggI2ZmZjtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcblx0fVxuXHQyMCUsIDc1JSB7XG5cdFx0b3BhY2l0eTogMTtcblx0XHR0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggI2ZmZjtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdH1cblx0MTAwJSB7XG5cdFx0b3BhY2l0eTogMDtcblx0XHR0ZXh0LXNoYWRvdzogMHB4IDBweCA1MHB4ICNmZmY7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuXHR9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYmx1ckZhZGVJbiB7XG5cdDAlIHtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHRleHQtc2hhZG93OiAwcHggMHB4IDQwcHggI2ZmZjtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcblx0fVxuXHQ1MCUge1xuXHRcdG9wYWNpdHk6IDAuNTtcblx0XHR0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4ICNmZmY7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG5cdH1cblx0MTAwJSB7XG5cdFx0b3BhY2l0eTogMTtcblx0XHR0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggI2ZmZjtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5CYWNrIHtcblx0MCUge1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuXHR9XG5cdDUwJSB7XG5cdFx0b3BhY2l0eTogMC40O1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyKTtcblx0fVxuXHQxMDAlIHtcblx0XHRvcGFjaXR5OiAwLjI7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDUpO1xuXHR9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUm90YXRlIHtcblx0MCUge1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgzNjBkZWcpO1xuXHR9XG5cdDEwMCUge1xuXHRcdG9wYWNpdHk6IDE7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcblx0fVxufVxuLyoqL1xuXG5ALW1vei1rZXlmcmFtZXMgYmx1ckZhZGVJbk91dCB7XG5cdDAlIHtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHRleHQtc2hhZG93OiAwcHggMHB4IDQwcHggI2ZmZjtcblx0XHQtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcblx0fVxuXHQyMCUsIDc1JSB7XG5cdFx0b3BhY2l0eTogMTtcblx0XHR0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggI2ZmZjtcblx0XHQtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdH1cblx0MTAwJSB7XG5cdFx0b3BhY2l0eTogMDtcblx0XHR0ZXh0LXNoYWRvdzogMHB4IDBweCA1MHB4ICNmZmY7XG5cdFx0LW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xuXHR9XG59XG5ALW1vei1rZXlmcmFtZXMgYmx1ckZhZGVJbiB7XG5cdDAlIHtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHRleHQtc2hhZG93OiAwcHggMHB4IDQwcHggI2ZmZjtcblx0XHQtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcblx0fVxuXHQxMDAlIHtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHRleHQtc2hhZG93OiAwcHggMHB4IDFweCAjZmZmO1xuXHRcdC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0fVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbkJhY2sge1xuXHQwJSB7XG5cdFx0b3BhY2l0eTogMDtcblx0XHQtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XG5cdH1cblx0NTAlIHtcblx0XHRvcGFjaXR5OiAwLjQ7XG5cdFx0LW1vei10cmFuc2Zvcm06IHNjYWxlKDIpO1xuXHR9XG5cdDEwMCUge1xuXHRcdG9wYWNpdHk6IDAuMjtcblx0XHQtbW96LXRyYW5zZm9ybTogc2NhbGUoNSk7XG5cdH1cbn1cbkAtbW96LWtleWZyYW1lcyBmYWRlSW5Sb3RhdGUge1xuXHQwJSB7XG5cdFx0b3BhY2l0eTogMDtcblx0XHQtbW96LXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDM2MGRlZyk7XG5cdH1cblx0MTAwJSB7XG5cdFx0b3BhY2l0eTogMTtcblx0XHQtbW96LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuXHR9XG59XG4vKiovXG5cbkBrZXlmcmFtZXMgYmx1ckZhZGVJbk91dCB7XG5cdDAlIHtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHRleHQtc2hhZG93OiAwcHggMHB4IDQwcHggI2ZmZjtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG5cdH1cblx0MjAlLCA3NSUge1xuXHRcdG9wYWNpdHk6IDE7XG5cdFx0dGV4dC1zaGFkb3c6IDBweCAwcHggMXB4ICNmZmY7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0fVxuXHQxMDAlIHtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHRleHQtc2hhZG93OiAwcHggMHB4IDUwcHggI2ZmZjtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDApO1xuXHR9XG59XG5Aa2V5ZnJhbWVzIGJsdXJGYWRlSW4ge1xuXHQwJSB7XG5cdFx0b3BhY2l0eTogMDtcblx0XHR0ZXh0LXNoYWRvdzogMHB4IDBweCA0MHB4ICNmZmY7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuXHR9XG5cdDUwJSB7XG5cdFx0b3BhY2l0eTogMC41O1xuXHRcdHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggI2ZmZjtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG5cdH1cblx0MTAwJSB7XG5cdFx0b3BhY2l0eTogMTtcblx0XHR0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggI2ZmZjtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHR9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkJhY2sge1xuXHQwJSB7XG5cdFx0b3BhY2l0eTogMDtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDApO1xuXHR9XG5cdDUwJSB7XG5cdFx0b3BhY2l0eTogMC40O1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMik7XG5cdH1cblx0MTAwJSB7XG5cdFx0b3BhY2l0eTogMC4yO1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoNSk7XG5cdH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluUm90YXRlIHtcblx0MCUge1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMzYwZGVnKTtcblx0fVxuXHQxMDAlIHtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuXHR9XG59XG5cbi5wcm9tb2NhbyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMTAlO1xuICAgIHJpZ2h0OiAxNSU7XG4gICAgcGFkZGluZzogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "aNIU":
/*!***********************************************!*\
  !*** ./src/app/common/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class MenuComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    quemSomos() {
        this.router.navigate(['/quemsomos']);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 8, vars: 0, consts: [[1, "d-flex", "align-items-center"], ["id", "kt_aside_mobile_toggle", 1, "btn", "p-0", "burger-icon", "burger-icon-left"], ["id", "kt_header_mobile_toggle", 1, "btn", "p-0", "burger-icon", "ml-4"], ["id", "kt_header_mobile_topbar_toggle", 1, "btn", "btn-hover-text-primary", "p-0", "ml-2", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "teste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_6_listener() { return ctx.quemSomos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " quem somos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9tZW51L21lbnUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "acaO":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "www.pumahs.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dPok":
/*!********************************************!*\
  !*** ./src/app/common/common.component.ts ***!
  \********************************************/
/*! exports provided: CommonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponent", function() { return CommonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class CommonComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommonComponent.ɵfac = function CommonComponent_Factory(t) { return new (t || CommonComponent)(); };
CommonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonComponent, selectors: [["app-common"]], decls: 2, vars: 0, template: function CommonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "common works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21tb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-common',
                templateUrl: './common.component.html',
                styleUrls: ['./common.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oari":
/*!*********************************************************!*\
  !*** ./src/app/common/subheader/subheader.component.ts ***!
  \*********************************************************/
/*! exports provided: SubheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubheaderComponent", function() { return SubheaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




const _c0 = function () { return ["/dashboard"]; };
const _c1 = function () { return ["/servicos"]; };
const _c2 = function () { return ["/quemsomos"]; };
const _c3 = function () { return ["/artigos"]; };
const _c4 = function () { return ["/clientes"]; };
const _c5 = function () { return ["/contato"]; };
class SubheaderComponent {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.buttonAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buttonBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buttonNew = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    buttonActionLocal() {
        this.buttonAction.emit(true);
        this.router.navigate(['/login']);
    }
    backTo() {
        this.router.navigate(['/login']);
    }
    goBack() {
        this.buttonBack.emit(true);
        location.reload();
    }
    new() {
        this.buttonNew.emit(true);
    }
}
SubheaderComponent.ɵfac = function SubheaderComponent_Factory(t) { return new (t || SubheaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SubheaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubheaderComponent, selectors: [["app-subheader"]], inputs: { titulo: "titulo", subTitulo: "subTitulo", hideBack: "hideBack", hideAction: "hideAction", hideNew: "hideNew" }, outputs: { buttonAction: "buttonAction", buttonBack: "buttonBack", buttonNew: "buttonNew" }, decls: 33, vars: 12, consts: [[1, "container"], ["href", "https://www.facebook.com/pumahardsoft/", "target", "_blank"], ["src", "../../../assets/img/contato/facebook.svg", "width", "30px", "height", "30px", 1, "facebook"], ["href", "https://www.instagram.com/pumahardsoft/", "target", "_blank"], ["src", "../../../assets/img/contato/instagram.svg", "width", "30px", "height", "30px", 1, "instagram"], ["href", "https://wa.me/5511998901467?text=Seja Bem Vindo a Puma Hatd Soft ! Atendimento em hor\u00E1rio comercial. Obrigado", "target", "_blank"], ["src", "../../../assets/img/contato/whatsapp.svg", "width", "30px", "height", "30px", 1, "whatsapp"], ["color-on-scroll", "500", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent"], [1, "navbar-translate"], [1, "navbar-brand", 2, "font-size", "150%", 3, "routerLink"], ["id", "navbarToggler", 1, "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["rel", "tooltip", "title", "Servi\u00E7os", "data-placement", "bottom", 1, "nav-link", 3, "routerLink"], ["rel", "tooltip", "title", "Quem Somos", "data-placement", "bottom", 1, "nav-link", 3, "routerLink"], ["rel", "tooltip", "title", "Artigos Especiais", "data-placement", "bottom", 1, "nav-link", 3, "routerLink"], ["rel", "tooltip", "title", "Clientes e Projetos", "data-placement", "bottom", 1, "nav-link", 3, "routerLink"], ["rel", "tooltip", "title", "Entre em Contato", "data-placement", "bottom", 1, "nav-link", 3, "routerLink"]], template: function SubheaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Puma Hard Soft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Servi\u00E7os ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Quem somos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Artigos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Clientes / Projetos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Contato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    }\n\n.menu[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 50px;\n    background-color: #222;\n    font-family: Arial;\n    }\n\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: none;\n    position: relative;\n    }\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 150px;\n    float: left;\n    }\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 15px;\n    display: block;\n    text-decoration: none;\n    text-align: center;\n    background-color: #222;\n    color: #fff;\n    }\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    position: absolute;\n    visibility: hidden;\n    }\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%] {\n    visibility: visible;\n    }\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #f4f4f4;\n    color: #555;\n    }\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: none;\n    border-bottom: solid 1px #ccc;\n    }\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background-color: #069;\n    }\n\nlabel[for=\u201Dbt_menu\u201D][_ngcontent-%COMP%]{\n    padding: 5px;\n    background-color: #222;\n    color: #fff;\n    font-family: Arial;\n    text-align: center;\n    font-size: 30px;\n    cursor: pointer;\n    height: 50px;\n    }\n#bt_menu[_ngcontent-%COMP%] {\n    display: none;\n    }\nlabel[for=\u201Dbt_menu\u201D][_ngcontent-%COMP%]{\n    display: none;\n    }\n\n@media(max-width: 800px) {\n   label[for=\u201Dbt_menu\u201D][_ngcontent-%COMP%] {\n    display: block;\n    }\n     \n   #bt_menu[_ngcontent-%COMP%]:checked    ~ .menu[_ngcontent-%COMP%]{\n    margin-left: 0;\n    }\n     \n   .menu[_ngcontent-%COMP%]{\n    margin-top: 5px;\n    margin-left: -100%;\n    transition: all .4s;\n    }\n     \n   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n    float: none;\n    }\n     \n   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    position: static;\n    overflow: hidden;\n    max-height: 0;\n    transition: all 4s;\n    }\n     \n   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%] {\n    height: auto;\n    max-height: 200px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3N1YmhlYWRlci9zdWJoZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFDdkM7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWO0FBRUQsb0NBQW9DO0FBQ25DO0lBQ0EsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCO0FBRUQseUJBQXlCO0FBQ3hCO0lBQ0EsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQjtBQUVEO0lBQ0MsWUFBWTtJQUNaLFdBQVc7SUFDWDtBQUVEO0lBQ0MsYUFBYTtJQUNiLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1g7QUFFRDtJQUNDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEI7QUFFRDtJQUNDLG1CQUFtQjtJQUNuQjtBQUVEO0lBQ0MseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWDtBQUVEO0lBQ0MsV0FBVztJQUNYLDZCQUE2QjtJQUM3QjtBQUVEO0lBQ0Msc0JBQXNCO0lBQ3RCO0FBRUQsbUJBQW1CO0FBQ2xCO0lBQ0EsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWjtBQUVEO0lBQ0MsYUFBYTtJQUNiO0FBRUQ7SUFDQyxhQUFhO0lBQ2I7QUFFRCw4QkFBOEI7QUFDOUI7R0FDQTtJQUNDLGNBQWM7SUFDZDs7R0FFRDtJQUNDLGNBQWM7SUFDZDs7R0FFRDtJQUNDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25COztHQUVEO0lBQ0MsV0FBVztJQUNYLFdBQVc7SUFDWDs7R0FFRDtJQUNDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQjs7R0FFRDtJQUNDLFlBQVk7SUFDWixpQkFBaUI7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zdWJoZWFkZXIvc3ViaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlJlc2V0YW5kbyBvcyB2YWxvcmVzIGRlIGVzcGHDp2FtZW50byAqL1xuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgXG4gICAvKkVzdGlsaXphbmRvIGEgbmF2IGRhIGNsYXNzZSBtZW51ICovXG4gICAgLm1lbnUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICB9XG4gICBcbiAgIC8qRXN0aWxpemFuZG8gYXMgbGlzdGFzICovXG4gICAgLm1lbnUgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgIFxuICAgLm1lbnUgdWwgbGkge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICBcbiAgIC5tZW51IGEge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgIFxuICAgLm1lbnUgdWwgdWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICAgXG4gICAubWVudSB1bCBsaTpob3ZlciB1bCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gICBcbiAgIC5tZW51IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgfVxuICAgXG4gICAubWVudSB1bCB1bCBsaSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gICAgfVxuICAgXG4gICAubWVudSB1bCB1bCBsaSBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY5O1xuICAgIH1cbiAgIFxuICAgLypDcmlhbmRvIG8gbGFiZWwgKi9cbiAgICBsYWJlbFtmb3I94oCdYnRfbWVudeKAnV17XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICBcbiAgICNidF9tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgIFxuICAgbGFiZWxbZm9yPeKAnWJ0X21lbnXigJ1de1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgXG4gICAvKkRlaXhhbmRvIG8gTWVudSBSZXNwb25zaXZvICovXG4gICBAbWVkaWEobWF4LXdpZHRoOiA4MDBweCkge1xuICAgbGFiZWxbZm9yPeKAnWJ0X21lbnXigJ1dIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgIFxuICAgI2J0X21lbnU6Y2hlY2tlZCB+IC5tZW51e1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgICAgXG4gICAubWVudXtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XG4gICAgfVxuICAgICBcbiAgIC5tZW51IHVsIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgIFxuICAgLm1lbnUgdWwgdWwge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCA0cztcbiAgICB9XG4gICAgIFxuICAgLm1lbnUgdWwgbGk6aG92ZXIgdWwge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICB9XG59ICAgICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubheaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subheader',
                templateUrl: './subheader.component.html',
                styleUrls: ['./subheader.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subTitulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideBack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideNew: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttonAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], buttonBack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], buttonNew: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "qa8T":
/*!*************************************************!*\
  !*** ./src/app/pumahs/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 11, vars: 0, consts: [[1, "wrapper", 2, "background-color", "black"], [1, "section-dark", 2, "background-image", "url('assets/img/clientes/wallpaper-001.jpg')", "background-size", "cover", "min-height", "100vh", "max-height", "100%", "overflow", "hidden", "position", "relative", "width", "100%", "z-index", "1", "display", "-ms-flexbox", "display", "-webkit-flex", "display", "flex", "/* center vertically */\n        align-items", "center", "/*center horizontaly */\n        justify-content", "center", "/*center horizontaly ie */\n        -ms-flex-pack", "center"], [1, "content-center"], [1, "container"], [1, "title-brand"], [1, "presentation-text", 2, "font-size", "135%", "text-align", "justify"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " A Puma Hard Soft nasceu em meio aos estudos de tecnologia da informa\u00E7\u00E3o em 2003, foi atrav\u00E9s da infraestrutura e programa\u00E7\u00E3o que atuamos em diversas ocasi\u00F5es. hoje atuando no desenvolvimento de WEBSITE e SISTEMAS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Buscamos obter a vivencia do cliente em suas necessidades, alcan\u00E7ando ideias em seu planejamento de projetos at\u00E9 sua conclus\u00E3o, e assim tornando uma experiencia \u00FAnica. Diminuindo a dificuldade e redund\u00E2ncia encontrada no dia a dia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Somos uma empresa nova, possu\u00EDmos experiencias diferenciadas atrav\u00E9s dos nossos colaboradores, continuamos investindo em estudos e tecnologias, ferramentas apropriadas para o desempenho e qualidade dos nossos servi\u00E7os prestados no mercado de desenvolvimento. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div.slide-left[_ngcontent-%COMP%] {\n    width:100%;\n    overflow:hidden;\n  }\n\ndiv.slide-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    animation: slide-left 2s;\n  }\n\n@keyframes slide-left {\n    from {\n      margin-left: 100%;\n      width: 300%;\n    }\n\n    to {\n      margin-left: 0%;\n      width: 100%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVtYWhzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDOztBQUUzQztJQUNJLFVBQVU7SUFDVixlQUFlO0VBQ2pCOztBQUNBO0lBQ0Usd0JBQXdCO0VBQzFCOztBQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsV0FBVztJQUNiOztJQUVBO01BQ0UsZUFBZTtNQUNmLFdBQVc7SUFDYjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvcHVtYWhzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA8cD4gdGVzdGUgZGEgZGlyZWl0YSBwYXJhIGVzcXVlcmRhPC9wPiAqL1xuXG5kaXYuc2xpZGUtbGVmdCB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gIH1cbiAgZGl2LnNsaWRlLWxlZnQgcCB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1sZWZ0IDJzO1xuICB9XG5cbiAgQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcbiAgICBmcm9tIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xuICAgICAgd2lkdGg6IDMwMCU7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rP3G":
/*!***********************************************************!*\
  !*** ./src/app/pumahs/multi-page/multi-page.component.ts ***!
  \***********************************************************/
/*! exports provided: MultiPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiPageComponent", function() { return MultiPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class MultiPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MultiPageComponent.ɵfac = function MultiPageComponent_Factory(t) { return new (t || MultiPageComponent)(); };
MultiPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiPageComponent, selectors: [["app-multi-page"]], decls: 2, vars: 0, template: function MultiPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "multi-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1bWFocy9tdWx0aS1wYWdlL211bHRpLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-multi-page',
                templateUrl: './multi-page.component.html',
                styleUrls: ['./multi-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uU1w":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



class HeaderComponent {
    constructor(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        const navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    ;
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }
    ;
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    }
    ;
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 37, vars: 0, consts: [[1, "container"], ["color-on-scroll", "500", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent"], [1, "navbar-translate"], ["href", "http://www.pumahs.com/", 1, "navbar-brand"], ["id", "navbarToggler", 1, "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["rel", "tooltip", "title", "Acesse nosso Facebook", "data-placement", "bottom", "href", "http://www.pumahs.com/", "target", "_blank", 1, "nav-link"], ["rel", "tooltip", "title", "Acesse nosso Facebook", "data-placement", "bottom", "href", "https://www.facebook.com/Puma-Hard-Soft-2338561606361355", "target", "_blank", 1, "nav-link"], [1, "fa", "fa-facebook-square"], [1, "d-lg-none"], ["rel", "tooltip", "title", "Acesse nosso Instagram", "data-placement", "bottom", "href", "https://www.instagram.com/pumahsdesenvolvimento/", "target", "_blank", 1, "nav-link"], [1, "fa", "fa-instagram"], ["rel", "tooltip", "title", "Acesse nosso Whatsapp", "data-placement", "bottom", "href", "https://wa.me/5511998901467?text=Seja Bem Vindo a Puma Hatd Soft ! Todos nossos T\u00E9cnicos est\u00E1o ocupados no momento, Retornaremos assim que possivel. Obrigado", "target", "_blank", 1, "nav-link"], [1, "fa", "fa-whatsapp"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Puma Hard Soft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Quem somos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Clientes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Projetos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Contato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Whatsapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "vNcg":
/*!***********************************************!*\
  !*** ./src/app/common/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pumahs_planos_planos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pumahs/planos/planos.component */ "4rXd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _pumahs_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pumahs/about/about.component */ "qa8T");
/* harmony import */ var _pumahs_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pumahs/contact/contact.component */ "Xro/");
/* harmony import */ var _pumahs_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pumahs/dashboard/dashboard.component */ "ZIUu");
/* harmony import */ var _pumahs_project_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pumahs/project/project.component */ "yXGk");
/* harmony import */ var _pumahs_servicos_servicos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pumahs/servicos/servicos.component */ "/vi4");










const routes = [
    // { path: 'carousel', component: CarouselComponent },
    // { path: 'footer', component: FooterComponent },
    // { path: 'header', component: HeaderComponent },
    // { path: 'subheader', component: SubheaderComponent },
    // { path: 'home', component: HomeComponent },
    // { path: 'menu', component: MenuComponent },
    // { path: 'clientes', component: ClientComponent },
    { path: 'servicos', component: _pumahs_planos_planos_component__WEBPACK_IMPORTED_MODULE_0__["PlanosComponent"] },
    { path: 'quemsomos', component: _pumahs_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'contato', component: _pumahs_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'dashboard', component: _pumahs_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: 'clientes', component: _pumahs_project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"] },
    { path: 'artigos', component: _pumahs_servicos_servicos_component__WEBPACK_IMPORTED_MODULE_7__["ServicosComponent"] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    // { path: '**', redirectTo: 'dashboard' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yXGk":
/*!*****************************************************!*\
  !*** ./src/app/pumahs/project/project.component.ts ***!
  \*****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



const _c0 = function () { return ["/dashboard"]; };
class ProjectComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 43, vars: 2, consts: [[1, "wrapper", 2, "background-color", "black"], [1, "section-dark", 2, "background-image", "url('assets/img/clientes/wallpaper-001.jpg')", "background-size", "cover", "min-height", "100vh", "max-height", "100%", "overflow", "hidden", "position", "relative", "width", "100%", "z-index", "1", "display", "-ms-flexbox", "display", "-webkit-flex", "display", "flex", "/* center vertically */\n        align-items", "center", "/*center horizontaly */\n        justify-content", "center", "/*center horizontaly ie */\n        -ms-flex-pack", "center"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "hover01", "text-center"], ["href", "https://www.vacinar.com.br/index.php", "target", "_blank"], ["src", "./assets/img/projetos/siteVacinar.jpg", "alt", "Imuniza\u00E7\u00E3o Vacinar", 1, "img-rounded", "img-responsive", 2, "width", "200px", "height", "180px"], ["href", "https://www.profissionaissa.com/", "target", "_blank"], ["src", "./assets/img/projetos/profissionaisSa.jpg", "alt", "Profissionais SA", 1, "img-rounded", "img-responsive", 2, "width", "200px", "height", "180px"], ["href", "https://teclado50dias.com/", "target", "_blank"], ["src", "./assets/img/projetos/leandro.jpg", "alt", "Curso Teclado 50 Dias", 1, "img-rounded", "img-responsive", 2, "width", "200px", "height", "180px"], ["target", "_blank", 3, "routerLink"], ["src", "./assets/img/projetos/ecommerce.jpg", "alt", "Rounded Image", 1, "img-rounded", "img-responsive", 2, "width", "200px", "height", "180px"], ["href", "https://audiovoicer.com.br/site/", "target", "_blank"], ["src", "./assets/img/projetos/audiovoicer.jpg", "alt", "Rounded Image", 1, "img-rounded", "img-responsive", 2, "width", "200px", "height", "180px"], ["href", "https://graficaedj.com.br/", "target", "_blank"], ["src", "./assets/img/projetos/edjTransfer.jpg", "alt", "Rounded Image", 1, "img-rounded", "img-responsive", 2, "width", "200px", "height", "180px"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\n\tcolor: #333;\n\tfont-family: 'Open Sans', sans-serif;\n\tfont-weight: 300;\n}\nh1[_ngcontent-%COMP%], h1[_ngcontent-%COMP%] + p[_ngcontent-%COMP%] {\n\tmargin: 30px 15px 0;\n\tfont-weight: 300;\n}\nh1[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #333;\n}\nh1[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\ttext-decoration: none;\n}\nh2[_ngcontent-%COMP%] {\n\tmargin: 60px 15px 0;\n\tpadding: 0;\n\tfont-weight: 300;\n}\nh2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n\tmargin-left: 1em;\n\tcolor: #aaa;\n\tfont-size: 85%;\n}\n.column[_ngcontent-%COMP%] {\n\tmargin: 15px 15px 0;\n\tpadding: 0;\n}\n.column[_ngcontent-%COMP%]:last-child {\n\tpadding-bottom: 60px;\n}\n.column[_ngcontent-%COMP%]::after {\n\tcontent: '';\n\tclear: both;\n\tdisplay: block;\n}\n.column[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n\tposition: relative;\n\tfloat: left;\n\twidth: 300px;\n\theight: 200px;\n\tmargin: 0 0 0 25px;\n\tpadding: 0;\n}\n.column[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n\tmargin-left: 0;\n}\n.column[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tbottom: -20px;\n\tleft: 0;\n\tz-index: -1;\n\tdisplay: block;\n\twidth: 300px;\n\tmargin: 0;\n\tpadding: 0;\n\tcolor: #444;\n\tfont-size: 18px;\n\ttext-decoration: none;\n\ttext-align: center;\n\ttransition: .3s ease-in-out;\n\topacity: 0;\n}\nfigure[_ngcontent-%COMP%] {\n\twidth: 300px;\n\theight: 200px;\n\tmargin: 0;\n\tpadding: 0;\n\tbackground: transparent;\n\toverflow: hidden;\n}\nfigure[_ngcontent-%COMP%]:hover + span[_ngcontent-%COMP%] {\n\tbottom: -36px;\n\topacity: 1;\n}\n\n.hover01[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\ttransform: scale(1);\n\ttransition: .3s ease-in-out;\n}\n.hover01[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\ttransform: scale(1.3);\n}\n\n.hover02[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\twidth: 300px;\n\theight: auto;\n\ttransition: .3s ease-in-out;\n}\n.hover02[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\twidth: 350px;\n}\n\n.hover03[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\ttransform: scale(1.5);\n\ttransition: .3s ease-in-out;\n}\n.hover03[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\ttransform: scale(1);\n}\n\n.hover04[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\twidth: 400px;\n\theight: auto;\n\ttransition: .3s ease-in-out;\n}\n.hover04[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\twidth: 300px;\n}\n\n.hover05[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\tmargin-left: 30px;\n\ttransform: scale(1.5);\n\ttransition: .3s ease-in-out;\n}\n.hover05[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\tmargin-left: 0;\n}\n\n.hover06[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\ttransform: rotate(15deg) scale(1.4);\n\ttransition: .3s ease-in-out;\n}\n.hover06[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\ttransform: rotate(0) scale(1);\n}\n\n.hover07[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\tfilter: blur(3px);\n\ttransition: .3s ease-in-out;\n}\n.hover07[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\tfilter: blur(0);\n}\n\n.hover08[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\tfilter: grayscale(100%);\n\ttransition: .3s ease-in-out;\n}\n.hover08[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\tfilter: grayscale(0);\n}\n\n.hover09[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\tfilter: sepia(100%);\n\ttransition: .3s ease-in-out;\n}\n.hover09[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\tfilter: sepia(0);\n}\n\n.hover10[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\tfilter: grayscale(0) blur(0);\n\ttransition: .3s ease-in-out;\n}\n.hover10[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\tfilter: grayscale(100%) blur(3px);\n}\n\n.hover11[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\topacity: 1;\n\ttransition: .3s ease-in-out;\n}\n.hover11[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\topacity: .5;\n}\n\n.hover12[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n\tbackground: #1abc9c;\n}\n.hover12[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\topacity: 1;\n\ttransition: .3s ease-in-out;\n}\n.hover12[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\topacity: .5;\n}\n\n.hover13[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n\topacity: 1;\n\tanimation: flash 1.5s;\n}\n@keyframes flash {\n\t0% {\n\t\topacity: .4;\n\t}\n\t100% {\n\t\topacity: 1;\n\t}\n}\n\n.hover14[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n\tposition: relative;\n}\n.hover14[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]::before {\n\tposition: absolute;\n\ttop: 0;\n\tleft: -75%;\n\tz-index: 2;\n\tdisplay: block;\n\tcontent: '';\n\twidth: 50%;\n\theight: 100%;\n\tbackground: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);\n\ttransform: skewX(-25deg);\n}\n.hover14[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover::before {\n\tanimation: shine .75s;\n}\n@keyframes shine {\n\t100% {\n\t\tleft: 125%;\n\t}\n}\n\n.hover15[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n\tposition: relative;\n}\n.hover15[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]::before {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tz-index: 2;\n\tdisplay: block;\n\tcontent: '';\n\twidth: 0;\n\theight: 0;\n\tbackground: rgba(255,255,255,.2);\n\tborder-radius: 100%;\n\ttransform: translate(-50%, -50%);\n\topacity: 0;\n}\n.hover15[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover::before {\n\tanimation: circle .75s;\n}\n@keyframes circle {\n\t0% {\n\t\topacity: 1;\n\t}\n\t40% {\n\t\topacity: 1;\n\t}\n\t100% {\n\t\twidth: 200%;\n\t\theight: 200%;\n\t\topacity: 0;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVtYWhzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLG9DQUFvQztDQUNwQyxnQkFBZ0I7QUFDakI7QUFDQTs7Q0FFQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixXQUFXO0NBQ1gsY0FBYztBQUNmO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxvQkFBb0I7QUFDckI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsY0FBYztBQUNmO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLE9BQU87Q0FDUCxXQUFXO0NBQ1gsY0FBYztDQUNkLFlBQVk7Q0FDWixTQUFTO0NBQ1QsVUFBVTtDQUNWLFdBQVc7Q0FDWCxlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUVsQiwyQkFBMkI7Q0FDM0IsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsdUJBQXVCO0NBQ3ZCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLFVBQVU7QUFDWDtBQUlBLGVBQWU7QUFDZjtDQUVDLG1CQUFtQjtDQUVuQiwyQkFBMkI7QUFDNUI7QUFDQTtDQUVDLHFCQUFxQjtBQUN0QjtBQUVBLGVBQWU7QUFDZjtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBRVosMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFFQSxnQkFBZ0I7QUFDaEI7Q0FFQyxxQkFBcUI7Q0FFckIsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FFQyxtQkFBbUI7QUFDcEI7QUFFQSxnQkFBZ0I7QUFDaEI7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUVaLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBRUEsVUFBVTtBQUNWO0NBQ0MsaUJBQWlCO0NBRWpCLHFCQUFxQjtDQUVyQiwyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUVBLFdBQVc7QUFDWDtDQUVDLG1DQUFtQztDQUVuQywyQkFBMkI7QUFDNUI7QUFDQTtDQUVDLDZCQUE2QjtBQUM5QjtBQUVBLFNBQVM7QUFDVDtDQUVDLGlCQUFpQjtDQUVqQiwyQkFBMkI7QUFDNUI7QUFDQTtDQUVDLGVBQWU7QUFDaEI7QUFFQSxlQUFlO0FBQ2Y7Q0FFQyx1QkFBdUI7Q0FFdkIsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FFQyxvQkFBb0I7QUFDckI7QUFFQSxVQUFVO0FBQ1Y7Q0FFQyxtQkFBbUI7Q0FFbkIsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FFQyxnQkFBZ0I7QUFDakI7QUFFQSxzQkFBc0I7QUFDdEI7Q0FFQyw0QkFBNEI7Q0FFNUIsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FFQyxpQ0FBaUM7QUFDbEM7QUFFQSxlQUFlO0FBQ2Y7Q0FDQyxVQUFVO0NBRVYsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFFQSxlQUFlO0FBQ2Y7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLFVBQVU7Q0FFViwyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUVBLGFBQWE7QUFDYjtDQUNDLFVBQVU7Q0FFVixxQkFBcUI7QUFDdEI7QUFTQTtDQUNDO0VBQ0MsV0FBVztDQUNaO0NBQ0E7RUFDQyxVQUFVO0NBQ1g7QUFDRDtBQUVBLFVBQVU7QUFDVjtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixVQUFVO0NBQ1YsVUFBVTtDQUNWLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsVUFBVTtDQUNWLFlBQVk7Q0FFWix3RkFBd0Y7Q0FFeEYsd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FFQyxxQkFBcUI7QUFDdEI7QUFNQTtDQUNDO0VBQ0MsVUFBVTtDQUNYO0FBQ0Q7QUFFQSxXQUFXO0FBQ1g7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULFVBQVU7Q0FDVixjQUFjO0NBQ2QsV0FBVztDQUNYLFFBQVE7Q0FDUixTQUFTO0NBQ1QsZ0NBQWdDO0NBQ2hDLG1CQUFtQjtDQUVuQixnQ0FBZ0M7Q0FDaEMsVUFBVTtBQUNYO0FBQ0E7Q0FFQyxzQkFBc0I7QUFDdkI7QUFjQTtDQUNDO0VBQ0MsVUFBVTtDQUNYO0NBQ0E7RUFDQyxVQUFVO0NBQ1g7Q0FDQTtFQUNDLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtDQUNYO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9wdW1haHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcblx0Y29sb3I6ICMzMzM7XG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcbn1cbmgxLFxuaDErcCB7XG5cdG1hcmdpbjogMzBweCAxNXB4IDA7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5oMStwIGEge1xuXHRjb2xvcjogIzMzMztcbn1cbmgxK3AgYTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmgyIHtcblx0bWFyZ2luOiA2MHB4IDE1cHggMDtcblx0cGFkZGluZzogMDtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcbn1cbmgyIHNwYW4ge1xuXHRtYXJnaW4tbGVmdDogMWVtO1xuXHRjb2xvcjogI2FhYTtcblx0Zm9udC1zaXplOiA4NSU7XG59XG4uY29sdW1uIHtcblx0bWFyZ2luOiAxNXB4IDE1cHggMDtcblx0cGFkZGluZzogMDtcbn1cbi5jb2x1bW46bGFzdC1jaGlsZCB7XG5cdHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuLmNvbHVtbjo6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y2xlYXI6IGJvdGg7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbHVtbiBkaXYge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGZsb2F0OiBsZWZ0O1xuXHR3aWR0aDogMzAwcHg7XG5cdGhlaWdodDogMjAwcHg7XG5cdG1hcmdpbjogMCAwIDAgMjVweDtcblx0cGFkZGluZzogMDtcbn1cbi5jb2x1bW4gZGl2OmZpcnN0LWNoaWxkIHtcblx0bWFyZ2luLWxlZnQ6IDA7XG59XG4uY29sdW1uIGRpdiBzcGFuIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IC0yMHB4O1xuXHRsZWZ0OiAwO1xuXHR6LWluZGV4OiAtMTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiAzMDBweDtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRjb2xvcjogIzQ0NDtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG5cdHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcblx0b3BhY2l0eTogMDtcbn1cbmZpZ3VyZSB7XG5cdHdpZHRoOiAzMDBweDtcblx0aGVpZ2h0OiAyMDBweDtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmZpZ3VyZTpob3ZlcitzcGFuIHtcblx0Ym90dG9tOiAtMzZweDtcblx0b3BhY2l0eTogMTtcbn1cblxuXG5cbi8qIFpvb20gSW4gIzEgKi9cbi5ob3ZlcjAxIGZpZ3VyZSBpbWcge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdHRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuXHR0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uaG92ZXIwMSBmaWd1cmU6aG92ZXIgaW1nIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG5cdHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuLyogWm9vbSBJbiAjMiAqL1xuLmhvdmVyMDIgZmlndXJlIGltZyB7XG5cdHdpZHRoOiAzMDBweDtcblx0aGVpZ2h0OiBhdXRvO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcblx0dHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xufVxuLmhvdmVyMDIgZmlndXJlOmhvdmVyIGltZyB7XG5cdHdpZHRoOiAzNTBweDtcbn1cblxuLyogWm9vbSBPdXQgIzEgKi9cbi5ob3ZlcjAzIGZpZ3VyZSBpbWcge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcblx0dHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xufVxuLmhvdmVyMDMgZmlndXJlOmhvdmVyIGltZyB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLyogWm9vbSBPdXQgIzIgKi9cbi5ob3ZlcjA0IGZpZ3VyZSBpbWcge1xuXHR3aWR0aDogNDAwcHg7XG5cdGhlaWdodDogYXV0bztcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG5cdHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbn1cbi5ob3ZlcjA0IGZpZ3VyZTpob3ZlciBpbWcge1xuXHR3aWR0aDogMzAwcHg7XG59XG5cbi8qIFNsaWRlICovXG4uaG92ZXIwNSBmaWd1cmUgaW1nIHtcblx0bWFyZ2luLWxlZnQ6IDMwcHg7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuXHR0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uaG92ZXIwNSBmaWd1cmU6aG92ZXIgaW1nIHtcblx0bWFyZ2luLWxlZnQ6IDA7XG59XG5cbi8qIFJvdGF0ZSAqL1xuLmhvdmVyMDYgZmlndXJlIGltZyB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpIHNjYWxlKDEuNCk7XG5cdHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKSBzY2FsZSgxLjQpO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcblx0dHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xufVxuLmhvdmVyMDYgZmlndXJlOmhvdmVyIGltZyB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCkgc2NhbGUoMSk7XG5cdHRyYW5zZm9ybTogcm90YXRlKDApIHNjYWxlKDEpO1xufVxuXG4vKiBCbHVyICovXG4uaG92ZXIwNyBmaWd1cmUgaW1nIHtcblx0LXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcblx0ZmlsdGVyOiBibHVyKDNweCk7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuXHR0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uaG92ZXIwNyBmaWd1cmU6aG92ZXIgaW1nIHtcblx0LXdlYmtpdC1maWx0ZXI6IGJsdXIoMCk7XG5cdGZpbHRlcjogYmx1cigwKTtcbn1cblxuLyogR3JheSBTY2FsZSAqL1xuLmhvdmVyMDggZmlndXJlIGltZyB7XG5cdC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG5cdGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcblx0dHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xufVxuLmhvdmVyMDggZmlndXJlOmhvdmVyIGltZyB7XG5cdC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMCk7XG5cdGZpbHRlcjogZ3JheXNjYWxlKDApO1xufVxuXG4vKiBTZXBpYSAqL1xuLmhvdmVyMDkgZmlndXJlIGltZyB7XG5cdC13ZWJraXQtZmlsdGVyOiBzZXBpYSgxMDAlKTtcblx0ZmlsdGVyOiBzZXBpYSgxMDAlKTtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG5cdHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcbn1cbi5ob3ZlcjA5IGZpZ3VyZTpob3ZlciBpbWcge1xuXHQtd2Via2l0LWZpbHRlcjogc2VwaWEoMCk7XG5cdGZpbHRlcjogc2VwaWEoMCk7XG59XG5cbi8qIEJsdXIgKyBHcmF5IFNjYWxlICovXG4uaG92ZXIxMCBmaWd1cmUgaW1nIHtcblx0LXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwKSBibHVyKDApO1xuXHRmaWx0ZXI6IGdyYXlzY2FsZSgwKSBibHVyKDApO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcblx0dHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xufVxuLmhvdmVyMTAgZmlndXJlOmhvdmVyIGltZyB7XG5cdC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgYmx1cigzcHgpO1xuXHRmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBibHVyKDNweCk7XG59XG5cbi8qIE9wYWNpdHkgIzEgKi9cbi5ob3ZlcjExIGZpZ3VyZSBpbWcge1xuXHRvcGFjaXR5OiAxO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcblx0dHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xufVxuLmhvdmVyMTEgZmlndXJlOmhvdmVyIGltZyB7XG5cdG9wYWNpdHk6IC41O1xufVxuXG4vKiBPcGFjaXR5ICMyICovXG4uaG92ZXIxMiBmaWd1cmUge1xuXHRiYWNrZ3JvdW5kOiAjMWFiYzljO1xufVxuLmhvdmVyMTIgZmlndXJlIGltZyB7XG5cdG9wYWNpdHk6IDE7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuXHR0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uaG92ZXIxMiBmaWd1cmU6aG92ZXIgaW1nIHtcblx0b3BhY2l0eTogLjU7XG59XG5cbi8qIEZsYXNoaW5nICovXG4uaG92ZXIxMyBmaWd1cmU6aG92ZXIgaW1nIHtcblx0b3BhY2l0eTogMTtcblx0LXdlYmtpdC1hbmltYXRpb246IGZsYXNoIDEuNXM7XG5cdGFuaW1hdGlvbjogZmxhc2ggMS41cztcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmbGFzaCB7XG5cdDAlIHtcblx0XHRvcGFjaXR5OiAuNDtcblx0fVxuXHQxMDAlIHtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG59XG5Aa2V5ZnJhbWVzIGZsYXNoIHtcblx0MCUge1xuXHRcdG9wYWNpdHk6IC40O1xuXHR9XG5cdDEwMCUge1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cbn1cblxuLyogU2hpbmUgKi9cbi5ob3ZlcjE0IGZpZ3VyZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob3ZlcjE0IGZpZ3VyZTo6YmVmb3JlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IC03NSU7XG5cdHotaW5kZXg6IDI7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRjb250ZW50OiAnJztcblx0d2lkdGg6IDUwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCByZ2JhKDI1NSwyNTUsMjU1LC4zKSAxMDAlKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCByZ2JhKDI1NSwyNTUsMjU1LC4zKSAxMDAlKTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0yNWRlZyk7XG5cdHRyYW5zZm9ybTogc2tld1goLTI1ZGVnKTtcbn1cbi5ob3ZlcjE0IGZpZ3VyZTpob3Zlcjo6YmVmb3JlIHtcblx0LXdlYmtpdC1hbmltYXRpb246IHNoaW5lIC43NXM7XG5cdGFuaW1hdGlvbjogc2hpbmUgLjc1cztcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzaGluZSB7XG5cdDEwMCUge1xuXHRcdGxlZnQ6IDEyNSU7XG5cdH1cbn1cbkBrZXlmcmFtZXMgc2hpbmUge1xuXHQxMDAlIHtcblx0XHRsZWZ0OiAxMjUlO1xuXHR9XG59XG5cbi8qIENpcmNsZSAqL1xuLmhvdmVyMTUgZmlndXJlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvdmVyMTUgZmlndXJlOjpiZWZvcmUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlO1xuXHRsZWZ0OiA1MCU7XG5cdHotaW5kZXg6IDI7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRjb250ZW50OiAnJztcblx0d2lkdGg6IDA7XG5cdGhlaWdodDogMDtcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMik7XG5cdGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHRvcGFjaXR5OiAwO1xufVxuLmhvdmVyMTUgZmlndXJlOmhvdmVyOjpiZWZvcmUge1xuXHQtd2Via2l0LWFuaW1hdGlvbjogY2lyY2xlIC43NXM7XG5cdGFuaW1hdGlvbjogY2lyY2xlIC43NXM7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgY2lyY2xlIHtcblx0MCUge1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblx0NDAlIHtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cdDEwMCUge1xuXHRcdHdpZHRoOiAyMDAlO1xuXHRcdGhlaWdodDogMjAwJTtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG59XG5Aa2V5ZnJhbWVzIGNpcmNsZSB7XG5cdDAlIHtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cdDQwJSB7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXHQxMDAlIHtcblx0XHR3aWR0aDogMjAwJTtcblx0XHRoZWlnaHQ6IDIwMCU7XG5cdFx0b3BhY2l0eTogMDtcblx0fVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map