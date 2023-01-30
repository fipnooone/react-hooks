import { DependencyList } from 'react';

const stringify = (deps: unknown): string | unknown => {
    const seen = new WeakSet();

    if (deps === null || typeof deps !== 'object') return deps;

    if (Array.isArray(deps)) return JSON.stringify(deps.map(stringify));

    return JSON.stringify(deps, (_, value) => {
        if (typeof value !== 'object' || value === null) return value;

        if (seen.has(value) || Object.keys(value).length >= 20) return '[Circular]';

        seen.add(value);

        return value;
    });
};

const transform = (deps: DependencyList) => deps.map(stringify);

export default transform;
