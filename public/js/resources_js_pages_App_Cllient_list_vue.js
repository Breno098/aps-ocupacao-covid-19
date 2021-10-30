(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_App_Cllient_list_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/App/Cllient/list.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/App/Cllient/list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dialog: false,
      deleted: {},
      search: '',
      clients: [],
      headers: [{
        text: 'Nome',
        value: 'name'
      }, {}]
    };
  },
  methods: {
    _edit: function _edit(id) {// this.$inertia.get( route('adm.country.edit',{ id }) );
    },
    _delete: function _delete(id) {
      // this.$inertia.delete( route('adm.country.destroy', { id }) );
      this.dialog = false;
    },
    filterOnlyCapsText: function filterOnlyCapsText(value, search, item) {
      return value != null && search != null && typeof value === 'string' && value.toString().indexOf(search) !== -1;
    },
    confirmDelete: function confirmDelete(deleted) {
      this.deleted = deleted;
      this.dialog = true;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/App/Cllient/list.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/App/Cllient/list.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list_vue_vue_type_template_id_578db8bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=578db8bf& */ "./resources/js/pages/App/Cllient/list.vue?vue&type=template&id=578db8bf&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./resources/js/pages/App/Cllient/list.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _list_vue_vue_type_template_id_578db8bf___WEBPACK_IMPORTED_MODULE_0__.render,
  _list_vue_vue_type_template_id_578db8bf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/App/Cllient/list.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/App/Cllient/list.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/App/Cllient/list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/App/Cllient/list.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/App/Cllient/list.vue?vue&type=template&id=578db8bf&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/App/Cllient/list.vue?vue&type=template&id=578db8bf& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_578db8bf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_578db8bf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_578db8bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./list.vue?vue&type=template&id=578db8bf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/App/Cllient/list.vue?vue&type=template&id=578db8bf&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/App/Cllient/list.vue?vue&type=template&id=578db8bf&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/App/Cllient/list.vue?vue&type=template&id=578db8bf& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    { staticClass: "justify-center" },
    [
      _c(
        "v-col",
        { attrs: { cols: "12" } },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                { staticClass: "d-flex justify-end mb-6" },
                [
                  _c(
                    "inertia-link",
                    {
                      staticStyle: { "text-decoration": "none" },
                      attrs: { href: _vm.route("adm.country.create") }
                    },
                    [
                      _c(
                        "v-btn",
                        { attrs: { text: "", color: "green darken-1" } },
                        [
                          _vm._v("\n                        Adicionar "),
                          _c("v-icon", { attrs: { dark: "" } }, [
                            _vm._v("mdi-plus")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.clients,
                      search: _vm.search
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "top",
                        fn: function() {
                          return [
                            _c(
                              "v-toolbar",
                              { attrs: { flat: "" } },
                              [
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-toolbar-title",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        "append-icon": "mdi-magnify",
                                        label: "Procurar",
                                        "single-line": "",
                                        color: "green darken-1"
                                      },
                                      model: {
                                        value: _vm.search,
                                        callback: function($$v) {
                                          _vm.search = $$v
                                        },
                                        expression: "search"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "item",
                        fn: function(row) {
                          return [
                            _c("tr", [
                              _c("td", [_vm._v(_vm._s(row.item.name))]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "v-menu",
                                    {
                                      attrs: {
                                        transition: "slide-y-transition",
                                        bottom: ""
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              var attrs = ref.attrs
                                              return [
                                                _c(
                                                  "v-btn",
                                                  _vm._g(
                                                    _vm._b(
                                                      {
                                                        attrs: {
                                                          text: "",
                                                          block: ""
                                                        }
                                                      },
                                                      "v-btn",
                                                      attrs,
                                                      false
                                                    ),
                                                    on
                                                  ),
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v(
                                                        "mdi-dots-vertical"
                                                      )
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "v-list",
                                        { attrs: { nav: "", dense: "" } },
                                        [
                                          _c(
                                            "v-list-item",
                                            {
                                              on: {
                                                click: function($event) {
                                                  return _vm._edit(row.item.id)
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-list-item-icon",
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: {
                                                        outlined: "",
                                                        color: "green"
                                                      }
                                                    },
                                                    [_vm._v("mdi-pencil")]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item-content",
                                                [
                                                  _c("v-list-item-title", [
                                                    _vm._v(" Editar ")
                                                  ])
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-item",
                                            {
                                              on: {
                                                click: function($event) {
                                                  return _vm.confirmDelete(
                                                    row.item
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-list-item-icon",
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: {
                                                        outlined: "",
                                                        color: "red"
                                                      }
                                                    },
                                                    [_vm._v("mdi-delete")]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item-content",
                                                [
                                                  _c("v-list-item-title", [
                                                    _vm._v(" Deletar ")
                                                  ])
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ])
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { "max-width": "350" },
                  model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                      _vm.dialog = $$v
                    },
                    expression: "dialog"
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-alert",
                            {
                              staticClass: "text-center pt-3",
                              attrs: { dense: "", text: "" }
                            },
                            [_vm._v(" " + _vm._s(_vm.deleted.name))]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-alert",
                            {
                              staticClass: "text-center pb-3",
                              attrs: {
                                dense: "",
                                text: "",
                                border: "bottom",
                                "colored-border": "",
                                color: "red"
                              }
                            },
                            [_vm._v(" Excluir ? ")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "green darken-1", text: "" },
                              on: {
                                click: function($event) {
                                  _vm.dialog = false
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("mdi-close")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "red darken-1", text: "" },
                              on: {
                                click: function($event) {
                                  return _vm._delete(_vm.deleted.id)
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("mdi-check")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-spacer")
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);