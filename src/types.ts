export type StateValue<T> = T | ((value: T) => T);
export type Destructor = void | (() => void);