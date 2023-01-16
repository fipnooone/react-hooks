import { Destructor } from '@/types';

export type Callback<T> = (ref: T) => Destructor;
export interface ISetRef<T> {
    (ref: T): void;
}
export interface RefObject<T> {
    current: T | null;
    set: ISetRef<T | null>;
}
