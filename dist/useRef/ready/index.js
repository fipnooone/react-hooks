import { useState } from 'react';
import React from 'react';
import { useObjectEffect } from '../../useObject';
class CustomRef {
    constructor(value = null, callback) {
        this.current = value;
        this.callback = callback;
        this.set = this.set.bind(this);
        return this;
    }
    set(ref) {
        if (ref === null || ref === undefined)
            return;
        this.current = ref;
        this.callback();
    }
}
const useRefReady = (callback, deps = []) => {
    const [isReady, setReady] = useState(false);
    const callbackRef = React.useRef(undefined);
    const localRef = new CustomRef(null, () => setReady(true));
    useObjectEffect(() => {
        if (callbackRef.current === null || !callback)
            return;
        callbackRef.current = callback;
        if (!isReady || localRef.current === null)
            return;
        const cb = callbackRef.current;
        callbackRef.current = null;
        return cb(localRef.current);
    }, [isReady, ...deps]);
    return localRef;
};
export default useRefReady;
