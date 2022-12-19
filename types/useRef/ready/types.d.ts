import { Destructor } from "../../types";
export type Callback<T> = (ref: T) => Destructor;
export interface ISetRef<T> {
    (ref: T): void;
}
export interface Ref<T> {
    current: T;
    set: ISetRef<T>;
}
