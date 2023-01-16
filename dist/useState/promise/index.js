import { useCallback, useEffect, useRef, useState } from 'react';
export var usePromiseState = function (initialValue) {
    if (initialValue === void 0) { initialValue = undefined; }
    var _a = useState(initialValue), state = _a[0], setState = _a[1];
    var resolveRef = useRef(undefined);
    var set = useCallback(function (value) {
        setState(value);
        return new Promise(function (resolve) {
            resolveRef.current = resolve;
        });
    }, []);
    useEffect(function () {
        if (!resolveRef.current)
            return;
        resolveRef.current(state);
        resolveRef.current = undefined;
    }, [state]);
    return [state, set];
};
