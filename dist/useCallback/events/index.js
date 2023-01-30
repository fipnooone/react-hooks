import { useEffect, useRef } from 'react';
const useEvents = (type, callback, deps, element) => {
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
export default useEvents;
