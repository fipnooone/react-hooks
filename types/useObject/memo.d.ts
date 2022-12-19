import { DependencyList } from './types';
export declare const useObjectMemo: <T>(factory: () => T, deps: DependencyList | undefined) => T;
