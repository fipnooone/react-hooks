import { useEffect, useRef } from 'react';
export const useEvents = (type, callback, deps, element) => {
    const handler = useRef(callback);
    useEffect(() => {
        if (!element)
            return;
        element.addEventListener(type, handler.current);
        return () => {
            return element.removeEventListener(type, handler.current);
        };
    }, deps);
};
