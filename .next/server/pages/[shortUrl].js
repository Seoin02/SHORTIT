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
exports.id = "pages/[shortUrl]";
exports.ids = ["pages/[shortUrl]"];
exports.modules = {

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F%5BshortUrl%5D&absolutePagePath=.%2Fpages%2F%5BshortUrl%5D.js&preferredRegion=!":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F%5BshortUrl%5D&absolutePagePath=.%2Fpages%2F%5BshortUrl%5D.js&preferredRegion=! ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _pages_shortUrl_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _pages_shortUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/[shortUrl].js */ \"./pages/[shortUrl].js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _pages_shortUrl_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _pages_shortUrl_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n        // Next.js Route Loader\n        \n        \n    //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci5qcz9wYWdlPSUyRiU1QnNob3J0VXJsJTVEJmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGJTVCc2hvcnRVcmwlNUQuanMmcHJlZmVycmVkUmVnaW9uPSEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFDQSxRQUE2QztBQUM3QyxRQUF1RDtBQUN2RCIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3J0aXQvP2ViNjQiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIC8vIE5leHQuanMgUm91dGUgTG9hZGVyXG4gICAgICAgIGV4cG9ydCAqIGZyb20gXCIuL3BhZ2VzL1tzaG9ydFVybF0uanNcIlxuICAgICAgICBleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vcGFnZXMvW3Nob3J0VXJsXS5qc1wiXG4gICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F%5BshortUrl%5D&absolutePagePath=.%2Fpages%2F%5BshortUrl%5D.js&preferredRegion=!\n");

/***/ }),

/***/ "./db/dbConnect.ts":
/*!*************************!*\
  !*** ./db/dbConnect.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYi9kYkNvbm5lY3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBS2hDLE1BQU1DLGNBQWNDLFFBQVFDLElBQUlGO0FBRWhDLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQ1I7QUFFSjtBQUVBLElBQUlDLFNBQVNDLE9BQU9OO0FBRXBCLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTQyxPQUFPTixXQUFXO1FBQUVPLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ3pEO0FBRUEsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxNQUFNO1FBQ2YsT0FBT0YsT0FBT0U7SUFDaEI7SUFDQSxJQUFJLENBQUNGLE9BQU9HLFNBQVM7UUFDbkIsTUFBTUUsT0FBTztZQUNYQyxnQkFBZ0I7UUFDbEI7UUFDQU4sT0FBT0csVUFBVVIsdURBQWdCWSxDQUFDWCxhQUFhUyxNQUFNRyxLQUFLLENBQUNiO1lBQ3pELE9BQU9BO1FBQ1Q7SUFDRjtJQUNBLElBQUk7UUFDRkssT0FBT0UsT0FBTyxNQUFNRixPQUFPRztJQUM3QixFQUFFLE9BQU9NLEdBQUc7UUFDVlQsT0FBT0csVUFBVTtRQUNqQixNQUFNTTtJQUNSO0lBRUEsT0FBT1QsT0FBT0U7QUFDaEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3J0aXQvLi9kYi9kYkNvbm5lY3QudHM/ZDY4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBtb25nb29zZTogYW55OyAvLyBUaGlzIG11c3QgYmUgYSBgdmFyYCBhbmQgbm90IGEgYGxldCAvIGNvbnN0YFxufVxuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJITtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXG4gICk7XG59XG5cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XG5cbmlmICghY2FjaGVkKSB7XG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XG4gIGlmIChjYWNoZWQuY29ubikge1xuICAgIHJldHVybiBjYWNoZWQuY29ubjtcbiAgfVxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICB9O1xuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigobW9uZ29vc2UpID0+IHtcbiAgICAgIHJldHVybiBtb25nb29zZTtcbiAgICB9KTtcbiAgfVxuICB0cnkge1xuICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./db/dbConnect.ts\n");

/***/ }),

