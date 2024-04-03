"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/short-links";
exports.ids = ["pages/api/short-links"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "(api)/./db/dbConnect.ts":
/*!*************************!*\
  !*** ./db/dbConnect.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9kYkNvbm5lY3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBS2hDLE1BQU1DLGNBQWNDLFFBQVFDLElBQUlGO0FBRWhDLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQ1I7QUFFSjtBQUVBLElBQUlDLFNBQVNDLE9BQU9OO0FBRXBCLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTQyxPQUFPTixXQUFXO1FBQUVPLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ3pEO0FBRUEsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxNQUFNO1FBQ2YsT0FBT0YsT0FBT0U7SUFDaEI7SUFDQSxJQUFJLENBQUNGLE9BQU9HLFNBQVM7UUFDbkIsTUFBTUUsT0FBTztZQUNYQyxnQkFBZ0I7UUFDbEI7UUFDQU4sT0FBT0csVUFBVVIsdURBQWdCWSxDQUFDWCxhQUFhUyxNQUFNRyxLQUFLLENBQUNiO1lBQ3pELE9BQU9BO1FBQ1Q7SUFDRjtJQUNBLElBQUk7UUFDRkssT0FBT0UsT0FBTyxNQUFNRixPQUFPRztJQUM3QixFQUFFLE9BQU9NLEdBQUc7UUFDVlQsT0FBT0csVUFBVTtRQUNqQixNQUFNTTtJQUNSO0lBRUEsT0FBT1QsT0FBT0U7QUFDaEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3J0aXQvLi9kYi9kYkNvbm5lY3QudHM/ZDY4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBtb25nb29zZTogYW55OyAvLyBUaGlzIG11c3QgYmUgYSBgdmFyYCBhbmQgbm90IGEgYGxldCAvIGNvbnN0YFxufVxuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJITtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXG4gICk7XG59XG5cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XG5cbmlmICghY2FjaGVkKSB7XG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XG4gIGlmIChjYWNoZWQuY29ubikge1xuICAgIHJldHVybiBjYWNoZWQuY29ubjtcbiAgfVxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICB9O1xuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigobW9uZ29vc2UpID0+IHtcbiAgICAgIHJldHVybiBtb25nb29zZTtcbiAgICB9KTtcbiAgfVxuICB0cnkge1xuICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/dbConnect.ts\n");

/***/ }),

/***/ "(api)/./db/models/ShortLink.js":
/*!********************************!*\
  !*** ./db/models/ShortLink.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst shortLinkScheme = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        default: \"\"\n    },\n    url: {\n        type: String,\n        default: \"\"\n    },\n    shortUrl: {\n        type: String,\n        default: \"\"\n    }\n}, {\n    timestamps: true\n});\nconst ShortLink = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.ShortLink) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"ShortLink\", shortLinkScheme);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortLink);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvU2hvcnRMaW5rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxrQkFBa0IsSUFBSUQsd0RBQWVFLENBQ3pDO0lBQ0VDLE9BQU87UUFBRUMsTUFBTUM7UUFBUUMsU0FBUztJQUFHO0lBQ25DQyxLQUFLO1FBQUVILE1BQU1DO1FBQVFDLFNBQVM7SUFBRztJQUNqQ0UsVUFBVTtRQUFFSixNQUFNQztRQUFRQyxTQUFTO0lBQUc7QUFDeEMsR0FDQTtJQUNFRyxZQUFZO0FBQ2Q7QUFHRixNQUFNQyxZQUNKVixrRUFBNEIsSUFBSUEscURBQWNZLENBQUMsYUFBYVg7QUFFOUQsaUVBQWVTLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9ydGl0Ly4vZGIvbW9kZWxzL1Nob3J0TGluay5qcz8xYmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3Qgc2hvcnRMaW5rU2NoZW1lID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIHRpdGxlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxuICAgIHVybDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICBzaG9ydFVybDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH1cbik7XG5cbmNvbnN0IFNob3J0TGluayA9XG4gIG1vbmdvb3NlLm1vZGVsc1tcIlNob3J0TGlua1wiXSB8fCBtb25nb29zZS5tb2RlbChcIlNob3J0TGlua1wiLCBzaG9ydExpbmtTY2hlbWUpO1xuXG5leHBvcnQgZGVmYXVsdCBTaG9ydExpbms7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJzaG9ydExpbmtTY2hlbWUiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidXJsIiwic2hvcnRVcmwiLCJ0aW1lc3RhbXBzIiwiU2hvcnRMaW5rIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/models/ShortLink.js\n");

/***/ }),

