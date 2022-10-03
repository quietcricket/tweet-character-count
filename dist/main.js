"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function TweetLength(text) {
    var _a, _b;
    // Treatment of links
    // All links are counted as 24 characters regardless length
    text = text.replace(/(https?:\/\/[^\s]+)/g, "X".repeat(24));
    // A few ranges of unicode.
    // This is not exhaustive, assuming the tweets won't use rarely used characters.
    // Korean + Chinese + Japanese (katakana, hiragana, kanji etc)
    const reCJK = /[\u3131-\uD79D\p{Unified_Ideograph}\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/gu;
    let l = text.length;
    l += (_b = (_a = text.match(reCJK)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    return l;
}
exports.default = TweetLength;
