import { useEffect } from 'react';
var useRefEffect = function (effect, ref, deps) {
    return useEffect(function () {
        if (!Array.isArray(ref))
            return ref.current ? effect(ref.current) : undefined;
        else if (ref.every(function (r) { return r.current !== null; }))
            return effect(ref.map(function (r) { return r.current; }));
    }, deps);
};
export default useRefEffect;
