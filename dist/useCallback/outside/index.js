import useEvents from '../events';
var contains = function (el, target) { return (el ? el.contains(target) : false); };
var useOutside = function (ref, callback, deps) {
    useEvents('click', function (event) {
        var target = event.target;
        if (!Array.isArray(ref))
            !contains(ref.current, target) && callback();
        else
            ref.every(function (r) { return !contains(r.current, target); }) && callback();
    }, deps, document);
};
export default useOutside;
