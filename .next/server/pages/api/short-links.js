"use strict";
(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./db/dbConnect.ts
var dbConnect = __webpack_require__(1420);
// EXTERNAL MODULE: ./db/models/ShortLink.js
var ShortLink = __webpack_require__(7249);
;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");
;// CONCATENATED MODULE: ./lib/createShortURL.js

function createShortURL(url) {
    const hash = (0,external_crypto_namespaceObject.createHmac)("sha256", "shortit").update(url + Date.now()).digest("hex");
    return hash.slice(0, 6);
}

;// CONCATENATED MODULE: ./pages/api/short-links/index.js



async function handler(req, res) {
    await (0,dbConnect/* default */.Z)();
    switch(req.method){
        case "POST":
            const { title , url  } = req.body;
            const shortUrl = createShortURL(url);
            const shortLink = await ShortLink/* default.create */.Z.create({
                title,
                url,
                shortUrl
            });
            res.status(201).send(shortLink);
            break;
        case "GET":
            const shortLinks = await ShortLink/* default.find */.Z.find();
            res.send(shortLinks);
            break;
        default:
            res.status(404).send();
            break;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [312], () => (__webpack_exec__(616)));
module.exports = __webpack_exports__;

})();