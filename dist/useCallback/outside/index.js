import useEvents from '../events';
const contains = (el, target) => (el ? el.contains(target) : false);
const useOutside = (ref, callback, deps) => {
    useEvents('click', (event) => {
        const target = event.target;
        if (!Array.isArray(ref))
            !contains(ref.current, target) && callback();
        else
            ref.every((r) => !contains(r.current, target)) && callback();
    }, deps, document);
};
export default useOutside;
