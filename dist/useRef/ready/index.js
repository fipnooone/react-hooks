var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useMemo, useRef, useState } from 'react';
import { useObjectEffect } from '../../useObject';
export var useRefReady = function (callback, deps) {
    if (deps === void 0) { deps = []; }
    var _a = useState(false), isReady = _a[0], setReady = _a[1];
    var callbackRef = useRef(undefined);
    var localRef = useRef(null);
    var set = function (ref) {
        if (ref === null || ref === undefined)
            return;
        localRef.current = ref;
        setReady(true);
    };
    var ref = useMemo(function () { return ({ current: ref.current, set: set }); }, [isReady]);
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
    return [ref, set];
};
//# sourceMappingURL=index.js.map