import { useEffect, useRef } from 'react';
var useEvents = function (type, callback, deps, element) {
    var handler = useRef(callback);
    useEffect(function () {
        if (!element)
            return;
        element.addEventListener(type, handler.current);
        return function () {
            return element.removeEventListener(type, handler.current);
        };
    }, deps);
};
export default useEvents;
