import { DependencyList } from "react";
export type Effect = () => void | (() => void);
export type Hook = (effect: Effect, deps: DependencyList) => void;
