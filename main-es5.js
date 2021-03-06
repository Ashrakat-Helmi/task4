function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about-us/about-us.component.ts": function srcAppAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutUsComponent = /*#__PURE__*/function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent.??fac = function AboutUsComponent_Factory(t) {
      return new (t || AboutUsComponent)();
    };

    AboutUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AboutUsComponent,
      selectors: [["app-about-us"]],
      decls: 25,
      vars: 0,
      consts: [["id", "AboutUs", 1, "AboutUs", "mb-5", "pad"], [1, "aboutheader"], [1, "hr"], [1, "hr1"], [1, "hr2"], [1, "continer"], [1, "row", "mr-2", "ml-2"], [1, "col-lg-5"], [1, "aboutImg"], ["src", "../../assets/img/eagle.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-7", "mt-5"]],
      template: function AboutUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Our Mission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Our Mission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Our Mission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["p[_ngcontent-%COMP%]{\r\n    color: blanchedalmond;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-us',
          templateUrl: './about-us.component.html',
          styleUrls: ['./about-us.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/add-task/add-task.component.ts": function srcAppAddTaskAddTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function () {
      return AddTaskComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddTaskComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddTaskComponent_li_6_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

          var data_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r2.remove(data_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", data_r1, " ");
      }
    }

    var AddTaskComponent = /*#__PURE__*/function () {
      function AddTaskComponent() {
        _classCallCheck(this, AddTaskComponent);

        this.tasks = [];
      }

      _createClass(AddTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addName",
        value: function addName() {
          this.tasks.push(this.newValue);
          this.newValue = "";
        }
      }, {
        key: "remove",
        value: function remove(data) {
          var index = this.tasks.indexOf(data);
          this.tasks.splice(index, 1);
        }
      }]);

      return AddTaskComponent;
    }();

    AddTaskComponent.??fac = function AddTaskComponent_Factory(t) {
      return new (t || AddTaskComponent)();
    };

    AddTaskComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AddTaskComponent,
      selectors: [["app-add-task"]],
      decls: 7,
      vars: 2,
      consts: [[1, "ml-5"], ["type", "text", "placeholder", "write your task", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-block", "mt-1", 3, "click"], [4, "ngFor", "ngForOf"], [1, "fas", "fa-trash-alt", "ml-5", 3, "click"]],
      template: function AddTaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddTaskComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.newValue = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddTaskComponent_Template_button_click_3_listener() {
            return ctx.addName();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AddTaskComponent_li_6_Template, 3, 1, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.tasks);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["section[_ngcontent-%COMP%] {\r\n  margin: 60px 0px 20px;\r\n  background-color: black;\r\n  color: rgba(130, 59, 177, 0.829);\r\n  height: 400px;\r\n  overflow: auto;\r\n}\r\ndiv[_ngcontent-%COMP%]{\r\n    margin:30px 30px 0px 0px ;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    color: rgba(130, 59, 177, 0.829);\r\n border-color: rgba(130, 59, 177, 0.829);\r\n}\r\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n}\r\n@media (max-width: 750px){\r\n    .btn[_ngcontent-%COMP%] {\r\n        margin: 0px; \r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXRhc2svYWRkLXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdDQUFnQztDQUNuQyx1Q0FBdUM7QUFDeEM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJO1FBQ0ksV0FBVztJQUNmOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvYWRkLXRhc2svYWRkLXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIG1hcmdpbjogNjBweCAwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogcmdiYSgxMzAsIDU5LCAxNzcsIDAuODI5KTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbmRpdntcclxuICAgIG1hcmdpbjozMHB4IDMwcHggMHB4IDBweCA7XHJcbn1cclxuLmJ0bntcclxuICAgIGNvbG9yOiByZ2JhKDEzMCwgNTksIDE3NywgMC44MjkpO1xyXG4gYm9yZGVyLWNvbG9yOiByZ2JhKDEzMCwgNTksIDE3NywgMC44MjkpO1xyXG59XHJcbm9sIGxpe1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCl7XHJcbiAgICAuYnRuIHtcclxuICAgICAgICBtYXJnaW46IDBweDsgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-task',
          templateUrl: './add-task.component.html',
          styleUrls: ['./add-task.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./add-task/add-task.component */
    "./src/app/add-task/add-task.component.ts");
    /* harmony import */


    var _style_style_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./style/style.component */
    "./src/app/style/style.component.ts");
    /* harmony import */


    var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/not-found/not-found.component */
    "./src/app/shared/not-found/not-found.component.ts");
    /* harmony import */


    var _gallary_gallary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./gallary/gallary.component */
    "./src/app/gallary/gallary.component.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/contact-us/contact-us.component.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/about-us/about-us.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }, {
      path: "home",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }, {
      path: "about",
      component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"]
    }, {
      path: "contact",
      component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"]
    }, {
      path: "gallary",
      component: _gallary_gallary_component__WEBPACK_IMPORTED_MODULE_3__["GallaryComponent"]
    }, {
      path: "style",
      component: _style_style_component__WEBPACK_IMPORTED_MODULE_1__["StyleComponent"]
    }, {
      path: "add",
      component: _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_0__["AddTaskComponent"]
    }, {
      path: "**",
      component: _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'start-app';
    };

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-footer");
        }
      },
      directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/about-us/about-us.component.ts");
    /* harmony import */


    var _gallary_gallary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./gallary/gallary.component */
    "./src/app/gallary/gallary.component.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/contact-us/contact-us.component.ts");
    /* harmony import */


    var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/not-found/not-found.component */
    "./src/app/shared/not-found/not-found.component.ts");
    /* harmony import */


    var _style_style_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./style/style.component */
    "./src/app/style/style.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./add-task/add-task.component */
    "./src/app/add-task/add-task.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"], _gallary_gallary_component__WEBPACK_IMPORTED_MODULE_8__["GallaryComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"], _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"], _style_style_component__WEBPACK_IMPORTED_MODULE_11__["StyleComponent"], _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_13__["AddTaskComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"], _gallary_gallary_component__WEBPACK_IMPORTED_MODULE_8__["GallaryComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"], _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"], _style_style_component__WEBPACK_IMPORTED_MODULE_11__["StyleComponent"], _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_13__["AddTaskComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact-us/contact-us.component.ts": function srcAppContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ContactUsComponent = /*#__PURE__*/function () {
      function ContactUsComponent() {
        _classCallCheck(this, ContactUsComponent);
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent.??fac = function ContactUsComponent_Factory(t) {
      return new (t || ContactUsComponent)();
    };

    ContactUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ContactUsComponent,
      selectors: [["app-contact-us"]],
      decls: 29,
      vars: 0,
      consts: [["id", "ContactUs", 1, "ContactUs", "mb-5", "pad"], [1, "aboutheader"], [1, "hr"], [1, "hr1"], [1, "hr2"], [1, "container", "mb-5"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "formGroupExampleInput"], ["type", "text", "id", "formGroupExampleInput", "placeholder", "Full Name", 1, "form-control"], ["for", "formGroupExampleInput2"], ["type", "text", "id", "formGroupExampleInput2", "placeholder", "Phone Number", 1, "form-control"], ["type", "text", "id", "formGroupExampleInput2", "placeholder", " Porduct ID", 1, "form-control"], ["type", "button", 1, "btn"], ["src", "../../assets/img/map.jpg", "alt", "", 1, "img-fluid"]],
      template: function ContactUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Contact Us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Order Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Your Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Your Phone :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Porduct ID :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Buy Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: [".btn[_ngcontent-%COMP%]{\r\n    border-color: rgba(179, 118, 219, 0.973);\r\n    color:rgba(179, 118, 219, 0.973);\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBd0M7SUFDeEMsZ0NBQWdDO0NBQ25DIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE3OSwgMTE4LCAyMTksIDAuOTczKTtcclxuICAgIGNvbG9yOnJnYmEoMTc5LCAxMTgsIDIxOSwgMC45NzMpO1xyXG4gfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-us',
          templateUrl: './contact-us.component.html',
          styleUrls: ['./contact-us.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/gallary/gallary.component.ts": function srcAppGallaryGallaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GallaryComponent", function () {
      return GallaryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GallaryComponent = /*#__PURE__*/function () {
      function GallaryComponent() {
        _classCallCheck(this, GallaryComponent);
      }

      _createClass(GallaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GallaryComponent;
    }();

    GallaryComponent.??fac = function GallaryComponent_Factory(t) {
      return new (t || GallaryComponent)();
    };

    GallaryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: GallaryComponent,
      selectors: [["app-gallary"]],
      decls: 79,
      vars: 0,
      consts: [["id", "Gallary", 1, "Gallary", "mb-5", "pad"], [1, "aboutheader"], [1, "hr"], [1, "hr1"], [1, "hr2"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs", "justify-content-between"], ["id", "nav-home-tab", "data-toggle", "tab", "href", "#nav-home", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "nav-profile-tab", "data-toggle", "tab", "href", "#nav-profile", "role", "tab", "aria-controls", "nav-profile", "aria-selected", "false", 1, "nav-link"], ["id", "nav-contact-tab", "data-toggle", "tab", "href", "#nav-contact", "role", "tab", "aria-controls", "nav-contact", "aria-selected", "false", 1, "nav-link"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-home", "role", "tabpanel", "aria-labelledby", "nav-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "container"], [1, "row", "justify-content-between"], [1, "col-md-4", "bor"], [1, "contant"], ["src", "../../assets/img/pro11.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["src", "../../assets/img/pro12.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["src", "../../assets/img/pro13.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["src", "../../assets/img/pro14.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["src", "../../assets/img/pro15.jpeg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["src", "../../assets/img/pro16.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["id", "nav-profile", "role", "tabpanel", "aria-labelledby", "nav-profile-tab", 1, "tab-pane", "fade"], [1, "col-md-4", "bor", "mb-5"], ["src", "../../assets/img/pro21.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["src", "../../assets/img/pro22.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["src", "../../assets/img/pro23.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["src", "../../assets/img/\u0627pro24jpg.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["src", "../../assets/img/pro25.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["src", "../../assets/img/pro26.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["id", "nav-contact", "role", "tabpanel", "aria-labelledby", "nav-contact-tab", 1, "tab-pane", "fade"], ["src", "../../assets/img/pro31.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["src", "../../assets/img/pro32.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["src", "../../assets/img/pro33.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["src", "../../assets/img/pro34.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["src", "../../assets/img/pro35.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"], ["src", "../../assets/img/pro36.jpg", "alt", "", 1, "img-fluid", "w-100", "h-100"]],
      template: function GallaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Our Gallary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Product 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Product 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Product 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: [".nav-tabs[_ngcontent-%COMP%] {\r\n    margin: 10px auto;\r\n    width: 50%;\r\n    border: 1px solid white;\r\n    border-radius: 20px;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\nborder-radius: 20px;\r\ncolor: rgba(130, 59, 177, 0.829);\r\n}\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{\r\n    color: rgba(46, 14, 66, 0.973);\r\n    border-radius: 50px;\r\n    font-weight: 600;\r\n}\r\n.contant[_ngcontent-%COMP%]{\r\n    width: 85%;\r\n    height: 30vh;\r\n    margin: 5px 0px;\r\n}\r\n.contant[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border: 2px solid rgba(177, 119, 216, 0.973);\r\n    border-radius: 20px;\r\n   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGFyeS9nYWxsYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixnQ0FBZ0M7QUFDaEM7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDRDQUE0QztJQUM1QyxtQkFBbUI7O0FBRXZCIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGFyeS9nYWxsYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXRhYnMge1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWxpbmt7XHJcbmJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbmNvbG9yOiByZ2JhKDEzMCwgNTksIDE3NywgMC44MjkpO1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZle1xyXG4gICAgY29sb3I6IHJnYmEoNDYsIDE0LCA2NiwgMC45NzMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmNvbnRhbnR7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcbi5jb250YW50IGltZ3tcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTc3LCAxMTksIDIxNiwgMC45NzMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GallaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gallary',
          templateUrl: './gallary.component.html',
          styleUrls: ['./gallary.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts": function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.??fac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 17,
      vars: 0,
      consts: [["id", "home", 1, "home"], ["id", "carouselExampleFade", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../assets/img/back3.jpg", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "../../assets/img/back2.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "../../assets/img/back1.jpg", "alt", "...", 1, "d-block", "w-100"], ["href", "#carouselExampleFade", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleFade", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/footer/footer.component.ts": function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.??fac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 67,
      vars: 0,
      consts: [["id", "Footer"], [1, "site-footer", "pad"], [1, "container"], [1, "row"], [1, "col-sm-12", "col-md-6"], [1, "col-sm-6", "col-md-3"], [1, "footer-links"], ["href", "#"], [1, "hr5"], [1, "col-sm-6", "col-md-8"], [1, "copyright-text"], [1, "col-sm-6", "col-md-4"], [1, "social-icon"], ["href", "#", 1, "ico"], [1, "fab", "fa-facebook"], [1, "fab", "fa-instagram-square"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "footer", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Scanfcode.com is an initiative to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "UI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "PHP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "C++");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "C#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Quick Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Contact US");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Contribute");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Sitemap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "hr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Copyright \xA9 2017 All Rights Reserved by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Scanfcode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/navbar/navbar.component.ts": function srcAppSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.??fac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 31,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "fixed-top"], [1, "navbar-brand", "mb-0", "h1"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "fas", "fa-sort-amount-down"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "ee"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "/home", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/gallary", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"], ["routerLink", "/style", 1, "nav-link"], ["routerLink", "/add", 1, "nav-link"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-outline-dark", "my-2", "my-sm-0"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "ASH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Gallary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Add-Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/not-found/not-found.component.ts": function srcAppSharedNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.??fac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 2,
      vars: 0,
      consts: [[1, "m-5"], ["src", "../../../assets/img/images.png", "alt", "", 1, "img-fluid", "w-100"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/style/style.component.ts": function srcAppStyleStyleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleComponent", function () {
      return StyleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var StyleComponent = /*#__PURE__*/function () {
      function StyleComponent() {
        _classCallCheck(this, StyleComponent);
      }

      _createClass(StyleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StyleComponent;
    }();

    StyleComponent.??fac = function StyleComponent_Factory(t) {
      return new (t || StyleComponent)();
    };

    StyleComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: StyleComponent,
      selectors: [["app-style"]],
      decls: 35,
      vars: 18,
      consts: [[1, "style"], [1, "container", "mt-2"], [1, "row"], [1, "col-lg-6", "font2"], [1, "form1"], [1, "form-group"], ["for", "width", 1, "ml-1"], ["type", "text", "aria-describedby", "emailHelp", "placeholder", "please enter width with px", 1, "form-control", "rounded-pill", 3, "ngModel", "ngModelChange"], ["for", "Hight", 1, "ml-1"], ["type", "text", "placeholder", "please enter hight with px", 1, "form-control", "rounded-pill", 3, "ngModel", "ngModelChange"], ["for", "backGroundColor", 1, "ml-1"], ["type", "text", "placeholder", "please enter color", 1, "form-control", "rounded-pill", 3, "ngModel", "ngModelChange"], ["for", "margin", 1, "ml-1"], ["type", "text", "placeholder", "please enter margin with px", 1, "form-control", "rounded-pill", 3, "ngModel", "ngModelChange"], ["for", "padding", 1, "ml-1"], ["type", "text", "placeholder", "please enter padding with px", 1, "form-control", "rounded-pill", 3, "ngModel", "ngModelChange"], ["for", "border-radius", 1, "ml-1"], ["type", "text", "placeholder", "please enter border-radius with px", 1, "form-control", "rounded-pill", 3, "ngModel", "ngModelChange"], [1, "col-lg-6"], [1, "stylee"], [1, "text-center", "font1"], [1, "AddStyle"]],
      template: function StyleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Width");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function StyleComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.w = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Hight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function StyleComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.h = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "BackGroundColor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function StyleComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.bgc = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "margin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function StyleComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.m = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "padding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function StyleComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.p = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "border-radius");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function StyleComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.br = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h1", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Your Style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.w);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.h);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.bgc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.m);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.p);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.br);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", ctx.w)("height", ctx.h)("background-color", ctx.bgc)("margin", ctx.m)("border-radius", ctx.br)("padding", ctx.p);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: [".style[_ngcontent-%COMP%]{\r\nbackground-color: black;\r\ncolor: blueviolet;\r\nmargin: 60px 0px 20px;\r\n}\r\n.font1[_ngcontent-%COMP%]{\r\n    font-family: 'Hina Mincho', serif;\r\n    font-weight: bold;\r\n}\r\n.form1[_ngcontent-%COMP%]{\r\n    border: 1px white solid;\r\n    border-radius: 20px ;\r\n  \r\n    margin: 20px 0px;\r\n    padding: 20px;\r\n}\r\n.font2[_ngcontent-%COMP%]{\r\n    font-family: 'Ma Shan Zheng', cursive;\r\n    \r\n    font-size: 25px;\r\n}\r\n.stylee[_ngcontent-%COMP%]{\r\n    border: 1px white solid;\r\n    border-radius: 20px ;\r\n    margin: 20px 0px;\r\n\r\n}\r\n.AddStyle[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n@media(max-width :750px) {\r\n    .stylee[_ngcontent-%COMP%]{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .stylee[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGUvc3R5bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9COztJQUVwQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0kscUNBQXFDOztJQUVyQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFHQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc3R5bGUvc3R5bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHlsZXtcclxuYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbmNvbG9yOiBibHVldmlvbGV0O1xyXG5tYXJnaW46IDYwcHggMHB4IDIwcHg7XHJcbn1cclxuLmZvbnQxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdIaW5hIE1pbmNobycsIHNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtMXtcclxuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCA7XHJcbiAgXHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4uZm9udDJ7XHJcbiAgICBmb250LWZhbWlseTogJ01hIFNoYW4gWmhlbmcnLCBjdXJzaXZlO1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLnN0eWxlZXtcclxuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCA7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG5cclxufVxyXG4uQWRkU3R5bGUge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGggOjc1MHB4KSB7XHJcbiAgICAuc3R5bGVle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0eWxlZSBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](StyleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-style',
          templateUrl: './style.component.html',
          styleUrls: ['./style.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\web develop\task4\start-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map