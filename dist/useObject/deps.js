var beautify = function (str) { return str && str.replaceAll(/\s+/g, '').replaceAll('\\', '+'); };
var stringify = function (deps) {
    var seen = new WeakSet();
    if (deps === null || typeof deps !== 'object')
        return deps;
    if (Array.isArray(deps))
        return JSON.stringify(deps.map(stringify));
    return beautify(JSON.stringify(deps, function (_, value) {
        if (value === null || typeof value !== 'object')
            return value;
        if (seen.has(value) || Object.keys(value).length >= 20)
            return '[Circular]';
        seen.add(value);
    }));
};
var transform = function (deps) { return deps.map(stringify); };
export { transform };
//# sourceMappingURL=deps.js.map