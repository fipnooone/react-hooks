import { DependencyList } from "react";

const beautify = (str: string) => str && str.replaceAll(/\s+/g, '').replaceAll('\\', '+');

const stringify = (deps: unknown): string | unknown => {
    const seen = new WeakSet();

    if (deps === null || typeof deps !== 'object') return deps;

    if (Array.isArray(deps)) return JSON.stringify(deps.map(stringify));

    return beautify(
        JSON.stringify(deps, (_, value) => {
            if (value === null || typeof value !== 'object') return value;

            if (seen.has(value) || Object.keys(value).length >= 20) return '[Circular]';

            seen.add(value);
        })
    );
};

const transform = (deps: DependencyList) => deps.map(stringify);

export { transform };
