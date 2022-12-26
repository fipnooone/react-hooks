import { DependencyList } from 'react';
import { Callback, ISetRef, Ref } from './types';
export declare const useRefReady: <T>(callback?: Callback<T> | undefined, deps?: DependencyList) => [Ref<T>, ISetRef<T>];