/***/ "(api)/./lib/createShortURL.js":
/*!*******************************!*\
  !*** ./lib/createShortURL.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createShortURL)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction createShortURL(url) {\n    const hash = (0,crypto__WEBPACK_IMPORTED_MODULE_0__.createHmac)(\"sha256\", \"shortit\").update(url + Date.now()).digest(\"hex\");\n    return hash.slice(0, 6);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY3JlYXRlU2hvcnRVUkwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9DO0FBRXJCLFNBQVNDLGVBQWVDLEdBQUc7SUFDeEMsTUFBTUMsT0FBT0gsa0RBQVVBLENBQUMsVUFBVSxXQUMvQkksT0FBT0YsTUFBTUcsS0FBS0MsT0FDbEJDLE9BQU87SUFDVixPQUFPSixLQUFLSyxNQUFNLEdBQUc7QUFDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9ydGl0Ly4vbGliL2NyZWF0ZVNob3J0VVJMLmpzP2M1NzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlSG1hYyB9IGZyb20gJ2NyeXB0byc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNob3J0VVJMKHVybCkge1xuICBjb25zdCBoYXNoID0gY3JlYXRlSG1hYygnc2hhMjU2JywgJ3Nob3J0aXQnKVxuICAgIC51cGRhdGUodXJsICsgRGF0ZS5ub3coKSlcbiAgICAuZGlnZXN0KCdoZXgnKTtcbiAgcmV0dXJuIGhhc2guc2xpY2UoMCwgNik7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlSG1hYyIsImNyZWF0ZVNob3J0VVJMIiwidXJsIiwiaGFzaCIsInVwZGF0ZSIsIkRhdGUiLCJub3ciLCJkaWdlc3QiLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/createShortURL.js\n");

/***/ }),

/***/ "(api)/./pages/api/short-links/index.js":
/*!****************************************!*\
  !*** ./pages/api/short-links/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/dbConnect */ \"(api)/./db/dbConnect.ts\");\n/* harmony import */ var _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/db/models/ShortLink */ \"(api)/./db/models/ShortLink.js\");\n/* harmony import */ var _lib_createShortURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/createShortURL */ \"(api)/./lib/createShortURL.js\");\n\n\n\nasync function handler(req, res) {\n    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    switch(req.method){\n        case \"POST\":\n            const { title , url  } = req.body;\n            const shortUrl = (0,_lib_createShortURL__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url);\n            const shortLink = await _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n                title,\n                url,\n                shortUrl\n            });\n            res.status(201).send(shortLink);\n            break;\n        case \"GET\":\n            const shortLinks = await _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.send(shortLinks);\n            break;\n        default:\n            res.status(404).send();\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2hvcnQtbGlua3MvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QztBQUNPO0FBQ0k7QUFFbkMsZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU1MLHlEQUFTQTtJQUVmLE9BQVFJLElBQUlFO1FBQ1YsS0FBSztZQUNILE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxJQUFHLEVBQUUsR0FBR0osSUFBSUs7WUFDM0IsTUFBTUMsV0FBV1IsK0RBQWNBLENBQUNNO1lBQ2hDLE1BQU1HLFlBQVksTUFBTVYsbUVBQWdCVyxDQUFDO2dCQUN2Q0w7Z0JBQ0FDO2dCQUNBRTtZQUNGO1lBQ0FMLElBQUlRLE9BQU8sS0FBS0MsS0FBS0g7WUFDckI7UUFFRixLQUFLO1lBQ0gsTUFBTUksYUFBYSxNQUFNZCxpRUFBY2U7WUFDdkNYLElBQUlTLEtBQUtDO1lBQ1Q7UUFFRjtZQUNFVixJQUFJUSxPQUFPLEtBQUtDO1lBQ2hCO0lBQ0o7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3J0aXQvLi9wYWdlcy9hcGkvc2hvcnQtbGlua3MvaW5kZXguanM/ZTYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCJAL2RiL2RiQ29ubmVjdFwiO1xuaW1wb3J0IFNob3J0TGluayBmcm9tIFwiQC9kYi9tb2RlbHMvU2hvcnRMaW5rXCI7XG5pbXBvcnQgY3JlYXRlU2hvcnRVUkwgZnJvbSBcIkAvbGliL2NyZWF0ZVNob3J0VVJMXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgYXdhaXQgZGJDb25uZWN0KCk7XG5cbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgIGNvbnN0IHsgdGl0bGUsIHVybCB9ID0gcmVxLmJvZHk7XG4gICAgICBjb25zdCBzaG9ydFVybCA9IGNyZWF0ZVNob3J0VVJMKHVybCk7XG4gICAgICBjb25zdCBzaG9ydExpbmsgPSBhd2FpdCBTaG9ydExpbmsuY3JlYXRlKHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHVybCxcbiAgICAgICAgc2hvcnRVcmwsXG4gICAgICB9KTtcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKHNob3J0TGluayk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgIGNvbnN0IHNob3J0TGlua3MgPSBhd2FpdCBTaG9ydExpbmsuZmluZCgpO1xuICAgICAgcmVzLnNlbmQoc2hvcnRMaW5rcyk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCgpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJTaG9ydExpbmsiLCJjcmVhdGVTaG9ydFVSTCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0aXRsZSIsInVybCIsImJvZHkiLCJzaG9ydFVybCIsInNob3J0TGluayIsImNyZWF0ZSIsInN0YXR1cyIsInNlbmQiLCJzaG9ydExpbmtzIiwiZmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/short-links/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/short-links/index.js"));
module.exports = __webpack_exports__;

})();