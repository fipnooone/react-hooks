export type DependencyList = ReadonlyArray<unknown>;
export type Effect = () => void | (() => void);
export type Hook = (effect: Effect, deps: DependencyList) => void;
