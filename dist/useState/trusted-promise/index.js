import { useCallback, useEffect, useRef, useState } from 'react';
export var useTrustedPromise = function (initialValue, initialTrust) {
    if (initialValue === void 0) { initialValue = undefined; }
    if (initialTrust === void 0) { initialTrust = true; }
    var _a = useState({ value: initialValue, isTrusted: initialTrust }), state = _a[0], setState = _a[1];
    var resolveRef = useRef(undefined);
    var set = useCallback(function (value, isTrusted) {
        if (isTrusted === void 0) { isTrusted = true; }
        setState(function (prev) { return ({
            value: value instanceof Function ? value(prev.value) : value,
            isTrusted: isTrusted,
        }); });
        return new Promise(function (resolve) {
            resolveRef.current = resolve;
        });
    }, []);
    useEffect(function () {
        if (!resolveRef.current)
            return;
        resolveRef.current(state.value);
        resolveRef.current = undefined;
    }, [state]);
    return [state.value, set, state.isTrusted];
};
//# sourceMappingURL=index.js.map