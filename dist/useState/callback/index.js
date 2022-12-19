import { useCallback, useEffect, useRef, useState } from 'react';
export var useCallbackState = function (initialValue) {
    if (initialValue === void 0) { initialValue = undefined; }
    var _a = useState(initialValue), state = _a[0], setState = _a[1];
    var callbackRef = useRef(undefined);
    var set = useCallback(function (value, callback) {
        setState(value);
        callbackRef.current = callback;
    }, []);
    useEffect(function () {
        if (!callbackRef.current)
            return;
        callbackRef.current(state);
        callbackRef.current = undefined;
    }, [state]);
    return [state, set];
};
//# sourceMappingURL=index.js.map