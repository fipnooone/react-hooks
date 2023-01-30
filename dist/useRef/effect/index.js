import { useEffect } from 'react';
const useRefEffect = (effect, ref, deps) => useEffect(() => {
    if (!Array.isArray(ref))
        return ref.current ? effect(ref.current) : undefined;
    else if (ref.every((r) => r.current !== null))
        return effect(ref.map((r) => r.current));
}, deps);
export default useRefEffect;