/***/ "./db/models/ShortLink.js":
/*!********************************!*\
  !*** ./db/models/ShortLink.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst shortLinkScheme = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        default: \"\"\n    },\n    url: {\n        type: String,\n        default: \"\"\n    },\n    shortUrl: {\n        type: String,\n        default: \"\"\n    }\n}, {\n    timestamps: true\n});\nconst ShortLink = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.ShortLink) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"ShortLink\", shortLinkScheme);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortLink);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYi9tb2RlbHMvU2hvcnRMaW5rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxrQkFBa0IsSUFBSUQsd0RBQWVFLENBQ3pDO0lBQ0VDLE9BQU87UUFBRUMsTUFBTUM7UUFBUUMsU0FBUztJQUFHO0lBQ25DQyxLQUFLO1FBQUVILE1BQU1DO1FBQVFDLFNBQVM7SUFBRztJQUNqQ0UsVUFBVTtRQUFFSixNQUFNQztRQUFRQyxTQUFTO0lBQUc7QUFDeEMsR0FDQTtJQUNFRyxZQUFZO0FBQ2Q7QUFHRixNQUFNQyxZQUNKVixrRUFBNEIsSUFBSUEscURBQWNZLENBQUMsYUFBYVg7QUFFOUQsaUVBQWVTLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9ydGl0Ly4vZGIvbW9kZWxzL1Nob3J0TGluay5qcz8xYmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3Qgc2hvcnRMaW5rU2NoZW1lID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIHRpdGxlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxuICAgIHVybDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICBzaG9ydFVybDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH1cbik7XG5cbmNvbnN0IFNob3J0TGluayA9XG4gIG1vbmdvb3NlLm1vZGVsc1tcIlNob3J0TGlua1wiXSB8fCBtb25nb29zZS5tb2RlbChcIlNob3J0TGlua1wiLCBzaG9ydExpbmtTY2hlbWUpO1xuXG5leHBvcnQgZGVmYXVsdCBTaG9ydExpbms7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJzaG9ydExpbmtTY2hlbWUiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidXJsIiwic2hvcnRVcmwiLCJ0aW1lc3RhbXBzIiwiU2hvcnRMaW5rIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./db/models/ShortLink.js\n");

/***/ }),

/***/ "./pages/[shortUrl].js":
/*!*****************************!*\
  !*** ./pages/[shortUrl].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShortUrlPage),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/dbConnect */ \"./db/dbConnect.ts\");\n/* harmony import */ var _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/db/models/ShortLink */ \"./db/models/ShortLink.js\");\n\n\nasync function getServerSideProps(context) {\n    const { shortUrl  } = context.query;\n    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const shortLink = await _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n        shortUrl\n    });\n    if (shortLink) {\n        return {\n            redirect: {\n                destination: shortLink.url,\n                permanent: false\n            }\n        };\n    }\n    return {\n        notFound: true\n    };\n}\nfunction ShortUrlPage() {\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2hvcnRVcmxdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUM7QUFDTztBQUV2QyxlQUFlRSxtQkFBbUJDLE9BQU87SUFDOUMsTUFBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR0QsUUFBUUU7SUFDN0IsTUFBTUwseURBQVNBO0lBQ2YsTUFBTU0sWUFBWSxNQUFNTCxvRUFBaUJNLENBQUM7UUFBRUg7SUFBUztJQUNyRCxJQUFJRSxXQUFXO1FBQ2IsT0FBTztZQUNMRSxVQUFVO2dCQUNSQyxhQUFhSCxVQUFVSTtnQkFDdkJDLFdBQVc7WUFDYjtRQUNGO0lBQ0Y7SUFDQSxPQUFPO1FBQ0xDLFVBQVU7SUFDWjtBQUNGO0FBRWUsU0FBU0M7SUFDdEIsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRpdC8uL3BhZ2VzL1tzaG9ydFVybF0uanM/MjI3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCJAL2RiL2RiQ29ubmVjdFwiO1xuaW1wb3J0IFNob3J0TGluayBmcm9tIFwiQC9kYi9tb2RlbHMvU2hvcnRMaW5rXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCB7IHNob3J0VXJsIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgY29uc3Qgc2hvcnRMaW5rID0gYXdhaXQgU2hvcnRMaW5rLmZpbmRPbmUoeyBzaG9ydFVybCB9KTtcbiAgaWYgKHNob3J0TGluaykge1xuICAgIHJldHVybiB7XG4gICAgICByZWRpcmVjdDoge1xuICAgICAgICBkZXN0aW5hdGlvbjogc2hvcnRMaW5rLnVybCxcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5vdEZvdW5kOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG9ydFVybFBhZ2UoKSB7XG4gIHJldHVybiBudWxsO1xufVxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlNob3J0TGluayIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzaG9ydFVybCIsInF1ZXJ5Iiwic2hvcnRMaW5rIiwiZmluZE9uZSIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJ1cmwiLCJwZXJtYW5lbnQiLCJub3RGb3VuZCIsIlNob3J0VXJsUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[shortUrl].js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F%5BshortUrl%5D&absolutePagePath=.%2Fpages%2F%5BshortUrl%5D.js&preferredRegion=!"));
module.exports = __webpack_exports__;

})();