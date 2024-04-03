(() => {
var exports = {};
exports.id = 414;
exports.ids = [414];
exports.modules = {

/***/ 7133:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "QRCodeEditPage_page__YFQZe",
	"title": "QRCodeEditPage_title__FJLcI"
};


/***/ }),

/***/ 8103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_qrcodes_id_js__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ private_next_pages_qrcodes_id_js__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var private_next_pages_qrcodes_id_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4339);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_qrcodes_id_js__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_qrcodes_id_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);


/***/ }),

/***/ 7969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const qrcodeSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    title: {
        type: String,
        default: ""
    },
    url: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});
const QRCode = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.QRCode) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("QRCode", qrcodeSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QRCode);


/***/ }),

/***/ 4339:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps),
/* harmony export */   "Z": () => (/* binding */ QRCodeEditPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_QRCodeForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6876);
/* harmony import */ var _styles_QRCodeEditPage_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7133);
/* harmony import */ var _styles_QRCodeEditPage_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_QRCodeEditPage_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _db_models_QRCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7969);
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(830);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1979);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_axios__WEBPACK_IMPORTED_MODULE_6__]);
_lib_axios__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








async function getServerSideProps(context) {
    const { id  } = context.query;
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const qrcode = await _db_models_QRCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findById */ .Z.findById(id);
    if (!qrcode) {
        return {
            notFound: true
        };
    } else {
        return {
            props: {
                qrcode: JSON.parse(JSON.stringify(qrcode))
            }
        };
    }
}
function QRCodeEditPage({ qrcode: initialQRCode  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { id  } = router.query;
    async function handleSubmit(values) {
        await _lib_axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"].patch */ .Z.patch(`/qrcodes/${id}`, values);
        router.push("/qrcodes");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "QRCode 수정하기 - Shortit"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_QRCodeEditPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().page),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_styles_QRCodeEditPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),
                        children: "QRCode 수정하기"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_QRCodeForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        type: _components_QRCodeForm__WEBPACK_IMPORTED_MODULE_2__/* .QRCodeFormType.Edit */ .H.Edit,
                        initialValues: initialQRCode,
                        onSubmit: handleSubmit
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [521,556,555,876], () => (__webpack_exec__(8103)));
module.exports = __webpack_exports__;

})();