var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useState } from 'react';
import React from 'react';
import { useObjectEffect } from '../../useObject';
var CustomRef = /** @class */ (function () {
    function CustomRef(value, callback) {
        if (value === void 0) { value = null; }
        this.current = value;
        this.callback = callback;
        return this;
    }
    CustomRef.prototype.set = function (ref) {
        if (ref === null || ref === undefined)
            return;
        this.current = ref;
        this.callback();
    };
    return CustomRef;
}());
export var useRefReady = function (callback, deps) {
    if (deps === void 0) { deps = []; }
    var _a = useState(false), isReady = _a[0], setReady = _a[1];
    var callbackRef = React.useRef(undefined);
    var localRef = new CustomRef(null, function () { return setReady(true); });
    useObjectEffect(function () {
        if (callbackRef.current === null || !callback)
            return;
        callbackRef.current = callback;
        if (!isReady || localRef.current === null)
            return;
        var cb = callbackRef.current;
        callbackRef.current = null;
        return cb(localRef.current);
    }, __spreadArray([isReady], deps, true));
};
//# sourceMappingURL=index.js.map